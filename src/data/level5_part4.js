
// ============================================================================
// LEVEL 5 PUZZLES - PART 4: INTERMEDIATE
// ============================================================================

// ----------------------------------------------------------------------------
// Topic 8: Open lines and diagonals
// ----------------------------------------------------------------------------
export const L5_TOPIC_8_OPEN_LINES = {
    title: "Open lines and diagonals",
    blocks: [
        {
            name: "Opening the f-file",
            puzzles: [
                {
                    id: "l5_t8_b1_1",
                    fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2N2P2/PPPP2PP/R1BQK1NR w KQkq - 1 5", // f3 pawn.
                    // f3 blocks f-file.
                    // "Open the f-file" is usually a tactical theme (f4 push).
                    fen: "rnbqk2r/ppp1bppp/3p1n2/4p3/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq - 2 5", // King's Gambit / Vienna f4.
                    goal: "Open the Line",
                    solution: ["f4e5", "d6e5"], // Exchanges open file.
                    turn: "w",
                    rating: 1200,
                    themes: ["strategy", "openFile"],
                    explanation: "Trading pawns opens files for your rooks."
                }
            ]
        },
        {
            name: "Long Diagonal Mate",
            puzzles: [
                {
                    id: "l5_t8_b2_1",
                    fen: "r1b2rk1/pp3ppp/2n5/3q4/8/P7/1P1B1P1P/R2QK1R1 w Q - 0 15", // g-file open. B on long diag?
                    // Fianchetto mate.
                    fen: "6pk/pp5p/5p2/8/8/1B6/P5QP/7K w - - 0 1", // B b3, Q g2.
                    // Mate on g7?
                    // 1. Qg7#
                    goal: "Control the Diagonal",
                    solution: ["g2g7"],
                    turn: "w",
                    rating: 1200,
                    themes: ["mate", "diagonal"],
                    explanation: "The bishop controls the long diagonal, supporting the attack."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 9: The center
// ----------------------------------------------------------------------------
export const L5_TOPIC_9_CENTER = {
    title: "The center",
    blocks: [
        {
            name: "Control the Center",
            puzzles: [
                {
                    id: "l5_t9_b1_1",
                    fen: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1", // d4.
                    // Black to move.
                    // 1...d5 or Nf6.
                    goal: "Challenge the Center",
                    solution: ["d7d5"],
                    turn: "b",
                    rating: 1200,
                    themes: ["opening", "center"],
                    explanation: "Occupying the center prevents the opponent from dominating it."
                }
            ]
        },
        {
            name: "Pawn Structure",
            puzzles: [
                {
                    id: "l5_t9_b2_1",
                    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 1 5", // Pirc/Modern.
                    // White center d4 e4.
                    goal: "Maintain Space",
                    solution: ["h2h3", "e8g8", "c1e3"], // Typical development.
                    turn: "w",
                    rating: 1250,
                    themes: ["strategy", "center"],
                    explanation: "A strong pawn center restricts enemy piece activity."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 10: Theory of the main openings
// ----------------------------------------------------------------------------
export const L5_TOPIC_10_OPENINGS = {
    title: "Theory of the main openings",
    blocks: [
        {
            name: "Sicilian Defense",
            puzzles: [
                {
                    id: "l5_t10_b1_1",
                    fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1", // e4.
                    goal: "Play the Sicilian",
                    solution: ["c7c5"],
                    turn: "b",
                    rating: 1200,
                    themes: ["opening"],
                    explanation: "The Sicilian Defense (c5) creates an unbalanced position to fight for a win."
                },
                {
                    id: "l5_t10_b1_2",
                    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", // Open Sicilian setup.
                    // 2...d6
                    goal: "Sicilian d6 Variation",
                    solution: ["d7d6"],
                    turn: "b",
                    rating: 1200,
                    themes: ["opening"],
                    explanation: "d6 controls e5 and prepares Nf6."
                }
            ]
        }
    ]
};
