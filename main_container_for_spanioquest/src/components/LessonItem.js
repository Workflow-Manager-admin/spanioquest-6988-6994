// PUBLIC_INTERFACE
import React from 'react';
import { getTranslation } from '../utils/translationUtils';
import TranslatableText from './TranslatableText';

/**
 * LessonItem component for displaying individual vocabulary or phrase items
 * within a lesson, with both Spanish and English translations.
 * 
 * @param {Object} props - Component properties
 * @param {string} props.spanish - The Spanish text
 * @param {string} props.english - The English translation
 * @param {string} props.example - Optional example usage of the word/phrase
 * @param {boolean} props.showTranslation - Whether to show the English translation (default: false)
 * @param {function} props.onClick - Optional click handler
 */
const LessonItem = ({ 
  spanish, 
  english, 
  example, 
  showTranslation = false,
  onClick 
}) => {
  return (
    <div 
      className="lesson-item" 
      onClick={onClick}
      style={{
        backgroundColor: 'var(--spanio-white)',
        padding: '12px 16px',
        borderRadius: '12px',
        marginBottom: '10px',
        boxShadow: 'var(--shadow)',
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: example ? '8px' : '0'
      }}>
        <h4 style={{ margin: '0', color: 'var(--spanio-dark)' }}>
          <TranslatableText text={spanish} />
        </h4>
        {showTranslation && (
          <span style={{ 
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            {english}
          </span>
        )}
        {!showTranslation && (
          <button 
            className="btn-blue"
            style={{
              padding: '6px 12px',
              fontSize: '0.8rem'
            }}
            title={getTranslation("Mostrar traducción")}
            onClick={(e) => {
              e.stopPropagation();
              // Could handle showing translation here
            }}
          >
            👁️
          </button>
        )}
      </div>
      
      {example && (
        <div style={{ 
          fontSize: '0.9rem',
          fontStyle: 'italic',
          color: 'var(--text-secondary)',
          marginTop: '4px'
        }}>
          <TranslatableText text={example} />
        </div>
      )}
    </div>
  );
};

export default LessonItem;
