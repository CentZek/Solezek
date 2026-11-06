import type { Level } from '../../types/content';

export const level72: Level = {
  id: 72,
  titleEn: 'Body and Movement',
  titleCkb: 'لەش و جوولان',
  icon: '🧍',
  objectiveEn: 'Name body parts and follow simple movement and exercise instructions.',
  objectiveCkb: 'ناڤێن بەشێن لەشی بڵێ و ڕێنماڵیێن جوولان و وەرزشێ تێبگەهە.',
  cefr: 'A2',
  vocab: [
    { id: 'l72-body', en: 'body', ckb: 'لەش', pos: 'noun', emoji: '🧍', phonetic: '/ˈbɒdi/', exampleEn: 'Exercise is good for the body.', exampleCkb: 'وەرزش بۆ لەشی باشە.', category: 'body', difficulty: 1, bahdiniReviewed: false },
    { id: 'l72-arm', en: 'arm', ckb: 'بازو', pos: 'noun', emoji: '💪', phonetic: '/ɑːm/', exampleEn: 'Raise your arms.', exampleCkb: 'بازوویێن خو بلند بکە.', category: 'body', difficulty: 1, bahdiniReviewed: false },
    { id: 'l72-leg', en: 'leg', ckb: 'لنگ', pos: 'noun', emoji: '🦵', phonetic: '/leɡ/', exampleEn: 'My leg hurts after running.', exampleCkb: 'پاش بەزینێ لنگا من دئێشێت.', category: 'body', difficulty: 1, bahdiniReviewed: false },
    { id: 'l72-knee', en: 'knee', ckb: 'ئەژنۆ', pos: 'noun', emoji: '🦵', phonetic: '/niː/', exampleEn: 'Bend your knees.', exampleCkb: 'ئەژنۆیێن خو بچەمینە.', category: 'body', difficulty: 2, bahdiniReviewed: false },
    { id: 'l72-shoulder', en: 'shoulder', ckb: 'شان', pos: 'noun', emoji: '🧍', phonetic: '/ˈʃəʊldə/', exampleEn: 'Relax your shoulders.', exampleCkb: 'شانێن خو ئارام بهێلە.', category: 'body', difficulty: 2, bahdiniReviewed: false },
    { id: 'l72-finger', en: 'finger', ckb: 'پەنجە', pos: 'noun', emoji: '👆', phonetic: '/ˈfɪŋɡə/', exampleEn: 'Move your fingers.', exampleCkb: 'پەنجەیێن خو بجوولینە.', category: 'body', difficulty: 2, bahdiniReviewed: false },
    { id: 'l72-neck', en: 'neck', ckb: 'مل', pos: 'noun', emoji: '🧣', phonetic: '/nek/', exampleEn: 'My neck hurts.', exampleCkb: 'ملا من دئێشێت.', category: 'body', difficulty: 2, bahdiniReviewed: false },
    { id: 'l72-move', en: 'move', ckb: 'جوولان', pos: 'verb', emoji: '↔️', phonetic: '/muːv/', exampleEn: 'Move slowly to the left.', exampleCkb: 'ب حەوانێ بچە چەپێ.', category: 'movement', difficulty: 1, bahdiniReviewed: false },
    { id: 'l72-stretch', en: 'stretch', ckb: 'درێژکرن', pos: 'verb', emoji: '🤸', phonetic: '/stretʃ/', exampleEn: 'Stretch before exercise.', exampleCkb: 'بەر وەرزشێ لەشێ خو درێژ بکە.', category: 'movement', difficulty: 2, bahdiniReviewed: false },
    { id: 'l72-bend', en: 'bend', ckb: 'چەمکرن', pos: 'verb', emoji: '🙇', phonetic: '/bend/', exampleEn: 'Bend down slowly.', exampleCkb: 'ب حەوانێ خۆ بچەمینە.', category: 'movement', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Raise your arms.', ckb: 'بازوویێن خو بلند بکە.' },
    { en: 'Bend your knees.', ckb: 'ئەژنۆیێن خو بچەمینە.' },
    { en: 'Stretch before exercise.', ckb: 'بەر وەرزشێ لەشێ خو درێژ بکە.' },
    { en: 'Move slowly to the left.', ckb: 'ب حەوانێ بچە چەپێ.' },
  ],
  conversation: [
    { characterId: 'shirin', en: 'Are you ready to exercise?', ckb: 'تو بۆ وەرزشێ ئامادە یی؟' },
    { characterId: 'dara', en: 'Yes. What should we do first?', ckb: 'بەلێ. ئێکەم ئەم چ بکەین؟' },
    { characterId: 'shirin', en: 'Stretch your body and raise your arms.', ckb: 'لەشێ خو درێژ بکە و بازوویێن خو بلند بکە.' },
    { characterId: 'dara', en: 'My shoulder is a little sore.', ckb: 'شانێ من هندەک دئێشێت.' },
    { characterId: 'shirin', en: 'Move slowly and do not bend your knees too much.', ckb: 'ب حەوانێ بجوولە و ئەژنۆیێن خو زۆر مەچەمینە.' },
    { characterId: 'dara', en: 'Understood. I will stop if anything hurts.', ckb: 'تێگەهشتم. ئەگەر تشتەک ئێشا، ئەز دێ راوەستم.' },
  ],
};
