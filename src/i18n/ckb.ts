// All Bahdini (Kurdish, Arabic script) UI strings live here.
// Components must never hard-code user-visible text — import { t } from '../i18n/ckb'.

export const t = {
  appName: 'بهدینی ئینگلیزی',
  tagline: 'ئینگلیزی فێر ببە ژ بەهدینی!',

  // Onboarding
  welcome: 'ب خێر هاتوی! 👋',
  welcomeBody:
    'ل ڤێرێ تو ئینگلیزی فێر دبی ب وانەیێن کورت و یاریێن خۆش. ڕۆژانە هندەک خولەک بەسە!',
  nameLabel: 'ناڤێ تە چیە؟',
  namePlaceholder: 'ناڤێ خو ل ڤێرێ بینیڤیسە',
  knowLevelQuestion: 'تو چەند ئینگلیزی دزانی؟',
  knowLevels: [
    { id: 'none', icon: '🌱', label: 'هێچ نەزانم' },
    { id: 'some', icon: '🌿', label: 'هندەک مەزانم' },
    { id: 'basic', icon: '🌳', label: 'بنچینە مەزانم' },
  ] as const,
  start: 'دەستپێبکە',

  // Navigation
  nav: {
    home: 'سەرەکی',
    learn: 'فێربوون',
    review: 'دووبارەکرن',
    achievements: 'خەڵات',
    profile: 'پرۆفایل',
  },

  // Home
  greeting: (name: string) => `سلاڤ، ${name}! 👋`,
  continueLesson: 'بەردەوام بوون ◀',
  startLesson: 'وانە دەستپێبکە ◀',
  currentLevel: 'ئاستا نوکە',
  dailyGoal: 'ئامانجا ڕۆژانە',
  minutesUnit: 'خولەک',
  goalDone: 'ئامانجا ڕۆژێ یا تمامە! 🎉',
  readyForReview: (n: number) => `${n} پەیڤ ئامادە نە بۆ دووبارەکرنێ`,
  reviewNow: 'دووبارە بکە ◀',
  coursePreview: 'ڕێکا خولێ',
  seeFullMap: 'نەخشا تمامی ◀',

  // Labels
  level: 'ئاست',
  lesson: 'وانە',
  exam: 'تاقیکرن',
  mission: 'ئەرک',
  missionOrdinal: (n: number) =>
    `ئەرکا ${['ئێکێ', 'دووێ', 'سێیێ', 'چارێ', 'پێنجێ'][n - 1] ?? n}`,
  score: 'خال',
  xp: 'خال (XP)',
  coins: 'زێڕین',
  streakDays: (n: number) => `${n} ڕۆژ پێ یەکتر`,
  words: 'پەیڤ',

  // Lesson flow
  youWillLearn: 'تو دێ فێر ببی:',
  objective: 'ئامانجا وانەیێ',
  next: 'پاشی ◀',
  back: '◀ پێشی',
  finish: 'تمامکرن',
  check: 'پشکنین',
  hearWord: 'گوهدار بکە',
  hearSlow: 'ب حەوانێ',
  trySpeaking: 'بڵێ 🎤',
  listening: 'گوهداریێ دکەم...',
  example: 'نموونە',
  grammar: 'گرامەر',
  speechUnavailable: 'ببورە، ڤێ تایبەتیێ ل سەر ڤێ وێبگەڕێ بەردەست نینە.',
  speechHeard: (heard: string) => `مە بیست: «${heard}»`,
  speechGood: 'زۆر باش! 🗣️',
  practiceRound1: 'ڕاهێنان ۱',
  practiceRound2: 'ڕاهێنان ۲',
  learnStage: 'فێربوون',
  examIntro: 'دەمێ تاقیکرنێ هات! 🏆',
  exitLesson: 'دەرکەڤن',

  // Feedback
  praise: ['باشە!', 'زۆر باش!', 'بێخەم!', 'ئافەرین!'] as const,
  encouragement: ['هەول بدە ژ نوو!', 'تو دشێی!', 'کێماسی نینە، هەول بدە!'] as const,
  wrongTitle: 'هەول بدە ژ نوو',
  correctAnswerIs: 'بەرسڤا ڕاست:',
  plusXp: (n: number) => `+${n} XP`,
  perfectRound: 'ڕاهێنانا بێخەم! 🌟',

  // Level complete
  levelComplete: 'ئاست تمام بوو! 🎉',
  examPassed: 'تو تاقیکرنێ دەربازکری! ✅',
  examFailedTitle: 'هیڤیدارین هەول بدی ژ نوو!',
  examFailedBody: 'توانا تە هەیە. پەیڤێن ل ژێر دووبارە بکە و هەول بدە.',
  newWordsLearned: (n: number) => `${n} پەیڤێن نوی`,
  xpEarned: (n: number) => `${n} خال (XP) بۆ تە هات`,
  whatYouLearned: 'تو چ فێر بووی',
  weakWords: 'پەیڤێن ب کێماسی:',
  practiceAgain: 'هەول بدە ژ نوو 🔄',
  continueArrow: 'بەردەوام بوون ◀',
  backToMap: 'زڤرین بۆ نەخشێ',

  // Review
  reviewTitle: 'دووبارەکرن',
  reviewIntro: 'پەیڤێن کو ئەم د وانەیان دا فێر بووین، ل ڤێرێ دووبارە بکە.',
  startReview: 'دووبارەکرن دەستپێبکە ◀',
  noDueWords: 'نوکە ھیچ پەیڤ بۆ دووبارەکرنێ نینە. زۆر باش! 🌿',
  reviewDone: 'دووبارەکرن تمام بوو! 🎉',  buckets: {
    new: '🆕 نوی',
    learning: '🟡 د فێربوونێ دا',
    strong: '🟢 ب هێز',
    mastered: '🔵 ب تەمومی فێربووی',
  },

  // Achievements
  achievementsTitle: 'خەڵات',
  achievementLocked: 'هێشتا نەهاتی وەرگرتن',

  // Profile
  profileTitle: 'پرۆفایل',
  statsTitle: 'ژمارەیێن تە',
  statXp: 'خالێن گشتی',
  statStreak: 'ڕۆژێن پێ یەکتر',
  statWords: 'پەیڤێن فێربووی',
  statLevels: 'ئاستێن تمامکری',
  statAccuracy: 'ڕێژا ڕاستیێ',
  openSettings: 'ڕێکخستن ⚙️',

  // Settings
  settingsTitle: 'ڕێکخستن',
  dailyGoalPicker: 'ئامانجا ڕۆژانە (ب خولەک)',
  soundLabel: 'دەنگ',
  soundOn: 'ڤەکری',
  soundOff: 'گرتی',
  motionLabel: 'کەمکرنا جوولەیێ',
  dangerZone: 'پارچا مەترسیدار',
  resetProgress: 'ژ ناڤبرنا پێشکەفتنیێ',
  resetConfirm: 'تو دڤێت تماما پێشکەفتنا خو ژ ناڤ ببەی؟ ڤێ کرارێ نەشێتە زڤراندن.',

  // Course map
  mapTitle: 'ڕێکا خولێ',
  locked: 'گرتی',
  mastered: 'ب تەمومی فێربووی 🏆',

  // Bahdini support reduction (levels 21+)
  needHelp: '💡 پێدڤییا تە ب یارمەتیێ هەیە؟',
  needHelpEn: '💡 Need help?',
  hint: 'ئاماژە',
  hintFirstLetter: 'پیتا ئێکێ',
  hintMeaning: 'مانا',
  typeHere: 'بەرسڤێ ب ئینگلیزی ل ڤێرێ بینیڤیسە...',
  typeWhatIsThis: 'ئەڤ چیە؟ ب ئینگلیزی بینیڤیسە',

  // Daily challenge
  dailyChallenge: 'تاقیکرنا ڕۆژانە 🔥',
  dailyChallengeBody: '٥ پرسیار بۆ ڕۆژا نوکە',
  dailyChallengeDone: 'تاقیکرنا ڕۆژا نوکە یا تمامە! 🎉',
  startChallenge: 'دەستپێبکە ◀',
  challengeReward: '+50 XP · +10 زێڕین',

  // Course complete (final level)
  courseCompleteTitle: '🎉 ئینگلیزیا A2 تمام بوو!',
  courseCompleteBody: 'تو هەمی ٦٠ ئاستێن خولا A2 تمامکر. نوکە تو دشێی ب ڕۆژانە ئینگلیزی بکاربینیی!',
  nextCourse: 'خولا بهێت: ئینگلیزیا B1',
  nextCourseBody: 'ئامادە یی بۆ سەرکێشیا نوی؟ 🚀',
  statDaysStudied: 'ڕۆژێن فێربوونێ',
  statSentences: 'بەرسڤێن ڕاست',

  // Misc
  loading: 'چەڤەرێ بە...',

  // Auth (phone OTP)
  signInTitle: 'چوونا ژوور ب ژمارا تەلەفۆنی',
  signInBody: 'ژمارا تەلەفۆنا خو بینیڤیسە؛ کۆدەک بۆ تە دهێتە فرێکرن. پێشکەفتنا تە دێ هێتە پاراستن.',
  sendCode: 'کۆدێ فرێبکە',
  phonePlaceholder: '+964 750 000 0000',
  codeSentTo: (phone: string) => `کۆد بۆ ${phone} هاتە فرێکرن`,
  verifyCode: 'پشکنین',
  changeNumber: 'ژمارێ بگوهۆڕە',
  signedIn: 'گرێدایە',
  syncNote: 'پێشکەفتنا تە نوکە ب هەسابا تە ڤە گرێدایە و ل هەر ئامێرەکی دبیتە پاراستن.',
  signOut: 'دەرکەڤن',
  deleteAccount: 'هەسابێ ژ ناڤبە',
  deleteAccountConfirm: 'ئەڤە هەساب و هەمی پێشکەفتنا تە ژ ناڤ دبات. نەشێتە زڤراندن!',

  // Auth screen (sign up / sign in / forgot password)
  authWelcome: 'ب خێر هاتوی!',
  authSubtitle: 'بۆ دەستپێکرنێ، هەسابەکی دروست بکە یان چوونا ژوور بکە',
  tabSignIn: 'چوونا ژوور',
  tabSignUp: 'هەسابا نوی',
  usernameLabel: 'ناڤێ بکارهێنەری',
  usernamePlaceholder: 'ناڤێ خو هەلبژێرە',
  passwordLabel: 'پەیڤا نهێنی',
  passwordPlaceholder: 'ل سەر کێم ٦ پیت',
  newPasswordLabel: 'پەیڤا نهێنی یا نوی',
  signUpButton: 'هەسابێ دروست بکە',
  signInButton: 'چوونا ژوور',
  forgotPassword: 'پەیڤا نهێنی ژ بیر کریە؟',
  forgotBody: 'ژمارا تەلەفۆنا خو بینیڤیسە — کۆدەک بۆ تە دفرێین دا کو پەیڤا نهێنی یا نوی دانی.',
  resetPasswordButton: 'پەیڤا نهێنی یا نوی دانە',
  passwordResetDone: 'پەیڤا نهێنی یا نوی هاتە دانان! ✅',
  resendCode: 'کۆدێ ژ نوو فرێبکە',
  resendIn: (s: number) => `کۆدێ ژ نوو فرێبکە (${s})`,
  codeNotReceived: 'کۆد وەرنەگرت؟',
  nameTaken: 'ئاریشەک هەیە، هەول بدە ژ نوو',
  accountExists: 'ئەڤ ژمارەیێ بەری نوکە هەسابەکی هەیە. چوونا ژوور بکە — ئەگەر پەیڤا نهێنی ژ بیر کریە، «پەیڤا نهێنی ژ بیر کریە؟» بکاربینە.',
  willSendTo: (p: string) => `کۆد دێ هێتە فرێکرن بۆ: ${p}`,
  inviteCodeLabel: 'کۆدا بەخشینێ',
  inviteCodePlaceholder: 'XXXX-XXXX',
  inviteInvalid: 'کۆدا بەخشینێ یا خەتایە یان بەری نوکە هاتییە بکارئینان.',
} as const;

export type Translations = typeof t;

export function randomPraise(): string {
  return t.praise[Math.floor(Math.random() * t.praise.length)];
}

export function randomEncouragement(): string {
  return t.encouragement[Math.floor(Math.random() * t.encouragement.length)];
}
