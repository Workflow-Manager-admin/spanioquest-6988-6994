// PUBLIC_INTERFACE
import React from 'react';
import { getSpanishText } from '../utils/translationUtils';
import TranslatableText from './TranslatableText';

/**
 * Header component for SpanioQuest displaying logo, mascot, and user info
 */
const Header = ({ username = "Learner" }) => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-mascot">🦉</div>
        <span>SpanioQuest</span>
      </div>
      
      <div className="user-info">
        <div className="streak-count">
          <span className="streak-icon">🔥</span>
          <span>
            5 <TranslatableText text="days" />
          </span>
        </div>
        <div className="user-avatar">
          {username.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
};

export default Header;
