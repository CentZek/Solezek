# Supabase Setup Guide

Project: `https://eckddabgifgtjubnxvse.supabase.co`

The app code is already wired (client, auth, sync). Only dashboard steps remain.

## 1. Create the database schema (5 min)

1. Open the project → **SQL Editor** → **New query**
2. Paste the entire contents of `supabase/schema.sql` → **Run**
3. This creates: all tables, Row Level Security policies, the profile auto-create
   trigger, and the public `audio` + `images` storage buckets.

## 2. Enable phone sign-in with Bird.com WhatsApp OTP (15 min)

The app uses Supabase's **Send SMS hook** so OTP codes arrive via **WhatsApp**
through Bird.com (MessageBird) instead of SMS.

**In Bird.com:**
1. Your WhatsApp sender (e.g. `+9647510440703`) and the pre-approved OTP
   template (`solezek-verification`) — already set up
2. Your Bird API key (`bk_...`)

**In Supabase:**
```bash
supabase secrets set BIRD_API_KEY=bk_...
supabase secrets set BIRD_WHATSAPP_SENDER=+9647510440703
supabase secrets set BIRD_TEMPLATE_SLUG=solezek-verification
supabase functions deploy send-whatsapp-otp --no-verify-jwt
```

Then wire the hook:
1. Dashboard → **Authentication** → **Hooks** → **Send SMS** → choose **HTTPS**
2. URL: `https://eckddabgifgtjubnxvse.supabase.co/functions/v1/send-whatsapp-otp`
3. Copy the generated secret (format `v1,whsec_...`) and set it:
   `supabase secrets set SMS_HOOK_SECRET=<that secret>`
4. Enable the **Phone** provider (no SMS provider needed — the hook handles delivery)

Notes:
- The OTP template is sent in **Arabic** (`ar`) — the `solezek-verification`
  template has no approved English copy. Override via `BIRD_TEMPLATE_LANGUAGE`
  if you add another language later.
- `verifyOtp` in the app still uses type `sms` — that's correct, it refers to the
  phone-OTP flow regardless of how the code was delivered.
- The template's copy-code button takes the bare code as its parameter (Meta
  substitutes it into the button URL) — do NOT send a full URL or Meta rejects
  the message with error 132018/131008.
- For testing without WhatsApp delivery: **Authentication → Sign In / Up → Phone**
  allows *test phone numbers* with a fixed OTP (e.g. `+9647500000000` → `123456`).

## 3. Deploy the delete-account function (App Store requirement)

```bash
npm install -g supabase          # or: brew install supabase/tap/supabase
supabase login
supabase link --project-ref eckddabgifgtjubnxvse
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=<service-role key from Settings → API>
supabase functions deploy delete-account
```

## 4. Run the app

`.env.local` already contains the project URL and anon key (both safe to expose —
RLS protects the data). `npm run dev`, open the **Profile** tab, sign in with your
phone number, and your progress starts syncing.

## How sync works

- **Offline-first**: the app fully works without sign-in; progress lives in
  localStorage (later: Capacitor storage on-device).
- **On sign-in**: cloud + local progress are merged (max of stats, union of
  vocabulary/achievements, best of level scores), then both sides converge.
- **While playing**: changes push to Supabase automatically (2.5s debounce).
- Tables mirror the local store 1:1: `user_stats`, `user_level_progress`,
  `user_vocabulary`, `user_achievements`, plus `profiles` and `analytics_events`.

## Security model

- The anon key in the app is public-by-design.
- RLS ensures users can only read/write **their own** rows (`auth.uid() = user_id`).
- Course content tables (`levels`, `vocabulary`) are read-only from clients —
  content edits happen via the dashboard or a future admin panel (service role).
- The service-role key is used **only** in the delete-account edge function —
  never in the app.
