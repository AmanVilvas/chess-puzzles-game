
// ============================================================================
// LEVEL 5 PUZZLES: INTERMEDIATE (1200 - 1400 ELO)
// ============================================================================

// ----------------------------------------------------------------------------
// Topic 1: Deflection
// ----------------------------------------------------------------------------
export const L5_TOPIC_1_DEFLECTION = {
    title: "Deflection",
    blocks: [
        {
            name: "Deflection Tactics",
            puzzles: [
                {
                    id: "l5_t1_b1_1",
                    fen: "8/8/8/R7/3r4/K7/8/k7 w - - 0 1", // R a5. K a3. Black R d4. K a1.
                    // Ra8... R moves?
                    // Skewer?
                    fen: "8/8/6R1/5k2/5b2/8/6K1/5r2 w - - 0 1", // R g6, K g2. Black K f5, B f4, R f1.
                    // ...
                    // Let's use Back Rank Deflection.
                    fen: "r1b3k1/ppp2ppp/8/3q4/8/2B5/P4PPP/R3Q1K1 w - - 0 1", // Qe1 check? No, e1 back rank.
                    // White to move.
                    // 1. Qe8#
                    // If Black had heavy piece on e8?
                    fen: "4r1k1/ppp2ppp/8/3q4/8/2B5/P4PPP/R3Q1K1 w - - 0 1", // R e8.
                    // 1. Qxe8+ Rxe8 ...
                    // Deflection:
                    fen: "3r2k1/ppp2ppp/8/3q4/Q7/2B5/P4PPP/4R1K1 w - - 0 1", // Q a4. R e1. Black R d8.
                    // 1. Re8+ Rxe8 2. Qxe8#
                    // Deflecting the Rook? No, it's pinned/forced.
                    goal: "Mate in 2 (Deflection)",
                    solution: ["e1e8", "d8e8", "a4e8"],
                    turn: "w",
                    rating: 1200,
                    themes: ["deflection", "mate"],
                    explanation: "Rook sacrifices itself to deflect the defender, allowing mate."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 2: Decoy
// ----------------------------------------------------------------------------
export const L5_TOPIC_2_DECOY = {
    title: "Decoy",
    blocks: [
        {
            name: "Luring the King",
            puzzles: [
                {
                    id: "l5_t2_b1_1",
                    fen: "r6k/6pp/8/8/8/8/Q7/7K w - - 0 1", // Q a2. R a8.
                    // Back rank?
                    fen: "r5k1/5ppp/8/8/8/8/Q7/5R1K w - - 0 1", // Q a2. R f1.
                    // 1. Qxf7+ Kh8 2. Qf8+ Rxf8 3. Rxf8#
                    // Is this Decoy? Yes, luring R to f8.
                    goal: "Decoy to Mate",
                    solution: ["a2f7", "g8h8", "f7f8", "a8f8", "f1f8"],
                    turn: "w",
                    rating: 1200,
                    themes: ["decoy", "mate"],
                    explanation: "Sacrificing the Queen lures the Rook away from the back rank."
                }
            ]
        }
    ]
};
