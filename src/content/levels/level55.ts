import type { Level } from '../../types/content';

export const level55: Level = {
  id: 55,
  titleEn: 'Airport and Travel Review',
  titleCkb: 'دووبارەکرنا فڕۆکەخانە و گەشتێ',
  icon: '✈️',
  objectiveEn: 'Handle delays, cancellations, confirmations, and airport procedures.',
  objectiveCkb: 'درنگکەتن، هەڵوەشاندن، پشتڕاستکرن و کارێن فڕۆکەخانێ بکاربینە.',
  cefr: 'A2',
  vocab: [
    { id: 'l55-delay', en: 'delay', ckb: 'درنگکەتن', pos: 'noun', emoji: '⏳', phonetic: '/dɪˈleɪ/', exampleEn: 'The flight has a delay.', exampleCkb: 'گەشت درنگ دکەت.', category: 'travel', difficulty: 2, bahdiniReviewed: false },
    { id: 'l55-cancel', en: 'cancel', ckb: 'هەڵوەشاندن', pos: 'verb', emoji: '❌', phonetic: '/ˈkænsəl/', exampleEn: 'They cancelled our flight.', exampleCkb: 'وە گەشتا مە هەڵوەشاند.', category: 'travel', difficulty: 2, bahdiniReviewed: false },
    { id: 'l55-confirm', en: 'confirm', ckb: 'پشتڕاستکرن', pos: 'verb', emoji: '✅', phonetic: '/kənˈfɜːm/', exampleEn: 'Confirm your reservation.', exampleCkb: 'حەجزا خو پشتڕاست بکە.', category: 'travel', difficulty: 2, bahdiniReviewed: false },
    { id: 'l55-arrival', en: 'arrival', ckb: 'گەهیشتن', pos: 'noun', emoji: '🛬', phonetic: '/əˈraɪvəl/', exampleEn: 'The arrival is at five.', exampleCkb: 'گەهیشتن ل دەمژمێر پێنجێیە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l55-departure', en: 'departure', ckb: 'ڕۆیشتن', pos: 'noun', emoji: '🛫', phonetic: '/dɪˈpɑːtʃə/', exampleEn: 'The departure is at nine.', exampleCkb: 'ڕۆیشتن ل دەمژمێر نۆیێیە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l55-gate', en: 'gate', ckb: 'دەرگەھە', pos: 'noun', emoji: '🚪', phonetic: '/ɡeɪt/', exampleEn: 'Our gate is number five.', exampleCkb: 'دەرگەھا مە ژمارە پێنجە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l55-boarding-pass', en: 'boarding pass', ckb: 'کارتا سواربوونێ', pos: 'phrase', emoji: '🎟️', phonetic: '/ˈbɔːdɪŋ pɑːs/', exampleEn: 'Show your boarding pass.', exampleCkb: 'کارتا سواربوونا خو نیشان بدە.', category: 'travel', difficulty: 2, bahdiniReviewed: false },
    { id: 'l55-security', en: 'security', ckb: 'ئاسایش', pos: 'noun', emoji: '🔍', phonetic: '/sɪˈkjʊərəti/', exampleEn: 'Security is after check-in.', exampleCkb: 'ئاسایش ل پاش چێک ئینێیە.', category: 'travel', difficulty: 2, bahdiniReviewed: false },
    { id: 'l55-suitcase', en: 'suitcase', ckb: 'جانتا', pos: 'noun', emoji: '🧳', phonetic: '/ˈsuːtkeɪs/', exampleEn: 'My suitcase is too heavy.', exampleCkb: 'جانتایا من زۆر یا گرانە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
    { id: 'l55-flight', en: 'flight', ckb: 'گەشت', pos: 'noun', emoji: '✈️', phonetic: '/flaɪt/', exampleEn: 'Our flight is on time.', exampleCkb: 'گەشتا مە ل دەمێ خو یە.', category: 'travel', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'They cancelled our flight.', ckb: 'وە گەشتا مە هەڵوەشاند.' },
    { en: 'Confirm your reservation.', ckb: 'حەجزا خو پشتڕاست بکە.' },
    { en: 'Show your boarding pass.', ckb: 'کارتا سواربوونا خو نیشان بدە.' },
    { en: 'Our flight is on time.', ckb: 'گەشتا مە ل دەمێ خو یە.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'Why is everyone waiting at the gate?', ckb: 'بۆچی هەمی ل دەرگەھێ چەڤەرێ نە؟' },
    { characterId: 'shirin', en: 'Our flight has a delay, but it is not cancelled.', ckb: 'گەشتا مە درنگ دکەت، بەس نەهاتییە هەڵوەشاندن.' },
    { characterId: 'dara', en: 'Did they confirm the new departure time?', ckb: 'وە دەمێ ڕۆیشتنێ یێ نوی پشتڕاست کر؟' },
    { characterId: 'shirin', en: 'Yes, nine thirty. We have time for coffee.', ckb: 'بەلێ، نۆ و نیڤ. دەمێ مە هەیە قەهوەیێ بڤێخین.' },
    { characterId: 'dara', en: 'Good. I will keep my boarding pass and suitcase here.', ckb: 'باش. ئەز کارتا سواربوونێ و جانتایا خو ل ڤێرێ دپارێزم.' },
    { characterId: 'shirin', en: 'Do not go too far. They may call us soon.', ckb: 'گەلەک دور مەچە. دشێن زوو بانگا مە بکەن.' },
  ],
};
