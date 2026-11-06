import type { Level, VocabItem, RevisionMode } from '../types/content';
import type { VocabMastery } from '../state/progress';

type MasteryMap = Record<string, VocabMastery>;

type Candidate = {
  vocab: VocabItem;
  sourceId: number;
  mastery?: VocabMastery;
};

const specs: Array<Omit<Level, 'vocab'>> = [
  { id: 81, titleEn: 'Foundation Diagnostic', titleCkb: 'پشکنینا بنچینەیی', icon: '🧭', objectiveEn: 'Check retention across lessons 1–20 and identify weak areas.', objectiveCkb: 'پەیڤێن وانەیێن ١–٢٠ پشکنین بکە و بشێن پێشتر نەباش فێربووی ببینە.', cefr: 'A2', revision: { sourceStart: 1, sourceEnd: 20, mode: 'diagnostic' } },
  { id: 82, titleEn: 'Foundation Repair: First Steps', titleCkb: 'چارەسەری: گاڤێن ئێکەم', icon: '🧱', objectiveEn: 'Reteach your weakest vocabulary from lessons 1–10.', objectiveCkb: 'کێمترین پەیڤێن وانەیێن ١–١٠ باشتر فێر ببە.', cefr: 'A2', revision: { sourceStart: 1, sourceEnd: 10, mode: 'targeted' } },
  { id: 83, titleEn: 'Foundation Repair: Daily Basics', titleCkb: 'چارەسەری: بنچینەیا ڕۆژانە', icon: '🏡', objectiveEn: 'Reteach your weakest vocabulary from lessons 11–20.', objectiveCkb: 'کێمترین پەیڤێن وانەیێن ١١–٢٠ باشتر فێر ببە.', cefr: 'A2', revision: { sourceStart: 11, sourceEnd: 20, mode: 'targeted' } },
  { id: 84, titleEn: 'Foundation in Use', titleCkb: 'بکارئینانا بنچینەیی', icon: '🗣️', objectiveEn: 'Produce weak foundation vocabulary in sentences and conversations.', objectiveCkb: 'پەیڤێن بنچینەیی یێن نەباش د بەرسڤ و ئاخفتنان دا بکاربینە.', cefr: 'A2', revision: { sourceStart: 1, sourceEnd: 20, mode: 'production' } },
  { id: 85, titleEn: 'Foundation Checkpoint', titleCkb: 'ئاسساینا بنچینەیی', icon: '✅', objectiveEn: 'Confirm foundation mastery and identify lessons to revisit.', objectiveCkb: 'فێربوونا بنچینەیی پشتڕاست بکە و وانەیێن بۆ دووبارەکرنێ ببینە.', cefr: 'A2', revision: { sourceStart: 1, sourceEnd: 20, mode: 'checkpoint' } },
  { id: 86, titleEn: 'Everyday English Diagnostic', titleCkb: 'پشکنینا ئینگلیزیا ڕۆژانە', icon: '🧭', objectiveEn: 'Check retention across lessons 21–40 and identify weak areas.', objectiveCkb: 'پەیڤێن وانەیێن ٢١–٤٠ پشکنین بکە و بشێن پێشتر نەباش فێربووی ببینە.', cefr: 'A2', revision: { sourceStart: 21, sourceEnd: 40, mode: 'diagnostic' } },
  { id: 87, titleEn: 'Everyday Repair: Actions and Feelings', titleCkb: 'چارەسەری: کرار و هەست', icon: '💭', objectiveEn: 'Reteach your weakest vocabulary from lessons 21–30.', objectiveCkb: 'کێمترین پەیڤێن وانەیێن ٢١–٣٠ باشتر فێر ببە.', cefr: 'A2', revision: { sourceStart: 21, sourceEnd: 30, mode: 'targeted' } },
  { id: 88, titleEn: 'Everyday Repair: Practical Situations', titleCkb: 'چارەسەری: بابەتێن ڕۆژانە', icon: '🛍️', objectiveEn: 'Reteach your weakest vocabulary from lessons 31–40.', objectiveCkb: 'کێمترین پەیڤێن وانەیێن ٣١–٤٠ باشتر فێر ببە.', cefr: 'A2', revision: { sourceStart: 31, sourceEnd: 40, mode: 'targeted' } },
  { id: 89, titleEn: 'Everyday English in Use', titleCkb: 'بکارئینانا ئینگلیزیا ڕۆژانە', icon: '🗣️', objectiveEn: 'Produce weak everyday vocabulary in sentences and conversations.', objectiveCkb: 'پەیڤێن ڕۆژانە یێن نەباش د بەرسڤ و ئاخفتنان دا بکاربینە.', cefr: 'A2', revision: { sourceStart: 21, sourceEnd: 40, mode: 'production' } },
  { id: 90, titleEn: 'Everyday English Checkpoint', titleCkb: 'ئاسساینا ئینگلیزیا ڕۆژانە', icon: '✅', objectiveEn: 'Confirm everyday mastery and identify lessons to revisit.', objectiveCkb: 'فێربوونا ڕۆژانە پشتڕاست بکە و وانەیێن بۆ دووبارەکرنێ ببینە.', cefr: 'A2', revision: { sourceStart: 21, sourceEnd: 40, mode: 'checkpoint' } },
  { id: 91, titleEn: 'Practical A2 Diagnostic', titleCkb: 'پشکنینا A2', icon: '🧭', objectiveEn: 'Check retention across lessons 41–60 and identify weak areas.', objectiveCkb: 'پەیڤێن وانەیێن ٤١–٦٠ پشکنین بکە و بشێن پێشتر نەباش فێربووی ببینە.', cefr: 'A2', revision: { sourceStart: 41, sourceEnd: 60, mode: 'diagnostic' } },
  { id: 92, titleEn: 'A2 Repair: Daily Life', titleCkb: 'چارەسەری: ژیانا ڕۆژانە', icon: '🗓️', objectiveEn: 'Reteach your weakest vocabulary from lessons 41–50.', objectiveCkb: 'کێمترین پەیڤێن وانەیێن ٤١–٥٠ باشتر فێر ببە.', cefr: 'A2', revision: { sourceStart: 41, sourceEnd: 50, mode: 'targeted' } },
  { id: 93, titleEn: 'A2 Repair: People and Travel', titleCkb: 'چارەسەری: خەلک و گەشت', icon: '🧳', objectiveEn: 'Reteach your weakest vocabulary from lessons 51–60.', objectiveCkb: 'کێمترین پەیڤێن وانەیێن ٥١–٦٠ باشتر فێر ببە.', cefr: 'A2', revision: { sourceStart: 51, sourceEnd: 60, mode: 'targeted' } },
  { id: 94, titleEn: 'Practical A2 in Use', titleCkb: 'بکارئینانا A2', icon: '🗣️', objectiveEn: 'Produce weak practical vocabulary in sentences and conversations.', objectiveCkb: 'پەیڤێن A2 یێن نەباش د بەرسڤ و ئاخفتنان دا بکاربینە.', cefr: 'A2', revision: { sourceStart: 41, sourceEnd: 60, mode: 'production' } },
  { id: 95, titleEn: 'Practical A2 Checkpoint', titleCkb: 'ئاسساینا A2', icon: '✅', objectiveEn: 'Confirm practical A2 mastery and identify lessons to revisit.', objectiveCkb: 'فێربوونا A2 پشتڕاست بکە و وانەیێن بۆ دووبارەکرنێ ببینە.', cefr: 'A2', revision: { sourceStart: 41, sourceEnd: 60, mode: 'checkpoint' } },
  { id: 96, titleEn: 'A2 Plus Diagnostic', titleCkb: 'پشکنینا A2 Plus', icon: '🧭', objectiveEn: 'Check retention across lessons 61–80 and identify weak areas.', objectiveCkb: 'پەیڤێن وانەیێن ٦١–٨٠ پشکنین بکە و بشێن پێشتر نەباش فێربووی ببینە.', cefr: 'A2', revision: { sourceStart: 61, sourceEnd: 80, mode: 'diagnostic' } },
  { id: 97, titleEn: 'A2 Plus Targeted Repair', titleCkb: 'چارەسەری: تەندروستی و پاشەرۆژ', icon: '🎯', objectiveEn: 'Reteach your weakest vocabulary from lessons 61–80.', objectiveCkb: 'کێمترین پەیڤێن وانەیێن ٦١–٨٠ باشتر فێر ببە.', cefr: 'A2', revision: { sourceStart: 61, sourceEnd: 80, mode: 'targeted' } },
  { id: 98, titleEn: 'Personal Weak-Area Lesson', titleCkb: 'وانەیا تایبەت ب بشێن نەباش', icon: '🧑‍🎓', objectiveEn: 'Reteach your weakest vocabulary from the entire course.', objectiveCkb: 'کێمترین پەیڤێن هەمی خولێ ب شێوەیەکی تایبەت بۆ تە دووبارە بکە.', cefr: 'A2', revision: { sourceStart: 1, sourceEnd: 80, mode: 'targeted' } },
  { id: 99, titleEn: 'Final Readiness Rehearsal', titleCkb: 'ئامادەکرنا تاقیکرنا دوماهیێ', icon: '🗣️', objectiveEn: 'Rehearse weak areas through production and mixed-course questions.', objectiveCkb: 'بشێن نەباش ب بەرسڤ و پرسیارێن هەمی خولێ ئامادە بکە.', cefr: 'A2', revision: { sourceStart: 1, sourceEnd: 80, mode: 'production' } },
  { id: 100, titleEn: 'Course Mastery Assessment', titleCkb: 'تاقیکرنا فێربوونا هەمی خولێ', icon: '🏆', objectiveEn: 'Demonstrate course mastery and receive a personalized revisit plan.', objectiveCkb: 'فێربوونا هەمی خولێ نیشان بدە و پلانەکا تایبەت بۆ دووبارەکرنێ وەربگرە.', cefr: 'A2', revision: { sourceStart: 1, sourceEnd: 80, mode: 'mastery' } },
];

function candidates(sourceLevels: Level[], mastery: MasteryMap): Candidate[] {
  return sourceLevels.flatMap((level) => level.vocab.map((vocab) => ({ vocab, sourceId: level.id, mastery: mastery[vocab.id] })));
}

function compareWeakness(a: Candidate, b: Candidate): number {
  const score = (a.mastery?.score ?? 0) - (b.mastery?.score ?? 0);
  if (score) return score;
  const wrong = (b.mastery?.wrong ?? 0) - (a.mastery?.wrong ?? 0);
  if (wrong) return wrong;
  const aAnswers = (a.mastery?.correct ?? 0) + (a.mastery?.wrong ?? 0);
  const bAnswers = (b.mastery?.correct ?? 0) + (b.mastery?.wrong ?? 0);
  const aAccuracy = aAnswers ? (a.mastery?.correct ?? 0) / aAnswers : 0;
  const bAccuracy = bAnswers ? (b.mastery?.correct ?? 0) / bAnswers : 0;
  if (aAccuracy !== bAccuracy) return aAccuracy - bAccuracy;
  return a.vocab.id.localeCompare(b.vocab.id);
}

function takeDiverse(items: Candidate[], count: number): Candidate[] {
  const selected: Candidate[] = [];
  const perLesson = new Map<number, number>();
  for (const item of items) {
    const used = perLesson.get(item.sourceId) ?? 0;
    if (used >= 2 || selected.some((s) => s.vocab.id === item.vocab.id || s.vocab.en === item.vocab.en || s.vocab.ckb === item.vocab.ckb)) continue;
    selected.push(item);
    perLesson.set(item.sourceId, used + 1);
    if (selected.length === count) break;
  }
  return selected;
}

function selectVocab(sourceLevels: Level[], mastery: MasteryMap, mode: RevisionMode): VocabItem[] {
  const all = candidates(sourceLevels, mastery);
  if (mode === 'diagnostic') {
    const groups = sourceLevels.map((level) => candidates([level], mastery).sort(compareWeakness));
    const selected: Candidate[] = [];
    for (let index = 0; selected.length < 12; index++) {
      let added = false;
      for (const group of groups) {
        const candidate = group[index];
        if (candidate && !selected.some((s) => s.vocab.en === candidate.vocab.en || s.vocab.ckb === candidate.vocab.ckb)) {
          selected.push(candidate);
          added = true;
          if (selected.length === 12) break;
        }
      }
      if (!added) break;
    }
    return selected.map((item) => item.vocab);
  }

  const sorted = [...all].sort(compareWeakness);
  if (mode === 'checkpoint' || mode === 'mastery') {
    const weak = takeDiverse(sorted, 10);
    const selectedIds = new Set(weak.map((item) => item.vocab.id));
    const selectedEn = new Set(weak.map((item) => item.vocab.en));
    const selectedCkb = new Set(weak.map((item) => item.vocab.ckb));
    const strong = [...all]
      .filter((item) => !selectedIds.has(item.vocab.id) && !selectedEn.has(item.vocab.en) && !selectedCkb.has(item.vocab.ckb))
      .sort((a, b) => (b.mastery?.score ?? 0) - (a.mastery?.score ?? 0) || compareWeakness(a, b));
    return [...weak, ...takeDiverse(strong, 2)].map((item) => item.vocab);
  }

  return takeDiverse(sorted, 12).map((item) => item.vocab);
}

function sourceLevelsFor(level: Level, allLevels: Level[]): Level[] {
  if (!level.revision) return [];
  const { sourceStart, sourceEnd } = level.revision;
  return allLevels.filter((source) => !source.revision && source.id >= sourceStart && source.id <= sourceEnd);
}

function weakestSources(sourceLevels: Level[], mastery: MasteryMap): Level[] {
  return [...sourceLevels].sort((a, b) => {
    const average = (level: Level) => level.vocab.reduce((sum, vocab) => sum + (mastery[vocab.id]?.score ?? 0), 0) / level.vocab.length;
    return average(a) - average(b) || a.id - b.id;
  });
}

export function materializeRevisionLevel(level: Level, allLevels: Level[], mastery: MasteryMap): Level {
  if (!level.revision) return level;
  const sources = sourceLevelsFor(level, allLevels);
  const weakSources = weakestSources(sources, mastery);
  const grammarPatterns = weakSources.flatMap((source) => source.grammarPatterns ?? []).slice(0, 6);
  const conversation = weakSources.find((source) => source.conversation?.length)?.conversation ?? [];
  return {
    ...level,
    vocab: selectVocab(sources, mastery, level.revision.mode),
    grammarPatterns,
    conversation,
  };
}

export function createRevisionLevels(sourceLevels: Level[]): Level[] {
  return specs.map((spec) => materializeRevisionLevel({ ...spec, vocab: [] }, sourceLevels, {}));
}

export function revisionRecommendations(level: Level, allLevels: Level[], mastery: MasteryMap): number[] {
  const sources = weakestSources(sourceLevelsFor(level, allLevels), mastery);
  return sources
    .filter((source) => source.vocab.some((vocab) => (mastery[vocab.id]?.score ?? 0) < 4))
    .slice(0, 6)
    .map((source) => source.id);
}
