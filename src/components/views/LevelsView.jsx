import React from 'react';
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
    <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-4">
      <div className="flex justify-between items-end mb-8 border-b border-[var(--color-border-primary)] pb-6">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">Chess Training</h1>
          <p className="text-[var(--color-text-muted)]">Master every phase of the game from beginner to grandmaster.</p>
        </div>
        <div className="hidden md:block text-right">
          <div className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Total Progress</div>
          <div className="text-2xl font-mono text-orange-500 font-bold">
            {overallProgress}% Completed
          </div>
        </div>
      </div>
      <div className="grid gap-3">
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
    </div>
  );
};
