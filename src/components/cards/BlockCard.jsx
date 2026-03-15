import React from 'react';
import { BookOpen } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';
export const BlockCard = ({ block, onClick }) => {
  const displayTotal = block.total || 0;
  const displayCompleted = Math.min(block.completed || 0, displayTotal);
  const progress = displayTotal > 0 ? (displayCompleted / displayTotal) * 100 : 0;
  return (
    <button
      onClick={onClick}
      className="bg-[var(--color-bg-elevated)] w-full block-card-interactive border border-[var(--color-border-primary)] rounded-lg p-3 hover:bg-[var(--color-bg-secondary)] transition-all text-left group"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-orange-500 transition-colors">{block.name}</span>
        </div>
        <span className="text-xs text-[var(--color-text-muted)]">{displayCompleted}/{displayTotal}</span>
      </div>
      <ProgressBar progress={progress} />
    </button>
  );
};
