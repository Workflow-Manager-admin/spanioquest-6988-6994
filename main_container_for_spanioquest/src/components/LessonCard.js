// PUBLIC_INTERFACE
import React from 'react';
import { getTranslation } from '../utils/translationUtils';

/**
 * LessonCard component for displaying an individual language lesson
 * Now with hover-to-translate functionality
 */
const LessonCard = ({ title, description, icon, onClick }) => {
  return (
    <div className="lesson-card" onClick={onClick}>
      <div className="lesson-icon">
        {icon}
      </div>
      <h3 
        className="lesson-title"
        data-tooltip-id="translation-tooltip" 
        data-tooltip-content={getTranslation(title)}
      >
        {title}
      </h3>
      <p 
        className="lesson-description"
        data-tooltip-id="translation-tooltip" 
        data-tooltip-content={getTranslation(description)}
      >
        {description}
      </p>
      <button 
        className="btn"
        data-tooltip-id="translation-tooltip" 
        data-tooltip-content={getTranslation("¡Vamos!")}
      >
        ¡Vamos!
      </button>
    </div>
  );
};

export default LessonCard;
