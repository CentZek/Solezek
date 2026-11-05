import type { Level } from '../../types/content';

export const level56: Level = {
  id: 56,
  titleEn: 'Work, Tasks, and Appointments',
  titleCkb: 'کار، ئەرک و دیدار',
  icon: '💼',
  objectiveEn: 'Discuss interviews, salaries, tasks, meetings, and deadlines at work.',
  objectiveCkb: 'بەحس ژ چاڤپێکەڤتن، ماش، ئەرک، کۆمبوون و دەمێ دوماهیێ بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l56-interview', en: 'interview', ckb: 'چاڤپێکەڤتن', pos: 'noun', emoji: '🗣️', phonetic: '/ˈɪntəvjuː/', exampleEn: 'My job interview is tomorrow.', exampleCkb: 'چاڤپێکەڤتنا من یا کارێ سەبەی یە.', category: 'work', difficulty: 2, bahdiniReviewed: false },
    { id: 'l56-salary', en: 'salary', ckb: 'ماش', pos: 'noun', emoji: '💵', phonetic: '/ˈsæləri/', exampleEn: 'My salary comes every month.', exampleCkb: 'ماشێ من هەر مەهەکێ دیت.', category: 'work', difficulty: 2, bahdiniReviewed: false },
    { id: 'l56-manager', en: 'manager', ckb: 'بریکار', pos: 'noun', emoji: '👔', phonetic: '/ˈmænɪdʒə/', exampleEn: 'The manager is in a meeting.', exampleCkb: 'بریکار ل کۆمبوونێ دایە.', category: 'work', difficulty: 1, bahdiniReviewed: false },
    { id: 'l56-employee', en: 'employee', ckb: 'کارمەند', pos: 'noun', emoji: '🧑‍💼', phonetic: '/ɪmˈplɔɪiː/', exampleEn: 'She is a new employee.', exampleCkb: 'ئەو کارمەندەکا نووی یە.', category: 'work', difficulty: 1, bahdiniReviewed: false },
    { id: 'l56-meeting', en: 'meeting', ckb: 'کۆمبوون', pos: 'noun', emoji: '👥', phonetic: '/ˈmiːtɪŋ/', exampleEn: 'The meeting starts at ten.', exampleCkb: 'کۆمبوون ل دەمژمێر دەهێ دەستپێدکەت.', category: 'work', difficulty: 1, bahdiniReviewed: false },
    { id: 'l56-task', en: 'task', ckb: 'ئەرک', pos: 'noun', emoji: '📋', phonetic: '/tɑːsk/', exampleEn: 'Finish this task today.', exampleCkb: 'ڤی ئەرکی ئەڤڕۆ تمام بکە.', category: 'work', difficulty: 2, bahdiniReviewed: false },
    { id: 'l56-deadline', en: 'deadline', ckb: 'دەمێ دوماهیێ', pos: 'noun', emoji: '⏰', phonetic: '/ˈdedlaɪn/', exampleEn: 'The deadline is Friday.', exampleCkb: 'دەمێ دوماهیێ ئینی یە.', category: 'work', difficulty: 3, bahdiniReviewed: false },
    { id: 'l56-office', en: 'office', ckb: 'ئۆفیس', pos: 'noun', emoji: '🏢', phonetic: '/ˈɒfɪs/', exampleEn: 'Our office is in the city.', exampleCkb: 'ئۆفیسا مە ل باژێرییە.', category: 'work', difficulty: 1, bahdiniReviewed: false },
    { id: 'l56-break', en: 'break', ckb: 'بێهنڤەدان', pos: 'noun', emoji: '☕', phonetic: '/breɪk/', exampleEn: 'We drink tea on our break.', exampleCkb: 'ئەم ل بێهنڤەدانێ چایێ دڤێخین.', category: 'work', difficulty: 1, bahdiniReviewed: false },
    { id: 'l56-schedule', en: 'schedule', ckb: 'بەرنامە', pos: 'noun', emoji: '🗓️', phonetic: '/ˈʃedjuːl/', exampleEn: 'Check your work schedule.', exampleCkb: 'بەرنامەیا کارا خو پشکنین بکە.', category: 'work', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'My job interview is tomorrow.', ckb: 'چاڤپێکەڤتنا من یا کارێ سەبەی یە.' },
    { en: 'Finish this task today.', ckb: 'ڤی ئەرکی ئەڤڕۆ تمام بکە.' },
    { en: 'The deadline is Friday.', ckb: 'دەمێ دوماهیێ ئینی یە.' },
    { en: 'Check your work schedule.', ckb: 'بەرنامەیا کارا خو پشکنین بکە.' },
  ],
  conversation: [
    { characterId: 'shirin', en: 'How was your job interview?', ckb: 'چاڤپێکەڤتنا تە یا کارێ چەوان بوو؟' },
    { characterId: 'dara', en: 'It went well. The manager was kind.', ckb: 'باش بوو. بریکار دلۆڤان بوو.' },
    { characterId: 'shirin', en: 'Did they talk about the salary and schedule?', ckb: 'وە بەحس ژ ماش و بەرنامەیێ کر؟' },
    { characterId: 'dara', en: 'Yes. I would start Monday and have a meeting every Friday.', ckb: 'بەلێ. ئەز دێ دووشەمبی دەستپێبکەم و هەر ئینیێ کۆمبوونەک دێ هەبێت.' },
    { characterId: 'shirin', en: 'That sounds good. Did they give you a task?', ckb: 'خۆشە. وە ئەرکەک دا تە؟' },
    { characterId: 'dara', en: 'Yes, and the deadline is tomorrow, so I have to finish now.', ckb: 'بەلێ، و دەمێ دوماهیێ سەبەی یە، جا دڤێت ئەز نوکە تمام بکەم.' },
  ],
};
