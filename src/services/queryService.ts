import { createClient, type SupabaseClient } from '@supabase/supabase-js';

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

type NewContactQuery = Omit<ContactQuery, 'id' | 'date' | 'status'>;

const env = (import.meta as ImportMeta & { env: Record<string, string | undefined> }).env;
const SUPABASE_URL = env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabaseClient: SupabaseClient | null = SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: typeof window === 'undefined'
        ? { persistSession: false }
        : {
            storage: window.sessionStorage,
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
          }
    })
  : null;

function getSupabase(): SupabaseClient {
  if (!supabaseClient) {
    throw new Error('Supabase is not configured. Add the project URL and publishable key to the deployment environment.');
  }
  return supabaseClient;
}

async function isAdmin(): Promise<boolean> {
  const { data, error } = await getSupabase().rpc('is_techverse_admin');
  if (error) throw error;
  return data === true;
}

export const getStoredQueries = async (): Promise<ContactQuery[]> => {
  const { data, error } = await getSupabase()
    .from('contact_queries')
    .select('id, name, phone, email, subject, message, source, date, status')
    .order('date', { ascending: false });

  if (error) throw error;
  return (data ?? []) as ContactQuery[];
};

export const saveQuery = async (query: NewContactQuery): Promise<ContactQuery> => {
  const normalized = {
    name: query.name.trim(),
    phone: query.phone.trim(),
    email: query.email.trim(),
    subject: query.subject.trim(),
    message: query.message.trim(),
    source: query.source?.trim() || null
  };

  const { data, error } = await getSupabase()
    .from('contact_queries')
    .insert(normalized)
    .select('id, name, phone, email, subject, message, source, date, status')
    .single();

  if (error) throw error;
  return data as ContactQuery;
};

export const updateQueryStatus = async (
  id: string,
  status: ContactQuery['status']
): Promise<ContactQuery[]> => {
  const { error } = await getSupabase()
    .from('contact_queries')
    .update({ status })
    .eq('id', id);

  if (error) throw error;
  return getStoredQueries();
};

export const deleteQuery = async (id: string): Promise<ContactQuery[]> => {
  const { error } = await getSupabase()
    .from('contact_queries')
    .delete()
    .eq('id', id);

  if (error) throw error;
  return getStoredQueries();
};

export const isAuthenticated = async (): Promise<boolean> => {
  const client = getSupabase();
  const { data, error } = await client.auth.getSession();

  if (error || !data.session) return false;

  try {
    return await isAdmin();
  } catch {
    return false;
  }
};

export const loginAdminSecure = async (email: string, password: string): Promise<boolean> => {
  const client = getSupabase();
  const { error } = await client.auth.signInWithPassword({
    email: email.trim(),
    password
  });

  if (error) return false;

  try {
    if (await isAdmin()) return true;
  } catch {
    // Sign out below when the database has no admin allowlist entry for this user.
  }

  await client.auth.signOut();
  return false;
};

export const logoutAdmin = async (): Promise<void> => {
  const { error } = await getSupabase().auth.signOut();
  if (error) throw error;
};
