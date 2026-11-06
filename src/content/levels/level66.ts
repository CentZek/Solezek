import type { Level } from '../../types/content';

export const level66: Level = {
  id: 66,
  titleEn: 'Nature and the Environment',
  titleCkb: 'سروشت و ژینگە',
  icon: '🌳',
  objectiveEn: 'Talk about nature, rubbish, recycling, and protecting the environment.',
  objectiveCkb: 'بەحس ژ سروشت، زبڵ، دووبارە بکارئینان و پاراستنا ژینگەیێ بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l66-environment', en: 'environment', ckb: 'ژینگە', pos: 'noun', emoji: '🌍', phonetic: '/ɪnˈvaɪrənmənt/', exampleEn: 'We must protect the environment.', exampleCkb: 'دڤێت ئەم ژینگەیێ بپارێزین.', category: 'nature', difficulty: 2, bahdiniReviewed: false },
    { id: 'l66-nature', en: 'nature', ckb: 'سروشت', pos: 'noun', emoji: '🏞️', phonetic: '/ˈneɪtʃə/', exampleEn: 'I enjoy spending time in nature.', exampleCkb: 'دەم ل سروشتی ل من خۆش دکەت.', category: 'nature', difficulty: 1, bahdiniReviewed: false },
    { id: 'l66-river', en: 'river', ckb: 'ڕووبار', pos: 'noun', emoji: '🏞️', phonetic: '/ˈrɪvə/', exampleEn: 'The river is clean.', exampleCkb: 'ڕووبار پاقیژە.', category: 'nature', difficulty: 1, bahdiniReviewed: false },
    { id: 'l66-forest', en: 'forest', ckb: 'دارستان', pos: 'noun', emoji: '🌲', phonetic: '/ˈfɒrɪst/', exampleEn: 'Many animals live in the forest.', exampleCkb: 'گەلەک ئاژەڵ ل دارستانی دژین.', category: 'nature', difficulty: 2, bahdiniReviewed: false },
    { id: 'l66-tree', en: 'tree', ckb: 'دار', pos: 'noun', emoji: '🌳', phonetic: '/triː/', exampleEn: 'Plant a tree near your house.', exampleCkb: 'دارەکێ نێزک مالا خو بچینە.', category: 'nature', difficulty: 1, bahdiniReviewed: false },
    { id: 'l66-clean', en: 'clean', ckb: 'پاقیژ', pos: 'adjective', emoji: '🧼', phonetic: '/kliːn/', exampleEn: 'Keep the park clean.', exampleCkb: 'پارکێ پاقیژ بهێلە.', category: 'environment', difficulty: 1, bahdiniReviewed: false },
    { id: 'l66-dirty', en: 'dirty', ckb: 'پیس', pos: 'adjective', emoji: '🗑️', phonetic: '/ˈdɜːti/', exampleEn: 'The street is dirty.', exampleCkb: 'جادە پیسە.', category: 'environment', difficulty: 1, bahdiniReviewed: false },
    { id: 'l66-rubbish', en: 'rubbish', ckb: 'زبڵ', pos: 'noun', emoji: '🚮', phonetic: '/ˈrʌbɪʃ/', exampleEn: 'Do not leave rubbish here.', exampleCkb: 'زبڵی ل ڤێرێ مەهێلە.', category: 'environment', difficulty: 1, bahdiniReviewed: false },
    { id: 'l66-recycle', en: 'recycle', ckb: 'دووبارە بکارئینان', pos: 'verb', emoji: '♻️', phonetic: '/ˌriːˈsaɪkəl/', exampleEn: 'We recycle bottles.', exampleCkb: 'ئەم شیشەیان دووبارە بکار دئینین.', category: 'environment', difficulty: 2, bahdiniReviewed: false },
    { id: 'l66-protect', en: 'protect', ckb: 'پاراستن', pos: 'verb', emoji: '🛡️', phonetic: '/prəˈtekt/', exampleEn: 'Protect the rivers and forests.', exampleCkb: 'ڕووبار و دارستانان بپارێزە.', category: 'environment', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'We must protect the environment.', ckb: 'دڤێت ئەم ژینگەیێ بپارێزین.' },
    { en: 'Keep the park clean.', ckb: 'پارکێ پاقیژ بهێلە.' },
    { en: 'Do not leave rubbish here.', ckb: 'زبڵی ل ڤێرێ مەهێلە.' },
    { en: 'We recycle bottles.', ckb: 'ئەم شیشەیان دووبارە بکار دئینین.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'Why is the river dirty?', ckb: 'ڕووبار بۆچی پیسە؟' },
    { characterId: 'azad', en: 'People leave rubbish near it.', ckb: 'خەلک زبڵی ل نێزک وی دھێلن.' },
    { characterId: 'rojin', en: 'We should clean it and recycle the bottles.', ckb: 'باشترە ئەم وی پاقیژ بکەین و شیشەیان دووبارە بکار بینین.' },
    { characterId: 'azad', en: 'Yes, and we can plant some trees too.', ckb: 'بەلێ، و ئەم دشێین هندەک دار ژی بچینین.' },
    { characterId: 'rojin', en: 'That will help protect the environment.', ckb: 'ئەڤە دێ ھاریکاریا پاراستنا ژینگەیێ بکەت.' },
    { characterId: 'azad', en: 'Let us start this Friday.', ckb: 'وەرە ڤێ ئینیێ دەستپێبکەین.' },
  ],
};
