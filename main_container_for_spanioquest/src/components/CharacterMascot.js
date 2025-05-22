// PUBLIC_INTERFACE
import React from 'react';

/**
 * CharacterMascot component for SpanioQuest's playful animated mascot
 */
const CharacterMascot = ({ onClick }) => {
  return (
    <div className="character-mascot" onClick={onClick}>
      🦉
    </div>
  );
};

export default CharacterMascot;
