import type { Level } from '../../types/content';

export const level77: Level = {
  id: 77,
  titleEn: 'Jobs and Future Ambitions',
  titleCkb: 'کار و ئامانجێن پاشەرۆژێ',
  icon: '🚀',
  objectiveEn: 'Talk about career goals, skills, qualifications, and job applications.',
  objectiveCkb: 'بەحس ژ ئامانجێن کارێ، شارەزایی، بڕوانامە و داخازکرنا کارێ بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l77-future', en: 'future', ckb: 'پاشەرۆژ', pos: 'noun', emoji: '🔮', phonetic: '/ˈfjuːtʃə/', exampleEn: 'What are your plans for the future?', exampleCkb: 'پلانێن تە بۆ پاشەرۆژێ چ نە؟', category: 'ambitions', difficulty: 1, bahdiniReviewed: false },
    { id: 'l77-engineer', en: 'engineer', ckb: 'ئەندازیار', pos: 'noun', emoji: '👷', phonetic: '/ˌendʒɪˈnɪə/', exampleEn: 'My brother wants to be an engineer.', exampleCkb: 'برایێ من دڤێت ببیتە ئەندازیار.', category: 'jobs', difficulty: 2, bahdiniReviewed: false },
    { id: 'l77-nurse', en: 'nurse', ckb: 'پەرستار', pos: 'noun', emoji: '🧑‍⚕️', phonetic: '/nɜːs/', exampleEn: 'The nurse helps the doctor.', exampleCkb: 'پەرستار ھاریکاریا دکتوری دکەت.', category: 'jobs', difficulty: 2, bahdiniReviewed: false },
    { id: 'l77-teacher', en: 'teacher', ckb: 'ماموستا', pos: 'noun', emoji: '🧑‍🏫', phonetic: '/ˈtiːtʃə/', exampleEn: 'She wants to become a teacher.', exampleCkb: 'ئەو دڤێت ببیتە ماموستا.', category: 'jobs', difficulty: 1, bahdiniReviewed: false },
    { id: 'l77-business', en: 'business', ckb: 'بازرگانی', pos: 'noun', emoji: '💼', phonetic: '/ˈbɪznəs/', exampleEn: 'He wants to start a business.', exampleCkb: 'ئەو دڤێت دەست ب بازرگانیەکێ بکەت.', category: 'jobs', difficulty: 2, bahdiniReviewed: false },
    { id: 'l77-apply', en: 'apply', ckb: 'داخازکرن', pos: 'verb', emoji: '📝', phonetic: '/əˈplaɪ/', exampleEn: 'Apply for the job online.', exampleCkb: 'بۆ کارێ ئۆنلاین داخازی بکە.', category: 'ambitions', difficulty: 2, bahdiniReviewed: false },
    { id: 'l77-interview', en: 'interview', ckb: 'چاڤپێکەڤتن', pos: 'noun', emoji: '🗣️', phonetic: '/ˈɪntəvjuː/', exampleEn: 'Prepare for your interview.', exampleCkb: 'بۆ چاڤپێکەڤتنا خو ئامادە بە.', category: 'ambitions', difficulty: 1, bahdiniReviewed: false },
    { id: 'l77-skill', en: 'skill', ckb: 'شارەزایی', pos: 'noun', emoji: '🛠️', phonetic: '/skɪl/', exampleEn: 'English is a useful skill.', exampleCkb: 'ئینگلیزی شارەزاییەکا ب سوودە.', category: 'ambitions', difficulty: 2, bahdiniReviewed: false },
    { id: 'l77-degree', en: 'degree', ckb: 'بڕوانامە', pos: 'noun', emoji: '🎓', phonetic: '/dɪˈɡriː/', exampleEn: 'She has a university degree.', exampleCkb: 'بڕوانامەیا زانکۆیێ یا وێ هەیە.', category: 'ambitions', difficulty: 3, bahdiniReviewed: false },
    { id: 'l77-experience', en: 'experience', ckb: 'ئەزموون', pos: 'noun', emoji: '🌟', phonetic: '/ɪkˈspɪəriəns/', exampleEn: 'I have two years of experience.', exampleCkb: 'دوو سال ئەزموونێ من هەیە.', category: 'ambitions', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'What are your plans for the future?', ckb: 'پلانێن تە بۆ پاشەرۆژێ چ نە؟' },
    { en: 'Apply for the job online.', ckb: 'بۆ کارێ ئۆنلاین داخازی بکە.' },
    { en: 'Prepare for your interview.', ckb: 'بۆ چاڤپێکەڤتنا خو ئامادە بە.' },
    { en: 'I have two years of experience.', ckb: 'دوو سال ئەزموونێ من هەیە.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'What do you want to do in the future?', ckb: 'تو دڤێی د پاشەرۆژێ دا چ بکەی؟' },
    { characterId: 'azad', en: 'I want to be an engineer or start a business.', ckb: 'ئەز دڤێم ببمە ئەندازیار یان دەست ب بازرگانیەکێ بکەم.' },
    { characterId: 'rojin', en: 'Do you have the right skills and experience?', ckb: 'شارەزایی و ئەزموونێن ڕاست تە هەنە؟' },
    { characterId: 'azad', en: 'Yes, and I will finish my degree next year.', ckb: 'بەلێ، و ئەز دێ ساڵا بهێت بڕوانامەیا خو تمام بکەم.' },
    { characterId: 'rojin', en: 'Are you going to apply for a job first?', ckb: 'تو دێ ئێکەم بۆ کارەکی داخازی بکەی؟' },
    { characterId: 'azad', en: 'Yes. I am preparing for an interview now.', ckb: 'بەلێ. ئەز نوکە بۆ چاڤپێکەڤتنەکێ ئامادە دبم.' },
  ],
};
