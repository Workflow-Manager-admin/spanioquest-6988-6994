// PUBLIC_INTERFACE
import React, { useState } from 'react';
import { getSpanishText } from '../utils/translationUtils';
import TranslatableText from './TranslatableText';

/**
 * CreateFamilyPrompt component that encourages users to create a familia/group for collaborative learning
 * Features a colorful button and playful prompt explaining the benefits
 */
const CreateFamilyPrompt = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleCreateClick = () => {
    // Placeholder function - in a real app, this would navigate to group creation flow
    setIsExpanded(!isExpanded);
    console.log('Create family button clicked');
  };

  return (
    <div className="create-family-container">
      <div className="create-family-header">
        <div className="family-icon-container">
          <span className="family-icon">👨‍👩‍👧‍👦</span>
        </div>
        <div className="family-prompt-content">
          <h3 className="family-prompt-title">
            <TranslatableText text="Learn better in a group!" />
          </h3>
          <p className="family-prompt-description">
            <TranslatableText text="Invite your family or friends to learn together, compete in challenges, and climb the leaderboard." />
          </p>
        </div>
        <button 
          className="btn btn-orange create-family-button"
          title={getSpanishText("Create a Family")}
          onClick={handleCreateClick}
        >
          Create a Family
        </button>
      </div>
      
      {isExpanded && (
        <div className="create-family-expanded">
          <div className="family-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">🏆</span>
              <p><TranslatableText text="Compete in weekly challenges" /></p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">👥</span>
              <p><TranslatableText text="Learn with your loved ones" /></p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📊</span>
              <p><TranslatableText text="Track progress as a group" /></p>
            </div>
          </div>
          
          {/* Placeholder for invite functionality */}
          <div className="invite-section">
            <input 
              type="text" 
              className="invite-input" 
              placeholder={getSpanishText("Email to invite")} 
            />
            <button 
              className="btn btn-blue invite-button"
              title={getSpanishText("Send invitation")}
            >
              <TranslatableText text="Invite" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateFamilyPrompt;
