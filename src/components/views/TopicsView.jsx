import React from 'react';
import { BookOpenCheck, ChevronLeft, Compass, Sparkles } from 'lucide-react';
import { BlockCard } from '../cards/BlockCard';
import { getBlockProgress } from '../../utils/progressManager';

export const TopicsView = ({ level, onBack, onStartPuzzle }) => (
  <div className="learning-shell space-y-9">
    <button
      onClick={onBack}
      className="inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-bold text-[var(--color-text-muted)] transition hover:bg-[var(--color-hover)] hover:text-[var(--color-text-primary)]"
    >
      <ChevronLeft className="h-4 w-4" /> Learning path
    </button>

    <header className="learning-hero">
      <span className="learning-eyebrow"><Compass className="h-4 w-4" /> Level {level.id} learning path</span>
      <h1 className="mb-3 mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] md:text-4xl">{level.name.replace(/^Level \d+ - /, '')}</h1>
      <p className="max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">{level.subtitle}. Pick a topic to explore, then practice with a short set of puzzles.</p>
      <div className="mt-7 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/80 px-3 py-1.5 text-xs font-bold text-[var(--color-text-secondary)]"><BookOpenCheck className="h-4 w-4 text-[var(--color-accent-orange)]" /> {level.topics.length} topics</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/80 px-3 py-1.5 text-xs font-bold text-[var(--color-text-secondary)]"><Sparkles className="h-4 w-4 text-emerald-500" /> Learn at your pace</span>
      </div>
    </header>

    <div className="space-y-8">
      {level.topics.map((topic, idx) => (
        <section key={topic.id} className="rounded-3xl border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/75 p-5 shadow-sm sm:p-7">
          <div className="mb-5 flex items-start gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-sm font-black text-[var(--color-accent-orange)]" style={{ backgroundColor: 'var(--color-hover)' }}>{String(idx + 1).padStart(2, '0')}</span>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Topic {idx + 1}</div>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[var(--color-text-primary)]">{topic.title}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topic.blocks.slice(0, 5).map((block, blockIdx) => {
              const progress = getBlockProgress(block.id, level.id, topic.id);
              const blockWithProgress = { ...block, completed: progress.completed || 0 };

              return (
                <BlockCard
                  key={block.id}
                  block={blockWithProgress}
                  onClick={() => onStartPuzzle(topic, blockWithProgress, blockIdx + 1)}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  </div>
);
