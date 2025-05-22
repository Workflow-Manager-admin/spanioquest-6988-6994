// PUBLIC_INTERFACE
import React from 'react';
import { getTranslation } from '../utils/translationUtils';

/**
 * TranslatableText component - A reusable component that shows the original Spanish text
 * and displays an English translation on hover
 * 
 * @param {Object} props - Component properties
 * @param {string} props.text - The Spanish text to be displayed and translated
 * @param {string} props.as - HTML element to render (default: 'span')
 * @param {Object} props.style - Additional styles for the component
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.useTooltip - Whether to use tooltip or inline translation (default: true)
 */
const TranslatableText = ({ 
  text, 
  as = 'span', 
  style = {}, 
  className = '', 
  useTooltip = true,
  ...props 
}) => {
  const translation = getTranslation(text);
  
  // If there's no translation available, just render the text normally
  if (!translation || translation === text) {
    const Tag = as;
    return <Tag style={style} className={className} {...props}>{text}</Tag>;
  }
  
  // Choose between tooltip or inline translation based on the useTooltip prop
  if (useTooltip) {
    const Tag = as;
    return (
      <Tag 
        data-tooltip-id="translation-tooltip" 
        data-tooltip-content={translation}
        style={style}
        className={className}
        {...props}
      >
        {text}
      </Tag>
    );
  } else {
    // Inline translation hover effect
    return (
      <span 
        className={`translatable ${className}`}
        data-translation={translation}
        style={style}
        {...props}
      >
        {text}
      </span>
    );
  }
};

export default TranslatableText;
