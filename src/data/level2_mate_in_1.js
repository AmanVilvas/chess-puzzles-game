// Level 2 - Mate in 1 Puzzles
// Topic: Mate in 1
// These puzzles are from user-provided positions

export const MATE_IN_1_PUZZLES = {
    title: "Mate in 1",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                // Puzzle 1: White to play - Qxh8#
                {
                    id: "mate1_p1",
                    type: "board",
                    fen: "5k1r/1r2bp2/pq2p1pp/8/3Q4/1PP3P1/P4P1P/3RR1K1 w - - 3 24",
                    goal: "Find mate in 1",
                    solution: ["Qxh8#"],
                    turn: "w",
                    rating: 160,
                    themes: ["mate in 1", "queen mate"]
                },
                // Puzzle 2: White to play - Qxf7#
                {
                    id: "mate1_p2",
                    type: "board",
                    fen: "rn1qk2r/1p3ppp/p2p1b2/3Qp3/2B1P3/2N2b2/PPP2PPP/R3K2R w KQkq - 0 11",
                    goal: "Find mate in 1",
                    solution: ["Qxf7#"],
                    turn: "w",
                    rating: 170,
                    themes: ["mate in 1", "queen mate"]
                },
                // Puzzle 3: White to play - Qf6#
                {
                    id: "mate1_p3",
                    type: "board",
                    fen: "5r1k/1p3p1p/p7/4p3/4q2Q/1N4RP/PPb3P1/K7 w - - 4 27",
                    goal: "Find mate in 1",
                    solution: ["Qf6#"],
                    turn: "w",
                    rating: 150,
                    themes: ["mate in 1", "queen mate"]
                },
                // Puzzle 4: White to play - Nd5#
                {
                    id: "mate1_p4",
                    type: "board",
                    fen: "r2q1bnr/ppp1kBp1/3p3p/4N3/4P3/2N5/PPPP2PP/R1BbK2R w KQ - 1 9",
                    goal: "Find mate in 1",
                    solution: ["Nd5#"],
                    turn: "w",
                    rating: 180,
                    themes: ["mate in 1", "knight mate"]
                },
                // Puzzle 5: Black to play - Rhxh3#
                {
                    id: "mate1_p5",
                    type: "board",
                    fen: "1k6/1b3p1p/p3p2r/2p5/P2pPP2/1B1P1RrP/1PPQ3K/6R1 b - - 0 30",
                    goal: "Find mate in 1",
                    solution: ["Rhxh3#"],
                    turn: "b",
                    rating: 160,
                    themes: ["mate in 1", "rook mate"]
                }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                // Puzzle 6: Black to play - Rh5#
                {
                    id: "mate1_p6",
                    type: "board",
                    fen: "k7/P4R2/4P3/2bPr3/R3B1r1/8/7K/8 b - - 0 47",
                    goal: "Find mate in 1",
                    solution: ["Rh5#"],
                    turn: "b",
                    rating: 170,
                    themes: ["mate in 1", "rook mate"]
                },
                // Puzzle 7: Black to play - Qxh3#
                {
                    id: "mate1_p7",
                    type: "board",
                    fen: "8/5Qpk/p1p4p/7n/8/1Pq4P/P4P2/6RK b - - 4 43",
                    goal: "Find mate in 1",
                    solution: ["Qxh3#"],
                    turn: "b",
                    rating: 165,
                    themes: ["mate in 1", "queen mate"]
                },
                // Puzzle 8: White to play - Qh8#
                {
                    id: "mate1_p8",
                    type: "board",
                    fen: "r2q1k2/3bpp1p/p2p2p1/3P4/P1p5/1PQ2N1P/2P2PP1/6K1 w - - 0 22",
                    goal: "Find mate in 1",
                    solution: ["Qh8#"],
                    turn: "w",
                    rating: 175,
                    themes: ["mate in 1", "queen mate"]
                },
                // Puzzle 9: Black to play - Qxg2#
                {
                    id: "mate1_p9",
                    type: "board",
                    fen: "2r2rk1/1b3ppp/p3pb2/1pPq4/8/P3P2P/1P1NBPP1/2RQ1RK1 b - - 0 17",
                    goal: "Find mate in 1",
                    solution: ["Qxg2#"],
                    turn: "b",
                    rating: 180,
                    themes: ["mate in 1", "queen mate"]
                }
            ]
        }
    ]
};
