import type { Level } from '../../types/content';

export const level50: Level = {
  id: 50,
  titleEn: 'Past, Present, and Future Review',
  titleCkb: 'دووبارەکرنا ڕابووردوو، نوکە و پاشەرۆژێ',
  icon: '🔄',
  objectiveEn: 'Connect past, present, and future events in one conversation.',
  objectiveCkb: 'کارێن ڕابووردوو، نوکە و پاشەرۆژێ د ئاخفتنەکێ دا بکاربینە.',
  cefr: 'A2',
  vocab: [
    { id: 'l50-yesterday', en: 'yesterday', ckb: 'دوهی', pos: 'other', emoji: '⏮️', phonetic: '/ˈjestədeɪ/', exampleEn: 'I worked yesterday.', exampleCkb: 'من دوهی کار کر.', category: 'time', difficulty: 1, bahdiniReviewed: false },
    { id: 'l50-today', en: 'today', ckb: 'ئەڤڕۆ', pos: 'other', emoji: '📅', phonetic: '/təˈdeɪ/', exampleEn: 'I am busy today.', exampleCkb: 'ئەز ئەڤڕۆ مژوول مە.', category: 'time', difficulty: 1, bahdiniReviewed: false },
    { id: 'l50-tomorrow', en: 'tomorrow', ckb: 'سەبەی', pos: 'other', emoji: '⏭️', phonetic: '/təˈmɒrəʊ/', exampleEn: 'I will rest tomorrow.', exampleCkb: 'ئەز دێ سەبەی بێهنڤەدانێ بکەم.', category: 'time', difficulty: 1, bahdiniReviewed: false },
    { id: 'l50-now', en: 'now', ckb: 'نوکە', pos: 'other', emoji: '⏰', phonetic: '/naʊ/', exampleEn: 'I am cooking now.', exampleCkb: 'نوکە ئەز دپژم.', category: 'time', difficulty: 1, bahdiniReviewed: false },
    { id: 'l50-later', en: 'later', ckb: 'پاشی', pos: 'other', emoji: '🕐', phonetic: '/ˈleɪtə/', exampleEn: 'We can talk later.', exampleCkb: 'ئەم دشێین پاشی بئاخڤین.', category: 'time', difficulty: 1, bahdiniReviewed: false },
    { id: 'l50-usually', en: 'usually', ckb: 'ب گشتی', pos: 'other', emoji: '🔁', phonetic: '/ˈjuːʒuəli/', exampleEn: 'I usually walk to work.', exampleCkb: 'ئەز ب گشتی پیاسە دچمە کار.', category: 'time', difficulty: 2, bahdiniReviewed: false },
    { id: 'l50-already', en: 'already', ckb: 'پێشتر', pos: 'other', emoji: '✅', phonetic: '/ɔːlˈredi/', exampleEn: 'I have already eaten.', exampleCkb: 'من پێشتر خوار.', category: 'time', difficulty: 3, bahdiniReviewed: false },
    { id: 'l50-never', en: 'never', ckb: 'هیچ دەم', pos: 'other', emoji: '🚫', phonetic: '/ˈnevə/', exampleEn: 'I never drink coffee at night.', exampleCkb: 'ئەز هیچ دەم شەڤی قەهوێ ناڤێخوم.', category: 'time', difficulty: 2, bahdiniReviewed: false },
    { id: 'l50-plan', en: 'plan', ckb: 'پلان', pos: 'noun', emoji: '🗓️', phonetic: '/plæn/', exampleEn: 'What is your plan for tonight?', exampleCkb: 'پلانا تە بۆ ئەڤشەڤێ چیە؟', category: 'plans', difficulty: 1, bahdiniReviewed: false },
    { id: 'l50-experience', en: 'experience', ckb: 'ئەزموون', pos: 'noun', emoji: '🌟', phonetic: '/ɪkˈspɪəriəns/', exampleEn: 'It was a good experience.', exampleCkb: 'ئەزموونەکا باش بوو.', category: 'review', difficulty: 3, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Yesterday I worked; today I rest.', ckb: 'دوهی من کار کر؛ ئەڤڕۆ ئەز بێهنڤەدانێ دکەم.' },
    { en: 'I am cooking now.', ckb: 'نوکە ئەز دپژم.' },
    { en: 'We can talk later.', ckb: 'ئەم دشێین پاشی بئاخڤین.' },
    { en: 'I will call you tomorrow.', ckb: 'ئەز دێ سەبەی تەلەفۆنا تە بکەم.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'You look tired. Did you work yesterday?', ckb: 'تو ماندوو دبینی. تو دوهی کار کر؟' },
    { characterId: 'shirin', en: 'Yes, and I am working now too.', ckb: 'بەلێ، و نوکە ژی ئەز کار دکەم.' },
    { characterId: 'dara', en: 'What is your plan for tomorrow?', ckb: 'پلانا تە بۆ سەبەی چیە؟' },
    { characterId: 'shirin', en: 'I will rest in the morning and visit my family later.', ckb: 'ئەز دێ سپێدە بێهنڤەدانێ بکەم و پاشی سەرەدانا خێزانا خو بکەم.' },
    { characterId: 'dara', en: 'That sounds good. I have already visited mine this week.', ckb: 'خۆشە. من ڤێ حەفتیێ پێشتر سەرەدانا خێزانا خو کر.' },
    { characterId: 'shirin', en: 'Let us talk later. I have to finish now.', ckb: 'پاشی بئاخڤین. دڤێت ئەز نوکە تمام بکەم.' },
  ],
};
