// PUBLIC_INTERFACE
import React from 'react';
import { getSpanishText } from '../utils/translationUtils';

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
        title={getSpanishText("Your Progress")}
      >
        Your Progress 📚
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
            title={getSpanishText("XP earned")}
          >
            XP earned
          </span>: <strong>{progress}</strong>
        </div>
        <div>
          <span 
            className="translatable" 
            title={getSpanishText("Daily goal")}
          >
            Daily goal
          </span>: <strong>{goal}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProgressArea;
