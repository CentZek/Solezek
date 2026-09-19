// Supabase Edge Function: send-whatsapp-otp
// "Send SMS" auth hook — delivers Supabase phone-auth OTP codes via
// Bird.com WhatsApp (new Bird platform API) using a pre-approved OTP template.
//
// Setup:
//   supabase secrets set SMS_HOOK_SECRET=<hook secret from Supabase dashboard>
//   supabase secrets set BIRD_API_KEY=bk_...
//   supabase secrets set BIRD_WHATSAPP_SENDER=+9647510440703
//   supabase secrets set BIRD_TEMPLATE_SLUG=solezek-verification
//   supabase functions deploy send-whatsapp-otp --no-verify-jwt
//
// Then: Supabase dashboard → Authentication → Hooks → Send SMS → HTTPS
//   URL: https://<project-ref>.supabase.co/functions/v1/send-whatsapp-otp
//   Secret: same value as SMS_HOOK_SECRET (format: v1,whsec_...)
//
// Note: --no-verify-jwt is required because this endpoint is called by
// Supabase Auth (webhook signature), not by an end user with a JWT.

const HOOK_SECRET = Deno.env.get('SMS_HOOK_SECRET') ?? '';
const BIRD_API_KEY = Deno.env.get('BIRD_API_KEY') ?? '';
const BIRD_WHATSAPP_SENDER = Deno.env.get('BIRD_WHATSAPP_SENDER') ?? '';
const BIRD_TEMPLATE_SLUG = Deno.env.get('BIRD_TEMPLATE_SLUG') ?? 'solezek-verification';
const BIRD_TEMPLATE_LANGUAGE = Deno.env.get('BIRD_TEMPLATE_LANGUAGE') ?? 'ar';

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

  // Header can carry multiple space-separated "v1,<sig>" entries.
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

  const { user, sms } = JSON.parse(rawBody) as {
    user: { phone: string };
    sms: { otp: string };
  };
  if (!user?.phone || !sms?.otp) {
    return new Response('Bad payload', { status: 400 });
  }

  // Bird platform WhatsApp API with the pre-approved OTP template.
  // Body parameter = the code; button parameter = the code again (Meta
  // substitutes it into the template's copy-code button URL).
  const birdRes = await fetch('https://eu1.platform.bird.com/v1/whatsapp/messages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${BIRD_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: user.phone,
      from: BIRD_WHATSAPP_SENDER,
      template: {
        slug: BIRD_TEMPLATE_SLUG,
        language: BIRD_TEMPLATE_LANGUAGE,
        components: [
          {
            type: 'body',
            parameters: [{ type: 'text', text: sms.otp }],
          },
          {
            type: 'button',
            parameters: [{ type: 'text', text: sms.otp }],
          },
        ],
      },
    }),
  });

  if (!birdRes.ok) {
    const detail = await birdRes.text();
    return new Response(JSON.stringify({ error: `Bird API error: ${detail}` }), { status: 502 });
  }

  return new Response(JSON.stringify({ sent: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
