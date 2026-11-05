import type { Level } from '../../types/content';

export const level54: Level = {
  id: 54,
  titleEn: 'Travel Around the City',
  titleCkb: 'گەشت د باژێری دا',
  icon: '🗺️',
  objectiveEn: 'Use maps, stations, entrances, and directions when traveling locally.',
  objectiveCkb: 'نەخشە، وێستگەه، دەرگا و ڕێیێن باژێری بکاربینە.',
  cefr: 'A2',
  vocab: [
    { id: 'l54-map', en: 'map', ckb: 'نەخشە', pos: 'noun', emoji: '🗺️', phonetic: '/mæp/', exampleEn: 'Look at the map.', exampleCkb: 'سەحکە نەخشەیێ.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l54-station', en: 'station', ckb: 'وێستگەه', pos: 'noun', emoji: '🚉', phonetic: '/ˈsteɪʃən/', exampleEn: 'The station is near the market.', exampleCkb: 'وێستگەه نێزک بازارییە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l54-bus-stop', en: 'bus stop', ckb: 'وێستگەها پاسێ', pos: 'phrase', emoji: '🚏', phonetic: '/bʌs stɒp/', exampleEn: 'Wait at the bus stop.', exampleCkb: 'ل وێستگەها پاسێ چەڤەرێ بە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l54-entrance', en: 'entrance', ckb: 'دەرگای ژوورکەڤنێ', pos: 'noun', emoji: '🚪', phonetic: '/ˈentrəns/', exampleEn: 'The entrance is on the left.', exampleCkb: 'دەرگای ژوورکەڤنێ ل چەپێ یە.', category: 'travel', difficulty: 2, bahdiniReviewed: false },
    { id: 'l54-exit', en: 'exit', ckb: 'دەرگای دەرکەڤنێ', pos: 'noun', emoji: '🚶', phonetic: '/ˈeksɪt/', exampleEn: 'The exit is next to the stairs.', exampleCkb: 'دەرگای دەرکەڤنێ ل ڕەخ پەلکانەیە.', category: 'travel', difficulty: 2, bahdiniReviewed: false },
    { id: 'l54-direction', en: 'direction', ckb: 'ئاراستە', pos: 'noun', emoji: '🧭', phonetic: '/dəˈrekʃən/', exampleEn: 'Which direction is the hotel?', exampleCkb: 'ئۆتێل ل چ ئاراستەیەکێیە؟', category: 'travel', difficulty: 2, bahdiniReviewed: false },
    { id: 'l54-distance', en: 'distance', ckb: 'دوری', pos: 'noun', emoji: '📏', phonetic: '/ˈdɪstəns/', exampleEn: 'The distance is two kilometers.', exampleCkb: 'دوری دوو کیلۆمەتەرە.', category: 'travel', difficulty: 3, bahdiniReviewed: false },
    { id: 'l54-luggage', en: 'luggage', ckb: 'جانتاو بار', pos: 'noun', emoji: '🧳', phonetic: '/ˈlʌɡɪdʒ/', exampleEn: 'My luggage is heavy.', exampleCkb: 'جانتاو بارێ من یێ گرانە.', category: 'travel', difficulty: 2, bahdiniReviewed: false },
    { id: 'l54-reservation', en: 'reservation', ckb: 'حەجز', pos: 'noun', emoji: '📋', phonetic: '/ˌrezəˈveɪʃən/', exampleEn: 'I have a hotel reservation.', exampleCkb: 'حەجزەکا من یا ئۆتێلێ هەیە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l54-ticket', en: 'ticket', ckb: 'بلیت', pos: 'noun', emoji: '🎫', phonetic: '/ˈtɪkɪt/', exampleEn: 'Buy your ticket at the station.', exampleCkb: 'بلیتا خو ل وێستگەهێ بکڕە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Wait at the bus stop.', ckb: 'ل وێستگەها پاسێ چەڤەرێ بە.' },
    { en: 'Which direction is the hotel?', ckb: 'ئۆتێل ل چ ئاراستەیەکێیە؟' },
    { en: 'The distance is two kilometers.', ckb: 'دوری دوو کیلۆمەتەرە.' },
    { en: 'Buy your ticket at the station.', ckb: 'بلیتا خو ل وێستگەهێ بکڕە.' },
  ],
  conversation: [
    { characterId: 'shirin', en: 'Excuse me, where is the bus stop?', ckb: 'ببورە، وێستگەها پاسێ ل کویە؟' },
    { characterId: 'dara', en: 'Next to the station entrance, on the left.', ckb: 'ل ڕەخ دەرگای ژوورکەڤنێ یا وێستگەهێ، ل چەپێ.' },
    { characterId: 'shirin', en: 'Is the market far from there?', ckb: 'بازار ژ ویرێ دورە؟' },
    { characterId: 'dara', en: 'No, only two kilometers. Look at this map.', ckb: 'نەخێر، تنێ دوو کیلۆمەتەر. سەحکە ڤێ نەخشەیێ.' },
    { characterId: 'shirin', en: 'Can I buy a ticket at the station?', ckb: 'ئەز دشێم ل وێستگەهێ بلیت بکڕم؟' },
    { characterId: 'dara', en: 'Yes. Keep your luggage with you.', ckb: 'بەلێ. جانتاو بارێ خو ب خۆ را بهێلە.' },
  ],
};
