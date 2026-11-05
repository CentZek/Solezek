import type { Level } from '../../types/content';

export const level45: Level = {
  id: 45,
  titleEn: 'Shopping and Restaurant Review',
  titleCkb: 'دووبارەکرنا کڕین و خوارنگەهێ',
  icon: '🧾',
  objectiveEn: 'Handle receipts, discounts, returns, and restaurant payments.',
  objectiveCkb: 'پسولە، داشکاندن، زڤراندن و حیسابا خوارنگەهێ بکاربینە.',
  cefr: 'A2',
  vocab: [
    { id: 'l45-receipt', en: 'receipt', ckb: 'پسولە', pos: 'noun', emoji: '🧾', phonetic: '/rɪˈsiːt/', exampleEn: 'Keep your receipt.', exampleCkb: 'پسولەیا خو بپارێزە.', category: 'shopping', difficulty: 2, bahdiniReviewed: false },
    { id: 'l45-discount', en: 'discount', ckb: 'داشکاندن', pos: 'noun', emoji: '🏷️', phonetic: '/ˈdɪskaʊnt/', exampleEn: 'This shirt has a discount.', exampleCkb: 'ڤێ کراسێ داشکاندن ل سەرە.', category: 'shopping', difficulty: 2, bahdiniReviewed: false },
    { id: 'l45-return', en: 'return', ckb: 'زڤراندن', pos: 'verb', emoji: '↩️', phonetic: '/rɪˈtɜːn/', exampleEn: 'I want to return these shoes.', exampleCkb: 'ئەز دڤێم ڤان پێلاڤان بزڤرینم.', category: 'shopping', difficulty: 2, bahdiniReviewed: false },
    { id: 'l45-change', en: 'change', ckb: 'باقی', pos: 'noun', emoji: '🪙', phonetic: '/tʃeɪndʒ/', exampleEn: 'Here is your change.', exampleCkb: 'باقییا تە بگرە.', category: 'money', difficulty: 1, bahdiniReviewed: false },
    { id: 'l45-order', en: 'order', ckb: 'داخازی کرن', pos: 'verb', emoji: '📝', phonetic: '/ˈɔːdə/', exampleEn: 'We order chicken and rice.', exampleCkb: 'ئەم مریشک و برنج داخاز دکەین.', category: 'restaurant', difficulty: 1, bahdiniReviewed: false },
    { id: 'l45-bill', en: 'bill', ckb: 'حیساب', pos: 'noun', emoji: '💳', phonetic: '/bɪl/', exampleEn: 'Can I have the bill, please?', exampleCkb: 'دشێم حیسابی وەربگرم، هیڤیدارم؟', category: 'restaurant', difficulty: 1, bahdiniReviewed: false },
    { id: 'l45-tip', en: 'tip', ckb: 'بەخشیش', pos: 'noun', emoji: '💵', phonetic: '/tɪp/', exampleEn: 'Leave a tip for the waiter.', exampleCkb: 'بەخشیشەک بۆ گارسۆنی بهێلە.', category: 'restaurant', difficulty: 3, bahdiniReviewed: false },
    { id: 'l45-cash', en: 'cash', ckb: 'نەخت', pos: 'noun', emoji: '💰', phonetic: '/kæʃ/', exampleEn: 'I pay cash.', exampleCkb: 'ئەز نەخت ددەم.', category: 'money', difficulty: 1, bahdiniReviewed: false },
    { id: 'l45-card', en: 'card', ckb: 'کارت', pos: 'noun', emoji: '💳', phonetic: '/kɑːd/', exampleEn: 'Can I pay by card?', exampleCkb: 'ئەز دشێم ب کارتێ بدەم؟', category: 'money', difficulty: 1, bahdiniReviewed: false },
    { id: 'l45-price', en: 'price', ckb: 'بها', pos: 'noun', emoji: '🔖', phonetic: '/praɪs/', exampleEn: 'The price is too high.', exampleCkb: 'بها زۆر یا بلندە.', category: 'shopping', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Can I return this shirt?', ckb: 'ئەز دشێم ڤێ کراسێ بزڤرینم؟' },
    { en: 'You need your receipt.', ckb: 'پێدڤییا تە ب پسولەیا خو هەیە.' },
    { en: 'We would like the bill, please.', ckb: 'ئەم حیسابی دڤێین، هیڤیدارم.' },
    { en: 'Can I pay by card?', ckb: 'ئەز دشێم ب کارتێ بدەم؟' },
  ],
  conversation: [
    { characterId: 'azad', en: 'Can I return this shirt? It is too small.', ckb: 'ئەز دشێم ڤێ کراسێ بزڤرینم؟ گەلەک یا بچووکە.' },
    { characterId: 'rojin', en: 'Yes. Do you have your receipt?', ckb: 'بەلێ. پسولەیا تە هەیە؟' },
    { characterId: 'azad', en: 'Yes, here it is. Is there a discount on these shoes?', ckb: 'بەلێ، بگرە. ل ڤان پێلاڤان داشکاندن هەیە؟' },
    { characterId: 'rojin', en: 'Yes, twenty percent. The price is forty dollars.', ckb: 'بەلێ، بیست لە سەد. بها وان چل دۆلارە.' },
    { characterId: 'azad', en: 'Great. Can I pay by card?', ckb: 'زۆر باش. ئەز دشێم ب کارتێ بدەم؟' },
    { characterId: 'rojin', en: 'Of course. Here is your new receipt and your change.', ckb: 'بێگومان. پسولەیا نوی و باقییا تە بگرە.' },
  ],
};
