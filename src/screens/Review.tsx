import { useMemo, useState } from 'react';
import { t } from '../i18n/ckb';
import { levels } from '../content/levels';
import { generateReview } from '../engine/questions';
import { QuizRunner, type QuizResult } from '../components/games';
import { Screen } from '../components/ui';
import { reviewQueue, useProgress } from '../state/progress';
import type { VocabItem } from '../types/content';

const allVocab: VocabItem[] = levels.flatMap((l) => l.vocab);
const vocabMap = new Map(allVocab.map((v) => [v.id, v]));

export function Review() {
  const s = useProgress();
  const dueIds = reviewQueue(s.vocabMastery);
  const dueItems = dueIds.map((id) => vocabMap.get(id)).filter((v): v is VocabItem => !!v);

  const [session, setSession] = useState<VocabItem[] | null>(null);
  const questions = useMemo(() => (session ? generateReview(session) : null), [session]);

  const buckets = {
    new: allVocab.filter((v) => !s.vocabMastery[v.id]).length,
    learning: allVocab.filter((v) => (s.vocabMastery[v.id]?.score ?? 0) >= 1 && (s.vocabMastery[v.id]?.score ?? 0) <= 2).length,
    strong: allVocab.filter((v) => (s.vocabMastery[v.id]?.score ?? 0) >= 3 && (s.vocabMastery[v.id]?.score ?? 0) <= 4).length,
    mastered: allVocab.filter((v) => (s.vocabMastery[v.id]?.score ?? 0) === 5).length,
  };

  if (questions && session) {
    return (
      <Screen>
        <QuizRunner
          questions={questions}
          heading={t.reviewTitle}
          onAnswer={(r: QuizResult) => {
            const levelId = r.vocabIds.length ? (vocabMap.get(r.vocabIds[0]) ? s.vocabMastery[r.vocabIds[0]]?.levelId ?? 1 : 1) : 1;
            s.recordAnswer(r.vocabIds, r.correct, levelId);
            if (r.correct) s.addXp(5);
          }}
          onDone={() => {
            s.addStudyMinutes(2);
            setSession(null);
          }}
        />
      </Screen>
    );
  }

  return (
    <Screen>
      <h1 className="text-3xl font-black">🔄 {t.reviewTitle}</h1>
      <p className="mt-2 text-ink/70">{t.reviewIntro}</p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="card !p-3 text-center">
          <p className="font-black">{t.buckets.new}</p>
          <p className="font-display text-2xl font-black" dir="ltr">
            {buckets.new}
          </p>
        </div>
        <div className="card !p-3 text-center">
          <p className="font-black">{t.buckets.learning}</p>
          <p className="font-display text-2xl font-black" dir="ltr">
            {buckets.learning}
          </p>
        </div>
        <div className="card !p-3 text-center">
          <p className="font-black">{t.buckets.strong}</p>
          <p className="font-display text-2xl font-black" dir="ltr">
            {buckets.strong}
          </p>
        </div>
        <div className="card !p-3 text-center">
          <p className="font-black">{t.buckets.mastered}</p>
          <p className="font-display text-2xl font-black" dir="ltr">
            {buckets.mastered}
          </p>
        </div>
      </div>

      {dueItems.length > 0 ? (
        <>
          <div className="card mt-4">
            <p className="mb-2 font-black">{t.readyForReview(dueItems.length)}</p>
            <div className="flex flex-wrap gap-2">
              {dueItems.slice(0, 10).map((v) => (
                <span key={v.id} className="rounded-xl bg-brand-50 px-3 py-1 text-sm font-bold">
                  {v.emoji} <span dir="ltr">{v.en}</span>
                </span>
              ))}
            </div>
          </div>
          <button className="btn-primary mt-4 w-full text-xl" onClick={() => setSession(dueItems)}>
            {t.startReview}
          </button>
        </>
      ) : (
        <div className="card mt-6 py-8 text-center">
          <div className="text-5xl">🌿</div>
          <p className="mt-2 font-bold">{t.noDueWords}</p>
        </div>
      )}
    </Screen>
  );
}
