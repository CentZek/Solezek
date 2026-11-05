import type { Level } from '../../types/content';

export const level51: Level = {
  id: 51,
  titleEn: 'Family and Relationships',
  titleCkb: 'خێزان و پەیوەندی',
  icon: '👨‍👩‍👧',
  objectiveEn: 'Talk about relatives, marriage, neighbors, and family relationships.',
  objectiveCkb: 'بەحس ژ ئەندامێن خێزانێ، هەڤژینی و جیرانان بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l51-husband', en: 'husband', ckb: 'مێرد', pos: 'noun', emoji: '🤵', phonetic: '/ˈhʌzbənd/', exampleEn: 'Her husband works at the hospital.', exampleCkb: 'مێردێ وێ ل نەخۆشخانێ کار دکەت.', category: 'family', difficulty: 2, bahdiniReviewed: false },
    { id: 'l51-wife', en: 'wife', ckb: 'ژن', pos: 'noun', emoji: '👰', phonetic: '/waɪf/', exampleEn: 'His wife is a teacher.', exampleCkb: 'ژنا وی ماموستایە.', category: 'family', difficulty: 2, bahdiniReviewed: false },
    { id: 'l51-parents', en: 'parents', ckb: 'دایک و باڤ', pos: 'noun', emoji: '👪', phonetic: '/ˈpeərənts/', exampleEn: 'My parents live in Duhok.', exampleCkb: 'دایک و باڤێ من ل دهوکێ دژین.', category: 'family', difficulty: 1, bahdiniReviewed: false },
    { id: 'l51-uncle', en: 'uncle', ckb: 'مام', pos: 'noun', emoji: '👨', phonetic: '/ˈʌŋkəl/', exampleEn: 'My uncle visits us on Friday.', exampleCkb: 'مامێ من ئینیێ سەرەدانا مە دکەت.', category: 'family', difficulty: 1, bahdiniReviewed: false },
    { id: 'l51-aunt', en: 'aunt', ckb: 'پور', pos: 'noun', emoji: '👩', phonetic: '/ɑːnt/', exampleEn: 'My aunt makes delicious food.', exampleCkb: 'پورا من خوارنێن تامەز چێدکەت.', category: 'family', difficulty: 2, bahdiniReviewed: false },
    { id: 'l51-neighbor', en: 'neighbor', ckb: 'جیران', pos: 'noun', emoji: '🏘️', phonetic: '/ˈneɪbə/', exampleEn: 'Our neighbors are kind.', exampleCkb: 'جیرانێن مە دلۆڤان نە.', category: 'people', difficulty: 2, bahdiniReviewed: false },
    { id: 'l51-married', en: 'married', ckb: 'هەڤژین', pos: 'adjective', emoji: '💍', phonetic: '/ˈmærid/', exampleEn: 'They are married.', exampleCkb: 'ئەوان هەڤژین نە.', category: 'relationships', difficulty: 2, bahdiniReviewed: false },
    { id: 'l51-single', en: 'single', ckb: 'بێ هەڤژین', pos: 'adjective', emoji: '🧍', phonetic: '/ˈsɪŋɡəl/', exampleEn: 'My brother is single.', exampleCkb: 'برایێ من بێ هەڤژینە.', category: 'relationships', difficulty: 2, bahdiniReviewed: false },
    { id: 'l51-relative', en: 'relative', ckb: 'ئەندامێ خێزانێ', pos: 'noun', emoji: '🧑‍🤝‍🧑', phonetic: '/ˈrelətɪv/', exampleEn: 'All our relatives are coming.', exampleCkb: 'هەمی ئەندامێن خێزانا مە دێن.', category: 'family', difficulty: 3, bahdiniReviewed: false },
    { id: 'l51-kind', en: 'kind', ckb: 'دلۆڤان', pos: 'adjective', emoji: '💛', phonetic: '/kaɪnd/', exampleEn: 'She is kind to everyone.', exampleCkb: 'ئەو ب هەمیان دلۆڤانە.', category: 'people', difficulty: 2, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'My parents live in Duhok.', ckb: 'دایک و باڤێ من ل دهوکێ دژین.' },
    { en: 'My uncle visits us on Fridays.', ckb: 'مامێ من ئینیان سەرەدانا مە دکەت.' },
    { en: 'They are married.', ckb: 'ئەوان هەڤژین نە.' },
    { en: 'She is kind to everyone.', ckb: 'ئەو ب هەمیان دلۆڤانە.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'Are your parents coming tonight?', ckb: 'دایک و باڤێ تە ئەڤشەڤ دێن؟' },
    { characterId: 'azad', en: 'Yes, and my uncle and aunt are coming too.', ckb: 'بەلێ، و مام و پورا من ژی دێن.' },
    { characterId: 'rojin', en: 'Is your aunt the teacher?', ckb: 'پورا تە ماموستایە؟' },
    { characterId: 'azad', en: 'No, that is my brother’s wife. My aunt works at the hospital.', ckb: 'نەخێر، ئەو ژنا برایێ منە. پورا من ل نەخۆشخانێ کار دکەت.' },
    { characterId: 'rojin', en: 'Your family is very kind.', ckb: 'خێزانا تە گەلەک دلۆڤانە.' },
    { characterId: 'azad', en: 'Thank you. Our neighbors will join us too.', ckb: 'سوپاس. جیرانێن مە ژی دێن دگەل مە.' },
  ],
};
