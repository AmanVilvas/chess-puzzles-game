
// Topic 2: Simple Captures
export const TOPIC_2_CAPTURES = {
    title: "Simple Captures",
    blocks: [
        {
            id: "t2_b1",
            name: "Basic Captures",
            puzzles: [
                {
                    id: "cap_1_1",
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
                    goal: "Capture the unprotected pawn",
                    // Black to play, capture e4? Wait, e4 is guarded by knight usually.
                    // Let's use simpler positions where capture is obvious and good.
                    // Position: White Queen can take undefended pawn.
                    fen: "rn1qkbnr/ppp2ppp/3p4/4p3/2B1P1b1/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4",
                    // A simple capture example: BxN or QxP?
                    // Let's construct simpler specific positions.
                    fen: "rnbqkbnr/ppp2ppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3", // Scotch game start
                    goal: "Take the pawn on d5",
                    rating: 200,
                    themes: ["capture"],
                    solution: ["e4d5"],
                    turn: "w",
                    explanation: "White captures the central pawn on d5."
                },
                {
                    id: "cap_1_2",
                    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
                    // Let's use a hanging piece scenario.
                    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
                    // Goal: Black takes pawn... no, let's do a simple exchange.
                    fen: "rnbqkbnr/ppp2ppp/8/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 4",
                    goal: "Recapture the pawn",
                    rating: 200,
                    themes: ["capture"],
                    solution: ["d8d5"], // Queen takes
                    turn: "b", // actually QxD5 is standard if e x d5 was played
                    explanation: "Black re-establishes material equality by capturing the pawn."
                },
                {
                    id: "cap_1_3",
                    fen: "rnbqkbnr/ppp2ppp/8/8/3pP3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 4",
                    goal: "Capture the advanced pawn",
                    rating: 200,
                    themes: ["capture"],
                    solution: ["d1d4"], // Queen takes d4? No, c3 pawn takes?
                    // Let's create a guaranteed capture
                    fen: "8/8/8/3p4/2R5/8/8/8 w - - 0 1", // Rook next to pawn
                    goal: "Verify capture mechanics: Rook takes Pawn",
                    rating: 100,
                    themes: ["capture"],
                    solution: ["c4d4"], // wait c4 is file 3, d4 is file 4.
                    // c4 is file c, rank 4. d5 is file d, rank 5.
                    // The fen is simplistic. Let's stick to real opening fragments for "Simple Captures"
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2", // Center Game
                    goal: "Capture the pawn",
                    rating: 100,
                    themes: ["capture"],
                    solution: ["d4e5"],
                    turn: "w",
                    explanation: "White exchanges a center pawn."
                }
            ]
        },
        {
            id: "t2_b2",
            name: "Pieces Exchange",
            puzzles: [
                {
                    id: "cap_2_1",
                    fen: "rnbqkbnr/pppp1ppp/8/8/4p3/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 3",
                    goal: "Take the pawn? No, Knight is attacked.",
                    // Let's use simpler setup.
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
                    fen: "rnbqkbnr/pppp1ppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", // Standard
                    // Let's modify FEN for a capture
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 1 2",
                    goal: "White played d4. Take the hanging pawn.",
                    rating: 300,
                    themes: ["capture"],
                    solution: ["e5d4"],
                    turn: "b",
                    explanation: "Black captures the d4 pawn."
                },
                {
                    id: "cap_2_3",
                    fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", // Ruy Lopez
                    goal: "Exchange the Knight (Standard theme)",
                    rating: 300,
                    themes: ["capture"],
                    solution: ["a7a6", "b5c6"], // Wait, user wants puzzles.
                    // Puzzle: White to move and capture on c6? Or specific capture task.
                    fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3",
                    goal: "Capture the Knight on c6",
                    rating: 300,
                    themes: ["capture"],
                    solution: ["b5c6"],
                    turn: "w",
                    explanation: "White exchanges Bishop for Knight."
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
                    goal: "Capture the pawn on d5 or e5",
                    solution: ["e4d5"],
                    turn: "w",
                    rating: 300, themes: ["capture"], explanation: "Simple pawn capture."
                },
                {
                    id: "cap_3_2",
                    fen: "rnbqkbnr/ppp2ppp/8/3pp3/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
                    goal: "Capture the pawn",
                    solution: ["d4e5"],
                    turn: "w",
                    rating: 300, themes: ["capture"], explanation: "Capturing the central pawn."
                },
                {
                    id: "cap_3_3",
                    fen: "rnbqkbnr/ppp2ppp/8/4p3/3pP3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", // d4 pawn is annoying
                    goal: "Can we capture e5?", // Nf3 can take e5
                    solution: ["f3e5"],
                    turn: "w",
                    rating: 300, themes: ["capture"], explanation: "Knight captures the undefended pawn."
                }
            ]
        },
        {
            id: "t2_b4",
            name: "Recapturing",
            puzzles: [
                {
                    id: "cap_4_1",
                    fen: "rnbqkbnr/pppp1ppp/8/8/3pP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3", // White just took? No
                    // White played e4, Black d5, exd5Qxd5
                    fen: "rnb1kbnr/pppp1ppp/8/4p3/3Pq3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4", // Queen on e4, checks
                    goal: "Capture the Queen",
                    solution: ["d1e2", "e4e2", "f1e2"], // Too complex
                    // Simple Recapture
                    fen: "rnbqkbnr/ppp2ppp/8/3P4/4p3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4", // Black pawn on e4 attack f3
                    goal: "Don't capture, move away? Wait, topic is CAPTURE",
                    // Simple: White bishop takes f7
                    fen: "rnbqkbnr/pppp1Bpp/8/4p3/4P3/8/PPPP1PPP/RNBQK1NR b KQkq - 0 2",
                    goal: "Capture the bishop",
                    solution: ["e8f7"],
                    turn: "b",
                    rating: 250, themes: ["capture"], explanation: "King recaptures the bishop."
                },
                {
                    id: "cap_4_2",
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 1 2",
                    goal: "Capture the bishop if it sacrifices (Hypothetical)",
                    // Actual setup: Queen takes pawn
                    fen: "rnbqkbnr/pppp1Qpp/8/4p3/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 0 2",
                    goal: "Capture the Queen",
                    solution: ["e8f7"],
                    turn: "b",
                    rating: 250, themes: ["capture"], explanation: "King captures the Queen."
                },
                {
                    id: "cap_4_3",
                    fen: "rnbqkbnr/pppp1ppp/8/8/4p3/3P1N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
                    goal: "Capture the pawn on e4",
                    solution: ["d3e4"],
                    turn: "w",
                    rating: 250, themes: ["capture"], explanation: "Pawn recaptures."
                }
            ]
        },
        {
            id: "t2_b5",
            name: "Free Pieces",
            puzzles: [
                {
                    id: "cap_5_1",
                    fen: "rnbqkbnr/pppp1ppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", // Default
                    // hanging knight
                    fen: "rnbqkbnr/pppp1ppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                    // Let's place a hanging piece
                    fen: "rnbqkbnr/pppp1ppp/8/8/4n3/8/PPPPPPPP/RNBQKBNR w KQkq - 0 2", // Knight on e4
                    goal: "Take the knight with pawn (d or f)",
                    solution: ["d2d3", "e4f6"], // Wait, user wants 1 move capture usually
                    // Direct capture
                    fen: "rnbqkbnr/pppp1ppp/8/8/3n4/8/PPPPPPPP/RNBQKBNR w KQkq - 0 2", // Knight on d4
                    goal: "Capture with c2 or e2 pawn? No, usually not good opening.",
                    // Queen takes knight
                    fen: "rnbqkbnr/pppp1ppp/8/8/3nQ3/8/PPPPPPPP/RNB1KBNR b KQkq - 0 2", // Q on e4 checks.
                    goal: "Capture the Queen",
                    solution: ["d4e2", "f1e2"], // No
                    // Simplest hanging piece
                    fen: "rnbqkbnr/pppp1ppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR b KQkq - 1 1", // White played Nc3
                    // Black bishop takes c3?
                    fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", // Ruy Lopez
                    goal: "Capture on c3? No.",
                    // Let's do: Queen takes undefended Bishop
                    fen: "rnbqkbnr/pppp1ppp/8/8/2B1p3/5Q2/PPPP1PPP/RNB1K1NR b KQkq - 1 3", // White Q on f3, B on c4.
                    goal: "Black to move. Queen on f3 is defended. Bishop on c4 is undefended?",
                    // White bishop on c4 is undefended if d3 not played.
                    // Black d5 attacks it.
                    fen: "rnbqkbnr/ppp2ppp/8/3p4/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 3",
                    goal: "Capture the pawn",
                    solution: ["c4d5"],
                    turn: "w",
                    rating: 200, themes: ["capture"], explanation: "Bishop captures pawn."
                },
                {
                    id: "cap_5_2",
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
                    goal: "Capture e5",
                    solution: ["d4e5"],
                    turn: "w",
                    rating: 200, themes: ["capture"], explanation: "Pawn takes pawn."
                },
                {
                    id: "cap_5_3",
                    fen: "rnbqkbnr/ppp2ppp/8/3pp3/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 3",
                    goal: "Capture d5 with Knight",
                    solution: ["c3d5"],
                    turn: "w",
                    rating: 200, themes: ["capture"], explanation: "Knight takes central pawn."
                }
            ]
        }
    ]
};

// Topic 3: Discovered check, double check
export const TOPIC_3_CHECKS = {
    title: "Discovered check, double check",
    blocks: [
        {
            id: "t3_b1",
            name: "Discovered Check",
            puzzles: [
                {
                    id: "dc_1_1",
                    fen: "rnbqkbnr/ppp2ppp/8/3pp3/3P4/4P3/PPP2PPP/RNBQKBNR w KQkq - 0 3",
                    // Need a discovered check position.
                    // White Rook on e1, Black King on e8. e-file open except for white bishop on e2.
                    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1", // Start
                    // Constructed Discovered Check
                    fen: "rnbqkbnr/pppp1ppp/8/8/8/4P3/PPP2PPP/RNBQKBNR b KQkq - 0 1",
                    // Better: R vs K
                    fen: "4k3/8/8/8/8/4B3/4R3/4K3 w - - 0 1", // White R on e2, B on e3, K on e1. Black K on e8.
                    // Bishop moves, Rook checks.
                    goal: "Move the bishop to deliver discovered check",
                    solution: ["e3g5", "e3f4", "e3d2", "e3c1", "e3h6"], // Any bishop move works? 
                    // Let's pick a specific good move. Bishop to g5 checks and pins/attacks?
                    // Just 'e3g5' as primary solution.
                    solution: ["e3g5"],
                    turn: "w",
                    rating: 600, themes: ["discoveredCheck"], explanation: "Moving the bishop reveals an attack from the rook."
                },
                {
                    id: "dc_1_2",
                    fen: "8/8/8/8/3k4/8/3R4/3K1B2 b - - 0 1", // Black K on d4, White R on d2.
                    // Wait, this is direct check.
                    // Need: White piece masking the rook.
                    fen: "8/8/8/3k4/8/3N4/3R4/3K4 w - - 0 1", // Knight on d3 masks R on d2.
                    goal: "Move Knight to check (Discovered)",
                    solution: ["d3b4", "d3f4", "d3c5", "d3e5"], // Double check if Knight also checks?
                    // Nb4 checks (Knight check + ??? No R check is masked by K?)
                    // R is on d2. K is on d5. N is on d3.
                    // N moves, R checks d5. Correct.
                    solution: ["d3b4"],
                    turn: "w",
                    rating: 600, themes: ["discoveredCheck"], explanation: "The knight moves, unleashing the rook's check."
                },
                {
                    id: "dc_1_3",
                    fen: "7k/8/8/8/8/1B6/7R/K7 w - - 0 1", // B on b3, R on h2. Mask? No.
                    // R on a-file?
                    fen: "k7/8/8/8/8/1B6/R7/K7 w - - 0 1", // K on a8. R on a2. B on b3 (not blocking).
                    // B needs to be on a-file.
                    fen: "k7/8/8/8/8/1B6/8/R6K w - - 0 1", // R on a1. B on b3? No.
                    fen: "k7/8/8/8/8/B7/8/R6K w - - 0 1", // B on a3 blocks R on a1.
                    goal: "Move bishop to check",
                    solution: ["a3b2", "a3c1", "a3d6", "a3e7", "a3f8"],
                    solution: ["a3b2"],
                    turn: "w",
                    rating: 600, themes: ["discoveredCheck"], explanation: "Moving the bishop reveals the rook."
                }
            ]
        },
        {
            id: "t3_b2",
            name: "Double Check",
            puzzles: [
                {
                    id: "dc_2_1",
                    fen: "8/8/8/3k4/8/3N4/3R4/3K4 w - - 0 1", // Same as above
                    // Move Knight to check AND reveal Rook check.
                    // K on d5. R on d2. N on d3.
                    // If N moves to b4, N checks d5. R checks d5. DOUBLE CHECK.
                    goal: "Deliver Double Check",
                    solution: ["d3b4"],
                    turn: "w",
                    rating: 800, themes: ["doubleCheck"], explanation: "Knight checks and Rook checks simultaneously."
                },
                {
                    id: "dc_2_2",
                    // R and B battery double check.
                    // K on e8. R on e1. B on e2.
                    fen: "4k3/8/8/8/8/4B3/4R3/4K3 w - - 0 1",
                    // B moves to check?
                    // if B moves to g5, no check from B (diagonal). 
                    // Need B to check e8? Impossible from e3.
                    // Setup: K on a8. R on b1? No.
                    // K on g8.
                    // R on g1. N on g5.
                    fen: "6k1/8/8/6N1/8/8/6R1/6K1 w - - 0 1",
                    // N on g5 masks R on g2.
                    // N moves to h6 (Check K on g8?), R checks g8.
                    // Nh6+ (Check). Rg8+ (Check).
                    goal: "Double check with Knight",
                    solution: ["g5h6"], // N attacks g8? No, g8 is attacked by N at h6?
                    // Nh6 attacks f7, g8? No. 
                    // Nh6: L-shape. 1-2. h6->g8 is 1 diag? No. h6->f7, g8(no), f5, g4
                    // N at h6 attacks f7 and g4. Not g8.
                    // Need N at f6 or h6 to attack g8? 
                    // Nf6 attacks g8? f6->g8 (1 right 2 up? No 1 right 2 up is g8).
                    // Yes f6 attacks h7 and e8... and g8(no).
                    // Wait, Knight move logic:
                    // f6 -> d7, e8, g8, h7.
                    // So Nf6 checks Kg8? No. 
                    // f6 -> e8 (1 left 2 up), g8 (1 right 2 up). Yes!
                    // So if N is on e4.
                    fen: "6k1/8/8/8/4N3/8/6R1/6K1 w - - 0 1",
                    // Ne4 -> f6 (Check). R checks g8.
                    goal: "Move Knight to f6 for double check",
                    solution: ["e4f6"],
                    turn: "w",
                    rating: 800, themes: ["doubleCheck"], explanation: "Knight checks from f6, and Rook is revealed."
                },
                {
                    id: "dc_2_3",
                    // Queen and Rook double check? No, usually not possible (line pieces).
                    // Battery (R+B or Q+N etc).
                    // K on h8. B on b2 (long diagonal).
                    // R on g7? (Blocking).
                    // If R moves, B checks h8.
                    // If R moves to g8, it checks h8? No adj.
                    // If R moves with check.
                    fen: "7k/6R1/8/8/8/1B6/8/7K w - - 0 1", // R on g7 blocks B on b3 targeting h8? No b3->g8->h? No.
                    // b3->c4->d5->e6->f7->g8. h8 is not on diagonal.
                    // K on g8.
                    fen: "6k1/6R1/8/8/8/1B6/8/7K w - - 0 1", // B on b3 targets g8. R on g7 blocks? No g7 is not on diag b3-g8. f7 is.
                    // R on f7.
                    fen: "6k1/5R2/8/8/8/1B6/8/7K w - - 0 1",
                    // Rf7 blocks B on b3.
                    // Move R to check.
                    // Rf8+ (Check). B checks g8? Yes diagonal is open.
                    goal: "Move Rook to reveal check and give check",
                    solution: ["f7f8"],
                    turn: "w",
                    rating: 800, themes: ["doubleCheck"], explanation: "Rook checks from f8, Bishop checks from b3."
                }
            ]
        }
    ]
};
