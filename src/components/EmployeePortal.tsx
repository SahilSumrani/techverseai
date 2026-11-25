import React, { useCallback, useEffect, useState } from 'react';
import { Bell, CheckCircle2, ClipboardList, Clock3, LogOut, RefreshCw, ShieldCheck, UserRound, Wallet, WalletCards } from 'lucide-react';
import { isPasswordRecovery, needsPasswordSetup } from '../services/authCallback';
import {
  getCurrentUserId, getTeamRole, listNotifications, listPayroll, listTasks,
  createWorkLog, markNotificationRead, signIn, signOut, subscribeToTeamChanges, updateTask,
  setCurrentPassword, sendPasswordRecovery,
  type PayrollRecord, type TeamNotification, type TeamRole, type TeamTask
} from '../services/teamService';

const panel = 'rounded-2xl border border-slate-200 bg-white shadow-sm';

const WorkspaceHeader: React.FC = () => <header className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"><a href="/" className="flex items-center gap-3"><img src="/logo.png" alt="TechVerse AI" className="h-9 w-auto" /><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Team workspace</span></a><a href="/" className="text-sm text-slate-500 hover:text-slate-900">Back to website</a></div></header>;

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
  const [setupMode, setSetupMode] = useState(() => needsPasswordSetup(window.location.search, window.location.hash));
  const [recoveryMode, setRecoveryMode] = useState(() => isPasswordRecovery(window.location.search, window.location.hash));
  const [forgotMode, setForgotMode] = useState(false);
  const [recoverySent, setRecoverySent] = useState(false);

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.slice(1));
    const authError = hash.get('error_description');
    if (authError) setError(authError);
  }, []);
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
    try { await setCurrentPassword(newPassword); setNewPassword(''); setSetupMode(false); setRecoveryMode(false); window.history.replaceState({}, '', '/employee'); await refresh(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not set your password.'); }
    finally { setBusy(false); }
  };
  const onSendRecovery = async (event: React.FormEvent) => {
    event.preventDefault(); setBusy(true); setError('');
    try { await sendPasswordRecovery(email); setRecoverySent(true); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not send a password reset email.'); }
    finally { setBusy(false); }
  };
  const changeProgress = async (task: TeamTask, progress: number) => {
    const status = progress >= 100 ? 'done' : progress > 0 ? 'in_progress' : 'todo';
    try { await updateTask(task.id, { progress, status }); await refresh(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not update task.'); }
  };

  if (setupMode || recoveryMode) return <div className="min-h-screen bg-slate-50 text-slate-900 dashboard-enter"><WorkspaceHeader /><main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-lg items-center px-5 py-14"><form onSubmit={onSetPassword} className={`${panel} w-full p-7 sm:p-9`}><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><ShieldCheck /></div><p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-600">TechVerse AI · Secure account</p><h1 className="mt-2 text-3xl font-semibold">{recoveryMode ? 'Reset your password' : 'Choose your password'}</h1><p className="mt-2 text-sm text-slate-500">{recoveryMode ? 'Choose a new password for your workspace account.' : 'Create a private password for your employee workspace.'}</p>{error&&<p role="alert" className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}<label className="mt-6 block text-sm font-medium">New password<input required minLength={10} type="password" autoComplete="new-password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500" /></label><p className="mt-2 text-xs text-slate-500">Use at least 10 characters.</p><button disabled={busy} className="mt-6 w-full rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white disabled:opacity-60">{busy?'Saving…':recoveryMode?'Save new password':'Set password & continue'}</button></form></main></div>;
  if (!role) return <div className="min-h-screen bg-slate-50 text-slate-900 dashboard-enter"><WorkspaceHeader /><main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-lg items-center px-5 py-14"><form onSubmit={forgotMode ? onSendRecovery : onLogin} className={`${panel} w-full p-7 sm:p-9`}>
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><ShieldCheck /></div>
    <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-600">TechVerse AI · Team</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">{forgotMode?'Reset your password':'Employee sign in'}</h1><p className="mt-2 text-sm text-slate-500">{forgotMode?'We’ll email you a secure link to choose a new password.':'Sign in with the account invited by your administrator.'}</p>
    {recoverySent && <p role="status" className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">If that account exists, a password reset email is on its way.</p>}
    {error && <p role="alert" className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}
    <label className="mt-6 block text-sm font-medium">Work email<input required type="email" autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500" /></label>
    {!forgotMode && <label className="mt-4 block text-sm font-medium">Password<input required type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500" /></label>}
    <button disabled={busy} className="mt-6 w-full rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60">{busy ? 'Please wait…' : forgotMode?'Send reset link':'Sign in to workspace'}</button>
    <button type="button" onClick={()=>{setForgotMode(!forgotMode);setRecoverySent(false);setError('');}} className="mt-4 w-full text-sm font-medium text-blue-700">{forgotMode?'Back to sign in':'Forgot password?'}</button>
  </form></main></div>;
  if (role === 'none') return <div className="min-h-screen bg-slate-50 dashboard-enter"><WorkspaceHeader /><main className="mx-auto min-h-[calc(100vh-73px)] max-w-xl px-5 py-28 text-center"><ShieldCheck className="mx-auto h-12 w-12 text-amber-500" /><h1 className="mt-4 text-3xl font-semibold">Workspace access pending</h1><p className="mt-3 text-slate-600">Your account is signed in, but it is not active in the TechVerse team yet. Contact your administrator.</p><button onClick={onLogout} className="mt-6 rounded-xl border px-5 py-3">Sign out</button></main></div>;

  if (setupMode) return <div className="min-h-screen bg-slate-50 text-slate-900 dashboard-enter"><WorkspaceHeader /><main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-lg items-center px-5 py-14"><form onSubmit={onSetPassword} className={`${panel} w-full p-7 sm:p-9`}><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><ShieldCheck /></div><p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-600">Secure account setup</p><h1 className="mt-2 text-3xl font-semibold">Choose your password</h1><p className="mt-2 text-sm text-slate-500">Create a private password for your employee workspace.</p>{error&&<p role="alert" className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}<label className="mt-6 block text-sm font-medium">New password<input required minLength={10} type="password" autoComplete="new-password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500" /></label><p className="mt-2 text-xs text-slate-500">Use at least 10 characters.</p><button disabled={busy} className="mt-6 w-full rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white disabled:opacity-60">{busy?'Saving…':'Set password & continue'}</button></form></main></div>;

  const openTasks = tasks.filter(task => task.status !== 'done');
  const taskStatusCounts = [
    { label: 'To do', count: tasks.filter(task => task.status === 'todo').length, tone: 'bg-slate-400' },
    { label: 'In progress', count: tasks.filter(task => task.status === 'in_progress').length, tone: 'bg-blue-600' },
    { label: 'Completed', count: tasks.filter(task => task.status === 'done').length, tone: 'bg-emerald-600' },
  ];
  return <div className="min-h-screen bg-slate-50 text-slate-900 dashboard-enter lg:pl-[264px]">
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[264px] flex-col border-r border-slate-200 bg-white lg:flex"><a href="/" className="flex h-[78px] items-center gap-3 border-b border-slate-100 px-6"><img src="/logo.png" alt="TechVerse AI" className="h-10 w-10 rounded-xl border border-slate-100 bg-white p-1"/><span className="text-sm font-semibold tracking-tight text-slate-900">TechVerse AI<span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[.16em] text-slate-400">Team workspace</span></span></a><div className="px-5 pt-6"><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-slate-400">My workspace</p><span className="mt-3 inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-emerald-700">Employee account</span></div><nav aria-label="Employee navigation" className="mt-5 flex-1 space-y-1 px-3">{([['tasks','My tasks',ClipboardList],['updates','Notifications',Bell],['pay','Pay records',WalletCards]] as const).map(([key,label,Icon])=><button key={key} onClick={()=>setActiveTab(key)} aria-current={activeTab===key?'page':undefined} className={`group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm font-medium transition-all ${activeTab===key?'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100':'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}><Icon className={`h-[18px] w-[18px] ${activeTab===key?'text-blue-600':'text-slate-400 group-hover:text-slate-600'}`}/>{label}{key==='updates'&&notifications.filter(n=>!n.read_at).length>0&&<span className="ml-auto rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold text-white">{notifications.filter(n=>!n.read_at).length}</span>}</button>)}</nav><div className="space-y-2 border-t border-slate-100 p-4"><a href="/" className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50">Back to website</a><div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">{email.slice(0,1).toUpperCase()||'T'}</span><div className="min-w-0"><p className="truncate text-xs font-semibold text-slate-800">{email||'Team member'}</p><p className="text-[10px] capitalize text-slate-500">{role} account</p></div></div></div></aside>
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-xl sm:px-7"><div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between"><div className="min-w-0"><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-blue-600 lg:hidden">TechVerse AI</p><h1 className="truncate text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{activeTab==='tasks'?'My tasks':activeTab==='updates'?'Notifications':'Pay records'}</h1></div><div className="flex items-center gap-2"><span className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:flex"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"/>Live updates</span><button onClick={() => void refresh()} className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm hover:bg-slate-50" aria-label="Refresh"><RefreshCw size={18} /></button><button onClick={() => void onLogout()} className="flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"><LogOut size={16} /><span className="hidden sm:inline">Sign out</span></button></div></div></header>
    <nav aria-label="Employee navigation" className="border-b border-slate-200 bg-white px-3 py-2 lg:hidden"><div className="flex gap-1 overflow-x-auto">{([['tasks','My tasks',ClipboardList],['updates','Notifications',Bell],['pay','Pay records',WalletCards]] as const).map(([key,label,Icon])=><button key={key} onClick={()=>setActiveTab(key)} aria-current={activeTab===key?'page':undefined} className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${activeTab===key?'bg-blue-50 text-blue-700':'text-slate-500 hover:bg-slate-50'}`}><Icon className="h-4 w-4"/>{label}</button>)}</div></nav>
    <main className="mx-auto max-w-[1500px] px-5 py-8 sm:py-10"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-medium text-blue-600">Your workspace</p><h2 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">Good work starts here.</h2><p className="mt-2 text-slate-500">Your assignments, updates and pay records in one place.</p></div><div className="text-sm text-slate-500">Live updates enabled</div></div>
      <div className="mt-7 grid gap-4 sm:grid-cols-3"><div className={`${panel} p-5`}><p className="text-sm text-slate-500">Open tasks</p><p className="mt-2 text-3xl font-semibold">{openTasks.length}</p></div><div className={`${panel} p-5`}><p className="text-sm text-slate-500">Completed</p><p className="mt-2 text-3xl font-semibold">{tasks.filter(t => t.status === 'done').length}</p></div><div className={`${panel} p-5`}><p className="text-sm text-slate-500">New notifications</p><p className="mt-2 text-3xl font-semibold">{notifications.filter(n => !n.read_at).length}</p></div></div>
      <section className={`${panel} mt-5 p-5 sm:p-6`} aria-label="Task progress overview"><div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-semibold">Task progress</h2><p className="mt-1 text-sm text-slate-500">A live view of your current assignments.</p></div><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{tasks.length} total</span></div><div className="mt-5 grid gap-4 sm:grid-cols-3">{taskStatusCounts.map(item=><div key={item.label}><div className="flex justify-between text-sm"><span className="text-slate-600">{item.label}</span><span className="font-medium">{item.count}</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className={`dashboard-chart-bar h-full rounded-full ${item.tone}`} style={{width:`${tasks.length ? (item.count/tasks.length)*100 : 0}%`}} /></div></div>)}</div></section>
      <div className="mt-8 flex gap-2 overflow-auto border-b border-slate-200">{([['tasks','My tasks'],['updates','Notifications'],['pay','Pay records']] as const).map(([tab,label])=><button key={tab} onClick={()=>setActiveTab(tab)} className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium ${activeTab===tab?'border-blue-600 text-blue-700':'border-transparent text-slate-500'}`}>{label}</button>)}</div>
      {error && <div role="alert" className="mt-4 rounded-xl bg-rose-50 p-4 text-sm text-rose-700">{error}</div>}
      {activeTab==='tasks' && <section className="mt-5 grid gap-4 lg:grid-cols-2">{tasks.length===0?<div className={`${panel} col-span-full p-10 text-center`}><CheckCircle2 className="mx-auto text-slate-300"/><h2 className="mt-3 font-semibold">Nothing assigned yet</h2><p className="mt-1 text-sm text-slate-500">New work will appear here when your admin assigns it.</p></div>:tasks.map(task=><article key={task.id} className={`${panel} p-5 sm:p-6`}><div className="flex items-start justify-between gap-3"><div><span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{task.priority} priority</span><h2 className="mt-2 text-lg font-semibold">{task.title}</h2></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs capitalize text-slate-600">{task.status.replace('_',' ')}</span></div>{task.description&&<p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-600">{task.description}</p>}<div className="mt-4 flex items-center gap-2 text-xs text-slate-500"><Clock3 size={14}/>{task.due_at?`Due ${new Date(`${task.due_at}T00:00:00`).toLocaleDateString()}`:'No due date'}</div><div className="mt-5 flex items-center gap-3"><input aria-label={`Progress for ${task.title}`} type="range" min="0" max="100" step="10" value={task.progress} onChange={e=>void changeProgress(task,Number(e.target.value))} className="w-full accent-blue-600"/><span className="w-10 text-right text-sm font-medium">{task.progress}%</span></div><details className="mt-5 border-t border-slate-100 pt-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">Log time on this task</summary><form className="mt-3 grid gap-3 sm:grid-cols-[120px_1fr_auto]" onSubmit={async e=>{e.preventDefault();const form=e.currentTarget;const values=new FormData(form);try{await createWorkLog(task.id,Number(values.get('minutes')),String(values.get('note')||''));form.reset();setError('');}catch(cause){setError(cause instanceof Error?cause.message:'Could not log time.');}}}><label className="text-xs text-slate-500">Minutes<input name="minutes" required type="number" min="1" max="1440" className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800"/></label><label className="text-xs text-slate-500">Note<input name="note" maxLength={2000} placeholder="What did you work on?" className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800"/></label><button className="self-end rounded-lg bg-slate-900 px-3 py-2 text-sm text-white">Log time</button></form></details></article>)}</section>}
      {activeTab==='updates' && <section className="mt-5 space-y-3">{notifications.length===0?<div className={`${panel} p-10 text-center`}><Bell className="mx-auto text-slate-300"/><p className="mt-3 text-sm text-slate-500">You’re all caught up.</p></div>:notifications.map(n=><article key={n.id} className={`${panel} flex items-start justify-between gap-4 p-5`}><div><div className="flex items-center gap-2"><Bell size={16} className="text-blue-600"/><h2 className="font-medium">{n.title}</h2>{!n.read_at&&<span className="h-2 w-2 rounded-full bg-blue-600"/>}</div><p className="mt-2 whitespace-pre-wrap text-sm text-slate-600">{n.body}</p><p className="mt-2 text-xs text-slate-400">{new Date(n.created_at).toLocaleString()}</p></div>{!n.read_at&&<button onClick={()=>void markNotificationRead(n.id).then(refresh)} className="shrink-0 text-xs font-medium text-blue-700">Mark read</button>}</article>)}</section>}
      {activeTab==='pay' && <section className="mt-5 space-y-3">{payroll.length===0?<div className={`${panel} p-10 text-center`}><Wallet className="mx-auto text-slate-300"/><p className="mt-3 text-sm text-slate-500">No pay records are available yet.</p></div>:payroll.map(record=><article key={record.id} className={`${panel} flex items-center justify-between gap-4 p-5`}><div><p className="font-medium">{new Date(`${record.period}T00:00:00`).toLocaleDateString(undefined,{month:'long',year:'numeric'})}</p><p className="mt-1 text-sm capitalize text-slate-500">{record.status}{record.note?` · ${record.note}`:''}</p></div><p className="text-lg font-semibold">{new Intl.NumberFormat(undefined,{style:'currency',currency:record.currency}).format(Number(record.amount))}</p></article>)}</section>}
      <div className="mt-8 flex items-center gap-2 text-xs text-slate-400"><UserRound size={14}/> Employee information and records are visible according to your account permissions.</div>
    </main>
  </div>;
};
