// Audio layer. Uses browser speech synthesis for the prototype; the interface is
// designed so professionally recorded audio files can replace it later
// (swap the implementation of speak() for an <audio> element backed by audio_assets).

let cachedVoice: SpeechSynthesisVoice | null = null;

function pickVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice;
  const voices = window.speechSynthesis?.getVoices() ?? [];
  cachedVoice =
    voices.find((v) => v.lang === 'en-US' && /google/i.test(v.name)) ??
    voices.find((v) => v.lang === 'en-US') ??
    voices.find((v) => v.lang.startsWith('en')) ??
    null;
  return cachedVoice;
}

// Chrome loads the voice list asynchronously.
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = null;
    pickVoice();
  };
}

export function speak(text: string, opts?: { slow?: boolean }): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    // iOS Safari pauses the synthesizer when the page is backgrounded or after
    // long idle stretches; resume() is a no-op elsewhere.
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = opts?.slow ? 0.55 : 0.9;
    utterance.pitch = 1;
    const voice = pickVoice();
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  } catch {
    // Speech is a progressive enhancement — never break the UI over it.
  }
}

export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

type SoundKind = 'correct' | 'wrong' | 'complete' | 'reward';

const soundUrls: Record<SoundKind, { freq: number[]; dur: number }> = {
  correct: { freq: [523, 659, 784], dur: 0.12 },
  wrong: { freq: [220, 174], dur: 0.18 },
  complete: { freq: [523, 659, 784, 1047], dur: 0.14 },
  reward: { freq: [784, 988, 1175], dur: 0.12 },
};

// Tiny WebAudio chimes so the app needs no bundled audio assets.
export function playSound(kind: SoundKind, enabled: boolean): void {
  if (!enabled || typeof window === 'undefined') return;
  const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  const ctx = new Ctx();
  const { freq, dur } = soundUrls[kind];
  freq.forEach((f, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = f;
    const t0 = ctx.currentTime + i * dur;
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(0.2, t0 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur + 0.25);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.3);
  });
}

// --- Speech recognition (optional, graceful degradation) ---

export interface SpeechRecognizer {
  start: () => void;
  stop: () => void;
}

// The Web Speech API is not in the standard TS DOM lib; declare a minimal shape.
interface MinimalRecognition {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((e: { results: { [i: number]: { [j: number]: { transcript: string } } } }) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start: () => void;
  stop: () => void;
}

export function createSpeechRecognizer(
  onResult: (transcript: string) => void,
  onEnd: () => void,
): SpeechRecognizer | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => MinimalRecognition;
    webkitSpeechRecognition?: new () => MinimalRecognition;
  };
  const Ctor = w.SpeechRecognition ?? w.webkitSpeechRecognition;
  if (!Ctor) return null;
  const rec = new Ctor();
  rec.lang = 'en-US';
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.onresult = (e) => {
    const transcript = e.results[0]?.[0]?.transcript;
    if (transcript) onResult(transcript);
  };
  rec.onend = onEnd;
  rec.onerror = onEnd;
  return { start: () => rec.start(), stop: () => rec.stop() };
}

// Loose comparison: pronunciation feedback should encourage, not demand perfection.
export function pronunciationScore(target: string, heard: string): number {
  const norm = (s: string) =>
    s.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ').trim();
  const a = norm(target).split(' ');
  const b = norm(heard).split(' ');
  if (!a.length || !b.length) return 0;
  const setB = new Set(b);
  const hits = a.filter((word) => setB.has(word)).length;
  return Math.round((hits / Math.max(a.length, b.length)) * 100);
}
