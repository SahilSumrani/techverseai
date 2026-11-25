import React, { useState, useEffect } from 'react';
import {
  getStoredQueries,
  updateQueryStatus,
  deleteQuery,
  isAuthenticated,
  loginAdminSecure,
  logoutAdmin,
  ContactQuery
} from '../services/queryService';
import {
  Lock,
  LogOut,
  Trash2,
  CheckCircle,
  Clock,
  MessageSquare,
  Search,
  Filter,
  RefreshCw,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import {
  createNotification, createPayroll, createTask, getTeamRole, listMembers, listNotifications,
  listPayroll, listTasks, listWorkLogs, sendTeamInvite, signOut as signOutTeam, subscribeToTeamChanges,
  sendTeamEmail, type PayrollRecord, type TeamMember, type TeamNotification, type TeamRole, type TeamTask, type WorkLog
} from '../services/teamService';

export const AdminPage: React.FC = () => {
  const [authed, setAuthed] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [queries, setQueries] = useState<ContactQuery[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedQuery, setSelectedQuery] = useState<ContactQuery | null>(null);
  const [teamRole, setTeamRole] = useState<TeamRole | null>(null);
  const [tab, setTab] = useState<'overview' | 'leads' | 'team' | 'tasks' | 'payroll'>('overview');
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [tasks, setTasks] = useState<TeamTask[]>([]);
  const [payroll, setPayroll] = useState<PayrollRecord[]>([]);
  const [logs, setLogs] = useState<WorkLog[]>([]);
  const [notifications, setNotifications] = useState<TeamNotification[]>([]);
  const [teamBusy, setTeamBusy] = useState(false);
  const [teamMessage, setTeamMessage] = useState('');
  const [inviteForm, setInviteForm] = useState({ email: '', full_name: '', title: '', department: '' });
  const [taskForm, setTaskForm] = useState({ title: '', description: '', assignee_id: '', priority: 'normal' as TeamTask['priority'], due_at: '' });
  const [payForm, setPayForm] = useState({ employee_id: '', period: new Date().toISOString().slice(0, 7) + '-01', amount: '', status: 'draft' as PayrollRecord['status'], note: '' });
  const [noticeForm, setNoticeForm] = useState({ recipient_id: '', title: '', body: '' });

  const refreshTeam = async () => {
    const [nextRole, nextMembers, nextTasks, nextPayroll, nextLogs, nextNotifications] = await Promise.all([
      getTeamRole(), listMembers(), listTasks(), listPayroll(), listWorkLogs(), listNotifications()
    ]);
    if (nextRole === 'none' || nextRole === 'employee') throw new Error('This account is not an administrator.');
    setTeamRole(nextRole); setMembers(nextMembers); setTasks(nextTasks); setPayroll(nextPayroll); setLogs(nextLogs); setNotifications(nextNotifications);
  };

  useEffect(() => {
    let active = true;
    let teamChannel: ReturnType<typeof subscribeToTeamChanges> | undefined;

    const loadAdminSession = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (!active) return;
        setAuthed(authenticated);
        if (authenticated) {
          setQueries(await getStoredQueries());
          try {
            await refreshTeam();
            teamChannel = subscribeToTeamChanges(() => { void refreshTeam().catch(() => undefined); });
          } catch (teamError) { console.error('Could not load team workspace. Run the team portal SQL migration.', teamError); }
        }
      } catch (error) {
        console.error('Could not load the admin session:', error);
        if (active) setLoginError('Admin service is unavailable. Please try again later.');
      }
    };

    void loadAdminSession();
    return () => { active = false; if (teamChannel) void teamChannel.unsubscribe(); };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const success = await loginAdminSecure(username, password);
      if (!success) {
        setLoginError('Invalid Username or Password! Access Denied.');
        return;
      }

      const storedQueries = await getStoredQueries();
      setAuthed(true);
      setLoginError('');
      setPassword('');
      setUsername('');
      setQueries(storedQueries);
      try { await refreshTeam(); } catch (teamError) { console.error('Could not load team workspace. Run the team portal SQL migration.', teamError); }
    } catch (error) {
      console.error('Admin sign in failed:', error);
      setLoginError('Admin service is unavailable. Please try again later.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOutTeam();
    } catch (error) {
      console.error('Admin sign out failed:', error);
    }
    setAuthed(false);
    setSelectedQuery(null);
  };

  const handleStatusChange = async (id: string, status: 'new' | 'contacted' | 'resolved') => {
    try {
      const updated = await updateQueryStatus(id, status);
      setQueries(updated);
      if (selectedQuery && selectedQuery.id === id) {
        setSelectedQuery({ ...selectedQuery, status });
      }
    } catch (error) {
      console.error('Could not update the lead status:', error);
      window.alert('Could not update this inquiry. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this query?')) {
      try {
        const updated = await deleteQuery(id);
        setQueries(updated);
        if (selectedQuery && selectedQuery.id === id) {
          setSelectedQuery(null);
        }
      } catch (error) {
        console.error('Could not delete the lead:', error);
        window.alert('Could not delete this inquiry. Please try again.');
      }
    }
  };

  const refreshQueries = async () => {
    try {
      setQueries(await getStoredQueries());
    } catch (error) {
      console.error('Could not refresh inquiries:', error);
      window.alert('Could not refresh inquiries. Please try again.');
    }
  };

  const filteredQueries = queries.filter((q) => {
    const matchesSearch =
      q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.phone.includes(searchTerm) ||
      q.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || q.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const workload = members.filter((member) => member.active && member.role === 'employee').map((member) => ({
    name: member.full_name,
    openTasks: tasks.filter((task) => task.assignee_id === member.user_id && task.status !== 'done').length,
    hours: logs.filter((log) => log.employee_id === member.user_id).reduce((total, log) => total + log.minutes, 0) / 60,
  }));
  const maxOpenTasks = Math.max(1, ...workload.map((person) => person.openTasks));
  const taskStages = [
    { label: 'To do', count: tasks.filter((task) => task.status === 'todo').length, tone: 'bg-slate-400' },
    { label: 'In progress', count: tasks.filter((task) => task.status === 'in_progress').length, tone: 'bg-blue-600' },
    { label: 'In review', count: tasks.filter((task) => task.status === 'review').length, tone: 'bg-violet-500' },
    { label: 'Completed', count: tasks.filter((task) => task.status === 'done').length, tone: 'bg-emerald-600' },
  ];

  // Login Screen
  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-poppins selection:bg-blue-100 selection:text-blue-900 dashboard-enter">
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            {/* Glow accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Lock className="w-8 h-8" />
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2" style={{ fontFamily: 'Matter, sans-serif' }}>
                Admin Security Portal
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Enter your security credentials to access customer inquiries dashboard.
              </p>

              {loginError && (
                <div className="mb-5 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-medium">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Admin Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authenticate &amp; Access Dashboard</span>
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Techverse Encrypted Admin System
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // Admin Dashboard Screen
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-poppins selection:bg-blue-100 selection:text-blue-900 dashboard-enter">
      
      {/* Custom Admin Nav Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <a href="/">
              <img src="/logo.png" alt="Techverse" className="h-10 w-auto bg-white/90 rounded-lg p-1" />
            </a>
            <span className="bg-blue-500/10 border border-blue-500/30 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Admin Portal
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={refreshQueries}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors flex items-center gap-1.5 text-xs"
              title="Refresh Queries"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs flex items-center gap-2 shadow-sm transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="border-b border-slate-200 bg-white px-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto py-3">
          {([['overview','Overview'], ['leads','Leads'], ['team','Team'], ['tasks','Tasks'], ['payroll','Payroll']] as const).map(([key,label]) => (
            <button key={key} onClick={() => setTab(key)} className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${tab === key ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>{label}</button>
          ))}
          <a href="/employee" className="ml-auto shrink-0 rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">Employee portal ↗</a>
        </div>
      </nav>

      {tab !== 'leads' && (
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-7 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-700">Company workspace</p><h1 className="mt-1 text-3xl font-semibold text-slate-900">{tab === 'overview' ? 'Team overview' : tab === 'team' ? 'People & access' : tab === 'tasks' ? 'Work management' : 'Payroll records'}</h1><p className="mt-2 text-sm text-slate-500">{tab === 'overview' ? 'A live snapshot of team capacity and assigned work.' : 'Manage active staff, assignments, workload and private salary records.'}</p></div>
            <button onClick={() => { setTeamBusy(true); void refreshTeam().then(()=>setTeamMessage('Workspace refreshed.')).catch(e=>setTeamMessage(e instanceof Error?e.message:'Refresh failed.')).finally(()=>setTeamBusy(false)); }} className="flex items-center gap-2 self-start rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700"><RefreshCw className={`h-4 w-4 ${teamBusy?'animate-spin':''}`} /> Refresh</button>
          </div>
          {teamMessage && <div role="status" className="mb-5 rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800">{teamMessage}</div>}
          {!teamRole && <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">Apply <code>supabase/techverse_team_portal.sql</code> in Supabase SQL Editor to enable team tools. Admin login and leads remain available.</div>}
          {teamRole && <>
            <section className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{[
              ['Active team', members.filter(m=>m.active).length], ['Open work', tasks.filter(t=>t.status!=='done').length], ['Completed tasks', tasks.filter(t=>t.status==='done').length], ['Unread updates', notifications.filter(n=>!n.read_at).length]
            ].map(([label,value])=><div key={label} className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-3xl font-semibold text-slate-900">{value}</p></div>)}</section>
            {tab === 'overview' && <section className="mb-6 grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="text-lg font-semibold text-slate-900">Team workload</h2><p className="mt-1 text-sm text-slate-500">Open assignments and logged hours by teammate.</p></div><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Live data</span></div>
                {workload.length ? <div className="mt-6 space-y-5">{workload.map(person=><div key={person.name}><div className="flex items-center justify-between gap-3 text-sm"><span className="font-medium text-slate-800">{person.name}</span><span className="text-slate-500">{person.openTasks} open · {person.hours.toFixed(1)} hrs</span></div><div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="dashboard-chart-bar h-full rounded-full bg-blue-600" style={{width:`${person.openTasks ? Math.max(6, person.openTasks / maxOpenTasks * 100) : 0}%`}} /></div></div>)}</div> : <div className="mt-6 rounded-xl bg-slate-50 px-4 py-10 text-center"><p className="font-medium text-slate-700">No active teammates yet</p><p className="mt-1 text-sm text-slate-500">Team activity will appear here when people join and receive assignments.</p></div>}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><h2 className="text-lg font-semibold text-slate-900">Work status</h2><p className="mt-1 text-sm text-slate-500">Current task distribution.</p><div className="mt-6 space-y-5">{taskStages.map(stage=><div key={stage.label}><div className="flex justify-between text-sm"><span className="text-slate-600">{stage.label}</span><span className="font-medium text-slate-800">{stage.count}</span></div><div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100"><div className={`dashboard-chart-bar h-full rounded-full ${stage.tone}`} style={{width:`${tasks.length ? stage.count / tasks.length * 100 : 0}%`}} /></div></div>)}</div>{tasks.length === 0 && <p className="mt-5 text-xs text-slate-400">Task bars will animate as assignments are added.</p>}</div>
            </section>}
            {tab === 'team' && <div className="grid gap-5 xl:grid-cols-[.85fr_1.15fr]">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <form onSubmit={async e=>{e.preventDefault();setTeamBusy(true);setTeamMessage('');try{await sendTeamInvite(inviteForm.email,inviteForm.full_name,inviteForm.title,inviteForm.department);setInviteForm({email:'',full_name:'',title:'',department:''});setTeamMessage('Secure account invitation sent. The employee sets their own password from the link.');await refreshTeam();}catch(err){setTeamMessage(err instanceof Error?err.message:'Invitation failed. Check the server function and email provider setup.');}finally{setTeamBusy(false);}}}>
                <h2 className="text-lg font-semibold text-slate-900">Invite a teammate</h2><p className="mt-1 text-sm text-slate-500">We send a secure account setup link; no password is shared by email.</p>
                {(['full_name','email','title','department'] as const).map(field=><label key={field} className="mt-4 block text-xs font-medium capitalize text-slate-600">{field.replace('_',' ')}<input required={field==='full_name'||field==='email'} type={field==='email'?'email':'text'} value={inviteForm[field]} onChange={e=>setInviteForm({...inviteForm,[field]:e.target.value})} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500" /></label>)}
                <button disabled={teamBusy} className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white disabled:opacity-50">Send invite</button>
                </form>
                <form className="mt-6 border-t border-slate-200 pt-5" onSubmit={async e=>{e.preventDefault();setTeamBusy(true);try{await createNotification(noticeForm.recipient_id,noticeForm.title,noticeForm.body);let emailSent=false;try{emailSent=await sendTeamEmail(noticeForm.recipient_id,noticeForm.title,noticeForm.body);}catch(emailError){console.error('Could not email employee update:',emailError);}setNoticeForm({recipient_id:'',title:'',body:''});setTeamMessage(emailSent?'In-app notification and email sent.':'In-app notification sent. Email needs verified Resend setup (RESEND_API_KEY and EMAIL_FROM).');await refreshTeam();}catch(err){setTeamMessage(err instanceof Error?err.message:'Could not send update.');}finally{setTeamBusy(false);}}}>
                  <h3 className="font-medium text-slate-900">Send an in-app update</h3><select required value={noticeForm.recipient_id} onChange={e=>setNoticeForm({...noticeForm,recipient_id:e.target.value})} className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"><option value="">Choose a teammate</option>{members.filter(m=>m.active&&m.role==='employee').map(m=><option key={m.user_id} value={m.user_id}>{m.full_name} · {m.email}</option>)}</select><input required placeholder="Title" value={noticeForm.title} onChange={e=>setNoticeForm({...noticeForm,title:e.target.value})} className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"/><textarea required placeholder="Message" rows={3} value={noticeForm.body} onChange={e=>setNoticeForm({...noticeForm,body:e.target.value})} className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"/><button className="mt-3 rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900">Send notification</button>
                </form>
              </div>
              <div className="space-y-3">{members.map(member=><article key={member.user_id} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-semibold text-slate-900">{member.full_name}</h3><p className="mt-1 text-sm text-slate-500">{member.email}</p><p className="mt-2 text-xs text-slate-500">{[member.title,member.department].filter(Boolean).join(' · ')||'Role not set'}</p></div><span className="rounded-full bg-slate-50 px-3 py-1 text-xs capitalize text-slate-600">{member.role} · {member.active?'active':'inactive'}</span></div><div className="mt-4 flex gap-4 border-t border-slate-200 pt-3 text-xs text-slate-500"><span>{tasks.filter(t=>t.assignee_id===member.user_id&&t.status!=='done').length} open assignments</span><span>{logs.filter(l=>l.employee_id===member.user_id).reduce((s,l)=>s+l.minutes,0)/60} hours logged</span><a href={`mailto:${member.email}`} className="ml-auto text-blue-700">Email</a></div></article>)}{members.length===0&&<div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">No team members have joined yet.</div>}</div>
            </div>}
            {tab === 'tasks' && <div className="grid gap-5 xl:grid-cols-[.8fr_1.2fr]">
              <form onSubmit={async e=>{e.preventDefault();setTeamBusy(true);try{await createTask({...taskForm,due_at:taskForm.due_at||null});let emailSent=false;try{emailSent=await sendTeamEmail(taskForm.assignee_id,`New task: ${taskForm.title}`,`${taskForm.description||'A new task has been assigned to you.'}${taskForm.due_at?`\nDue date: ${taskForm.due_at}`:''}\nOpen your workspace: ${window.location.origin}/employee`);}catch(emailError){console.error('Could not email task assignment:',emailError);}setTaskForm({title:'',description:'',assignee_id:'',priority:'normal',due_at:''});setTeamMessage(emailSent?'Task assigned; employee received an in-app alert and email.':'Task assigned; in-app alert is ready. Email requires verified Resend configuration.');await refreshTeam();}catch(err){setTeamMessage(err instanceof Error?err.message:'Could not assign task.');}finally{setTeamBusy(false);}}} className="h-fit rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><h2 className="text-lg font-semibold text-slate-900">Assign work</h2><input required placeholder="Task name" value={taskForm.title} onChange={e=>setTaskForm({...taskForm,title:e.target.value})} className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"/><textarea placeholder="What needs to be done?" rows={4} value={taskForm.description} onChange={e=>setTaskForm({...taskForm,description:e.target.value})} className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"/><select required value={taskForm.assignee_id} onChange={e=>setTaskForm({...taskForm,assignee_id:e.target.value})} className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"><option value="">Assign to</option>{members.filter(m=>m.active&&m.role==='employee').map(m=><option key={m.user_id} value={m.user_id}>{m.full_name}</option>)}</select><div className="mt-3 grid grid-cols-2 gap-3"><select value={taskForm.priority} onChange={e=>setTaskForm({...taskForm,priority:e.target.value as TeamTask['priority']})} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"><option value="low">Low priority</option><option value="normal">Normal priority</option><option value="high">High priority</option><option value="urgent">Urgent</option></select><input type="date" value={taskForm.due_at} onChange={e=>setTaskForm({...taskForm,due_at:e.target.value})} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"/></div><button disabled={teamBusy} className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white disabled:opacity-50">Assign task</button></form>
              <div className="space-y-3">{tasks.map(task=><article key={task.id} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex flex-wrap justify-between gap-2"><div><p className="text-xs font-medium uppercase tracking-wider text-blue-700">{members.find(m=>m.user_id===task.assignee_id)?.full_name||'Former member'}</p><h3 className="mt-1 font-semibold text-slate-900">{task.title}</h3></div><span className="text-xs capitalize text-slate-500">{task.priority} · {task.status.replace('_',' ')}</span></div>{task.description&&<p className="mt-2 text-sm text-slate-500">{task.description}</p>}<div className="mt-4 flex items-center gap-3"><div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-50"><div className="h-full rounded-full bg-blue-500" style={{width:`${task.progress}%`}}/></div><span className="text-xs text-slate-500">{task.progress}%</span>{task.due_at&&<span className="text-xs text-slate-500">Due {task.due_at}</span>}</div></article>)}{tasks.length===0&&<div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">No assignments yet.</div>}</div>
            </div>}
            {tab === 'payroll' && <div className="grid gap-5 xl:grid-cols-[.8fr_1.2fr]">
              <form onSubmit={async e=>{e.preventDefault();setTeamBusy(true);try{await createPayroll({...payForm,amount:Number(payForm.amount),currency:'INR'});setTeamMessage('Salary record saved. It is visible only to managers and that employee.');await refreshTeam();}catch(err){setTeamMessage(err instanceof Error?err.message:'Could not save payroll record.');}finally{setTeamBusy(false);}}} className="h-fit rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><h2 className="text-lg font-semibold text-slate-900">Add salary record</h2><select required value={payForm.employee_id} onChange={e=>setPayForm({...payForm,employee_id:e.target.value})} className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"><option value="">Select employee</option>{members.filter(m=>m.active&&m.role==='employee').map(m=><option key={m.user_id} value={m.user_id}>{m.full_name}</option>)}</select><label className="mt-3 block text-xs text-slate-500">Salary month<input required type="month" value={payForm.period.slice(0,7)} onChange={e=>setPayForm({...payForm,period:`${e.target.value}-01`})} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"/></label><label className="mt-3 block text-xs text-slate-500">Amount (INR)<input required min="0" step="0.01" type="number" value={payForm.amount} onChange={e=>setPayForm({...payForm,amount:e.target.value})} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"/></label><select value={payForm.status} onChange={e=>setPayForm({...payForm,status:e.target.value as PayrollRecord['status']})} className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"><option value="draft">Draft</option><option value="approved">Approved</option><option value="paid">Marked paid</option></select><textarea placeholder="Private note (optional)" value={payForm.note} onChange={e=>setPayForm({...payForm,note:e.target.value})} className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"/><button className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white">Save record</button><p className="mt-3 text-xs text-slate-500">Records only: this does not transfer money or file taxes.</p></form>
              <div className="space-y-3">{payroll.map(record=><article key={record.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5"><div><p className="font-medium text-slate-900">{members.find(m=>m.user_id===record.employee_id)?.full_name||'Employee'}</p><p className="mt-1 text-sm text-slate-500">{record.period.slice(0,7)} · {record.status}{record.note?` · ${record.note}`:''}</p></div><strong className="text-lg text-slate-900">₹{Number(record.amount).toLocaleString('en-IN')}</strong></article>)}{payroll.length===0&&<div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">No salary records yet.</div>}</div>
            </div>}
          </>}
        </main>
      )}

      {/* Main Admin Dashboard Body */}
      {tab === 'leads' && <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Header & Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'Matter, sans-serif' }}>
              Customer Queries &amp; Leads
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Manage and track incoming website leads from Contact forms and Prebuilt SaaS pages.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-center">
              <span className="text-xs text-slate-500 block">Total</span>
              <span className="text-lg font-bold text-slate-900">{queries.length}</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-center">
              <span className="text-xs text-amber-700 block">New</span>
              <span className="text-lg font-bold text-amber-700">
                {queries.filter((q) => q.status === 'new').length}
              </span>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-center">
              <span className="text-xs text-emerald-700 block">Resolved</span>
              <span className="text-lg font-bold text-emerald-700">
                {queries.filter((q) => q.status === 'resolved').length}
              </span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, email, phone, message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs text-slate-500 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {['all', 'new', 'contacted', 'resolved'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium capitalize shrink-0 transition-all ${
                  statusFilter === st
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Layout Grid: Queries List + Query Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Queries List */}
          <div className="lg:col-span-7 space-y-3">
            {filteredQueries.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 text-slate-700" />
                <h3 className="text-lg font-medium text-slate-900 mb-1">No Queries Found</h3>
                <p className="text-xs">No customer inquiries match your current search or filter criteria.</p>
              </div>
            ) : (
              filteredQueries.map((q) => {
                const isSelected = selectedQuery?.id === q.id;
                return (
                  <div
                    key={q.id}
                    onClick={() => setSelectedQuery(q)}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                      isSelected
                        ? 'bg-slate-50/90 border-blue-500/80 shadow-lg shadow-blue-500/10'
                        : 'bg-white border-slate-200 hover:border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-slate-900 text-base sm:text-lg">{q.name}</h4>
                        {q.source && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-50 border border-slate-200 text-blue-700">
                            {q.source}
                          </span>
                        )}
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                          q.status === 'new'
                            ? 'bg-amber-50 border border-amber-200 text-amber-700'
                            : q.status === 'contacted'
                            ? 'bg-blue-500/10 border border-blue-500/30 text-blue-700'
                            : 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                        }`}
                      >
                        {q.status}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-600 mb-2 line-clamp-1">
                      <span className="text-slate-500 font-normal">Subject: </span>
                      {q.subject}
                    </p>

                    <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                      "{q.message}"
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-500 pt-2 border-t border-slate-200">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-slate-500" /> {q.email}</span>
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-slate-500" /> {q.phone}</span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(q.date).toLocaleDateString()} {new Date(q.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Detailed Inspector Modal/Panel */}
          <div className="lg:col-span-5 sticky top-24">
            {selectedQuery ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl space-y-6">
                <div className="flex justify-between items-start pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{selectedQuery.name}</h3>
                    <p className="text-xs text-slate-500">ID: {selectedQuery.id}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(selectedQuery.id)}
                    className="p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-colors"
                    title="Delete Query"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Status Action Buttons */}
                <div>
                  <label className="text-xs text-slate-500 block mb-2 font-medium">Update Lead Status:</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleStatusChange(selectedQuery.id, 'new')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                        selectedQuery.status === 'new'
                          ? 'bg-amber-50 border-amber-500 text-amber-800 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>New</span>
                    </button>
                    <button
                      onClick={() => handleStatusChange(selectedQuery.id, 'contacted')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                        selectedQuery.status === 'contacted'
                          ? 'bg-blue-500/20 border-blue-500 text-blue-700 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Contacted</span>
                    </button>
                    <button
                      onClick={() => handleStatusChange(selectedQuery.id, 'resolved')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                        selectedQuery.status === 'resolved'
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Resolved</span>
                    </button>
                  </div>
                </div>

                {/* Customer Contact Details */}
                <div className="space-y-3 bg-slate-50/50 p-4 rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-700" /> Phone:
                    </span>
                    <a href={`tel:${selectedQuery.phone}`} className="text-slate-900 font-medium hover:underline">
                      {selectedQuery.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-700" /> Email:
                    </span>
                    <a href={`mailto:${selectedQuery.email}`} className="text-slate-900 font-medium hover:underline">
                      {selectedQuery.email}
                    </a>
                  </div>
                  {selectedQuery.source && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-700" /> Source:
                      </span>
                      <span className="text-blue-700 font-medium">{selectedQuery.source}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-700" /> Submitted:
                    </span>
                    <span className="text-slate-600">
                      {new Date(selectedQuery.date).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Subject & Full Message */}
                <div>
                  <label className="text-xs text-slate-500 block mb-1 font-medium">Subject:</label>
                  <h4 className="text-sm font-semibold text-slate-900 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    {selectedQuery.subject}
                  </h4>

                  <label className="text-xs text-slate-500 block mb-1 font-medium">Full Customer Message:</label>
                  <div className="p-4 bg-white rounded-xl border border-slate-200/60 text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
                    {selectedQuery.message}
                  </div>
                </div>

                {/* Fast Quick Reply CTAs */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={`https://wa.me/${selectedQuery.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl text-center shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>WhatsApp Lead</span>
                  </a>
                  <a
                    href={`mailto:${selectedQuery.email}?subject=Re: ${encodeURIComponent(selectedQuery.subject)}`}
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl text-center shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 flex flex-col items-center justify-center min-h-[350px]">
                <User className="w-12 h-12 text-slate-700 mb-3" />
                <h4 className="text-base font-medium text-slate-900 mb-1">Select a Query</h4>
                <p className="text-xs max-w-xs">Click on any inquiry from the left list to view full details and contact the user directly.</p>
              </div>
            )}
          </div>
        </div>
      </div>}
    </div>
  );
};
