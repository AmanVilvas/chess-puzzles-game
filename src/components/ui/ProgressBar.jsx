import React from 'react';
export const ProgressBar = ({ progress, className = "" }) => (
  <div className={`w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden ${className}`}>
    <div 
      className="bg-orange-500 h-full transition-all duration-500"
      style={{ width: `${progress}%` }}
    />
  </div>
);
