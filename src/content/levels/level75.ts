import type { Level } from '../../types/content';

export const level75: Level = {
  id: 75,
  titleEn: 'Health and Safety Review',
  titleCkb: 'دووبارەکرنا تەندروستی و ساخلەمیێ',
  icon: '🩺',
  objectiveEn: 'Review symptoms, medicine, appointments, healthy habits, and emergencies.',
  objectiveCkb: 'نیشانە، دەرمان، دیدار، عادەتێن تەندروست و کۆرتا دووبارە بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l75-symptom', en: 'symptom', ckb: 'نیشانە', pos: 'noun', emoji: '🤒', phonetic: '/ˈsɪmptəm/', exampleEn: 'Describe your symptoms clearly.', exampleCkb: 'نیشانەیێن خو ب ڕوونی ڕابگەهینە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l75-fever', en: 'fever', ckb: 'تا', pos: 'noun', emoji: '🌡️', phonetic: '/ˈfiːvə/', exampleEn: 'Call the doctor if the fever continues.', exampleCkb: 'ئەگەر تا بەردەوام بوو، بانگا دکتوری بکە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l75-cough', en: 'cough', ckb: 'کۆک', pos: 'noun', emoji: '😷', phonetic: '/kɒf/', exampleEn: 'This cough is getting worse.', exampleCkb: 'ئەڤ کۆکە خرابتر دبیت.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l75-medicine', en: 'medicine', ckb: 'دەرمان', pos: 'noun', emoji: '💊', phonetic: '/ˈmedsən/', exampleEn: 'Take your medicine on time.', exampleCkb: 'دەرمانێ خو ل دەمێ خو وەربگرە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l75-rest', en: 'rest', ckb: 'بێهنڤەدان', pos: 'noun', emoji: '🛌', phonetic: '/rest/', exampleEn: 'You should get some rest.', exampleCkb: 'باشترە هندەک بێهنڤەدانێ بکەی.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l75-emergency', en: 'emergency', ckb: 'کۆرتا', pos: 'noun', emoji: '🚨', phonetic: '/ɪˈmɜːdʒənsi/', exampleEn: 'Know who to call in an emergency.', exampleCkb: 'بزانە د کۆرتەیێ دا بانگا کێ بکەی.', category: 'safety', difficulty: 2, bahdiniReviewed: false },
    { id: 'l75-appointment', en: 'appointment', ckb: 'دیدار', pos: 'noun', emoji: '📅', phonetic: '/əˈpɔɪntmənt/', exampleEn: 'Do not miss your appointment.', exampleCkb: 'دیدارا خو ژ دەست مەدە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l75-pharmacy', en: 'pharmacy', ckb: 'دەرمانخانە', pos: 'noun', emoji: '💊', phonetic: '/ˈfɑːməsi/', exampleEn: 'The pharmacy is nearby.', exampleCkb: 'دەرمانخانە نێزکە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l75-pain', en: 'pain', ckb: 'ئێش', pos: 'noun', emoji: '🤕', phonetic: '/peɪn/', exampleEn: 'Tell me where the pain is.', exampleCkb: 'بڵێ ئێش ل کویە.', category: 'health', difficulty: 1, bahdiniReviewed: false },
    { id: 'l75-better', en: 'better', ckb: 'باشتر', pos: 'adjective', emoji: '👍', phonetic: '/ˈbetə/', exampleEn: 'You should feel better soon.', exampleCkb: 'باشترە زوو باشتر حەس بکەی.', category: 'health', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Describe your symptoms clearly.', ckb: 'نیشانەیێن خو ب ڕوونی ڕابگەهینە.' },
    { en: 'Call the doctor if the fever continues.', ckb: 'ئەگەر تا بەردەوام بوو، بانگا دکتوری بکە.' },
    { en: 'Take your medicine on time.', ckb: 'دەرمانێ خو ل دەمێ خو وەربگرە.' },
    { en: 'Know who to call in an emergency.', ckb: 'بزانە د کۆرتەیێ دا بانگا کێ بکەی.' },
  ],
  conversation: [
    { characterId: 'shirin', en: 'How are your symptoms today?', ckb: 'نیشانەیێن تە ئەڤڕۆ چەوان نە؟' },
    { characterId: 'dara', en: 'My cough is better, but I still have a fever.', ckb: 'کۆکا من باشترە، بەس هێشتا تا لێ من هەیە.' },
    { characterId: 'shirin', en: 'Take your medicine on time and get some rest.', ckb: 'دەرمانێ خو ل دەمێ خو وەربگرە و هندەک بێهنڤەدانێ بکە.' },
    { characterId: 'dara', en: 'I will. I also have a doctor appointment tomorrow.', ckb: 'دێ بکەم. دیدارەکا من یا دکتوری سەبەی ژی هەیە.' },
    { characterId: 'shirin', en: 'Good. Call me if the fever gets worse.', ckb: 'باش. ئەگەر تا خرابتر بوو، بانگا من بکە.' },
    { characterId: 'dara', en: 'I will. If it is an emergency, I will call an ambulance.', ckb: 'دێ بکەم. ئەگەر کۆرتا بوو، ئەز دێ بانگا ئەمبولانسێ بکەم.' },
  ],
};
