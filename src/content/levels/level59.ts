import type { Level } from '../../types/content';

export const level59: Level = {
  id: 59,
  titleEn: 'Polite Requests and Problems',
  titleCkb: 'داخازێن ب ئەدەب و کێشە',
  icon: '🤝',
  objectiveEn: 'Make polite requests, explain problems, apologize, and ask for solutions.',
  objectiveCkb: 'داخازێن ب ئەدەب بکە، کێشە ڕابگەهینە، لێبوردنێ بکە و چارەسەری بخوازە.',
  cefr: 'A2',
  vocab: [
    { id: 'l59-could-you', en: 'could you', ckb: 'تو دشێی', pos: 'phrase', emoji: '🙏', phonetic: '/kʊd juː/', exampleEn: 'Could you help me?', exampleCkb: 'تو دشێی ھاریکاریا من بکەی؟', category: 'requests', difficulty: 1, bahdiniReviewed: false },
    { id: 'l59-request', en: 'request', ckb: 'داخاز', pos: 'noun', emoji: '📝', phonetic: '/rɪˈkwest/', exampleEn: 'I have a small request.', exampleCkb: 'داخازەکا بچووک یا من هەیە.', category: 'requests', difficulty: 2, bahdiniReviewed: false },
    { id: 'l59-problem', en: 'problem', ckb: 'کێشە', pos: 'noun', emoji: '🧩', phonetic: '/ˈprɒbləm/', exampleEn: 'There is a problem with my room.', exampleCkb: 'کێشەیەک ل ژوورا من هەیە.', category: 'problems', difficulty: 1, bahdiniReviewed: false },
    { id: 'l59-fix', en: 'fix', ckb: 'چاککرن', pos: 'verb', emoji: '🔧', phonetic: '/fɪks/', exampleEn: 'Can you fix the computer?', exampleCkb: 'تو دشێی کۆمپیوتەری چاک بکەی؟', category: 'problems', difficulty: 2, bahdiniReviewed: false },
    { id: 'l59-broken', en: 'broken', ckb: 'شکستی', pos: 'adjective', emoji: '🪫', phonetic: '/ˈbrəʊkən/', exampleEn: 'My phone is broken.', exampleCkb: 'موبایلێ من شکستی یە.', category: 'problems', difficulty: 2, bahdiniReviewed: false },
    { id: 'l59-missing', en: 'missing', ckb: 'ون', pos: 'adjective', emoji: '🔎', phonetic: '/ˈmɪsɪŋ/', exampleEn: 'My key is missing.', exampleCkb: 'کلیلا من یا ونە.', category: 'problems', difficulty: 2, bahdiniReviewed: false },
    { id: 'l59-wrong', en: 'wrong', ckb: 'خەڵەت', pos: 'adjective', emoji: '❌', phonetic: '/rɒŋ/', exampleEn: 'This is the wrong room.', exampleCkb: 'ئەڤە ژوورا خەڵەتە.', category: 'problems', difficulty: 1, bahdiniReviewed: false },
    { id: 'l59-apologize', en: 'apologize', ckb: 'لێبوردن', pos: 'verb', emoji: '😔', phonetic: '/əˈpɒlədʒaɪz/', exampleEn: 'I apologize for the mistake.', exampleCkb: 'ئەز ژ خەڵەتیێ لێبوردنێ دکەم.', category: 'politeness', difficulty: 3, bahdiniReviewed: false },
    { id: 'l59-solution', en: 'solution', ckb: 'چارەسەری', pos: 'noun', emoji: '💡', phonetic: '/səˈluːʃən/', exampleEn: 'We need a quick solution.', exampleCkb: 'پێدڤییا مە ب چارەسەریەکا زوو هەیە.', category: 'problems', difficulty: 3, bahdiniReviewed: false },
    { id: 'l59-understand', en: 'understand', ckb: 'تێگەیشتن', pos: 'verb', emoji: '💭', phonetic: '/ˌʌndəˈstænd/', exampleEn: 'I understand the problem.', exampleCkb: 'ئەز تێگەهشتمە کێشەیێ.', category: 'communication', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Could you help me, please?', ckb: 'تو دشێی ھاریکاریا من بکەی، هیڤیدارم؟' },
    { en: 'There is a problem with my room.', ckb: 'کێشەیەک ل ژوورا من هەیە.' },
    { en: 'I apologize for the mistake.', ckb: 'ئەز ژ خەڵەتیێ لێبوردنێ دکەم.' },
    { en: 'I understand the problem.', ckb: 'ئەز تێگەهشتمە کێشەیێ.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'Could you help me? My room key is missing.', ckb: 'تو دشێی ھاریکاریا من بکەی؟ کلیلا ژوورا من یا ونە.' },
    { characterId: 'azad', en: 'Of course. Is this the wrong room?', ckb: 'بێگومان. ئەڤە ژوورا خەڵەتە؟' },
    { characterId: 'rojin', en: 'No, it is my room, but the door is broken too.', ckb: 'نەخێر، ژوورا منە، بەس دەرگا ژی شکستی یە.' },
    { characterId: 'azad', en: 'I understand. I apologize for the problem.', ckb: 'ئەز تێگەهشتم. ئەز ژ کێشەیێ لێبوردنێ دکەم.' },
    { characterId: 'rojin', en: 'Thank you. Can you fix it quickly?', ckb: 'سوپاس. تو دشێی زوو وی چاک بکەی؟' },
    { characterId: 'azad', en: 'Yes. We will give you another key and fix the door now.', ckb: 'بەلێ. ئەم دێ کلیلەکا دی بدەنە تە و نوکە دەرگای چاک بکەین.' },
  ],
};
