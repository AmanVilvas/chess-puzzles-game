import React from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';

export const LevelCard = ({ level, onClick }) => {
  /* Use Topic count instead of Puzzle count as requested */
  const count = `${level.completedTopics || 0} / ${level.totalTopics || 0}`;
  const label = 'Topics Completed';

  const isComingSoon = level.comingSoon;

  return (
    <button
      onClick={() => !isComingSoon && onClick(level)}
      disabled={isComingSoon}
      className={`w-full text-left bg-[#1a1a1a] border border-neutral-800 transition-all rounded-xl p-5 group flex items-center justify-between ${isComingSoon
          ? 'opacity-75 cursor-not-allowed'
          : 'hover:border-orange-500/50 hover:bg-[#222]'
        }`}
    >
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-lg font-semibold text-neutral-100">{level.name}</h3>
          {isComingSoon && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-500 border border-orange-500/20">
              Coming Soon
            </span>
          )}
          {(level.completion === 100 || (level.totalTopics > 0 && level.completedTopics === level.totalTopics)) && <CheckCircle2 className="w-5 h-5 text-green-500" />}
        </div>
        <p className="text-sm text-neutral-500 mb-4">{level.subtitle}</p>
        <div className={`flex items-center gap-4 sm:gap-8 ${isComingSoon ? 'opacity-50' : ''}`}>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-neutral-200">
              {isComingSoon ? '-' : count}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-500">{label}</span>
          </div>
          <div className="flex-1 max-w-[200px]">
            <div className="flex justify-between items-end mb-1">
              <span className="text-[10px] uppercase tracking-wider text-neutral-500">Completion</span>
              <span className="text-sm font-medium text-orange-500">{isComingSoon ? '0%' : `${level.completion}%`}</span>
            </div>
            <ProgressBar progress={isComingSoon ? 0 : level.completion} />
          </div>
        </div>
      </div>
      {!isComingSoon && (
        <ChevronRight className="w-6 h-6 text-neutral-600 group-hover:text-orange-500 transition-colors ml-4" />
      )}
    </button>
  );
};
