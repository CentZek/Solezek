import type { Level } from '../../types/content';

export const level71: Level = {
  id: 71,
  titleEn: 'Healthy Habits',
  titleCkb: 'عادەتێن تەندروست',
  icon: '🍎',
  objectiveEn: 'Give simple health advice using should and should not.',
  objectiveCkb: 'ب should و should not ئامۆژگاریێن سادە یێن تەندروستیێ بدە.',
  cefr: 'A2',
  vocab: [
    { id: 'l71-should', en: 'should', ckb: 'باشترە', pos: 'other', emoji: '💡', phonetic: '/ʃʊd/', exampleEn: 'You should sleep eight hours.', exampleCkb: 'باشترە هەشت دەمژمێر بنووی.', category: 'advice', difficulty: 1, bahdiniReviewed: false },
    { id: 'l71-habit', en: 'habit', ckb: 'عادەت', pos: 'noun', emoji: '🔁', phonetic: '/ˈhæbɪt/', exampleEn: 'Reading is a good habit.', exampleCkb: 'خویندن عادەتەکا باشە.', category: 'habits', difficulty: 1, bahdiniReviewed: false },
    { id: 'l71-healthy', en: 'healthy', ckb: 'تەندروست', pos: 'adjective', emoji: '💪', phonetic: '/ˈhelθi/', exampleEn: 'Healthy food gives you energy.', exampleCkb: 'خوارنا تەندروست وزەیێ ددەتە تە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l71-sleep', en: 'sleep', ckb: 'نووستن', pos: 'verb', emoji: '😴', phonetic: '/sliːp/', exampleEn: 'I sleep eight hours every night.', exampleCkb: 'ئەز هەر شەڤی هەشت دەمژمێر دنووم.', category: 'habits', difficulty: 1, bahdiniReviewed: false },
    { id: 'l71-exercise', en: 'exercise', ckb: 'وەرزش', pos: 'verb', emoji: '🏃', phonetic: '/ˈeksəsaɪz/', exampleEn: 'You should exercise regularly.', exampleCkb: 'باشترە ب رێک و پێک وەرزشێ بکەی.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l71-water', en: 'water', ckb: 'ئاڤ', pos: 'noun', emoji: '💧', phonetic: '/ˈwɔːtə/', exampleEn: 'Drink enough water.', exampleCkb: 'ئاڤا بەس بڤێخە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l71-sugar', en: 'sugar', ckb: 'شەکر', pos: 'noun', emoji: '🍬', phonetic: '/ˈʃʊɡə/', exampleEn: 'Too much sugar is unhealthy.', exampleCkb: 'شەکرا زۆر ناتەندروستە.', category: 'food', difficulty: 2, bahdiniReviewed: false },
    { id: 'l71-smoke', en: 'smoke', ckb: 'جگەرەکێشان', pos: 'verb', emoji: '🚭', phonetic: '/sməʊk/', exampleEn: 'You should not smoke.', exampleCkb: 'باشترە جگەرە نەکێشی.', category: 'habits', difficulty: 2, bahdiniReviewed: false },
    { id: 'l71-junk-food', en: 'junk food', ckb: 'خوارنا ناتەندروست', pos: 'phrase', emoji: '🍔', phonetic: '/dʒʌŋk fuːd/', exampleEn: 'Avoid junk food.', exampleCkb: 'ژ خوارنا ناتەندروست دوور بکەڤە.', category: 'food', difficulty: 2, bahdiniReviewed: false },
    { id: 'l71-enough', en: 'enough', ckb: 'بەس', pos: 'other', emoji: '✅', phonetic: '/ɪˈnʌf/', exampleEn: 'Get enough rest.', exampleCkb: 'بێهنڤەدانا بەس وەربگرە.', category: 'advice', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'You should sleep eight hours.', ckb: 'باشترە هەشت دەمژمێر بنووی.' },
    { en: 'You should exercise regularly.', ckb: 'باشترە ب رێک و پێک وەرزشێ بکەی.' },
    { en: 'You should not smoke.', ckb: 'باشترە جگەرە نەکێشی.' },
    { en: 'Drink enough water.', ckb: 'ئاڤا بەس بڤێخە.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'I feel tired every morning.', ckb: 'ئەز هەر سپێدەیێ ماندوو حەس دکەم.' },
    { characterId: 'shirin', en: 'You should sleep earlier and get enough rest.', ckb: 'باشترە زووتەر بخەڤی و بێهنڤەدانا بەس وەربگری.' },
    { characterId: 'dara', en: 'Should I change my food habits too?', ckb: 'دڤێت ئەز عادەتێن خو یێن خوارنێ ژی بگوهۆڕم؟' },
    { characterId: 'shirin', en: 'Yes. Eat healthy food and avoid too much sugar.', ckb: 'بەلێ. خوارنا تەندروست بخۆ و ژ شەکرا زۆر دوور بکەڤە.' },
    { characterId: 'dara', en: 'I will drink more water and exercise too.', ckb: 'ئەز دێ ئاڤا زێدەتر بڤێخوم و وەرزشێ ژی بکەم.' },
    { characterId: 'shirin', en: 'Those are good habits. You should not smoke either.', ckb: 'ئەوان عادەتێن باش نە. باشترە جگەرە ژی نەکێشی.' },
  ],
};
