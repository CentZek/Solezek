// Supabase Edge Function: delete-account
// Lets a signed-in user delete their own account (App Store guideline 5.1.1(v)).
// The schema's ON DELETE CASCADE removes all of the user's rows automatically.
//
// Deploy:
//   supabase functions deploy delete-account
// Required secrets (set automatically by Supabase): SUPABASE_URL, SUPABASE_ANON_KEY
// You must additionally set: SUPABASE_SERVICE_ROLE_KEY
//   supabase secrets set SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    return new Response('Missing Authorization header', { status: 401 });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

  // Identify the caller from their JWT.
  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });
  const {
    data: { user },
    error,
  } = await userClient.auth.getUser();
  if (error || !user) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Delete the auth user; cascades wipe profiles/stats/progress/vocabulary/achievements.
  const admin = createClient(supabaseUrl, serviceRoleKey);
  const { error: deleteError } = await admin.auth.admin.deleteUser(user.id);
  if (deleteError) {
    return new Response(JSON.stringify({ error: deleteError.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ deleted: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
