import { useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { t } from '../i18n/ckb';
import { getLevel, levels } from '../content/levels';
import { generateExam, generateRound1, generateRound2, supportModeForLevel, type SupportMode } from '../engine/questions';
import { CkbHelp, QuizRunner, type QuizResult } from '../components/games';
import { VocabCard } from '../components/VocabCard';
import { Screen, Stars } from '../components/ui';
import { playSound, speak } from '../audio';
import { getCharacter } from '../content/characters';
import { accuracy, isLevelUnlocked, useProgress, wordsLearned } from '../state/progress';

type Phase = 'intro' | 'learn' | 'round1' | 'round2' | 'examIntro' | 'exam' | 'result';

const XP_CORRECT = 10;
const XP_PERFECT_ROUND = 25;
const XP_EXAM_PASS = 100;
const COINS_EXAM_PASS = 20;

export function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const level = getLevel(Number(id));
  const s = useProgress();

  const [phase, setPhase] = useState<Phase>('intro');
  const [cardIndex, setCardIndex] = useState(0);
  const [examAttempt, setExamAttempt] = useState(0);
  const [examResults, setExamResults] = useState<QuizResult[]>([]);
  const [startedAt] = useState(Date.now());
  const minutesRef = useRef(0);

  const round1 = useMemo(() => (level ? generateRound1(level) : []), [level]);
  const round2 = useMemo(() => (level ? generateRound2(level) : []), [level]);
  const exam = useMemo(() => (level ? generateExam(level, levels, examAttempt) : []), [level, examAttempt]);

  if (!level) {
    return (
      <Screen>
        <p>404</p>
      </Screen>
    );
  }
  if (!isLevelUnlocked(s.levels, level.id)) {
    return (
      <Screen>
        <div className="card mt-10 text-center">
          <div className="text-5xl">🔒</div>
          <p className="mt-2 font-black">{t.locked}</p>
          <Link to="/map" className="btn-primary mt-4 inline-flex">
            {t.backToMap}
          </Link>
        </div>
      </Screen>
    );
  }

  const trackAnswer = (r: QuizResult) => {
    s.recordAnswer(r.vocabIds, r.correct, level.id);
    if (r.correct) s.addXp(XP_CORRECT);
  };

  const support = supportModeForLevel(level.id);
  const isFinalLevel = level.id === levels.length;

  const finishRound = (results: QuizResult[], nextPhase: Phase) => {
    if (results.length > 0 && results.every((r) => r.correct)) s.addXp(XP_PERFECT_ROUND);
    minutesRef.current += 1;
    setPhase(nextPhase);
  };

  const finishExam = (results: QuizResult[]) => {
    const correct = results.filter((r) => r.correct).length;
    const score = results.length ? Math.round((correct / results.length) * 100) : 0;
    s.completeLevel(level.id, score);
    const elapsedMin = Math.max(1, Math.round((Date.now() - startedAt) / 60000)) + minutesRef.current;
    s.addStudyMinutes(Math.min(elapsedMin, 60));
    if (score >= 70) {
      s.addXp(XP_EXAM_PASS);
      s.addCoins(COINS_EXAM_PASS + Math.round(score / 10));
      playSound('complete', s.soundOn);
    }
    setExamResults(results);
    setPhase('result');
  };

  if (phase === 'intro') return <LevelIntro level={level} onStart={() => setPhase('learn')} />;
  if (phase === 'learn')
    return (
      <LearnStage
        level={level}
        support={support}
        cardIndex={cardIndex}
        onCard={(i) => setCardIndex(i)}
        onDone={() => setPhase('round1')}
        onExit={() => navigate('/map')}
      />
    );
  if (phase === 'round1')
    return (
      <StageShell title={t.practiceRound1} onExit={() => navigate('/map')}>
        <QuizRunner questions={round1} heading={t.practiceRound1} support={support} onAnswer={trackAnswer} onDone={(r) => finishRound(r, 'round2')} />
      </StageShell>
    );
  if (phase === 'round2')
    return (
      <StageShell title={t.practiceRound2} onExit={() => navigate('/map')}>
        <QuizRunner questions={round2} heading={t.practiceRound2} support={support} onAnswer={trackAnswer} onDone={(r) => finishRound(r, 'examIntro')} />
      </StageShell>
    );
  if (phase === 'examIntro') return <ExamIntro level={level} onStart={() => setPhase('exam')} />;
  if (phase === 'exam')
    return (
      <StageShell title={`${t.exam} · ${level.titleCkb}`} onExit={() => navigate('/map')}>
        <QuizRunner key={examAttempt} questions={exam} heading={t.exam} support={support} onAnswer={trackAnswer} onDone={finishExam} />
      </StageShell>
    );
  return (
    <ExamResult
      level={level}
      results={examResults}
      isFinalLevel={isFinalLevel}
      onRetry={() => {
        setExamAttempt((a) => a + 1);
        setPhase('exam');
      }}
    />
  );
}

function StageShell({ title, children, onExit }: { title: string; children: React.ReactNode; onExit: () => void }) {
  return (
    <Screen>
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-xl font-black">{title}</h1>
        <button className="btn-ghost !min-h-[36px] !px-3 !py-1 text-sm" onClick={onExit}>
          ✕ {t.exitLesson}
        </button>
      </div>
      {children}
    </Screen>
  );
}

function LevelIntro({ level, onStart }: { level: NonNullable<ReturnType<typeof getLevel>>; onStart: () => void }) {
  return (
    <Screen>
      <div className="card mt-4 flex flex-col items-center gap-4 py-8 text-center">
        <p className="text-sm font-black tracking-widest text-brand-600">
          {t.level} {level.id}
        </p>
        <div className="text-7xl">{level.icon}</div>
        <h1 className="text-3xl font-black">{level.titleCkb}</h1>
        <p dir="ltr" className="font-display text-xl font-bold text-ink/60">
          {level.titleEn}
        </p>

        <div className="w-full rounded-2xl bg-brand-50 p-4 text-start">
          <p className="mb-2 font-black">{t.youWillLearn}</p>
          <div className="flex flex-wrap gap-2">
            {level.vocab.slice(0, 8).map((v) => (
              <span key={v.id} className="rounded-xl bg-white px-3 py-1 text-sm font-bold">
                {v.emoji} <span dir="ltr">{v.en}</span>
              </span>
            ))}
            {level.vocab.length > 8 && <span className="rounded-xl bg-white px-3 py-1 text-sm font-bold">+{level.vocab.length - 8}</span>}
          </div>
        </div>

        <div className="w-full rounded-2xl bg-accent-light p-4">
          <p className="mb-1 font-black">🎯 {t.objective}</p>
          <p>{level.objectiveCkb}</p>
        </div>

        <button className="btn-primary w-full text-xl" onClick={onStart}>
          {t.startLesson}
        </button>
      </div>
    </Screen>
  );
}

function LearnStage({
  level,
  support,
  cardIndex,
  onCard,
  onDone,
  onExit,
}: {
  level: NonNullable<ReturnType<typeof getLevel>>;
  support: SupportMode;
  cardIndex: number;
  onCard: (i: number) => void;
  onDone: () => void;
  onExit: () => void;
}) {
  const [showGrammar, setShowGrammar] = useState(false);
  const total = level.vocab.length;

  if (cardIndex >= total) {
    const patterns = level.grammarPatterns ?? [];
    const conv = level.conversation ?? [];
    return (
      <StageShell title={t.learnStage} onExit={onExit}>
        <div className="card">
          <div className="mb-3 flex gap-2">
            <button className={`btn-ghost flex-1 !text-base ${!showGrammar ? 'border-brand-400 bg-brand-50' : ''}`} onClick={() => setShowGrammar(false)}>
              💬 {t.lesson}
            </button>
            <button className={`btn-ghost flex-1 !text-base ${showGrammar ? 'border-brand-400 bg-brand-50' : ''}`} onClick={() => setShowGrammar(true)}>
              📐 {t.grammar}
            </button>
          </div>

          {!showGrammar ? (
            <div className="flex flex-col gap-3">
              {conv.map((line, i) => (
                <button key={i} className="flex items-start gap-2 text-start" onClick={() => speak(line.en)}>
                  <span className="text-2xl">{getCharacter(line.characterId).avatar}</span>
                  <span className="rounded-2xl rounded-tl-none bg-brand-50 px-3 py-2">
                    <span dir="ltr" className="block font-display font-bold">
                      {line.en}
                    </span>
                    <CkbHelp text={line.ckb} support={support} className="block text-sm text-ink/60" />
                  </span>
                </button>
              ))}
              {conv.length === 0 && <p className="text-ink/60">—</p>}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {patterns.map((p, i) => (
                <button key={i} className="rounded-2xl bg-accent-light p-3 text-start" onClick={() => speak(p.en)}>
                  <span dir="ltr" className="block font-display font-bold">
                    {p.en}
                  </span>
                  <CkbHelp text={p.ckb} support={support} className="block text-sm text-ink/70" />
                </button>
              ))}
              {patterns.length === 0 && <p className="text-ink/60">—</p>}
            </div>
          )}
        </div>
        <button className="btn-primary mt-4 w-full text-xl" onClick={onDone}>
          {t.practiceRound1} ◀
        </button>
      </StageShell>
    );
  }

  const vocab = level.vocab[cardIndex];
  return (
    <StageShell title={`${t.learnStage} · ${level.titleCkb}`} onExit={onExit}>
      <div className="mb-4 h-3 overflow-hidden rounded-full bg-brand-100">
        <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${(cardIndex / total) * 100}%` }} />
      </div>
      <VocabCard key={vocab.id} vocab={vocab} support={support} last={cardIndex + 1 >= total} onNext={() => onCard(cardIndex + 1)} />
    </StageShell>
  );
}

function ExamIntro({ level, onStart }: { level: NonNullable<ReturnType<typeof getLevel>>; onStart: () => void }) {
  return (
    <Screen>
      <div className="card mt-10 flex flex-col items-center gap-4 py-8 text-center">
        <div className="text-7xl">🏆</div>
        <h1 className="text-3xl font-black">{t.examIntro}</h1>
        <p className="text-lg font-bold text-ink/70">
          {level.icon} {level.titleCkb}
        </p>
        <div className="w-full rounded-2xl bg-brand-50 p-4">
          <p className="font-bold">✅ ٧٠٪ = {t.examPassed}</p>
          <p className="text-sm text-ink/60">⭐⭐⭐ = ٨٥٪+</p>
          {level.id % 5 === 0 && (
            <p className="mt-1 text-sm font-bold text-accent-dark">
              🔥 {t.mission}: {t.reviewTitle} {level.id === levels.length ? `1–${levels.length}` : `${level.id - 4}–${level.id}`}
            </p>
          )}
        </div>
        <button className="btn-primary w-full text-xl" onClick={onStart}>
          {t.start} ◀
        </button>
      </div>
    </Screen>
  );
}

function ExamResult({
  level,
  results,
  isFinalLevel,
  onRetry,
}: {
  level: NonNullable<ReturnType<typeof getLevel>>;
  results: QuizResult[];
  isFinalLevel: boolean;
  onRetry: () => void;
}) {
  const s = useProgress();
  const correct = results.filter((r) => r.correct).length;
  const score = results.length ? Math.round((correct / results.length) * 100) : 0;
  const passed = score >= 70;
  const stars = score >= 85 ? 3 : score >= 70 ? 2 : score >= 50 ? 1 : 0;

  const weakIds = new Set<string>();
  for (const r of results) {
    if (!r.correct) r.vocabIds.forEach((id) => weakIds.add(id));
  }
  const weakVocab = level.vocab.filter((v) => weakIds.has(v.id));

  if (passed && isFinalLevel) return <CourseComplete />;

  return (
    <Screen>
      <div className="card mt-6 flex flex-col items-center gap-4 py-8 text-center">
        <div className="text-7xl">{passed ? '🎉' : '💪'}</div>
        <h1 className="text-3xl font-black">{passed ? t.levelComplete : t.examFailedTitle}</h1>
        <p className="text-xl font-bold">
          {level.icon} {level.titleCkb}
        </p>
        <Stars n={stars} size="text-4xl" />
        <p className="font-display text-5xl font-black text-brand-600" dir="ltr">
          {score}%
        </p>

        {passed ? (
          <div className="grid w-full grid-cols-2 gap-2">
            <div className="rounded-2xl bg-brand-50 p-3">
              <p className="text-sm font-bold text-ink/60">{t.newWordsLearned(level.vocab.length)}</p>
            </div>
            <div className="rounded-2xl bg-accent-light p-3">
              <p className="text-sm font-bold text-ink/60">{t.xpEarned(XP_EXAM_PASS)}</p>
            </div>
          </div>
        ) : (
          <div className="w-full rounded-2xl bg-red-50 p-4 text-start">
            <p className="mb-2 font-black">{t.weakWords}</p>
            <div className="flex flex-wrap gap-2">
              {weakVocab.slice(0, 8).map((v) => (
                <span key={v.id} className="rounded-xl bg-white px-3 py-1 text-sm font-bold">
                  🔴 {v.emoji} <span dir="ltr">{v.en}</span>
                </span>
              ))}
              {weakVocab.length === 0 && <span className="text-sm">—</span>}
            </div>
            <p className="mt-3 text-sm text-ink/70">{t.examFailedBody}</p>
          </div>
        )}

        {passed ? (
          <>
            <div className="w-full rounded-2xl bg-brand-50 p-4 text-start">
              <p className="mb-2 font-black">{t.whatYouLearned}</p>
              {(level.grammarPatterns ?? []).slice(0, 4).map((p, i) => (
                <p key={i} className="text-sm font-bold">
                  ✓ <span dir="ltr">{p.en}</span>
                </p>
              ))}
            </div>
            <Link to={level.id < levels.length ? `/lesson/${level.id + 1}` : '/map'} className="btn-primary w-full text-xl">
              {t.continueArrow}
            </Link>
          </>
        ) : (
          <button className="btn-accent w-full text-xl" onClick={onRetry}>
            {t.practiceAgain}
          </button>
        )}
        <Link to="/map" className="btn-ghost w-full">
          {t.backToMap}
        </Link>
      </div>
    </Screen>
  );
}

// Shown after passing the final level of the course.
function CourseComplete() {
  const s = useProgress();
  const levelsDone = Object.values(s.levels).filter((l) => l.completed).length;
  const acc = accuracy(s.totalCorrect, s.totalAnswers);

  return (
    <Screen>
      <div className="card mt-6 flex flex-col items-center gap-4 py-8 text-center">
        <div className="text-8xl">🎉</div>
        <h1 className="text-3xl font-black text-brand-700">{t.courseCompleteTitle}</h1>
        <p className="font-bold text-ink/70">{t.courseCompleteBody}</p>

        <div className="grid w-full grid-cols-2 gap-2">
          <div className="rounded-2xl bg-brand-50 p-3">
            <p className="font-display text-2xl font-black" dir="ltr">
              {levelsDone}
            </p>
            <p className="text-xs font-bold text-ink/60">{t.statLevels}</p>
          </div>
          <div className="rounded-2xl bg-brand-50 p-3">
            <p className="font-display text-2xl font-black" dir="ltr">
              {wordsLearned(s.vocabMastery)}
            </p>
            <p className="text-xs font-bold text-ink/60">{t.statWords}</p>
          </div>
          <div className="rounded-2xl bg-accent-light p-3">
            <p className="font-display text-2xl font-black" dir="ltr">
              {s.xp}
            </p>
            <p className="text-xs font-bold text-ink/60">{t.statXp}</p>
          </div>
          <div className="rounded-2xl bg-accent-light p-3">
            <p className="font-display text-2xl font-black" dir="ltr">
              {acc}%
            </p>
            <p className="text-xs font-bold text-ink/60">{t.statAccuracy}</p>
          </div>
          <div className="rounded-2xl bg-brand-50 p-3">
            <p className="font-display text-2xl font-black" dir="ltr">
              {s.streak}
            </p>
            <p className="text-xs font-bold text-ink/60">{t.statDaysStudied}</p>
          </div>
          <div className="rounded-2xl bg-brand-50 p-3">
            <p className="font-display text-2xl font-black" dir="ltr">
              {s.unlockedAchievements.length}
            </p>
            <p className="text-xs font-bold text-ink/60">{t.achievementsTitle}</p>
          </div>
        </div>

        <div className="w-full rounded-2xl border-2 border-dashed border-accent bg-accent-light p-4">
          <p className="font-black">🚀 {t.nextCourse}</p>
          <p className="text-sm text-ink/70">{t.nextCourseBody}</p>
        </div>

        <Link to="/map" className="btn-primary w-full text-xl">
          {t.backToMap}
        </Link>
      </div>
    </Screen>
  );
}
