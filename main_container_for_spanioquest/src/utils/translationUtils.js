/**
 * Translation utilities for SpanioQuest
 * Contains Spanish to English mappings and translation helper functions
 */

/**
 * Map of Spanish words/phrases to English translations
 */
export const translations = {
  // Navigation tabs
  "Aprender": "Learn",
  "Practicar": "Practice", 
  "Logros": "Achievements",
  "Perfil": "Profile",
  
  // Button texts
  "¡Vamos!": "Let's go!",
  "Continuar": "Continue",
  
  // Section titles
  "Lecciones": "Lessons",
  "Tu Progreso": "Your Progress",
  
  // Progress texts
  "XP ganados": "XP earned",
  "Meta diaria": "Daily goal",
  "días": "days",
  
  // Lesson titles
  "Básicos 1": "Basics 1",
  "Básicos 2": "Basics 2",
  "Frases": "Phrases",
  "Comida": "Food",
  "Animales": "Animals",
  "Colores": "Colors",
  
  // Lesson descriptions
  "Aprende palabras y frases sencillas": "Learn simple words and phrases",
  "Continúa con palabras de uso común": "Continue with commonly used words",
  "Aprende frases útiles para conversar": "Learn useful phrases for conversation",
  "Vocabulario sobre comida y bebida": "Vocabulary about food and drink",
  "Aprende los nombres de animales": "Learn animal names",
  "Nombres de colores y descripciones": "Color names and descriptions",
  
  // Mascot alert
  "¡Hola! ¿Listo para aprender Español hoy?": "Hello! Ready to learn Spanish today?",
  
  // Achievements
  "¡5 días seguidos!": "5 days in a row!",
  "¡Perfecto!": "Perfect!",
  "Vocabulario Básico": "Basic Vocabulary",
  "Has aprendido por 5 días consecutivos": "You've learned for 5 consecutive days",
  "Primera lección con 100% de aciertos": "First lesson with 100% correct answers",
  "Has aprendido 50 palabras nuevas": "You've learned 50 new words"
};

/**
 * Returns the English translation for a given Spanish text
 * 
 * @param {string} spanishText - The Spanish text to translate
 * @returns {string} The English translation or the original text if no translation found
 */
export const getTranslation = (spanishText) => {
  return translations[spanishText] || spanishText;
};

/**
 * Creates a data-tooltip attribute value for a given Spanish text
 * 
 * @param {string} spanishText - The Spanish text to create a tooltip for
 * @returns {string} The tooltip text or empty string if no translation found
 */
export const createTooltip = (spanishText) => {
  const translation = translations[spanishText];
  return translation ? translation : "";
};
