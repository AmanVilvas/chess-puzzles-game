import React from 'react';
import { ArrowUpRight, BookOpen, CheckCircle2, LockKeyhole } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';

export const LevelCard = ({ level, onClick }) => {
  const isComingSoon = level.comingSoon;
  const completedTopics = level.completedTopics || 0;
  const totalTopics = level.totalTopics || 0;

  return (
    <button
      onClick={() => !isComingSoon && onClick(level)}
      disabled={isComingSoon}
      className="learning-card group w-full text-left"
    >
      <div className="flex h-full flex-col justify-between gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <span className="learning-icon shrink-0">
              {isComingSoon ? <LockKeyhole className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
            </span>
            <div className="min-w-0">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[var(--color-accent-orange)]">Level {level.id}</span>
                {isComingSoon && <span className="rounded-full bg-[var(--color-bg-tertiary)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Coming soon</span>}
                {level.completion === 100 && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
              </div>
              <h3 className="text-base font-extrabold leading-snug tracking-tight text-[var(--color-text-primary)]">{level.name.replace(/^Level \d+ - /, '')}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-text-muted)]">{level.subtitle}</p>
            </div>
          </div>
          {!isComingSoon && <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--color-text-muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent-orange)]" />}
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--color-text-muted)]">{isComingSoon ? 'New lessons on the way' : `${completedTopics} of ${totalTopics} topics complete`}</span>
            <span className="font-extrabold text-[var(--color-text-primary)]">{isComingSoon ? 'Soon' : `${level.completion}%`}</span>
          </div>
          <ProgressBar progress={isComingSoon ? 0 : level.completion} />
        </div>
      </div>
    </button>
  );
};
