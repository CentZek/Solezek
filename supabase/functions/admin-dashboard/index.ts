// Supabase Edge Function: admin-dashboard
// Custom admin authentication; the service-role key never leaves this function.
//
// Setup:
//   supabase secrets set ADMIN_USERNAME=<username> ADMIN_PASSWORD=<password> ADMIN_SESSION_SECRET=<long-random-secret>
//   supabase functions deploy admin-dashboard --no-verify-jwt

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const ADMIN_USERNAME = Deno.env.get('ADMIN_USERNAME') ?? '';
const ADMIN_PASSWORD = Deno.env.get('ADMIN_PASSWORD') ?? '';
const SESSION_SECRET = Deno.env.get('ADMIN_SESSION_SECRET') ?? '';
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000;
const encoder = new TextEncoder();

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-admin-token',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function respond(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function base64Url(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function sign(value: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', encoder.encode(SESSION_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(value));
  return base64Url(new Uint8Array(signature));
}

async function createSession(): Promise<string> {
  const expires = String(Date.now() + SESSION_DURATION_MS);
  return `${expires}.${await sign(`admin:${expires}`)}`;
}

function equalStrings(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let difference = 0;
  for (let i = 0; i < a.length; i++) difference |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return difference === 0;
}

async function validSession(token: string): Promise<boolean> {
  const [expires, signature, extra] = token.split('.');
  if (!expires || !signature || extra || Number(expires) <= Date.now()) return false;
  return equalStrings(signature, await sign(`admin:${expires}`));
}

function randomInviteCode(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  const part = (start: number) => Array.from(bytes.slice(start, start + 4), (byte) => alphabet[byte % alphabet.length]).join('');
  return `${part(0)}-${part(4)}`;
}

function assertNoError(result: { error: { message: string } | null }): void {
  if (result.error) throw new Error(result.error.message);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders });
  if (req.method !== 'POST') return respond({ error: 'Method not allowed.' }, 405);
  if (!ADMIN_USERNAME || !ADMIN_PASSWORD || !SESSION_SECRET) {
    return respond({ error: 'Admin dashboard is not configured.' }, 503);
  }

  try {
    const body = await req.json() as { action?: string; username?: string; password?: string; code?: string };

    if (body.action === 'login') {
      const valid = equalStrings(body.username ?? '', ADMIN_USERNAME) && equalStrings(body.password ?? '', ADMIN_PASSWORD);
      if (!valid) return respond({ error: 'Invalid admin username or password.' }, 401);
      return respond({ token: await createSession(), expiresIn: SESSION_DURATION_MS / 1000 });
    }

    if (!(await validSession(req.headers.get('x-admin-token') ?? ''))) {
      return respond({ error: 'Your admin session has expired. Please sign in again.' }, 401);
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
      { auth: { autoRefreshToken: false, persistSession: false } },
    );

    if (body.action === 'create-invite') {
      const code = (body.code?.trim().toUpperCase() || randomInviteCode());
      if (!/^[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) {
        return respond({ error: 'Invite codes must use the format XXXX-XXXX.' }, 400);
      }
      const result = await supabase.from('invite_codes').insert({ code }).select('code, used_count, max_uses, used_at, created_at').single();
      if (result.error) {
        const message = result.error.code === '23505' ? 'That invite code already exists.' : result.error.message;
        return respond({ error: message }, result.error.code === '23505' ? 409 : 500);
      }
      return respond({ invite: result.data });
    }

    if (body.action !== 'overview') return respond({ error: 'Unknown admin action.' }, 400);

    const authUsers = [];
    for (let page = 1; ; page++) {
      const result = await supabase.auth.admin.listUsers({ page, perPage: 1000 });
      if (result.error) throw new Error(result.error.message);
      authUsers.push(...result.data.users);
      if (result.data.users.length < 1000) break;
    }

    const [profiles, stats, levelProgress, vocabulary, achievements, invites] = await Promise.all([
      supabase.from('profiles').select('id, name, created_at'),
      supabase.from('user_stats').select('*'),
      supabase.from('user_level_progress').select('user_id, completed, stars, best_score, attempts'),
      supabase.from('user_vocabulary').select('user_id'),
      supabase.from('user_achievements').select('user_id'),
      supabase.from('invite_codes').select('code, used_count, max_uses, used_at, created_at').order('created_at', { ascending: false }).limit(200),
    ]);
    [profiles, stats, levelProgress, vocabulary, achievements, invites].forEach(assertNoError);

    const profileByUser = new Map(profiles.data.map((row) => [row.id, row]));
    const statsByUser = new Map(stats.data.map((row) => [row.user_id, row]));
    const users = authUsers.map((user) => {
      const profile = profileByUser.get(user.id);
      const userStats = statsByUser.get(user.id);
      const userLevels = levelProgress.data.filter((row) => row.user_id === user.id);
      return {
        id: user.id,
        username: profile?.name || user.user_metadata?.name || '',
        phone: user.phone || '',
        createdAt: user.created_at,
        lastActive: userStats?.last_active_date || null,
        xp: userStats?.xp ?? 0,
        coins: userStats?.coins ?? 0,
        streak: userStats?.streak ?? 0,
        totalCorrect: userStats?.total_correct ?? 0,
        totalAnswers: userStats?.total_answers ?? 0,
        levelsCompleted: userLevels.filter((row) => row.completed).length,
        stars: userLevels.reduce((sum, row) => sum + row.stars, 0),
        words: vocabulary.data.filter((row) => row.user_id === user.id).length,
        achievements: achievements.data.filter((row) => row.user_id === user.id).length,
      };
    });

    return respond({ users, invites: invites.data });
  } catch (error) {
    return respond({ error: error instanceof Error ? error.message : 'Admin request failed.' }, 500);
  }
});
