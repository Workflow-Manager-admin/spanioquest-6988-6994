/**
 * Mock data for SpanioQuest app
 */

// Import Basic 1 lesson data
import basicOneLessonContent from './basicOneLessonData';

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
    id: "basic-1",
    title: "Basic 1",
    description: "Learn greetings and basic phrases",
    icon: "👋",
    completed: false,
    xp: 20,
    content: basicOneLessonContent // Reference to the detailed lesson content
  },
  {
    id: "basics-1",
    title: "Basics 1",
    description: "Learn simple words and phrases",
    icon: "🏠",
    completed: true,
    xp: 10
  },
  {
    id: "basics-2",
    title: "Basics 2",
    description: "Continue with commonly used words",
    icon: "🚪",
    completed: true,
    xp: 10
  },
  {
    id: "phrases",
    title: "Phrases",
    description: "Learn useful phrases for conversation",
    icon: "💬",
    completed: false,
    xp: 15
  },
  {
    id: "food",
    title: "Food",
    description: "Vocabulary about food and drink",
    icon: "🍎",
    completed: false,
    xp: 15
  },
  {
    id: "animals",
    title: "Animals",
    description: "Learn animal names",
    icon: "🐶",
    completed: false,
    xp: 15
  },
  {
    id: "colors",
    title: "Colors",
    description: "Color names and descriptions",
    icon: "🎨",
    completed: false,
    xp: 15
  }
];

// Achievement data
export const achievements = [
  {
    id: "streak-5",
    title: "5 days in a row!",
    description: "You've learned for 5 consecutive days",
    icon: "🔥",
    unlocked: true
  },
  {
    id: "first-perfect",
    title: "Perfect!",
    description: "First lesson with 100% correct answers",
    icon: "⭐",
    unlocked: true
  },
  {
    id: "vocabulary-50",
    title: "Basic Vocabulary",
    description: "You've learned 50 new words",
    icon: "📚",
    unlocked: false
  },
];
