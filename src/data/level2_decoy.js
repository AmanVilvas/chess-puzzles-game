export const DECOY_PUZZLES = {
    title: "Decoy",
    blocks: [
        {
            name: "Block 1",
            puzzles: [
                {
                    id: "decoy_p1",
                    type: "board",
                    fen: "r2r3k/pppbn1pp/2np4/2P5/5q2/1BB3N1/PPQ2PP1/R4R1K w - - 0 1",
                    goal: "Find the winning combination using the decoy tactic",
                    solution: ["Bxg7+", "Kxg7", "Nh5+", "Kh6", "Nxf4"],
                    turn: "w",
                    rating: 1200,
                    themes: ["sacrifice", "decoy", "fork"],
                    explanation: "Sacrifice the bishop on g7 to lure the king, then use a knight fork to win the queen."
                },
                {
                    id: "decoy_p2",
                    type: "board",
                    fen: "1Q4rk/7p/6p1/3N4/3pq3/6Pb/1P3P2/3R2K1 w - - 0 1",
                    goal: "Use a queen sacrifice to decoy the king and win material",
                    solution: ["Qxg8+", "Kxg8", "Nf6+", "Kh8", "Nxe4"],
                    turn: "w",
                    rating: 1250,
                    themes: ["sacrifice", "decoy", "fork"],
                    explanation: "Sacrifice the queen on g8 to force the king to capture, then deliver a knight fork to win the queen."
                },
                {
                    id: "decoy_p3",
                    type: "board",
                    fen: "3k4/3p4/3N1K2/7q/8/2B3P1/3P4/8 w - - 0 1",
                    goal: "Find the bishop sacrifice that leads to a royal fork",
                    solution: ["Ba5+", "Qxa5", "Nb7+"],
                    turn: "w",
                    rating: 1300,
                    themes: ["sacrifice", "decoy", "royal-fork"],
                    explanation: "Sacrifice the bishop to lure the queen away, then deliver a royal fork with the knight."
                },
                {
                    id: "decoy_p4",
                    type: "board",
                    fen: "5q2/8/8/4Q2p/P1p3k1/1p6/1P5K/8 w - - 0 1",
                    goal: "Use queen checks to decoy the king and capture the opponent's queen",
                    solution: ["Qg3+", "Kf5", "Qf3+", "Kg5", "Qxf8"],
                    turn: "w",
                    rating: 1350,
                    themes: ["decoy", "queen-endgame"],
                    explanation: "Force the king away from defending the queen with checks, then capture the undefended queen."
                },
                {
                    id: "decoy_p5",
                    type: "board",
                    fen: "r1bq1rk1/ppp2ppp/8/3n4/8/2NB3P/PPP2PP1/R2Q1RK1 w - - 0 1",
                    goal: "Combine knight and bishop sacrifices to win the queen",
                    solution: ["Nxd5", "Qxd5", "Bxh7+", "Kxh7", "Qxd5"],
                    turn: "w",
                    rating: 1400,
                    themes: ["sacrifice", "decoy", "combination"],
                    explanation: "Sacrifice the knight to lure the queen, then sacrifice the bishop to decoy the king, finally capturing the queen."
                }
            ]
        },
        {
            name: "Block 2",
            puzzles: [
                {
                    id: "decoy_p6",
                    type: "board",
                    fen: "r5k1/p4p1p/1p4p1/5N2/8/1P4Pq/P3BP1P/R5K1 w - - 0 1",
                    goal: "Use a bishop sacrifice to decoy the queen and win it with a knight fork",
                    solution: ["Bg4", "Qxg4", "Nh6+", "Kg7", "Nxg4"],
                    turn: "w",
                    rating: 1450,
                    themes: ["sacrifice", "decoy", "fork"],
                    explanation: "Sacrifice the bishop to lure the queen, then use a knight check to fork and capture the queen."
                },
                {
                    id: "decoy_p7",
                    type: "board",
                    fen: "8/6p1/8/k3p2q/8/6P1/1P1NR2P/6K1 w - - 0 1",
                    goal: "Sacrifice the rook to decoy the queen and win it with a knight fork",
                    solution: ["Rxe5+", "Qxe5", "Nc4+", "Ka6", "Nxe5"],
                    turn: "w",
                    rating: 1500,
                    themes: ["sacrifice", "decoy", "fork"],
                    explanation: "Sacrifice the rook to lure the queen away, then deliver a knight fork to win the queen."
                },
                {
                    id: "decoy_p8",
                    type: "board",
                    fen: "8/1P3Pk1/6p1/8/8/p2P4/7p/4K3 w - - 0 1",
                    goal: "Use pawn promotions as decoys to win material",
                    solution: ["f8=Q+", "Kxf8", "b8=Q+", "Kf7", "Qxh2"],
                    turn: "w",
                    rating: 1550,
                    themes: ["decoy", "promotion", "endgame"],
                    explanation: "Promote pawns to queens as decoys, forcing the king to capture, then capture the opponent's pawn."
                },
                {
                    id: "decoy_p9",
                    type: "board",
                    fen: "2Q2qk1/p5pp/1p3n2/5P1B/2Prp3/P1N5/1P4KP/8 w - - 0 1",
                    goal: "Find the bishop sacrifice that leads to checkmate",
                    solution: ["Bf7+", "Kxf7", "Qe6#"],
                    turn: "w",
                    rating: 1600,
                    themes: ["sacrifice", "decoy", "checkmate"],
                    explanation: "Sacrifice the bishop to decoy the king to f7, then deliver checkmate with the queen on e6."
                }
            ]
        }
    ]
};

