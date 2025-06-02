import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfoData } from '../data';

interface CVLinkButtonProps {
  className?: string;
  iconClass?: string;
  text?: string;
}

export const CVLinkButton: React.FC<CVLinkButtonProps> = ({
  className = "inline-flex items-center bg-transparent border-2 border-neon-blue text-neon-blue font-semibold py-2.5 px-7 rounded-lg shadow-neon-glow-blue hover:bg-neon-blue hover:text-dark-primary transition-all duration-300 transform hover:scale-105 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark-primary",
  iconClass = "fas fa-file-invoice mr-2.5", // Icon for HTML CV
  text = "View HTML CV", // Updated text
}) => {
  if (!personalInfoData.cvUrl || personalInfoData.cvUrl.endsWith('.tex')) {
    // If cvUrl still points to .tex or is undefined, don't render or handle differently
    // This check is a safeguard, data.ts should be updated.
    console.warn("CVLinkButton: cvUrl is not configured for HTML CV page or still points to .tex");
    return null; 
  }

  const content = (
    <>
      <i className={iconClass}></i>
      {text}
    </>
  );
  
  // Link to the HTML CV page (e.g., /cv-html)
  return (
    <Link 
      to={personalInfoData.cvUrl} 
      className={className}
    >
      {content}
    </Link>
  );
};