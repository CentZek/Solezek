import type { Level } from '../../types/content';

export const level48: Level = {
  id: 48,
  titleEn: 'School and Learning',
  titleCkb: 'قوتابخانە و فێربوون',
  icon: '🏫',
  objectiveEn: 'Talk about classes, homework, teachers, questions, and exams.',
  objectiveCkb: 'بەحس ژ پۆل، کارێ مالێ، ماموستا، پرسیار و تاقیکرنان بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l48-teacher', en: 'teacher', ckb: 'ماموستا', pos: 'noun', emoji: '🧑‍🏫', phonetic: '/ˈtiːtʃə/', exampleEn: 'Our teacher is very helpful.', exampleCkb: 'ماموستایا مە گەلەک ھاریکارە.', category: 'school', difficulty: 1, bahdiniReviewed: false },
    { id: 'l48-student', en: 'student', ckb: 'قوتابی', pos: 'noun', emoji: '🧑‍🎓', phonetic: '/ˈstjuːdənt/', exampleEn: 'Every student has a book.', exampleCkb: 'هەر قوتابیەکی پەرتووکەک هەیە.', category: 'school', difficulty: 1, bahdiniReviewed: false },
    { id: 'l48-classroom', en: 'classroom', ckb: 'پۆل', pos: 'noun', emoji: '🏫', phonetic: '/ˈklɑːsruːm/', exampleEn: 'The classroom is big and bright.', exampleCkb: 'پۆل مەزن و ڕۆشنە.', category: 'school', difficulty: 2, bahdiniReviewed: false },
    { id: 'l48-lesson', en: 'lesson', ckb: 'وانە', pos: 'noun', emoji: '📖', phonetic: '/ˈlesən/', exampleEn: 'The lesson starts at nine.', exampleCkb: 'وانە ل دەمژمێر نۆیێ دەستپێدکەت.', category: 'school', difficulty: 1, bahdiniReviewed: false },
    { id: 'l48-homework', en: 'homework', ckb: 'کارێ مالێ', pos: 'noun', emoji: '📝', phonetic: '/ˈhəʊmwɜːk/', exampleEn: 'I finish my homework after dinner.', exampleCkb: 'ئەز پاش نانێ ئێڤارێ کارێ خو یێ مالێ تمام دکەم.', category: 'school', difficulty: 1, bahdiniReviewed: false },
    { id: 'l48-question', en: 'question', ckb: 'پرسیار', pos: 'noun', emoji: '❓', phonetic: '/ˈkwestʃən/', exampleEn: 'Ask the teacher a question.', exampleCkb: 'پرسیارەک ژ ماموستایی بپرسە.', category: 'school', difficulty: 1, bahdiniReviewed: false },
    { id: 'l48-answer', en: 'answer', ckb: 'بەرسڤ', pos: 'noun', emoji: '💬', phonetic: '/ˈɑːnsə/', exampleEn: 'Write the answer here.', exampleCkb: 'بەرسڤێ ل ڤێرێ بینیڤیسە.', category: 'school', difficulty: 1, bahdiniReviewed: false },
    { id: 'l48-learn', en: 'learn', ckb: 'فێربوون', pos: 'verb', emoji: '💡', phonetic: '/lɜːn/', exampleEn: 'We learn English together.', exampleCkb: 'ئەم پێکڤە ئینگلیزی فێر دبین.', category: 'school', difficulty: 1, bahdiniReviewed: false },
    { id: 'l48-teach', en: 'teach', ckb: 'فێرکرن', pos: 'verb', emoji: '🧑‍🏫', phonetic: '/tiːtʃ/', exampleEn: 'She teaches English.', exampleCkb: 'ئەو ئینگلیزی فێر دکەت.', category: 'school', difficulty: 2, bahdiniReviewed: false },
    { id: 'l48-pass', en: 'pass', ckb: 'دەربازبوون', pos: 'verb', emoji: '✅', phonetic: '/pɑːs/', exampleEn: 'I hope I pass the exam.', exampleCkb: 'هیڤیا من ئەز تاقیکرنێ دەرباز ببم.', category: 'school', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Ask the teacher a question.', ckb: 'پرسیارەک ژ ماموستایی بپرسە.' },
    { en: 'I finish my homework after dinner.', ckb: 'ئەز پاش نانێ ئێڤارێ کارێ خو یێ مالێ تمام دکەم.' },
    { en: 'We learn English together.', ckb: 'ئەم پێکڤە ئینگلیزی فێر دبین.' },
    { en: 'I hope I pass the exam.', ckb: 'هیڤیا من ئەز تاقیکرنێ دەرباز ببم.' },
  ],
  conversation: [
    { characterId: 'shirin', en: 'Did you finish your homework?', ckb: 'تو کارێ خو یێ مالێ تمام کر؟' },
    { characterId: 'dara', en: 'Most of it. I have one question for the teacher.', ckb: 'زۆربا وی. پرسیارەکا من بۆ ماموستایی هەیە.' },
    { characterId: 'shirin', en: 'Ask her after the lesson. She is very helpful.', ckb: 'پاش وانەیێ ژ وێ بپرسە. ئەو گەلەک ھاریکارە.' },
    { characterId: 'dara', en: 'I will. I want to pass this exam.', ckb: 'دێ بکەم. ئەز دڤێم ڤێ تاقیکرنێ دەرباز ببم.' },
    { characterId: 'shirin', en: 'We can study together tonight.', ckb: 'ئەم دشێین ئەڤشەڤ پێکڤە بخوینین.' },
    { characterId: 'dara', en: 'Good idea. Bring your notes.', ckb: 'هزرەکا باش. تێبینیێن خو بهێنە.' },
  ],
};
