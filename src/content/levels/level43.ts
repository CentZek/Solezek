import type { Level } from '../../types/content';

export const level43: Level = {
  id: 43,
  titleEn: 'Errands Around Town',
  titleCkb: 'کارێن باژێری',
  icon: '🏙️',
  objectiveEn: 'Ask for local services and explain where you need to go.',
  objectiveCkb: 'ژ خزمەتگۆهێن باژێری بپرسە و بڵێ پێدڤییا تە بچنە کو.',
  cefr: 'A2',
  vocab: [
    { id: 'l43-pharmacy', en: 'pharmacy', ckb: 'دەرمانخانە', pos: 'noun', emoji: '💊', phonetic: '/ˈfɑːməsi/', exampleEn: 'The pharmacy is next to the hospital.', exampleCkb: 'دەرمانخانە ل ڕەخ نەخۆشخانەیێیە.', category: 'places', difficulty: 1, bahdiniReviewed: false },
    { id: 'l43-post-office', en: 'post office', ckb: 'پۆستخانە', pos: 'noun', emoji: '📮', phonetic: '/ˈpəʊst ˌɒfɪs/', exampleEn: 'I go to the post office.', exampleCkb: 'ئەز دچمە پۆستخانێ.', category: 'places', difficulty: 2, bahdiniReviewed: false },
    { id: 'l43-supermarket', en: 'supermarket', ckb: 'سوپەرمارکێت', pos: 'noun', emoji: '🛒', phonetic: '/ˈsuːpəmɑːkɪt/', exampleEn: 'The supermarket is open today.', exampleCkb: 'سوپەرمارکێت ئەڤڕۆ ڤەکرییە.', category: 'places', difficulty: 1, bahdiniReviewed: false },
    { id: 'l43-bakery', en: 'bakery', ckb: 'فرن', pos: 'noun', emoji: '🥖', phonetic: '/ˈbeɪkəri/', exampleEn: 'I buy bread from the bakery.', exampleCkb: 'ئەز ژ فرنی نانێ دکڕم.', category: 'places', difficulty: 2, bahdiniReviewed: false },
    { id: 'l43-market', en: 'market', ckb: 'بازار', pos: 'noun', emoji: '🍅', phonetic: '/ˈmɑːkɪt/', exampleEn: 'The market is busy on Friday.', exampleCkb: 'بازار ئینیێ مژوولە.', category: 'places', difficulty: 1, bahdiniReviewed: false },
    { id: 'l43-butcher', en: 'butcher', ckb: 'قەسابخانە', pos: 'noun', emoji: '🥩', phonetic: '/ˈbʊtʃə/', exampleEn: 'The butcher sells fresh meat.', exampleCkb: 'قەسابخانە گۆشتێ تازە دفرۆشیت.', category: 'places', difficulty: 3, bahdiniReviewed: false },
    { id: 'l43-hairdresser', en: 'hairdresser', ckb: 'بەربەر', pos: 'noun', emoji: '💈', phonetic: '/ˈheəˌdresə/', exampleEn: 'My brother is at the hairdresser.', exampleCkb: 'برایێ من ل بەربەری یە.', category: 'places', difficulty: 2, bahdiniReviewed: false },
    { id: 'l43-bank', en: 'bank', ckb: 'بانک', pos: 'noun', emoji: '🏦', phonetic: '/bæŋk/', exampleEn: 'I need to go to the bank.', exampleCkb: 'پێدڤییا من بچمە بانکێ هەیە.', category: 'places', difficulty: 1, bahdiniReviewed: false },
    { id: 'l43-errand', en: 'errand', ckb: 'کار', pos: 'noun', emoji: '📝', phonetic: '/ˈerənd/', exampleEn: 'I have three errands today.', exampleCkb: 'ئەڤڕۆ سێ کارێن من هەنە.', category: 'plans', difficulty: 3, bahdiniReviewed: false },
    { id: 'l43-list', en: 'list', ckb: 'لیستە', pos: 'noun', emoji: '📋', phonetic: '/lɪst/', exampleEn: 'Make a shopping list.', exampleCkb: 'لیستەیەکا کڕینێ چێبکە.', category: 'plans', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'I need to go to the pharmacy.', ckb: 'پێدڤییا من بچمە دەرمانخانێ هەیە.' },
    { en: 'Where is the nearest supermarket?', ckb: 'سوپەرمارکێتێ هەر نێزک ل کویە؟' },
    { en: 'I buy bread from the bakery.', ckb: 'ئەز ژ فرنی نانێ دکڕم.' },
    { en: 'I have three errands today.', ckb: 'ئەڤڕۆ سێ کارێن من هەنە.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'I have many errands today. Where is the pharmacy?', ckb: 'ئەڤڕۆ گەلەک کارێن من هەنە. دەرمانخانە ل کویە؟' },
    { characterId: 'shirin', en: 'It is next to the hospital, near the supermarket.', ckb: 'ل ڕەخ نەخۆشخانەیێیە، نێزک سوپەرمارکێتێ.' },
    { characterId: 'dara', en: 'I also need bread and meat.', ckb: 'من ژی نان و گۆشت پێدڤی نە.' },
    { characterId: 'shirin', en: 'The bakery is across from the butcher.', ckb: 'فرن بەرامبەر قەسابخانەیێیە.' },
    { characterId: 'dara', en: 'Great. I can finish everything before noon.', ckb: 'زۆر باش. ئەز دشێم بەر نیڤڕۆ هەمیان تمام بکەم.' },
    { characterId: 'shirin', en: 'Do not forget your shopping list!', ckb: 'لیستا کڕینێ ژ بیر مەکە!' },
  ],
};
