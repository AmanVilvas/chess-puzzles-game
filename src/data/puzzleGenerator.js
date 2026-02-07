import { Chess } from 'chess.js';
const MAX_PUZZLES_PER_BLOCK = 6;
const PUZZLE_DATABASE = {
  introduction: [
    {
      fen: "8/8/8/8/8/8/8/4K3 w - - 0 1",
      solution: ["e1e2"],
      goal: "Move the king forward",
      turn: "w",
      rating: 100,
      themes: ["basics", "introduction"]
    },
    {
      fen: "8/8/8/8/8/8/PPPPPPPP/RNBQKBNR w KQ - 0 1",
      solution: ["e2e4"],
      goal: "Move the pawn two squares",
      turn: "w",
      rating: 120,
      themes: ["basics", "pawn"]
    },
    {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["g1f3"],
      goal: "Develop the knight",
      turn: "w",
      rating: 130,
      themes: ["basics", "development"]
    },
    {
      fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      solution: ["e7e5"],
      goal: "Mirror the pawn move",
      turn: "b",
      rating: 140,
      themes: ["basics", "opening"]
    },
    {
      fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
      solution: ["f1c4"],
      goal: "Develop the bishop",
      turn: "w",
      rating: 150,
      themes: ["basics", "development"]
    },
  ],
  notation: [
    {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["e2e4"],
      goal: "Play e4",
      turn: "w",
      rating: 150,
      themes: ["notation", "basics"]
    },
    {
      fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      solution: ["e7e5"],
      goal: "Play e5",
      turn: "b",
      rating: 160,
      themes: ["notation", "basics"]
    },
    {
      fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
      solution: ["g1f3"],
      goal: "Play Nf3",
      turn: "w",
      rating: 170,
      themes: ["notation", "knight"]
    },
    {
      fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
      solution: ["b8c6"],
      goal: "Play Nc6",
      turn: "b",
      rating: 180,
      themes: ["notation", "knight"]
    },
  ],
  pawn: [
    {
      fen: "8/8/8/8/8/8/4P3/8 w - - 0 1",
      solution: ["e2e4"],
      goal: "Advance the pawn",
      turn: "w",
      rating: 180,
      themes: ["pawn", "basics"]
    },
    {
      fen: "8/8/8/8/3p4/4P3/8/8 w - - 0 1",
      solution: ["e3d4"],
      goal: "Capture with pawn",
      turn: "w",
      rating: 200,
      themes: ["pawn", "capture"]
    },
    {
      fen: "8/8/8/8/8/3p4/4P3/8 w - - 0 1",
      solution: ["e2e3"],
      goal: "Advance one square",
      turn: "w",
      rating: 190,
      themes: ["pawn", "basics"]
    },
    {
      fen: "8/4p3/8/8/8/8/4P3/8 w - - 0 1",
      solution: ["e2e4"],
      goal: "Two square advance",
      turn: "w",
      rating: 195,
      themes: ["pawn", "basics"]
    },
    {
      fen: "8/8/8/3pP3/8/8/8/8 w - d6 0 1",
      solution: ["e5d6"],
      goal: "En passant capture",
      turn: "w",
      rating: 220,
      themes: ["pawn", "en passant"]
    },
  ],
  rook: [
    {
      fen: "8/8/8/8/8/8/8/R6K w - - 0 1",
      solution: ["a1a8"],
      goal: "Move rook to the 8th rank",
      turn: "w",
      rating: 220,
      themes: ["rook", "basics"]
    },
    {
      fen: "7k/8/8/8/8/8/8/R6K w - - 0 1",
      solution: ["a1h1"],
      goal: "Checkmate with rook",
      turn: "w",
      rating: 240,
      themes: ["rook", "checkmate"]
    },
    {
      fen: "8/8/8/8/8/8/r7/R6K w - - 0 1",
      solution: ["a1a2"],
      goal: "Capture the rook",
      turn: "w",
      rating: 230,
      themes: ["rook", "capture"]
    },
    {
      fen: "7k/8/8/8/8/8/R7/7K w - - 0 1",
      solution: ["a2a8"],
      goal: "Give check",
      turn: "w",
      rating: 235,
      themes: ["rook", "check"]
    },
    {
      fen: "r6k/8/6K1/8/8/8/8/R7 w - - 0 1",
      solution: ["a1a8"],
      goal: "Back rank mate",
      turn: "w",
      rating: 250,
      themes: ["rook", "mate"]
    },
  ],
  bishop: [
    {
      fen: "8/8/8/8/8/8/8/B6K w - - 0 1",
      solution: ["a1h8"],
      goal: "Move bishop diagonally",
      turn: "w",
      rating: 250,
      themes: ["bishop", "basics"]
    },
    {
      fen: "7k/6p1/8/8/8/8/8/B6K w - - 0 1",
      solution: ["a1g7"],
      goal: "Capture pawn with bishop",
      turn: "w",
      rating: 270,
      themes: ["bishop", "capture"]
    },
  ],
  queen: [
    {
      fen: "7k/8/8/8/8/8/8/Q6K w - - 0 1",
      solution: ["a1a8"],
      goal: "Checkmate with queen",
      turn: "w",
      rating: 280,
      themes: ["queen", "checkmate"]
    },
    {
      fen: "7k/8/8/8/8/8/8/Q6K w - - 0 1",
      solution: ["a1h8"],
      goal: "Checkmate on diagonal",
      turn: "w",
      rating: 300,
      themes: ["queen", "checkmate"]
    },
  ],
  knight: [
    {
      fen: "8/8/8/8/8/8/8/N6K w - - 0 1",
      solution: ["a1b3"],
      goal: "Move knight in L-shape",
      turn: "w",
      rating: 260,
      themes: ["knight", "basics"]
    },
    {
      fen: "7k/6p1/8/8/8/1N6/8/7K w - - 0 1",
      solution: ["b3c5"],
      goal: "Fork king and pawn",
      turn: "w",
      rating: 290,
      themes: ["knight", "fork"]
    },
    {
      fen: "8/8/8/8/8/8/1N6/K7 w - - 0 1",
      solution: ["b2d3"],
      goal: "Centralize the knight",
      turn: "w",
      rating: 270,
      themes: ["knight", "basics"]
    },
    {
      fen: "r6k/8/8/8/8/1N6/8/K7 w - - 0 1",
      solution: ["b3c5"],
      goal: "Attack the rook",
      turn: "w",
      rating: 280,
      themes: ["knight", "attack"]
    },
    {
      fen: "r3k2r/8/8/8/8/2N5/8/K7 w - - 0 1",
      solution: ["c3d5"],
      goal: "Fork two rooks",
      turn: "w",
      rating: 300,
      themes: ["knight", "fork"]
    },
  ],
  king: [
    {
      fen: "8/8/8/8/8/8/8/4K3 w - - 0 1",
      solution: ["e1e2"],
      goal: "Move king one square",
      turn: "w",
      rating: 150,
      themes: ["king", "basics"]
    },
    {
      fen: "7k/8/6K1/8/8/8/8/8 w - - 0 1",
      solution: ["g6g7"],
      goal: "Move king closer",
      turn: "w",
      rating: 200,
      themes: ["king", "opposition"]
    },
  ],
  castling: [
    {
      fen: "r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1",
      solution: ["e1g1"],
      goal: "Castle kingside",
      turn: "w",
      rating: 320,
      themes: ["castling", "opening"]
    },
    {
      fen: "r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1",
      solution: ["e1c1"],
      goal: "Castle queenside",
      turn: "w",
      rating: 340,
      themes: ["castling", "opening"]
    },
  ],
  "mate in 1": [
    {
      id: "mate1_b1_1",
      fen: "6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1",
      solution: ["Ra8#"],
      goal: "Back rank mate",
      turn: "w",
      rating: 200,
      themes: ["mate-in-1", "backRankMate"]
    },
    {
      id: "mate1_b1_2",
      fen: "6k1/5ppp/8/8/8/8/8/4R1K1 w - - 0 1",
      solution: ["Re8#"],
      goal: "Back rank mate",
      turn: "w",
      rating: 220,
      themes: ["mate-in-1", "backRankMate"]
    },
    {
      id: "mate1_b1_3",
      fen: "r5k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1",
      solution: ["Rxa8#"],
      goal: "Capture rook and mate",
      turn: "w",
      rating: 250,
      themes: ["mate-in-1", "backRankMate"]
    },
    {
      id: "mate1_b1_4",
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
      solution: ["Qxf7#"],
      goal: "Scholar's mate",
      turn: "w",
      rating: 270,
      themes: ["mate-in-1", "scholarsMate"]
    },
    {
      id: "mate1_b1_5",
      fen: "5k2/8/5K2/8/8/8/8/7Q w - - 0 1",
      solution: ["Qh8#"],
      goal: "Queen checkmate",
      turn: "w",
      rating: 300,
      themes: ["mate-in-1", "queenMate"]
    },
    {
      id: "mate1_b2_1",
      fen: "1n1q2rk/pb1p1P1p/1p2p1p1/2p1n3/2P1P3/2N1B3/PP1QB1PP/R4RK1 w - - 0 1",
      solution: ["f7g8q"],
      goal: "Smothered Finish (Sitnik - Stepanavichus)",
      turn: "w",
      rating: 1200,
      themes: ["mate-in-1", "promotion"]
    },
    {
      id: "mate1_b2_2",
      fen: "4r1k1/pb1R2p1/4p2Q/1p1p4/2n2n1q/2p4P/P4P1K/5r2 b - - 0 1",
      solution: ["f4h3"],
      goal: "Knight's Reprisal",
      turn: "b",
      rating: 1250,
      themes: ["mate-in-1", "knightMate"]
    },
    {
      id: "mate1_b2_3",
      fen: "r1b1r1k1/pp3p1p/1q1bpnp1/3p4/3P2nq/1PN1P3/PBQ1BPPP/R4RK1 b - - 0 1",
      solution: ["h4h2"],
      goal: "Thematic Greek Gift Threat",
      turn: "b",
      rating: 1300,
      themes: ["mate-in-1", "queenMate"]
    },
    {
      id: "mate1_b2_4",
      fen: "6k1/1p3ppp/p1p3p1/3p4/8/1P2P3/P3QPP1/4R1K1 w - - 0 1",
      solution: ["e2e8"],
      goal: "Back Rank Exploitation",
      turn: "w",
      rating: 1100,
      themes: ["mate-in-1", "backRankMate"]
    },
    {
      id: "mate1_b2_5",
      fen: "4r3/1p3p1k/p1p3p1/2Np1q2/Q7/1P2P2q/P2K1PP1/4R3 b - - 0 1",
      solution: ["h3e3"],
      goal: "Defensive Oversight",
      turn: "b",
      rating: 1400,
      themes: ["mate-in-1", "queenMate"]
    },
  ],
  "mate in 2": [
    {
      fen: "6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1",
      solution: ["a1a8", "g8h7", "a8h8"],
      goal: "Mate in 2",
      turn: "w",
      rating: 600,
      themes: ["mate", "rook"]
    },
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 1",
      solution: ["h5f7", "e8e7", "f7e8"],
      goal: "Mate in 2",
      turn: "w",
      rating: 650,
      themes: ["mate", "sacrifice"]
    },
  ],
  "double attack": [
    {
      fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1P2n/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["f3g5"],
      goal: "Attack king and piece",
      turn: "w",
      rating: 700,
      themes: ["fork", "attack"]
    },
    {
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
      solution: ["f3g5"],
      goal: "Double attack",
      turn: "w",
      rating: 720,
      themes: ["fork", "attack"]
    },
  ],
  pin: [
    {
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
      solution: ["f1b5"],
      goal: "Pin the knight to king",
      turn: "w",
      rating: 750,
      themes: ["pin", "tactics"]
    },
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["c1g5"],
      goal: "Pin knight to queen",
      turn: "w",
      rating: 780,
      themes: ["pin", "tactics"]
    },
    {
      fen: "r1bqkb1r/pppp1ppp/2n5/4p1n1/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
      solution: ["d1e2"],
      goal: "Pin the knight to bishop",
      turn: "w",
      rating: 760,
      themes: ["pin", "tactics"]
    },
    {
      fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
      solution: ["f3g5"],
      goal: "Pin pawn to king",
      turn: "w",
      rating: 770,
      themes: ["pin", "tactics"]
    },
    {
      fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["c1g5"],
      goal: "Absolute pin",
      turn: "w",
      rating: 790,
      themes: ["pin", "tactics"]
    },
  ],
  fork: [
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["f3g5"],
      goal: "Knight fork",
      turn: "w",
      rating: 800,
      themes: ["fork", "knight"]
    },
    {
      fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
      solution: ["f3e5"],
      goal: "Fork king and rook",
      turn: "w",
      rating: 820,
      themes: ["fork", "knight"]
    },
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1",
      solution: ["c3d5"],
      goal: "Fork queen and bishop",
      turn: "w",
      rating: 810,
      themes: ["fork", "knight"]
    },
    {
      fen: "r1bqkb1r/pppp1ppp/2n5/4p3/4P2n/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
      solution: ["d1e2"],
      goal: "Queen fork",
      turn: "w",
      rating: 830,
      themes: ["fork", "queen"]
    },
    {
      fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["c4f7"],
      goal: "Bishop fork (family check)",
      turn: "w",
      rating: 840,
      themes: ["fork", "bishop"]
    },
  ],
  deflection: [
    {
      fen: "1k1r3r/pp3p1p/2p3p1/4P3/2P2qn1/1PNP4/PB2QPPP/1R2R1K1 w - - 0 1",
      solution: ["e2g4"],
      goal: "Deflect the queen",
      turn: "w",
      rating: 900,
      themes: ["deflection", "tactics"]
    },
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP4/PPP2PPP/R1BQK2R w KQkq - 0 1",
      solution: ["c4f7"],
      goal: "Deflect the king",
      turn: "w",
      rating: 950,
      themes: ["deflection", "sacrifice"]
    },
    {
      fen: "r2qk2r/ppp2ppp/2n2n2/3p4/1bPP4/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 1",
      solution: ["d1a4"],
      goal: "Deflect defender",
      turn: "w",
      rating: 920,
      themes: ["deflection", "tactics"]
    },
    {
      fen: "r1bqk2r/pppp1ppp/2n5/4p3/1bB1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["c4f7"],
      goal: "Deflect king from defense",
      turn: "w",
      rating: 940,
      themes: ["deflection", "sacrifice"]
    },
    {
      fen: "r2qkb1r/ppp2ppp/2n2n2/3p4/2PP4/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 1",
      solution: ["c3b5"],
      goal: "Deflect the knight",
      turn: "w",
      rating: 960,
      themes: ["deflection", "tactics"]
    },
  ],
  decoy: [
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["c4f7"],
      goal: "Decoy the king",
      turn: "w",
      rating: 1000,
      themes: ["decoy", "sacrifice"]
    },
    {
      fen: "r2qkb1r/ppp2ppp/2np1n2/4p1B1/2B1P3/2N2N2/PPPP1PPP/R2QK2R w KQkq - 0 1",
      solution: ["c4f7"],
      goal: "Decoy into checkmate",
      turn: "w",
      rating: 1050,
      themes: ["decoy", "mate"]
    },
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1",
      solution: ["c3d5"],
      goal: "Decoy the knight",
      turn: "w",
      rating: 1020,
      themes: ["decoy", "tactics"]
    },
    {
      fen: "r2qkb1r/ppp2ppp/2n2n2/3p4/2PP4/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 1",
      solution: ["d4d5"],
      goal: "Decoy to bad square",
      turn: "w",
      rating: 1040,
      themes: ["decoy", "tactics"]
    },
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["c4f7"],
      goal: "Sacrifice to decoy",
      turn: "w",
      rating: 1060,
      themes: ["decoy", "sacrifice"]
    },
  ],
  interference: [
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["f3g5"],
      goal: "Interfere with defense",
      turn: "w",
      rating: 1100,
      themes: ["interference", "tactics"]
    },
  ],
  undermining: [
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["e4e5"],
      goal: "Undermine the knight",
      turn: "w",
      rating: 1150,
      themes: ["undermining", "tactics"]
    },
  ],
  "pawn endgame": [
    {
      fen: "8/8/8/8/3k4/3P4/3K4/8 w - - 0 1",
      solution: ["d2d3"],
      goal: "Support the pawn",
      turn: "w",
      rating: 800,
      themes: ["endgame", "pawn"]
    },
    {
      fen: "8/8/8/4k3/8/3PK3/8/8 w - - 0 1",
      solution: ["e3e4"],
      goal: "Opposition",
      turn: "w",
      rating: 850,
      themes: ["endgame", "opposition"]
    },
  ],
  "rook endings": [
    {
      fen: "8/8/8/8/8/3k4/3r4/3K1R2 w - - 0 1",
      solution: ["f1f3"],
      goal: "Cut off the king",
      turn: "w",
      rating: 1200,
      themes: ["endgame", "rook"]
    },
    {
      fen: "8/8/8/1k6/1P6/1K6/8/1r6 w - - 0 1",
      solution: ["b3a3"],
      goal: "Support the pawn",
      turn: "w",
      rating: 1250,
      themes: ["endgame", "rook"]
    },
  ],
  "knight ending": [
    {
      fen: "8/8/8/8/3k4/3N4/3K4/8 w - - 0 1",
      solution: ["d3c5"],
      goal: "Centralize knight",
      turn: "w",
      rating: 1100,
      themes: ["endgame", "knight"]
    },
  ],
  "bishop endings": [
    {
      fen: "8/8/8/8/3k4/3B4/3K4/8 w - - 0 1",
      solution: ["d3e4"],
      goal: "Control key squares",
      turn: "w",
      rating: 1150,
      themes: ["endgame", "bishop"]
    },
  ],
  "queen endings": [
    {
      fen: "8/8/8/8/3k4/3Q4/3K4/8 w - - 0 1",
      solution: ["d3c4"],
      goal: "Checkmate pattern",
      turn: "w",
      rating: 1300,
      themes: ["endgame", "queen"]
    },
  ],
  middlegame: [
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 1",
      solution: ["c3d5"],
      goal: "Central control",
      turn: "w",
      rating: 1500,
      themes: ["middlegame", "strategy"]
    },
  ],
  openings: [
    {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["e2e4"],
      goal: "Best opening move",
      turn: "w",
      rating: 1400,
      themes: ["opening", "theory"]
    },
  ],
  tactics: [
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["c4f7"],
      goal: "Tactical blow",
      turn: "w",
      rating: 1600,
      themes: ["tactics", "combination"]
    },
  ],
  "calculation skills": [
    {
      fen: "r2qkb1r/ppp2ppp/2np1n2/4p1B1/2B1P3/2N2N2/PPPP1PPP/R2QK2R w KQkq - 0 1",
      solution: ["c4f7"],
      goal: "Calculate forced sequence",
      turn: "w",
      rating: 1700,
      themes: ["calculation", "tactics"]
    },
  ],
  "simple captures": [
    {
      fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
      solution: ["d1h5"],
      goal: "Attack undefended pawn",
      turn: "w",
      rating: 400,
      themes: ["capture", "tactics"]
    },
  ],
  "value of pieces": [
    {
      fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
      solution: ["f3e5"],
      goal: "Good trade",
      turn: "w",
      rating: 500,
      themes: ["exchange", "value"]
    },
  ],
  "discovered check": [
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["c4f7"],
      goal: "Discovered check",
      turn: "w",
      rating: 850,
      themes: ["discovered", "check"]
    },
  ],
  "lawnmower mate": [
    {
      fen: "6k1/8/6K1/8/8/8/R7/R7 w - - 0 1",
      solution: ["a2a8"],
      goal: "Lawnmower mate pattern",
      turn: "w",
      rating: 600,
      themes: ["mate", "pattern"]
    },
  ],
  draw: [
    {
      fen: "8/8/8/8/8/3k4/8/3K4 w - - 0 1",
      solution: ["d1d2"],
      goal: "Force stalemate",
      turn: "w",
      rating: 700,
      themes: ["stalemate", "draw"]
    },
  ],
  "pawn structure": [
    {
      fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
      solution: ["d2d4"],
      goal: "Central pawn structure",
      turn: "w",
      rating: 750,
      themes: ["structure", "pawn"]
    },
  ],
  "protecting your pieces": [
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["b1c3"],
      goal: "Protect the e4 pawn",
      turn: "w",
      rating: 800,
      themes: ["defense", "protection"]
    },
  ],
  "defending against mate": [
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1",
      solution: ["g2g3"],
      goal: "Defend against checkmate",
      turn: "w",
      rating: 1000,
      themes: ["defense", "mate"]
    },
  ],
  "forced mate": [
    {
      fen: "6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1",
      solution: ["a1a8"],
      goal: "Forced mate in 2",
      turn: "w",
      rating: 1100,
      themes: ["mate", "forced"]
    },
  ],
  blockade: [
    {
      fen: "8/8/3k4/3p4/3P4/3K4/8/8 w - - 0 1",
      solution: ["d3d4"],
      goal: "Blockade the pawn",
      turn: "w",
      rating: 1200,
      themes: ["blockade", "strategy"]
    },
  ],
  "strategy in pawn endings": [
    {
      fen: "8/8/8/3k4/3p4/3P4/3K4/8 w - - 0 1",
      solution: ["d2e2"],
      goal: "Opposition",
      turn: "w",
      rating: 1300,
      themes: ["endgame", "strategy"]
    },
  ],
  "mate with king and queen": [
    {
      fen: "7k/8/6K1/8/8/8/8/Q7 w - - 0 1",
      solution: ["a1h1"],
      goal: "Checkmate with K+Q",
      turn: "w",
      rating: 700,
      themes: ["mate", "queen"]
    },
  ],
  "mate with king and rook": [
    {
      fen: "7k/8/6K1/8/8/8/8/R7 w - - 0 1",
      solution: ["a1h1"],
      goal: "Checkmate with K+R",
      turn: "w",
      rating: 650,
      themes: ["mate", "rook"]
    },
  ],
  "opening principles": [
    {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["e2e4"],
      goal: "Control the center",
      turn: "w",
      rating: 600,
      themes: ["opening", "principles"]
    },
  ],
  "theory of the main openings": [
    {
      fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      solution: ["e7e5"],
      goal: "King's pawn opening",
      turn: "b",
      rating: 700,
      themes: ["opening", "theory"]
    },
  ],
  "open lines and diagonals": [
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1",
      solution: ["d2d4"],
      goal: "Open the center",
      turn: "w",
      rating: 1250,
      themes: ["strategy", "center"]
    },
  ],
  "the center": [
    {
      fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      solution: ["d7d5"],
      goal: "Challenge the center",
      turn: "b",
      rating: 1200,
      themes: ["center", "strategy"]
    },
  ],
  "lead in development": [
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["O-O"],
      goal: "Complete development",
      turn: "w",
      rating: 1350,
      themes: ["development", "opening"]
    },
  ],
  "weak squares": [
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1",
      solution: ["c3d5"],
      goal: "Exploit weak square",
      turn: "w",
      rating: 1400,
      themes: ["strategy", "weakness"]
    },
  ],
  exchange: [
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["c4f7"],
      goal: "Favorable exchange",
      turn: "w",
      rating: 1350,
      themes: ["exchange", "tactics"]
    },
  ],
  "playing in the middlegame": [
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 1",
      solution: ["c3d5"],
      goal: "Active piece play",
      turn: "w",
      rating: 1550,
      themes: ["middlegame", "activity"]
    },
  ],
  "attack on the king": [
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1",
      solution: ["f3g5"],
      goal: "Attack the king",
      turn: "w",
      rating: 1600,
      themes: ["attack", "king"]
    },
  ],
  "isolated pawn": [
    {
      fen: "r1bqk2r/ppp2ppp/2n2n2/3p4/2PP4/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 1",
      solution: ["c3e4"],
      goal: "Attack isolated pawn",
      turn: "w",
      rating: 1650,
      themes: ["structure", "weakness"]
    },
  ],
  "hanging pawns": [
    {
      fen: "r1bqk2r/pp3ppp/2n2n2/2pp4/2PP4/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 1",
      solution: ["d4c5"],
      goal: "Attack hanging pawns",
      turn: "w",
      rating: 1700,
      themes: ["structure", "weakness"]
    },
  ],
  "attacking on the queenside": [
    {
      fen: "r1bqk2r/ppp2ppp/2n2n2/3p4/1bPP4/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 1",
      solution: ["a2a3"],
      goal: "Queenside expansion",
      turn: "w",
      rating: 1750,
      themes: ["attack", "queenside"]
    },
  ],
  "defense and counterattack": [
    {
      fen: "r1bqk2r/ppp2ppp/2n2n2/3p4/2PP4/2N2N2/PP3PPP/R1BQK2R b KQkq - 0 1",
      solution: ["d5c4"],
      goal: "Counterattack",
      turn: "b",
      rating: 1850,
      themes: ["defense", "counterattack"]
    },
  ],
  "rook and pawn vs rook": [
    {
      fen: "8/8/8/1k6/1P6/1K6/8/1r6 w - - 0 1",
      solution: ["b3a3"],
      goal: "Support pawn advance",
      turn: "w",
      rating: 1400,
      themes: ["endgame", "rook"]
    },
  ],
  "rook vs pawns": [
    {
      fen: "8/8/8/8/8/3k1ppp/3R4/3K4 w - - 0 1",
      solution: ["d2f2"],
      goal: "Stop the pawns",
      turn: "w",
      rating: 1300,
      themes: ["endgame", "rook"]
    },
  ],
  "rook vs bishop": [
    {
      fen: "8/8/8/8/3b4/8/3R4/3K3k w - - 0 1",
      solution: ["d2d4"],
      goal: "Trap the bishop",
      turn: "w",
      rating: 1900,
      themes: ["endgame", "rook"]
    },
  ],
  "rook vs knight": [
    {
      fen: "8/8/8/8/3n4/8/3R4/3K3k w - - 0 1",
      solution: ["d2d4"],
      goal: "Trap the knight",
      turn: "w",
      rating: 1950,
      themes: ["endgame", "rook"]
    },
  ],
  "bishop vs knight": [
    {
      fen: "8/8/8/8/3n4/3B4/8/3K3k w - - 0 1",
      solution: ["d3c4"],
      goal: "Bishop dominance",
      turn: "w",
      rating: 2000,
      themes: ["endgame", "bishop"]
    },
  ],
  "rule of the square": [
    {
      fen: "8/8/8/3k4/8/8/3P4/3K4 w - - 0 1",
      solution: ["d2d4"],
      goal: "Race to promotion",
      turn: "w",
      rating: 850,
      themes: ["endgame", "rule"]
    },
  ],
  "king and pawn vs king": [
    {
      fen: "8/8/8/3k4/8/3P4/3K4/8 w - - 0 1",
      solution: ["d2d3"],
      goal: "Support the pawn",
      turn: "w",
      rating: 800,
      themes: ["endgame", "pawn"]
    },
  ],
  "pawn vs pawn": [
    {
      fen: "8/3p4/8/3P4/8/8/8/8 w - - 0 1",
      solution: ["d5d6"],
      goal: "Advance the pawn",
      turn: "w",
      rating: 900,
      themes: ["endgame", "pawn"]
    },
  ],
  "multi-pawn endings": [
    {
      fen: "8/3ppp2/8/3PPP2/8/8/8/K6k w - - 0 1",
      solution: ["d5d6"],
      goal: "Breakthrough",
      turn: "w",
      rating: 1300,
      themes: ["endgame", "pawn"]
    },
  ],
  "space advantage": [
    {
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/2N2N2/PPP2PPP/R1BQK2R w KQkq - 0 1",
      solution: ["d4d5"],
      goal: "Gain space",
      turn: "w",
      rating: 1450,
      themes: ["strategy", "space"]
    },
  ],
  etiquette: [
    {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["e2e4"],
      goal: "Start with handshake move",
      turn: "w",
      rating: 400,
      themes: ["etiquette", "opening"]
    },
  ],
  pieces: [
    {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["b1c3"],
      goal: "Develop a piece",
      turn: "w",
      rating: 200,
      themes: ["pieces", "development"]
    },
  ],
  check: [
    {
      fen: "7k/8/6K1/8/8/8/8/Q7 w - - 0 1",
      solution: ["a1h1"],
      goal: "Give check",
      turn: "w",
      rating: 300,
      themes: ["check", "basics"]
    },
  ],
  stalemate: [
    {
      fen: "7k/5Q2/6K1/8/8/8/8/8 w - - 0 1",
      solution: ["f7g7"],
      goal: "Avoid stalemate",
      turn: "w",
      rating: 500,
      themes: ["stalemate", "endgame"]
    },
  ],
  default: [
    {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      solution: ["O-O"],
      goal: "Find the best move",
      turn: "w",
      rating: 1000,
      themes: ["tactics", "general"]
    },
    {
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
      solution: ["f1b5"],
      goal: "Find the best move",
      turn: "w",
      rating: 1020,
      themes: ["tactics", "general"]
    },
    {
      fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
      solution: ["b1c3"],
      goal: "Find the best move",
      turn: "w",
      rating: 1040,
      themes: ["tactics", "general"]
    },
  ]
};
export function getPuzzlesForTopic(topicTitle, blockNumber, count) {
  const normalizedTopic = normalizeTopicName(topicTitle);
  let topicPuzzles = PUZZLE_DATABASE[normalizedTopic] || PUZZLE_DATABASE.default;
  if (!topicPuzzles || topicPuzzles.length === 0) {
    topicPuzzles = PUZZLE_DATABASE.default;
  }
  console.log(`Loading puzzles for "${topicTitle}" (normalized: "${normalizedTopic}"), Block ${blockNumber}`);
  console.log(`Available puzzles in database:`, topicPuzzles.length);
  const puzzlesPerBlock = 5; 
  const puzzleCount = Math.min(puzzlesPerBlock, count || puzzlesPerBlock);
  const startIndex = (blockNumber - 1) * puzzlesPerBlock;
  const blockPuzzles = [];
  for (let i = 0; i < puzzleCount; i++) {
    const puzzleIndex = startIndex + i;
    const basePuzzle = topicPuzzles[puzzleIndex % topicPuzzles.length];
    if (!basePuzzle) {
      console.warn(`No puzzle found at index ${puzzleIndex}`);
      continue;
    }
    const puzzle = {
      id: basePuzzle.id || `${normalizedTopic.substring(0, 3)}_b${blockNumber}_${i + 1}`,
      fen: basePuzzle.fen || "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: Array.isArray(basePuzzle.solution) ? basePuzzle.solution : ["e2e4"],
      goal: basePuzzle.goal || "Find the best move",
      turn: basePuzzle.turn || "w",
      rating: basePuzzle.rating || (200 + blockNumber * 50 + i * 10),
      themes: Array.isArray(basePuzzle.themes) ? basePuzzle.themes : ["tactics"],
      blockNumber: blockNumber,
      topicTitle: topicTitle,
      puzzleNumber: i + 1,
      totalInBlock: puzzleCount
    };
    blockPuzzles.push(puzzle);
  }
  console.log(`Returning ${blockPuzzles.length} puzzles for Block ${blockNumber}:`, blockPuzzles.map(p => p.id));
  return blockPuzzles;
}
function normalizeTopicName(topicTitle) {
  const title = topicTitle.toLowerCase().trim();
  if (PUZZLE_DATABASE[title]) return title;
  if (title.includes('introduction')) return 'introduction';
  if (title.includes('notation')) return 'notation';
  if (title.includes('pawn') && !title.includes('endgame')) return 'pawn';
  if (title.includes('rook') && !title.includes('ending')) return 'rook';
  if (title.includes('bishop') && !title.includes('ending')) return 'bishop';
  if (title.includes('queen') && !title.includes('ending')) return 'queen';
  if (title.includes('knight') && !title.includes('ending')) return 'knight';
  if (title.includes('king') && !title.includes('pawn')) return 'king';
  if (title.includes('castling')) return 'castling';
  if (title.includes('mate in 1')) return 'mate in 1';
  if (title.includes('mate in 2')) return 'mate in 2';
  if (title.includes('double attack')) return 'double attack';
  if (title.includes('pin')) return 'pin';
  if (title.includes('fork')) return 'fork';
  if (title.includes('deflection')) return 'deflection';
  if (title.includes('decoy')) return 'decoy';
  if (title.includes('interference')) return 'interference';
  if (title.includes('undermining')) return 'undermining';
  if (title.includes('pawn') && title.includes('endgame')) return 'pawn endgame';
  if (title.includes('rook') && title.includes('ending')) return 'rook endings';
  if (title.includes('knight') && title.includes('ending')) return 'knight ending';
  if (title.includes('bishop') && title.includes('ending')) return 'bishop endings';
  if (title.includes('queen') && title.includes('ending')) return 'queen endings';
  if (title.includes('middlegame')) return 'middlegame';
  if (title.includes('opening')) return 'openings';
  if (title.includes('tactics')) return 'tactics';
  if (title.includes('calculation')) return 'calculation skills';
  return 'default';
}
export function getAllPuzzlesForTopic(topicTitle, blocks) {
  const puzzlesByBlock = {};
  blocks.forEach((block, index) => {
    const blockNumber = index + 1;
    const puzzles = getPuzzlesForTopic(topicTitle, blockNumber, block.total);
    puzzlesByBlock[block.id] = puzzles;
  });
  return puzzlesByBlock;
}
export function getPuzzleByIndex(topicTitle, blockNumber, puzzleIndex, totalPuzzles) {
  const puzzles = getPuzzlesForTopic(topicTitle, blockNumber, totalPuzzles);
  return puzzles[puzzleIndex] || puzzles[0];
}
