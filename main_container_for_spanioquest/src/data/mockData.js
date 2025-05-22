/**
 * Mock data for SpanioQuest app
 */

// User progress data
export const userProgress = {
  name: "Learner",
  streak: 5,
  xpTotal: 450,
  dailyGoal: 100,
  xpToday: 45,
  level: 3
};

// Lesson data
export const lessons = [
  {
    id: "basics-1",
    title: "Básicos 1",
    description: "Aprende palabras y frases sencillas",
    icon: "🏠",
    completed: true,
    xp: 10
  },
  {
    id: "basics-2",
    title: "Básicos 2",
    description: "Continúa con palabras de uso común",
    icon: "🚪",
    completed: true,
    xp: 10
  },
  {
    id: "phrases",
    title: "Frases",
    description: "Aprende frases útiles para conversar",
    icon: "💬",
    completed: false,
    xp: 15
  },
  {
    id: "food",
    title: "Comida",
    description: "Vocabulario sobre comida y bebida",
    icon: "🍎",
    completed: false,
    xp: 15
  },
  {
    id: "animals",
    title: "Animales",
    description: "Aprende los nombres de animales",
    icon: "🐶",
    completed: false,
    xp: 15
  },
  {
    id: "colors",
    title: "Colores",
    description: "Nombres de colores y descripciones",
    icon: "🎨",
    completed: false,
    xp: 15
  }
];

// Achievement data
export const achievements = [
  {
    id: "streak-5",
    title: "¡5 días seguidos!",
    description: "Has aprendido por 5 días consecutivos",
    icon: "🔥",
    unlocked: true
  },
  {
    id: "first-perfect",
    title: "¡Perfecto!",
    description: "Primera lección con 100% de aciertos",
    icon: "⭐",
    unlocked: true
  },
  {
    id: "vocabulary-50",
    title: "Vocabulario Básico",
    description: "Has aprendido 50 palabras nuevas",
    icon: "📚",
    unlocked: false
  },
];
