import type { Level } from '../../types/content';

export const level61: Level = {
  id: 61,
  titleEn: 'Telling a Story',
  titleCkb: 'چیرۆک گۆتن',
  icon: '📖',
  objectiveEn: 'Tell a short story in the past using sequence words and reasons.',
  objectiveCkb: 'چیرۆکەکا کورت ژ ڕابووردوو ب پەیڤێن ڕێکخستن و ئەگەران بگەهینە.',
  cefr: 'A2',
  vocab: [
    { id: 'l61-first', en: 'first', ckb: 'ئێکەم', pos: 'other', emoji: '1️⃣', phonetic: '/fɜːst/', exampleEn: 'First, I woke up early.', exampleCkb: 'ئێکەم، ئەز زوو هشیار بووم.', category: 'sequence', difficulty: 1, bahdiniReviewed: false },
    { id: 'l61-then', en: 'then', ckb: 'پاشی', pos: 'other', emoji: '➡️', phonetic: '/ðen/', exampleEn: 'Then, I ate breakfast.', exampleCkb: 'پاشی، من ژار خوار.', category: 'sequence', difficulty: 1, bahdiniReviewed: false },
    { id: 'l61-after-that', en: 'after that', ckb: 'پاش وان', pos: 'phrase', emoji: '⏭️', phonetic: '/ˈɑːftə ðæt/', exampleEn: 'After that, we left home.', exampleCkb: 'پاش وان، ئەم ژ مال دەرکەفتین.', category: 'sequence', difficulty: 2, bahdiniReviewed: false },
    { id: 'l61-finally', en: 'finally', ckb: 'دوماهیێ', pos: 'other', emoji: '🏁', phonetic: '/ˈfaɪnəli/', exampleEn: 'Finally, we arrived home.', exampleCkb: 'دوماهیێ، ئەم گەهیشتینە مال.', category: 'sequence', difficulty: 1, bahdiniReviewed: false },
    { id: 'l61-suddenly', en: 'suddenly', ckb: 'پەلەبەر', pos: 'other', emoji: '⚡', phonetic: '/ˈsʌdənli/', exampleEn: 'Suddenly, it started raining.', exampleCkb: 'پەلەبەر باران دەستپێکر.', category: 'sequence', difficulty: 2, bahdiniReviewed: false },
    { id: 'l61-because', en: 'because', ckb: 'چونکو', pos: 'other', emoji: '💭', phonetic: '/bɪˈkɒz/', exampleEn: 'We stayed inside because it rained.', exampleCkb: 'ئەم ل ناڤ مال مان چونکو باران بارای.', category: 'reasons', difficulty: 1, bahdiniReviewed: false },
    { id: 'l61-so', en: 'so', ckb: 'جا', pos: 'other', emoji: '👉', phonetic: '/səʊ/', exampleEn: 'I was tired, so I went to bed.', exampleCkb: 'ئەز ماندوو بووم، جا چوومە خەڤێ.', category: 'reasons', difficulty: 2, bahdiniReviewed: false },
    { id: 'l61-when', en: 'when', ckb: 'دەمێ', pos: 'other', emoji: '⏰', phonetic: '/wen/', exampleEn: 'I was happy when they arrived.', exampleCkb: 'دەمێ ئەوان گەهیشتن، ئەز دڵخۆش بووم.', category: 'time', difficulty: 2, bahdiniReviewed: false },
    { id: 'l61-story', en: 'story', ckb: 'چیرۆک', pos: 'noun', emoji: '📚', phonetic: '/ˈstɔːri/', exampleEn: 'Tell us your story.', exampleCkb: 'چیرۆکا خو بۆ مە بڵێ.', category: 'stories', difficulty: 1, bahdiniReviewed: false },
    { id: 'l61-happen', en: 'happen', ckb: 'ڕوویدان', pos: 'verb', emoji: '❗', phonetic: '/ˈhæpən/', exampleEn: 'What happened yesterday?', exampleCkb: 'دوهی چ ڕوویدا؟', category: 'stories', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'First, I woke up early.', ckb: 'ئێکەم، ئەز زوو هشیار بووم.' },
    { en: 'After that, we left home.', ckb: 'پاش وان، ئەم ژ مال دەرکەفتین.' },
    { en: 'We stayed inside because it rained.', ckb: 'ئەم ل ناڤ مال مان چونکو باران بارای.' },
    { en: 'What happened yesterday?', ckb: 'دوهی چ ڕوویدا؟' },
  ],
  conversation: [
    { characterId: 'dara', en: 'What happened on your trip?', ckb: 'د گەشتا تە دا چ ڕوویدا؟' },
    { characterId: 'shirin', en: 'First, we left early. Then, we drove to the mountains.', ckb: 'ئێکەم، ئەم زوو دەرکەفتین. پاشی، ئەم ب ترۆمبێل چووینە چیا.' },
    { characterId: 'dara', en: 'Did you have a good time?', ckb: 'گەشت ل وان خۆش بوو؟' },
    { characterId: 'shirin', en: 'Yes, but suddenly it started raining, so we found a café.', ckb: 'بەلێ، بەس پەلەبەر باران دەستپێکر، جا ئەم کافێیەک دیت.' },
    { characterId: 'dara', en: 'What did you do after that?', ckb: 'پاش وان وە چ کر؟' },
    { characterId: 'shirin', en: 'We drank tea, and finally we arrived home safely.', ckb: 'مە چای ڤەخوار، و دوماهیێ ئەم ب ساخلەمی گەهیشتینە مال.' },
  ],
};
