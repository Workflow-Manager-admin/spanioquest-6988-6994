// PUBLIC_INTERFACE
import React from 'react';
import { getTranslation } from '../utils/translationUtils';

/**
 * ProgressArea component for displaying user's learning progress
 * Now with hover-to-translate functionality
 */
const ProgressArea = ({ progress = 45, goal = 100 }) => {
  const progressPercentage = Math.min(Math.max((progress / goal) * 100, 0), 100);
  
  return (
    <div className="progress-section">
      <h2 
        className="section-title"
        data-tooltip-id="translation-tooltip" 
        data-tooltip-content={getTranslation("Tu Progreso")}
      >
        Tu Progreso 📚
      </h2>
      
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span 
            className="translatable" 
            data-translation={getTranslation("XP ganados")}
          >
            XP ganados
          </span>: <strong>{progress}</strong>
        </div>
        <div>
          <span 
            className="translatable" 
            data-translation={getTranslation("Meta diaria")}
          >
            Meta diaria
          </span>: <strong>{goal}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProgressArea;
