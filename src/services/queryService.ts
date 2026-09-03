export interface ContactQuery {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  source?: string;
  date: string;
  status: 'new' | 'contacted' | 'resolved';
}

const QUERIES_KEY = 'techverse_contact_queries';
const AUTH_KEY = 'techverse_admin_token';

// Initial sample queries if none exist
const initialQueries: ContactQuery[] = [
  {
    id: 'q-101',
    name: 'Rahul Sharma',
    phone: '+91 9876543210',
    email: 'rahul@example.com',
    subject: 'Prebuilt SaaS Demo Inquiry',
    message: 'Interested in purchasing the Prebuilt SaaS software for my grocery delivery startup.',
    source: 'Prebuilt Page',
    date: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: 'new'
  },
  {
    id: 'q-102',
    name: 'Priya Verma',
    phone: '+91 9123456789',
    email: 'priya@techfirm.io',
    subject: 'Custom Web Application Development',
    message: 'We need a customized enterprise SaaS platform built from scratch with custom AI integrations.',
    source: 'Customized Page',
    date: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: 'contacted'
  }
];

export const getStoredQueries = (): ContactQuery[] => {
  try {
    const data = localStorage.getItem(QUERIES_KEY);
    if (!data) {
      localStorage.setItem(QUERIES_KEY, JSON.stringify(initialQueries));
      return initialQueries;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading queries:', err);
    return initialQueries;
  }
};

export const saveQuery = (query: Omit<ContactQuery, 'id' | 'date' | 'status'> & { source?: string }): ContactQuery => {
  const current = getStoredQueries();
  const newQuery: ContactQuery = {
    ...query,
    id: `q-${Date.now()}`,
    date: new Date().toISOString(),
    status: 'new'
  };
  const updated = [newQuery, ...current];
  localStorage.setItem(QUERIES_KEY, JSON.stringify(updated));
  return newQuery;
};

export const updateQueryStatus = (id: string, status: 'new' | 'contacted' | 'resolved'): ContactQuery[] => {
  const current = getStoredQueries();
  const updated = current.map((q) => (q.id === id ? { ...q, status } : q));
  localStorage.setItem(QUERIES_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteQuery = (id: string): ContactQuery[] => {
  const current = getStoredQueries();
  const updated = current.filter((q) => q.id !== id);
  localStorage.setItem(QUERIES_KEY, JSON.stringify(updated));
  return updated;
};

// SHA-256 Hash helper to avoid plain-text credentials in client bundle
async function hashSHA256(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Target hash for Sahil@881032
const metaEnv = (import.meta as any).env || {};
const TARGET_PASS_HASH = metaEnv.VITE_ADMIN_PASS_HASH || '5c531d0dbce526046e7f1f0a40d5ea7ef3f24bf7a052ff37c35ec3631fdf7924';
const TARGET_USER = metaEnv.VITE_ADMIN_USER || 'sahilarora7892';

export const isAuthenticated = (): boolean => {
  return localStorage.getItem(AUTH_KEY) === 'true';
};

export const loginAdminSecure = async (username: string, pass: string): Promise<boolean> => {
  const trimmedUser = username.trim();
  const inputHash = await hashSHA256(pass.trim());

  if (trimmedUser === TARGET_USER && inputHash === TARGET_PASS_HASH) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }
  return false;
};

export const logoutAdmin = (): void => {
  localStorage.removeItem(AUTH_KEY);
};
