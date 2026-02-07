
// ============================================================================
// LEVEL 3 PUZZLES: CLUB PLAYER (600 - 1000 ELO)
// ============================================================================

// ----------------------------------------------------------------------------
// Topic 1: Protecting your pieces
// ----------------------------------------------------------------------------
export const L3_TOPIC_1_PROTECTING = {
    title: "Protecting your pieces",
    blocks: [
        {
            name: "Defending Hanging Pieces",
            puzzles: [
                {
                    id: "l3_t1_b1_1",
                    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                    goal: "Protect the e5 pawn",
                    solution: ["d7d6", "f1c4", "c8e6"],
                    turn: "b",
                    rating: 600,
                    themes: ["defense"],
                    explanation: "d6 supports the e5 pawn firmly."
                },
                {
                    id: "l3_t1_b1_2",
                    fen: "rnbqkbnr/ppp2ppp/8/3p4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 0 3",
                    goal: "Defend the d5 pawn",
                    solution: ["c7c6", "c4d5", "c6d5"],
                    turn: "b",
                    rating: 600,
                    themes: ["defense"],
                    explanation: "c6 supports the center pawn."
                },
                {
                    id: "l3_t1_b1_3",
                    fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
                    goal: "Defend the Knight (or Drive Bishop away)",
                    solution: ["a7a6", "b5a4", "b7b5"],
                    turn: "b",
                    rating: 600,
                    themes: ["defense"],
                    explanation: "kicking the bishop to safety."
                }
            ]
        },
        {
            name: "Interposing",
            puzzles: [
                {
                    id: "l3_t1_b2_1",
                    fen: "rnb1kbnr/pppp1ppp/8/8/4q3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                    goal: "Block the check",
                    solution: ["f1e2", "e4g2", "e2f3"],
                    turn: "w",
                    rating: 650,
                    themes: ["defense"],
                    explanation: "Blocking the check develops the bishop."
                },
                {
                    id: "l3_t1_b2_2",
                    fen: "rnbqk1nr/pppp1ppp/8/8/1b6/4p3/PPPPP1PP/RNBQKBNR w KQkq - 1 2",
                    goal: "Block the check",
                    solution: ["c2c3", "b4a5", "b2b4"],
                    turn: "w",
                    rating: 650,
                    themes: ["defense"],
                    explanation: "Pawn c3 blocks the bishop's line of attack."
                },
                {
                    id: "l3_t1_b2_3",
                    fen: "4k3/8/8/8/8/8/4Q3/4K3 b - - 0 1",
                    goal: "Block the check",
                    solution: ["f8e7", "e2h5", "e8f8"],
                    turn: "b",
                    rating: 650,
                    themes: ["defense"],
                    explanation: "Bishop blocks the queen check."
                }
            ]
        },
        {
            name: "Running Away",
            puzzles: [
                {
                    id: "l3_t1_b3_1",
                    fen: "rnb1kbnr/pppp1ppp/8/4p3/3P2q1/5N1P/PPP1PPP1/RNBQKB1R b KQkq - 0 3",
                    goal: "Save the Queen",
                    solution: ["g4g6", "h3g4", "f7f6"],
                    turn: "b",
                    rating: 600,
                    themes: ["defense"],
                    explanation: "Queen retreats to safety."
                },
                {
                    id: "l3_t1_b3_2",
                    fen: "rnbqkbnr/ppp3pp/5p2/3pN3/3P4/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 4",
                    goal: "Save the Knight",
                    solution: ["e5f3", "f8b4", "c1d2"],
                    turn: "w",
                    rating: 600,
                    themes: ["defense"],
                    explanation: "Knight retreats to f3."
                },
                {
                    id: "l3_t1_b3_3",
                    fen: "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
                    goal: "Save the Bishop",
                    solution: ["b5a4", "b7b5", "a4b3"],
                    turn: "w",
                    rating: 600,
                    themes: ["defense"],
                    explanation: "Bishop retreats to maintain the pin or scope."
                }
            ]
        },
        {
            name: "Counter Attack",
            puzzles: [
                {
                    id: "l3_t1_b4_1",
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
                    goal: "Defend by Counter Attack (Petrov)",
                    solution: ["g8f6", "f3e5", "d7d6"],
                    turn: "b",
                    rating: 700,
                    themes: ["defense"],
                    explanation: "Developing the Knight attacks White's pawn (Petrov Defense)."
                },
                {
                    id: "l3_t1_b4_2",
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 2 3",
                    goal: "Counter Attack",
                    solution: ["g8f6", "d2d3", "f8c5"],
                    turn: "b",
                    rating: 700,
                    themes: ["defense"],
                    explanation: "Developing actively is the best defense."
                },
                {
                    id: "l3_t1_b4_3",
                    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
                    goal: "Play the Two Knights Defense",
                    solution: ["g8f6", "f3g5", "d7d5"],
                    turn: "b",
                    rating: 700,
                    themes: ["defense"],
                    explanation: "Attacking the e4 pawn forces White to react."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 2: Double attack
// ----------------------------------------------------------------------------
export const L3_TOPIC_2_DOUBLE_ATTACK = {
    title: "Double attack",
    blocks: [
        {
            name: "Forking with Pawn",
            puzzles: [
                {
                    id: "l3_t2_b1_1",
                    fen: "rnbqkbnr/pppp1ppp/8/8/2B1N3/8/PPPP1PPP/R1BQK1NR b KQkq - 0 3",
                    goal: "Fork with pawn",
                    solution: ["d7d5", "c4d3", "d5e4"],
                    turn: "b",
                    rating: 800,
                    themes: ["fork"],
                    explanation: "d5 attacks both Bishop and Knight."
                },
                {
                    id: "l3_t2_b1_2",
                    fen: "rnbqkbnr/pppp1ppp/8/8/3N1B2/8/PPP1PPPP/RN1QKB1R b KQkq - 1 3",
                    goal: "Fork",
                    solution: ["e7e5", "f4e3", "e5d4"],
                    turn: "b",
                    rating: 800,
                    themes: ["fork"],
                    explanation: "e5 pawn attacks both Knight and Bishop."
                },
                {
                    id: "l3_t2_b1_3",
                    fen: "rnbqkbnr/pp1ppppp/8/2p1b3/8/4P3/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                    goal: "Fork",
                    solution: ["d2d4", "e5d6", "d4c5"],
                    turn: "w",
                    rating: 800,
                    themes: ["fork"],
                    explanation: "d4 forks the pawn and bishop."
                }
            ]
        },
        {
            name: "Forking with Knight",
            puzzles: [
                {
                    id: "l3_t2_b2_1",
                    fen: "r1bqkbnr/pppp1ppp/2n5/4N3/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 3",
                    goal: "Fork R and Q",
                    solution: ["e5f7", "d8e7", "f7h8"],
                    turn: "w",
                    rating: 850,
                    themes: ["fork"],
                    explanation: "Reviewing the f7 square weakness."
                },
                {
                    id: "l3_t2_b2_2",
                    fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 1 4",
                    goal: "Fork Q and R",
                    solution: ["e4f2", "d1e2", "f2h1"],
                    turn: "b",
                    rating: 850,
                    themes: ["fork"],
                    explanation: "Knight forks Queen and Rook."
                },
                {
                    id: "l3_t2_b2_3",
                    fen: "r3k2r/ppp2ppp/2n5/3np3/8/8/P1P2PPP/R1B1KBNR b KQkq - 1 10",
                    goal: "Fork King and Rook",
                    solution: ["d5c2", "e1d2", "c2a1"],
                    turn: "b",
                    rating: 850,
                    themes: ["fork"],
                    explanation: "Knight forks King and Rook."
                }
            ]
        },
        {
            name: "Double Attack with Queen",
            puzzles: [
                {
                    id: "l3_t2_b3_1",
                    fen: "rn1qkbnr/ppp2ppp/8/3p4/6b1/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 4",
                    goal: "Win the Bishop",
                    solution: ["d1a4", "b8c6", "a4g4"],
                    turn: "w",
                    rating: 900,
                    themes: ["doubleAttack"],
                    explanation: "Queen checks the King and attacks the Bishop simultaneously."
                },
                {
                    id: "l3_t2_b3_2",
                    fen: "rnbqk1nr/pppp1ppp/8/1b2p3/8/8/PPPPPPPP/RNBQKBNR w KQkq - 2 3",
                    goal: "Win the Bishop",
                    solution: ["d1a4", "b8c6", "a4b5"],
                    turn: "w",
                    rating: 900,
                    themes: ["doubleAttack"],
                    explanation: "Queen forks King and Bishop."
                },
                {
                    id: "l3_t2_b3_3",
                    fen: "rn1qkbnr/ppp2ppp/8/3p4/6b1/8/PPPPPPPP/RNBQKBNR w KQkq - 2 3",
                    goal: "Win the Bishop",
                    solution: ["d1a4", "c7c6", "a4g4"],
                    turn: "w",
                    rating: 900,
                    themes: ["doubleAttack"],
                    explanation: "Queen forks King and Bishop."
                }
            ]
        },
        {
            name: "Skewer",
            puzzles: [
                {
                    id: "l3_t2_b4_1",
                    fen: "8/8/8/R7/8/8/3k4/3q4 w - - 0 1",
                    goal: "Win the Queen",
                    solution: ["a5d5", "d2c2", "d5d1"],
                    turn: "w",
                    rating: 900,
                    themes: ["skewer"],
                    explanation: "Rook skewers the King to win the Queen."
                },
                {
                    id: "l3_t2_b4_2",
                    fen: "8/q7/8/3k4/8/8/3Q4/8 w - - 0 1",
                    goal: "Skewer King and Queen",
                    solution: ["d2d7", "d5c4", "d7a7"],
                    turn: "w",
                    rating: 900,
                    themes: ["skewer"],
                    explanation: "Queen checks and wins the opponent's Queen."
                },
                {
                    id: "l3_t2_b4_3",
                    fen: "8/1r6/8/3k4/8/5B2/8/K7 w - - 0 1",
                    goal: "Win the Rook",
                    solution: ["f3d5", "d5c4", "d5b7"],
                    turn: "w",
                    rating: 900,
                    themes: ["skewer"],
                    explanation: "Bishop skewers King and Rook."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 3: The Pin
// ----------------------------------------------------------------------------
export const L3_TOPIC_3_PIN = {
    title: "The Pin",
    blocks: [
        {
            name: "Absolute Pin",
            puzzles: [
                {
                    id: "l3_t3_b1_1",
                    fen: "4k3/8/8/4r3/8/8/4R3/4K3 w - - 0 1",
                    goal: "Win the pinned Rook",
                    solution: ["f2f4", "e8f7", "f4e5"],
                    turn: "w",
                    rating: 900,
                    themes: ["pin"],
                    explanation: "Pinned piece cannot move, so attacking it wins material."
                },
                {
                    id: "l3_t3_b1_2",
                    fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
                    goal: "Win the pinned Knight",
                    solution: ["d7d5", "e4d5", "d8d5"], // Just attacking usually.
                    // This explanation doesn't match puzzle logic well.
                    // Let's use simpler.
                    fen: "3r2k1/8/8/8/4r3/3R4/8/3K4 w - - 0 1", // R d3 pins R e4? No.
                    // "Win the pinned piece".
                    fen: "4k3/8/8/8/3r4/8/3R4/3K4 w - - 0 1",
                    goal: "Win the pinned Rook",
                    solution: ["c2c4", "d4d3", "c4d5"], // Pawn attacks.
                    // Let's stick with ONE really good example per block if needed.
                    // Re-using puzzle #1 pattern is fine.
                    fen: "k7/8/8/8/2r5/8/2R5/2K5 w - - 0 1",
                    goal: "Win the pinned Rook",
                    solution: ["b2b4", "c4c5", "b4c5"], // Pawn attack.
                    turn: "w",
                    rating: 900,
                    themes: ["pin"],
                    explanation: "Attack the pinned piece."
                }
            ]
        },
        {
            name: "Relative Pin",
            puzzles: [
                {
                    id: "l3_t3_b2_1",
                    fen: "3r2k1/4qppp/8/8/8/4B3/8/3RK3 w - - 0 1",
                    goal: "Exploit the Pin",
                    solution: ["e3c5", "e7c5", "d1d8", "c5f8", "d8f8"],
                    turn: "w",
                    rating: 950,
                    themes: ["pin"],
                    explanation: "Bishop attacks the pinned Queen. Moving Queen loses Rook with check."
                }
            ]
        }
    ]
};

// ----------------------------------------------------------------------------
// Topic 4: Mate in 1 in multi-piece positions
// ----------------------------------------------------------------------------
export const L3_TOPIC_4_MATE = {
    title: "Mate in 1",
    blocks: [
        {
            name: "Complex Mate in 1",
            puzzles: [
                {
                    id: "l3_t4_b1_1",
                    fen: "2r3k1/5ppp/8/8/Q7/8/5PPP/2r1R1K1 w - - 0 1",
                    goal: "Deliver Mate",
                    solution: ["a4e8"],
                    turn: "w",
                    rating: 1000,
                    themes: ["mate"],
                    explanation: "Back rank mate with Queen sacrifice."
                },
                {
                    id: "l3_t4_b1_2",
                    fen: "r1bq1rk1/ppp2ppp/2n5/3p4/8/2BB1N2/P1Q2PPP/R4RK1 w - - 0 10",
                    goal: "Deliver Mate",
                    solution: ["d3h7"],
                    turn: "w",
                    rating: 900,
                    themes: ["mate"],
                    explanation: "Bishop and Queen battery delivers mate."
                },
                {
                    id: "l3_t4_b1_3",
                    fen: "6k1/5ppp/8/8/8/8/1R6/1R4K1 w - - 0 1",
                    goal: "Deliver Mate",
                    solution: ["b2b8", "a8b8", "b1b8"],
                    turn: "w",
                    rating: 900,
                    themes: ["mate"],
                    explanation: "Back rank mate with rooks."
                }
            ]
        }
    ]
};
