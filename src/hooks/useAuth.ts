import { useEffect, useState } from 'react';
import type { SupabaseClient, User, Session } from '@supabase/supabase-js';
import { getSupabase, supabaseConfigured } from '../lib/supabase';

interface AuthState {
  supabase: SupabaseClient | null;
  session: Session | null;
  user: User | null;
  loading: boolean;
}

export function useAuth(): AuthState {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabaseConfigured) {
      setLoading(false);
      return;
    }
    let sub: { unsubscribe: () => void } | null = null;
    void getSupabase().then((sb) => {
      if (!sb) {
        setLoading(false);
        return;
      }
      setSupabase(sb);
      sb.auth.getSession().then(({ data }) => {
        setSession(data.session);
        setLoading(false);
      });
      const { data } = sb.auth.onAuthStateChange((_event, sess) => {
        setSession(sess);
      });
      sub = data.subscription;
    });
    return () => sub?.unsubscribe();
  }, []);

  return {
    supabase,
    session,
    user: session?.user ?? null,
    loading,
  };
}
