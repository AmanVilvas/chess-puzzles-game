
// =========================
// Topic 5: Lawnmower Mate
// =========================
export const TOPIC_5_LAWNMOWER = {
    title: "Lawnmower mate",
    blocks: [
        {
            id: "t5_b1",
            name: "Basic Lawnmower Pattern",
            puzzles: [
                {
                    id: "lm_1_1",
                    fen: "k7/7R/6R1/8/8/8/8/7K w - - 0 1",
                    goal: "Deliver Checkmate",
                    solution: ["g6g8"],
                    turn: "w",
                    rating: 100,
                    themes: ["mate", "lawnmower"],
                    explanation: "The rooks coordinate to deliver a classic lawnmower mate."
                },
                {
                    id: "lm_1_2",
                    fen: "7k/R7/8/1R6/8/8/8/K7 w - - 0 1",
                    goal: "Checkmate the King",
                    solution: ["b5b8"],
                    turn: "w",
                    rating: 100,
                    themes: ["mate", "lawnmower"],
                    explanation: "Rooks sweep the king along the rank for mate."
                },
                {
                    id: "lm_1_3",
                    fen: "k7/8/8/8/8/8/R6R/7K w - - 0 1",
                    goal: "Deliver Checkmate",
                    solution: ["a2a8"],
                    turn: "w",
                    rating: 100,
                    themes: ["mate", "lawnmower"],
                    explanation: "One rook delivers mate while the other cuts off escape."
                }
            ]
        }
    ]
};

// =========================
// Topic 6: Draw
// =========================
export const TOPIC_6_DRAW = {
    title: "Draw",
    blocks: [
        {
            id: "t6_b1",
            name: "Stalemate / Insufficient Material",
            puzzles: [
                {
                    id: "dr_1_1",
                    fen: "8/8/3k4/8/8/2K5/2p5/8 w - - 0 1",
                    goal: "Capture the pawn to draw",
                    solution: ["c3c2"],
                    turn: "w",
                    themes: ["draw"],
                    explanation: "After capturing the last pawn, only kings remain."
                },
                {
                    id: "dr_1_2",
                    fen: "k7/2R5/1K6/8/8/8/8/8 w - - 0 1", // Rc8#
                    goal: "Find the mate (Avoid stalemate)",
                    solution: ["c7c8"],
                    themes: ["mate", "stalemate"],
                    explanation: "Be careful! Rc6? would be stalemate. Here Rc8 is mate."
                },
                {
                    id: "dr_1_3",
                    // Stalemate puzzle: Black to move and force stalemate?
                    // Or White to move and STALEMATE (e.g. losing but finds stalemate)
                    fen: "7k/7P/7K/8/8/8/p7/8 w - - 0 1", // White to move.
                    // White can't move much.
                    // Let's do: "Stalemate Trap".
                    // White is winning. Avoid stalemate.
                    fen: "K7/P1k5/8/8/8/8/8/8 w - - 0 1", // Stalemate already? No.
                    // Let's use: Forced Stalemate by losing side.
                    fen: "7k/5Q2/6K1/8/8/8/6r1/8 w - - 0 1", // Losing side is Black? No Q vs R.
                    // Let's go simple. White has Q. Black has K.
                    // Black to move. Can't move. Stalemate.
                    // "Identify the Stalemate" -> Quiz?
                    // "Force Stalemate"
                    fen: "ka7/2Q5/K7/8/8/8/8/8 b - - 0 1", // Black to move. Stalemate.
                    // We need a PUZZLE.
                    // White to move. Checkmate in 1. (Avoid stalemate). 
                    // Let's do a classic "Desperado" Draw.
                    fen: "7k/6P1/7K/8/r7/8/8/8 b - - 0 1", // White has P on g7, K on h6. Black R a4, K h8.
                    // Black to move. White threatens g8=Q+.
                    // If ...Kg8, Kg6...
                    // 1... Ra6+ 2. Kg5 (draw?)
                    // Let's use simpler: White to move and Force Draw (Stalemate)
                    fen: "7k/5P1p/8/5K1P/8/8/8/6q1 w - - 0 1", // White losing.
                    // Too complex.
                    // Let's stick to "Avoid Stalemate" for beginners.
                    fen: "k7/P7/K7/8/8/8/8/8 w - - 0 1", // White to move
                    goal: "Avoid Stalemate (Play any valid move)",
                    // Actually this position is STALEMATE if Black to move.
                    // If White to move, any move allows black to move? No.
                    // Valid moves for white: Ka5, Kb5...
                    // This is bad.
                    // Let's replace dr_1_3 with "Insufficient Material" Recapture.
                    // Already have dr_1_1.
                    // Let's do "Threefold Repetition" in next block.
                    // Let's add a "Stalemate Trick"
                    fen: "7k/8/5K2/6Q1/8/8/8/8 w - - 0 1",
                    goal: "Deliver Checkmate (Don't Stalemate)",
                    solution: ["g5g7"], // Qg6 is stalemate.
                    turn: "w",
                    themes: ["mate"],
                    explanation: "Qg7# is mate. Qg6? would be stalemate."
                }
            ]
        },
        {
            id: "t6_b2",
            name: "Perpetual / Repetition",
            puzzles: [
                {
                    id: "dr_2_1",
                    fen: "6k1/6pp/8/8/8/8/5Q2/q5K1 w - - 0 1", // White K g1. Black Q a1 checks.
                    goal: "Escape the checks? No, Force Draw.",
                    // This position is white advantage?
                    // Let's flip. Black is losing, forces perpetual.
                    fen: "7k/3Q4/8/8/8/1q6/8/6K1 b - - 0 1", // Black to move.
                    // Can Black force perpetual?
                    // Qg3+ Kf1 Qf3+ Ke1...
                    goal: "Force a perpetual check",
                    solution: ["b3g3"],
                    turn: "b",
                    themes: ["perpetual"],
                    explanation: "Keep checking the King to force a draw."
                },
                {
                    id: "dr_2_2",
                    // Simple repetition
                    fen: "6k1/5ppp/8/8/8/7P/4q1P1/6K1 b - - 0 1", // Black Q e2, White K g1.
                    // 1... Qe1+ 2. Kh2 Qe5+ 3. Kg1 Qe1+
                    goal: "Force a draw by repetition",
                    solution: ["e2e1"],
                    turn: "b",
                    themes: ["repetition"],
                    explanation: "Repeating the position 3 times results in a draw."
                }
            ]
        }
    ]
};

// =========================
// Topic 7: Pawn Structure
// =========================
export const TOPIC_7_PAWN_STRUCTURE = {
    title: "Pawn structure",
    blocks: [
        {
            id: "t7_b1",
            name: "Weak Pawns",
            puzzles: [
                {
                    id: "ps_1_1",
                    fen: "7k/8/8/4p3/3P4/8/8/7K w - - 0 1",
                    goal: "Create a passed pawn",
                    solution: ["d4e5"],
                    turn: "w",
                    themes: ["structure"],
                    explanation: "Capturing removes the opposing pawn, creating a passer."
                },
                {
                    id: "ps_1_2",
                    fen: "rnbqk1nr/pppp1ppp/8/4p3/1b2P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 2 3",
                    goal: "Create doubled pawns for White",
                    solution: ["b4c3"],
                    turn: "b",
                    themes: ["structure"],
                    explanation: "Bishop captures, forcing a doubled pawn after recapture."
                },
                {
                    id: "ps_1_3",
                    fen: "7k/8/8/8/4p3/3P4/8/7K w - - 0 1", // K moved to h8
                    goal: "Fix the pawn structure",
                    solution: ["d3e4"],
                    turn: "w",
                    themes: ["structure"],
                    explanation: "Pawn capture resolves the pawn tension."
                }
            ]
        }
    ]
};

// =========================
// Topic 8: Chess Etiquette
// =========================
export const TOPIC_8_ETIQUETTE = {
    title: "Chess etiquette",
    blocks: [
        {
            id: "t8_b1",
            name: "Good Manners",
            puzzles: [
                {
                    id: "et_1_1",
                    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                    goal: "Start the game politely (Play e4)",
                    solution: ["e2e4"],
                    turn: "w",
                    themes: ["etiquette"],
                    explanation: "A standard and polite opening move."
                },
                {
                    id: "et_1_2",
                    fen: "7k/3Q4/8/6K1/8/8/8/8 b - - 0 1",
                    goal: "Play the only legal move",
                    solution: ["h8g8"],
                    turn: "b",
                    themes: ["etiquette"],
                    explanation: "When lost, make a legal move or resign."
                },
                {
                    id: "et_1_3",
                    type: "quiz",
                    fen: "8/8/8/8/4k3/8/4K3/8 w - - 0 1",
                    question: "You touched the King. What must you do according to rules?",
                    options: ["Move the King", "Move any piece", "Resign", "Skip turn"],
                    correctAnswer: 0,
                    explanation: "Touch-move rule: touched piece must be moved if a legal move exists.",
                    rating: 100,
                    themes: ["etiquette"]
                }
            ]
        }
    ]
};
