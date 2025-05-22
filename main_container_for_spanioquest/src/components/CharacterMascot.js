// PUBLIC_INTERFACE
import React from 'react';
import { getTranslation } from '../utils/translationUtils';

/**
 * CharacterMascot component for SpanioQuest's playful animated mascot
 * Now with hover-to-translate functionality for its message
 */
const CharacterMascot = ({ onClick }) => {
  return (
    <div 
      className="character-mascot" 
      onClick={onClick}
      title={getTranslation("¡Hola! ¿Listo para aprender Español hoy?")}
    >
      🦉
    </div>
  );
};

export default CharacterMascot;
