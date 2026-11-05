import type { Level } from '../../types/content';

export const level49: Level = {
  id: 49,
  titleEn: 'Phones and Technology',
  titleCkb: 'موبایل و تەکنۆلۆژی',
  icon: '📱',
  objectiveEn: 'Talk about messages, passwords, apps, internet, and phone problems.',
  objectiveCkb: 'بەحس ژ نامە، پەیڤا نهێنی، ئەپ، ئینتەرنێت و کێشەیێن موبایلی بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l49-internet', en: 'internet', ckb: 'ئینتەرنێت', pos: 'noun', emoji: '🌐', phonetic: '/ˈɪntənet/', exampleEn: 'The internet is slow today.', exampleCkb: 'ئینتەرنێت ئەڤڕۆ ھێدی یە.', category: 'technology', difficulty: 1, bahdiniReviewed: false },
    { id: 'l49-message', en: 'message', ckb: 'نامە', pos: 'noun', emoji: '💬', phonetic: '/ˈmesɪdʒ/', exampleEn: 'Send me a message.', exampleCkb: 'نامەیەک بۆ من فرێبکە.', category: 'technology', difficulty: 1, bahdiniReviewed: false },
    { id: 'l49-email', en: 'email', ckb: 'ئیمەیڵ', pos: 'noun', emoji: '📧', phonetic: '/ˈiːmeɪl/', exampleEn: 'I check my email at work.', exampleCkb: 'ئەز ل کارێ ئیمەیڵا خو پشکنین دکەم.', category: 'technology', difficulty: 1, bahdiniReviewed: false },
    { id: 'l49-password', en: 'password', ckb: 'پەیڤا نهێنی', pos: 'noun', emoji: '🔑', phonetic: '/ˈpɑːswɜːd/', exampleEn: 'Do not share your password.', exampleCkb: 'پەیڤا نهێنی یا خو بەلاڤ مەکە.', category: 'technology', difficulty: 1, bahdiniReviewed: false },
    { id: 'l49-app', en: 'app', ckb: 'ئەپ', pos: 'noun', emoji: '📲', phonetic: '/æp/', exampleEn: 'This app helps me learn English.', exampleCkb: 'ئەڤ ئەپە ھاریکاریا من دکەت ئینگلیزی فێر ببم.', category: 'technology', difficulty: 1, bahdiniReviewed: false },
    { id: 'l49-download', en: 'download', ckb: 'داگرتن', pos: 'verb', emoji: '⬇️', phonetic: '/ˌdaʊnˈləʊd/', exampleEn: 'Download the app here.', exampleCkb: 'ئەپێ ل ڤێرێ دابگرە.', category: 'technology', difficulty: 2, bahdiniReviewed: false },
    { id: 'l49-upload', en: 'upload', ckb: 'بارکرن', pos: 'verb', emoji: '⬆️', phonetic: '/ˌʌpˈləʊd/', exampleEn: 'Upload your photo.', exampleCkb: 'وێنەیا خو باربکە.', category: 'technology', difficulty: 2, bahdiniReviewed: false },
    { id: 'l49-website', en: 'website', ckb: 'مالپەڕ', pos: 'noun', emoji: '🖥️', phonetic: '/ˈwebsaɪt/', exampleEn: 'The website is easy to use.', exampleCkb: 'مالپەڕ بکارئینانا وی ئاسانە.', category: 'technology', difficulty: 2, bahdiniReviewed: false },
    { id: 'l49-battery', en: 'battery', ckb: 'باتری', pos: 'noun', emoji: '🔋', phonetic: '/ˈbætri/', exampleEn: 'My phone battery is low.', exampleCkb: 'باتریا موبایلێ من یا نزمە.', category: 'technology', difficulty: 2, bahdiniReviewed: false },
    { id: 'l49-charge', en: 'charge', ckb: 'چارجکرن', pos: 'verb', emoji: '🔌', phonetic: '/tʃɑːdʒ/', exampleEn: 'I need to charge my phone.', exampleCkb: 'پێدڤییا من موبایلێ خو چارج بکەم هەیە.', category: 'technology', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Send me a message.', ckb: 'نامەیەک بۆ من فرێبکە.' },
    { en: 'Do not share your password.', ckb: 'پەیڤا نهێنی یا خو بەلاڤ مەکە.' },
    { en: 'I need to charge my phone.', ckb: 'پێدڤییا من موبایلێ خو چارج بکەم هەیە.' },
    { en: 'The internet is slow today.', ckb: 'ئینتەرنێت ئەڤڕۆ ھێدی یە.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'My phone battery is low and the internet is slow.', ckb: 'باتریا موبایلێ من یا نزمە و ئینتەرنێت ھێدی یە.' },
    { characterId: 'azad', en: 'Charge your phone first. Then restart the app.', ckb: 'ئێکەم موبایلێ خو چارج بکە. پاشی ئەپێ ژ نوو ڤەبکە.' },
    { characterId: 'rojin', en: 'Can you send me the website link?', ckb: 'تو دشێی لینکا مالپەڕێ بۆ من فرێبکەی؟' },
    { characterId: 'azad', en: 'Yes, I will send it in a message.', ckb: 'بەلێ، دێ د نامەیەکێ دا بۆ تە فرێبکەم.' },
    { characterId: 'rojin', en: 'Thank you. Do I need a password?', ckb: 'سوپاس. پێدڤییا من ب پەیڤا نهێنی هەیە؟' },
    { characterId: 'azad', en: 'Yes, but never share it with anyone.', ckb: 'بەلێ، بەس هیچ دەم ب کەسەکی بەلاڤ مەکە.' },
  ],
};
