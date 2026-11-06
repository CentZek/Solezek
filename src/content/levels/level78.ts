import type { Level } from '../../types/content';

export const level78: Level = {
  id: 78,
  titleEn: 'Celebrations and Newroz',
  titleCkb: 'ئاهەنگ و نەورۆز',
  icon: '🎉',
  objectiveEn: 'Talk about Newroz, holidays, guests, gifts, and family traditions.',
  objectiveCkb: 'بەحس ژ نەورۆز، پشوو، مێهڤان، دیاری و نەریتێن خێزانێ بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l78-newroz', en: 'Newroz', ckb: 'نەورۆز', pos: 'noun', emoji: '🔥', phonetic: '/ˈnəʊrəʊz/', exampleEn: 'Newroz is an important celebration.', exampleCkb: 'نەورۆز ئاهەنگەکا گرنگە.', category: 'celebrations', difficulty: 1, bahdiniReviewed: false },
    { id: 'l78-celebration', en: 'celebration', ckb: 'ئاهەنگ', pos: 'noun', emoji: '🎉', phonetic: '/ˌselɪˈbreɪʃən/', exampleEn: 'The celebration starts at noon.', exampleCkb: 'ئاهەنگ ل نیڤڕۆ دەستپێدکەت.', category: 'celebrations', difficulty: 1, bahdiniReviewed: false },
    { id: 'l78-holiday', en: 'holiday', ckb: 'پشوو', pos: 'noun', emoji: '🏖️', phonetic: '/ˈhɒlədeɪ/', exampleEn: 'We have a holiday tomorrow.', exampleCkb: 'سەبەی پشوویا مە هەیە.', category: 'celebrations', difficulty: 1, bahdiniReviewed: false },
    { id: 'l78-guest', en: 'guest', ckb: 'مێهڤان', pos: 'noun', emoji: '🤗', phonetic: '/ɡest/', exampleEn: 'Many guests are coming tonight.', exampleCkb: 'گەلەک مێهڤان ئەڤشەڤ دێن.', category: 'people', difficulty: 1, bahdiniReviewed: false },
    { id: 'l78-gift', en: 'gift', ckb: 'دیاری', pos: 'noun', emoji: '🎁', phonetic: '/ɡɪft/', exampleEn: 'I bought a gift for my mother.', exampleCkb: 'من دیاریەک بۆ دایکا خو کڕی.', category: 'celebrations', difficulty: 1, bahdiniReviewed: false },
    { id: 'l78-traditional', en: 'traditional', ckb: 'نەریتی', pos: 'adjective', emoji: '🧵', phonetic: '/trəˈdɪʃənəl/', exampleEn: 'She is wearing traditional clothes.', exampleCkb: 'جلوبەرگێن نەریتی ل بەری یە.', category: 'culture', difficulty: 2, bahdiniReviewed: false },
    { id: 'l78-music', en: 'music', ckb: 'مۆزیک', pos: 'noun', emoji: '🎵', phonetic: '/ˈmjuːzɪk/', exampleEn: 'Traditional music is playing.', exampleCkb: 'مۆزیکا نەریتی لێدەدرێت.', category: 'culture', difficulty: 1, bahdiniReviewed: false },
    { id: 'l78-dance', en: 'dance', ckb: 'دانس', pos: 'verb', emoji: '💃', phonetic: '/dɑːns/', exampleEn: 'People dance together at Newroz.', exampleCkb: 'خەلک ل نەورۆزێ پێکڤە دانس دکەن.', category: 'culture', difficulty: 1, bahdiniReviewed: false },
    { id: 'l78-visit', en: 'visit', ckb: 'سەرەدانکرن', pos: 'verb', emoji: '🏡', phonetic: '/ˈvɪzɪt/', exampleEn: 'We visit our relatives during the holiday.', exampleCkb: 'ئەم د پشوویێ دا سەرەدانا خێزانا خو دکەین.', category: 'celebrations', difficulty: 1, bahdiniReviewed: false },
    { id: 'l78-special', en: 'special', ckb: 'تایبەت', pos: 'adjective', emoji: '⭐', phonetic: '/ˈspeʃəl/', exampleEn: 'Newroz is a special day for us.', exampleCkb: 'نەورۆز بۆ مە ڕۆژەکا تایبەتە.', category: 'culture', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Newroz is an important celebration.', ckb: 'نەورۆز ئاهەنگەکا گرنگە.' },
    { en: 'Many guests are coming tonight.', ckb: 'گەلەک مێهڤان ئەڤشەڤ دێن.' },
    { en: 'People dance together at Newroz.', ckb: 'خەلک ل نەورۆزێ پێکڤە دانس دکەن.' },
    { en: 'We visit our relatives during the holiday.', ckb: 'ئەم د پشوویێ دا سەرەدانا خێزانا خو دکەین.' },
  ],
  conversation: [
    { characterId: 'shirin', en: 'What are you doing for Newroz?', ckb: 'تو بۆ نەورۆزێ چ دکەی؟' },
    { characterId: 'dara', en: 'My family is having a big celebration. Many guests are coming.', ckb: 'خێزانا من ئاهەنگەکا مەزن دکەت. گەلەک مێهڤان دێن.' },
    { characterId: 'shirin', en: 'Will you wear traditional clothes?', ckb: 'تو جلوبەرگێن نەریتی ل بەر دکەی؟' },
    { characterId: 'dara', en: 'Yes, and we will listen to music and dance together.', ckb: 'بەلێ، و ئەم دێ گوهداری مۆزیکێ بکەین و پێکڤە دانس بکەین.' },
    { characterId: 'shirin', en: 'That sounds wonderful. I bought a small gift for your mother.', ckb: 'گەلەک خۆشە. من دیاریەکا بچووک بۆ دایکا تە کڕی.' },
    { characterId: 'dara', en: 'Thank you. Come early and enjoy the holiday with us.', ckb: 'سوپاس. زوو وەرە و پشووێ دگەل مە بەسەر ببە.' },
  ],
};
