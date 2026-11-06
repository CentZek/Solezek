import type { Level } from '../../types/content';

export const level76: Level = {
  id: 76,
  titleEn: 'Study Goals and Habits',
  titleCkb: 'ئامانج و عادەتێن خویندنێ',
  icon: '🎯',
  objectiveEn: 'Set learning goals, build study habits, and talk about mistakes and progress.',
  objectiveCkb: 'ئامانجێن فێربوونێ دابنە، عادەتێن خویندنێ چێبکە و بەحس ژ خەڵەت و پێشکەفتنیێ بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l76-goal', en: 'goal', ckb: 'ئامانج', pos: 'noun', emoji: '🎯', phonetic: '/ɡəʊl/', exampleEn: 'My goal is to speak English.', exampleCkb: 'ئامانجا من ب ئینگلیزی بئاخڤمە.', category: 'learning', difficulty: 1, bahdiniReviewed: false },
    { id: 'l76-habit', en: 'habit', ckb: 'عادەت', pos: 'noun', emoji: '🔁', phonetic: '/ˈhæbɪt/', exampleEn: 'Study a little every day to build a habit.', exampleCkb: 'بۆ چێکرنا عادەتێ، هەر ڕۆژی هندەکی بخوینە.', category: 'learning', difficulty: 1, bahdiniReviewed: false },
    { id: 'l76-practice', en: 'practice', ckb: 'ڕاهێنان', pos: 'noun', emoji: '🏋️', phonetic: '/ˈpræktɪs/', exampleEn: 'Daily practice helps you improve.', exampleCkb: 'ڕاهێنانا ڕۆژانە تە باشتر دکەت.', category: 'learning', difficulty: 1, bahdiniReviewed: false },
    { id: 'l76-improve', en: 'improve', ckb: 'باشترکرن', pos: 'verb', emoji: '📈', phonetic: '/ɪmˈpruːv/', exampleEn: 'I want to improve my English.', exampleCkb: 'ئەز دڤێم ئینگلیزیا خو باشتر بکەم.', category: 'learning', difficulty: 1, bahdiniReviewed: false },
    { id: 'l76-vocabulary', en: 'vocabulary', ckb: 'پەیڤ', pos: 'noun', emoji: '📚', phonetic: '/vəˈkæbjələri/', exampleEn: 'Vocabulary grows with daily practice.', exampleCkb: 'پەیڤ ب ڕاهێنانا ڕۆژانە زێدە دبن.', category: 'learning', difficulty: 1, bahdiniReviewed: false },
    { id: 'l76-grammar', en: 'grammar', ckb: 'گرامەر', pos: 'noun', emoji: '📐', phonetic: '/ˈɡræmə/', exampleEn: 'This grammar rule is useful.', exampleCkb: 'ئەڤ یاسایا گرامەرێ ب سوودە.', category: 'learning', difficulty: 2, bahdiniReviewed: false },
    { id: 'l76-listen', en: 'listen', ckb: 'گوهداریکرن', pos: 'verb', emoji: '👂', phonetic: '/ˈlɪsən/', exampleEn: 'Listen to English every day.', exampleCkb: 'هەر ڕۆژی گوهداری ئینگلیزی بکە.', category: 'learning', difficulty: 1, bahdiniReviewed: false },
    { id: 'l76-mistake', en: 'mistake', ckb: 'خەڵەت', pos: 'noun', emoji: '❌', phonetic: '/mɪˈsteɪk/', exampleEn: 'Learn from your mistakes.', exampleCkb: 'ژ خەڵەتیێن خو فێر ببە.', category: 'learning', difficulty: 1, bahdiniReviewed: false },
    { id: 'l76-review', en: 'review', ckb: 'دووبارەکرن', pos: 'verb', emoji: '🔄', phonetic: '/rɪˈvjuː/', exampleEn: 'Review old words before new ones.', exampleCkb: 'بەر پەیڤێن نوی، یێن کەڤن دووبارە بکە.', category: 'learning', difficulty: 1, bahdiniReviewed: false },
    { id: 'l76-confident', en: 'confident', ckb: 'ب متمانە', pos: 'adjective', emoji: '😎', phonetic: '/ˈkɒnfɪdənt/', exampleEn: 'I feel more confident now.', exampleCkb: 'نوکە ئەز ب متمانەتر حەس دکەم.', category: 'learning', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'My goal is to speak English.', ckb: 'ئامانجا من ب ئینگلیزی بئاخڤمە.' },
    { en: 'Daily practice helps you improve.', ckb: 'ڕاهێنانا ڕۆژانە تە باشتر دکەت.' },
    { en: 'Learn from your mistakes.', ckb: 'ژ خەڵەتیێن خو فێر ببە.' },
    { en: 'Review old words before new ones.', ckb: 'بەر پەیڤێن نوی، یێن کەڤن دووبارە بکە.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'What is your English learning goal?', ckb: 'ئامانجا تە یا فێربوونا ئینگلیزی چیە؟' },
    { characterId: 'shirin', en: 'I want to speak confidently at work.', ckb: 'ئەز دڤێم ل کارێ ب متمانە بئاخڤم.' },
    { characterId: 'dara', en: 'Practice a little every day and review your mistakes.', ckb: 'هەر ڕۆژی هندەکی ڕاهێنان بکە و خەڵەتیێن خو دووبارە بکە.' },
    { characterId: 'shirin', en: 'Should I focus on vocabulary or grammar?', ckb: 'دڤێت ئەز ل سەر پەیڤان بمینم یان گرامەرێ؟' },
    { characterId: 'dara', en: 'Both, but listening and speaking are important too.', ckb: 'هەردووک، بەس گوهداریکرن و ئاخفتن ژی گرنگ نە.' },
    { characterId: 'shirin', en: 'Good advice. I already feel more confident.', ckb: 'ئامۆژگاریەکا باش. ئەز پێشتر ژی ب متمانەتر حەس دکەم.' },
  ],
};
