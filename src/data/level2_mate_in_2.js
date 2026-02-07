// Level 2 - Mate in 2 Puzzles
// Topic: Forced mate in 2
// These puzzles require finding a forcing sequence that leads to checkmate in 2 moves

export const MATE_IN_2_PUZZLES = {
    title: "Forced mate in 2",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                // Puzzle 1a: White to play - Rxh7+ Kxh7 Rh5#
                {
                    id: "mate2_p1",
                    type: "board",
                    fen: "4r1rk/5K1b/7R/R7/8/8/8/8 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rxh7", "Rh5"],
                    turn: "w",
                    rating: 200,
                    themes: ["mate in 2", "rook sacrifice"]
                },
                // Puzzle 1b: White to play - Rxa3+ Kxa3 Ra5#
                {
                    id: "mate2_p2",
                    type: "board",
                    fen: "8/1r6/8/3R4/k7/p1K5/4r3/R7 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rxa3", "Ra5"],
                    turn: "w",
                    rating: 210,
                    themes: ["mate in 2", "rook sacrifice"]
                },
                // Puzzle 1c: White to play - Rh8+ Kxh8 Rf8#
                {
                    id: "mate2_p3",
                    type: "board",
                    fen: "6k1/8/6K1/8/8/3r4/4r3/5R1R w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rh8", "Rf8"],
                    turn: "w",
                    rating: 220,
                    themes: ["mate in 2", "back rank"]
                },
                // Puzzle 1d: White to play - Rxd7+ Kxd7 Rd5#
                {
                    id: "mate2_p4",
                    type: "board",
                    fen: "2rkr3/2ppp3/2n1n3/R2R4/8/8/3K4/8 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rxd7", "Rd5"],
                    turn: "w",
                    rating: 230,
                    themes: ["mate in 2", "rook sacrifice"]
                },
                // Puzzle 1e: White to play - Rf7+ Bxf7 Rxf7#
                {
                    id: "mate2_p5",
                    type: "board",
                    fen: "4rkr1/1R1R4/4bK2/8/8/8/8/8 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rf7", "Rxf7"],
                    turn: "w",
                    rating: 240,
                    themes: ["mate in 2", "rook sacrifice"]
                }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                // Puzzle 2a: White to play - Rgg6 gxh6 Rg8#
                {
                    id: "mate2_p6",
                    type: "board",
                    fen: "5K1k/6pp/7R/8/8/8/8/6R1 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rgg6", "Rg8"],
                    turn: "w",
                    rating: 250,
                    themes: ["mate in 2", "rook mate"]
                },
                // Puzzle 2b: White to play - Rh8+ Bxh8 Rxh8#
                {
                    id: "mate2_p7",
                    type: "board",
                    fen: "2k5/1q4b1/3K4/8/7R/8/7R/8 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rh8", "Rxh8"],
                    turn: "w",
                    rating: 260,
                    themes: ["mate in 2", "back rank"]
                },
                // Puzzle 2c: White to play - Rh3+ gxh3 Rxh3#
                {
                    id: "mate2_p8",
                    type: "board",
                    fen: "8/8/q5b1/7k/5Kp1/1R1R4/8/8 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rh3", "Rxh3"],
                    turn: "w",
                    rating: 270,
                    themes: ["mate in 2", "rook sacrifice"]
                },
                // Puzzle 2d: White to play - Re8+ Bxe8 Rc8#
                {
                    id: "mate2_p9",
                    type: "board",
                    fen: "k7/3b4/1K6/8/8/5q2/2R1R3/8 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Re8", "Rc8"],
                    turn: "w",
                    rating: 280,
                    themes: ["mate in 2", "back rank"]
                },
                // Puzzle 2e: White to play - Rb4+ axb4 Ra7#
                {
                    id: "mate2_p10",
                    type: "board",
                    fen: "8/1R1R4/8/p7/k1K5/r5r1/8/8 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rb4", "Ra7"],
                    turn: "w",
                    rating: 290,
                    themes: ["mate in 2", "rook sacrifice"]
                }
            ]
        },
        {
            id: "block_3",
            puzzles: [
                // Puzzle 3a: White to play - Ra4+ bxa4 Ra5#
                {
                    id: "mate2_p11",
                    type: "board",
                    fen: "kr6/1p6/8/1p5R/6R1/8/1r6/5K2 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Ra4", "Ra5"],
                    turn: "w",
                    rating: 300,
                    themes: ["mate in 2", "rook sacrifice"]
                },
                // Puzzle 3b: White to play - R1g4+ hxg4 Rh8#
                {
                    id: "mate2_p12",
                    type: "board",
                    fen: "6R1/8/8/7p/5K1k/r6r/8/6R1 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["R1g4", "Rh8"],
                    turn: "w",
                    rating: 310,
                    themes: ["mate in 2", "rook sacrifice"]
                },
                // Puzzle 3c: White to play - Rxg4+ (if hxg4 Rh8# or if Kxg4 Re4#)
                {
                    id: "mate2_p13",
                    type: "board",
                    fen: "4R3/8/5K2/7p/R5pk/5npr/8/8 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rxg4", "Rh8", "Re4"],
                    turn: "w",
                    rating: 320,
                    themes: ["mate in 2", "rook sacrifice", "multiple variations"]
                },
                // Puzzle 3d: White to play - Rxb8+ Kxb8 Rd8#
                {
                    id: "mate2_p14",
                    type: "board",
                    fen: "kb6/p4q2/2K5/8/8/8/8/1R1R4 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rxb8", "Rd8"],
                    turn: "w",
                    rating: 330,
                    themes: ["mate in 2", "back rank"]
                },
                // Puzzle 3e: White to play - Rxh5+ Kxh5 Rh4#
                {
                    id: "mate2_p15",
                    type: "board",
                    fen: "8/6p1/6rk/6np/R6R/6K1/8/8 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rxh5", "Rh4"],
                    turn: "w",
                    rating: 340,
                    themes: ["mate in 2", "rook sacrifice"]
                }
            ]
        },
        {
            id: "block_4",
            puzzles: [
                // Puzzle 4a: White to play - Rxb8+ Kxb8 Rd8#
                {
                    id: "mate2_p16",
                    type: "board",
                    fen: "kn1R4/ppp5/2q5/8/8/8/8/3RK3 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rxb8", "Rd8"],
                    turn: "w",
                    rating: 350,
                    themes: ["mate in 2", "back rank"]
                },
                // Puzzle 4b: White to play - Rxc8+ Kxc8 Ra8#
                {
                    id: "mate2_p17",
                    type: "board",
                    fen: "1kb4R/1npp4/8/8/8/8/8/R5K1 w - - 0 1",
                    goal: "Find mate in 2",
                    solution: ["Rxc8", "Ra8"],
                    turn: "w",
                    rating: 360,
                    themes: ["mate in 2", "back rank"]
                }
            ]
        }
    ]
};
