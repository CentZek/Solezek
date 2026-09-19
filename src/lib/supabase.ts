import type { SupabaseClient } from '@supabase/supabase-js';

// The anon key is public-by-design; Row Level Security (supabase/schema.sql)
// is what protects user data. Never put a service-role key in this app.
//
// @supabase/supabase-js is loaded lazily (dynamic import) so the core
// learning app stays small for users who never sign in.

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabaseConfigured = Boolean(url && anonKey);

let client: SupabaseClient | null = null;
let pending: Promise<SupabaseClient | null> | null = null;

export function getSupabase(): Promise<SupabaseClient | null> {
  if (client) return Promise.resolve(client);
  if (!supabaseConfigured) return Promise.resolve(null);
  pending ??= import('@supabase/supabase-js').then((m) => {
    client = m.createClient(url!, anonKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false, // phone OTP only, no redirect flows
      },
    });
    return client;
  });
  return pending;
}
