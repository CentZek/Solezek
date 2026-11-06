import type { Level } from '../../types/content';

export const level63: Level = {
  id: 63,
  titleEn: 'Online Shopping and Delivery',
  titleCkb: 'کڕینا ئۆنلاین و گەهاندن',
  icon: '📦',
  objectiveEn: 'Order online, give an address, pay, and ask about a delivery.',
  objectiveCkb: 'ئۆنلاین داخازی بکە، ناڤونیشانێ بدە، پارە بدە و ژ گەهاندنێ بپرسە.',
  cefr: 'A2',
  vocab: [
    { id: 'l63-online', en: 'online', ckb: 'ئۆنلاین', pos: 'other', emoji: '🌐', phonetic: '/ˌɒnˈlaɪn/', exampleEn: 'I bought this online.', exampleCkb: 'من ئەڤە ئۆنلاین کڕی.', category: 'shopping', difficulty: 1, bahdiniReviewed: false },
    { id: 'l63-order', en: 'order', ckb: 'داخاز', pos: 'noun', emoji: '📝', phonetic: '/ˈɔːdə/', exampleEn: 'My order is ready.', exampleCkb: 'داخازا من ئامادە یە.', category: 'shopping', difficulty: 1, bahdiniReviewed: false },
    { id: 'l63-delivery', en: 'delivery', ckb: 'گەهاندن', pos: 'noun', emoji: '🚚', phonetic: '/dɪˈlɪvəri/', exampleEn: 'The delivery is free.', exampleCkb: 'گەهاندن بێ بەرامبەرە.', category: 'delivery', difficulty: 2, bahdiniReviewed: false },
    { id: 'l63-address', en: 'address', ckb: 'ناڤونیشان', pos: 'noun', emoji: '📍', phonetic: '/əˈdres/', exampleEn: 'Write your address here.', exampleCkb: 'ناڤونیشانا خو ل ڤێرێ بینیڤیسە.', category: 'delivery', difficulty: 1, bahdiniReviewed: false },
    { id: 'l63-package', en: 'package', ckb: 'پاکێت', pos: 'noun', emoji: '📦', phonetic: '/ˈpækɪdʒ/', exampleEn: 'The package arrived today.', exampleCkb: 'پاکێت ئەڤڕۆ گەهیشت.', category: 'delivery', difficulty: 1, bahdiniReviewed: false },
    { id: 'l63-payment', en: 'payment', ckb: 'پارەدان', pos: 'noun', emoji: '💳', phonetic: '/ˈpeɪmənt/', exampleEn: 'The payment was successful.', exampleCkb: 'پارەدان سەرکەفتی بوو.', category: 'shopping', difficulty: 2, bahdiniReviewed: false },
    { id: 'l63-arrive', en: 'arrive', ckb: 'گەهیشتن', pos: 'verb', emoji: '📬', phonetic: '/əˈraɪv/', exampleEn: 'When will my order arrive?', exampleCkb: 'داخازا من دێ کیچان بگەهێت؟', category: 'delivery', difficulty: 1, bahdiniReviewed: false },
    { id: 'l63-return', en: 'return', ckb: 'زڤراندن', pos: 'verb', emoji: '↩️', phonetic: '/rɪˈtɜːn/', exampleEn: 'Can I return this package?', exampleCkb: 'ئەز دشێم ڤێ پاکێتێ بزڤرینم؟', category: 'shopping', difficulty: 2, bahdiniReviewed: false },
    { id: 'l63-customer', en: 'customer', ckb: 'کڕیار', pos: 'noun', emoji: '🛍️', phonetic: '/ˈkʌstəmə/', exampleEn: 'The customer needs help.', exampleCkb: 'پێدڤییا کڕیاری ب ھاریکاریێ هەیە.', category: 'shopping', difficulty: 1, bahdiniReviewed: false },
    { id: 'l63-free', en: 'free', ckb: 'بێ بەرامبەر', pos: 'adjective', emoji: '🆓', phonetic: '/friː/', exampleEn: 'Delivery is free today.', exampleCkb: 'گەهاندن ئەڤڕۆ بێ بەرامبەرە.', category: 'shopping', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Write your address here.', ckb: 'ناڤونیشانا خو ل ڤێرێ بینیڤیسە.' },
    { en: 'When will my order arrive?', ckb: 'داخازا من دێ کیچان بگەهێت؟' },
    { en: 'Can I return this package?', ckb: 'ئەز دشێم ڤێ پاکێتێ بزڤرینم؟' },
    { en: 'Delivery is free today.', ckb: 'گەهاندن ئەڤڕۆ بێ بەرامبەرە.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'Did your online order arrive?', ckb: 'داخازا تە یا ئۆنلاین گەهیشت؟' },
    { characterId: 'shirin', en: 'Not yet. The delivery should come today.', ckb: 'هێشتا نە. گەهاندن دڤێت ئەڤڕۆ بهێت.' },
    { characterId: 'dara', en: 'Did you give them the correct address?', ckb: 'تو ناڤونیشانا ڕاست دا وان؟' },
    { characterId: 'shirin', en: 'Yes, and the payment was successful. The package is on its way.', ckb: 'بەلێ، و پارەدان سەرکەفتی بوو. پاکێت ل ڕێیە.' },
    { characterId: 'dara', en: 'Was delivery free?', ckb: 'گەهاندن بێ بەرامبەر بوو؟' },
    { characterId: 'shirin', en: 'Yes. I can also return the package if there is a problem.', ckb: 'بەلێ. ئەگەر کێشەیەک هەبوو، ئەز دشێم پاکێتێ ژی بزڤرینم.' },
  ],
};
