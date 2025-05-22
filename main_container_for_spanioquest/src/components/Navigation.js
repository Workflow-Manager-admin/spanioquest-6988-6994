// PUBLIC_INTERFACE
import React from 'react';
import { getSpanishText } from '../utils/translationUtils';

/**
 * Navigation component for SpanioQuest's bottom navigation bar
 * Now with hover-to-translate functionality
 */
const Navigation = ({ activeTab = 'learn', onTabChange }) => {
  const tabs = [
    { id: 'learn', label: 'Learn', icon: '📚' },
    { id: 'practice', label: 'Practice', icon: '🎮' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ];
  
  return (
    <div className="navigation">
      {tabs.map((tab) => (
        <div 
          key={tab.id}
          className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange && onTabChange(tab.id)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span 
            className="nav-label"
            title={getSpanishText(tab.label)}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
