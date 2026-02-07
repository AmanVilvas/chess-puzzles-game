import React from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';

export const LevelCard = ({ level, onClick }) => {
  const isPuzzles = level.totalPuzzles !== undefined;
  const count = isPuzzles ? `${level.completedPuzzles || 0} / ${level.totalPuzzles}` : level.topics.reduce((acc, topic) => acc + topic.blocks.length, 0);
  const label = isPuzzles ? 'Puzzles Solved' : 'Tasks';

  return (
    <button
      onClick={() => onClick(level)}
      className="w-full text-left bg-[#1a1a1a] border border-neutral-800 hover:border-orange-500/50 hover:bg-[#222] transition-all rounded-xl p-5 group flex items-center justify-between"
    >
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-lg font-semibold text-neutral-100">{level.name}</h3>
          {(level.completion === 100 || (isPuzzles && level.completedPuzzles === level.totalPuzzles && level.totalPuzzles > 0)) && <CheckCircle2 className="w-5 h-5 text-green-500" />}
        </div>
        <p className="text-sm text-neutral-500 mb-4">{level.subtitle}</p>
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-neutral-200">
              {count}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-500">{label}</span>
          </div>
          <div className="flex-1 max-w-[200px]">
            <div className="flex justify-between items-end mb-1">
              <span className="text-[10px] uppercase tracking-wider text-neutral-500">Completion</span>
              <span className="text-sm font-medium text-orange-500">{level.completion}%</span>
            </div>
            <ProgressBar progress={level.completion} />
          </div>
        </div>
      </div>
      <ChevronRight className="w-6 h-6 text-neutral-600 group-hover:text-orange-500 transition-colors ml-4" />
    </button>
  );
};
