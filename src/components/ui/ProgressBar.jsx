import React from 'react';
export const ProgressBar = ({ progress, className = "" }) => (
  <div className={`w-full rounded-full h-2 overflow-hidden ${className}`} style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
    <div 
      className="h-full rounded-full transition-all duration-500"
      style={{ width: `${progress}%`, background: 'linear-gradient(90deg, var(--color-accent-orange), #9a83ff)' }}
    />
  </div>
);
