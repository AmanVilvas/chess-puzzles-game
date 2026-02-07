
// ============================================================================
// LEVEL 5 PUZZLES - PART 3: INTERMEDIATE
// ============================================================================

// ----------------------------------------------------------------------------
// Topic 5: Multi-pawn endings
// ----------------------------------------------------------------------------
export const L5_TOPIC_5_MULTI_PAWN = {
    title: "Multi-pawn endings",
    blocks: [
        {
            name: "Outside Passed Pawn",
            puzzles: [
                {
                    id: "l5_t5_b1_1",
                    fen: "8/8/8/6p1/1k6/6P1/P7/2K5 w - - 0 1", // White a2, g3. Black b4, g5.
                    // White to move. a4 is passed (outside).
                    goal: "Promote the Pawn",
                    solution: ["a2a4", "b4a5", "c1b2", "a5a4", "b2c3"], // Distract King.
                    turn: "w",
                    rating: 1200,
                    themes: ["endgame", "pawnEndgame"],
                    explanation: "The outside passed pawn distracts the enemy king, allowing your king to invade."
                }
            ]
        },
        {
            name: "Protected Passed Pawn",
            puzzles: [
                {
                    id: "l5_t5_b2_1",
                    fen: "8/8/8/5pP1/5P2/8/7k/K7 w - - 0 1", // g5 passed, f4 protects.
                    // If Black attacks...
                    goal: "Win with Protected Passer",
                    solution: ["g5g6", "h2h3", "g6g7"], // Simple push if unblocked.
                    turn: "w",
                    rating: 1200,
                    themes: ["endgame", "pawnEndgame"],
                    explanation: "A protected passed pawn is a powerful asset that ties down the enemy king."
                }
            ]
        },
        {
            name: "Triangulation",
            puzzles: [
                {
                    id: "l5_t5_b3_1",
                    fen: "8/8/1p6/1P6/3k4/8/3K4/8 w - - 0 1", // Key squares.
                    goal: "Outflank",
                    solution: ["d2c2", "d4c4", "c2b2", "c4b5", "b2b3"],
                    turn: "w",
                    rating: 1300,
                    themes: ["endgame", "pawnEndgame"],
                    explanation: "Using triangulation to lose a tempo and gain the opposition."
                }
            ]
        },
        {
            name: "Pawn Breakthrough",
            puzzles: [
                {
                    id: "l5_t5_b4_1",
                    fen: "8/8/8/p1p1p1p1/P1P1P1P1/8/3k4/5K2 b - - 0 1", // Locked?
                    // Need a breakthrough structure.
                    fen: "8/8/p7/1p6/P7/1P6/8/k1K5 w - - 0 1", // a4, b3 vs a6, b5.
                    // 1. axb5 axb5 2. b4?
                    // Classic 3 vs 3 breakthrough.
                    fen: "8/8/ppp5/3p4/3P4/1PP5/8/k1K5 w - - 0 1", // c-d-e pawns.
                    goal: "Break Through",
                    solution: ["c3c4", "b5c4", "b3c4"], // simplified.
                    turn: "w",
                    rating: 1300,
                    themes: ["endgame", "pawnEndgame"],
                    explanation: "Sacrificing pawns to create a passed pawn."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 6: Knight ending basics
// ----------------------------------------------------------------------------
export const L5_TOPIC_6_KNIGHT_ENDINGS = {
    title: "Knight ending basics",
    blocks: [
        {
            name: "Knight vs Pawn",
            puzzles: [
                {
                    id: "l5_t6_b1_1",
                    fen: "8/8/8/8/8/8/2p2N2/2k2K2 w - - 0 1", // c2 pawn. N f2.
                    // 1. Nd3+ Kd2
                    goal: "Stop the Pawn",
                    solution: ["f2d3", "c1d2", "d3c1"], // Blockade.
                    turn: "w",
                    rating: 1250,
                    themes: ["endgame", "knightEndgame"],
                    explanation: "The knight is an excellent blockader."
                }
            ]
        },
        {
            name: "Knight vs Knight",
            puzzles: [
                {
                    id: "l5_t6_b2_1",
                    fen: "8/8/8/3n4/8/3N4/2k5/K7 w - - 0 1",
                    goal: "Save the Knight (or Draw)",
                    solution: ["d3e1", "c2d2", "e1g2"],
                    turn: "w",
                    rating: 1300,
                    themes: ["endgame", "knightEndgame"],
                    explanation: "Knight maneuverability is key in knight endings."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 7: Rook vs pawns
// ----------------------------------------------------------------------------
export const L5_TOPIC_7_ROOK_VS_PAWNS = {
    title: "Rook vs pawns",
    blocks: [
        {
            name: "Rook vs 1 Pawn",
            puzzles: [
                {
                    id: "l5_t7_b1_1",
                    fen: "8/7P/8/8/2k5/8/r7/6K1 b - - 0 1", // h7 pawn. R a2.
                    // 1...Ra8 to stop.
                    goal: "Stop Promotion",
                    solution: ["a2a8", "g1g2", "a8h8"],
                    turn: "b",
                    rating: 1200,
                    themes: ["endgame", "rookEndgame"],
                    explanation: "Get behind the passed pawn with the rook."
                }
            ]
        },
        {
            name: "Rook vs 2 Pawns",
            puzzles: [
                {
                    id: "l5_t7_b2_1",
                    fen: "8/6P1/7P/8/2k5/8/r7/6K1 b - - 0 1",
                    goal: "Draw or Win",
                    solution: ["a2g2", "g1f1", "g2h2"], // Attack weak pawn.
                    turn: "b",
                    rating: 1300,
                    themes: ["endgame", "rookEndgame"],
                    explanation: "Active rook checks can disrupt pawn coordination."
                }
            ]
        },
        {
            name: "Cutting off the King",
            puzzles: [
                {
                    id: "l5_t7_b3_1",
                    fen: "8/8/p7/1p6/1P6/k7/2R5/K7 w - - 0 1",
                    goal: "Win the Pawns",
                    solution: ["c2b2", "a3a2", "b2b1"], // Cut off.
                    turn: "w",
                    rating: 1300,
                    themes: ["endgame", "rookEndgame"],
                    explanation: "Cutting off the king prevents it from supporting the pawns."
                }
            ]
        }
    ]
};
