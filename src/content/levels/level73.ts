import type { Level } from '../../types/content';

export const level73: Level = {
  id: 73,
  titleEn: 'Food and Nutrition',
  titleCkb: 'خوارن و خۆراک',
  icon: '🥗',
  objectiveEn: 'Describe balanced meals, fresh ingredients, and healthier food choices.',
  objectiveCkb: 'نانێن هاوسەنگ، پێکهاتەیێن تازە و هەلبژاردنێن تەندروست وەسف بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l73-vegetables', en: 'vegetables', ckb: 'سەوزە', pos: 'noun', emoji: '🥦', phonetic: '/ˈvedʒtəbəlz/', exampleEn: 'Eat more vegetables.', exampleCkb: 'سەوزەیا زێدەتر بخۆ.', category: 'food', difficulty: 1, bahdiniReviewed: false },
    { id: 'l73-fruit', en: 'fruit', ckb: 'میوە', pos: 'noun', emoji: '🍎', phonetic: '/fruːt/', exampleEn: 'Fruit is a healthy snack.', exampleCkb: 'میوە خوراکەکا تەندروستە.', category: 'food', difficulty: 1, bahdiniReviewed: false },
    { id: 'l73-protein', en: 'protein', ckb: 'پرۆتین', pos: 'noun', emoji: '🍗', phonetic: '/ˈprəʊtiːn/', exampleEn: 'Chicken and eggs contain protein.', exampleCkb: 'مریشک و هێک پرۆتین تێدایە.', category: 'nutrition', difficulty: 2, bahdiniReviewed: false },
    { id: 'l73-sugar', en: 'sugar', ckb: 'شەکر', pos: 'noun', emoji: '🍬', phonetic: '/ˈʃʊɡə/', exampleEn: 'This drink has a lot of sugar.', exampleCkb: 'ڤێ ڤەخوارنێ گەلەک شەکر تێدایە.', category: 'nutrition', difficulty: 1, bahdiniReviewed: false },
    { id: 'l73-fat', en: 'fat', ckb: 'چەوری', pos: 'noun', emoji: '🧈', phonetic: '/fæt/', exampleEn: 'Choose food with less fat.', exampleCkb: 'خوارنێن ب چەوریا کێم هەلبژێرە.', category: 'nutrition', difficulty: 2, bahdiniReviewed: false },
    { id: 'l73-grain', en: 'grain', ckb: 'دانەوی', pos: 'noun', emoji: '🌾', phonetic: '/ɡreɪn/', exampleEn: 'Rice is a grain.', exampleCkb: 'برنج دانەوییە.', category: 'nutrition', difficulty: 3, bahdiniReviewed: false },
    { id: 'l73-fresh', en: 'fresh', ckb: 'تازە', pos: 'adjective', emoji: '🥬', phonetic: '/freʃ/', exampleEn: 'Buy fresh ingredients.', exampleCkb: 'پێکهاتەیێن تازە بکڕە.', category: 'food', difficulty: 1, bahdiniReviewed: false },
    { id: 'l73-balanced', en: 'balanced', ckb: 'هاوسەنگ', pos: 'adjective', emoji: '⚖️', phonetic: '/ˈbælənst/', exampleEn: 'Eat a balanced meal.', exampleCkb: 'نانەکا هاوسەنگ بخۆ.', category: 'nutrition', difficulty: 2, bahdiniReviewed: false },
    { id: 'l73-meal', en: 'meal', ckb: 'نان', pos: 'noun', emoji: '🍽️', phonetic: '/miːl/', exampleEn: 'This meal has vegetables and protein.', exampleCkb: 'ڤێ نانێ سەوزە و پرۆتین تێدایە.', category: 'food', difficulty: 1, bahdiniReviewed: false },
    { id: 'l73-healthy', en: 'healthy', ckb: 'تەندروست', pos: 'adjective', emoji: '💚', phonetic: '/ˈhelθi/', exampleEn: 'Make a healthy choice.', exampleCkb: 'هەلبژاردنەکا تەندروست بکە.', category: 'nutrition', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Eat more vegetables.', ckb: 'سەوزەیا زێدەتر بخۆ.' },
    { en: 'Choose food with less fat.', ckb: 'خوارنێن ب چەوریا کێم هەلبژێرە.' },
    { en: 'Eat a balanced meal.', ckb: 'نانەکا هاوسەنگ بخۆ.' },
    { en: 'Make a healthy choice.', ckb: 'هەلبژاردنەکا تەندروست بکە.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'What should I cook tonight?', ckb: 'دڤێت ئەز ئەڤشەڤ چ بپژم؟' },
    { characterId: 'azad', en: 'A balanced meal with vegetables and protein.', ckb: 'نانەکا هاوسەنگ ب سەوزە و پرۆتین.' },
    { characterId: 'rojin', en: 'I have fresh chicken, rice, and vegetables.', ckb: 'مریشکێ تازە، برنج و سەوزە لێ من هەیە.' },
    { characterId: 'azad', en: 'Perfect. Use less fat and sugar.', ckb: 'زۆر باش. چەوری و شەکرا کێمتر بکاربینە.' },
    { characterId: 'rojin', en: 'And fruit for dessert?', ckb: 'و میوە بۆ پاش نانێ؟' },
    { characterId: 'azad', en: 'Yes, that is a healthy choice.', ckb: 'بەلێ، ئەو هەلبژاردنەکا تەندروستە.' },
  ],
};
