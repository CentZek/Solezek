import type { Level } from '../../types/content';

export const level74: Level = {
  id: 74,
  titleEn: 'Emergencies and Safety',
  titleCkb: 'کۆرتا و ساخلەمی',
  icon: '🚨',
  objectiveEn: 'Ask for help in an emergency and describe accidents, danger, and safety.',
  objectiveCkb: 'د کۆرتەیێ دا ھاریکاری بخوازە و ڕووداو، مەترسی و ساخلەمی ڕابگەهینە.',
  cefr: 'A2',
  vocab: [
    { id: 'l74-emergency', en: 'emergency', ckb: 'کۆرتا', pos: 'noun', emoji: '🚨', phonetic: '/ɪˈmɜːdʒənsi/', exampleEn: 'Call for help in an emergency.', exampleCkb: 'د کۆرتەیێ دا بانگا ھاریکاریێ بکە.', category: 'emergencies', difficulty: 2, bahdiniReviewed: false },
    { id: 'l74-danger', en: 'danger', ckb: 'مەترسی', pos: 'noun', emoji: '⚠️', phonetic: '/ˈdeɪndʒə/', exampleEn: 'There is danger ahead.', exampleCkb: 'مەترسی ل پێشێ هەیە.', category: 'safety', difficulty: 2, bahdiniReviewed: false },
    { id: 'l74-safe', en: 'safe', ckb: 'ساخلەم', pos: 'adjective', emoji: '✅', phonetic: '/seɪf/', exampleEn: 'This place is safe.', exampleCkb: 'ئەڤ جه ساخلەمە.', category: 'safety', difficulty: 1, bahdiniReviewed: false },
    { id: 'l74-dangerous', en: 'dangerous', ckb: 'مەترسیدار', pos: 'adjective', emoji: '☢️', phonetic: '/ˈdeɪndʒərəs/', exampleEn: 'The road is dangerous at night.', exampleCkb: 'ڕێکا شەڤی مەترسیدارە.', category: 'safety', difficulty: 2, bahdiniReviewed: false },
    { id: 'l74-accident', en: 'accident', ckb: 'ڕووداو', pos: 'noun', emoji: '💥', phonetic: '/ˈæksɪdənt/', exampleEn: 'There was an accident near the station.', exampleCkb: 'ڕووداوەک نێزک وێستگەهێ ڕوویدا.', category: 'emergencies', difficulty: 1, bahdiniReviewed: false },
    { id: 'l74-help', en: 'help', ckb: 'ھاریکاری', pos: 'noun', emoji: '🆘', phonetic: '/help/', exampleEn: 'We need help now.', exampleCkb: 'نوکە پێدڤییا مە ب ھاریکاریێ هەیە.', category: 'emergencies', difficulty: 1, bahdiniReviewed: false },
    { id: 'l74-call', en: 'call', ckb: 'بانگکرن', pos: 'verb', emoji: '📞', phonetic: '/kɔːl/', exampleEn: 'Call an ambulance.', exampleCkb: 'بانگا ئەمبولانسێ بکە.', category: 'emergencies', difficulty: 1, bahdiniReviewed: false },
    { id: 'l74-fire', en: 'fire', ckb: 'ئاگر', pos: 'noun', emoji: '🔥', phonetic: '/ˈfaɪə/', exampleEn: 'There is a fire in the building.', exampleCkb: 'ئاگر د باڵەخانەیێ دا هەیە.', category: 'emergencies', difficulty: 1, bahdiniReviewed: false },
    { id: 'l74-police', en: 'police', ckb: 'پۆلیس', pos: 'noun', emoji: '👮', phonetic: '/pəˈliːs/', exampleEn: 'The police are coming.', exampleCkb: 'پۆلیس دێن.', category: 'emergencies', difficulty: 1, bahdiniReviewed: false },
    { id: 'l74-ambulance', en: 'ambulance', ckb: 'ئەمبولانس', pos: 'noun', emoji: '🚑', phonetic: '/ˈæmbjələns/', exampleEn: 'The ambulance arrived quickly.', exampleCkb: 'ئەمبولانس زوو گەهیشت.', category: 'emergencies', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Call for help in an emergency.', ckb: 'د کۆرتەیێ دا بانگا ھاریکاریێ بکە.' },
    { en: 'There was an accident near the station.', ckb: 'ڕووداوەک نێزک وێستگەهێ ڕوویدا.' },
    { en: 'Call an ambulance.', ckb: 'بانگا ئەمبولانسێ بکە.' },
    { en: 'This place is safe.', ckb: 'ئەڤ جه ساخلەمە.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'There has been an accident. Are you safe?', ckb: 'ڕووداوەک ڕوویدا. تو ساخلەم یی؟' },
    { characterId: 'shirin', en: 'Yes, but another person needs help.', ckb: 'بەلێ، بەس کەسەکێ دی پێدڤییا وی ب ھاریکاریێ هەیە.' },
    { characterId: 'dara', en: 'I will call an ambulance. Is there a fire?', ckb: 'ئەز دێ بانگا ئەمبولانسێ بکەم. ئاگر هەیە؟' },
    { characterId: 'shirin', en: 'No, but the road is dangerous. Call the police too.', ckb: 'نەخێر، بەس ڕێکا مەترسیدارە. بانگا پۆلیسی ژی بکە.' },
    { characterId: 'dara', en: 'They are on their way. Stay somewhere safe.', ckb: 'ئەوان ل ڕێیە نە. ل جهەکێ ساخلەم بمینە.' },
    { characterId: 'shirin', en: 'I will wait here. The ambulance is arriving now.', ckb: 'ئەز دێ ل ڤێرێ چەڤەرێ ببم. ئەمبولانس نوکە دگەهێت.' },
  ],
};
