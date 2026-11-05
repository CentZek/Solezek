import type { Level } from '../../types/content';

export const level57: Level = {
  id: 57,
  titleEn: 'Seasons and Weather',
  titleCkb: 'وەرز و هەوا',
  icon: '🌦️',
  objectiveEn: 'Describe the four seasons, temperatures, and future weather.',
  objectiveCkb: 'چار وەرزان، پلەیا گەرمیێ و هەوایا پاشەرۆژێ وەسف بکە.',
  cefr: 'A2',
  vocab: [
    { id: 'l57-spring', en: 'spring', ckb: 'بەهار', pos: 'noun', emoji: '🌸', phonetic: '/sprɪŋ/', exampleEn: 'Spring is warm in Duhok.', exampleCkb: 'بەهار ل دهوکێ گەرمە.', category: 'seasons', difficulty: 1, bahdiniReviewed: false },
    { id: 'l57-summer', en: 'summer', ckb: 'هەڤین', pos: 'noun', emoji: '☀️', phonetic: '/ˈsʌmə/', exampleEn: 'Summer is very hot.', exampleCkb: 'هەڤین گەلەک گەرمە.', category: 'seasons', difficulty: 1, bahdiniReviewed: false },
    { id: 'l57-autumn', en: 'autumn', ckb: 'پاییز', pos: 'noun', emoji: '🍂', phonetic: '/ˈɔːtəm/', exampleEn: 'The leaves fall in autumn.', exampleCkb: 'گەڵا د پاییزێ دا دکەڤن.', category: 'seasons', difficulty: 2, bahdiniReviewed: false },
    { id: 'l57-winter', en: 'winter', ckb: 'زستان', pos: 'noun', emoji: '❄️', phonetic: '/ˈwɪntə/', exampleEn: 'It snows in winter.', exampleCkb: 'د زستانێ دا بەفر دبارێت.', category: 'seasons', difficulty: 1, bahdiniReviewed: false },
    { id: 'l57-season', en: 'season', ckb: 'وەرز', pos: 'noun', emoji: '🗓️', phonetic: '/ˈsiːzən/', exampleEn: 'Which season do you like?', exampleCkb: 'تو ژ کام وەرزی حەز دکەی؟', category: 'seasons', difficulty: 1, bahdiniReviewed: false },
    { id: 'l57-temperature', en: 'temperature', ckb: 'پلەیا گەرمیێ', pos: 'noun', emoji: '🌡️', phonetic: '/ˈtemprətʃə/', exampleEn: 'The temperature is low tonight.', exampleCkb: 'پلەیا گەرمیێ ئەڤشەڤ نزمە.', category: 'weather', difficulty: 3, bahdiniReviewed: false },
    { id: 'l57-cloudy', en: 'cloudy', ckb: 'هەوری', pos: 'adjective', emoji: '☁️', phonetic: '/ˈklaʊdi/', exampleEn: 'Tomorrow will be cloudy.', exampleCkb: 'سەبەی هەوا دێ هەوری بیت.', category: 'weather', difficulty: 1, bahdiniReviewed: false },
    { id: 'l57-rain', en: 'rain', ckb: 'باران', pos: 'noun', emoji: '🌧️', phonetic: '/reɪn/', exampleEn: 'We need rain in spring.', exampleCkb: 'د بەهارێ دا پێدڤییا مە ب بارانی هەیە.', category: 'weather', difficulty: 1, bahdiniReviewed: false },
    { id: 'l57-snow', en: 'snow', ckb: 'بەفر', pos: 'noun', emoji: '🌨️', phonetic: '/snəʊ/', exampleEn: 'Snow covers the mountains.', exampleCkb: 'بەفر چیا دپوژێت.', category: 'weather', difficulty: 1, bahdiniReviewed: false },
    { id: 'l57-sunny', en: 'sunny', ckb: 'هەتاوی', pos: 'adjective', emoji: '🌞', phonetic: '/ˈsʌni/', exampleEn: 'It will be sunny on Friday.', exampleCkb: 'ئینیێ هەوا دێ هەتاوی بیت.', category: 'weather', difficulty: 1, bahdiniReviewed: false },
  ],
  grammarPatterns: [
    { en: 'Which season do you like?', ckb: 'تو ژ کام وەرزی حەز دکەی؟' },
    { en: 'Tomorrow will be cloudy.', ckb: 'سەبەی هەوا دێ هەوری بیت.' },
    { en: 'It will be sunny on Friday.', ckb: 'ئینیێ هەوا دێ هەتاوی بیت.' },
    { en: 'It snows in winter.', ckb: 'د زستانێ دا بەفر دبارێت.' },
  ],
  conversation: [
    { characterId: 'rojin', en: 'Which season do you like best?', ckb: 'تو ژ کام وەرزی زێدەتر حەز دکەی؟' },
    { characterId: 'azad', en: 'Spring. The temperature is pleasant and nature is green.', ckb: 'بەهار. پلەیا گەرمیێ خۆشە و سروشت کێسکە.' },
    { characterId: 'rojin', en: 'I like winter because I love snow.', ckb: 'ئەز حەز ژ زستانێ دکەم چونکو من حەزا بەفری هەیە.' },
    { characterId: 'azad', en: 'Will it snow this weekend?', ckb: 'دوماهیا ڤێ حەفتیێ دێ بەفر ببارێت؟' },
    { characterId: 'rojin', en: 'No, it will be cloudy on Friday and sunny on Saturday.', ckb: 'نەخێر، ئینیێ هەوری دێ بیت و شەممیێ هەتاوی دێ بیت.' },
    { characterId: 'azad', en: 'Then we can go to the mountains on Saturday.', ckb: 'جا ئەم دشێین شەممیێ بچینە چیا.' },
  ],
};
