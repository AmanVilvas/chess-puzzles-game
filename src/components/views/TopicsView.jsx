import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { BlockCard } from '../cards/BlockCard';
import { getBlockProgress } from '../../utils/progressManager';

export const TopicsView = ({ level, onBack, onStartPuzzle }) => (
  <div className="max-w-5xl mx-auto p-4 md:p-8">
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors group"
    >
      <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      Back to Levels
    </button>
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-white mb-2">{level.name}</h1>
      <p className="text-neutral-500">{level.subtitle}</p>
    </div>
    <div className="space-y-12">
      {level.topics.map((topic, idx) => (
        <section key={topic.id} className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-orange-500 font-bold text-lg">{idx + 1}.</span>
            <h2 className="text-xl font-bold text-neutral-200">{topic.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topic.blocks.slice(0, 5).map((block, blockIdx) => {
              // Get real-time progress for this block
              const progress = getBlockProgress(block.id, level.id, topic.id);
              const blockWithProgress = {
                ...block,
                completed: progress.completed || 0
              };

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
