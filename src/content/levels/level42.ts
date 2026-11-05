import type { Level } from '../../types/content';

export const level42: Level = {
  id: 42,
  titleEn: 'Housework and Chores',
  titleCkb: 'کارێن مالێ',
  icon: '🧹',
  objectiveEn: 'Talk about household chores and what you have to do at home.',
  objectiveCkb: 'بەحس ژ کارێن مالێ بکە و بڵێ پێدڤییا تە چ کرنە.',
  cefr: 'A2',
  vocab: [
    { id: 'l42-clean', en: 'clean', ckb: 'پاقیژکرن', pos: 'verb', emoji: '🧽', phonetic: '/kliːn/', exampleEn: 'I clean the kitchen.', exampleCkb: 'ئەز مەتبەخێ پاقیژ دکەم.', category: 'chores', difficulty: 1, bahdiniReviewed: false },
    { id: 'l42-wash-dishes', en: 'wash dishes', ckb: 'قاپ شوشتن', pos: 'phrase', emoji: '🍽️', phonetic: '/wɒʃ ˈdɪʃɪz/', exampleEn: 'I wash dishes after dinner.', exampleCkb: 'ئەز پاش نانێ ئێڤارێ قاپان دشوم.', category: 'chores', difficulty: 1, bahdiniReviewed: false },
    { id: 'l42-laundry', en: 'do laundry', ckb: 'جل شوشتن', pos: 'phrase', emoji: '🧺', phonetic: '/duː ˈlɔːndri/', exampleEn: 'I do laundry on Friday.', exampleCkb: 'ئەز ئینیێ جلێن خو دشوم.', category: 'chores', difficulty: 2, bahdiniReviewed: false },
    { id: 'l42-sweep', en: 'sweep', ckb: 'جەمکرن', pos: 'verb', emoji: '🧹', phonetic: '/swiːp/', exampleEn: 'She sweeps the floor.', exampleCkb: 'ئەو ئەردێ دجەمکەت.', category: 'chores', difficulty: 2, bahdiniReviewed: false },
    { id: 'l42-tidy', en: 'tidy', ckb: 'ڕێکخستن', pos: 'verb', emoji: '🛋️', phonetic: '/ˈtaɪdi/', exampleEn: 'We tidy the room together.', exampleCkb: 'ئەم ژوورێ پێکڤە ڕێک دخینین.', category: 'chores', difficulty: 2, bahdiniReviewed: false },
    { id: 'l42-cook', en: 'cook', ckb: 'پژان', pos: 'verb', emoji: '🍳', phonetic: '/kʊk/', exampleEn: 'My father cooks dinner.', exampleCkb: 'باڤێ من نانێ ئێڤارێ دپژە.', category: 'chores', difficulty: 1, bahdiniReviewed: false },
    { id: 'l42-rubbish', en: 'rubbish', ckb: 'زبڵ', pos: 'noun', emoji: '🗑️', phonetic: '/ˈrʌbɪʃ/', exampleEn: 'The rubbish is outside.', exampleCkb: 'زبڵ ل دەرڤە یە.', category: 'chores', difficulty: 2, bahdiniReviewed: false },
    { id: 'l42-take-out', en: 'take out', ckb: 'دەرخستن', pos: 'verb', emoji: '🚪', phonetic: '/teɪk aʊt/', exampleEn: 'Take out the rubbish, please.', exampleCkb: 'هیڤیدارم، زبڵی دەرخە.', category: 'chores', difficulty: 2, bahdiniReviewed: false },
    { id: 'l42-make-bed', en: 'make the bed', ckb: 'جێگا ڕێکخستن', pos: 'phrase', emoji: '🛏️', phonetic: '/meɪk ðə bed/', exampleEn: 'I make the bed every morning.', exampleCkb: 'ئەز هەر سپێدەیێ جێگایا خو ڕێک دخینم.', category: 'chores', difficulty: 2, bahdiniReviewed: false },
    { id: 'l42-water-plants', en: 'water plants', ckb: 'ئاڤدانە گیاوان', pos: 'phrase', emoji: '🪴', phonetic: '/ˈwɔːtə plɑːnts/', exampleEn: 'I water plants in the evening.', exampleCkb: 'ئەز ئێڤاری ئاڤێ ل گیاوان ددەم.', category: 'chores', difficulty: 3, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'I have to clean the kitchen.', ckb: 'دڤێت ئەز مەتبەخێ پاقیژ بکەم.' },
    { en: 'She washes dishes after dinner.', ckb: 'ئەو پاش نانێ ئێڤارێ قاپان دشۆ.' },
    { en: 'We tidy the room together.', ckb: 'ئەم ژوورێ پێکڤە ڕێک دخینین.' },
    { en: 'Take out the rubbish, please.', ckb: 'هیڤیدارم، زبڵی دەرخە.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'The kitchen is dirty. Can you clean it?', ckb: 'مەتبەخ پیسە. تو دشێی وی پاقیژ بکەی؟' },
    { characterId: 'azad', en: 'Yes. I have to wash dishes first.', ckb: 'بەلێ. دڤێت ئەز ئێکەم قاپان بشوم.' },
    { characterId: 'rojin', en: 'I will sweep the floor and tidy the room.', ckb: 'ئەز دێ ئەردێ بجەمکەم و ژوورێ ڕێک بخینم.' },
    { characterId: 'azad', en: 'Thank you. I will take out the rubbish too.', ckb: 'سوپاس. ئەز دێ زبڵی ژی دەرخەم.' },
    { characterId: 'rojin', en: 'After that, can you water the plants?', ckb: 'پاش وان، تو دشێی ئاڤێ ل گیاوان بدەی؟' },
    { characterId: 'azad', en: 'Of course. Then we can drink tea.', ckb: 'بێگومان. پاشی ئەم دشێین چایێ بڤێخین.' },
  ],
};
