import type { Level } from '../../types/content';

export const level44: Level = {
  id: 44,
  titleEn: 'Cooking and Recipes',
  titleCkb: 'پژان و ڕێسێپت',
  icon: '🍲',
  objectiveEn: 'Follow simple recipe instructions and describe cooking steps.',
  objectiveCkb: 'ڕێسێپتەکا سادە بخوینە و گاڤێن پژانێ ڕابگەهینە.',
  cefr: 'A2',
  vocab: [
    { id: 'l44-ingredients', en: 'ingredients', ckb: 'پێکهاتە', pos: 'noun', emoji: '🥕', phonetic: '/ɪnˈɡriːdiənts/', exampleEn: 'We need fresh ingredients.', exampleCkb: 'پێدڤییا مە ب پێکهاتەیێن تازە هەیە.', category: 'cooking', difficulty: 2, bahdiniReviewed: false },
    { id: 'l44-recipe', en: 'recipe', ckb: 'ڕێسێپت', pos: 'noun', emoji: '📜', phonetic: '/ˈresɪpi/', exampleEn: 'This recipe is easy.', exampleCkb: 'ئەڤ ڕێسێپتە ئاسانە.', category: 'cooking', difficulty: 2, bahdiniReviewed: false },
    { id: 'l44-cut', en: 'cut', ckb: 'بڕین', pos: 'verb', emoji: '🔪', phonetic: '/kʌt/', exampleEn: 'Cut the bread, please.', exampleCkb: 'هیڤیدارم، نانی ببڕە.', category: 'cooking', difficulty: 1, bahdiniReviewed: false },
    { id: 'l44-add', en: 'add', ckb: 'زێدەکرن', pos: 'verb', emoji: '➕', phonetic: '/æd/', exampleEn: 'Add some salt.', exampleCkb: 'هندەک خوێ زێدەبکە.', category: 'cooking', difficulty: 1, bahdiniReviewed: false },
    { id: 'l44-mix', en: 'mix', ckb: 'تێکەڵکرن', pos: 'verb', emoji: '🥣', phonetic: '/mɪks/', exampleEn: 'Mix the rice and chicken.', exampleCkb: 'برنج و مریشک تێکەڵ بکە.', category: 'cooking', difficulty: 2, bahdiniReviewed: false },
    { id: 'l44-boil', en: 'boil', ckb: 'کەڵاندن', pos: 'verb', emoji: '♨️', phonetic: '/bɔɪl/', exampleEn: 'Boil the water first.', exampleCkb: 'ئێکەم ئاڤێ بکەڵینە.', category: 'cooking', difficulty: 2, bahdiniReviewed: false },
    { id: 'l44-fry', en: 'fry', ckb: 'برژاندن', pos: 'verb', emoji: '🍳', phonetic: '/fraɪ/', exampleEn: 'Fry the chicken in oil.', exampleCkb: 'مریشکێ د زەیتێ دا ببرژینە.', category: 'cooking', difficulty: 3, bahdiniReviewed: false },
    { id: 'l44-salt', en: 'salt', ckb: 'خوێ', pos: 'noun', emoji: '🧂', phonetic: '/sɒlt/', exampleEn: 'The food needs more salt.', exampleCkb: 'خوارن خوێیا زێدەتر دڤێت.', category: 'cooking', difficulty: 1, bahdiniReviewed: false },
    { id: 'l44-oil', en: 'oil', ckb: 'زەیت', pos: 'noun', emoji: '🫗', phonetic: '/ɔɪl/', exampleEn: 'Use a little oil.', exampleCkb: 'هندەکی زەیت بکاربینە.', category: 'cooking', difficulty: 1, bahdiniReviewed: false },
    { id: 'l44-taste', en: 'taste', ckb: 'تامکرن', pos: 'verb', emoji: '😋', phonetic: '/teɪst/', exampleEn: 'Taste the soup.', exampleCkb: 'تاما شۆربایێ بکە.', category: 'cooking', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'First, boil the water.', ckb: 'ئێکەم، ئاڤێ بکەڵینە.' },
    { en: 'Then add the rice.', ckb: 'پاشی برنجی زێدەبکە.' },
    { en: 'Mix everything together.', ckb: 'هەمیان پێکڤە تێکەڵ بکە.' },
    { en: 'Finally, taste the food.', ckb: 'دوماهیێ، تاما خوارنێ بکە.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'What do we need for this recipe?', ckb: 'بۆ ڤێ ڕێسێپتێ پێدڤییا مە ب چ هەیە؟' },
    { characterId: 'azad', en: 'Rice, chicken, oil, and salt.', ckb: 'برنج، مریشک، زەیت و خوێ.' },
    { characterId: 'rojin', en: 'What do we do first?', ckb: 'ئێکەم ئەم چ دکەین؟' },
    { characterId: 'azad', en: 'First, fry the chicken. Then add the rice.', ckb: 'ئێکەم مریشکێ ببرژینە. پاشی برنجی زێدەبکە.' },
    { characterId: 'rojin', en: 'Do we boil it now?', ckb: 'نوکە ئەم وی دکەڵینین؟' },
    { characterId: 'azad', en: 'Yes. Finally, mix everything and taste it.', ckb: 'بەلێ. دوماهیێ هەمیان تێکەڵ بکە و تاما وی بکە.' },
  ],
};
