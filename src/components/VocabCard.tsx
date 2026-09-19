import { useRef, useState } from 'react';
import type { VocabItem } from '../types/content';
import type { SupportMode } from '../engine/questions';
import { CkbHelp } from './games';
import { createSpeechRecognizer, pronunciationScore, speak } from '../audio';
import { t } from '../i18n/ckb';
import { useProgress } from '../state/progress';

// Vocabulary card used in the Learn stage: word, audio, Bahdini meaning,
// example sentence, and optional speaking practice.
export function VocabCard({ vocab, support = 'full', onNext, last }: { vocab: VocabItem; support?: SupportMode; onNext: () => void; last: boolean }) {
  const [showExample, setShowExample] = useState(false);
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const recRef = useRef<ReturnType<typeof createSpeechRecognizer>>(null);
  const markSpoken = useProgress((s) => s.markSpoken);
  const speechAvailable =
    typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  const startSpeaking = () => {
    setHeard(null);
    setScore(null);
    const rec = createSpeechRecognizer(
      (transcript) => {
        setHeard(transcript);
        setScore(pronunciationScore(vocab.en, transcript));
        markSpoken();
      },
      () => setListening(false),
    );
    recRef.current = rec;
    if (!rec) return;
    setListening(true);
    rec.start();
  };

  return (
    <div className="animate-pop card flex flex-col items-center gap-3 py-8 text-center">
      <div className="text-7xl">{vocab.emoji}</div>
      <h2 dir="ltr" className="font-display text-4xl font-black tracking-wide">
        {vocab.en}
      </h2>
      {vocab.phonetic && (
        <p dir="ltr" className="text-ink/50">
          {vocab.phonetic}
        </p>
      )}
      <CkbHelp text={vocab.ckb} support={support} className="text-2xl font-black text-brand-700" />

      <div className="mt-2 flex flex-wrap justify-center gap-2">
        <button className="btn-ghost !min-h-[44px] !px-4 !py-2 text-base" onClick={() => speak(vocab.en)}>
          🔊 {t.hearWord}
        </button>
        <button className="btn-ghost !min-h-[44px] !px-4 !py-2 text-base" onClick={() => speak(vocab.en, { slow: true })}>
          🐢 {t.hearSlow}
        </button>
        <button className="btn-ghost !min-h-[44px] !px-4 !py-2 text-base" onClick={() => setShowExample((v) => !v)}>
          👀 {t.example}
        </button>
      </div>

      {showExample && (
        <div className="animate-fade-up w-full rounded-2xl bg-brand-50 p-4">
          <p dir="ltr" className="font-display text-lg font-bold">
            {vocab.exampleEn}
          </p>
          <CkbHelp text={vocab.exampleCkb} support={support} className="mt-1 text-ink/70" />
          <button className="btn-ghost mt-2 !min-h-[40px] !px-4 !py-2 text-base" onClick={() => speak(vocab.exampleEn)}>
            🔊 {t.hearWord}
          </button>
        </div>
      )}

      <div className="mt-1 w-full">
        {speechAvailable ? (
          <>
            <button
              className={`btn-accent w-full ${listening ? 'animate-ring' : ''}`}
              onClick={startSpeaking}
              disabled={listening}
            >
              🎤 {listening ? t.listening : t.trySpeaking}
            </button>
            {heard && (
              <div className="animate-fade-up mt-2 rounded-2xl bg-white p-3">
                <p className="text-sm text-ink/60">{t.speechHeard(heard)}</p>
                {score !== null && score >= 60 && <p className="mt-1 font-black text-brand-600">{t.speechGood}</p>}
                {score !== null && score < 60 && <p className="mt-1 font-bold text-accent-dark">{t.encouragement[0]}</p>}
              </div>
            )}
          </>
        ) : null}
      </div>

      <button className="btn-primary mt-2 w-full" onClick={onNext}>
        {last ? t.finish : t.next}
      </button>
    </div>
  );
}
