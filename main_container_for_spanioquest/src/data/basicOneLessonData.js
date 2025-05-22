/**
 * Basic 1 Lesson Data for SpanioQuest
 * Contains beginner-level Spanish content organized by categories
 */

/**
 * Lesson content structured by categories
 * Each item includes Spanish text, English translation, and optional example usage
 */
export const basicOneLessonContent = {
  // Lesson metadata
  metadata: {
    id: "basic-1",
    title: "Básico 1",
    description: "Aprende saludos y frases básicas",
    icon: "👋",
    expectedDuration: "15 min",
    difficulty: "beginner",
    xpReward: 20
  },
  
  // Content sections
  sections: [
    {
      id: "greetings",
      title: "Saludos",
      description: "Frases comunes para saludar",
      items: [
        {
          spanish: "Hola",
          english: "Hello",
          example: "¡Hola! Me llamo Ana."
        },
        {
          spanish: "Buenos días",
          english: "Good morning",
          example: "Buenos días, ¿cómo estás?"
        },
        {
          spanish: "Buenas tardes",
          english: "Good afternoon",
          example: "Buenas tardes, profesor."
        },
        {
          spanish: "Buenas noches",
          english: "Good evening/night",
          example: "Buenas noches, hasta mañana."
        },
        {
          spanish: "Adiós",
          english: "Goodbye",
          example: "Adiós, nos vemos pronto."
        },
        {
          spanish: "Hasta luego",
          english: "See you later",
          example: "Hasta luego, amigo."
        }
      ]
    },
    {
      id: "introductions",
      title: "Presentaciones",
      description: "Cómo presentarse y preguntar nombres",
      items: [
        {
          spanish: "Me llamo...",
          english: "My name is...",
          example: "Me llamo Carlos."
        },
        {
          spanish: "¿Cómo te llamas?",
          english: "What is your name?",
          example: "Hola, ¿cómo te llamas?"
        },
        {
          spanish: "Mucho gusto",
          english: "Nice to meet you",
          example: "Mucho gusto, soy María."
        },
        {
          spanish: "¿Cómo estás?",
          english: "How are you?",
          example: "¡Hola! ¿Cómo estás hoy?"
        },
        {
          spanish: "Estoy bien, gracias",
          english: "I'm fine, thank you",
          example: "Estoy bien, gracias. ¿Y tú?"
        },
        {
          spanish: "¿De dónde eres?",
          english: "Where are you from?",
          example: "¿De dónde eres? Yo soy de España."
        }
      ]
    },
    {
      id: "basic-nouns",
      title: "Objetos Comunes",
      description: "Nombres de objetos cotidianos",
      items: [
        {
          spanish: "el libro",
          english: "the book",
          example: "Este es el libro de español."
        },
        {
          spanish: "la mesa",
          english: "the table",
          example: "El vaso está en la mesa."
        },
        {
          spanish: "la silla",
          english: "the chair",
          example: "Por favor, siéntate en la silla."
        },
        {
          spanish: "el teléfono",
          english: "the phone",
          example: "Mi teléfono es nuevo."
        },
        {
          spanish: "la puerta",
          english: "the door",
          example: "Cierra la puerta, por favor."
        },
        {
          spanish: "la ventana",
          english: "the window",
          example: "Abre la ventana, hace calor."
        },
        {
          spanish: "el reloj",
          english: "the clock/watch",
          example: "¿Qué hora es en tu reloj?"
        },
        {
          spanish: "la casa",
          english: "the house",
          example: "Mi casa es pequeña pero bonita."
        }
      ]
    },
    {
      id: "simple-phrases",
      title: "Frases Útiles",
      description: "Expresiones cotidianas",
      items: [
        {
          spanish: "Por favor",
          english: "Please",
          example: "Un vaso de agua, por favor."
        },
        {
          spanish: "Gracias",
          english: "Thank you",
          example: "Gracias por tu ayuda."
        },
        {
          spanish: "De nada",
          english: "You're welcome",
          example: "De nada, fue un placer."
        },
        {
          spanish: "Sí",
          english: "Yes",
          example: "Sí, me gusta el español."
        },
        {
          spanish: "No",
          english: "No",
          example: "No, gracias."
        },
        {
          spanish: "Disculpe",
          english: "Excuse me",
          example: "Disculpe, ¿dónde está el baño?"
        },
        {
          spanish: "Lo siento",
          english: "I'm sorry",
          example: "Lo siento, no entiendo."
        },
        {
          spanish: "¿Hablas inglés?",
          english: "Do you speak English?",
          example: "Disculpe, ¿hablas inglés? No hablo mucho español."
        }
      ]
    }
  ],
  
  // Practice exercises
  exercises: [
    {
      type: "matching",
      title: "Relaciona las palabras",
      description: "Une cada palabra en español con su traducción en inglés",
      pairs: [
        { spanish: "Hola", english: "Hello" },
        { spanish: "Adiós", english: "Goodbye" },
        { spanish: "Por favor", english: "Please" },
        { spanish: "Gracias", english: "Thank you" },
        { spanish: "Sí", english: "Yes" },
        { spanish: "No", english: "No" }
      ]
    },
    {
      type: "fillBlank",
      title: "Completa la frase",
      description: "Escribe la palabra correcta para completar cada frase",
      items: [
        {
          sentence: "_____ días, ¿cómo estás?",
          answer: "Buenos",
          options: ["Buenos", "Buenas", "Bien", "Buen"]
        },
        {
          sentence: "Me _____ Juan.",
          answer: "llamo",
          options: ["llamo", "llamas", "llamar", "llamamos"]
        },
        {
          sentence: "_____ por tu ayuda.",
          answer: "Gracias",
          options: ["Por favor", "Gracias", "De nada", "Lo siento"]
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
