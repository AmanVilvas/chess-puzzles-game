// Level 1 Quiz Data - All topics are quiz-only (no chessboard)
import { INTRO, NOTATION, PIECES } from './level1_part1.js';
import { PAWN } from './level1_part2.js';
import { ROOK, BISHOP } from './level1_part3.js';
import { QUEEN, KNIGHT, KING } from './level1_part4.js';
import { ROLE_OF_KING, CASTLING } from './level1_part5.js';

// Level 2 Puzzle Data
import { MATE_IN_1_PUZZLES } from './level2_mate_in_1.js';
import { MATE_IN_2_PUZZLES } from './level2_mate_in_2.js';

// Helper to convert topic data to level format with embedded puzzles
const createLevel1Topics = () => {
  const topicData = [INTRO, NOTATION, PIECES, PAWN, ROOK, BISHOP, QUEEN, KNIGHT, KING, ROLE_OF_KING, CASTLING];
  return topicData.map((topic, idx) => ({
    id: `t1-${idx + 1}`,
    title: topic.title,
    blocks: topic.blocks.map((block, blockIdx) => ({
      id: `b${idx + 1}-${blockIdx + 1}-1`,
      name: `Quiz ${blockIdx + 1}`,
      total: block.puzzles.length,
      completed: 0,
      puzzles: block.puzzles
    }))
  }));
};

export const LEVELS_DATA = [
  {
    id: 1,
    name: "Level 1 - Beginner: Unrated to 200 ELO",
    subtitle: "Learn Chess: From Beginner to Club Player",
    tasks: 81,
    completion: 0,
    topics: createLevel1Topics()
  },
  {
    id: 2,
    name: "Level 2 - Club Player: 200 to 600 ELO",
    subtitle: "Learn Chess: From Beginner to Club Player",
    tasks: 963,
    completion: 0,
    topics: [
      {
        id: "t2-1",
        title: "Value of pieces",
        blocks: [
          { id: "b1-1-2", name: "Block 1", total: 20, completed: 0 },
          { id: "b1-2-2", name: "Block 2", total: 18, completed: 0 }
        ]
      },
      {
        id: "t2-2",
        title: "Simple captures",
        blocks: [
          { id: "b2-1-2", name: "Block 1", total: 106, completed: 0 },
          { id: "b2-2-2", name: "Block 2", total: 105, completed: 0 },
          { id: "b2-3-2", name: "Block 3", total: 107, completed: 0 },
          { id: "b2-4-2", name: "Block 4", total: 102, completed: 0 },
          { id: "b2-5-2", name: "Block 5", total: 185, completed: 0 }
        ]
      },
      {
        id: "t2-3",
        title: "Discovered check, double check",
        blocks: [
          { id: "b3-1-2", name: "Block 1", total: 52, completed: 0 },
          { id: "b3-2-2", name: "Block 2", total: 49, completed: 0 }
        ]
      },
      {
        id: "t2-4",
        title: "Mate in 1",
        blocks: MATE_IN_1_PUZZLES.blocks.map((block, blockIdx) => ({
          id: `b4-${blockIdx + 1}-2`,
          name: `Block ${blockIdx + 1}`,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t2-5",
        title: "Lawnmower mate",
        blocks: [
          { id: "b5-1-2", name: "Block 1", total: 19, completed: 0 }
        ]
      },
      {
        id: "t2-6",
        title: "Draw",
        blocks: [
          { id: "b6-1-2", name: "Block 1", total: 58, completed: 0 },
          { id: "b6-2-2", name: "Block 2", total: 17, completed: 0 }
        ]
      },
      {
        id: "t2-7",
        title: "Pawn structure",
        blocks: [
          { id: "b7-1-2", name: "Block 1", total: 4, completed: 0 }
        ]
      },
      {
        id: "t2-8",
        title: "Chess etiquette",
        blocks: [
          { id: "b8-1-2", name: "Block 1", total: 6, completed: 0 }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Level 3 - Club Player: 600 to 1000 ELO",
    subtitle: "Learn Chess: From Beginner to Club Player",
    tasks: 927,
    completion: 0,
    topics: [
      {
        id: "t3-1",
        title: "Protecting your pieces",
        blocks: [
          { id: "b1-1-3", name: "Block 1", total: 80, completed: 0 },
          { id: "b1-2-3", name: "Block 2", total: 44, completed: 0 },
          { id: "b1-3-3", name: "Block 3", total: 83, completed: 0 },
          { id: "b1-4-3", name: "Block 4", total: 67, completed: 0 }
        ]
      },
      {
        id: "t3-2",
        title: "Double attack",
        blocks: [
          { id: "b2-1-3", name: "Block 1", total: 51, completed: 0 },
          { id: "b2-2-3", name: "Block 2", total: 52, completed: 0 },
          { id: "b2-3-3", name: "Block 3", total: 63, completed: 0 },
          { id: "b2-4-3", name: "Block 4", total: 49, completed: 0 }
        ]
      },
      {
        id: "t3-3",
        title: "The pin",
        blocks: [
          { id: "b3-1-3", name: "Block 1", total: 109, completed: 0 },
          { id: "b3-2-3", name: "Block 2", total: 15, completed: 0 }
        ]
      },
      {
        id: "t3-4",
        title: "Mate in 1 in multi-piece positions",
        blocks: [
          { id: "b4-1-3", name: "Block 1", total: 24, completed: 0 },
          { id: "b4-2-3", name: "Block 2", total: 23, completed: 0 },
          { id: "b4-3-3", name: "Block 3", total: 20, completed: 0 },
          { id: "b4-4-3", name: "Block 4", total: 26, completed: 0 },
          { id: "b4-5-3", name: "Block 5", total: 23, completed: 0 }
        ]
      },
      {
        id: "t3-5",
        title: "Pawn endgame - the rule of the square",
        blocks: [
          { id: "b5-1-3", name: "Block 1", total: 23, completed: 0 }
        ]
      },
      {
        id: "t3-6",
        title: "Mate with king and queen",
        blocks: [
          { id: "b6-1-3", name: "Block 1", total: 49, completed: 0 }
        ]
      },
      {
        id: "t3-7",
        title: "Mate with king and rook",
        blocks: [
          { id: "b7-1-3", name: "Block 1", total: 20, completed: 0 }
        ]
      },
      {
        id: "t3-8",
        title: "Basic opening principles",
        blocks: [
          { id: "b8-1-3", name: "Block 1", total: 27, completed: 0 }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Level 4 - Intermediate: 1000 to 1200 ELO",
    subtitle: "Learn Chess: From Beginner to Club Player",
    tasks: 679,
    completion: 0,
    topics: [
      {
        id: "t4-1",
        title: "Defending against mate in 1",
        blocks: [
          { id: "b1-1-4", name: "Block 1", total: 23, completed: 0 },
          { id: "b1-2-4", name: "Block 2", total: 100, completed: 0 }
        ]
      },
      {
        id: "t4-2",
        title: "Forced mate in 2",
        blocks: MATE_IN_2_PUZZLES.blocks.map((block, blockIdx) => ({
          id: `b2-${blockIdx + 1}-4`,
          name: `Block ${blockIdx + 1}`,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t4-3",
        title: "Undermining",
        blocks: [
          { id: "b3-1-4", name: "Block 1", total: 29, completed: 0 },
          { id: "b3-2-4", name: "Block 2", total: 39, completed: 0 },
          { id: "b3-3-4", name: "Block 3", total: 37, completed: 0 },
          { id: "b3-4-4", name: "Block 4", total: 35, completed: 0 }
        ]
      },
      {
        id: "t4-4",
        title: "Discovered check - the mill",
        blocks: [
          { id: "b4-1-4", name: "Block 1", total: 30, completed: 0 }
        ]
      },
      {
        id: "t4-5",
        title: "King and pawn vs King",
        blocks: [
          { id: "b5-1-4", name: "Block 1", total: 24, completed: 0 }
        ]
      },
      {
        id: "t4-6",
        title: "Pawn endgame principles",
        blocks: [
          { id: "b6-1-4", name: "Block 1", total: 45, completed: 0 }
        ]
      },
      {
        id: "t4-7",
        title: "Pawn vs pawn",
        blocks: [
          { id: "b7-1-4", name: "Block 1", total: 19, completed: 0 }
        ]
      },
      {
        id: "t4-8",
        title: "Theory of the main openings",
        blocks: [
          { id: "b8-1-4", name: "Block 1", total: 25, completed: 0 }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Level 5 - Intermediate: 1200 to 1400 ELO",
    subtitle: "Learn Chess: From Intermediate to Advanced",
    tasks: 935,
    completion: 0,
    topics: [
      {
        id: "t5-1",
        title: "Deflection",
        blocks: [
          { id: "b1-1-5", name: "Block 1", total: 60, completed: 0 },
          { id: "b1-2-5", name: "Block 2", total: 32, completed: 0 },
          { id: "b1-3-5", name: "Block 3", total: 53, completed: 0 }
        ]
      },
      {
        id: "t5-2",
        title: "Decoy",
        blocks: [
          { id: "b2-1-5", name: "Block 1", total: 48, completed: 0 },
          { id: "b2-2-5", name: "Block 2", total: 30, completed: 0 },
          { id: "b2-3-5", name: "Block 3", total: 12, completed: 0 }
        ]
      },
      {
        id: "t5-3",
        title: "Interference",
        blocks: [
          { id: "b3-1-5", name: "Block 1", total: 60, completed: 0 },
          { id: "b3-2-5", name: "Block 2", total: 18, completed: 0 },
          { id: "b3-3-5", name: "Block 3", total: 44, completed: 0 }
        ]
      },
      {
        id: "t5-4",
        title: "Mate in 2",
        blocks: [
          { id: "b4-1-5", name: "Block 1", total: 23, completed: 0 }
        ]
      },
      {
        id: "t5-5",
        title: "Multi-pawn endings",
        blocks: [
          { id: "b5-1-5", name: "Block 1", total: 47, completed: 0 },
          { id: "b5-2-5", name: "Block 2", total: 29, completed: 0 },
          { id: "b5-3-5", name: "Block 3", total: 41, completed: 0 },
          { id: "b5-4-5", name: "Block 4", total: 44, completed: 0 }
        ]
      },
      {
        id: "t5-6",
        title: "Knight ending basics",
        blocks: [
          { id: "b6-1-5", name: "Block 1", total: 23, completed: 0 },
          { id: "b6-2-5", name: "Block 2", total: 48, completed: 0 }
        ]
      },
      {
        id: "t5-7",
        title: "Rook vs pawns",
        blocks: [
          { id: "b7-1-5", name: "Block 1", total: 25, completed: 0 },
          { id: "b7-2-5", name: "Block 2", total: 40, completed: 0 },
          { id: "b7-3-5", name: "Block 3", total: 40, completed: 0 }
        ]
      },
      {
        id: "t5-8",
        title: "Open lines and diagonals",
        blocks: [
          { id: "b8-1-5", name: "Block 1", total: 35, completed: 0 },
          { id: "b8-2-5", name: "Block 2", total: 49, completed: 0 }
        ]
      },
      {
        id: "t5-9",
        title: "The center",
        blocks: [
          { id: "b9-1-5", name: "Block 1", total: 42, completed: 0 },
          { id: "b9-2-5", name: "Block 2", total: 33, completed: 0 }
        ]
      },
      {
        id: "t5-10",
        title: "Theory of the main openings",
        blocks: [
          { id: "b10-1-5", name: "Block 1", total: 59, completed: 0 }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Level 6 - Advanced: 1400 to 1600 ELO",
    subtitle: "Learn Chess: Advanced Techniques",
    tasks: 1299,
    completion: 0,
    topics: [
      {
        id: "t6-1",
        title: "Deflection",
        blocks: [
          { id: "b1-1-6", name: "Block 1", total: 114, completed: 0 },
          { id: "b1-2-6", name: "Block 2", total: 61, completed: 0 },
          { id: "b1-3-6", name: "Block 3", total: 48, completed: 0 }
        ]
      },
      {
        id: "t6-2",
        title: "Decoy",
        blocks: [
          { id: "b2-1-6", name: "Block 1", total: 151, completed: 0 },
          { id: "b2-2-6", name: "Block 2", total: 38, completed: 0 },
          { id: "b2-3-6", name: "Block 3", total: 96, completed: 0 }
        ]
      },
      {
        id: "t6-3",
        title: "Blockade",
        blocks: [
          { id: "b3-1-6", name: "Block 1", total: 48, completed: 0 },
          { id: "b3-2-6", name: "Block 2", total: 34, completed: 0 }
        ]
      },
      {
        id: "t6-4",
        title: "Strategy in pawn endings",
        blocks: [
          { id: "b4-1-6", name: "Block 1", total: 35, completed: 0 },
          { id: "b4-2-6", name: "Block 2", total: 29, completed: 0 },
          { id: "b4-3-6", name: "Block 3", total: 54, completed: 0 }
        ]
      },
      {
        id: "t6-5",
        title: "Knight ending basics",
        blocks: [
          { id: "b5-1-6", name: "Block 1", total: 51, completed: 0 },
          { id: "b5-2-6", name: "Block 2", total: 37, completed: 0 },
          { id: "b5-3-6", name: "Block 3", total: 37, completed: 0 }
        ]
      },
      {
        id: "t6-6",
        title: "Rook and pawn vs Rook",
        blocks: [
          { id: "b6-1-6", name: "Block 1", total: 34, completed: 0 },
          { id: "b6-2-6", name: "Block 2", total: 50, completed: 0 },
          { id: "b6-3-6", name: "Block 3", total: 47, completed: 0 },
          { id: "b6-4-6", name: "Block 4", total: 50, completed: 0 }
        ]
      },
      {
        id: "t6-7",
        title: "Bishop endings - same-colored bishops",
        blocks: [
          { id: "b7-1-6", name: "Block 1", total: 23, completed: 0 },
          { id: "b7-2-6", name: "Block 2", total: 19, completed: 0 },
          { id: "b7-3-6", name: "Block 3", total: 24, completed: 0 },
          { id: "b7-4-6", name: "Block 4", total: 39, completed: 0 }
        ]
      },
      {
        id: "t6-8",
        title: "Lead in development, space advantage",
        blocks: [
          { id: "b8-1-6", name: "Block 1", total: 13, completed: 0 },
          { id: "b8-2-6", name: "Block 2", total: 18, completed: 0 }
        ]
      },
      {
        id: "t6-9",
        title: "Weak squares",
        blocks: [
          { id: "b9-1-6", name: "Block 1", total: 65, completed: 0 }
        ]
      },
      {
        id: "t6-10",
        title: "Exchange",
        blocks: [
          { id: "b10-1-6", name: "Block 1", total: 59, completed: 0 }
        ]
      },
      {
        id: "t6-11",
        title: "Theory of the main openings",
        blocks: [
          { id: "b11-1-6", name: "Block 1", total: 25, completed: 0 }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Level 7 - Advanced: 1600 to 1800 ELO",
    subtitle: "Learn Chess: Advanced Techniques",
    tasks: 606,
    completion: 0,
    topics: [
      {
        id: "t7-1",
        title: "Training the calculation skills",
        blocks: [
          { id: "b1-1-7", name: "Block 1", total: 44, completed: 0 }
        ]
      },
      {
        id: "t7-2",
        title: "Forced mate in 3 and 4 moves",
        blocks: [
          { id: "b2-1-7", name: "Block 1", total: 56, completed: 0 },
          { id: "b2-2-7", name: "Block 2", total: 64, completed: 0 },
          { id: "b2-3-7", name: "Block 3", total: 37, completed: 0 }
        ]
      },
      {
        id: "t7-3",
        title: "Bishop endings - opposite-colored bishops",
        blocks: [
          { id: "b3-1-7", name: "Block 1", total: 30, completed: 0 },
          { id: "b3-2-7", name: "Block 2", total: 29, completed: 0 }
        ]
      },
      {
        id: "t7-4",
        title: "Rook endings",
        blocks: [
          { id: "b4-1-7", name: "Block 1", total: 36, completed: 0 },
          { id: "b4-2-7", name: "Block 2", total: 21, completed: 0 },
          { id: "b4-3-7", name: "Block 3", total: 28, completed: 0 }
        ]
      },
      {
        id: "t7-5",
        title: "Queen endings",
        blocks: [
          { id: "b5-1-7", name: "Block 1", total: 30, completed: 0 }
        ]
      },
      {
        id: "t7-6",
        title: "Playing in the middlegame",
        blocks: [
          { id: "b6-1-7", name: "Block 1", total: 27, completed: 0 }
        ]
      },
      {
        id: "t7-7",
        title: "Strategy - attack on the king",
        blocks: [
          { id: "b7-1-7", name: "Block 1", total: 17, completed: 0 }
        ]
      },
      {
        id: "t7-8",
        title: "Isolated pawn",
        blocks: [
          { id: "b8-1-7", name: "Block 1", total: 47, completed: 0 },
          { id: "b8-2-7", name: "Block 2", total: 47, completed: 0 }
        ]
      },
      {
        id: "t7-9",
        title: "Hanging pawns",
        blocks: [
          { id: "b9-1-7", name: "Block 1", total: 19, completed: 0 }
        ]
      },
      {
        id: "t7-10",
        title: "Theory of the main openings",
        blocks: [
          { id: "b10-1-7", name: "Block 1", total: 26, completed: 0 },
          { id: "b10-2-7", name: "Block 2", total: 48, completed: 0 }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Level 8 - Expert: 1800 to 2000 ELO",
    subtitle: "Learn Chess: Expert Level",
    tasks: 255,
    completion: 0,
    topics: [
      {
        id: "t8-1",
        title: "Tactics",
        blocks: [
          { id: "b1-1-8", name: "Block 1", total: 96, completed: 0 }
        ]
      },
      {
        id: "t8-2",
        title: "Strategy - attacking on the queenside",
        blocks: [
          { id: "b2-1-8", name: "Block 1", total: 6, completed: 0 }
        ]
      },
      {
        id: "t8-3",
        title: "Rook endings",
        blocks: [
          { id: "b3-1-8", name: "Block 1", total: 50, completed: 0 },
          { id: "b3-2-8", name: "Block 2", total: 57, completed: 0 },
          { id: "b3-3-8", name: "Block 3", total: 46, completed: 0 }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Level 9 - Expert: 2000 to 2200 ELO",
    subtitle: "Learn Chess: Expert Level",
    tasks: 320,
    completion: 0,
    topics: [
      {
        id: "t9-1",
        title: "Middlegame",
        blocks: [
          { id: "b1-1-9", name: "Block 1", total: 18, completed: 0 }
        ]
      },
      {
        id: "t9-2",
        title: "Openings",
        blocks: [
          { id: "b2-1-9", name: "Block 1", total: 31, completed: 0 }
        ]
      },
      {
        id: "t9-3",
        title: "Tactics",
        blocks: [
          { id: "b3-1-9", name: "Block 1", total: 30, completed: 0 }
        ]
      },
      {
        id: "t9-4",
        title: "Strategy - defense and counterattack",
        blocks: [
          { id: "b4-1-9", name: "Block 1", total: 20, completed: 0 }
        ]
      },
      {
        id: "t9-5",
        title: "Rook vs bishop in the endgame",
        blocks: [
          { id: "b5-1-9", name: "Block 1", total: 30, completed: 0 },
          { id: "b5-2-9", name: "Block 2", total: 25, completed: 0 },
          { id: "b5-3-9", name: "Block 3", total: 45, completed: 0 },
          { id: "b5-4-9", name: "Block 4", total: 38, completed: 0 }
        ]
      },
      {
        id: "t9-6",
        title: "Rook vs knight in the endgame",
        blocks: [
          { id: "b6-1-9", name: "Block 1", total: 30, completed: 0 },
          { id: "b6-2-9", name: "Block 2", total: 30, completed: 0 },
          { id: "b6-3-9", name: "Block 3", total: 23, completed: 0 }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Level 10 - Master: 2200 ELO and up",
    subtitle: "Learn Chess: Master Level",
    tasks: 274,
    completion: 0,
    topics: [
      {
        id: "t10-1",
        title: "Middlegame",
        blocks: [
          { id: "b1-1-10", name: "Block 1", total: 29, completed: 0 }
        ]
      },
      {
        id: "t10-2",
        title: "Openings",
        blocks: [
          { id: "b2-1-10", name: "Block 1", total: 66, completed: 0 }
        ]
      },
      {
        id: "t10-3",
        title: "Tactics",
        blocks: [
          { id: "b3-1-10", name: "Block 1", total: 96, completed: 0 }
        ]
      },
      {
        id: "t10-4",
        title: "Bishop vs knight in the endgame",
        blocks: [
          { id: "b4-1-10", name: "Block 1", total: 83, completed: 0 }
        ]
      }
    ]
  }
];