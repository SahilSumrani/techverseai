import React, { useCallback, useEffect, useState } from 'react';
import { Bell, CheckCircle2, Clock3, LogOut, RefreshCw, ShieldCheck, UserRound, Wallet } from 'lucide-react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import {
  getCurrentUserId, getTeamRole, listNotifications, listPayroll, listTasks,
  createWorkLog, markNotificationRead, signIn, signOut, subscribeToTeamChanges, updateTask,
  setCurrentPassword,
  type PayrollRecord, type TeamNotification, type TeamRole, type TeamTask
} from '../services/teamService';

const panel = 'rounded-2xl border border-slate-200 bg-white shadow-sm';

export const EmployeePortal: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<TeamRole | 'none' | null>(null);
  const [tasks, setTasks] = useState<TeamTask[]>([]);
  const [notifications, setNotifications] = useState<TeamNotification[]>([]);
  const [payroll, setPayroll] = useState<PayrollRecord[]>([]);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [activeTab, setActiveTab] = useState<'tasks' | 'pay' | 'updates'>('tasks');
  const [setupMode, setSetupMode] = useState(() => new URLSearchParams(window.location.search).get('setup') === '1');
  const [newPassword, setNewPassword] = useState('');

  const refresh = useCallback(async () => {
    try {
      const nextRole = await getTeamRole();
      if (nextRole === 'none') { setRole('none'); return; }
      setRole(nextRole);
      const [nextTasks, nextNotifications, nextPayroll] = await Promise.all([listTasks(), listNotifications(), listPayroll()]);
      setTasks(nextTasks); setNotifications(nextNotifications); setPayroll(nextPayroll);
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not load your workspace.'); }
  }, []);

  useEffect(() => {
    let channel: ReturnType<typeof subscribeToTeamChanges> | undefined;
    void (async () => {
      try {
        await getCurrentUserId();
        await refresh();
        channel = subscribeToTeamChanges(() => { void refresh(); });
      } catch { setRole(null); }
    })();
    return () => { if (channel) void channel.unsubscribe(); };
  }, [refresh]);

  const onLogin = async (event: React.FormEvent) => {
    event.preventDefault(); setBusy(true); setError('');
    try { await signIn(email, password); setPassword(''); await refresh(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Sign in failed.'); }
    finally { setBusy(false); }
  };
  const onLogout = async () => { await signOut(); setRole(null); setTasks([]); setNotifications([]); setPayroll([]); };
  const onSetPassword = async (event: React.FormEvent) => {
    event.preventDefault(); setBusy(true); setError('');
    try { await setCurrentPassword(newPassword); setNewPassword(''); setSetupMode(false); window.history.replaceState({}, '', '/employee'); await refresh(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not set your password.'); }
    finally { setBusy(false); }
  };
  const changeProgress = async (task: TeamTask, progress: number) => {
    const status = progress >= 100 ? 'done' : progress > 0 ? 'in_progress' : 'todo';
    try { await updateTask(task.id, { progress, status }); await refresh(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not update task.'); }
  };

  if (!role) return <div className="min-h-screen bg-slate-50 text-slate-900"><Navbar /><main className="mx-auto flex min-h-[70vh] max-w-lg items-center px-5 py-14"><form onSubmit={onLogin} className={`${panel} w-full p-7 sm:p-9`}>
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><ShieldCheck /></div>
    <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-600">TechVerse AI · Team</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">Employee sign in</h1><p className="mt-2 text-sm text-slate-500">Sign in with the account invited by your administrator.</p>
    {error && <p role="alert" className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}
    <label className="mt-6 block text-sm font-medium">Work email<input required type="email" autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500" /></label>
    <label className="mt-4 block text-sm font-medium">Password<input required type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500" /></label>
    <button disabled={busy} className="mt-6 w-full rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60">{busy ? 'Signing in…' : 'Sign in to workspace'}</button>
  </form></main><Footer /></div>;
  if (role === 'none') return <div className="min-h-screen bg-slate-50"><Navbar /><main className="mx-auto max-w-xl px-5 py-28 text-center"><ShieldCheck className="mx-auto h-12 w-12 text-amber-500" /><h1 className="mt-4 text-3xl font-semibold">Workspace access pending</h1><p className="mt-3 text-slate-600">Your account is signed in, but it is not active in the TechVerse team yet. Contact your administrator.</p><button onClick={onLogout} className="mt-6 rounded-xl border px-5 py-3">Sign out</button></main><Footer /></div>;

  if (setupMode) return <div className="min-h-screen bg-slate-50 text-slate-900"><Navbar /><main className="mx-auto flex min-h-[70vh] max-w-lg items-center px-5 py-14"><form onSubmit={onSetPassword} className={`${panel} w-full p-7 sm:p-9`}><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><ShieldCheck /></div><p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-600">Secure account setup</p><h1 className="mt-2 text-3xl font-semibold">Choose your password</h1><p className="mt-2 text-sm text-slate-500">Create a private password for your employee workspace.</p>{error&&<p role="alert" className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}<label className="mt-6 block text-sm font-medium">New password<input required minLength={10} type="password" autoComplete="new-password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500" /></label><p className="mt-2 text-xs text-slate-500">Use at least 10 characters.</p><button disabled={busy} className="mt-6 w-full rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white disabled:opacity-60">{busy?'Saving…':'Set password & continue'}</button></form></main><Footer /></div>;

  const openTasks = tasks.filter(task => task.status !== 'done');
  const totalMinutes = tasks.length;
  return <div className="min-h-screen bg-slate-50 text-slate-900">
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"><a href="/" className="flex items-center gap-3"><img src="/logo.png" alt="TechVerse AI" className="h-9 w-auto" /><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize">{role} workspace</span></a><div className="flex items-center gap-2"><button onClick={() => void refresh()} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100" aria-label="Refresh"><RefreshCw size={18} /></button><button onClick={() => void onLogout()} className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"><LogOut size={16} /> Sign out</button></div></div></header>
    <main className="mx-auto max-w-7xl px-5 py-8 sm:py-10"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-medium text-blue-600">Your workspace</p><h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">Good work starts here.</h1><p className="mt-2 text-slate-500">Your assignments, updates and pay records in one place.</p></div><div className="text-sm text-slate-500">Live updates enabled</div></div>
      <div className="mt-7 grid gap-4 sm:grid-cols-3"><div className={`${panel} p-5`}><p className="text-sm text-slate-500">Open tasks</p><p className="mt-2 text-3xl font-semibold">{openTasks.length}</p></div><div className={`${panel} p-5`}><p className="text-sm text-slate-500">Completed</p><p className="mt-2 text-3xl font-semibold">{tasks.filter(t => t.status === 'done').length}</p></div><div className={`${panel} p-5`}><p className="text-sm text-slate-500">New notifications</p><p className="mt-2 text-3xl font-semibold">{notifications.filter(n => !n.read_at).length}</p></div></div>
      <div className="mt-8 flex gap-2 overflow-auto border-b border-slate-200">{([['tasks','My tasks'],['updates','Notifications'],['pay','Pay records']] as const).map(([tab,label])=><button key={tab} onClick={()=>setActiveTab(tab)} className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium ${activeTab===tab?'border-blue-600 text-blue-700':'border-transparent text-slate-500'}`}>{label}</button>)}</div>
      {error && <div role="alert" className="mt-4 rounded-xl bg-rose-50 p-4 text-sm text-rose-700">{error}</div>}
      {activeTab==='tasks' && <section className="mt-5 grid gap-4 lg:grid-cols-2">{tasks.length===0?<div className={`${panel} col-span-full p-10 text-center`}><CheckCircle2 className="mx-auto text-slate-300"/><h2 className="mt-3 font-semibold">Nothing assigned yet</h2><p className="mt-1 text-sm text-slate-500">New work will appear here when your admin assigns it.</p></div>:tasks.map(task=><article key={task.id} className={`${panel} p-5 sm:p-6`}><div className="flex items-start justify-between gap-3"><div><span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{task.priority} priority</span><h2 className="mt-2 text-lg font-semibold">{task.title}</h2></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs capitalize text-slate-600">{task.status.replace('_',' ')}</span></div>{task.description&&<p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-600">{task.description}</p>}<div className="mt-4 flex items-center gap-2 text-xs text-slate-500"><Clock3 size={14}/>{task.due_at?`Due ${new Date(`${task.due_at}T00:00:00`).toLocaleDateString()}`:'No due date'}</div><div className="mt-5 flex items-center gap-3"><input aria-label={`Progress for ${task.title}`} type="range" min="0" max="100" step="10" value={task.progress} onChange={e=>void changeProgress(task,Number(e.target.value))} className="w-full accent-blue-600"/><span className="w-10 text-right text-sm font-medium">{task.progress}%</span></div><details className="mt-5 border-t border-slate-100 pt-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">Log time on this task</summary><form className="mt-3 grid gap-3 sm:grid-cols-[120px_1fr_auto]" onSubmit={async e=>{e.preventDefault();const form=e.currentTarget;const values=new FormData(form);try{await createWorkLog(task.id,Number(values.get('minutes')),String(values.get('note')||''));form.reset();setError('');}catch(cause){setError(cause instanceof Error?cause.message:'Could not log time.');}}}><label className="text-xs text-slate-500">Minutes<input name="minutes" required type="number" min="1" max="1440" className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800"/></label><label className="text-xs text-slate-500">Note<input name="note" maxLength={2000} placeholder="What did you work on?" className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800"/></label><button className="self-end rounded-lg bg-slate-900 px-3 py-2 text-sm text-white">Log time</button></form></details></article>)}</section>}
      {activeTab==='updates' && <section className="mt-5 space-y-3">{notifications.length===0?<div className={`${panel} p-10 text-center`}><Bell className="mx-auto text-slate-300"/><p className="mt-3 text-sm text-slate-500">You’re all caught up.</p></div>:notifications.map(n=><article key={n.id} className={`${panel} flex items-start justify-between gap-4 p-5`}><div><div className="flex items-center gap-2"><Bell size={16} className="text-blue-600"/><h2 className="font-medium">{n.title}</h2>{!n.read_at&&<span className="h-2 w-2 rounded-full bg-blue-600"/>}</div><p className="mt-2 whitespace-pre-wrap text-sm text-slate-600">{n.body}</p><p className="mt-2 text-xs text-slate-400">{new Date(n.created_at).toLocaleString()}</p></div>{!n.read_at&&<button onClick={()=>void markNotificationRead(n.id).then(refresh)} className="shrink-0 text-xs font-medium text-blue-700">Mark read</button>}</article>)}</section>}
      {activeTab==='pay' && <section className="mt-5 space-y-3">{payroll.length===0?<div className={`${panel} p-10 text-center`}><Wallet className="mx-auto text-slate-300"/><p className="mt-3 text-sm text-slate-500">No pay records are available yet.</p></div>:payroll.map(record=><article key={record.id} className={`${panel} flex items-center justify-between gap-4 p-5`}><div><p className="font-medium">{new Date(`${record.period}T00:00:00`).toLocaleDateString(undefined,{month:'long',year:'numeric'})}</p><p className="mt-1 text-sm capitalize text-slate-500">{record.status}{record.note?` · ${record.note}`:''}</p></div><p className="text-lg font-semibold">{new Intl.NumberFormat(undefined,{style:'currency',currency:record.currency}).format(Number(record.amount))}</p></article>)}</section>}
      <div className="mt-8 flex items-center gap-2 text-xs text-slate-400"><UserRound size={14}/> Employee information and records are visible according to your account permissions.</div>
    </main><Footer />
  </div>;
};
