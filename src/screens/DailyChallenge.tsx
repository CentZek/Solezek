import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { t } from '../i18n/ckb';
import { levels } from '../content/levels';
import { generateReview, supportModeForLevel } from '../engine/questions';
import { QuizRunner, type QuizResult } from '../components/games';
import { Screen } from '../components/ui';
import { playSound } from '../audio';
import { currentLevelId, todayString, useProgress } from '../state/progress';
import type { VocabItem } from '../types/content';

const allVocab: VocabItem[] = levels.flatMap((l) => l.vocab);

const XP_CHALLENGE = 50;
const COINS_CHALLENGE = 10;

// One 5-question challenge per day, generated from the learner's level range.
export function DailyChallenge() {
  const s = useProgress();
  const doneToday = s.lastDailyChallenge === todayString();
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const questions = useMemo(() => {
    const current = currentLevelId(s.levels);
    const eligible = allVocab.filter((v) => {
      const levelNum = Number(v.id.split('-')[0].slice(1));
      return levelNum <= current;
    });
    const pool = eligible.length >= 5 ? eligible : allVocab;
    const dateSeed = Number(todayString().replace(/-/g, ''));
    return generateReview(pool, dateSeed).slice(0, 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (doneToday && !finished) {
    return (
      <Screen>
        <div className="card mt-10 flex flex-col items-center gap-4 py-8 text-center">
          <div className="text-6xl">🔥</div>
          <h1 className="text-2xl font-black">{t.dailyChallengeDone}</h1>
          <p className="text-ink/70">{t.challengeReward}</p>
          <Link to="/" className="btn-primary w-full">
            {t.back}
          </Link>
        </div>
      </Screen>
    );
  }

  if (finished) {
    return (
      <Screen>
        <div className="card mt-10 flex flex-col items-center gap-4 py-8 text-center">
          <div className="text-6xl">{score >= 4 ? '🎉' : '💪'}</div>
          <h1 className="text-2xl font-black">{t.dailyChallengeDone}</h1>
          <p className="font-display text-4xl font-black text-brand-600" dir="ltr">
            {score} / 5
          </p>
          <p className="font-bold text-accent-dark">{t.challengeReward}</p>
          <Link to="/" className="btn-primary w-full">
            {t.finish}
          </Link>
        </div>
      </Screen>
    );
  }

  const current = currentLevelId(s.levels);
  return (
    <Screen>
      <h1 className="mb-4 text-2xl font-black">{t.dailyChallenge}</h1>
      <QuizRunner
        questions={questions}
        heading={t.dailyChallenge}
        support={supportModeForLevel(current)}
        onAnswer={(r: QuizResult) => {
          s.recordAnswer(r.vocabIds, r.correct, current);
        }}
        onDone={(results) => {
          const correct = results.filter((r) => r.correct).length;
          s.addXp(XP_CHALLENGE);
          s.addCoins(COINS_CHALLENGE);
          s.addStudyMinutes(2);
          s.completeDailyChallenge();
          playSound('reward', s.soundOn);
          setScore(correct);
          setFinished(true);
        }}
      />
    </Screen>
  );
}
