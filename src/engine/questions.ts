import type { ConversationLine, Level, VocabItem } from '../types/content';
import { getCharacter } from '../content/characters';

// Questions are generated from level content at runtime, so exams contain fresh
// combinations instead of repeating practice questions verbatim.

export type Question =
  | { kind: 'en-to-ckb'; vocab: VocabItem; options: VocabItem[] }
  | { kind: 'ckb-to-en'; vocab: VocabItem; options: VocabItem[] }
  | { kind: 'picture-to-en'; vocab: VocabItem; options: VocabItem[] }
  | { kind: 'listen-en'; vocab: VocabItem; options: VocabItem[] }
  | { kind: 'listen-picture'; vocab: VocabItem; options: VocabItem[] }
  | { kind: 'type-en'; vocab: VocabItem }
  | { kind: 'match'; pairs: VocabItem[] }
  | { kind: 'build'; vocab: VocabItem; tokens: string[]; answer: string }
  | { kind: 'missing'; vocab: VocabItem; sentence: string; options: string[]; answer: string }
  | { kind: 'conversation'; lines: ConversationLine[]; promptLine: ConversationLine; options: string[]; answer: string };

// Gradual Bahdini reduction:
// full    → levels 1–20: Bahdini always visible
// help    → levels 21–30: Bahdini hidden behind a help button
// minimal → levels 31+:   English-first UI, help button uses English
export type SupportMode = 'full' | 'help' | 'minimal';

export function supportModeForLevel(levelId: number): SupportMode {
  if (levelId <= 20) return 'full';
  if (levelId <= 30) return 'help';
  return 'minimal';
}

// Typing is only useful for short, single-word answers.
function typeable(v: VocabItem): boolean {
  return !v.en.includes(' ') && v.en.length <= 12;
}

function shuffle<T>(arr: T[], rand: () => number = Math.random): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Deterministic PRNG so a round doesn't reshuffle between renders.
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function distractors(vocab: VocabItem[], item: VocabItem, n: number, rand: () => number, pool?: VocabItem[]): VocabItem[] {
  const source = (pool ?? vocab).filter((v) => v.id !== item.id);
  return shuffle(source, rand).slice(0, n);
}

function optionSet(vocab: VocabItem[], item: VocabItem, rand: () => number, pool?: VocabItem[]): VocabItem[] {
  return shuffle([item, ...distractors(vocab, item, 2, rand, pool)], rand);
}

function blankSentence(exampleEn: string, word: string): string | null {
  const re = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
  if (!re.test(exampleEn)) return null;
  return exampleEn.replace(re, '___');
}

function buildable(v: VocabItem): boolean {
  const words = v.exampleEn.replace(/[.!?]$/, '').split(' ');
  return words.length >= 3 && words.length <= 7;
}

function conversationQuestions(level: Level, count: number, rand: () => number): Question[] {
  const conv = level.conversation;
  if (!conv || conv.length < 2) return [];
  const qs: Question[] = [];
  const candidates = conv
    .map((line, i) => ({ line, i }))
    .filter(({ i }) => i > 0);
  for (const { line, i } of shuffle(candidates, rand).slice(0, count)) {
    const wrongPool = conv.filter((l) => l.en !== line.en).map((l) => l.en);
    const options = shuffle([line.en, ...shuffle(wrongPool, rand).slice(0, 2)], rand);
    qs.push({
      kind: 'conversation',
      lines: conv.slice(Math.max(0, i - 2), i),
      promptLine: line,
      options,
      answer: line.en,
    });
  }
  return qs;
}

export interface Round {
  title: 'round1' | 'round2' | 'exam';
  questions: Question[];
}

// Practice round 1: recognition-heavy (English → Bahdini / picture / audio).
export function generateRound1(level: Level, seed = 1): Question[] {
  const rand = mulberry32(level.id * 1000 + seed);
  const vocab = shuffle(level.vocab, rand);
  const qs: Question[] = [];
  const target = Math.min(10, Math.max(8, vocab.length));
  let i = 0;
  const next = () => vocab[i++ % vocab.length];

  while (qs.length < target) {
    const v = next();
    const pick = (level.id + qs.length) % 4;
    if (pick === 0) qs.push({ kind: 'en-to-ckb', vocab: v, options: optionSet(level.vocab, v, rand) });
    else if (pick === 1) qs.push({ kind: 'picture-to-en', vocab: v, options: optionSet(level.vocab, v, rand) });
    else if (pick === 2) qs.push({ kind: 'listen-picture', vocab: v, options: optionSet(level.vocab, v, rand) });
    else {
      const pairs = [v, ...distractors(level.vocab, v, 3, rand)];
      qs.push({ kind: 'match', pairs: shuffle(pairs, rand) });
    }
  }
  return qs;
}

// Practice round 2: production (Bahdini → English, building, fill-in, conversation).
// From level 11 up, active-recall typing questions are mixed in.
export function generateRound2(level: Level, seed = 2): Question[] {
  const rand = mulberry32(level.id * 2000 + seed);
  const vocab = shuffle(level.vocab, rand);
  const qs: Question[] = [];
  const target = Math.min(10, Math.max(8, vocab.length));
  let i = 0;
  const next = () => vocab[i++ % vocab.length];

  const convQs = conversationQuestions(level, 2, rand);
  let convIdx = 0;
  const allowTyping = level.id >= 11;
  let typed = 0;

  while (qs.length < target) {
    const v = next();
    const pick = (level.id + qs.length) % 5;
    if (pick === 0) {
      if (allowTyping && typed < 2 && typeable(v)) {
        qs.push({ kind: 'type-en', vocab: v });
        typed++;
      } else {
        qs.push({ kind: 'ckb-to-en', vocab: v, options: optionSet(level.vocab, v, rand) });
      }
    } else if (pick === 1 && buildable(v)) {
      const words = v.exampleEn.replace(/[.!?]$/, '').split(' ');
      qs.push({ kind: 'build', vocab: v, tokens: shuffle(words, rand), answer: words.join(' ') });
    } else if (pick === 2) {
      const sentence = blankSentence(v.exampleEn, v.en);
      if (sentence) {
        const wrong = distractors(level.vocab, v, 2, rand).map((d) => d.en);
        qs.push({ kind: 'missing', vocab: v, sentence, options: shuffle([v.en, ...wrong], rand), answer: v.en });
      } else {
        qs.push({ kind: 'listen-en', vocab: v, options: optionSet(level.vocab, v, rand) });
      }
    } else if (pick === 3) {
      qs.push({ kind: 'listen-en', vocab: v, options: optionSet(level.vocab, v, rand) });
    } else if (convIdx < convQs.length) {
      qs.push(convQs[convIdx++]);
    } else {
      qs.push({ kind: 'ckb-to-en', vocab: v, options: optionSet(level.vocab, v, rand) });
    }
  }
  return qs;
}

// Exam: mixed missions with fresh combinations, incl. cross-level distractors.
// Every 5th level (25, 30, 35, 40) is a cumulative challenge: questions from
// previous levels are tested as first-class items, not just distractors.
export function generateExam(level: Level, allLevels: Level[], seed = 3): Question[] {
  const rand = mulberry32(level.id * 3000 + seed * 7 + 1);
  const previousVocab = allLevels.filter((l) => l.id < level.id).flatMap((l) => l.vocab);
  const pool = previousVocab.length >= 6 ? [...level.vocab, ...shuffle(previousVocab, rand).slice(0, 6)] : level.vocab;

  const isMilestone = level.id % 5 === 0 && level.id > 1;
  let testVocab = shuffle(level.vocab, rand);
  let target = Math.min(12, Math.max(10, testVocab.length));

  if (isMilestone) {
    const windowStart = level.id >= 40 ? 1 : level.id - 4;
    const reviewVocab = allLevels
      .filter((l) => l.id >= windowStart && l.id < level.id)
      .flatMap((l) => l.vocab);
    const reviewPicks = shuffle(reviewVocab, rand).slice(0, Math.min(6, reviewVocab.length));
    testVocab = [...testVocab.slice(0, 8), ...reviewPicks];
    target = 14;
  }

  const qs: Question[] = [];
  let i = 0;
  const next = () => testVocab[i++ % testVocab.length];

  const convQs = conversationQuestions(level, 2, rand);
  let convIdx = 0;
  const allowTyping = level.id >= 11;
  let typed = 0;

  const kinds: Array<'a' | 'b' | 'c' | 'd' | 'e' | 'f'> = ['a', 'b', 'c', 'd', 'e', 'f'];
  while (qs.length < target) {
    const v = next();
    const pick = kinds[(qs.length + level.id) % kinds.length];
    if (pick === 'a') qs.push({ kind: 'en-to-ckb', vocab: v, options: optionSet(testVocab, v, rand, pool) });
    else if (pick === 'b') {
      if (allowTyping && typed < 2 && typeable(v)) {
        qs.push({ kind: 'type-en', vocab: v });
        typed++;
      } else {
        qs.push({ kind: 'ckb-to-en', vocab: v, options: optionSet(testVocab, v, rand, pool) });
      }
    } else if (pick === 'c') qs.push({ kind: 'listen-en', vocab: v, options: optionSet(testVocab, v, rand, pool) });
    else if (pick === 'd') {
      const sentence = blankSentence(v.exampleEn, v.en);
      if (sentence) {
        const wrong = distractors(testVocab, v, 2, rand, pool).map((d) => d.en);
        qs.push({ kind: 'missing', vocab: v, sentence, options: shuffle([v.en, ...wrong], rand), answer: v.en });
      } else {
        qs.push({ kind: 'picture-to-en', vocab: v, options: optionSet(testVocab, v, rand, pool) });
      }
    } else if (pick === 'e' && buildable(v)) {
      const words = v.exampleEn.replace(/[.!?]$/, '').split(' ');
      qs.push({ kind: 'build', vocab: v, tokens: shuffle(words, rand), answer: words.join(' ') });
    } else if (convIdx < convQs.length) {
      qs.push(convQs[convIdx++]);
    } else {
      qs.push({ kind: 'picture-to-en', vocab: v, options: optionSet(testVocab, v, rand, pool) });
    }
  }
  return qs;
}

// Review session from arbitrary vocab items (spaced repetition queue).
export function generateReview(items: VocabItem[], seed = Date.now()): Question[] {
  const rand = mulberry32(seed % 2147483647);
  return shuffle(items, rand).slice(0, 10).map((v, idx) => {
    const others = items.filter((o) => o.id !== v.id);
    const options = shuffle([v, ...shuffle(others, rand).slice(0, 2)], rand);
    const pick = idx % 4;
    if (pick === 0) return { kind: 'en-to-ckb', vocab: v, options } as Question;
    if (pick === 1) return { kind: 'ckb-to-en', vocab: v, options } as Question;
    if (pick === 2) return { kind: 'listen-picture', vocab: v, options } as Question;
    if (typeable(v)) return { kind: 'type-en', vocab: v } as Question;
    return { kind: 'listen-picture', vocab: v, options } as Question;
  });
}

export function conversationSpeaker(line: ConversationLine): { name: string; avatar: string } {
  const c = getCharacter(line.characterId);
  return { name: c.name, avatar: c.avatar };
}
