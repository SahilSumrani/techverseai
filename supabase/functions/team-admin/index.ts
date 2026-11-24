import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': Deno.env.get('APP_ORIGIN') ?? 'https://www.techverseai.in',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (request: Request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
    status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const url = Deno.env.get('SUPABASE_URL');
  const publishable = Deno.env.get('SUPABASE_PUBLISHABLE_KEY') ?? Deno.env.get('SUPABASE_ANON_KEY');
  const secret = Deno.env.get('SUPABASE_SECRET_KEY') ?? Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !publishable || !secret) return json({ error: 'Server function is not configured.' }, 500);

  const authorization = request.headers.get('Authorization');
  if (!authorization?.startsWith('Bearer ')) return json({ error: 'Sign in required.' }, 401);
  const userClient = createClient(url, publishable, { global: { headers: { Authorization: authorization } }, auth: { persistSession: false } });
  const { data: userData, error: userError } = await userClient.auth.getUser();
  if (userError || !userData.user) return json({ error: 'Your session is invalid. Please sign in again.' }, 401);

  const adminClient = createClient(url, secret, { auth: { persistSession: false } });
  const { data: isManager, error: roleError } = await userClient.rpc('is_techverse_manager');
  if (roleError || !isManager) return json({ error: 'Administrator access required.' }, 403);

  let input: { action?: string; email?: string; full_name?: string; title?: string; department?: string; recipient_id?: string; subject?: string; message?: string };
  try { input = await request.json(); } catch { return json({ error: 'Invalid request data.' }, 400); }
  if (input.action === 'email') {
    const recipientId = input.recipient_id?.trim() ?? '';
    const subject = input.subject?.trim() ?? '';
    const message = input.message?.trim() ?? '';
    if (!recipientId || subject.length < 1 || subject.length > 180 || message.length < 1 || message.length > 5000) {
      return json({ error: 'Invalid email content or recipient.' }, 400);
    }
    const { data: member, error: memberError } = await adminClient.from('company_members')
      .select('email, full_name').eq('user_id', recipientId).eq('active', true).single();
    if (memberError || !member) return json({ error: 'Active employee not found.' }, 404);
    const resendKey = Deno.env.get('RESEND_API_KEY');
    const from = Deno.env.get('EMAIL_FROM');
    if (!resendKey || !from) return json({ sent: false, configured: false });
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [member.email],
        subject,
        text: `Hi ${member.full_name},\n\n${message}\n\nTechVerse AI Team`,
      }),
    });
    if (!response.ok) {
      const detail = await response.text();
      console.error('Email provider rejected a team notification:', response.status, detail.slice(0, 500));
      return json({ error: 'Email provider could not deliver this message. Check sender verification and provider logs.' }, 502);
    }
    return json({ sent: true, configured: true });
  }
  if (input.action !== 'invite') return json({ error: 'Unsupported action.' }, 400);
  const email = input.email?.trim().toLowerCase() ?? '';
  const fullName = input.full_name?.trim() ?? '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || fullName.length < 1 || fullName.length > 120) {
    return json({ error: 'Enter a valid email address and name.' }, 400);
  }

  const redirectTo = `${Deno.env.get('APP_ORIGIN') ?? 'https://www.techverseai.in'}/employee?setup=1`;
  const { data, error } = await adminClient.auth.admin.inviteUserByEmail(email, {
    data: { full_name: fullName, title: input.title?.trim() ?? '', department: input.department?.trim() ?? '' },
    redirectTo,
  });
  if (error) return json({ error: error.message }, 400);

  // Ensure the invited account is explicitly an employee; no privileged role comes from client metadata.
  const { error: memberError } = await adminClient.from('company_members').upsert({
    user_id: data.user.id, email, full_name: fullName,
    title: input.title?.trim() ?? '', department: input.department?.trim() ?? '', role: 'employee', active: true,
  }, { onConflict: 'user_id' });
  if (memberError) return json({ error: 'Invite created, but the team profile could not be saved. Contact support.' }, 500);
  return json({ ok: true });
});
