// PUBLIC_INTERFACE
import React, { useState } from 'react';
import { getTranslation } from '../utils/translationUtils';
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
            <TranslatableText text="¡Aprende mejor en grupo!" />
          </h3>
          <p className="family-prompt-description">
            <TranslatableText text="Invita a tu familia o amigos para aprender juntos, competir en desafíos y subir en la clasificación." />
          </p>
        </div>
        <button 
          className="btn btn-orange create-family-button"
          title={getTranslation("Crea una Familia")}
          onClick={handleCreateClick}
        >
          Crea una Familia
        </button>
      </div>
      
      {isExpanded && (
        <div className="create-family-expanded">
          <div className="family-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">🏆</span>
              <p><TranslatableText text="Compite en desafíos semanales" /></p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">👥</span>
              <p><TranslatableText text="Aprende con tus seres queridos" /></p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📊</span>
              <p><TranslatableText text="Sigue el progreso en grupo" /></p>
            </div>
          </div>
          
          {/* Placeholder for invite functionality */}
          <div className="invite-section">
            <input 
              type="text" 
              className="invite-input" 
              placeholder={getTranslation("Correo electrónico para invitar")} 
            />
            <button 
              className="btn btn-blue invite-button"
              title={getTranslation("Enviar invitación")}
            >
              <TranslatableText text="Invitar" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateFamilyPrompt;
