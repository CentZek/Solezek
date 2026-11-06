import type { Level } from '../../types/content';

export const level62: Level = {
  id: 62,
  titleEn: 'Quantities and Containers',
  titleCkb: 'بڕ و پاکێت',
  icon: '🛒',
  objectiveEn: 'Ask for quantities using some, any, much, many, and common containers.',
  objectiveCkb: 'ب some، any، much، many و پاکێتێن ڕۆژانە بڕی بپرسە و بڵێ.',
  cefr: 'A2',
  vocab: [
    { id: 'l62-some', en: 'some', ckb: 'هندەک', pos: 'other', emoji: '🥣', phonetic: '/sʌm/', exampleEn: 'I need some water.', exampleCkb: 'پێدڤییا من ب هندەک ئاڤی هەیە.', category: 'quantity', difficulty: 1, bahdiniReviewed: false },
    { id: 'l62-any', en: 'any', ckb: 'ھیچ', pos: 'other', emoji: '❓', phonetic: '/ˈeni/', exampleEn: 'Do you have any bread?', exampleCkb: 'ھیچ نان تە هەیە؟', category: 'quantity', difficulty: 2, bahdiniReviewed: false },
    { id: 'l62-much-many', en: 'much/many', ckb: 'گەلەک', pos: 'other', emoji: '🔢', phonetic: '/mʌtʃ ˈmeni/', exampleEn: 'We do not need much rice.', exampleCkb: 'پێدڤییا مە ب گەلەک برنجی نینە.', category: 'quantity', difficulty: 2, bahdiniReviewed: false },
    { id: 'l62-enough', en: 'enough', ckb: 'بەس', pos: 'other', emoji: '✅', phonetic: '/ɪˈnʌf/', exampleEn: 'We have enough food.', exampleCkb: 'خوارنا بەس یا مە هەیە.', category: 'quantity', difficulty: 2, bahdiniReviewed: false },
    { id: 'l62-bottle', en: 'bottle', ckb: 'شیشە', pos: 'noun', emoji: '🍶', phonetic: '/ˈbɒtəl/', exampleEn: 'Buy a bottle of water.', exampleCkb: 'شیشەیەکا ئاڤێ بکڕە.', category: 'containers', difficulty: 1, bahdiniReviewed: false },
    { id: 'l62-packet', en: 'packet', ckb: 'پاکێت', pos: 'noun', emoji: '📦', phonetic: '/ˈpækɪt/', exampleEn: 'I need a packet of rice.', exampleCkb: 'پاکێتەکێ برنج پێدڤییە.', category: 'containers', difficulty: 2, bahdiniReviewed: false },
    { id: 'l62-kilo', en: 'kilo', ckb: 'کیلۆ', pos: 'noun', emoji: '⚖️', phonetic: '/ˈkiːləʊ/', exampleEn: 'Buy two kilos of apples.', exampleCkb: 'دوو کیلۆ سێڤ بکڕە.', category: 'quantity', difficulty: 1, bahdiniReviewed: false },
    { id: 'l62-piece', en: 'piece', ckb: 'پارچە', pos: 'noun', emoji: '🍞', phonetic: '/piːs/', exampleEn: 'Can I have a piece of bread?', exampleCkb: 'دشێم پارچەیەک نان وەربگرم؟', category: 'containers', difficulty: 2, bahdiniReviewed: false },
    { id: 'l62-cup', en: 'cup', ckb: 'کوپ', pos: 'noun', emoji: '☕', phonetic: '/kʌp/', exampleEn: 'I would like a cup of tea.', exampleCkb: 'ئەز کوپەکێ چای دڤێم.', category: 'containers', difficulty: 1, bahdiniReviewed: false },
    { id: 'l62-bag', en: 'bag', ckb: 'چەنتە', pos: 'noun', emoji: '🛍️', phonetic: '/bæɡ/', exampleEn: 'Put everything in one bag.', exampleCkb: 'هەمیان د چەنتەیەکێ دا دابنە.', category: 'containers', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'I need some water.', ckb: 'پێدڤییا من ب هندەک ئاڤی هەیە.' },
    { en: 'Do you have any bread?', ckb: 'ھیچ نان تە هەیە؟' },
    { en: 'We have enough food.', ckb: 'خوارنا بەس یا مە هەیە.' },
    { en: 'Buy two kilos of apples.', ckb: 'دوو کیلۆ سێڤ بکڕە.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'What do we need from the shop?', ckb: 'پێدڤییا مە ژ دوکانی ب چ هەیە؟' },
    { characterId: 'azad', en: 'Some rice, two kilos of apples, and a bottle of water.', ckb: 'هندەک برنج، دوو کیلۆ سێڤ و شیشەیەکا ئاڤ.' },
    { characterId: 'rojin', en: 'Do we have any bread at home?', ckb: 'ل مال ھیچ نان هەیە؟' },
    { characterId: 'azad', en: 'No, so buy some bread and a cup of tea for me.', ckb: 'نەخێر، جا هندەک نان و کوپەکێ چای بۆ من بکڕە.' },
    { characterId: 'rojin', en: 'Is that enough food?', ckb: 'ئەڤە خوارنا بەسە؟' },
    { characterId: 'azad', en: 'Yes. Put everything in one bag, please.', ckb: 'بەلێ. هیڤیدارم، هەمیان د چەنتەیەکێ دا دابنە.' },
  ],
};
