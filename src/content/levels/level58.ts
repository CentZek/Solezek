import type { Level } from '../../types/content';

export const level58: Level = {
  id: 58,
  titleEn: 'Trips and Personal Experiences',
  titleCkb: 'گەشت و ئەزموونێن کەسی',
  icon: '🏞️',
  objectiveEn: 'Describe a trip, places you visited, photos, and memorable experiences.',
  objectiveCkb: 'گەشت، جهێن سەرەدانکری، وێنە و ئەزموونێن خو وەسف بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l58-trip', en: 'trip', ckb: 'گەشت', pos: 'noun', emoji: '🧭', phonetic: '/trɪp/', exampleEn: 'Our trip was wonderful.', exampleCkb: 'گەشتا مە گەلەک خۆش بوو.', category: 'experiences', difficulty: 1, bahdiniReviewed: false },
    { id: 'l58-museum', en: 'museum', ckb: 'مۆزەخانە', pos: 'noun', emoji: '🏛️', phonetic: '/mjuˈziːəm/', exampleEn: 'We visited a museum.', exampleCkb: 'مە سەرەدانا مۆزەخانەیەکێ کر.', category: 'experiences', difficulty: 2, bahdiniReviewed: false },
    { id: 'l58-mountain', en: 'mountain', ckb: 'چیا', pos: 'noun', emoji: '⛰️', phonetic: '/ˈmaʊntən/', exampleEn: 'The mountains are beautiful.', exampleCkb: 'چیا گەلەک جوان نە.', category: 'places', difficulty: 1, bahdiniReviewed: false },
    { id: 'l58-sea', en: 'sea', ckb: 'دەریا', pos: 'noun', emoji: '🌊', phonetic: '/siː/', exampleEn: 'I saw the sea last year.', exampleCkb: 'من ساڵا ڕابووردوو دەریا دیت.', category: 'places', difficulty: 1, bahdiniReviewed: false },
    { id: 'l58-photo', en: 'photo', ckb: 'وێنە', pos: 'noun', emoji: '📷', phonetic: '/ˈfəʊtəʊ/', exampleEn: 'I took many photos.', exampleCkb: 'من گەلەک وێنە گرت.', category: 'experiences', difficulty: 1, bahdiniReviewed: false },
    { id: 'l58-souvenir', en: 'souvenir', ckb: 'یادگاری', pos: 'noun', emoji: '🎁', phonetic: '/ˌsuːvəˈnɪə/', exampleEn: 'I bought a souvenir for my mother.', exampleCkb: 'من یادگاریەک بۆ دایکا خو کڕی.', category: 'experiences', difficulty: 3, bahdiniReviewed: false },
    { id: 'l58-enjoy', en: 'enjoy', ckb: 'خۆش دیتن', pos: 'verb', emoji: '😊', phonetic: '/ɪnˈdʒɔɪ/', exampleEn: 'We enjoyed the trip.', exampleCkb: 'گەشت ل مە خۆش بوو.', category: 'experiences', difficulty: 1, bahdiniReviewed: false },
    { id: 'l58-weather', en: 'weather', ckb: 'هەوا', pos: 'noun', emoji: '🌤️', phonetic: '/ˈweðə/', exampleEn: 'The weather was sunny.', exampleCkb: 'هەوا هەتاوی بوو.', category: 'experiences', difficulty: 1, bahdiniReviewed: false },
    { id: 'l58-story', en: 'story', ckb: 'چیرۆک', pos: 'noun', emoji: '📖', phonetic: '/ˈstɔːri/', exampleEn: 'Tell me about your trip.', exampleCkb: 'چیرۆکا گەشتا خو بۆ من بڵێ.', category: 'experiences', difficulty: 2, bahdiniReviewed: false },
    { id: 'l58-weekend', en: 'weekend', ckb: 'دوماهیا حەفتیێ', pos: 'noun', emoji: '🗓️', phonetic: '/ˌwiːkˈend/', exampleEn: 'We travelled last weekend.', exampleCkb: 'مە دوماهیا حەفتیا ڕابووردوو گەشت کر.', category: 'time', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'We visited a museum.', ckb: 'مە سەرەدانا مۆزەخانەیەکێ کر.' },
    { en: 'I took many photos.', ckb: 'من گەلەک وێنە گرت.' },
    { en: 'We enjoyed the trip.', ckb: 'گەشت ل مە خۆش بوو.' },
    { en: 'Tell me about your trip.', ckb: 'چیرۆکا گەشتا خو بۆ من بڵێ.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'How was your trip last weekend?', ckb: 'گەشتا تە یا حەفتیا ڕابووردوو چەوان بوو؟' },
    { characterId: 'shirin', en: 'Wonderful. We visited a museum and went to the mountains.', ckb: 'گەلەک خۆش بوو. مە سەرەدانا مۆزەخانەیەکێ کر و چووینە چیا.' },
    { characterId: 'dara', en: 'How was the weather?', ckb: 'هەوا چەوان بوو؟' },
    { characterId: 'shirin', en: 'Sunny every day. I took many photos.', ckb: 'هەر ڕۆژی هەتاوی بوو. من گەلەک وێنە گرت.' },
    { characterId: 'dara', en: 'Did you buy any souvenirs?', ckb: 'تو هندەک یادگاری کڕی؟' },
    { characterId: 'shirin', en: 'Yes, one for my mother. I will tell you the whole story tonight.', ckb: 'بەلێ، ئێک بۆ دایکا خو. ئەز دێ ئەڤشەڤ هەمی چیرۆکێ بۆ تە بڵێم.' },
  ],
};
