
// ============================================================================
// LEVEL 4 PUZZLES - PART 2: INTERMEDIATE
// ============================================================================

// ----------------------------------------------------------------------------
// Topic 5: King and pawn vs King
// ----------------------------------------------------------------------------
export const L4_TOPIC_5_KP_VS_K = {
    title: "King and pawn vs King",
    blocks: [
        {
            name: "Basic Opposition",
            puzzles: [
                {
                    id: "l4_t5_b1_1",
                    fen: "8/8/8/8/4k3/4P3/4K3/8 w - - 0 1", // Pawn e3. K e2. Black K e4.
                    // White to move.
                    // 1. Kd2 Ke5 2. Kd3 Kd5 3. e4+ Ke5 4. Ke3...
                    goal: "Advance the Pawn",
                    solution: ["e2f2", "e4f5", "f2e2", "f5e4", "e3d4"], // Simple triangulation?
                    // Just move forward?
                    // "Take the Opposition".
                    fen: "8/8/8/4k3/4P3/4K3/8/8 w - - 0 1", // e4, Ke3. Black Ke5.
                    // White to move.
                    // 1. Kd3 Ke6 2. Kd4 Kd6 3. e5+ Ke6 4. Ke4
                    goal: "Win the Opposition",
                    solution: ["e3d3", "e5e6", "d3d4"],
                    turn: "w",
                    rating: 1100,
                    themes: ["endgame"],
                    explanation: "Take the opposition to force the enemy king away."
                },
                {
                    id: "l4_t5_b1_2",
                    fen: "8/8/8/3k4/8/3K4/3P4/8 w - - 0 1", // Pawn d2.
                    // Kd3 is opposition.
                    // If Black moved...
                    // "White to move and win".
                    fen: "8/8/8/8/3k4/3P4/3K4/8 w - - 0 1", // P d3. K d2. Black K d4.
                    // 1. Kc2? Kd5?
                    goal: "Advance pawn",
                    solution: ["d2c2", "d4d5", "c2c3", "d5c5", "d3d4"],
                    turn: "w",
                    rating: 1100,
                    themes: ["endgame"],
                    explanation: "Outflanking the opponent."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 6: Pawn endgame principles
// ----------------------------------------------------------------------------
export const L4_TOPIC_6_PAWN_PRINCIPLES = {
    title: "Pawn endgame principles",
    blocks: [
        {
            name: "Passed Pawn",
            puzzles: [
                {
                    id: "l4_t6_b1_1",
                    fen: "8/8/8/p7/P7/8/1k6/2K5 w - - 0 1", // a4 vs a5. Sealed.
                    // Opposition logic.
                    // Topic: Outside Passed Pawn?
                    fen: "8/8/8/8/P7/1k6/8/K7 w - - 0 1", // a4. K a1. Black K b3.
                    // Black to move.
                    // ...Kxa4 Kb2...
                    // Topic: Protected Passed Pawn.
                    fen: "8/8/8/6p1/5P2/6P1/7k/K7 w - - 0 1", // f4, g3 vs g5.
                    // 1. fxg5!
                    goal: "Create a Passed Pawn",
                    solution: ["f4g5", "h2g3", "g5g6"],
                    turn: "w",
                    rating: 1100,
                    themes: ["endgame"],
                    explanation: "Capturing creates an unstoppable passed pawn."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 7: Pawn vs pawn
// ----------------------------------------------------------------------------
export const L4_TOPIC_7_PAWN_VS_PAWN = {
    title: "Pawn vs pawn",
    blocks: [
        {
            name: "Pawn Breakthrough",
            puzzles: [
                {
                    id: "l4_t7_b1_1",
                    fen: "8/8/8/ppp5/1PPP4/8/K6k/8 w - - 0 1", // 3 vs 3 breakthrough.
                    // White: a4, b4, c4. King a2.
                    // Black: a5, b5, c5. King h2.
                    goal: "Break Through",
                    solution: ["b4b5", "a5b4", "c4c5", "b4c5", "a4a5"], // Main line.
                    turn: "w",
                    rating: 1100,
                    themes: ["endgame", "breakthrough"],
                    explanation: "Sacrificing pawns to create a passed pawn is a key breakthrough theme."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 8: Theory of the main openings
// ----------------------------------------------------------------------------
export const L4_TOPIC_8_OPENINGS = {
    title: "Theory of the main openings",
    blocks: [
        {
            name: "Italian Game",
            puzzles: [
                {
                    id: "l4_t8_b1_1",
                    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", // Italian.
                    goal: "Play Giuoco Piano",
                    solution: ["f8c5"],
                    turn: "b",
                    rating: 1000,
                    themes: ["opening"],
                    explanation: "Developing the Bishop to c5 is standard."
                },
                {
                    id: "l4_t8_b1_2",
                    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
                    goal: "Two Knights Defense",
                    solution: ["g8f6"],
                    turn: "b",
                    rating: 1000,
                    themes: ["opening"],
                    explanation: "Developing the Knight attacks e4."
                }
            ]
        }
    ]
};
