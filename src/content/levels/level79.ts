import type { Level } from '../../types/content';

export const level79: Level = {
  id: 79,
  titleEn: 'Opinions and Decisions',
  titleCkb: 'بۆچوون و بریار',
  icon: '💭',
  objectiveEn: 'Give opinions, agree or disagree, and explain a decision.',
  objectiveCkb: 'بۆچوونا خو بڵێ، ڕازی بە یان ڕازی نەبە و ئەگەرا بریارا خو بگەهینە.',
  cefr: 'A2',
  vocab: [
    { id: 'l79-think', en: 'think', ckb: 'هزرکرن', pos: 'verb', emoji: '💭', phonetic: '/θɪŋk/', exampleEn: 'I think this is a good idea.', exampleCkb: 'ئەز دبیرم ئەڤە هزرەکا باشە.', category: 'opinions', difficulty: 1, bahdiniReviewed: false },
    { id: 'l79-agree', en: 'agree', ckb: 'ڕازیبوون', pos: 'verb', emoji: '👍', phonetic: '/əˈɡriː/', exampleEn: 'I agree with you.', exampleCkb: 'ئەز ب تە را ڕازی مە.', category: 'opinions', difficulty: 1, bahdiniReviewed: false },
    { id: 'l79-disagree', en: 'disagree', ckb: 'ڕازینەبوون', pos: 'verb', emoji: '👎', phonetic: '/ˌdɪsəˈɡriː/', exampleEn: 'I disagree with that idea.', exampleCkb: 'ئەز ب وێ هزرێ ڕازی نامە.', category: 'opinions', difficulty: 2, bahdiniReviewed: false },
    { id: 'l79-maybe', en: 'maybe', ckb: 'رەنگە', pos: 'other', emoji: '🤔', phonetic: '/ˈmeɪbi/', exampleEn: 'Maybe we should leave earlier.', exampleCkb: 'رەنگە باشتر بێت زووتەر دەرکەڤین.', category: 'opinions', difficulty: 1, bahdiniReviewed: false },
    { id: 'l79-choose', en: 'choose', ckb: 'هەلبژارتن', pos: 'verb', emoji: '🔀', phonetic: '/tʃuːz/', exampleEn: 'Choose the better option.', exampleCkb: 'هەلبژاردنا باشتر هەلبژێرە.', category: 'decisions', difficulty: 1, bahdiniReviewed: false },
    { id: 'l79-decide', en: 'decide', ckb: 'بریاردان', pos: 'verb', emoji: '✅', phonetic: '/dɪˈsaɪd/', exampleEn: 'We decided to stay home.', exampleCkb: 'مە بریار دا ل مال بمینین.', category: 'decisions', difficulty: 1, bahdiniReviewed: false },
    { id: 'l79-reason', en: 'reason', ckb: 'ئەگەر', pos: 'noun', emoji: '💡', phonetic: '/ˈriːzən/', exampleEn: 'Tell me your reason.', exampleCkb: 'ئەگەرا خو بۆ من بڵێ.', category: 'decisions', difficulty: 2, bahdiniReviewed: false },
    { id: 'l79-idea', en: 'idea', ckb: 'هزر', pos: 'noun', emoji: '💭', phonetic: '/aɪˈdɪə/', exampleEn: 'That is an interesting idea.', exampleCkb: 'ئەو هزرەکا سەرنجڕاکێشە.', category: 'opinions', difficulty: 1, bahdiniReviewed: false },
    { id: 'l79-opinion', en: 'opinion', ckb: 'بۆچوون', pos: 'noun', emoji: '🗣️', phonetic: '/əˈpɪnjən/', exampleEn: 'What is your opinion?', exampleCkb: 'بۆچوونا تە چیە؟', category: 'opinions', difficulty: 2, bahdiniReviewed: false },
    { id: 'l79-prefer', en: 'prefer', ckb: 'باشتر دیتن', pos: 'verb', emoji: '⭐', phonetic: '/prɪˈfɜː/', exampleEn: 'I prefer the first option.', exampleCkb: 'ئەز هەلبژاردنا ئێکەم باشتر دبینم.', category: 'decisions', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'I think this is a good idea.', ckb: 'ئەز دبیرم ئەڤە هزرەکا باشە.' },
    { en: 'I agree with you.', ckb: 'ئەز ب تە را ڕازی مە.' },
    { en: 'Maybe we should leave earlier.', ckb: 'رەنگە باشتر بێت زووتەر دەرکەڤین.' },
    { en: 'We decided to stay home.', ckb: 'مە بریار دا ل مال بمینین.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'What is your opinion about the two options?', ckb: 'بۆچوونا تە دەربارێ هەردوو هەلبژاردنان چیە؟' },
    { characterId: 'shirin', en: 'I think the first option is better.', ckb: 'ئەز دبیرم هەلبژاردنا ئێکەم باشترە.' },
    { characterId: 'dara', en: 'I disagree. The second one is cheaper and easier.', ckb: 'ئەز ڕازی نامە. یا دوویێ هەرزانتر و ئاسانترە.' },
    { characterId: 'shirin', en: 'That is a good reason. Maybe you are right.', ckb: 'ئەو ئەگەرەکا باشە. رەنگە تو ڕاست یی.' },
    { characterId: 'dara', en: 'So what have we decided?', ckb: 'جا مە چ بریار دا؟' },
    { characterId: 'shirin', en: 'We will choose the second option. I agree with you now.', ckb: 'ئەم دێ یا دوویێ هەلبژێرین. نوکە ئەز ب تە را ڕازی مە.' },
  ],
};
