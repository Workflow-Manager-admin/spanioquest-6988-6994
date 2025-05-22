// PUBLIC_INTERFACE
import React from 'react';
import { getSpanishText } from '../utils/translationUtils';

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
        title={getSpanishText(title)}
      >
        {title}
      </h3>
      <p 
        className="lesson-description"
        title={getSpanishText(description)}
      >
        {description}
      </p>
      <button 
        className="btn"
        title={getSpanishText("Let's go!")}
      >
        Let's go!
      </button>
    </div>
  );
};

export default LessonCard;
