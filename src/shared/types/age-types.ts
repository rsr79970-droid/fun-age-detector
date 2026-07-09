import type { AgeType, UserAgeType } from "./user";

export const AGE_TYPES: Record<UserAgeType, AgeType> = {
  maloy: {
    title: "Maloy",
    emoji: "👶",
    color: "blue",
    gradient: "from-sky-500 to-cyan-500",
    rarity: "Common",
    powerLevel: 5,

    quote: "Small but full of energy.",

    description:
      "You're at the beginning of your life's adventure. Everything around you is new and exciting, and your curiosity helps you learn something every single day.",

    origin:
      "Spawned in the tutorial zone with unlimited curiosity and endless energy.",

    strengths: [
      "Learns quickly",
      "Unlimited imagination",
      "High energy",
      "Friendly personality",
      "Fearless explorer",
    ],

    weaknesses: [
      "Needs experience",
      "Can be impatient",
      "Gets distracted easily",
    ],

    hobbies: [
      "Playing games",
      "Watching cartoons",
      "Drawing",
      "Building things",
      "Exploring",
    ],

    achievement: "Unlocked 'First Steps'.",

    lifeGoal: "Grow stronger every year and unlock every stage of life.",

    funFact: "People at this stage ask more questions than at any other age.",

    warning: "May suddenly disappear because someone invited them to play.",

    themeSong: "Happy Adventure",
  },

  pedrostok: {
    title: "Pedrostok",
    emoji: "🧑",
    color: "green",
    gradient: "from-emerald-500 to-green-400",
    rarity: "Common",
    powerLevel: 25,

    quote: "Growing, learning, changing.",

    description:
      "You're discovering your personality and beginning to understand who you want to become. Every decision feels important, and every experience teaches something new.",

    origin: "Graduated from the tutorial area and entered the open world.",

    strengths: [
      "Fast learner",
      "Creative",
      "Dreams big",
      "Energetic",
      "Adapts quickly",
    ],

    weaknesses: ["Overthinks", "Sometimes impatient", "Easily distracted"],

    hobbies: ["Gaming", "Music", "Sports", "Anime", "Programming"],

    achievement: "Unlocked 'Teen Spirit'.",

    lifeGoal: "Find your passion and become stronger than yesterday.",

    funFact:
      "This stage changes more rapidly than almost any other period of life.",

    warning: "May stay awake until 3 AM watching random videos.",

    themeSong: "Dream On",
  },

  seredinochka: {
    title: "Seredinochka",
    emoji: "🧔",
    color: "purple",
    gradient: "from-violet-500 to-fuchsia-500",
    rarity: "Rare",
    powerLevel: 55,

    quote: "The main quest has begun.",

    description:
      "This is where ambitions become reality. You're building your future, learning valuable skills, and creating memories that will shape the rest of your life.",

    origin: "Reached the main storyline of life.",

    strengths: [
      "Independent",
      "Responsible",
      "Ambitious",
      "Hardworking",
      "Confident",
    ],

    weaknesses: ["Stress", "Too many responsibilities", "Lack of free time"],

    hobbies: ["Traveling", "Learning", "Career", "Fitness", "Technology"],

    achievement: "Unlocked 'Main Character'.",

    lifeGoal: "Build the life you've always imagined.",

    funFact: "Most of life's biggest decisions happen during this period.",

    warning: "Coffee consumption may increase dramatically.",

    themeSong: "The Journey Begins",
  },

  pensiya: {
    title: "Pensiya",
    emoji: "👴",
    color: "orange",
    gradient: "from-orange-500 to-amber-400",
    rarity: "Rare",
    powerLevel: 70,

    quote: "Experience beats speed.",

    description:
      "You've gained valuable knowledge through experience. You've overcome many challenges and can now guide others with confidence and wisdom.",

    origin: "Completed countless side quests and gathered years of experience.",

    strengths: ["Wise", "Patient", "Reliable", "Experienced", "Calm"],

    weaknesses: [
      "Less energetic",
      "Prefers comfort",
      "Dislikes unnecessary risks",
    ],

    hobbies: ["Gardening", "Traveling", "Reading", "Family time", "Fishing"],

    achievement: "Unlocked 'Experienced Veteran'.",

    lifeGoal: "Enjoy life and share knowledge with others.",

    funFact: "Experience often solves problems faster than raw talent.",

    warning: "May start every story with 'Back in my day...'.",

    themeSong: "Golden Years",
  },

  // 👇 Продолжение будет во второй части
  "ded perdun": {
    title: "Ded Perdun",
    emoji: "🧓",
    color: "yellow",
    gradient: "from-yellow-500 to-orange-400",
    rarity: "Epic",
    powerLevel: 82,

    quote: "Wisdom unlocked.",

    description:
      "You've seen trends come and go. Your experience speaks louder than words, and people often come to you for advice before making important decisions.",

    origin:
      "Completed decades of adventures and collected countless life lessons.",

    strengths: [
      "Very experienced",
      "Patient",
      "Excellent storyteller",
      "Calm under pressure",
      "Reliable",
    ],

    weaknesses: [
      "Prefers familiar things",
      "Not always interested in new trends",
      "Needs more rest",
    ],

    hobbies: ["Walking", "Gardening", "Chess", "Tea", "Talking with family"],

    achievement: "Unlocked 'Wise Elder'.",

    lifeGoal: "Pass your knowledge to the next generation.",

    funFact:
      "You've probably experienced technologies that younger generations only know from museums.",

    warning: "May tell a 30-minute story when you ask a simple question.",

    themeSong: "Old Memories",
  },

  "stariy izvrashenets": {
    title: "Stariy Izvrashenets",
    emoji: "💀",
    color: "red",
    gradient: "from-red-500 to-rose-500",
    rarity: "Epic",
    powerLevel: 90,

    quote: "A living legend.",

    description:
      "Reaching more than a hundred years is extraordinary. You've witnessed generations change and history unfold before your eyes.",

    origin: "One of the rarest survivors in the Age Detector universe.",

    strengths: [
      "Legendary experience",
      "Unmatched patience",
      "Historical knowledge",
      "Strong mindset",
    ],

    weaknesses: ["Moves a little slower", "Needs extra care"],

    hobbies: [
      "Reading",
      "Sharing stories",
      "Watching nature",
      "Family gatherings",
    ],

    achievement: "Unlocked 'Century Survivor'.",

    lifeGoal: "Enjoy every remaining adventure.",

    funFact: "Very few people ever reach this stage in real life.",

    warning:
      "You've probably forgotten more things than most people will ever learn.",

    themeSong: "Forever Young",
  },

  "kak tiy eshe giv": {
    title: "Kak Tiy Eshe Giv",
    emoji: "👑",
    color: "pink",
    gradient: "from-pink-500 to-fuchsia-500",
    rarity: "Legendary",
    powerLevel: 120,

    quote: "Immortality detected.",

    description:
      "Something doesn't add up anymore. Either you've discovered the secret of eternal life or the calculator has entered another dimension.",

    origin: "Spawned outside the known timeline.",

    strengths: [
      "Immortal",
      "Infinite experience",
      "Legend status",
      "Time traveler",
    ],

    weaknesses: ["Nobody believes your age."],

    hobbies: [
      "Watching civilizations evolve",
      "Collecting history",
      "Breaking calculators",
    ],

    achievement: "Unlocked 'Immortal'.",

    lifeGoal: "Keep existing forever.",

    funFact: "Scientists are still trying to explain you.",

    warning: "Reality may stop working around you.",

    themeSong: "Eternal Flame",
  },

  "espenis bala": {
    title: "Espenis Bala",
    emoji: "🗿",
    color: "cyan",
    gradient: "from-cyan-500 to-sky-500",
    rarity: "Epic",
    powerLevel: 88,

    quote: "Certified internet legend.",

    description:
      "Nobody really knows where this title came from, but everyone agrees it sounds legendary enough to deserve respect.",

    origin: "Generated somewhere deep inside internet culture.",

    strengths: [
      "Maximum confidence",
      "Always memorable",
      "Unpredictable",
      "Internet certified",
    ],

    weaknesses: ["Impossible to explain."],

    hobbies: ["Scrolling memes", "Gaming", "Creating chaos"],

    achievement: "Unlocked 'Meme Generator'.",

    lifeGoal: "Become part of internet history.",

    funFact: "Nobody knows what it means, but everyone pretends they do.",

    warning: "May randomly become viral.",

    themeSong: "Internet Anthem",
  },
  bagamot: {
    title: "Bagamot",
    emoji: "🍋",
    color: "lime",
    gradient: "from-lime-500 to-green-400",
    rarity: "Rare",
    powerLevel: 65,

    quote: "Unexpected but memorable.",

    description:
      "You're the kind of person who always leaves an impression. People may not expect you at first, but after meeting you they rarely forget you. You bring a unique energy wherever you go.",

    origin: "Appeared from a random event with surprisingly high charisma.",

    strengths: [
      "Charismatic",
      "Creative",
      "Optimistic",
      "Easy to remember",
      "Positive attitude",
    ],

    weaknesses: ["Sometimes unpredictable", "Can be too spontaneous"],

    hobbies: [
      "Traveling",
      "Photography",
      "Music",
      "Meeting new people",
      "Food",
    ],

    achievement: "Unlocked 'Unforgettable'.",

    lifeGoal: "Leave a positive mark wherever you go.",

    funFact: "People often remember your personality more than your name.",

    warning: "May accidentally become the center of attention.",

    themeSong: "Feel Good",
  },

  "sigma ded": {
    title: "Sigma Ded",
    emoji: "🕶️",
    color: "slate",
    gradient: "from-slate-500 to-zinc-400",
    rarity: "Epic",
    powerLevel: 95,

    quote: "Silent. Calm. Experienced.",

    description:
      "You don't chase attention because attention naturally comes to you. Years of experience have taught you when to speak and when silence says everything.",

    origin: "Reached enlightenment after completing every side quest.",

    strengths: ["Independent", "Confident", "Patient", "Disciplined", "Wise"],

    weaknesses: [
      "Very mysterious",
      "Hard to understand",
      "Rarely asks for help",
    ],

    hobbies: [
      "Walking alone",
      "Reading",
      "Coffee",
      "Thinking",
      "Watching sunsets",
    ],

    achievement: "Unlocked 'Sigma Mindset'.",

    lifeGoal: "Master yourself before trying to master the world.",

    funFact: "Can solve problems without saying a single word.",

    warning: "May unintentionally intimidate people.",

    themeSong: "Silent Warrior",
  },

  "ultimate boss": {
    title: "Ultimate Boss",
    emoji: "🔥",
    color: "rose",
    gradient: "from-red-500 via-orange-500 to-yellow-400",
    rarity: "Legendary",
    powerLevel: 999,

    quote: "The final stage.",

    description:
      "You've reached the point where even the Age Detector doesn't know how to classify you anymore. Every achievement has been unlocked, every quest completed, and your legend continues to grow.",

    origin: "Created after finishing Life in New Game+ mode.",

    strengths: [
      "Infinite confidence",
      "Legendary wisdom",
      "Maximum experience",
      "Natural leader",
      "Final Boss aura",
      "Impossible to surprise",
    ],

    weaknesses: ["None detected."],

    hobbies: [
      "Unlocking achievements",
      "Helping beginners",
      "Collecting legends",
      "Winning effortlessly",
      "Creating new challenges",
    ],

    achievement: "🏆 100% Life Completed",

    lifeGoal: "Become the strongest legend in the Age Detector universe.",

    funFact: "Even the calculator gets nervous before showing your result.",

    warning: "Power level exceeds the recommended limit. Proceed with respect.",

    themeSong: "Final Boss Theme",
  },
};
