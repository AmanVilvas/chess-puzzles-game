
// =========================
// Topic 2: Simple Captures
// =========================
export const TOPIC_2_CAPTURES = {
    title: "Simple Captures",
    blocks: [
        {
            id: "t2_b1",
            name: "Basic Captures",
            puzzles: [
                {
                    id: "cap_1_1",
                    // White Knight on e5 is hanging.
                    fen: "rnbqkbnr/pppp1ppp/8/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
                    goal: "Capture the Knight",
                    rating: 200,
                    themes: ["capture"],
                    solution: ["d7d6", "e5c4"], // Wait, this is just kicking.
                    // Let's do actual capture.
                    // Black to move. Capture e4 pawn? No.
                    // Let's use a simpler hanging piece.
                    fen: "rnbqkbnr/pppp1ppp/8/8/3pP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 3", // White just played e4?? No.
                    // Position: Black pawn on d4, White pawn on e4.
                    // Let's use: Queen takes hanging bishop.
                    fen: "rnbqk1nr/pppp1ppp/8/4p3/1b2P3/5Q2/PPPP1PPP/RNB1KBNR w KQkq - 2 3",
                    goal: "Capture the Bishop",
                    solution: ["f3b3", "b4a5"], // No.
                    // Simply: White to move. Take undefended pawn.
                    fen: "rnbqkbnr/ppp2ppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3",
                    goal: "Capture the pawn on d5",
                    solution: ["e4d5"],
                    turn: "w",
                    explanation: "White captures the central pawn."
                },
                {
                    id: "cap_1_2",
                    fen: "rnbqkbnr/ppp2ppp/8/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 4",
                    goal: "Recapture the pawn on e5",
                    rating: 200,
                    themes: ["capture"],
                    solution: ["d6e5"],
                    turn: "b",
                    explanation: "Black recaptures to restore material balance."
                },
                {
                    id: "cap_1_3",
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
                    goal: "Capture the pawn on e5",
                    rating: 100,
                    themes: ["capture"],
                    solution: ["d4e5"],
                    turn: "w",
                    explanation: "White exchanges a central pawn."
                }
            ]
        },
        {
            id: "t2_b2",
            name: "Pieces Exchange",
            puzzles: [
                {
                    id: "cap_2_1",
                    fen: "rnbqkbnr/pppp1ppp/8/8/2B1p3/2N5/PPPPPPPP/R1BQK1NR w KQkq - 0 3",
                    goal: "Capture the undefended pawn on e4",
                    rating: 300,
                    themes: ["capture"],
                    solution: ["c3e4"],
                    turn: "w",
                    explanation: "The white knight captures the loose pawn."
                },
                {
                    id: "cap_2_2",
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 1 2",
                    goal: "Take the hanging pawn on d4",
                    rating: 300,
                    themes: ["capture"],
                    solution: ["e5d4"],
                    turn: "b",
                    explanation: "Black captures the d4 pawn."
                },
                {
                    id: "cap_2_3",
                    fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3",
                    goal: "Capture the Knight on c6",
                    rating: 300,
                    themes: ["capture"],
                    solution: ["b5c6"],
                    turn: "w",
                    explanation: "White exchanges bishop for knight."
                }
            ]
        },
        {
            id: "t2_b3",
            name: "Capturing Unprotected Pieces",
            puzzles: [
                {
                    id: "cap_3_1",
                    fen: "rnbqkbnr/ppp2ppp/8/3pp3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
                    goal: "Capture the pawn on d5",
                    solution: ["e4d5"],
                    turn: "w",
                    rating: 300,
                    themes: ["capture"],
                    explanation: "Pawn captures the unprotected pawn."
                },
                {
                    id: "cap_3_2",
                    fen: "rnbqkbnr/ppp2ppp/8/3pp3/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
                    goal: "Capture the pawn on e5",
                    solution: ["d4e5"],
                    turn: "w",
                    rating: 300,
                    themes: ["capture"],
                    explanation: "White pawn captures the central pawn."
                },
                {
                    id: "cap_3_3",
                    // Knight on f3 can take e5.
                    fen: "rnbqkbnr/ppp2ppp/8/4p3/3pP3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
                    goal: "Capture the pawn on e5",
                    solution: ["f3e5"],
                    turn: "w",
                    rating: 300,
                    themes: ["capture"],
                    explanation: "Knight captures the undefended pawn."
                }
            ]
        },
        {
            id: "t2_b4",
            name: "Recapturing",
            puzzles: [
                {
                    id: "cap_4_1",
                    fen: "rnbqkbnr/pppp1Bpp/8/4p3/4P3/8/PPPP1PPP/RNBQK1NR b KQkq - 0 2",
                    goal: "Capture the bishop",
                    solution: ["e8f7"],
                    turn: "b",
                    rating: 250,
                    themes: ["capture"],
                    explanation: "King captures the attacking bishop."
                },
                {
                    id: "cap_4_2",
                    fen: "rnbqkbnr/pppp1Qpp/8/4p3/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 0 2",
                    goal: "Capture the queen",
                    solution: ["e8f7"], // Wait, solution is Kxf7?? FEN: Q on f7 checks.
                    // If K takes Q, K is on f7.
                    // Correct.
                    turn: "b",
                    rating: 250,
                    themes: ["capture"],
                    explanation: "King captures the queen."
                },
                {
                    id: "cap_4_3",
                    fen: "rnbqkbnr/pppp1ppp/8/8/4p3/3P1N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
                    goal: "Capture the pawn on e4",
                    solution: ["d3e4"],
                    turn: "w",
                    rating: 250,
                    themes: ["capture"],
                    explanation: "Pawn recaptures on e4."
                }
            ]
        },
        {
            id: "t2_b5",
            name: "Free Pieces",
            puzzles: [
                {
                    id: "cap_5_1",
                    fen: "rnbqkbnr/ppp2ppp/8/3p4/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 3",
                    goal: "Capture the pawn on d5", // Actually Bishop on c4 can take d5.
                    solution: ["c4d5"],
                    turn: "w",
                    rating: 200,
                    themes: ["capture"],
                    explanation: "Bishop captures the free pawn."
                },
                {
                    id: "cap_5_2",
                    // Pawn on e5 is hanging?
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
                    goal: "Capture the pawn on e5",
                    solution: ["d4e5"],
                    turn: "w",
                    rating: 200,
                    themes: ["capture"],
                    explanation: "Pawn takes pawn."
                },
                {
                    id: "cap_5_3",
                    // Knight on c3 can take d5.
                    fen: "rnbqkbnr/ppp2ppp/8/3pp3/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 3",
                    goal: "Capture the pawn on d5 with knight",
                    solution: ["c3d5"],
                    turn: "w",
                    rating: 200,
                    themes: ["capture"],
                    explanation: "Knight captures the central pawn."
                }
            ]
        }
    ]
};

// ======================================
// Topic 3: Discovered Check, Double Check
// ======================================
export const TOPIC_3_CHECKS = {
    title: "Discovered check, double check",
    blocks: [
        {
            id: "t3_b1",
            name: "Discovered Check",
            puzzles: [
                {
                    id: "dc_1_1",
                    fen: "4k3/8/8/8/8/4B3/4R3/4K3 w - - 0 1",
                    goal: "Move the bishop to deliver discovered check",
                    solution: ["e3g5"],
                    turn: "w",
                    rating: 600,
                    themes: ["discoveredCheck"],
                    explanation: "Moving the bishop reveals the rook check."
                },
                {
                    id: "dc_1_2",
                    fen: "8/8/8/3k4/8/3N4/3R4/3K4 w - - 0 1",
                    goal: "Deliver discovered check",
                    solution: ["d3b4"],
                    turn: "w",
                    rating: 600,
                    themes: ["discoveredCheck"],
                    explanation: "Knight moves, uncovering rook check."
                },
                {
                    id: "dc_1_3",
                    fen: "k7/8/8/8/8/B7/8/R6K w - - 0 1",
                    goal: "Move bishop to give discovered check",
                    solution: ["a3b2"],
                    turn: "w",
                    rating: 600,
                    themes: ["discoveredCheck"],
                    explanation: "Bishop moves away, rook gives check."
                }
            ]
        },
        {
            id: "t3_b2",
            name: "Double Check",
            puzzles: [
                {
                    id: "dc_2_1",
                    fen: "4k3/8/8/8/8/3N4/3R4/3K4 w - - 0 1",
                    goal: "Deliver double check",
                    solution: ["d3f4"], // Checks e6 and d5(Rook). 
                    // Actually, if N moves to f4, it doesn't give check itself to e8?
                    // FEN K is on e8.
                    // N on d3 can check e8? No, too far.
                    // We need N to check e8.
                    // N on d6 checks e8.
                    // So N moves to?
                    // Let's fix this FEN/Solution.
                    // FEN: K on e8. R on d2. N on d3.
                    // R is on d-file. K is on e-file. Moving N doesn't reveal check from R (unless R on e2).
                    // Wait, previous file had R on e2?
                    // Previous file dc_1_1 has R on e2.
                    // dc_2_1 has R on d2? And K on e8? Then R doesn't check via discovery.
                    // Let's use FEN from dc_1_1 for Double Check but with N.
                    // K on e8. R on e2. N on e4?
                    // If N moves to d6 (Check), R checks e8.
                    // FEN: 4k3/8/8/8/4N3/8/4R3/4K3 w - - 0 1
                    // N on e4 blocks R on e2.
                    // 1. Nd6+ (Double Check).
                    // Let's WRITE this FEN.
                    fen: "4k3/8/8/8/4N3/8/4R3/4K3 w - - 0 1",
                    solution: ["e4d6"],
                    turn: "w",
                    rating: 800,
                    themes: ["doubleCheck"],
                    explanation: "Knight checks and Rook checks simultaneously."
                },
                {
                    id: "dc_2_2",
                    fen: "6k1/8/8/8/4N3/8/6R1/6K1 w - - 0 1", // K on g8. R on g2. N on e4.
                    // N on e4 does not block g-file.
                    // Wait, this is not discovered check setup.
                    // We need N to mask R?
                    // No, "Double check with Knight".
                    // Knight moves and Gives Check. Rook also Checks.
                    // R must be checking line.
                    // If R is on g2, K on g8. It's direct check unless blocked.
                    // So N must be on g-file?
                    // If N on g5. Masks R.
                    // Move N to h6+ (Check). R checks g8.
                    // So FEN should have N on g4 or g5.
                    fen: "6k1/8/8/6N1/8/8/6R1/6K1 w - - 0 1", // N on g5 masking R on g2.
                    goal: "Double check with Knight",
                    solution: ["g5h6"], // or f6?
                    // Nf6 doesn't check g8. Nh6 checks f7...
                    // Nh6 checks g8? No! Nh6 attacks f7 and g4.
                    // How to check g8 with Knight?
                    // From f6, h6, e7.
                    // So N must move TO f6 or h6.
                    // So N must start somewhere else.
                    // AND R must be revealed.
                    // So R must be behind N.
                    // This implies N is ON the line.
                    // If R checks g8, N must move OFF the g-file.
                    // AND N must land on f6 or h6.
                    // If N lands on f6 (checking g8).
                    // Where did N come from? e.g. e4, d5, g4...
                    // If N came from g4 (masking R).
                    // Ng4 -> f6. double check?
                    // Yes. R checks g8. N checks g8.
                    // So start N on g4.
                    fen: "6k1/8/8/8/6N1/8/6R1/6K1 w - - 0 1",
                    goal: "Double check with Knight",
                    solution: ["g4f6"],
                    turn: "w",
                    rating: 800,
                    themes: ["doubleCheck"],
                    explanation: "Knight checks from f6, and Rook is revealed."
                },
                {
                    id: "dc_2_3",
                    fen: "6k1/5R2/8/8/8/1B6/8/7K w - - 0 1", // R on f7 covers B on f7? No B on b3 targets g8? No.
                    // b3->g8 diagonal is blockable by f7.
                    // f7 IS on the diagonal (b3-c4-d5-e6-f7-g8).
                    // K on g8.
                    // R on f7 blocks B.
                    // Move R to check (e.g. f8).
                    // B checks g8.
                    // R checks g8 (from f8 adjacency).
                    // YES.
                    goal: "Move Rook to reveal check and give check",
                    solution: ["f7f8"],
                    turn: "w",
                    rating: 800,
                    themes: ["doubleCheck"],
                    explanation: "Rook checks from f8, Bishop checks from b3."
                }
            ]
        }
    ]
};
