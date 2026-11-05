import type { Level } from '../../types/content';

export const level41: Level = {
  id: 41,
  titleEn: 'Time and Daily Plans',
  titleCkb: 'دەم و بەرنامەیا ڕۆژانە',
  icon: '⏰',
  objectiveEn: 'Talk about schedules, appointments, and doing things early or late.',
  objectiveCkb: 'بەحس ژ بەرنامە و دیداران بکە و بڵێ تو زوو یان درنگ دچی.',
  cefr: 'A2',
  vocab: [
    { id: 'l41-clock', en: 'clock', ckb: 'دەمژمێر', pos: 'noun', emoji: '🕰️', phonetic: '/klɒk/', exampleEn: 'The clock is on the wall.', exampleCkb: 'دەمژمێر ل سەر دیواری یە.', category: 'time', difficulty: 1, bahdiniReviewed: false },
    { id: 'l41-minute', en: 'minute', ckb: 'خولەک', pos: 'noun', emoji: '⏱️', phonetic: '/ˈmɪnɪt/', exampleEn: 'Wait five minutes.', exampleCkb: 'پێنج خولەک چەڤەرێ بە.', category: 'time', difficulty: 1, bahdiniReviewed: false },
    { id: 'l41-early', en: 'early', ckb: 'زوو', pos: 'other', emoji: '🌅', phonetic: '/ˈɜːli/', exampleEn: 'I wake up early.', exampleCkb: 'ئەز زوو هشیار دبم.', category: 'time', difficulty: 1, bahdiniReviewed: false },
    { id: 'l41-late', en: 'late', ckb: 'درنگ', pos: 'other', emoji: '🌙', phonetic: '/leɪt/', exampleEn: 'The bus is late today.', exampleCkb: 'پاس ئەڤڕۆ درنگە.', category: 'time', difficulty: 1, bahdiniReviewed: false },
    { id: 'l41-before', en: 'before', ckb: 'بەر', pos: 'other', emoji: '⬅️', phonetic: '/bɪˈfɔː/', exampleEn: 'I drink tea before work.', exampleCkb: 'ئەز بەر کارێ چایێ دڤێخوم.', category: 'time', difficulty: 2, bahdiniReviewed: false },
    { id: 'l41-after', en: 'after', ckb: 'پاش', pos: 'other', emoji: '➡️', phonetic: '/ˈɑːftə/', exampleEn: 'I call you after work.', exampleCkb: 'ئەز پاش کارێ تەلەفۆنا تە دکەم.', category: 'time', difficulty: 2, bahdiniReviewed: false },
    { id: 'l41-schedule', en: 'schedule', ckb: 'بەرنامە', pos: 'noun', emoji: '🗓️', phonetic: '/ˈʃedjuːl/', exampleEn: 'My schedule is busy today.', exampleCkb: 'بەرنامەیا من ئەڤڕۆ یا مژوولە.', category: 'plans', difficulty: 2, bahdiniReviewed: false },
    { id: 'l41-appointment', en: 'appointment', ckb: 'دیدار', pos: 'noun', emoji: '📅', phonetic: '/əˈpɔɪntmənt/', exampleEn: 'I have a doctor appointment.', exampleCkb: 'دیدارەکا من ل گەڵ دکتوری هەیە.', category: 'plans', difficulty: 2, bahdiniReviewed: false },
    { id: 'l41-weekday', en: 'weekday', ckb: 'ڕۆژێن حەفتیێ', pos: 'noun', emoji: '💼', phonetic: '/ˈwiːkdeɪ/', exampleEn: 'I work on weekdays.', exampleCkb: 'ئەز ڕۆژێن حەفتیێ کار دکەم.', category: 'time', difficulty: 2, bahdiniReviewed: false },
    { id: 'l41-weekend', en: 'weekend', ckb: 'دوماهیا حەفتیێ', pos: 'noun', emoji: '🏖️', phonetic: '/ˌwiːkˈend/', exampleEn: 'We visit our family at the weekend.', exampleCkb: 'ئەم دوماهیا حەفتیێ سەرەدانا خێزانا خو دکەین.', category: 'time', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'I wake up before seven.', ckb: 'ئەز بەر دەمژمێر حەفتێ هشیار دبم.' },
    { en: 'I call you after work.', ckb: 'ئەز پاش کارێ تەلەفۆنا تە دکەم.' },
    { en: 'The bus is ten minutes late.', ckb: 'پاس دەه خولەک درنگە.' },
    { en: 'I have an appointment at three.', ckb: 'دیدارەکا من ل دەمژمێر سێیێ هەیە.' },
  ],
  conversation: [
    { characterId: 'shirin', en: 'What time is your appointment?', ckb: 'دیدارا تە ل دەمژمێر چەندێیە؟' },
    { characterId: 'dara', en: 'It is at three, before work.', ckb: 'ل دەمژمێر سێیێیە، بەر کارێ.' },
    { characterId: 'shirin', en: 'Do not be late. The doctor is busy.', ckb: 'درنگ مەکە. دکتور مژوولە.' },
    { characterId: 'dara', en: 'I will leave early. It is only ten minutes away.', ckb: 'ئەز دێ زوو دەرکەڤم. تنێ دەه خولەک دورە.' },
    { characterId: 'shirin', en: 'Call me after your appointment.', ckb: 'پاش دیدارا خو تەلەفۆنا من بکە.' },
    { characterId: 'dara', en: 'Of course. See you later!', ckb: 'بێگومان. پاشی ئەز تە دبینم!' },
  ],
};
