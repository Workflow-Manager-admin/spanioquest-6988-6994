// PUBLIC_INTERFACE
import React from 'react';

/**
 * LessonCard component for displaying an individual language lesson
 */
const LessonCard = ({ title, description, icon, onClick }) => {
  return (
    <div className="lesson-card" onClick={onClick}>
      <div className="lesson-icon">
        {icon}
      </div>
      <h3 className="lesson-title">{title}</h3>
      <p className="lesson-description">{description}</p>
      <button className="btn">¡Vamos!</button>
    </div>
  );
};

export default LessonCard;
