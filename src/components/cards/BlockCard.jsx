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
      className="block-card-interactive w-full rounded-2xl border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md group"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 shrink-0 text-[var(--color-accent-orange)]" />
          <span className="text-sm font-bold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent-orange)]">{block.name}</span>
        </div>
        <span className="rounded-full bg-[var(--color-bg-tertiary)] px-2 py-1 text-[10px] font-bold text-[var(--color-text-muted)]">{displayCompleted}/{displayTotal}</span>
      </div>
      <ProgressBar progress={progress} />
    </button>
  );
};
