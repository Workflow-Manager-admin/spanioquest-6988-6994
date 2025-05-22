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
        title={getTranslation(title)}
      >
        {title}
      </h3>
      <p 
        className="lesson-description"
        title={getTranslation(description)}
      >
        {description}
      </p>
      <button 
        className="btn"
        title={getTranslation("¡Vamos!")}
      >
        ¡Vamos!
      </button>
    </div>
  );
};

export default LessonCard;
