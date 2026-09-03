import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
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

export const AdminPage: React.FC = () => {
  const [authed, setAuthed] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [queries, setQueries] = useState<ContactQuery[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedQuery, setSelectedQuery] = useState<ContactQuery | null>(null);

  useEffect(() => {
    setAuthed(isAuthenticated());
    if (isAuthenticated()) {
      setQueries(getStoredQueries());
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await loginAdminSecure(username, password);
    if (success) {
      setAuthed(true);
      setLoginError('');
      setPassword('');
      setUsername('');
      setQueries(getStoredQueries());
    } else {
      setLoginError('Invalid Username or Password! Access Denied.');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setAuthed(false);
    setSelectedQuery(null);
  };

  const handleStatusChange = (id: string, status: 'new' | 'contacted' | 'resolved') => {
    const updated = updateQueryStatus(id, status);
    setQueries(updated);
    if (selectedQuery && selectedQuery.id === id) {
      setSelectedQuery({ ...selectedQuery, status });
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this query?')) {
      const updated = deleteQuery(id);
      setQueries(updated);
      if (selectedQuery && selectedQuery.id === id) {
        setSelectedQuery(null);
      }
    }
  };

  const refreshQueries = () => {
    setQueries(getStoredQueries());
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

  // Login Screen
  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col font-poppins selection:bg-blue-600 selection:text-white">
        <FloatingActions />
        <Navbar />

        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Glow accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400">
                <Lock className="w-8 h-8" />
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2" style={{ fontFamily: 'Matter, sans-serif' }}>
                Admin Security Portal
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm mb-6">
                Enter your security credentials to access customer inquiries dashboard.
              </p>

              {loginError && (
                <div className="mb-5 p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs font-medium">
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
                    className="w-full px-4 py-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-gray-500">
                Techverse Encrypted Admin System
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Admin Dashboard Screen
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-poppins selection:bg-blue-600 selection:text-white">
      <FloatingActions />
      
      {/* Custom Admin Nav Header */}
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <a href="/">
              <img src="/logo.png" alt="Techverse" className="h-10 w-auto bg-white/90 rounded-lg p-1" />
            </a>
            <span className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Admin Portal
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={refreshQueries}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-300 transition-colors flex items-center gap-1.5 text-xs"
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

      {/* Main Admin Dashboard Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Header & Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'Matter, sans-serif' }}>
              Customer Queries &amp; Leads
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Manage and track incoming website leads from Contact forms and Prebuilt SaaS pages.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 text-center">
              <span className="text-xs text-gray-400 block">Total</span>
              <span className="text-lg font-bold text-white">{queries.length}</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 text-center">
              <span className="text-xs text-amber-400 block">New</span>
              <span className="text-lg font-bold text-amber-400">
                {queries.filter((q) => q.status === 'new').length}
              </span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 text-center">
              <span className="text-xs text-emerald-400 block">Resolved</span>
              <span className="text-lg font-bold text-emerald-400">
                {queries.filter((q) => q.status === 'resolved').length}
              </span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, email, phone, message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700/80 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs text-gray-400 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {['all', 'new', 'contacted', 'resolved'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium capitalize shrink-0 transition-all ${
                  statusFilter === st
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
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
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-gray-400">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 text-slate-700" />
                <h3 className="text-lg font-medium text-white mb-1">No Queries Found</h3>
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
                        ? 'bg-slate-800/90 border-blue-500/80 shadow-lg shadow-blue-500/10'
                        : 'bg-slate-900 border-slate-800/80 hover:border-slate-700 hover:bg-slate-850'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-white text-base sm:text-lg">{q.name}</h4>
                        {q.source && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 border border-slate-700 text-blue-300">
                            {q.source}
                          </span>
                        )}
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                          q.status === 'new'
                            ? 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
                            : q.status === 'contacted'
                            ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                            : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                        }`}
                      >
                        {q.status}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-300 mb-2 line-clamp-1">
                      <span className="text-gray-400 font-normal">Subject: </span>
                      {q.subject}
                    </p>

                    <p className="text-xs text-gray-400 line-clamp-2 mb-3 leading-relaxed">
                      "{q.message}"
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-500 pt-2 border-t border-slate-800">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-gray-400" /> {q.email}</span>
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-gray-400" /> {q.phone}</span>
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
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
                <div className="flex justify-between items-start pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{selectedQuery.name}</h3>
                    <p className="text-xs text-gray-400">ID: {selectedQuery.id}</p>
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
                  <label className="text-xs text-gray-400 block mb-2 font-medium">Update Lead Status:</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleStatusChange(selectedQuery.id, 'new')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                        selectedQuery.status === 'new'
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                          : 'bg-slate-800 border-slate-700 text-gray-400 hover:bg-slate-700'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>New</span>
                    </button>
                    <button
                      onClick={() => handleStatusChange(selectedQuery.id, 'contacted')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                        selectedQuery.status === 'contacted'
                          ? 'bg-blue-500/20 border-blue-500 text-blue-300 shadow-sm'
                          : 'bg-slate-800 border-slate-700 text-gray-400 hover:bg-slate-700'
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
                          : 'bg-slate-800 border-slate-700 text-gray-400 hover:bg-slate-700'
                      }`}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Resolved</span>
                    </button>
                  </div>
                </div>

                {/* Customer Contact Details */}
                <div className="space-y-3 bg-slate-800/50 p-4 rounded-xl border border-slate-800 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-400" /> Phone:
                    </span>
                    <a href={`tel:${selectedQuery.phone}`} className="text-white font-medium hover:underline">
                      {selectedQuery.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-400" /> Email:
                    </span>
                    <a href={`mailto:${selectedQuery.email}`} className="text-white font-medium hover:underline">
                      {selectedQuery.email}
                    </a>
                  </div>
                  {selectedQuery.source && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-400" /> Source:
                      </span>
                      <span className="text-blue-300 font-medium">{selectedQuery.source}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" /> Submitted:
                    </span>
                    <span className="text-gray-300">
                      {new Date(selectedQuery.date).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Subject & Full Message */}
                <div>
                  <label className="text-xs text-gray-400 block mb-1 font-medium">Subject:</label>
                  <h4 className="text-sm font-semibold text-white mb-4 bg-slate-800 p-3 rounded-xl border border-slate-700/60">
                    {selectedQuery.subject}
                  </h4>

                  <label className="text-xs text-gray-400 block mb-1 font-medium">Full Customer Message:</label>
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/60 text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
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
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-gray-400 flex flex-col items-center justify-center min-h-[350px]">
                <User className="w-12 h-12 text-slate-700 mb-3" />
                <h4 className="text-base font-medium text-white mb-1">Select a Query</h4>
                <p className="text-xs max-w-xs">Click on any inquiry from the left list to view full details and contact the user directly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
