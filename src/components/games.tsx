import { useEffect, useMemo, useState } from 'react';
import type { Question, SupportMode } from '../engine/questions';
import { conversationSpeaker } from '../engine/questions';
import type { VocabItem } from '../types/content';
import { speak, playSound } from '../audio';
import { t, randomPraise, randomEncouragement } from '../i18n/ckb';
import { useProgress } from '../state/progress';

export interface QuizResult {
  correct: boolean;
  vocabIds: string[];
  question: Question;
}

interface RunnerProps {
  questions: Question[];
  heading: string;
  support?: SupportMode;
  onAnswer: (result: QuizResult) => void;
  onDone: (results: QuizResult[]) => void;
}

// Runs a list of questions with immediate feedback, sounds and XP fly-ups.
export function QuizRunner({ questions, heading, support = 'full', onAnswer, onDone }: RunnerProps) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'ask' | 'feedback'>('ask');
  const [lastCorrect, setLastCorrect] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);
  const soundOn = useProgress((s) => s.soundOn);

  const q = questions[index];

  const answer = (correct: boolean, vocabIds: string[]) => {
    const result = { correct, vocabIds, question: q };
    onAnswer(result);
    setLastCorrect(correct);
    playSound(correct ? 'correct' : 'wrong', soundOn);
    setResults((r) => [...r, result]);
    setPhase('feedback');
  };

  const next = () => {
    if (index + 1 >= questions.length) {
      onDone([...results]);
    } else {
      setIndex(index + 1);
      setPhase('ask');
    }
  };

  if (!q) return null;

  return (
    <div className="flex min-h-[70vh] flex-col">
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between text-sm font-bold text-ink/60">
          <span>{heading}</span>
          <span dir="ltr">
            {index + 1} / {questions.length}
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-brand-100">
          <div
            className="h-full rounded-full bg-brand-500 transition-all duration-300"
            style={{ width: `${(index / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {phase === 'ask' ? (
        <div key={index} className="animate-fade-up flex-1">
          <QuestionView question={q} support={support} onAnswer={answer} />
        </div>
      ) : (
        <Feedback correct={lastCorrect} question={q} onNext={next} last={index + 1 >= questions.length} />
      )}
    </div>
  );
}

function Feedback({ correct, question, onNext, last }: { correct: boolean; question: Question; onNext: () => void; last: boolean }) {
  const vocab: VocabItem | null = 'vocab' in question ? question.vocab : null;
  const answerText = correctAnswerText(question);
  return (
    <div className={`animate-pop flex flex-1 flex-col items-center justify-center rounded-3xl p-6 text-center ${correct ? 'bg-brand-50' : 'bg-accent-light'}`}>
      <div className="text-6xl">{correct ? '🎉' : '💪'}</div>
      <h2 className="mt-3 text-2xl font-black">{correct ? randomPraise() : t.wrongTitle}</h2>
      {correct && <div className="animate-xp-fly mt-2 text-lg font-black text-accent-dark">{t.plusXp(10)}</div>}
      {!correct && (
        <div className="mt-4 w-full max-w-sm rounded-2xl bg-white p-4">
          <p className="text-sm font-bold text-ink/60">{t.correctAnswerIs}</p>
          <p dir="ltr" className="mt-1 font-display text-xl font-black">
            {answerText}
          </p>
          {vocab && (
            <>
              <p className="mt-1 text-lg font-bold">{vocab.ckb}</p>
              <p className="mt-2 text-sm text-ink/70">{vocab.exampleCkb}</p>
            </>
          )}
          <p className="mt-2 text-sm text-ink/60">{randomEncouragement()}</p>
        </div>
      )}
      <button className={`mt-6 ${correct ? 'btn-primary' : 'btn-accent'}`} onClick={onNext}>
        {last ? t.finish : t.next}
      </button>
    </div>
  );
}

function correctAnswerText(q: Question): string {
  switch (q.kind) {
    case 'en-to-ckb':
    case 'picture-to-en':
    case 'listen-picture':
      return q.vocab.ckb;
    case 'ckb-to-en':
    case 'listen-en':
    case 'type-en':
      return q.vocab.en;
    case 'build':
      return q.answer;
    case 'missing':
      return q.sentence.replace('___', q.answer);
    case 'conversation':
      return q.answer;
    case 'match':
      return q.pairs.map((p) => `${p.en} = ${p.ckb}`).join(' · ');
  }
}

// Bahdini helper text: visible immediately for early levels, hidden behind a
// help button from level 21 up (English-styled button from level 31 up).
export function CkbHelp({ text, support, className = '' }: { text: string; support: SupportMode; className?: string }) {
  const [open, setOpen] = useState(false);
  if (support === 'full') return <p className={className}>{text}</p>;
  if (!open) {
    return (
      <button
        className={`text-sm font-bold text-accent-dark underline decoration-dotted ${className}`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        {support === 'minimal' ? t.needHelpEn : t.needHelp}
      </button>
    );
  }
  return <p className={`animate-fade-up ${className}`}>{text}</p>;
}

// Progressive hints: first letter → Bahdini meaning. Never reveals the full answer.
function HintBar({ vocab, showMeaning = true }: { vocab: VocabItem; showMeaning?: boolean }) {
  const [step, setStep] = useState(0);
  return (
    <div className="flex flex-col items-center gap-2">
      {step === 0 ? (
        <button className="btn-ghost !min-h-[36px] !px-4 !py-1 text-sm" onClick={() => setStep(1)}>
          💡 {t.hint}
        </button>
      ) : (
        <div className="animate-fade-up flex flex-wrap items-center justify-center gap-2">
          <span dir="ltr" className="rounded-xl bg-accent-light px-3 py-1 font-display font-black">
            {vocab.en[0].toUpperCase()}…
          </span>
          {showMeaning &&
            (step === 1 ? (
              <button className="btn-ghost !min-h-[36px] !px-4 !py-1 text-sm" onClick={() => setStep(2)}>
                💡 {t.hintMeaning}
              </button>
            ) : (
              <span className="animate-fade-up rounded-xl bg-brand-50 px-3 py-1 font-black">{vocab.ckb}</span>
            ))}
        </div>
      )}
    </div>
  );
}

function QuestionView({
  question,
  support,
  onAnswer,
}: {
  question: Question;
  support: SupportMode;
  onAnswer: (correct: boolean, vocabIds: string[]) => void;
}) {
  switch (question.kind) {
    case 'en-to-ckb':
      return (
        <ChoiceQuestion
          prompt={<PromptWord vocab={question.vocab} showCkb={false} autoSpeak />}
          options={question.options.map((o) => ({ key: o.id, label: o.ckb, rtl: true }))}
          answerKey={question.vocab.id}
          onAnswer={(c) => onAnswer(c, [question.vocab.id])}
        />
      );
    case 'ckb-to-en':
      return (
        <ChoiceQuestion
          prompt={
            <div className="text-center">
              <div className="text-5xl">{question.vocab.emoji}</div>
              <p className="mt-2 text-3xl font-black">{question.vocab.ckb}</p>
            </div>
          }
          hint={<HintBar vocab={question.vocab} showMeaning={false} />}
          options={question.options.map((o) => ({ key: o.id, label: o.en, rtl: false }))}
          answerKey={question.vocab.id}
          onAnswer={(c) => onAnswer(c, [question.vocab.id])}
        />
      );
    case 'picture-to-en':
      return (
        <ChoiceQuestion
          prompt={<div className="text-center text-7xl">{question.vocab.emoji}</div>}
          hint={<HintBar vocab={question.vocab} />}
          options={question.options.map((o) => ({ key: o.id, label: o.en, rtl: false }))}
          answerKey={question.vocab.id}
          onAnswer={(c) => onAnswer(c, [question.vocab.id])}
        />
      );
    case 'listen-en':
      return (
        <ChoiceQuestion
          prompt={<ListenPrompt text={question.vocab.en} />}
          hint={<HintBar vocab={question.vocab} />}
          options={question.options.map((o) => ({ key: o.id, label: o.en, rtl: false }))}
          answerKey={question.vocab.id}
          onAnswer={(c) => onAnswer(c, [question.vocab.id])}
        />
      );
    case 'listen-picture':
      return (
        <ChoiceQuestion
          prompt={<ListenPrompt text={question.vocab.en} />}
          options={question.options.map((o) => ({ key: o.id, label: `${o.emoji} ${o.ckb}`, rtl: true }))}
          answerKey={question.vocab.id}
          onAnswer={(c) => onAnswer(c, [question.vocab.id])}
        />
      );
    case 'type-en':
      return <TypeQuestion vocab={question.vocab} support={support} onAnswer={(c) => onAnswer(c, [question.vocab.id])} />;
    case 'missing':
      return (
        <ChoiceQuestion
          prompt={
            <div className="text-center">
              <p dir="ltr" className="font-display text-2xl font-black leading-relaxed">
                {question.sentence}
              </p>
              <CkbHelp text={question.vocab.exampleCkb} support={support} className="mt-2 text-ink/60" />
            </div>
          }
          hint={<HintBar vocab={question.vocab} />}
          options={question.options.map((o) => ({ key: o, label: o, rtl: false }))}
          answerKey={question.vocab.en}
          onAnswer={(c) => onAnswer(c, [question.vocab.id])}
        />
      );
    case 'build':
      return <SentenceBuilder question={question} support={support} onAnswer={(c) => onAnswer(c, [question.vocab.id])} />;
    case 'match':
      return <MatchGame pairs={question.pairs} onAnswer={(c) => onAnswer(c, question.pairs.map((p) => p.id))} />;
    case 'conversation':
      return <ConversationQuestion question={question} support={support} onAnswer={(c) => onAnswer(c, [])} />;
    default:
      return null;
  }
}

function PromptWord({ vocab, showCkb, autoSpeak }: { vocab: VocabItem; showCkb: boolean; autoSpeak?: boolean }) {
  useEffect(() => {
    if (autoSpeak) speak(vocab.en);
  }, [vocab.en, autoSpeak]);
  return (
    <div className="text-center">
      <div className="text-5xl">{vocab.emoji}</div>
      <p dir="ltr" className="mt-2 font-display text-3xl font-black">
        {vocab.en}
      </p>
      {vocab.phonetic && (
        <p dir="ltr" className="mt-1 text-sm text-ink/50">
          {vocab.phonetic}
        </p>
      )}
      {showCkb && <p className="mt-1 text-lg font-bold">{vocab.ckb}</p>}
      <button
        className="btn-ghost mt-3 !min-h-[40px] !px-4 !py-2 text-base"
        onClick={() => speak(vocab.en)}
        aria-label={t.hearWord}
      >
        🔊 {t.hearWord}
      </button>
    </div>
  );
}

function ListenPrompt({ text }: { text: string }) {
  useEffect(() => {
    speak(text);
  }, [text]);
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <button
        className="btn-primary animate-ring h-24 w-24 !rounded-full text-4xl"
        onClick={() => speak(text)}
        aria-label={t.hearWord}
      >
        🔊
      </button>
      <button className="btn-ghost !min-h-[40px] !px-4 !py-2 text-base" onClick={() => speak(text, { slow: true })}>
        🐢 {t.hearSlow}
      </button>
    </div>
  );
}

interface Option {
  key: string;
  label: string;
  rtl: boolean;
}

function ChoiceQuestion({
  prompt,
  hint,
  options,
  answerKey,
  onAnswer,
}: {
  prompt: React.ReactNode;
  hint?: React.ReactNode;
  options: Option[];
  answerKey: string;
  onAnswer: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const reducedMotion = useProgress((s) => s.reducedMotion);

  const choose = (key: string) => {
    if (picked) return;
    setPicked(key);
    onAnswer(key === answerKey);
  };

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="card flex flex-1 flex-col items-center justify-center gap-4 py-8">
        {prompt}
        {hint}
      </div>
      <div className="grid grid-cols-1 gap-3">
        {options.map((o) => {
          const isPicked = picked === o.key;
          const wrongPick = isPicked && picked !== answerKey;
          return (
            <button
              key={o.key}
              dir={o.rtl ? 'rtl' : 'ltr'}
              className={`option-btn ${wrongPick && !reducedMotion ? 'animate-shake border-red-300 bg-red-50' : ''} ${
                isPicked && picked === answerKey ? 'border-brand-400 bg-brand-50' : ''
              }`}
              onClick={() => choose(o.key)}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TypeQuestion({
  vocab,
  support,
  onAnswer,
}: {
  vocab: VocabItem;
  support: SupportMode;
  onAnswer: (correct: boolean) => void;
}) {
  const [value, setValue] = useState('');
  const [revealed, setRevealed] = useState(1);
  const reducedMotion = useProgress((s) => s.reducedMotion);
  const [shake, setShake] = useState(false);

  const norm = (s: string) => s.toLowerCase().trim().replace(/\s+/g, ' ');
  const correct = norm(value) === norm(vocab.en);

  const submit = () => {
    if (!value.trim()) return;
    if (!correct && !reducedMotion) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    onAnswer(correct);
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="card flex flex-col items-center gap-3 py-8">
        <div className="text-7xl">{vocab.emoji}</div>
        <p className="text-lg font-bold text-ink/70">{t.typeWhatIsThis}</p>
        <CkbHelp text={vocab.ckb} support={support} className="text-xl font-black" />
        <button className="btn-ghost !min-h-[40px] !px-4 !py-2 text-base" onClick={() => speak(vocab.exampleEn)}>
          🔊 {t.hearWord}
        </button>
        <div dir="ltr" className="flex gap-1 font-display text-xl font-black text-ink/30">
          {vocab.en.split('').map((ch, i) => (
            <span key={i} className={i < revealed ? 'text-ink' : ''}>
              {i < revealed ? ch : '_'}
            </span>
          ))}
        </div>
        {revealed < Math.min(3, vocab.en.length) && (
          <button className="btn-ghost !min-h-[32px] !px-3 !py-1 text-sm" onClick={() => setRevealed((r) => r + 1)}>
            💡 {t.hintFirstLetter}
          </button>
        )}
      </div>
      <div className={shake ? 'animate-shake' : ''}>
        <input
          dir="ltr"
          className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 font-display text-xl font-bold outline-none focus:border-brand-400"
          placeholder={t.typeHere}
          value={value}
          autoCapitalize="off"
          autoCorrect="off"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
        />
      </div>
      <button className="btn-primary mt-auto" onClick={submit} disabled={!value.trim()}>
        {t.check}
      </button>
    </div>
  );
}

function SentenceBuilder({
  question,
  support,
  onAnswer,
}: {
  question: Extract<Question, { kind: 'build' }>;
  support: SupportMode;
  onAnswer: (correct: boolean) => void;
}) {
  const [placed, setPlaced] = useState<string[]>([]);
  const [remaining, setRemaining] = useState<string[]>(question.tokens);
  const built = placed.join(' ');

  const place = (word: string) => {
    setPlaced((p) => [...p, word]);
    setRemaining((r) => {
      const i = r.indexOf(word);
      return [...r.slice(0, i), ...r.slice(i + 1)];
    });
  };
  const unplace = (word: string) => {
    setPlaced((p) => {
      const i = p.lastIndexOf(word);
      return [...p.slice(0, i), ...p.slice(i + 1)];
    });
    setRemaining((r) => [...r, word]);
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="card text-center">
        <div className="text-4xl">{question.vocab.emoji}</div>
        <CkbHelp text={question.vocab.exampleCkb} support={support} className="mt-1 text-lg font-bold" />
      </div>
      <div dir="ltr" className="card flex min-h-[72px] flex-wrap items-center justify-center gap-2 border-2 border-dashed border-brand-200">
        {placed.length === 0 && <span className="text-ink/30">…</span>}
        {placed.map((w, i) => (
          <button key={`${w}-${i}`} className="rounded-xl bg-brand-500 px-3 py-2 font-display font-bold text-white" onClick={() => unplace(w)}>
            {w}
          </button>
        ))}
      </div>
      <div dir="ltr" className="flex flex-wrap items-center justify-center gap-2">
        {remaining.map((w, i) => (
          <button key={`${w}-${i}`} className="rounded-xl border-2 border-gray-200 bg-white px-3 py-2 font-display font-bold" onClick={() => place(w)}>
            {w}
          </button>
        ))}
      </div>
      <button className="btn-primary mt-auto" disabled={remaining.length > 0} onClick={() => onAnswer(built === question.answer)}>
        {t.check}
      </button>
    </div>
  );
}

function MatchGame({ pairs, onAnswer }: { pairs: VocabItem[]; onAnswer: (correct: boolean) => void }) {
  const shuffledCkb = useMemo(() => [...pairs].sort(() => Math.random() - 0.5), [pairs]);
  const [selEn, setSelEn] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const pickEn = (id: string) => {
    if (matched.has(id)) return;
    setSelEn(id);
    speak(pairs.find((p) => p.id === id)?.en ?? '');
  };

  const pickCkb = (id: string) => {
    if (!selEn || matched.has(id)) return;
    if (selEn === id) {
      const next = new Set(matched);
      next.add(id);
      setMatched(next);
      setSelEn(null);
      if (next.size === pairs.length) {
        setTimeout(() => onAnswer(mistakes === 0), 400);
      }
    } else {
      setMistakes((m) => m + 1);
      setWrongFlash(id);
      setTimeout(() => setWrongFlash(null), 450);
      setSelEn(null);
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div dir="ltr" className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          {pairs.map((p) => (
            <button
              key={p.id}
              className={`option-btn !min-h-[64px] font-display ${matched.has(p.id) ? 'border-brand-400 bg-brand-50 opacity-50' : ''} ${
                selEn === p.id ? 'border-accent bg-accent-light' : ''
              }`}
              onClick={() => pickEn(p.id)}
            >
              <span className="mr-1">{p.emoji}</span>
              {p.en}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {shuffledCkb.map((p) => (
            <button
              key={p.id}
              dir="rtl"
              className={`option-btn !min-h-[64px] ${matched.has(p.id) ? 'border-brand-400 bg-brand-50 opacity-50' : ''} ${
                wrongFlash === p.id ? 'animate-shake border-red-300 bg-red-50' : ''
              }`}
              onClick={() => pickCkb(p.id)}
            >
              {p.ckb}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ConversationQuestion({
  question,
  support,
  onAnswer,
}: {
  question: Extract<Question, { kind: 'conversation' }>;
  support: SupportMode;
  onAnswer: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const promptSpeaker = conversationSpeaker(question.promptLine);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="card flex flex-col gap-3">
        {question.lines.map((line, i) => {
          const speaker = conversationSpeaker(line);
          return (
            <div key={i} className="flex items-start gap-2">
              <span className="text-2xl">{speaker.avatar}</span>
              <div className="rounded-2xl rounded-tl-none bg-brand-50 px-3 py-2">
                <p dir="ltr" className="font-display font-bold">
                  {line.en}
                </p>
                <CkbHelp text={line.ckb} support={support} className="text-sm text-ink/60" />
              </div>
            </div>
          );
        })}
        <div className="flex items-start gap-2">
          <span className="text-2xl">{promptSpeaker.avatar}</span>
          <div className="rounded-2xl rounded-tl-none border-2 border-dashed border-accent bg-accent-light px-3 py-2">
            <p className="font-bold">؟؟؟</p>
            <CkbHelp text={question.promptLine.ckb} support={support} className="text-sm text-ink/60" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((o) => (
          <button
            key={o}
            dir="ltr"
            className={`option-btn font-display ${picked === o && o !== question.answer ? 'animate-shake border-red-300 bg-red-50' : ''} ${
              picked === o && o === question.answer ? 'border-brand-400 bg-brand-50' : ''
            }`}
            onClick={() => {
              if (picked) return;
              setPicked(o);
              if (o === question.answer) speak(o);
              onAnswer(o === question.answer);
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
