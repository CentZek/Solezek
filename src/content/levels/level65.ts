import type { Level } from '../../types/content';

export const level65: Level = {
  id: 65,
  titleEn: 'Managing Your Week',
  titleCkb: 'ڕێکخستنا حەفتیا تە',
  icon: '🗓️',
  objectiveEn: 'Review planning, errands, deliveries, shopping, and household tasks.',
  objectiveCkb: 'بەرنامە، کار، گەهاندن، کڕین و کارێن مالێ دووبارە بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l65-schedule', en: 'schedule', ckb: 'بەرنامە', pos: 'noun', emoji: '🗓️', phonetic: '/ˈʃedjuːl/', exampleEn: 'My schedule is full this week.', exampleCkb: 'بەرنامەیا من ڤێ حەفتیێ یا پڕە.', category: 'plans', difficulty: 1, bahdiniReviewed: false },
    { id: 'l65-task', en: 'task', ckb: 'ئەرک', pos: 'noun', emoji: '✅', phonetic: '/tɑːsk/', exampleEn: 'Finish your first task.', exampleCkb: 'ئەرکا خو یا ئێکەم تمام بکە.', category: 'plans', difficulty: 1, bahdiniReviewed: false },
    { id: 'l65-errand', en: 'errand', ckb: 'کار', pos: 'noun', emoji: '🏙️', phonetic: '/ˈerənd/', exampleEn: 'I have two errands today.', exampleCkb: 'ئەڤڕۆ دوو کارێن من هەنە.', category: 'plans', difficulty: 1, bahdiniReviewed: false },
    { id: 'l65-appointment', en: 'appointment', ckb: 'دیدار', pos: 'noun', emoji: '📅', phonetic: '/əˈpɔɪntmənt/', exampleEn: 'Move my appointment to Friday.', exampleCkb: 'دیدارا من بۆ ئینیێ بیگوهۆڕە.', category: 'plans', difficulty: 1, bahdiniReviewed: false },
    { id: 'l65-delivery', en: 'delivery', ckb: 'گەهاندن', pos: 'noun', emoji: '🚚', phonetic: '/dɪˈlɪvəri/', exampleEn: 'The delivery comes tomorrow.', exampleCkb: 'گەهاندن سەبەی دێت.', category: 'delivery', difficulty: 1, bahdiniReviewed: false },
    { id: 'l65-receipt', en: 'receipt', ckb: 'پسولە', pos: 'noun', emoji: '🧾', phonetic: '/rɪˈsiːt/', exampleEn: 'Keep every receipt.', exampleCkb: 'هەر پسولەیەکی بپارێزە.', category: 'shopping', difficulty: 1, bahdiniReviewed: false },
    { id: 'l65-ingredient', en: 'ingredient', ckb: 'پێکهاتە', pos: 'noun', emoji: '🥕', phonetic: '/ɪnˈɡriːdiənt/', exampleEn: 'Check every ingredient.', exampleCkb: 'هەر پێکهاتەیەکی پشکنین بکە.', category: 'cooking', difficulty: 2, bahdiniReviewed: false },
    { id: 'l65-tidy', en: 'tidy', ckb: 'ڕێکخستن', pos: 'verb', emoji: '🛋️', phonetic: '/ˈtaɪdi/', exampleEn: 'Tidy your room before Friday.', exampleCkb: 'بەر ئینیێ ژوورا خو ڕێک بخە.', category: 'chores', difficulty: 1, bahdiniReviewed: false },
    { id: 'l65-list', en: 'list', ckb: 'لیستە', pos: 'noun', emoji: '📋', phonetic: '/lɪst/', exampleEn: 'Make a list of your tasks.', exampleCkb: 'لیستەیەکا ئەرکێن خو چێبکە.', category: 'plans', difficulty: 1, bahdiniReviewed: false },
    { id: 'l65-budget', en: 'budget', ckb: 'بودجە', pos: 'noun', emoji: '💰', phonetic: '/ˈbʌdʒɪt/', exampleEn: 'My budget is small this week.', exampleCkb: 'بودجەیا من ڤێ حەفتیێ یا بچووکە.', category: 'shopping', difficulty: 3, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Move my appointment to Friday.', ckb: 'دیدارا من بۆ ئینیێ بیگوهۆڕە.' },
    { en: 'Make a list of your tasks.', ckb: 'لیستەیەکا ئەرکێن خو چێبکە.' },
    { en: 'Tidy your room before Friday.', ckb: 'بەر ئینیێ ژوورا خو ڕێک بخە.' },
    { en: 'My budget is small this week.', ckb: 'بودجەیا من ڤێ حەفتیێ یا بچووکە.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'Your schedule looks busy this week.', ckb: 'بەرنامەیا تە ڤێ حەفتیێ یا مژوول دبینیت.' },
    { characterId: 'shirin', en: 'Yes. I have two appointments and many errands.', ckb: 'بەلێ. دوو دیدار و گەلەک کارێن من هەنە.' },
    { characterId: 'dara', en: 'Make a list and do the first task early.', ckb: 'لیستەیەک چێبکە و ئەرکا ئێکەم زوو تمام بکە.' },
    { characterId: 'shirin', en: 'Good idea. My delivery also comes tomorrow.', ckb: 'هزرەکا باش. گەهاندنا من ژی سەبەی دێت.' },
    { characterId: 'dara', en: 'Keep the receipt and check your budget.', ckb: 'پسولە بپارێزە و بودجەیا خو پشکنین بکە.' },
    { characterId: 'shirin', en: 'I will. On Friday I will tidy my room and rest.', ckb: 'دێ بکەم. ئینیێ ئەز دێ ژوورا خو ڕێک بخەم و بێهنڤەدانێ بکەم.' },
  ],
};
