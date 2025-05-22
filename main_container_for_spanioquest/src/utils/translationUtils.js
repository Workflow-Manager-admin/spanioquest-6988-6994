/**
 * Translation utilities for SpanioQuest
 * Contains English to Spanish mappings and translation helper functions
 */

/**
 * Map of English words/phrases to Spanish translations
 */
export const translations = {
  // Navigation tabs
  "Learn": "Aprender",
  "Practice": "Practicar", 
  "Achievements": "Logros",
  "Profile": "Perfil",
  
  // Create Family section
  "Learn better in a group!": "¡Aprende mejor en grupo!",
  "Invite your family or friends to learn together, compete in challenges, and climb the leaderboard.": "Invita a tu familia o amigos para aprender juntos, competir en desafíos y subir en la clasificación.",
  "Create a Family": "Crea una Familia",
  "Invite": "Invitar",
  "Email to invite": "Correo electrónico para invitar",
  "Send invitation": "Enviar invitación",
  "Compete in weekly challenges": "Compite en desafíos semanales",
  "Learn with your loved ones": "Aprende con tus seres queridos",
  "Track progress as a group": "Sigue el progreso en grupo",
  
  // Button texts
  "Let's go!": "¡Vamos!",
  "Continue": "Continuar",
  
  // Section titles
  "Lessons": "Lecciones",
  "Your Progress": "Tu Progreso",
  
  // Progress texts
  "XP earned": "XP ganados",
  "Daily goal": "Meta diaria",
  "days": "días",
  
  // Lesson titles
  "Basic 1": "Básico 1",
  "Basics 1": "Básicos 1",
  "Basics 2": "Básicos 2",
  "Phrases": "Frases",
  "Food": "Comida",
  "Animals": "Animales",
  "Colors": "Colores",
  
  // Basic 1 section titles
  "Greetings": "Saludos",
  "Introductions": "Presentaciones",
  "Common Objects": "Objetos Comunes",
  "Useful Phrases": "Frases Útiles",
  
  // Basic 1 section descriptions
  "Learn greetings and basic phrases": "Aprende saludos y frases básicas",
  "Common greeting phrases": "Frases comunes para saludar",
  "How to introduce yourself and ask names": "Cómo presentarse y preguntar nombres",
  "Names of everyday objects": "Nombres de objetos cotidianos",
  "Everyday expressions": "Expresiones cotidianas",
  
  // Lesson descriptions
  "Learn simple words and phrases": "Aprende palabras y frases sencillas",
  "Continue with commonly used words": "Continúa con palabras de uso común",
  "Learn useful phrases for conversation": "Aprende frases útiles para conversar",
  "Vocabulary about food and drink": "Vocabulario sobre comida y bebida",
  "Learn animal names": "Aprende los nombres de animales",
  "Color names and descriptions": "Nombres de colores y descripciones",
  
  // Mascot alert
  "Hello! Ready to learn Spanish today?": "¡Hola! ¿Listo para aprender Español hoy?",
  
  // Achievements
  "5 days in a row!": "¡5 días seguidos!",
  "Perfect!": "¡Perfecto!",
  "Basic Vocabulary": "Vocabulario Básico",
  "You've learned for 5 consecutive days": "Has aprendido por 5 días consecutivos",
  "First lesson with 100% correct answers": "Primera lección con 100% de aciertos",
  "You've learned 50 new words": "Has aprendido 50 palabras nuevas",
  
  // Basic 1 - Greetings
  "Hello": "Hola",
  "Good morning": "Buenos días",
  "Good afternoon": "Buenas tardes",
  "Good evening/night": "Buenas noches",
  "Goodbye": "Adiós",
  "See you later": "Hasta luego",
  
  // Basic 1 - Introductions
  "My name is...": "Me llamo...",
  "What is your name?": "¿Cómo te llamas?",
  "Nice to meet you": "Mucho gusto",
  "How are you?": "¿Cómo estás?",
  "I'm fine, thank you": "Estoy bien, gracias",
  "Where are you from?": "¿De dónde eres?",
  
  // Basic 1 - Common Objects
  "the book": "el libro",
  "the table": "la mesa",
  "the chair": "la silla",
  "the phone": "el teléfono",
  "the door": "la puerta",
  "the window": "la ventana",
  "the clock/watch": "el reloj",
  "the house": "la casa",
  
  // Basic 1 - Useful Phrases
  "Please": "Por favor",
  "Thank you": "Gracias",
  "You're welcome": "De nada",
  "Yes": "Sí",
  "No": "No",
  "Excuse me": "Disculpe",
  "I'm sorry": "Lo siento",
  "Do you speak English?": "¿Hablas inglés?",
  
  // Basic 1 - Exercise titles
  "Match the words": "Relaciona las palabras",
  "Complete the phrase": "Completa la frase",
  "Match each Spanish word with its English translation": "Une cada palabra en español con su traducción en inglés",
  "Write the correct word to complete each phrase": "Escribe la palabra correcta para completar cada frase",
  
  // UI Elements for Lesson Items
  "Show translation": "Mostrar traducción"
};

// Create a reverse mapping for backward compatibility
const reverseTranslations = Object.entries(translations).reduce((map, [english, spanish]) => {
  map[spanish] = english;
  return map;
}, {});

/**
 * Returns the Spanish translation for a given English text
 * 
 * @param {string} englishText - The English text to translate
 * @returns {string} The Spanish translation or the original text if no translation found
 */
export const getSpanishText = (englishText) => {
  return translations[englishText] || englishText;
};

/**
 * Returns the English text for a given Spanish text (for backward compatibility)
 * 
 * @param {string} spanishText - The Spanish text to translate
 * @returns {string} The English translation or the original text if no translation found
 */
export const getEnglishText = (spanishText) => {
  return reverseTranslations[spanishText] || spanishText;
};

/**
 * Legacy function for backwards compatibility - will be deprecated
 * 
 * @param {string} spanishText - The Spanish text to translate
 * @returns {string} The English translation or the original text if no translation found
 */
export const getTranslation = (spanishText) => {
  return getEnglishText(spanishText);
};

/**
 * Creates a tooltip text for a given English text
 * 
 * @param {string} englishText - The English text to create a tooltip for
 * @returns {string} The Spanish tooltip text or empty string if no translation found
 */
export const createTooltip = (englishText) => {
  const translation = translations[englishText];
  return translation ? translation : "";
};
