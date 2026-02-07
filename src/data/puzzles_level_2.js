export const LEVEL_2_PUZZLES = [
    {
        title: "Value of pieces",
        blocks: [
            {
                id: "block_1",
                puzzles: [
                    {
                        id: "value_b1_1",
                        fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
                        solution: ["c4f7", "e8f7"],
                        goal: "Win the pawn",
                        turn: "w",
                        rating: 250,
                        themes: ["tactics", "material"]
                    },
                    {
                        id: "value_b1_2",
                        fen: "r1bqk2r/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 0 5",
                        solution: ["c5f2", "g1h1"],
                        goal: "Capture the pawn",
                        turn: "b",
                        rating: 280,
                        themes: ["tactics", "material"]
                    },
                    {
                        id: "value_b1_3",
                        fen: "r2qkb1r/ppp2ppp/2np1n2/4p3/2B1P1b1/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6",
                        solution: ["c4f7", "e8f7"],
                        goal: "Win material",
                        turn: "w", rating: 300,
                        themes: ["tactics", "fork"]
                    },
                    {
                        id: "value_b1_4",
                        fen: "rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
                        solution: ["f3e5"],
                        goal: "Capture center pawn",
                        turn: "w", rating: 260,
                        themes: ["tactics", "material"]
                    },
                    {
                        id: "value_b1_5",
                        fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                        solution: ["f3e5"],
                        goal: "Win the pawn",
                        turn: "w", rating: 240,
                        themes: ["tactics", "material"]
                    }
                ]
            },
            {
                id: "block_2",
                puzzles: [
                    {
                        id: "value_b2_1",
                        fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 4",
                        solution: ["e5d4"],
                        goal: "Capture the pawn",
                        turn: "b", rating: 270,
                        themes: ["tactics", "material"]
                    },
                    {
                        id: "value_b2_2",
                        fen: "rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
                        solution: ["c4f7", "e8f7"],
                        goal: "Win material",
                        turn: "w", rating: 290, themes: ["tactics", "material"]
                    },
                    {
                        id: "value_b2_3",
                        fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
                        solution: ["c6d4"], goal: "Win the bishop", turn: "b", rating: 310, themes: ["tactics", "fork"]
                    },
                    {
                        id: "value_b2_4", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 3", solution: ["f6e4"], goal: "Capture center pawn", turn: "b", rating: 250, themes: ["tactics", "material"]
                    },
                    {
                        id: "value_b2_5", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", solution: ["f3e5", "c6e5"], goal: "Trade in center", turn: "w", rating: 280, themes: ["tactics", "exchange"]
                    }
                ]
            }
        ]
    },
    {
        title: "Simple captures", blocks: [
            {
                id: "block_1",
                puzzles: [
                    {
                        id: "capture_b1_1", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", solution: ["c4f7", "e8f7"], goal: "Capture free pawn", turn: "w", rating: 220, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b1_2", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 3", solution: ["d4e5"], goal: "Capture the pawn", turn: "w", rating: 210, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b1_3", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3", solution: ["e5d4"], goal: "Take center pawn", turn: "b", rating: 230, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b1_4", fen: "rnbqkb1r/pppp1ppp/8/4p3/3Pn3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4", solution: ["d1e2"], goal: "Take free knight", turn: "w", rating: 240, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b1_5", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", solution: ["f3e5"], goal: "Win center pawn", turn: "w", rating: 220, themes: ["tactics", "hanging"]
                    }
                ]
            },
            {
                id: "block_2",
                puzzles: [
                    {
                        id: "capture_b2_1", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4", solution: ["d4e5", "d6e5"], goal: "Trade pawns", turn: "w", rating: 250, themes: ["tactics", "exchange"]
                    },
                    {
                        id: "capture_b2_2", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", solution: ["c6d4"], goal: "Fork king and bishop", turn: "b", rating: 280, themes: ["tactics", "fork"]
                    },
                    {
                        id: "capture_b2_3", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", solution: ["f3e5"], goal: "Capture center pawn", turn: "w", rating: 230, themes: ["tactics", "material"]
                    },
                    {
                        id: "capture_b2_4", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", solution: ["f3e5", "c6e5"], goal: "Trade in center", turn: "w", rating: 260, themes: ["tactics", "exchange"]
                    },
                    {
                        id: "capture_b2_5", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 3", solution: ["d4e5"], goal: "Win the pawn", turn: "w", rating: 240, themes: ["tactics", "hanging"]
                    }
                ]
            },
            {
                id: "block_3",
                puzzles: [
                    {
                        id: "capture_b3_1", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3", solution: ["e5d4", "f3d4"], goal: "Trade off center", turn: "b", rating: 270, themes: ["tactics", "exchange"]
                    },
                    {
                        id: "capture_b3_2", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 3", solution: ["f6e4"], goal: "Capture free pawn", turn: "b", rating: 250, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b3_3", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", solution: ["c6d4"], goal: "Win the bishop", turn: "b", rating: 290, themes: ["tactics", "fork"]
                    },
                    {
                        id: "capture_b3_4", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3", solution: ["e5d4"], goal: "Take the pawn", turn: "b", rating: 260, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b3_5", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", solution: ["f3e5"], goal: "Win material", turn: "w", rating: 240, themes: ["tactics", "material"]
                    }
                ]
            },
            {
                id: "block_4",
                puzzles: [
                    {
                        id: "capture_b4_1", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", solution: ["c4f7", "e8f7"], goal: "Take the pawn", turn: "w", rating: 280, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b4_2", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", solution: ["f3e5"], goal: "Capture center pawn", turn: "w", rating: 250, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b4_3", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3", solution: ["e5d4"], goal: "Win the pawn", turn: "b", rating: 270, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b4_4", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 3", solution: ["d4e5"], goal: "Take free pawn", turn: "w", rating: 260, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b4_5", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", solution: ["c6d4"], goal: "Fork and win", turn: "b", rating: 300, themes: ["tactics", "fork"]
                    }
                ]
            },
            {
                id: "block_5",
                puzzles: [
                    {
                        id: "capture_b5_1", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 3", solution: ["f6e4"], goal: "Win center pawn", turn: "b", rating: 270, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b5_2", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", solution: ["f3e5", "c6e5"], goal: "Trade pieces", turn: "w", rating: 290, themes: ["tactics", "exchange"]
                    },
                    {
                        id: "capture_b5_3", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3", solution: ["e5d4"], goal: "Capture the pawn", turn: "b", rating: 260, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b5_4", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", solution: ["c4f7", "e8f7"], goal: "Win material", turn: "w", rating: 280, themes: ["tactics", "hanging"]
                    },
                    {
                        id: "capture_b5_5", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", solution: ["c6d4"], goal: "Fork them", turn: "b", rating: 310, themes: ["tactics", "fork"]
                    }
                ]
            }
        ]
    },
    {
        title: "Discovered check / Double check", blocks: [
            { id: "block_1", puzzles: [{ id: "disc_b1_1", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 5", solution: ["f3e5"], goal: "Discovered check wins", turn: "w", rating: 350, themes: ["discovered-check", "tactics"] }, { id: "disc_b1_2", fen: "r2qkb1r/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 6", solution: ["f3e5"], goal: "Reveal the attack", turn: "w", rating: 370, themes: ["discovered-check", "tactics"] }, { id: "disc_b1_3", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 5", solution: ["f3e5"], goal: "Discovered check", turn: "w", rating: 340, themes: ["discovered-check", "tactics"] }, { id: "disc_b1_4", fen: "r2qkb1r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6", solution: ["c3d5"], goal: "Move to check", turn: "w", rating: 360, themes: ["discovered-check", "tactics"] }, { id: "disc_b1_5", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 4 5", solution: ["f3e5"], goal: "Check and win", turn: "w", rating: 380, themes: ["discovered-check", "tactics"] }] }, { id: "block_2", puzzles: [{ id: "disc_b2_1", fen: "r2qkb1r/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 6", solution: ["f3e5"], goal: "Discovered attack", turn: "w", rating: 390, themes: ["discovered-check", "tactics"] }, { id: "disc_b2_2", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 5", solution: ["f3e5"], goal: "Check and capture", turn: "w", rating: 370, themes: ["discovered-check", "tactics"] }, { id: "disc_b2_3", fen: "r2qkb1r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6", solution: ["c3d5"], goal: "Discover the check", turn: "w", rating: 400, themes: ["discovered-check", "tactics"] }, { id: "disc_b2_4", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 4 5", solution: ["f3e5"], goal: "Win with check", turn: "w", rating: 360, themes: ["discovered-check", "tactics"] }, { id: "disc_b2_5", fen: "r2qkb1r/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 6", solution: ["f3e5"], goal: "Move and check", turn: "w", rating: 380, themes: ["discovered-check", "tactics"] }] }]
    }, { title: "Mate in 1", blocks: [{ id: "block_1", puzzles: [{ id: "mate1_b1_1", fen: "6k1/5ppp/8/8/8/8/5PPP/6KQ w - - 0 1", solution: ["Qh7#"], goal: "Mate in one", turn: "w", rating: 220, themes: ["mate", "mate-in-1"] }, { id: "mate1_b1_2", fen: "7k/6pp/8/8/8/8/6PP/5RK1 w - - 0 1", solution: ["Rf8#"], goal: "Mate in one", turn: "w", rating: 250, themes: ["mate", "rook"] }, { id: "mate1_b1_3", fen: "6k1/5ppp/8/8/8/8/6PP/5QK1 w - - 0 1", solution: ["Qa8#"], goal: "Mate in one", turn: "w", rating: 260, themes: ["mate", "queen"] }, { id: "mate1_b1_4", fen: "6k1/5ppp/8/8/8/8/6PP/6RK w - - 0 1", solution: ["Rg8#"], goal: "Mate in one", turn: "w", rating: 240, themes: ["mate", "rook"] }, { id: "mate1_b1_5", fen: "7k/5Kpp/6R1/8/8/8/8/8 w - - 0 1", solution: ["Rg8#"], goal: "Mate in one", turn: "w", rating: 300, themes: ["mate", "rook"] }] }, { id: "block_2", puzzles: [{ id: "mate1_b2_1", fen: "r6k/6pp/8/8/8/8/8/R5K1 w - - 0 1", solution: ["Ra8#"], goal: "Mate in one", turn: "w", rating: 280, themes: ["mate-in-1"] }, { id: "mate1_b2_2", fen: "5k2/5Q2/5K2/8/8/8/8/8 w - - 0 1", solution: ["Qf7#"], goal: "Mate in one", turn: "w", rating: 260, themes: ["mate-in-1"] }, { id: "mate1_b2_3", fen: "5rk1/6pp/8/8/8/8/8/5RK1 w - - 0 1", solution: ["Rxf8#"], goal: "Mate in one", turn: "w", rating: 300, themes: ["mate-in-1"] }, { id: "mate1_b2_4", fen: "6k1/5Qpp/8/8/8/8/8/6K1 w - - 0 1", solution: ["Qg7#"], goal: "Mate in one", turn: "w", rating: 320, themes: ["mate-in-1"] }, { id: "mate1_b2_5", fen: "4R2k/6pp/8/8/8/8/8/6K1 w - - 0 1", solution: ["Re8#"], goal: "Mate in one", turn: "w", rating: 340, themes: ["mate-in-1"] }] }] }, { title: "Lawnmower mate", blocks: [{ id: "block_1", puzzles: [{ id: "lawn_b1_1", fen: "6k1/6pp/8/8/8/8/R7/R5K1 w - - 0 1", solution: ["a2a8", "g8h7", "a1a7#"], goal: "Lawnmower mate", turn: "w", rating: 320, themes: ["mate", "ladder"] }, { id: "lawn_b1_2", fen: "7k/6pp/8/8/8/8/R7/R5K1 w - - 0 1", solution: ["a2a8", "h8h7", "a1a7#"], goal: "Ladder mate pattern", turn: "w", rating: 340, themes: ["mate", "ladder"] }, { id: "lawn_b1_3", fen: "6k1/5ppp/8/8/8/8/R7/R5K1 w - - 0 1", solution: ["a2a8", "g8h7", "a1a7#"], goal: "Mate with rooks", turn: "w", rating: 310, themes: ["mate", "ladder"] }, { id: "lawn_b1_4", fen: "7k/5ppp/8/8/8/8/R7/R5K1 w - - 0 1", solution: ["a2a8", "h8h7", "a1a7#"], goal: "Deliver ladder mate", turn: "w", rating: 330, themes: ["mate", "ladder"] }, { id: "lawn_b1_5", fen: "6k1/6pp/8/8/8/8/R7/R5K1 w - - 0 1", solution: ["a2a8", "g8h7", "a1a7#"], goal: "Two rook mate", turn: "w", rating: 350, themes: ["mate", "ladder"] }] }] }, { title: "Draw", blocks: [{ id: "block_1", puzzles: [{ id: "draw_b1_1", fen: "7k/8/7K/8/8/8/6Q1/8 w - - 0 1", solution: ["g2g8"], goal: "Force stalemate", turn: "w", rating: 400, themes: ["draw", "stalemate"] }, { id: "draw_b1_2", fen: "8/8/8/8/8/3k4/3P4/3K4 w - - 0 1", solution: ["d2d3"], goal: "Stalemate now", turn: "w", rating: 380, themes: ["draw", "stalemate"] }, { id: "draw_b1_3", fen: "8/8/7k/8/8/8/6Q1/6K1 w - - 0 1", solution: ["g2g8"], goal: "Achieve stalemate", turn: "w", rating: 420, themes: ["draw", "stalemate"] }, { id: "draw_b1_4", fen: "8/8/8/8/8/2k5/2P5/2K5 w - - 0 1", solution: ["c2c3"], goal: "Create stalemate", turn: "w", rating: 390, themes: ["draw", "stalemate"] }, { id: "draw_b1_5", fen: "7k/8/7K/8/8/8/5Q2/8 w - - 0 1", solution: ["f2f8"], goal: "Force draw", turn: "w", rating: 410, themes: ["draw", "stalemate"] }] }, { id: "block_2", puzzles: [{ id: "draw_b2_1", fen: "8/8/8/8/8/4k3/4P3/4K3 w - - 0 1", solution: ["e2e3"], goal: "Stalemate the king", turn: "w", rating: 430, themes: ["draw", "stalemate"] }, { id: "draw_b2_2", fen: "8/8/8/8/8/8/3k4/3PK3 w - - 0 1", solution: ["e1e2"], goal: "Force stalemate", turn: "w", rating: 400, themes: ["draw", "stalemate"] }, { id: "draw_b2_3", fen: "8/8/6k1/8/8/8/5Q2/5K2 w - - 0 1", solution: ["f2g8"], goal: "Create stalemate", turn: "w", rating: 420, themes: ["draw", "stalemate"] }, { id: "draw_b2_4", fen: "8/8/8/8/8/5k2/5P2/5K2 w - - 0 1", solution: ["f2f3"], goal: "Achieve stalemate", turn: "w", rating: 390, themes: ["draw", "stalemate"] }, { id: "draw_b2_5", fen: "8/8/7k/8/8/8/6Q1/6K1 w - - 0 1", solution: ["g2g8"], goal: "Force draw", turn: "w", rating: 440, themes: ["draw", "stalemate"] }] }] }, { title: "Pawn structure", blocks: [{ id: "block_1", puzzles: [{ id: "pawn_b1_1", fen: "8/4k3/8/3P4/8/8/8/4K3 w - - 0 1", solution: ["d5d6"], goal: "Push passed pawn", turn: "w", rating: 280, themes: ["pawn", "endgame"] }, { id: "pawn_b1_2", fen: "8/8/4k3/8/3P4/8/8/4K3 w - - 0 1", solution: ["d4d5"], goal: "Advance the pawn", turn: "w", rating: 260, themes: ["pawn", "endgame"] }, { id: "pawn_b1_3", fen: "8/8/8/4k3/8/4P3/8/4K3 w - - 0 1", solution: ["e3e4"], goal: "Push pawn forward", turn: "w", rating: 270, themes: ["pawn", "endgame"] }, { id: "pawn_b1_4", fen: "8/3k4/8/8/3P4/8/8/3K4 w - - 0 1", solution: ["d4d5"], goal: "Create passed pawn", turn: "w", rating: 290, themes: ["pawn", "endgame"] }, { id: "pawn_b1_5", fen: "8/8/3k4/8/8/3P4/8/3K4 w - - 0 1", solution: ["d3d4"], goal: "Advance pawn", turn: "w", rating: 250, themes: ["pawn", "endgame"] }] }] }, { title: "Chess etiquette", blocks: [{ id: "block_1", puzzles: [{ id: "etiq_b1_1", fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", solution: ["e2e4"], goal: "Start the game", turn: "w", rating: 200, themes: ["basics", "opening"] }, { id: "etiq_b1_2", fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1", solution: ["e7e5"], goal: "Respond to opening", turn: "b", rating: 200, themes: ["basics", "opening"] }, { id: "etiq_b1_3", fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2", solution: ["g1f3"], goal: "Develop piece", turn: "w", rating: 210, themes: ["basics", "development"] }, { id: "etiq_b1_4", fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", solution: ["b8c6"], goal: "Develop your knight", turn: "b", rating: 210, themes: ["basics", "development"] }, { id: "etiq_b1_5", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", solution: ["f1c4"], goal: "Develop bishop", turn: "w", rating: 220, themes: ["basics", "development"] }] }] }
];
