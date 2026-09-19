// Supabase Edge Function: invite-gate
// "Before User Created" auth hook — registration is invite-only.
// The sign-up flow passes the invite code in user metadata (invite_code);
// without a valid, unused code the account is rejected before it exists.
//
// Setup:
//   supabase secrets set INVITE_HOOK_SECRET=<hook secret from dashboard/config>
//   supabase functions deploy invite-gate --no-verify-jwt
// Hook config (Management API / dashboard):
//   hook_before_user_created_enabled = true
//   hook_before_user_created_uri = https://<ref>.supabase.co/functions/v1/invite-gate
//   hook_before_user_created_secrets = <same secret>

const HOOK_SECRET = Deno.env.get('INVITE_HOOK_SECRET') ?? '';

// Verify the Supabase standard-webhook signature (HMAC-SHA256).
async function verifySignature(req: Request, rawBody: string): Promise<boolean> {
  const msgId = req.headers.get('webhook-id');
  const timestamp = req.headers.get('webhook-timestamp');
  const signatureHeader = req.headers.get('webhook-signature');
  if (!msgId || !timestamp || !signatureHeader || !HOOK_SECRET) return false;

  const base64Secret = HOOK_SECRET.replace(/^v1,whsec_/, '');
  const keyBytes = Uint8Array.from(atob(base64Secret), (c) => c.charCodeAt(0));
  const key = await crypto.subtle.importKey('raw', keyBytes, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const toSign = `${msgId}.${timestamp}.${rawBody}`;
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(toSign));
  const expected = btoa(String.fromCharCode(...new Uint8Array(signature)));
  return signatureHeader.split(' ').some((entry) => entry === `v1,${expected}`);
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const rawBody = await req.text();
  if (!(await verifySignature(req, rawBody))) {
    return new Response('Invalid signature', { status: 401 });
  }

  const payload = JSON.parse(rawBody) as {
    user?: {
      id?: string;
      user_metadata?: Record<string, unknown>;
      raw_user_meta_data?: Record<string, unknown>;
    };
  };
  const user = payload.user ?? {};
  const meta = user.user_metadata ?? user.raw_user_meta_data ?? {};
  const inviteCode = String(meta.invite_code ?? '').trim().toUpperCase();

  if (!inviteCode) {
    return reject('An invite code is required to create an account.');
  }

  // Consume the code atomically: only succeeds while used_count < max_uses.
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const res = await fetch(`${supabaseUrl}/rest/v1/rpc/consume_invite_code`, {
    method: 'POST',
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ p_code: inviteCode, p_user_id: user.id ?? null }),
  });

  if (!res.ok) {
    return reject('Could not validate the invite code.');
  }
  const ok = (await res.json()) as boolean;
  if (!ok) {
    return reject('This invite code is invalid or has already been used.');
  }

  // Allow the signup to proceed (return the user unchanged).
  return new Response(JSON.stringify({ user }), {
    headers: { 'Content-Type': 'application/json' },
  });
});

function reject(message: string): Response {
  return new Response(JSON.stringify({ error: { message, http_code: 403 } }), {
    status: 403,
    headers: { 'Content-Type': 'application/json' },
  });
}
