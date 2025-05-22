// PUBLIC_INTERFACE
import React from 'react';
import { getTranslation } from '../utils/translationUtils';

/**
 * Navigation component for SpanioQuest's bottom navigation bar
 * Now with hover-to-translate functionality
 */
const Navigation = ({ activeTab = 'learn', onTabChange }) => {
  const tabs = [
    { id: 'learn', label: 'Aprender', icon: '📚' },
    { id: 'practice', label: 'Practicar', icon: '🎮' },
    { id: 'achievements', label: 'Logros', icon: '🏆' },
    { id: 'profile', label: 'Perfil', icon: '👤' }
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
            title={getTranslation(tab.label)}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
