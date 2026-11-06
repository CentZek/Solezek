import type { Level } from '../../types/content';

export const level64: Level = {
  id: 64,
  titleEn: 'Furniture and Your Home',
  titleCkb: 'کەرەستە و مالا تە',
  icon: '🛋️',
  objectiveEn: 'Name common furniture and describe where things belong at home.',
  objectiveCkb: 'ناڤێن کەرەستەیێن مالێ بڵێ و بڵێ تشت ل کویێن مالێ نە.',
  cefr: 'A2',
  vocab: [
    { id: 'l64-sofa', en: 'sofa', ckb: 'کاناپە', pos: 'noun', emoji: '🛋️', phonetic: '/ˈsəʊfə/', exampleEn: 'The sofa is in the living room.', exampleCkb: 'کاناپە ل ژوورا مێهڤانەیە.', category: 'furniture', difficulty: 1, bahdiniReviewed: false },
    { id: 'l64-shelf', en: 'shelf', ckb: 'ڕاف', pos: 'noun', emoji: '📚', phonetic: '/ʃelf/', exampleEn: 'The books are on the shelf.', exampleCkb: 'پەرتووک ل سەر ڕافی نە.', category: 'furniture', difficulty: 2, bahdiniReviewed: false },
    { id: 'l64-wardrobe', en: 'wardrobe', ckb: 'دۆلاب', pos: 'noun', emoji: '🚪', phonetic: '/ˈwɔːdrəʊb/', exampleEn: 'My clothes are in the wardrobe.', exampleCkb: 'جلێن من د دۆلابێ دا نە.', category: 'furniture', difficulty: 2, bahdiniReviewed: false },
    { id: 'l64-lamp', en: 'lamp', ckb: 'چرا', pos: 'noun', emoji: '💡', phonetic: '/læmp/', exampleEn: 'Turn on the lamp, please.', exampleCkb: 'هیڤیدارم، چرایێ ڤەبکە.', category: 'furniture', difficulty: 1, bahdiniReviewed: false },
    { id: 'l64-curtain', en: 'curtain', ckb: 'پەردە', pos: 'noun', emoji: '🪟', phonetic: '/ˈkɜːtən/', exampleEn: 'Open the curtains.', exampleCkb: 'پەردەیان ڤەبکە.', category: 'furniture', difficulty: 2, bahdiniReviewed: false },
    { id: 'l64-carpet', en: 'carpet', ckb: 'فەرش', pos: 'noun', emoji: '🟫', phonetic: '/ˈkɑːpɪt/', exampleEn: 'The carpet is clean.', exampleCkb: 'فەرش پاقیژە.', category: 'furniture', difficulty: 2, bahdiniReviewed: false },
    { id: 'l64-mirror', en: 'mirror', ckb: 'ئاوێنە', pos: 'noun', emoji: '🪞', phonetic: '/ˈmɪrə/', exampleEn: 'The mirror is above the table.', exampleCkb: 'ئاوێنە ل سەر مێزێ یە.', category: 'furniture', difficulty: 2, bahdiniReviewed: false },
    { id: 'l64-drawer', en: 'drawer', ckb: 'کشۆ', pos: 'noun', emoji: '🗄️', phonetic: '/drɔː/', exampleEn: 'The keys are in the drawer.', exampleCkb: 'کلیل د کشۆیێ دا نە.', category: 'furniture', difficulty: 3, bahdiniReviewed: false },
    { id: 'l64-wall', en: 'wall', ckb: 'دیوار', pos: 'noun', emoji: '🧱', phonetic: '/wɔːl/', exampleEn: 'There is a picture on the wall.', exampleCkb: 'وێنەیەک ل سەر دیواری هەیە.', category: 'home', difficulty: 1, bahdiniReviewed: false },
    { id: 'l64-floor', en: 'floor', ckb: 'ئەرد', pos: 'noun', emoji: '🧹', phonetic: '/flɔː/', exampleEn: 'The floor is wet.', exampleCkb: 'ئەرد تەرە.', category: 'home', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'The books are on the shelf.', ckb: 'پەرتووک ل سەر ڕافی نە.' },
    { en: 'My clothes are in the wardrobe.', ckb: 'جلێن من د دۆلابێ دا نە.' },
    { en: 'There is a picture on the wall.', ckb: 'وێنەیەک ل سەر دیواری هەیە.' },
    { en: 'The keys are in the drawer.', ckb: 'کلیل د کشۆیێ دا نە.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'Where should I put these books?', ckb: 'ئەز دڤێت ڤان پەرتووکان ل کو دابنم؟' },
    { characterId: 'azad', en: 'On the shelf above the sofa.', ckb: 'ل سەر ڕافی ل ژور کاناپەیێ.' },
    { characterId: 'rojin', en: 'And where are the clean towels?', ckb: 'و حەوالیێن پاقیژ ل کو نە؟' },
    { characterId: 'azad', en: 'In the wardrobe, in the top drawer.', ckb: 'د دۆلابێ دا، د کشۆیا ژوور دا.' },
    { characterId: 'rojin', en: 'The floor is wet. Can you clean it?', ckb: 'ئەرد تەرە. تو دشێی وی پاقیژ بکەی؟' },
    { characterId: 'azad', en: 'Yes. Please turn on the lamp so I can see.', ckb: 'بەلێ. هیڤیدارم چرایێ ڤەبکە دا ئەز ببینم.' },
  ],
};
