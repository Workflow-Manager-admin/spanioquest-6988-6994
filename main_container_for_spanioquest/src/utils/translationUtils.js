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
  "Básico 1": "Basic 1",
  "Básicos 1": "Basics 1",
  "Básicos 2": "Basics 2",
  "Frases": "Phrases",
  "Comida": "Food",
  "Animales": "Animals",
  "Colores": "Colors",
  
  // Basic 1 section titles
  "Saludos": "Greetings",
  "Presentaciones": "Introductions",
  "Objetos Comunes": "Common Objects",
  "Frases Útiles": "Useful Phrases",
  
  // Basic 1 section descriptions
  "Aprende saludos y frases básicas": "Learn greetings and basic phrases",
  "Frases comunes para saludar": "Common greeting phrases",
  "Cómo presentarse y preguntar nombres": "How to introduce yourself and ask names",
  "Nombres de objetos cotidianos": "Names of everyday objects",
  "Expresiones cotidianas": "Everyday expressions",
  
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
  "Has aprendido 50 palabras nuevas": "You've learned 50 new words",
  
  // Basic 1 - Greetings
  "Hola": "Hello",
  "Buenos días": "Good morning",
  "Buenas tardes": "Good afternoon",
  "Buenas noches": "Good evening/night",
  "Adiós": "Goodbye",
  "Hasta luego": "See you later",
  
  // Basic 1 - Introductions
  "Me llamo...": "My name is...",
  "¿Cómo te llamas?": "What is your name?",
  "Mucho gusto": "Nice to meet you",
  "¿Cómo estás?": "How are you?",
  "Estoy bien, gracias": "I'm fine, thank you",
  "¿De dónde eres?": "Where are you from?",
  
  // Basic 1 - Common Objects
  "el libro": "the book",
  "la mesa": "the table",
  "la silla": "the chair",
  "el teléfono": "the phone",
  "la puerta": "the door",
  "la ventana": "the window",
  "el reloj": "the clock/watch",
  "la casa": "the house",
  
  // Basic 1 - Useful Phrases
  "Por favor": "Please",
  "Gracias": "Thank you",
  "De nada": "You're welcome",
  "Sí": "Yes",
  "No": "No",
  "Disculpe": "Excuse me",
  "Lo siento": "I'm sorry",
  "¿Hablas inglés?": "Do you speak English?",
  
  // Basic 1 - Exercise titles
  "Relaciona las palabras": "Match the words",
  "Completa la frase": "Complete the phrase",
  "Une cada palabra en español con su traducción en inglés": "Match each Spanish word with its English translation",
  "Escribe la palabra correcta para completar cada frase": "Write the correct word to complete each phrase"
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
