import React from 'react';
import { ArrowRight, Sparkles, Target } from 'lucide-react';
import { LevelCard } from '../cards/LevelCard';
import { LEVEL_SUMMARIES } from '../../data/levelSummaries';
import { getProgress, getLevelProgress } from '../../utils/progressManager';

export const LevelsView = ({ onLevelClick }) => {
  // Calculate total progress
  const progress = getProgress();
  const totalTasks = LEVEL_SUMMARIES.reduce((sum, level) => sum + level.totalPuzzles, 0);

  const totalCompleted = Object.values(progress.levels).reduce(
    (sum, level) => sum + (level.completed || 0),
    0
  );
  const overallProgress = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;

  return (
    <div className="learning-shell space-y-9">
      <section className="learning-hero flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="relative z-10 max-w-2xl">
          <span className="learning-eyebrow"><Sparkles className="h-4 w-4" /> Your chess journey</span>
          <h1 className="mb-4 mt-4 text-4xl font-black leading-[1.08] tracking-tight text-[var(--color-text-primary)] md:text-5xl">Think ahead.<br className="hidden sm:block" /> Play with confidence.</h1>
          <p className="max-w-xl text-base leading-7 text-[var(--color-text-muted)] md:text-lg">A clear path from your first moves to advanced strategy. Learn one idea, practice it, and watch your game grow.</p>
        </div>
        <div className="relative z-10 flex min-w-[220px] items-center gap-4 rounded-2xl border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/80 p-4 shadow-sm">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent-emerald), transparent 88%)', color: 'var(--color-accent-emerald)' }}><Target className="h-6 w-6" /></span>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Your progress</div>
            <div className="mt-0.5 text-2xl font-black tracking-tight text-[var(--color-text-primary)]">{overallProgress}<span className="ml-1 text-base text-[var(--color-text-muted)]">%</span></div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl" />
      </section>
      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="learning-eyebrow">The curriculum</div>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-[var(--color-text-primary)] md:text-3xl">Choose your next step</h2>
          </div>
          <span className="mb-1 rounded-full bg-[var(--color-bg-tertiary)] px-3 py-1.5 text-xs font-bold text-[var(--color-text-muted)]">10 levels</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
        {LEVEL_SUMMARIES.map(level => {
          const levelTotal = level.totalPuzzles;
          const levelCompleted = getLevelProgress(level.id).completed || 0;
          // Ensure at least 1% is shown if any progress made
          const completion = levelTotal > 0
            ? (levelCompleted > 0 ? Math.max(1, Math.round((levelCompleted / levelTotal) * 100)) : 0)
            : 0;

          // Calculate Topic Stats
          const totalTopics = level.totalTopics;
          const completedTopics = (level.topics || []).filter(topic => {
            const topicProgress = progress.topics[topic.id]?.completed || 0;
            return topic.total > 0 && topicProgress >= topic.total;
          }).length;

          // Pass detailed stats to LevelCard
          return (
            <LevelCard
              key={level.id}
              level={{
                ...level,
                completion,
                tasks: levelTotal,
                totalPuzzles: levelTotal,
                completedPuzzles: levelCompleted,
                totalTopics,
                completedTopics
              }}
              onClick={onLevelClick}
            />
          );
        })}
        </div>
      </section>
      <p className="flex items-center justify-center gap-2 pt-1 text-center text-sm text-[var(--color-text-muted)]"><ArrowRight className="h-4 w-4 text-[var(--color-accent-orange)]" /> Each level is made of short lessons and practical puzzles.</p>
    </div>
  );
};
