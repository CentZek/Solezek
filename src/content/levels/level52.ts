import type { Level } from '../../types/content';

export const level52: Level = {
  id: 52,
  titleEn: 'Feelings and Emotions',
  titleCkb: 'هەست و هەستێن دلی',
  icon: '😊',
  objectiveEn: 'Explain how you feel and why you feel that way.',
  objectiveCkb: 'بڵێ تو چەوان هەست دکەی و بۆچی ب وێ رێی هەست دکەی.',
  cefr: 'A2',
  vocab: [
    { id: 'l52-happy', en: 'happy', ckb: 'دڵخۆش', pos: 'adjective', emoji: '😊', phonetic: '/ˈhæpi/', exampleEn: 'I am happy today.', exampleCkb: 'ئەز ئەڤڕۆ دڵخۆش مە.', category: 'feelings', difficulty: 1, bahdiniReviewed: false },
    { id: 'l52-sad', en: 'sad', ckb: 'خەمگین', pos: 'adjective', emoji: '😢', phonetic: '/sæd/', exampleEn: 'She is sad because her friend is away.', exampleCkb: 'ئەو خەمگینە چونکو هەڤاڵێ وێ نینە.', category: 'feelings', difficulty: 1, bahdiniReviewed: false },
    { id: 'l52-angry', en: 'angry', ckb: 'تورە', pos: 'adjective', emoji: '😠', phonetic: '/ˈæŋɡri/', exampleEn: 'He is angry about the noise.', exampleCkb: 'ئەو ژ دەنگەدەنگی تورەیە.', category: 'feelings', difficulty: 2, bahdiniReviewed: false },
    { id: 'l52-worried', en: 'worried', ckb: 'خەمسۆر', pos: 'adjective', emoji: '😟', phonetic: '/ˈwʌrid/', exampleEn: 'I am worried about the exam.', exampleCkb: 'ئەز ل تاقیکرنێ خەمسۆر مە.', category: 'feelings', difficulty: 2, bahdiniReviewed: false },
    { id: 'l52-excited', en: 'excited', ckb: 'ب هیجان', pos: 'adjective', emoji: '🤩', phonetic: '/ɪkˈsaɪtɪd/', exampleEn: 'We are excited about the trip.', exampleCkb: 'ئەم ب هیجانا گەشتێ نە.', category: 'feelings', difficulty: 2, bahdiniReviewed: false },
    { id: 'l52-scared', en: 'scared', ckb: 'تۆرش', pos: 'adjective', emoji: '😨', phonetic: '/skeəd/', exampleEn: 'The child is scared of the dark.', exampleCkb: 'زارۆک ژ تارییێ تۆرشە.', category: 'feelings', difficulty: 2, bahdiniReviewed: false },
    { id: 'l52-bored', en: 'bored', ckb: 'بێزار', pos: 'adjective', emoji: '🥱', phonetic: '/bɔːd/', exampleEn: 'I am bored at home.', exampleCkb: 'ئەز ل مال بێزار مە.', category: 'feelings', difficulty: 2, bahdiniReviewed: false },
    { id: 'l52-surprised', en: 'surprised', ckb: 'سەرسام', pos: 'adjective', emoji: '😲', phonetic: '/səˈpraɪzd/', exampleEn: 'I was surprised by the news.', exampleCkb: 'ئەز ل نووچەیێ سەرسام بووم.', category: 'feelings', difficulty: 3, bahdiniReviewed: false },
    { id: 'l52-calm', en: 'calm', ckb: 'ئارام', pos: 'adjective', emoji: '😌', phonetic: '/kɑːm/', exampleEn: 'Stay calm, please.', exampleCkb: 'هیڤیدارم، ئارام بمینە.', category: 'feelings', difficulty: 2, bahdiniReviewed: false },
    { id: 'l52-proud', en: 'proud', ckb: 'سەربەرز', pos: 'adjective', emoji: '🙌', phonetic: '/praʊd/', exampleEn: 'My parents are proud of me.', exampleCkb: 'دایک و باڤێ من سەربەرزن ب من.', category: 'feelings', difficulty: 3, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'I am happy because you are here.', ckb: 'ئەز دڵخۆش مە چونکو تو ل ڤێرێ یی.' },
    { en: 'I am worried about the exam.', ckb: 'ئەز ل تاقیکرنێ خەمسۆر مە.' },
    { en: 'We are excited about the trip.', ckb: 'ئەم ب هیجانا گەشتێ نە.' },
    { en: 'Stay calm, please.', ckb: 'هیڤیدارم، ئارام بمینە.' },
  ],
  conversation: [
    { characterId: 'dara', en: 'Why are you worried, Shirin?', ckb: 'تو بۆچی خەمسۆر یی، شیرین؟' },
    { characterId: 'shirin', en: 'I am worried about the exam tomorrow.', ckb: 'ئەز ل تاقیکرنا سەبەی خەمسۆر مە.' },
    { characterId: 'dara', en: 'Stay calm. You studied hard.', ckb: 'ئارام بمینە. تو ب ماندوویێ خوین.' },
    { characterId: 'shirin', en: 'I know. I was bored studying alone, so I am happy you are here.', ckb: 'ئەز دزانم. ئەز تەنێ خویندن بێزار بووم، جا دڵخۆش مە تو ل ڤێرێ یی.' },
    { characterId: 'dara', en: 'We can practice together and then rest.', ckb: 'ئەم دشێین پێکڤە ڕاهێنان بکەین و پاشی بێهنڤەدانێ بکەین.' },
    { characterId: 'shirin', en: 'Good idea. My parents will be proud of me.', ckb: 'هزرەکا باش. دایک و باڤێ من دێ سەربەرز بن ب من.' },
  ],
};
