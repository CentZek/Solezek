import { useState } from 'react';
import { t } from '../i18n/ckb';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../state/progress';

export function AuthPanel() {
  const { supabase, user } = useAuth();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [busy, setBusy] = useState(false);

  if (!user || !supabase) return null;

  const signOut = async () => {
    await supabase.auth.signOut();
    useProgress.getState().resetProgress();
    window.location.reload();
  };

  const deleteAccount = async () => {
    setBusy(true);
    await supabase.functions.invoke('delete-account');
    await supabase.auth.signOut();
    useProgress.getState().resetProgress();
    window.location.reload();
  };

  return (
    <div className="card mt-2 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-black">👤 {(user.user_metadata?.username as string) || user.phone}</p>
          <p className="text-sm text-ink/60" dir="ltr">
            📱 {user.phone}
          </p>
        </div>
        <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">{t.signedIn}</span>
      </div>
      <p className="text-sm text-ink/60">{t.syncNote}</p>
      <button className="btn-ghost" onClick={signOut}>
        {t.signOut}
      </button>
      {!confirmDelete ? (
        <button className="btn bg-red-50 font-bold text-red-600" onClick={() => setConfirmDelete(true)}>
          🗑️ {t.deleteAccount}
        </button>
      ) : (
        <div className="flex flex-col gap-2 rounded-2xl border-2 border-red-200 p-3">
          <p className="text-sm font-bold text-red-600">{t.deleteAccountConfirm}</p>
          <div className="flex gap-2">
            <button className="btn flex-1 bg-red-500 text-white" onClick={deleteAccount} disabled={busy}>
              {t.deleteAccount}
            </button>
            <button className="btn-ghost flex-1" onClick={() => setConfirmDelete(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
