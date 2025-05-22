/**
 * Basic 1 Lesson Data for SpanioQuest
 * Contains beginner-level Spanish content organized by categories
 */

/**
 * Lesson content structured by categories
 * Each item includes English text, Spanish translation, and optional example usage
 */
export const basicOneLessonContent = {
  // Lesson metadata
  metadata: {
    id: "basic-1",
    title: "Basic 1",
    description: "Learn greetings and basic phrases",
    icon: "👋",
    expectedDuration: "15 min",
    difficulty: "beginner",
    xpReward: 20
  },
  
  // Content sections
  sections: [
    {
      id: "greetings",
      title: "Greetings",
      description: "Common greeting phrases",
      items: [
        {
          english: "Hello",
          spanish: "Hola",
          example: "Hello! My name is Ana."
        },
        {
          english: "Good morning",
          spanish: "Buenos días",
          example: "Good morning, how are you?"
        },
        {
          english: "Good afternoon",
          spanish: "Buenas tardes",
          example: "Good afternoon, professor."
        },
        {
          english: "Good evening/night",
          spanish: "Buenas noches",
          example: "Good night, see you tomorrow."
        },
        {
          english: "Goodbye",
          spanish: "Adiós",
          example: "Goodbye, see you soon."
        },
        {
          english: "See you later",
          spanish: "Hasta luego",
          example: "See you later, friend."
        }
      ]
    },
    {
      id: "introductions",
      title: "Introductions",
      description: "How to introduce yourself and ask names",
      items: [
        {
          english: "My name is...",
          spanish: "Me llamo...",
          example: "My name is Carlos."
        },
        {
          english: "What is your name?",
          spanish: "¿Cómo te llamas?",
          example: "Hello, what is your name?"
        },
        {
          english: "Nice to meet you",
          spanish: "Mucho gusto",
          example: "Nice to meet you, I'm María."
        },
        {
          english: "How are you?",
          spanish: "¿Cómo estás?",
          example: "Hello! How are you today?"
        },
        {
          english: "I'm fine, thank you",
          spanish: "Estoy bien, gracias",
          example: "I'm fine, thank you. And you?"
        },
        {
          english: "Where are you from?",
          spanish: "¿De dónde eres?",
          example: "Where are you from? I'm from Spain."
        }
      ]
    },
    {
      id: "basic-nouns",
      title: "Common Objects",
      description: "Names of everyday objects",
      items: [
        {
          english: "the book",
          spanish: "el libro",
          example: "This is the Spanish book."
        },
        {
          english: "the table",
          spanish: "la mesa",
          example: "The glass is on the table."
        },
        {
          english: "the chair",
          spanish: "la silla",
          example: "Please, sit on the chair."
        },
        {
          english: "the phone",
          spanish: "el teléfono",
          example: "My phone is new."
        },
        {
          english: "the door",
          spanish: "la puerta",
          example: "Close the door, please."
        },
        {
          english: "the window",
          spanish: "la ventana",
          example: "Open the window, it's hot."
        },
        {
          english: "the clock/watch",
          spanish: "el reloj",
          example: "What time is it on your watch?"
        },
        {
          english: "the house",
          spanish: "la casa",
          example: "My house is small but nice."
        }
      ]
    },
    {
      id: "simple-phrases",
      title: "Useful Phrases",
      description: "Everyday expressions",
      items: [
        {
          english: "Please",
          spanish: "Por favor",
          example: "A glass of water, please."
        },
        {
          english: "Thank you",
          spanish: "Gracias",
          example: "Thank you for your help."
        },
        {
          english: "You're welcome",
          spanish: "De nada",
          example: "You're welcome, it was my pleasure."
        },
        {
          english: "Yes",
          spanish: "Sí",
          example: "Yes, I like Spanish."
        },
        {
          english: "No",
          spanish: "No",
          example: "No, thank you."
        },
        {
          english: "Excuse me",
          spanish: "Disculpe",
          example: "Excuse me, where is the bathroom?"
        },
        {
          english: "I'm sorry",
          spanish: "Lo siento",
          example: "I'm sorry, I don't understand."
        },
        {
          english: "Do you speak English?",
          spanish: "¿Hablas inglés?",
          example: "Excuse me, do you speak English? I don't speak much Spanish."
        }
      ]
    }
  ],
  
  // Practice exercises
  exercises: [
    {
      type: "matching",
      title: "Match the words",
      description: "Match each Spanish word with its English translation",
      pairs: [
        { english: "Hello", spanish: "Hola" },
        { english: "Goodbye", spanish: "Adiós" },
        { english: "Please", spanish: "Por favor" },
        { english: "Thank you", spanish: "Gracias" },
        { english: "Yes", spanish: "Sí" },
        { english: "No", spanish: "No" }
      ]
    },
    {
      type: "fillBlank",
      title: "Complete the phrase",
      description: "Write the correct word to complete each phrase",
      items: [
        {
          sentence: "_____ days, how are you?",
          answer: "Good",
          options: ["Good", "Nice", "Well", "Fine"]
        },
        {
          sentence: "My _____ is Juan.",
          answer: "name",
          options: ["name", "calls", "called", "naming"]
        },
        {
          sentence: "_____ for your help.",
          answer: "Thank you",
          options: ["Please", "Thank you", "You're welcome", "I'm sorry"]
        }
      ]
    }
  ]
};

/**
 * Returns vocabulary items from all sections as a flat list
 */
export const getAllVocabularyItems = () => {
  return basicOneLessonContent.sections.flatMap(section => section.items);
};

/**
 * Returns lesson section titles and descriptions
 */
export const getLessonSections = () => {
  return basicOneLessonContent.sections.map(section => ({
    id: section.id,
    title: section.title,
    description: section.description
  }));
};

export default basicOneLessonContent;
