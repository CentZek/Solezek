import type { Level } from '../../types/content';

export const level53: Level = {
  id: 53,
  titleEn: 'At the Doctor and Pharmacy',
  titleCkb: 'ل دکتوری و دەرمانخانێ',
  icon: '🩺',
  objectiveEn: 'Describe symptoms, make an appointment, and ask for medicine.',
  objectiveCkb: 'نیشانەیێن نەخۆشیێ ڕابگەهینە، دیدار بگرە و دەرمانی بخوازە.',
  cefr: 'A2',
  vocab: [
    { id: 'l53-symptom', en: 'symptom', ckb: 'نیشانە', pos: 'noun', emoji: '🤒', phonetic: '/ˈsɪmptəm/', exampleEn: 'Tell the doctor your symptoms.', exampleCkb: 'نیشانەیێن خو بۆ دکتوری بڵێ.', category: 'health', difficulty: 3, bahdiniReviewed: false },
    { id: 'l53-appointment', en: 'appointment', ckb: 'دیدار', pos: 'noun', emoji: '📅', phonetic: '/əˈpɔɪntmənt/', exampleEn: 'I need a doctor appointment.', exampleCkb: 'پێدڤییا من ب دیدارەکا دکتوری هەیە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l53-cough', en: 'cough', ckb: 'کۆک', pos: 'noun', emoji: '😷', phonetic: '/kɒf/', exampleEn: 'I have a bad cough.', exampleCkb: 'کۆکەکا خراب لێ من هەیە.', category: 'health', difficulty: 2, bahdiniReviewed: false },
    { id: 'l53-headache', en: 'headache', ckb: 'سەرئێش', pos: 'noun', emoji: '🤕', phonetic: '/ˈhedeɪk/', exampleEn: 'I have a headache today.', exampleCkb: 'ئەڤڕۆ سەرئێش لێ من هەیە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l53-fever', en: 'fever', ckb: 'تا', pos: 'noun', emoji: '🌡️', phonetic: '/ˈfiːvə/', exampleEn: 'Do you have a fever?', exampleCkb: 'تا لێ تە هەیە؟', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l53-medicine', en: 'medicine', ckb: 'دەرمان', pos: 'noun', emoji: '💊', phonetic: '/ˈmedsən/', exampleEn: 'Take this medicine twice a day.', exampleCkb: 'ڤی دەرمانی دوو جاران د ڕۆژەکێ دا وەربگرە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l53-tablet', en: 'tablet', ckb: 'حەب', pos: 'noun', emoji: '💊', phonetic: '/ˈtæblət/', exampleEn: 'Take one tablet after food.', exampleCkb: 'حەبەکێ پاش خوارنێ وەربگرە.', category: 'health', difficulty: 2, bahdiniReviewed: false },
    { id: 'l53-pharmacy', en: 'pharmacy', ckb: 'دەرمانخانە', pos: 'noun', emoji: '🏥', phonetic: '/ˈfɑːməsi/', exampleEn: 'The pharmacy closes at ten.', exampleCkb: 'دەرمانخانە ل دەمژمێر دەهێ دگرت.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l53-rest', en: 'rest', ckb: 'بێهنڤەدان', pos: 'noun', emoji: '🛌', phonetic: '/rest/', exampleEn: 'You need some rest.', exampleCkb: 'پێدڤییا تە ب بێهنڤەدانێ هەیە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l53-better', en: 'better', ckb: 'باشتر', pos: 'adjective', emoji: '👍', phonetic: '/ˈbetə/', exampleEn: 'I feel better today.', exampleCkb: 'ئەز ئەڤڕۆ باشتر حەس دکەم.', category: 'health', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'I need a doctor appointment.', ckb: 'پێدڤییا من ب دیدارەکا دکتوری هەیە.' },
    { en: 'Take one tablet after food.', ckb: 'حەبەکێ پاش خوارنێ وەربگرە.' },
    { en: 'You should rest and drink water.', ckb: 'باشترە بێهنڤەدانێ بکەی و ئاڤێ بڤێخی.' },
    { en: 'I feel better today.', ckb: 'ئەز ئەڤڕۆ باشتر حەس دکەم.' },
  ],
  conversation: [
    { characterId: 'azad', en: 'What are your symptoms?', ckb: 'نیشانەیێن تە چ نە؟' },
    { characterId: 'rojin', en: 'I have a headache and a bad cough.', ckb: 'سەرئێش و کۆکەکا خراب لێ من هەیە.' },
    { characterId: 'azad', en: 'Do you have a fever?', ckb: 'تا لێ تە هەیە؟' },
    { characterId: 'rojin', en: 'No. Can I get some medicine at the pharmacy?', ckb: 'نەخێر. ئەز دشێم ژ دەرمانخانێ هندەک دەرمان وەربگرم؟' },
    { characterId: 'azad', en: 'Yes. Take one tablet after food and rest.', ckb: 'بەلێ. حەبەکێ پاش خوارنێ وەربگرە و بێهنڤەدانێ بکە.' },
    { characterId: 'rojin', en: 'Thank you, doctor. I hope I feel better tomorrow.', ckb: 'سوپاس دکتور. هیڤیا من سەبەی باشتر حەس بکەم.' },
  ],
};
