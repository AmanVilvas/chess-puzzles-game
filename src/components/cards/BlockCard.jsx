import React from 'react';
import { BookOpen } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';
const MAX_PUZZLES_PER_BLOCK = 6;
export const BlockCard = ({ block, onClick }) => {
  const displayTotal = Math.min(block.total, MAX_PUZZLES_PER_BLOCK);
  const displayCompleted = Math.min(block.completed, displayTotal);
  const progress = displayTotal > 0 ? (displayCompleted / displayTotal) * 100 : 0;
  return (
    <button 
      onClick={onClick}
      className="bg-[#1a1a1a] border border-neutral-800 rounded-lg p-3 hover:bg-[#222] hover:border-neutral-700 transition-all text-left"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-neutral-300">{block.name}</span>
        </div>
        <span className="text-xs text-neutral-500">{displayCompleted}/{displayTotal}</span>
      </div>
      <ProgressBar progress={progress} />
    </button>
  );
};
