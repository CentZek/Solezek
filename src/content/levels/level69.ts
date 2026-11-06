import type { Level } from '../../types/content';

export const level69: Level = {
  id: 69,
  titleEn: 'Public Transport and Journeys',
  titleCkb: 'ترانسپۆرتا گشتی و گەشت',
  icon: '🚌',
  objectiveEn: 'Buy fares, choose routes, and talk about passengers and journeys.',
  objectiveCkb: 'بلیت بکڕە، ڕێکا هەلبژێرە و بەحس ژ سەرنشین و گەشتان بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l69-public-transport', en: 'public transport', ckb: 'ترانسپۆرتا گشتی', pos: 'phrase', emoji: '🚎', phonetic: '/ˈpʌblɪk ˈtrænspɔːt/', exampleEn: 'I use public transport every day.', exampleCkb: 'ئەز هەر ڕۆژی ترانسپۆرتا گشتی بکار دئینم.', category: 'transport', difficulty: 1, bahdiniReviewed: false },
    { id: 'l69-fare', en: 'fare', ckb: 'بها', pos: 'noun', emoji: '🎫', phonetic: '/feə/', exampleEn: 'The bus fare is cheap.', exampleCkb: 'بها پاسێ هەرزانە.', category: 'transport', difficulty: 2, bahdiniReviewed: false },
    { id: 'l69-route', en: 'route', ckb: 'ڕێکا', pos: 'noun', emoji: '🗺️', phonetic: '/ruːt/', exampleEn: 'Which route goes to the station?', exampleCkb: 'کام ڕێکا دچیتە وێستگەهێ؟', category: 'transport', difficulty: 2, bahdiniReviewed: false },
    { id: 'l69-journey', en: 'journey', ckb: 'گەشت', pos: 'noun', emoji: '🧭', phonetic: '/ˈdʒɜːni/', exampleEn: 'The journey takes twenty minutes.', exampleCkb: 'گەشت بیست خولەک دخاینێت.', category: 'transport', difficulty: 1, bahdiniReviewed: false },
    { id: 'l69-passenger', en: 'passenger', ckb: 'سەرنشین', pos: 'noun', emoji: '🧑‍🤝‍🧑', phonetic: '/ˈpæsɪndʒə/', exampleEn: 'The passengers are waiting.', exampleCkb: 'سەرنشین چەڤەرێ نە.', category: 'transport', difficulty: 2, bahdiniReviewed: false },
    { id: 'l69-driver', en: 'driver', ckb: 'شۆفێر', pos: 'noun', emoji: '🧑‍✈️', phonetic: '/ˈdraɪvə/', exampleEn: 'Ask the driver for help.', exampleCkb: 'ژ شۆفێری ھاریکاری بخوازە.', category: 'transport', difficulty: 1, bahdiniReviewed: false },
    { id: 'l69-station', en: 'station', ckb: 'وێستگەه', pos: 'noun', emoji: '🚉', phonetic: '/ˈsteɪʃən/', exampleEn: 'Get off at the next station.', exampleCkb: 'ل وێستگەها بهێت داخ ببە.', category: 'transport', difficulty: 1, bahdiniReviewed: false },
    { id: 'l69-ticket', en: 'ticket', ckb: 'بلیت', pos: 'noun', emoji: '🎟️', phonetic: '/ˈtɪkɪt/', exampleEn: 'Show your ticket to the driver.', exampleCkb: 'بلیتا خو بۆ شۆفێری نیشان بدە.', category: 'transport', difficulty: 1, bahdiniReviewed: false },
    { id: 'l69-bus', en: 'bus', ckb: 'پاس', pos: 'noun', emoji: '🚌', phonetic: '/bʌs/', exampleEn: 'The bus arrives at eight.', exampleCkb: 'پاس ل دەمژمێر هەشتێ دگەهێت.', category: 'transport', difficulty: 1, bahdiniReviewed: false },
    { id: 'l69-taxi', en: 'taxi', ckb: 'تەکسی', pos: 'noun', emoji: '🚕', phonetic: '/ˈtæksi/', exampleEn: 'Take a taxi if you are late.', exampleCkb: 'ئەگەر تو درنگ یی، تەکسییەکێ بگرە.', category: 'transport', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'I use public transport every day.', ckb: 'ئەز هەر ڕۆژی ترانسپۆرتا گشتی بکار دئینم.' },
    { en: 'Which route goes to the station?', ckb: 'کام ڕێکا دچیتە وێستگەهێ؟' },
    { en: 'The journey takes twenty minutes.', ckb: 'گەشت بیست خولەک دخاینێت.' },
    { en: 'Show your ticket to the driver.', ckb: 'بلیتا خو بۆ شۆفێری نیشان بدە.' },
  ],
  conversation: [
    { characterId: 'shirin', en: 'Which route should we take?', ckb: 'ئەم دڤێت کام ڕێکا بگرین؟' },
    { characterId: 'dara', en: 'The bus is cheaper, but a taxi is faster.', ckb: 'پاس هەرزانترە، بەس تەکسی خێراترە.' },
    { characterId: 'shirin', en: 'How long is the bus journey?', ckb: 'گەشتا پاسێ چەند درێژە؟' },
    { characterId: 'dara', en: 'Twenty minutes. The next bus arrives at eight.', ckb: 'بیست خولەک. پاسا بهێت ل هەشتێ دگەهێت.' },
    { characterId: 'shirin', en: 'Good. I will buy the tickets.', ckb: 'باش. ئەز دێ بلیتان بکڕم.' },
    { characterId: 'dara', en: 'Show them to the driver when we get on.', ckb: 'دەمێ ئەم سوار دبین، بۆ شۆفێری نیشانی بدە.' },
  ],
};
