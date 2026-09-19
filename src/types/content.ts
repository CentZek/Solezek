export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'phrase'
  | 'adjective'
  | 'number'
  | 'color'
  | 'question'
  | 'other';

export interface VocabItem {
  id: string; // e.g. 'l1-hello'
  en: string;
  ckb: string; // Bahdini meaning (Arabic script)
  pos: PartOfSpeech;
  emoji: string;
  phonetic?: string; // e.g. /ˈæpəl/
  exampleEn: string;
  exampleCkb: string; // Bahdini translation of example
  category: string;
  difficulty: 1 | 2 | 3;
  bahdiniReviewed: boolean; // always false for now — flag for later native review
}

export interface GrammarPattern {
  en: string;
  ckb: string;
}

export interface ConversationLine {
  characterId: string;
  en: string;
  ckb: string;
}

export interface Level {
  id: number;
  titleEn: string;
  titleCkb: string;
  icon: string; // emoji icon
  objectiveEn: string;
  objectiveCkb: string;
  cefr: 'A1' | 'A2';
  vocab: VocabItem[]; // 10–14 items
  grammarPatterns?: GrammarPattern[];
  conversation?: ConversationLine[];
}
