
// ============================================================================
// LEVEL 3 PUZZLES - PART 2: CLUB PLAYER (600 - 1000 ELO)
// ============================================================================

// ----------------------------------------------------------------------------
// Topic 5: Pawn endgame - the rule of the square
// ----------------------------------------------------------------------------
export const L3_TOPIC_5_PAWN_ENDGAME = {
    title: "Pawn endgame - the rule of the square",
    blocks: [
        {
            name: "Rule of the Square",
            puzzles: [
                {
                    id: "l3_t5_b1_1",
                    fen: "8/8/8/8/4P3/8/8/K1k5 w - - 0 1", // Pawn e4. K c1. K a1.
                    // Black King far away.
                    goal: "Promote the pawn",
                    solution: ["e4e5", "c1d2", "e5e6", "d2e3", "e6e7", "e3f4", "e7e8q"],
                    turn: "w",
                    rating: 600,
                    themes: ["endgame", "promotion"],
                    explanation: "The King is outside the square of the pawn, so the pawn promotes."
                },
                {
                    id: "l3_t5_b1_2",
                    fen: "8/8/8/P3k3/8/8/8/7K b - - 0 1", // White Pawn a5. Black King e5.
                    // Black to move. Enters square.
                    goal: "Catch the pawn",
                    solution: ["e5d5", "a5a6", "d5c6", "a6a7", "c6b7"],
                    turn: "b",
                    rating: 600,
                    themes: ["endgame"],
                    explanation: "By entering the square of the pawn, the King can catch it."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 6: Mate with king and queen
// ----------------------------------------------------------------------------
export const L3_TOPIC_6_KING_QUEEN_MATE = {
    title: "Mate with king and queen",
    blocks: [
        {
            name: "Basic Checkmate",
            puzzles: [
                {
                    id: "l3_t6_b1_1",
                    fen: "8/8/8/8/8/2K5/8/1k1Q4 w - - 0 1", // Q d1, K c3. Black K b1.
                    goal: "Deliver Checkmate",
                    solution: ["d1b1"], // Mate in 1.
                    turn: "w",
                    rating: 600,
                    themes: ["mate"],
                    explanation: "Support mate with King and Queen."
                },
                {
                    id: "l3_t6_b1_2",
                    fen: "k7/8/1K6/8/8/8/Q7/8 w - - 0 1", // K b6. Q a2. Black K a8.
                    goal: "Deliver Checkmate",
                    solution: ["a2a7"],
                    turn: "w",
                    rating: 600,
                    themes: ["mate"],
                    explanation: "Queen delivered mate supported by the King."
                },
                {
                    id: "l3_t6_b1_3",
                    fen: "8/k7/2K5/8/Q7/8/8/8 w - - 0 1", // K c6. Q a4. Black K a7.
                    goal: "Force Checkmate",
                    solution: ["a4b5", "a7a8", "b5b7"],
                    turn: "w",
                    rating: 600,
                    themes: ["mate"],
                    explanation: "Cutting off the King and delivering mate."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 7: Mate with king and rook
// ----------------------------------------------------------------------------
export const L3_TOPIC_7_KING_ROOK_MATE = {
    title: "Mate with king and rook",
    blocks: [
        {
            name: "Rook Mate",
            puzzles: [
                {
                    id: "l3_t7_b1_1",
                    fen: "8/4k3/8/4K3/8/8/8/R7 w - - 0 1", // K e5, R a1. Black K e7.
                    // Opposition.
                    // Ra7+ Kd8 (or Kf8).
                    goal: "Force the King back",
                    solution: ["a1a7", "e7d8", "e5d6"], // Ke6?
                    // Opponent autoplay must pick valid move.
                    turn: "w",
                    rating: 700,
                    themes: ["mate"],
                    explanation: "Use the rook to cut off ranks and the king to push back."
                },
                {
                    id: "l3_t7_b1_2",
                    fen: "8/8/8/3k4/8/3K4/2R5/8 w - - 0 1", // K d3, R c2. K d5.
                    // Box the King.
                    goal: "Cut off the King",
                    solution: ["c2c4", "d5e5", "c4d4"],
                    turn: "w",
                    rating: 700,
                    themes: ["mate"],
                    explanation: "Restrict the enemy King's movement."
                },
                {
                    id: "l3_t7_b1_3",
                    fen: "8/8/3k4/8/3K4/8/R7/8 w - - 0 1", // K d4, R a2. K d6.
                    // Ra6+
                    goal: "Check and force back",
                    solution: ["a2a6", "d6c7", "d4c5"],
                    turn: "w",
                    rating: 700,
                    themes: ["mate"],
                    explanation: "Forcing the king to the edge."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 8: Basic opening principles
// ----------------------------------------------------------------------------
export const L3_TOPIC_8_OPENING = {
    title: "Basic opening principles",
    blocks: [
        {
            name: "Center Control",
            puzzles: [
                {
                    id: "l3_t8_b1_1",
                    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                    goal: "Control the center (e4)",
                    solution: ["e2e4"],
                    turn: "w",
                    rating: 600,
                    themes: ["opening"],
                    explanation: "e4 is one of the best opening moves, controlling the center."
                },
                {
                    id: "l3_t8_b1_2",
                    fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
                    goal: "Fight for the center (e5)",
                    solution: ["e7e5"],
                    turn: "b",
                    rating: 600,
                    themes: ["opening"],
                    explanation: "Matching White's central control."
                },
                {
                    id: "l3_t8_b1_3",
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                    goal: "Develop a Knight (Nf3)",
                    solution: ["g1f3"],
                    turn: "w",
                    rating: 600,
                    themes: ["opening"],
                    explanation: "Knights should be developed before Bishops usually."
                }
            ]
        }
    ]
};
