// PUBLIC_INTERFACE
import React from 'react';

/**
 * ProgressArea component for displaying user's learning progress
 */
const ProgressArea = ({ progress = 45, goal = 100 }) => {
  const progressPercentage = Math.min(Math.max((progress / goal) * 100, 0), 100);
  
  return (
    <div className="progress-section">
      <h2 className="section-title">Tu Progreso 📚</h2>
      
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>XP ganados: <strong>{progress}</strong></div>
        <div>Meta diaria: <strong>{goal}</strong></div>
      </div>
    </div>
  );
};

export default ProgressArea;
