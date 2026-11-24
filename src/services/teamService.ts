import { supabaseClient } from './queryService';

export type TeamRole = 'owner' | 'admin' | 'employee';
export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';
export interface TeamMember { user_id: string; email: string; full_name: string; title: string; department: string; role: TeamRole; active: boolean; }
export interface TeamTask { id: string; title: string; description: string; assignee_id: string; assigned_by: string; status: TaskStatus; priority: 'low' | 'normal' | 'high' | 'urgent'; due_at: string | null; progress: number; created_at: string; updated_at: string; }
export interface TeamNotification { id: string; recipient_id: string; title: string; body: string; kind: string; task_id: string | null; read_at: string | null; created_at: string; }
export interface PayrollRecord { id: string; employee_id: string; period: string; amount: number; currency: string; status: 'draft' | 'approved' | 'paid'; note: string; }
export interface WorkLog { id: string; task_id: string; employee_id: string; minutes: number; note: string; logged_at: string; }

function db() {
  if (!supabaseClient) throw new Error('Supabase is not configured.');
  return supabaseClient;
}

export async function getTeamRole(): Promise<TeamRole | 'none'> {
  const { data, error } = await db().rpc('techverse_current_role');
  if (error) throw error;
  return (data || 'none') as TeamRole | 'none';
}
export async function getCurrentUserId(): Promise<string> {
  const { data, error } = await db().auth.getUser();
  if (error || !data.user) throw new Error('Please sign in again.');
  return data.user.id;
}
export async function listMembers(): Promise<TeamMember[]> {
  const { data, error } = await db().from('company_members').select('*').order('created_at');
  if (error) throw error;
  return (data ?? []) as TeamMember[];
}
export async function listTasks(): Promise<TeamTask[]> {
  const { data, error } = await db().from('company_tasks').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as TeamTask[];
}
export async function listNotifications(): Promise<TeamNotification[]> {
  const { data, error } = await db().from('company_notifications').select('*').order('created_at', { ascending: false }).limit(50);
  if (error) throw error;
  return (data ?? []) as TeamNotification[];
}
export async function listPayroll(): Promise<PayrollRecord[]> {
  const { data, error } = await db().from('payroll_records').select('*').order('period', { ascending: false });
  if (error) throw error;
  return (data ?? []) as PayrollRecord[];
}
export async function listWorkLogs(): Promise<WorkLog[]> {
  const { data, error } = await db().from('work_logs').select('*').order('logged_at', { ascending: false }).limit(250);
  if (error) throw error;
  return (data ?? []) as WorkLog[];
}
export async function createTask(task: Pick<TeamTask, 'title' | 'description' | 'assignee_id' | 'priority' | 'due_at'>): Promise<void> {
  const { error } = await db().from('company_tasks').insert(task);
  if (error) throw error;
}
export async function updateTask(id: string, patch: Partial<Pick<TeamTask, 'status' | 'progress' | 'title' | 'description' | 'assignee_id' | 'priority' | 'due_at'>>): Promise<void> {
  const { error } = await db().from('company_tasks').update(patch).eq('id', id);
  if (error) throw error;
}
export async function createPayroll(record: Omit<PayrollRecord, 'id'>): Promise<void> {
  const { error } = await db().from('payroll_records').upsert(record, { onConflict: 'employee_id,period' });
  if (error) throw error;
}
export async function createWorkLog(task_id: string, minutes: number, note: string): Promise<void> {
  const { error } = await db().from('work_logs').insert({ task_id, minutes, note: note.trim() });
  if (error) throw error;
}
export async function createNotification(recipient_id: string, title: string, body: string): Promise<void> {
  const { error } = await db().from('company_notifications').insert({ recipient_id, title, body, kind: 'announcement' });
  if (error) throw error;
}
export async function markNotificationRead(id: string): Promise<void> {
  const { error } = await db().from('company_notifications').update({ read_at: new Date().toISOString() }).eq('id', id);
  if (error) throw error;
}
export function subscribeToTeamChanges(onChange: () => void) {
  return db().channel(`team-portal-${Math.random().toString(36).slice(2)}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'company_tasks' }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'company_notifications' }, onChange)
    .subscribe();
}
export async function signIn(email: string, password: string): Promise<void> {
  const { error } = await db().auth.signInWithPassword({ email: email.trim(), password });
  if (error) throw error;
}
export async function signOut(): Promise<void> {
  const { error } = await db().auth.signOut();
  if (error) throw error;
}
export async function setCurrentPassword(password: string): Promise<void> {
  const { error } = await db().auth.updateUser({ password });
  if (error) throw error;
}
export async function sendTeamInvite(email: string, full_name: string, title: string, department: string): Promise<void> {
  const { data: { session } } = await db().auth.getSession();
  if (!session) throw new Error('Please sign in again.');
  const { data, error } = await db().functions.invoke('team-admin', {
    body: { action: 'invite', email: email.trim(), full_name: full_name.trim(), title: title.trim(), department: department.trim() },
    headers: { Authorization: `Bearer ${session.access_token}` }
  });
  if (error) throw error;
  if (data?.error) throw new Error(data.error);
}
export async function sendTeamEmail(recipient_id: string, subject: string, message: string): Promise<boolean> {
  const { data: { session } } = await db().auth.getSession();
  if (!session) throw new Error('Please sign in again.');
  const { data, error } = await db().functions.invoke('team-admin', {
    body: { action: 'email', recipient_id, subject, message },
    headers: { Authorization: `Bearer ${session.access_token}` }
  });
  if (error) throw error;
  if (data?.error) throw new Error(data.error);
  return data?.sent === true;
}
