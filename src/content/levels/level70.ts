import type { Level } from '../../types/content';

export const level70: Level = {
  id: 70,
  titleEn: 'Travel Choices and Comparisons',
  titleCkb: 'هەلبژاردن و بەراوردکرنا گەشتێ',
  icon: '🧭',
  objectiveEn: 'Review travel vocabulary while comparing price, speed, comfort, and distance.',
  objectiveCkb: 'پەیڤێن گەشتێ ب بها، خێرایی، ئارامی و دوری دووبارە بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l70-cheaper', en: 'cheaper', ckb: 'هەرزانتر', pos: 'adjective', emoji: '🏷️', phonetic: '/ˈtʃiːpə/', exampleEn: 'The bus is cheaper than the taxi.', exampleCkb: 'پاس ژ تەکسیێ هەرزانترە.', category: 'comparisons', difficulty: 1, bahdiniReviewed: false },
    { id: 'l70-faster', en: 'faster', ckb: 'خێراتر', pos: 'adjective', emoji: '⚡', phonetic: '/ˈfɑːstə/', exampleEn: 'The taxi is faster.', exampleCkb: 'تەکسی خێراترە.', category: 'comparisons', difficulty: 1, bahdiniReviewed: false },
    { id: 'l70-easier', en: 'easier', ckb: 'ئاسانتر', pos: 'adjective', emoji: '👌', phonetic: '/ˈiːziə/', exampleEn: 'Online booking is easier.', exampleCkb: 'حەجزا ئۆنلاین ئاسانترە.', category: 'comparisons', difficulty: 2, bahdiniReviewed: false },
    { id: 'l70-better', en: 'better', ckb: 'باشتر', pos: 'adjective', emoji: '👍', phonetic: '/ˈbetə/', exampleEn: 'This route is better.', exampleCkb: 'ئەڤ ڕێکا باشترە.', category: 'comparisons', difficulty: 1, bahdiniReviewed: false },
    { id: 'l70-worse', en: 'worse', ckb: 'خرابتر', pos: 'adjective', emoji: '👎', phonetic: '/wɜːs/', exampleEn: 'The traffic is worse today.', exampleCkb: 'ترافیک ئەڤڕۆ خرابترە.', category: 'comparisons', difficulty: 2, bahdiniReviewed: false },
    { id: 'l70-distance', en: 'distance', ckb: 'دوری', pos: 'noun', emoji: '📏', phonetic: '/ˈdɪstəns/', exampleEn: 'The distance is short.', exampleCkb: 'دوری کورتە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l70-direction', en: 'direction', ckb: 'ئاراستە', pos: 'noun', emoji: '🧭', phonetic: '/dəˈrekʃən/', exampleEn: 'We are going in the right direction.', exampleCkb: 'ئەم ل ئاراستەیا ڕاست دچین.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l70-luggage', en: 'luggage', ckb: 'جانتاو بار', pos: 'noun', emoji: '🧳', phonetic: '/ˈlʌɡɪdʒ/', exampleEn: 'Keep your luggage close.', exampleCkb: 'جانتاو بارێ خو نێزک بهێلە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l70-reservation', en: 'reservation', ckb: 'حەجز', pos: 'noun', emoji: '📋', phonetic: '/ˌrezəˈveɪʃən/', exampleEn: 'Check your reservation before travelling.', exampleCkb: 'بەر گەشتێ حەجزا خو پشکنین بکە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l70-arrival', en: 'arrival', ckb: 'گەهیشتن', pos: 'noun', emoji: '🛬', phonetic: '/əˈraɪvəl/', exampleEn: 'Our arrival is later today.', exampleCkb: 'گەهیشتنا مە ئەڤڕۆ درنگترە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'The bus is cheaper than the taxi.', ckb: 'پاس ژ تەکسیێ هەرزانترە.' },
    { en: 'Online booking is easier.', ckb: 'حەجزا ئۆنلاین ئاسانترە.' },
    { en: 'The traffic is worse today.', ckb: 'ترافیک ئەڤڕۆ خرابترە.' },
    { en: 'Check your reservation before travelling.', ckb: 'بەر گەشتێ حەجزا خو پشکنین بکە.' },
  ],
  conversation: [
    { characterId: 'azad', en: 'Should we take the bus or a taxi?', ckb: 'ئەم پاسێ بگرین یان تەکسی؟' },
    { characterId: 'rojin', en: 'The bus is cheaper, but the taxi is faster and easier with luggage.', ckb: 'پاس هەرزانترە، بەس تەکسی ب جانتاو بار خێراتر و ئاسانترە.' },
    { characterId: 'azad', en: 'Is the distance long?', ckb: 'دوری درێژە؟' },
    { characterId: 'rojin', en: 'No, but the traffic is worse today.', ckb: 'نەخێر، بەس ترافیک ئەڤڕۆ خرابترە.' },
    { characterId: 'azad', en: 'Then the bus is the better choice.', ckb: 'جا پاس هەلبژاردنا باشترە.' },
    { characterId: 'rojin', en: 'Agreed. Check the arrival time on our reservation.', ckb: 'ڕازی مە. دەمێ گەهیشتنێ ل حەجزا خو پشکنین بکە.' },
  ],
};
