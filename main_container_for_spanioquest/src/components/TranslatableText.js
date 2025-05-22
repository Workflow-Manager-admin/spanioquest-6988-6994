// PUBLIC_INTERFACE
import React from 'react';
import { getSpanishText } from '../utils/translationUtils';

/**
 * TranslatableText component - A reusable component that shows English text
 * and displays a Spanish translation on hover using native HTML title attribute
 * 
 * @param {Object} props - Component properties
 * @param {string} props.text - The English text to be displayed with Spanish translation on hover
 * @param {string} props.as - HTML element to render (default: 'span')
 * @param {Object} props.style - Additional styles for the component
 * @param {string} props.className - Additional CSS classes
 */
const TranslatableText = ({ 
  text, 
  as = 'span', 
  style = {}, 
  className = '',
  ...props 
}) => {
  const translation = getSpanishText(text);
  
  // If there's no translation available, just render the text normally
  if (!translation || translation === text) {
    const Tag = as;
    return <Tag style={style} className={className} {...props}>{text}</Tag>;
  }
  
  // Use native HTML title attribute for tooltips
  const Tag = as;
  return (
    <Tag 
      title={translation}
      style={style}
      className={`translatable ${className}`}
      {...props}
    >
      {text}
    </Tag>
  );
};

export default TranslatableText;
