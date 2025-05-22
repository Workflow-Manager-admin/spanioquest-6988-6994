// PUBLIC_INTERFACE
import React from 'react';
import { getTranslation } from '../utils/translationUtils';

/**
 * CharacterMascot component for SpanioQuest's playful animated mascot
 * Now with hover-to-translate functionality for its message
 */
const CharacterMascot = ({ onClick }) => {
  // We're using a data attribute here even though we're not displaying a tooltip
  // This is helpful for testing and consistency, and future tooltip implementation
  return (
    <div 
      className="character-mascot" 
      onClick={onClick}
      data-tooltip-id="translation-tooltip" 
      data-tooltip-content={getTranslation("¡Hola! ¿Listo para aprender Español hoy?")}
    >
      🦉
    </div>
  );
};

export default CharacterMascot;
