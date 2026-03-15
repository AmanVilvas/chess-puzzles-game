
// Level 1 Quiz Data
import { INTRO, NOTATION, PIECES } from './level1_part1.js';
import { PAWN } from './level1_part2.js';
import { ROOK, BISHOP } from './level1_part3.js';
import { QUEEN } from './level1_queen.js';
import { KNIGHT } from './level1_knight.js';
import { KING } from './level1_king.js';
import { ROLE_OF_KING, CASTLING } from './level1_part5.js';

// Level 2 Puzzle Data
import { DECOY_PUZZLES } from './level2_decoy.js';
import { MATE_IN_1_PUZZLES } from './level2_mate_in_1.js';
import { MATE_IN_2_PUZZLES } from './level2_mate_in_2.js';
import { VALUE_OF_PIECES } from './level2_value_of_pieces.js';
import { TOPIC_2_CAPTURES } from './level2_captures_and_checks.js';
import { TOPIC_3_CHECKS } from './level2_t3_discovered_check.js';
import { TOPIC_2_DOUBLE_CHECK } from './level2_t2_double_check.js';
import { TOPIC_5_LAWNMOWER, TOPIC_6_DRAW } from './level2_advanced_topics.js';
import { TOPIC_7_PAWN_STRUCTURE } from './level2_pawn_structure.js';
import { TOPIC_8_ETIQUETTE } from './level2_etiquette.js';

// Level 3 Puzzle Data
import { L3_TOPIC_1_PROTECTING, L3_TOPIC_2_DOUBLE_ATTACK, L3_TOPIC_3_PIN, L3_TOPIC_4_MATE } from './level3_part1.js';
import { L3_TOPIC_5_PAWN_ENDGAME, L3_TOPIC_6_KING_QUEEN_MATE, L3_TOPIC_7_KING_ROOK_MATE, L3_TOPIC_8_OPENING } from './level3_part2.js';

// Level 4 Puzzle Data
import { L4_TOPIC_1_DEFENSE, L4_TOPIC_2_MATE_IN_2, L4_TOPIC_3_UNDERMINING, L4_TOPIC_4_DISCOVERED } from './level4_part1.js';
import { L4_TOPIC_5_KP_VS_K, L4_TOPIC_6_PAWN_PRINCIPLES, L4_TOPIC_7_PAWN_VS_PAWN, L4_TOPIC_8_OPENINGS } from './level4_part2.js';

// Level 5 Puzzle Data
import { L5_TOPIC_1_DEFLECTION, L5_TOPIC_2_DECOY } from './level5_part1.js';
import { L5_TOPIC_3_INTERFERENCE, L5_TOPIC_4_MATE_IN_2 } from './level5_part2.js';
import { L5_TOPIC_5_MULTI_PAWN, L5_TOPIC_6_KNIGHT_ENDINGS, L5_TOPIC_7_ROOK_VS_PAWNS } from './level5_part3.js';
import { L5_TOPIC_8_OPEN_LINES, L5_TOPIC_9_CENTER, L5_TOPIC_10_OPENINGS } from './level5_part4.js';

// Helper to convert topic data to level format
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

const rawLevels = [
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
        title: DECOY_PUZZLES.title,
        blocks: DECOY_PUZZLES.blocks.map((block, blockIdx) => ({
          id: `b1-${blockIdx + 1}-2`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t2-2",
        title: VALUE_OF_PIECES.title,
        blocks: VALUE_OF_PIECES.blocks.map((block, blockIdx) => ({
          id: `b2-${blockIdx + 1}-2`,
          name: block.name || `Block ${blockIdx + 1}`,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t2-3",
        title: TOPIC_2_CAPTURES.title,
        blocks: TOPIC_2_CAPTURES.blocks.map((block, blockIdx) => ({
          id: `b3-${blockIdx + 1}-2`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t2-4",
        title: TOPIC_3_CHECKS.title,
        blocks: TOPIC_3_CHECKS.blocks.map((block, blockIdx) => ({
          id: `b4-${blockIdx + 1}-2`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t2-5",
        title: "Mate in 1",
        blocks: MATE_IN_1_PUZZLES.blocks.map((block, blockIdx) => ({
          id: `b5-${blockIdx + 1}-2`,
          name: `Block ${blockIdx + 1}`,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t2-6",
        title: TOPIC_5_LAWNMOWER.title,
        blocks: TOPIC_5_LAWNMOWER.blocks.map((block, blockIdx) => ({
          id: `b6-${blockIdx + 1}-2`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t2-7",
        title: TOPIC_6_DRAW.title,
        blocks: TOPIC_6_DRAW.blocks.map((block, blockIdx) => ({
          id: `b7-${blockIdx + 1}-2`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t2-8",
        title: TOPIC_7_PAWN_STRUCTURE.title,
        blocks: TOPIC_7_PAWN_STRUCTURE.blocks.map((block, blockIdx) => ({
          id: `b8-${blockIdx + 1}-2`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t2-9",
        title: TOPIC_8_ETIQUETTE.title,
        blocks: TOPIC_8_ETIQUETTE.blocks.map((block, blockIdx) => ({
          id: `b9-${blockIdx + 1}-2`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t2-10",
        title: TOPIC_2_DOUBLE_CHECK.title,
        blocks: TOPIC_2_DOUBLE_CHECK.blocks.map((block, blockIdx) => ({
          id: `b10-${blockIdx + 1}-2`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
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
        title: L3_TOPIC_1_PROTECTING.title,
        blocks: L3_TOPIC_1_PROTECTING.blocks.map((block, blockIdx) => ({
          id: `b1-${blockIdx + 1}-3`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t3-2",
        title: L3_TOPIC_2_DOUBLE_ATTACK.title,
        blocks: L3_TOPIC_2_DOUBLE_ATTACK.blocks.map((block, blockIdx) => ({
          id: `b2-${blockIdx + 1}-3`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t3-3",
        title: L3_TOPIC_3_PIN.title,
        blocks: L3_TOPIC_3_PIN.blocks.map((block, blockIdx) => ({
          id: `b3-${blockIdx + 1}-3`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t3-4",
        title: L3_TOPIC_4_MATE.title,
        blocks: L3_TOPIC_4_MATE.blocks.map((block, blockIdx) => ({
          id: `b4-${blockIdx + 1}-3`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t3-5",
        title: L3_TOPIC_5_PAWN_ENDGAME.title,
        blocks: L3_TOPIC_5_PAWN_ENDGAME.blocks.map((block, blockIdx) => ({
          id: `b5-${blockIdx + 1}-3`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t3-6",
        title: L3_TOPIC_6_KING_QUEEN_MATE.title,
        blocks: L3_TOPIC_6_KING_QUEEN_MATE.blocks.map((block, blockIdx) => ({
          id: `b6-${blockIdx + 1}-3`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t3-7",
        title: L3_TOPIC_7_KING_ROOK_MATE.title,
        blocks: L3_TOPIC_7_KING_ROOK_MATE.blocks.map((block, blockIdx) => ({
          id: `b7-${blockIdx + 1}-3`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t3-8",
        title: L3_TOPIC_8_OPENING.title,
        blocks: L3_TOPIC_8_OPENING.blocks.map((block, blockIdx) => ({
          id: `b8-${blockIdx + 1}-3`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
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
        title: L4_TOPIC_1_DEFENSE.title,
        blocks: L4_TOPIC_1_DEFENSE.blocks.map((block, blockIdx) => ({
          id: `b1-${blockIdx + 1}-4`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t4-2",
        title: L4_TOPIC_2_MATE_IN_2.title,
        blocks: L4_TOPIC_2_MATE_IN_2.blocks.map((block, blockIdx) => ({
          id: `b2-${blockIdx + 1}-4`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t4-3",
        title: L4_TOPIC_3_UNDERMINING.title,
        blocks: L4_TOPIC_3_UNDERMINING.blocks.map((block, blockIdx) => ({
          id: `b3-${blockIdx + 1}-4`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t4-4",
        title: L4_TOPIC_4_DISCOVERED.title,
        blocks: L4_TOPIC_4_DISCOVERED.blocks.map((block, blockIdx) => ({
          id: `b4-${blockIdx + 1}-4`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t4-5",
        title: L4_TOPIC_5_KP_VS_K.title,
        blocks: L4_TOPIC_5_KP_VS_K.blocks.map((block, blockIdx) => ({
          id: `b5-${blockIdx + 1}-4`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t4-6",
        title: L4_TOPIC_6_PAWN_PRINCIPLES.title,
        blocks: L4_TOPIC_6_PAWN_PRINCIPLES.blocks.map((block, blockIdx) => ({
          id: `b6-${blockIdx + 1}-4`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t4-7",
        title: L4_TOPIC_7_PAWN_VS_PAWN.title,
        blocks: L4_TOPIC_7_PAWN_VS_PAWN.blocks.map((block, blockIdx) => ({
          id: `b7-${blockIdx + 1}-4`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t4-8",
        title: L4_TOPIC_8_OPENINGS.title,
        blocks: L4_TOPIC_8_OPENINGS.blocks.map((block, blockIdx) => ({
          id: `b8-${blockIdx + 1}-4`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
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
        title: L5_TOPIC_1_DEFLECTION.title,
        blocks: L5_TOPIC_1_DEFLECTION.blocks.map((block, blockIdx) => ({
          id: `b1-${blockIdx + 1}-5`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t5-2",
        title: L5_TOPIC_2_DECOY.title,
        blocks: L5_TOPIC_2_DECOY.blocks.map((block, blockIdx) => ({
          id: `b2-${blockIdx + 1}-5`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t5-3",
        title: L5_TOPIC_3_INTERFERENCE.title,
        blocks: L5_TOPIC_3_INTERFERENCE.blocks.map((block, blockIdx) => ({
          id: `b3-${blockIdx + 1}-5`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t5-4",
        title: L5_TOPIC_4_MATE_IN_2.title,
        blocks: L5_TOPIC_4_MATE_IN_2.blocks.map((block, blockIdx) => ({
          id: `b4-${blockIdx + 1}-5`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t5-5",
        title: L5_TOPIC_5_MULTI_PAWN.title,
        blocks: L5_TOPIC_5_MULTI_PAWN.blocks.map((block, blockIdx) => ({
          id: `b5-${blockIdx + 1}-5`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t5-6",
        title: L5_TOPIC_6_KNIGHT_ENDINGS.title,
        blocks: L5_TOPIC_6_KNIGHT_ENDINGS.blocks.map((block, blockIdx) => ({
          id: `b6-${blockIdx + 1}-5`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t5-7",
        title: L5_TOPIC_7_ROOK_VS_PAWNS.title,
        blocks: L5_TOPIC_7_ROOK_VS_PAWNS.blocks.map((block, blockIdx) => ({
          id: `b7-${blockIdx + 1}-5`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t5-8",
        title: L5_TOPIC_8_OPEN_LINES.title,
        blocks: L5_TOPIC_8_OPEN_LINES.blocks.map((block, blockIdx) => ({
          id: `b8-${blockIdx + 1}-5`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t5-9",
        title: L5_TOPIC_9_CENTER.title,
        blocks: L5_TOPIC_9_CENTER.blocks.map((block, blockIdx) => ({
          id: `b9-${blockIdx + 1}-5`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      },
      {
        id: "t5-10",
        title: L5_TOPIC_10_OPENINGS.title,
        blocks: L5_TOPIC_10_OPENINGS.blocks.map((block, blockIdx) => ({
          id: `b10-${blockIdx + 1}-5`,
          name: block.name,
          total: block.puzzles.length,
          completed: 0,
          puzzles: block.puzzles
        }))
      }
    ]
  },
  {
    id: 6,
    comingSoon: true,
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
    comingSoon: true,
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
    comingSoon: true,
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
    comingSoon: true,
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
    comingSoon: true,
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

export const LEVELS_DATA = rawLevels.map(level => ({
  ...level,
  tasks: level.topics.reduce((acc, topic) =>
    acc + topic.blocks.reduce((bAcc, block) => bAcc + (block.puzzles?.length || 0), 0)
    , 0)
}));