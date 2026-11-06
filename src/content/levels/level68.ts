import type { Level } from '../../types/content';

export const level68: Level = {
  id: 68,
  titleEn: 'City and Village Life',
  titleCkb: 'ژیانا باژێری و گوندی',
  icon: '🏙️',
  objectiveEn: 'Compare city and village life using noise, traffic, space, and transport.',
  objectiveCkb: 'ژیانا باژێری و گوندی ب ترافیک، دەنگەدەنگ، جه و ترانسپۆرت بەراورد بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l68-city', en: 'city', ckb: 'باژێر', pos: 'noun', emoji: '🏙️', phonetic: '/ˈsɪti/', exampleEn: 'The city is crowded.', exampleCkb: 'باژێر تژە.', category: 'places', difficulty: 1, bahdiniReviewed: false },
    { id: 'l68-village', en: 'village', ckb: 'گوند', pos: 'noun', emoji: '🏡', phonetic: '/ˈvɪlɪdʒ/', exampleEn: 'My grandparents live in a village.', exampleCkb: 'باپیر و دابیرا من ل گوندەکی دژین.', category: 'places', difficulty: 1, bahdiniReviewed: false },
    { id: 'l68-traffic', en: 'traffic', ckb: 'ترافیک', pos: 'noun', emoji: '🚗', phonetic: '/ˈtræfɪk/', exampleEn: 'Traffic is heavy today.', exampleCkb: 'ترافیک ئەڤڕۆ تژە.', category: 'city', difficulty: 1, bahdiniReviewed: false },
    { id: 'l68-noise', en: 'noise', ckb: 'دەنگەدەنگ', pos: 'noun', emoji: '🔊', phonetic: '/nɔɪz/', exampleEn: 'The noise keeps me awake.', exampleCkb: 'دەنگەدەنگ من هشیار دپارێزیت.', category: 'city', difficulty: 2, bahdiniReviewed: false },
    { id: 'l68-quiet', en: 'quiet', ckb: 'بێ دەنگ', pos: 'adjective', emoji: '🤫', phonetic: '/ˈkwaɪət/', exampleEn: 'The village is quiet at night.', exampleCkb: 'گوند شەڤی بێ دەنگە.', category: 'descriptions', difficulty: 1, bahdiniReviewed: false },
    { id: 'l68-crowded', en: 'crowded', ckb: 'تژ', pos: 'adjective', emoji: '👥', phonetic: '/ˈkraʊdɪd/', exampleEn: 'The market is crowded on Friday.', exampleCkb: 'بازار ئینیێ تژە.', category: 'descriptions', difficulty: 2, bahdiniReviewed: false },
    { id: 'l68-peaceful', en: 'peaceful', ckb: 'ئارام', pos: 'adjective', emoji: '🕊️', phonetic: '/ˈpiːsfəl/', exampleEn: 'Our village is peaceful.', exampleCkb: 'گوندێ مە ئارامە.', category: 'descriptions', difficulty: 2, bahdiniReviewed: false },
    { id: 'l68-building', en: 'building', ckb: 'باڵەخانە', pos: 'noun', emoji: '🏢', phonetic: '/ˈbɪldɪŋ/', exampleEn: 'The city has tall buildings.', exampleCkb: 'باڵەخانەیێن باژێری بلند نە.', category: 'city', difficulty: 1, bahdiniReviewed: false },
    { id: 'l68-transport', en: 'transport', ckb: 'ترانسپۆرت', pos: 'noun', emoji: '🚌', phonetic: '/ˈtrænspɔːt/', exampleEn: 'Public transport is better in the city.', exampleCkb: 'ترانسپۆرتا گشتی ل باژێری باشترە.', category: 'city', difficulty: 1, bahdiniReviewed: false },
    { id: 'l68-compare', en: 'compare', ckb: 'بەراوردکرن', pos: 'verb', emoji: '⚖️', phonetic: '/kəmˈpeə/', exampleEn: 'Compare the city with the village.', exampleCkb: 'باژێری ب گوندی بەراورد بکە.', category: 'descriptions', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'The city is noisier than the village.', ckb: 'باژێر ژ گوندی دەنگەدەنگترە.' },
    { en: 'The village is quieter.', ckb: 'گوند بێ دەنگترە.' },
    { en: 'Public transport is better in the city.', ckb: 'ترانسپۆرتا گشتی ل باژێری باشترە.' },
    { en: 'Compare the city with the village.', ckb: 'باژێری ب گوندی بەراورد بکە.' },
  ],
  conversation: [
    { characterId: 'azad', en: 'Do you prefer the city or the village?', ckb: 'تو باژێری باشتر دبینی یان گوندی؟' },
    { characterId: 'rojin', en: 'The village. It is quieter and more peaceful.', ckb: 'گوندی. بێ دەنگتر و ئارامترە.' },
    { characterId: 'azad', en: 'I like the city because transport is easier.', ckb: 'ئەز حەز ژ باژێری دکەم چونکو ترانسپۆرت ئاسانترە.' },
    { characterId: 'rojin', en: 'But the traffic and noise are difficult.', ckb: 'بەس ترافیک و دەنگەدەنگ زەحمەت نە.' },
    { characterId: 'azad', en: 'True. The buildings are taller too.', ckb: 'ڕاستە. باڵەخانە ژی بلندتر نە.' },
    { characterId: 'rojin', en: 'So both have good and bad things.', ckb: 'جا هەردووک تشتێن باش و خراب هەنە.' },
  ],
};
