// PUBLIC_INTERFACE
import React from 'react';
import { getSpanishText } from '../utils/translationUtils';

/**
 * CharacterMascot component for SpanioQuest's playful animated mascot
 * Now with hover-to-translate functionality for its message
 */
const CharacterMascot = ({ onClick }) => {
  return (
    <div 
      className="character-mascot" 
      onClick={onClick}
      title={getSpanishText("Hello! Ready to learn Spanish today?")}
    >
      🦉
    </div>
  );
};

export default CharacterMascot;
