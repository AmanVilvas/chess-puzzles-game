// Lightweight catalog used on the landing page. Puzzle data is loaded only
// after a learner opens a level.
export const LEVEL_SUMMARIES = [
  { id: 1, name: 'Level 1 - Beginner: Unrated to 200 ELO', subtitle: 'Learn Chess: From Beginner to Club Player', totalTopics: 11, topics: [29, 30, 30, 50, 50, 50, 50, 40, 50, 45, 25].map((total, i) => ({ id: `t1-${i + 1}`, total })), totalPuzzles: 449 },
  { id: 2, name: 'Level 2 - Club Player: 200 to 600 ELO', subtitle: 'Learn Chess: From Beginner to Club Player', totalTopics: 11, topics: [100, 50, 250, 50, 100, 50, 50, 50, 10, 50, 50].map((total, i) => ({ id: `t2-${i + 1}`, total })), totalPuzzles: 810 },
  { id: 3, name: 'Level 3 - Club Player: 600 to 1000 ELO', subtitle: 'Learn Chess: From Beginner to Club Player', totalTopics: 8, topics: [12, 12, 3, 3, 2, 3, 3, 3].map((total, i) => ({ id: `t3-${i + 1}`, total })), totalPuzzles: 41 },
  { id: 4, name: 'Level 4 - Intermediate: 1000 to 1200 ELO', subtitle: 'Learn Chess: From Beginner to Club Player', totalTopics: 8, topics: [3, 3, 1, 1, 2, 1, 1, 2].map((total, i) => ({ id: `t4-${i + 1}`, total })), totalPuzzles: 14 },
  { id: 5, name: 'Level 5 - Intermediate: 1200 to 1400 ELO', subtitle: 'Learn Chess: From Intermediate to Advanced', totalTopics: 10, topics: [1, 1, 1, 1, 4, 2, 3, 2, 2, 2].map((total, i) => ({ id: `t5-${i + 1}`, total })), totalPuzzles: 19 },
  { id: 6, name: 'Level 6 - Advanced: 1400 to 1600 ELO', subtitle: 'Learn Chess: Advanced Techniques', comingSoon: true, totalTopics: 11, totalPuzzles: 1299 },
  { id: 7, name: 'Level 7 - Advanced: 1600 to 1800 ELO', subtitle: 'Learn Chess: Advanced Techniques', comingSoon: true, totalTopics: 10, totalPuzzles: 606 },
  { id: 8, name: 'Level 8 - Expert: 1800 to 2000 ELO', subtitle: 'Learn Chess: Expert Level', comingSoon: true, totalTopics: 3, totalPuzzles: 255 },
  { id: 9, name: 'Level 9 - Expert: 2000 to 2200 ELO', subtitle: 'Learn Chess: Expert Level', comingSoon: true, totalTopics: 6, totalPuzzles: 320 },
  { id: 10, name: 'Level 10 - Master: 2200 ELO and up', subtitle: 'Learn Chess: Master Level', totalTopics: 4, topics: [29, 66, 96, 83].map((total, i) => ({ id: `t10-${i + 1}`, total })), totalPuzzles: 274 },
];
