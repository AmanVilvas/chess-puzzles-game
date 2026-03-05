// Part 3: Rook and Bishop (Quiz only)
export const ROOK = {
    title: "Rook",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                {
                    id: "L1_t5_b1_1", type: "quiz",
                    fen: "8/8/8/8/8/8/8/R7 w - - 0 1",
                    question: "Can the rook move up forward?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The rook can move forward (up) along any file or rank as far as it wants.",
                    rating: 100, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b1_2", type: "quiz",
                    fen: "8/8/8/8/8/8/4R3/8 w - - 0 1",
                    question: "How does the rook actually move?",
                    options: ["Diagonally", "One square", "Straight line"],
                    correctAnswer: 2,
                    explanation: "The rook moves in straight lines — forward, backward, left, or right — any number of squares.",
                    rating: 100, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b1_3", type: "quiz",
                    fen: "8/8/8/8/8/8/5R2/8 w - - 0 1",
                    question: "After how many moves can the rook reach the top 8th rank?",
                    options: ["3 moves", "7 moves", "1 move"],
                    correctAnswer: 2,
                    explanation: "Just 1 move! The rook can travel any number of squares in one move, straight up to the 8th rank.",
                    rating: 100, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b1_4", type: "quiz",
                    fen: "8/8/3R4/8/8/8/8/8 w - - 0 1",
                    question: "Can the rook go backward?",
                    options: ["No", "Yes"],
                    correctAnswer: 1,
                    explanation: "Yes! Rooks can move in all four straight directions — including backward.",
                    rating: 100, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b1_5", type: "quiz",
                    fen: "8/8/8/8/4R3/8/8/8 w - - 0 1",
                    question: "Can the rook go to the right side?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The rook can move right along the rank as far as it wants.",
                    rating: 100, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b1_6", type: "quiz",
                    fen: "8/8/8/4R3/8/8/8/8 w - - 0 1",
                    question: "Can the rook go to the left side?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The rook moves in all four straight directions including left.",
                    rating: 100, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b1_7", type: "quiz",
                    fen: "8/8/8/4p3/4R3/8/8/8 w - - 0 1",
                    question: "Can a rook go backward?",
                    options: ["No", "Yes"],
                    correctAnswer: 1,
                    explanation: "Yes! The rook on e4 can freely move backward down the e-file.",
                    rating: 100, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b1_8", type: "quiz",
                    fen: "8/8/8/R6R/8/8/8/8 w - - 0 1",
                    question: "Is this the rook's starting position?",
                    options: ["Yes", "No"],
                    correctAnswer: 1,
                    explanation: "No! Rooks start on the 1st rank (a1 and h1 for White). These rooks are on the 5th rank.",
                    rating: 100, themes: ["rook", "setup"]
                },
                {
                    id: "L1_t5_b1_9", type: "quiz",
                    fen: "8/8/8/8/8/8/8/R6R w - - 0 1",
                    question: "Is this the rook's starting position?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! White rooks start on a1 and h1.",
                    rating: 100, themes: ["rook", "setup"]
                },
                {
                    id: "L1_t5_b1_10", type: "quiz",
                    fen: "8/8/8/4p3/8/8/8/4R3 w - - 0 1",
                    question: "Can the rook reach the top 8th rank?",
                    options: ["Yes", "No"],
                    correctAnswer: 1,
                    explanation: "No! The pawn on e5 is blocking the rook's path up the e-file.",
                    rating: 100, themes: ["rook", "blocked"]
                },
                {
                    id: "L1_t5_b1_11", type: "quiz",
                    fen: "8/3r1r2/2r3r1/4r3/1R4q1/8/4q1q1/2q5 w - - 0 1",
                    question: "How can the rook capture the queen?",
                    options: ["Capture up forward", "Capture right side line", "Capture backward"],
                    correctAnswer: 1,
                    explanation: "The rook on b4 can capture the queen on g4 by moving right along the 4th rank.",
                    rating: 100, themes: ["rook", "capture"]
                },
                {
                    id: "L1_t5_b1_12", type: "quiz",
                    fen: "8/8/4p3/8/8/5R2/8/8 w - - 0 1",
                    question: "Can the rook move up forward?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The rook on f3 can move forward up the f-file freely.",
                    rating: 100, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b1_13", type: "quiz",
                    fen: "8/8/8/5n2/8/4R3/8/8 w - - 0 1",
                    question: "Is the rook attacked by any piece?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The knight on f5 attacks e3 where the rook sits — knights move in an L-shape.",
                    rating: 100, themes: ["rook", "attack"]
                },
                {
                    id: "L1_t5_b1_14", type: "quiz",
                    fen: "5q2/8/8/8/8/8/5R2/8 w - - 0 1",
                    question: "How did the rook capture the piece?",
                    options: ["Diagonally", "Straight line forward", "Right side line"],
                    correctAnswer: 1,
                    explanation: "The rook on f2 moves straight forward up the f-file to capture the queen on f8.",
                    rating: 100, themes: ["rook", "capture"]
                },
                {
                    id: "L1_t5_b1_15", type: "quiz",
                    fen: "8/8/8/4P3/3PRP2/4B3/8/8 w - - 0 1",
                    question: "Can this rook move up forward?",
                    options: ["Yes", "No", "One square"],
                    correctAnswer: 1,
                    explanation: "No! The pawn on e5 directly ahead is blocking the rook from moving forward.",
                    rating: 100, themes: ["rook", "blocked"]
                },
                {
                    id: "L1_t5_b1_16", type: "quiz",
                    fen: "8/8/8/4P3/3PRP2/4R3/8/8 w - - 0 1",
                    question: "Which rook is moveable?",
                    options: ["Bottom rook (e3)", "Upper rook (e4)"],
                    correctAnswer: 0,
                    explanation: "The bottom rook on e3 can move — it has open squares. The upper rook on e4 is surrounded by pawns.",
                    rating: 100, themes: ["rook", "movement", "blocked"]
                },
                {
                    id: "L1_t5_b1_17", type: "quiz",
                    fen: "8/8/8/5n2/8/4R3/8/8 w - - 0 1",
                    question: "Can the rook capture the piece?",
                    options: ["Yes", "No"],
                    correctAnswer: 1,
                    explanation: "No! The knight on f5 is not on the same rank or file as the rook on e3 — rooks only capture in straight lines.",
                    rating: 100, themes: ["rook", "capture", "rules"]
                },
                {
                    id: "L1_t5_b1_18", type: "quiz",
                    fen: "8/8/8/P3P3/RP1PRP2/P3Q3/6PP/6PR w - - 0 1",
                    question: "Does any rook have a legal move?",
                    options: ["No", "Yes"],
                    correctAnswer: 0,
                    explanation: "No! Both rooks are completely boxed in by their own pawns and pieces.",
                    rating: 100, themes: ["rook", "blocked"]
                },
                {
                    id: "L1_t5_b1_19", type: "quiz",
                    fen: "3q4/8/1q4q1/q4q2/4q3/3R2q1/8/8 w - - 0 1",
                    question: "How many pieces can the rook capture in one move?",
                    options: ["One piece", "Two pieces", "Three pieces"],
                    correctAnswer: 0,
                    explanation: "Only one piece at a time! The rook can capture one queen per move — it stops at the first piece it takes.",
                    rating: 100, themes: ["rook", "capture", "rules"]
                },
                {
                    id: "L1_t5_b1_20", type: "quiz",
                    fen: "5n2/5n2/5n2/5n2/5q2/5q2/5R2/8 w - - 0 1",
                    question: "How many pieces can the rook capture in 4 moves?",
                    options: ["Three pieces", "Four pieces", "Six pieces"],
                    correctAnswer: 1,
                    explanation: "Four pieces! The rook travels up the f-file capturing the queen on f4, queen on f5, knight on f6, knight on f7... wait — it captures 4 pieces in 4 moves going straight up.",
                    rating: 100, themes: ["rook", "capture", "tactics"]
                }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                {
                    id: "L1_t5_b2_21", type: "quiz",
                    fen: "4p3/8/4p3/8/4p3/4R3/8/8 w - - 0 1",
                    question: "Capture all pieces (only white will move).",
                    options: ["Rxe4→Rxe6→Rxe8", "Re8→Re6→Re4", "Re6→Rxe4→Rxe8", "Re5→Rxe4→Re8"],
                    correctAnswer: 0,
                    explanation: "Rxe4, Rxe6, Rxe8 — the rook captures all three pawns moving straight up the e-file.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b2_22", type: "quiz",
                    fen: "8/8/8/2p5/8/8/5R2/8 w - - 0 1",
                    question: "Capture the piece (only white will move).",
                    options: ["Rf5→Rxc5", "Rc2→Rxc5", "Rf8→Rc8", "Rc5 directly"],
                    correctAnswer: 0,
                    explanation: "Rf5 then Rxc5 — the rook moves to the 5th rank then captures the pawn on c5.",
                    rating: 200, themes: ["rook", "capture"]
                },
                {
                    id: "L1_t5_b2_23", type: "quiz",
                    fen: "8/8/8/8/8/8/8/5R2 w - - 0 1",
                    question: "Move the rook to a8.",
                    options: ["Rf8→Ra8", "Ra1→Ra8", "Rf7→Ra7→Ra8", "Rf8→Rg8→Ra8"],
                    correctAnswer: 0,
                    explanation: "Rf8 then Ra8 — rook goes up to the 8th rank, then across to a8.",
                    rating: 200, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b2_24", type: "quiz",
                    fen: "8/8/2R5/8/8/8/8/8 w - - 0 1",
                    question: "Move the rook to d1.",
                    options: ["Rd6→Rd1", "Rc1→Rd1", "Both work", "Rc8→Rd8→Rd1"],
                    correctAnswer: 2,
                    explanation: "Both Rd6→Rd1 and Rc1→Rd1 reach d1 — two valid two-move routes.",
                    rating: 200, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b2_25", type: "quiz",
                    fen: "8/6q1/8/8/8/8/b5R1/8 w - - 0 1",
                    question: "Capture the most valuable piece!",
                    options: ["Rxg7", "Rxa2", "Rg8→Rxg7", "Rg5→Rxg7"],
                    correctAnswer: 0,
                    explanation: "Rxg7 immediately! The queen (9 pts) is far more valuable than the bishop (3 pts).",
                    rating: 200, themes: ["rook", "capture", "value"]
                },
                {
                    id: "L1_t5_b2_26", type: "quiz",
                    fen: "7r/1q6/8/8/8/8/5R2/8 w - - 0 1",
                    question: "Capture all pieces (only white will move).",
                    options: ["Rb2→Rxb7→Rh7→Rxh8", "Rf8→Rxh8→Rh7→Rxb7", "Rb2→Rh2→Rxh8→Rxb7", "Rxh8 directly"],
                    correctAnswer: 0,
                    explanation: "Rb2, Rxb7, Rh7, Rxh8 — the rook captures the queen on b7 then the rook on h8.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b2_27", type: "quiz",
                    fen: "8/3r4/8/6n1/2b5/8/5R2/8 w - - 0 1",
                    question: "Capture all pieces (only white will move).",
                    options: ["Rf7→Rxd7→Rc7→Rxc4→Rc5→Rxg5", "Rxd7→Rxc7→Rxg5", "Rf4→Rxc4→Rc7→Rxd7→Rg7→Rxg5", "Rd2→Rxd7→Rc7→Rxg7"],
                    correctAnswer: 0,
                    explanation: "Rf7, Rxd7, Rc7, Rxc4, Rc5, Rxg5 — the rook zigzags to capture all three pieces.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b2_28", type: "quiz",
                    fen: "8/3q4/8/8/8/3R4/8/3r4 w - - 0 1",
                    question: "Capture both pieces (only white will move).",
                    options: ["Rxd7→Rxd1", "Rxd1→Rxd7", "Both work", "Rd5→Rxd7→Rd1"],
                    correctAnswer: 2,
                    explanation: "Both Rxd7→Rxd1 and Rxd1→Rxd7 capture both pieces — the rook is on the d-file with both targets.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b2_29", type: "quiz",
                    fen: "8/pnpp4/1p6/8/4B3/3P2P1/PPP2P1P/R7 w - - 0 1",
                    question: "Move the rook to f8 (only white will move).",
                    options: ["Re1→Re3→Rf3→Rf8", "Ra8→Rf8", "Rb1→Rf1→Rf8", "Ra3→Rf3→Rf8"],
                    correctAnswer: 0,
                    explanation: "Re1, Re3, Rf3, Rf8 — the rook navigates along open squares to reach f8.",
                    rating: 200, themes: ["rook", "movement", "navigation"]
                },
                {
                    id: "L1_t5_b2_30", type: "quiz",
                    fen: "8/6b1/8/3q4/8/5R2/8/8 w - - 0 1",
                    question: "Move the rook to safety.",
                    options: ["Ra3", "Rf8", "Rh3", "Rf5"],
                    correctAnswer: 0,
                    explanation: "Ra3 — moving far left on the 3rd rank gets the rook away from the queen's diagonal attack.",
                    rating: 200, themes: ["rook", "safety", "strategy"]
                },
                {
                    id: "L1_t5_b2_31", type: "quiz",
                    fen: "8/8/4r3/1n4n1/8/4R3/6q1/8 w - - 0 1",
                    question: "Move the rook to safety.",
                    options: ["Rb3", "Rd3", "Both Rb3 and Rd3 work", "Ra3"],
                    correctAnswer: 2,
                    explanation: "Both Rb3 and Rd3 move the rook off the dangerous e-file away from the enemy rook and queen.",
                    rating: 200, themes: ["rook", "safety", "strategy"]
                },
                {
                    id: "L1_t5_b2_32", type: "quiz",
                    fen: "7q/8/3q4/4qq2/8/8/4R3/8 w - - 0 1",
                    question: "Move the rook to safety.",
                    options: ["Rg2", "Re8", "Re5", "Ra2"],
                    correctAnswer: 0,
                    explanation: "Rg2 — shifting one square right gets the rook off the e-file and avoids queen attacks.",
                    rating: 200, themes: ["rook", "safety", "strategy"]
                },
                {
                    id: "L1_t5_b2_33", type: "quiz",
                    fen: "7R/1p1np1pp/2p2p2/p7/8/8/8/8 w - - 0 1",
                    question: "Move the rook to b1 (white to move only).",
                    options: ["Ra8→Ra6→Rb6→Rb1", "Rh1→Rb1", "Rh6→Rb6→Rb1", "Ra8→Rb8→Rb1"],
                    correctAnswer: 0,
                    explanation: "Ra8, Ra6, Rb6, Rb1 — the rook navigates around black pawns to reach b1.",
                    rating: 200, themes: ["rook", "movement", "navigation"]
                },
                {
                    id: "L1_t5_b2_34", type: "quiz",
                    fen: "7q/8/8/8/2R5/8/8/8 w - - 0 1",
                    question: "Capture the Queen (only white will move).",
                    options: ["Rc8→Rxh8", "Rh4→Rxh8", "Rc7→Rxh7", "Rh4→Rh7→Rxh8"],
                    correctAnswer: 0,
                    explanation: "Rc8 then Rxh8 — the rook goes to the 8th rank then captures the queen on h8.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b2_35", type: "quiz",
                    fen: "1R6/4r1Q1/8/1R6/1PPPR1Q1/2BP4/8/8 w - - 0 1",
                    question: "Capture the bishop (only black will move).",
                    options: ["Rf7→Rf1→Rc1→Rxc3", "Rxg7→Rg3→Rxc3", "Re3→Rxc3", "Re1→Rxc1→Rxc3"],
                    correctAnswer: 0,
                    explanation: "Rf7, Rf1, Rc1, Rxc3 — Black's rook navigates around white pieces to capture the bishop.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                }
            ]
        },
        {
            id: "block_3",
            puzzles: [
                {
                    id: "L1_t5_b3_36", type: "quiz",
                    fen: "8/8/8/8/8/4ppp1/3Rpn2/4b3 w - - 0 1",
                    question: "Capture the knight (only white will move).",
                    options: ["Rd4→Rh4→Rh2→Rxf2", "Rxe2→Rxf2", "Rd4→Rf4→Rxf2", "Rd3→Rxf3→Rxf2"],
                    correctAnswer: 0,
                    explanation: "Rd4, Rh4, Rh2, Rxf2 — the rook maneuvers around black pieces to capture the knight on f2.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b3_37", type: "quiz",
                    fen: "8/4b3/8/8/8/8/8/p3R2r w - - 0 1",
                    question: "Capture the most valuable piece (white to move).",
                    options: ["Rxh1", "Rxa1", "Re8→Rxe7", "Rh1→Rxh8"],
                    correctAnswer: 0,
                    explanation: "Rxh1 — capture the rook (5 pts) which is more valuable than the pawn (1 pt). The bishop on e7 is unreachable.",
                    rating: 200, themes: ["rook", "capture", "value"]
                },
                {
                    id: "L1_t5_b3_38", type: "quiz",
                    fen: "8/8/8/5rq1/4rr2/3rr3/3R4/8 w - - 0 1",
                    question: "Capture all pieces (only white will move).",
                    options: ["Rxd3→Rxe3→Rxe4→Rxf4→Rxf5→Rxg5", "Rxe3→Rxd3→Rxf4→Rxe4→Rxg5→Rxf5", "Rxg5→Rxf5→Rxf4→Rxe4→Rxe3→Rxd3", "Rd5→Rxf5→Rxf4→Rxe4→Rxe3→Rxd3"],
                    correctAnswer: 0,
                    explanation: "Rxd3, Rxe3, Rxe4, Rxf4, Rxf5, Rxg5 — the rook zigzags up capturing all 6 black rooks.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b3_39", type: "quiz",
                    fen: "8/8/8/8/5P2/4P1P1/3PR2P/8 w - - 0 1",
                    question: "Move the rook to a8 (only white will move).",
                    options: ["Re1→Ra1→Ra8", "Re3→Ra3→Ra8", "Rd2→Ra2→Ra8", "Re2→Re8→Ra8"],
                    correctAnswer: 0,
                    explanation: "Re1, Ra1, Ra8 — the rook drops to the 1st rank, goes to a1, then up to a8.",
                    rating: 200, themes: ["rook", "movement", "navigation"]
                },
                {
                    id: "L1_t5_b3_40", type: "quiz",
                    fen: "8/8/8/2q2b2/8/8/4R3/8 w - - 0 1",
                    question: "Capture the most valuable pieces in 2 moves (only white will move).",
                    options: ["Re5→Rxc5", "Rxb5→Rxf5", "Re8→Rxc8", "Rc2→Rxc5"],
                    correctAnswer: 0,
                    explanation: "Re5 then Rxc5 — the rook moves to e5 then captures the queen on c5 (9 pts > bishop's 3 pts).",
                    rating: 200, themes: ["rook", "capture", "value", "tactics"]
                },
                {
                    id: "L1_t5_b3_41", type: "quiz",
                    fen: "8/8/8/R2P3q/8/8/8/8 w - - 0 1",
                    question: "Capture the Queen (only white will move).",
                    options: ["Ra1→Rh1→Rxh5", "Rh5 directly", "Ra8→Rh8→Rxh5", "Ra1→Ra5→Rxh5"],
                    correctAnswer: 0,
                    explanation: "Ra1, Rh1, Rxh5 — the rook drops down to the 1st rank, goes to h1, and captures the queen on h5.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b3_42", type: "quiz",
                    fen: "8/8/8/8/3P4/1qBB4/1PR5/8 w - - 0 1",
                    question: "Capture the queen (only white will move).",
                    options: ["Rc1→Ra1→Ra3→Rxb3", "Rxb3 directly", "Rc3→Rxb3", "Rb1→Ra1→Ra3→Rxb3"],
                    correctAnswer: 0,
                    explanation: "Rc1, Ra1, Ra3, Rxb3 — the rook navigates around own pieces to capture the queen on b3.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b3_43", type: "quiz",
                    fen: "8/8/8/8/3P4/3RP3/8/8 w - - 0 1",
                    question: "Move the rook to a8 (only white will move).",
                    options: ["Ra3→Ra8", "Rd1→Ra1→Ra8", "Re3→Ra3→Ra8", "Rd4→Ra4→Ra8"],
                    correctAnswer: 0,
                    explanation: "Ra3 then Ra8 — the rook moves left to a3 then straight up to a8.",
                    rating: 200, themes: ["rook", "movement"]
                },
                {
                    id: "L1_t5_b3_44", type: "quiz",
                    fen: "8/6q1/8/4r3/8/4R3/8/4R3 w - - 0 1",
                    question: "Capture with advantage (white will move).",
                    options: ["Re3xe5, Qxe5, Re1xe5 (winning the queen)", "Rxe5 with Re1", "Re3→Re7→Rxg7", "Re1→Re5→Rxe5"],
                    correctAnswer: 0,
                    explanation: "Re3xRe5 trades rooks, then after Qxe5, Re1xe5 captures the queen — a brilliant rook lift!",
                    rating: 200, themes: ["rook", "tactics", "exchange"]
                },
                {
                    id: "L1_t5_b3_45", type: "quiz",
                    fen: "4q3/8/8/8/1b2R1p1/8/8/4n3 w - - 0 1",
                    question: "Capture the most valuable piece (white to move).",
                    options: ["Rxe8", "Rxb4", "Rxg4", "Re5→Rxe8"],
                    correctAnswer: 0,
                    explanation: "Rxe8 — the queen on e8 (9 pts) is the most valuable piece and can be captured directly.",
                    rating: 200, themes: ["rook", "capture", "value"]
                },
                {
                    id: "L1_t5_b3_46", type: "quiz",
                    fen: "8/8/8/2R5/8/8/6q1/8 w - - 0 1",
                    question: "Capture the Queen (only white will move).",
                    options: ["Rc2→Rxg2", "Rg5→Rxg2", "Rc1→Rg1→Rxg2", "Rg8→Rxg2"],
                    correctAnswer: 0,
                    explanation: "Rc2 then Rxg2 — the rook moves to the 2nd rank and captures the queen on g2.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b3_47", type: "quiz",
                    fen: "8/1nb3P1/5PR1/6B1/8/4PP2/3P2P1/4B3 w - - 0 1",
                    question: "Move the rook to a1 (only white will move).",
                    options: ["Rh6→Rh4→Ra4→Ra1", "Rf8→Ra8→Ra1", "Rg6→Ra6→Ra1", "Rh6→Ra6→Ra1"],
                    correctAnswer: 0,
                    explanation: "Rh6, Rh4, Ra4, Ra1 — the rook maneuvers to the a-file and drops to a1.",
                    rating: 200, themes: ["rook", "movement", "navigation"]
                },
                {
                    id: "L1_t5_b3_48", type: "quiz",
                    fen: "5b2/8/8/8/8/5B2/8/5R2 w - - 0 1",
                    question: "Capture the bishop (only white will move).",
                    options: ["Re1→Re8→Rxf8", "Rg1→Rg8→Rxf8", "Both work", "Rf8 directly"],
                    correctAnswer: 2,
                    explanation: "Both Re1→Re8→Rxf8 and Rg1→Rg8→Rxf8 capture the bishop — the white bishop on f3 is not blocking these files.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b3_49", type: "quiz",
                    fen: "8/3q4/8/8/8/2BPQ1P1/PP3P2/4R3 w - - 0 1",
                    question: "Capture the Queen on d7 (only white will move).",
                    options: ["Rh1→Rh7→Rxd7", "Re7→Rxd7", "Rd1→Rxd7", "Re3→Rd3→Rxd7"],
                    correctAnswer: 0,
                    explanation: "Rh1, Rh7, Rxd7 — the rook escapes through h1, goes to h7, then captures the queen on d7.",
                    rating: 200, themes: ["rook", "capture", "tactics"]
                },
                {
                    id: "L1_t5_b3_50", type: "quiz",
                    fen: "7r/4q3/1b6/3br1q1/8/3n4/5R2/8 w - - 0 1",
                    question: "Move the white rook to safety!",
                    options: ["Rf1", "Rc2", "Both Rf1 and Rc2 work", "Rg2"],
                    correctAnswer: 2,
                    explanation: "Both Rf1 and Rc2 are safe squares — the rook escapes the danger zone from multiple black pieces.",
                    rating: 200, themes: ["rook", "safety", "strategy"]
                }
            ]
        }
    ]
};


export const BISHOP = {
    title: "Bishop",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                {
                    id: "L1_t6_b1_1", type: "quiz",
                    fen: "8/8/8/8/8/8/8/3B4 w - - 0 1",
                    question: "How does the bishop actually move?",
                    options: ["L shape", "Straight forward", "Diagonally"],
                    correctAnswer: 2,
                    explanation: "The bishop moves diagonally any number of squares.",
                    rating: 100, themes: ["bishop", "movement"]
                },
                {
                    id: "L1_t6_b1_2", type: "quiz",
                    fen: "8/8/8/8/5B2/8/8/8 w - - 0 1",
                    question: "How does the bishop move backward to the left side?",
                    options: ["Straight Backward", "One square backward left side", "Diagonally backward left side"],
                    correctAnswer: 2,
                    explanation: "The bishop moves diagonally in all four diagonal directions, including backward-left.",
                    rating: 100, themes: ["bishop", "movement"]
                },
                {
                    id: "L1_t6_b1_3", type: "quiz",
                    fen: "8/8/8/4B3/5r2/8/8/8 w - - 0 1",
                    question: "Can the bishop capture the rook?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The bishop on e5 can capture the rook on f4 diagonally.",
                    rating: 100, themes: ["bishop", "capture"]
                },
                {
                    id: "L1_t6_b1_4", type: "quiz",
                    fen: "8/8/1r6/8/3B4/8/8/8 w - - 0 1",
                    question: "Can the bishop capture the rook?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The bishop on d4 can reach b6 diagonally.",
                    rating: 100, themes: ["bishop", "capture"]
                },
                {
                    id: "L1_t6_b1_5", type: "quiz",
                    fen: "7r/8/8/8/3B4/8/8/8 w - - 0 1",
                    question: "Can the bishop capture the rook?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The bishop on d4 can travel diagonally to h8.",
                    rating: 100, themes: ["bishop", "capture"]
                },
                {
                    id: "L1_t6_b1_6", type: "quiz",
                    fen: "8/4B3/8/8/8/6q1/8/8 w - - 0 1",
                    question: "Can the bishop capture the queen?",
                    options: ["Yes", "No"],
                    correctAnswer: 1,
                    explanation: "No! The bishop on e7 (light square) cannot reach the queen on g3 (dark square) — they are on different colored squares.",
                    rating: 100, themes: ["bishop", "capture", "color"]
                },
                {
                    id: "L1_t6_b1_7", type: "quiz",
                    fen: "8/8/8/3B4/8/5n2/8/8 w - - 0 1",
                    question: "Can the bishop capture the knight?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The bishop on d5 can capture the knight on f3 diagonally.",
                    rating: 100, themes: ["bishop", "capture"]
                },
                {
                    id: "L1_t6_b1_8", type: "quiz",
                    fen: "8/8/8/8/4B3/8/8/8 w - - 0 1",
                    question: "Can the bishop move to a Dark square?",
                    options: ["Yes", "No"],
                    correctAnswer: 1,
                    explanation: "No! The bishop on e4 started on a light square and can only ever move to light squares.",
                    rating: 100, themes: ["bishop", "color"]
                },
                {
                    id: "L1_t6_b1_9", type: "quiz",
                    fen: "8/8/8/4B3/8/8/8/8 w - - 0 1",
                    question: "Can the bishop move to a dark square?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The bishop on e5 is on a dark square and moves to other dark squares.",
                    rating: 100, themes: ["bishop", "color"]
                },
                {
                    id: "L1_t6_b1_10", type: "quiz",
                    fen: "8/8/8/4B3/4B3/8/8/8 w - - 0 1",
                    question: "How many colours of bishop are there?",
                    options: ["One", "Two", "Three"],
                    correctAnswer: 1,
                    explanation: "There are two: the light-squared bishop and the dark-squared bishop.",
                    rating: 100, themes: ["bishop", "color"]
                },
                {
                    id: "L1_t6_b1_11", type: "quiz",
                    fen: "8/8/8/4B3/4B3/8/8/8 w - - 0 1",
                    question: "Can these two bishops land on the opposite colour?",
                    options: ["Yes", "No"],
                    correctAnswer: 1,
                    explanation: "No! Each bishop is permanently bound to its starting color and cannot change.",
                    rating: 100, themes: ["bishop", "color"]
                },
                {
                    id: "L1_t6_b1_12", type: "quiz",
                    fen: "8/8/8/4B3/4B3/8/8/8 w - - 0 1",
                    question: "What is the max range the bishop has?",
                    options: ["Short", "Long"],
                    correctAnswer: 1,
                    explanation: "The bishop has long range — it can cover the entire diagonal from corner to corner.",
                    rating: 100, themes: ["bishop", "range"]
                },
                {
                    id: "L1_t6_b1_13", type: "quiz",
                    fen: "8/8/8/8/7P/6P1/5P1B/8 w - - 0 1",
                    question: "Can the bishop move?",
                    options: ["Yes", "No"],
                    correctAnswer: 1,
                    explanation: "No! The bishop on h2 is completely blocked by its own pawns on g3 and f2.",
                    rating: 100, themes: ["bishop", "blocked"]
                },
                {
                    id: "L1_t6_b1_14", type: "quiz",
                    fen: "8/8/6q1/5R2/8/8/2B5/8 w - - 0 1",
                    question: "Can the bishop capture the Queen?",
                    options: ["Yes", "No"],
                    correctAnswer: 1,
                    explanation: "No! The rook on f5 is blocking the diagonal path between the bishop on c2 and the queen on g6.",
                    rating: 100, themes: ["bishop", "blocked", "capture"]
                },
                {
                    id: "L1_t6_b1_15", type: "quiz",
                    fen: "8/8/8/8/5P1P/8/5P1B/8 w - - 0 1",
                    question: "How many squares can the bishop move?",
                    options: ["One square", "Two squares", "Three squares"],
                    correctAnswer: 0,
                    explanation: "Only one square — the bishop on h2 can only go to g1, blocked by own pawns on all other diagonals.",
                    rating: 100, themes: ["bishop", "movement", "blocked"]
                },
                {
                    id: "L1_t6_b1_16", type: "quiz",
                    fen: "8/8/8/8/q7/8/2B5/8 w - - 0 1",
                    question: "How should the bishop capture the Queen?",
                    options: ["Diagonally forward", "Diagonally left forward", "Diagonally right forward"],
                    correctAnswer: 1,
                    explanation: "The bishop on c2 moves diagonally forward-left to reach a4 where the queen is.",
                    rating: 100, themes: ["bishop", "capture", "direction"]
                },
                {
                    id: "L1_t6_b1_17", type: "quiz",
                    fen: "8/1r4r1/3r4/1r4r1/2r5/6B1/7r/8 w - - 0 1",
                    question: "How many pieces can the bishop capture in six moves?",
                    options: ["One", "Two", "Three", "Four"],
                    correctAnswer: 3,
                    explanation: "The bishop can zig-zag diagonally to capture four rooks in six moves.",
                    rating: 100, themes: ["bishop", "capture", "strategy"]
                },
                {
                    id: "L1_t6_b1_18", type: "quiz",
                    fen: "8/8/8/8/7P/6P1/5P1B/8 w - - 0 1",
                    question: "Why is the bishop stuck?",
                    options: ["Short range", "Blocked by pawns", "Long range"],
                    correctAnswer: 1,
                    explanation: "The bishop is a 'bad bishop' — completely locked in by its own pawns on the same color.",
                    rating: 100, themes: ["bishop", "blocked", "strategy"]
                },
                {
                    id: "L1_t6_b1_19", type: "quiz",
                    fen: "8/1pppnpq1/4p3/3N1Pp1/4B1p1/1P1P1Q2/PBP1K3/8 w - - 0 1",
                    question: "Can the bishop capture anything?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The bishop on b2 can capture the pawn on g7 or other available targets on its diagonal.",
                    rating: 100, themes: ["bishop", "capture"]
                },
                {
                    id: "L1_t6_b1_20", type: "quiz",
                    fen: "1r6/8/8/8/5P1P/8/5P1B/8 w - - 0 1",
                    question: "Can the bishop capture the rook?",
                    options: ["Yes", "No"],
                    correctAnswer: 1,
                    explanation: "No! The rook on b8 is on a dark square, but the bishop on h2 is a light-squared bishop. It cannot reach dark squares.",
                    rating: 100, themes: ["bishop", "capture", "color"]
                }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                {
                    id: "L1_t6_b2_21", type: "quiz",
                    fen: "8/8/5p2/8/3B4/8/8/8 w - - 0 1",
                    question: "Capture the piece.",
                    options: ["Bxf6", "Bc5", "Be5", "Ba7"],
                    correctAnswer: 0,
                    explanation: "Bxf6 — the bishop on d4 captures the pawn on f6 diagonally.",
                    rating: 200, themes: ["bishop", "capture"]
                },
                {
                    id: "L1_t6_b2_22", type: "quiz",
                    fen: "8/8/8/8/8/8/8/B7 w - - 0 1",
                    question: "Move the bishop to the top right corner.",
                    options: ["Bf8", "Bh8", "Bg7", "Ba8"],
                    correctAnswer: 1,
                    explanation: "Bh8 — the bishop travels diagonally from a1 all the way to h8.",
                    rating: 200, themes: ["bishop", "movement"]
                },
                {
                    id: "L1_t6_b2_23", type: "quiz",
                    fen: "8/8/8/8/8/8/8/2B5 w - - 0 1",
                    question: "Move the bishop to d8 (in two moves).",
                    options: ["Bg5 then Bd8", "Bd2 then Bd8", "Ba3 then Bd8", "Bf4 then Bd8"],
                    correctAnswer: 0,
                    explanation: "Bg5 then Bd8 — first move to g5, then diagonal back to d8.",
                    rating: 200, themes: ["bishop", "movement"]
                },
                {
                    id: "L1_t6_b2_24", type: "quiz",
                    fen: "8/6q1/8/8/3r4/2B5/8/8 w - - 0 1",
                    question: "Capture both pieces (Only white will move).",
                    options: ["Bxd4 then Bxg7", "Bxg7 then Bxd4", "Bd4 then Bg7", "Ba5 then Bg7"],
                    correctAnswer: 0,
                    explanation: "Bxd4 captures the rook, then Bxg7 captures the queen.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b2_25", type: "quiz",
                    fen: "8/8/8/4q3/8/4B3/8/8 w - - 0 1",
                    question: "Capture the Queen (Only white will move, 2 moves).",
                    options: ["Bf4 then Bxe5", "Bd4 then Bxe5", "Both A and B work", "Bh6 then Bxe5"],
                    correctAnswer: 2,
                    explanation: "Both Bf4→Bxe5 and Bd4→Bxe5 work! Either side of the queen's diagonal leads there.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b2_26", type: "quiz",
                    fen: "3n4/2b5/1n6/2r5/3q4/4B3/8/8 w - - 0 1",
                    question: "Capture all pieces (Only white will move).",
                    options: ["Bxd4→Bxc5→Bxb6→Bxc7→Bxd8", "Bxc5→Bxd4→Bxb6→Bxc7→Bxd8", "Bxd4→Bxb6→Bxc5→Bxc7→Bxd8", "Ba7→Bxc5→Bxd4→Bxb6→Bxd8"],
                    correctAnswer: 0,
                    explanation: "Bxd4, Bxc5, Bxb6, Bxc7, Bxd8 — the bishop zig-zags up the diagonal eating all black pieces!",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b2_27", type: "quiz",
                    fen: "8/8/8/1r6/8/8/8/B7 w - - 0 1",
                    question: "Can the bishop capture the rook?",
                    options: ["Yes", "No — different colored squares", "Yes but only in 2 moves", "No — blocked"],
                    correctAnswer: 1,
                    explanation: "Illegal! The bishop on a1 (dark square) cannot reach the rook on b5 (light square). Bishops stay on one color.",
                    rating: 200, themes: ["bishop", "color", "rules"]
                },
                {
                    id: "L1_t6_b2_28", type: "quiz",
                    fen: "8/2n1prq1/5n2/6P1/8/5P2/4P3/5B2 w - - 0 1",
                    question: "Move the bishop to c8 (Only white will move, 2 moves).",
                    options: ["Bh3 then Be6", "Bh3 then Bc8", "Bg2 then Bc6", "Bd3 then Bc8"],
                    correctAnswer: 1,
                    explanation: "Bh3 then Be6? No — Bh3, then the bishop heads toward c8 via the long diagonal.",
                    rating: 200, themes: ["bishop", "movement"]
                },
                {
                    id: "L1_t6_b2_29", type: "quiz",
                    fen: "5n2/pppb1p2/1qq1p3/8/3P1N2/2PQP3/3P4/6B1 w - - 0 1",
                    question: "Capture the bishop on f8 (Only white will move, 4 moves).",
                    options: ["Bf2→Bh4→Be7→Bxf8", "Bh2→Bf4→Bh6→Bxf8", "Be3→Bh6→Bf8", "Bd4→Bxf8"],
                    correctAnswer: 0,
                    explanation: "Bf2, Bh4, Be7, Bxf8 — the bishop navigates around pieces to capture on f8.",
                    rating: 200, themes: ["bishop", "movement", "tactics"]
                },
                {
                    id: "L1_t6_b2_30", type: "quiz",
                    fen: "7q/8/8/8/3q4/6P1/8/4P1B1 w - - 0 1",
                    question: "Capture both pieces (Only white will move).",
                    options: ["Bxd4 then Bxh8", "Bxh8 then Bxd4", "Bd4 then Bh8", "Bf2 then Bxh8"],
                    correctAnswer: 0,
                    explanation: "Bxd4 captures the queen on d4, then Bxh8 captures the queen on h8.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b2_31", type: "quiz",
                    fen: "5r2/8/7r/8/8/8/5B2/8 w - - 0 1",
                    question: "Capture both pieces (Only white will move).",
                    options: ["Be3→Bxh6→Bxf8", "Bc5→Bxf8→Bxh6", "Both A and B work", "Bd4→Bxh8"],
                    correctAnswer: 2,
                    explanation: "Both routes work! Either Be3→Bxh6→Bxf8 or Bc5→Bxf8→Bxh6 captures both rooks.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b2_32", type: "quiz",
                    fen: "8/8/4q3/3r4/2r5/8/4B3/8 w - - 0 1",
                    question: "Capture all pieces (Only white will move).",
                    options: ["Bxc4→Bxd5→Bxe6", "Bxe6→Bxd5→Bxc4", "Bd3→Bxc4→Bxe6", "Bf3→Bxc4→Bxe6"],
                    correctAnswer: 0,
                    explanation: "Bxc4, Bxd5, Bxe6 — the bishop captures all three pieces moving up the diagonal.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b2_33", type: "quiz",
                    fen: "8/2bnn3/2rpp3/8/8/2B5/3P4/8 w - - 0 1",
                    question: "Move the Bishop to e1 (Only white will move, 3 moves).",
                    options: ["Bd4→Bf2→Be1", "Ba5→Bc3→Be1", "Bd2→Be1", "Bf6→Bd4→Be1"],
                    correctAnswer: 0,
                    explanation: "Bd4, Bf2, Be1 — three diagonal moves to reach e1.",
                    rating: 200, themes: ["bishop", "movement"]
                },
                {
                    id: "L1_t6_b2_34", type: "quiz",
                    fen: "8/8/8/6p1/1N3pq1/B7/1P4B1/8 w - - 0 1",
                    question: "Move the bishop to a safer square.",
                    options: ["Bc1", "Bd2", "Both Bc1 and Bd2 work", "Ba4"],
                    correctAnswer: 2,
                    explanation: "Both Bc1 and Bd2 are safe squares away from danger.",
                    rating: 200, themes: ["bishop", "safety", "strategy"]
                },
                {
                    id: "L1_t6_b2_35", type: "quiz",
                    fen: "7q/7q/8/8/8/8/4B3/8 w - - 0 1",
                    question: "Capture the Queen. White to move (2 moves).",
                    options: ["Bd3→Bxh7", "Bf3→Bxh5", "Ba6→Bxh6", "Bg4→Bxh5"],
                    correctAnswer: 0,
                    explanation: "Bd3 then Bxh7 — the bishop reaches h7 capturing one of the queens.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                }
            ]
        },
        {
            id: "block_3",
            puzzles: [
                {
                    id: "L1_t6_b3_36", type: "quiz",
                    fen: "8/4q3/8/1r6/3B2r1/8/8/2r5 w - - 0 1",
                    question: "Capture the rook on c1. White to move.",
                    options: ["Be3→Bxc1", "Bb2→Bxc1", "Both work", "Bc5→Bxc1"],
                    correctAnswer: 2,
                    explanation: "Both Be3→Bxc1 and Bb2→Bxc1 reach the rook on c1 in two moves.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b3_37", type: "quiz",
                    fen: "8/8/8/8/4r3/2Brrr2/3rrrr1/8 w - - 0 1",
                    question: "Capture all rooks (Only white will move, 3 moves).",
                    options: ["Bxd2→Bxe3→Bxf2", "Bxf2→Bxe3→Bxd2", "Bxe3→Bxd2→Bxf2", "Bxe4→Bxd3→Bxe2"],
                    correctAnswer: 0,
                    explanation: "Bxd2, Bxe3, Bxf2 — the bishop zig-zags to capture three rooks.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b3_38", type: "quiz",
                    fen: "8/2b5/3b4/8/5Q2/8/8/2B5 w - - 0 1",
                    question: "Capture!! Black to move.",
                    options: ["Black Bxf4, White Bxf4, Black Bxf4", "Black Bxc1, White Bxb7, Black Bxf4", "Black Ba4, White Bxb7, Black Bxf4", "Black Bg3, White Bxd6, Black Bxc5"],
                    correctAnswer: 0,
                    explanation: "Black Bxf4 captures the queen, White Bxf4 recaptures, then Black Bxf4 again — a bishop trade sequence.",
                    rating: 200, themes: ["bishop", "capture", "exchange"]
                },
                {
                    id: "L1_t6_b3_39", type: "quiz",
                    fen: "8/pbpp4/1p6/8/8/4PN2/3PQP2/8 w - - 0 1",
                    question: "Capture the piece in two moves (Only Black will move).",
                    options: ["Ba6→Bxe2", "Bc6→Bxe4", "Bd5→Bxe4", "Ba8→Bxe4"],
                    correctAnswer: 0,
                    explanation: "Ba6 then Bxe2 — Black's bishop moves to a6 then captures the queen on e2.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b3_40", type: "quiz",
                    fen: "8/8/5b2/8/8/5Q2/5Q2/8 b - - 0 1",
                    question: "Capture the Queen (only Black will move, 2 moves).",
                    options: ["Bd4→Bxf2", "Bh4→Bxf2", "Both work", "Bg5→Bxf4"],
                    correctAnswer: 2,
                    explanation: "Both Bd4→Bxf2 and Bh4→Bxf2 reach the queen on f2 in two moves.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b3_41", type: "quiz",
                    fen: "8/1pqpr3/2n5/8/5P2/8/7B/8 b - - 0 1",
                    question: "Move the bishop to h4 (Only white will move, 2 moves).",
                    options: ["Bg3→Bh4", "Bf4→Bh4", "Be5→Bh4", "Bd6→Bh4"],
                    correctAnswer: 0,
                    explanation: "Bg3 then Bh4 — two diagonal moves to reach h4.",
                    rating: 200, themes: ["bishop", "movement"]
                },
                {
                    id: "L1_t6_b3_42", type: "quiz",
                    fen: "8/8/4p3/3pPp2/2pP2p1/1pP3Pp/1P5P/6B1 b - - 0 1",
                    question: "Move the bishop to a3 (Only white will move, 4 moves).",
                    options: ["Be3→Bh6→Bf8→Ba3", "Bf2→Bd4→Ba7→Ba3", "Be3→Ba7→Ba3", "Bh2→Bf4→Ba3"],
                    correctAnswer: 0,
                    explanation: "Be3, Bh6, Bf8, Ba3 — four moves navigating around pawns to reach a3.",
                    rating: 200, themes: ["bishop", "movement", "navigation"]
                },
                {
                    id: "L1_t6_b3_43", type: "quiz",
                    fen: "8/6p1/4ppp1/3pp3/2pp4/1p6/pp3B2/p7 b - - 0 1",
                    question: "Move the bishop to a5 square (Only white will move, 2 moves).",
                    options: ["Be1→Ba5", "Bc5→Ba5", "Bd4→Ba5", "Bg3→Ba5"],
                    correctAnswer: 0,
                    explanation: "Be1 then Ba5 — bishop retreats to e1 then swings up to a5.",
                    rating: 200, themes: ["bishop", "movement"]
                },
                {
                    id: "L1_t6_b3_44", type: "quiz",
                    fen: "8/8/8/7q/8/5B2/8/3r4 b - - 0 1",
                    question: "Capture the most valuable piece.",
                    options: ["Bxh5", "Bxd1", "Bd5", "Bg4"],
                    correctAnswer: 0,
                    explanation: "Bxh5 — the bishop captures the queen (9 points) which is more valuable than the rook (5 points).",
                    rating: 200, themes: ["bishop", "capture", "value"]
                },
                {
                    id: "L1_t6_b3_45", type: "quiz",
                    fen: "8/8/8/4B3/8/2r3b1/8/8 b - - 0 1",
                    question: "Capture the most valuable piece.",
                    options: ["Bxe5", "Bxc3", "Bd4", "Bf2"],
                    correctAnswer: 0,
                    explanation: "Bxe5 — the black bishop captures the white bishop (3 pts). Wait — both are 3pts but Bxe5 captures the white bishop directly.",
                    rating: 200, themes: ["bishop", "capture", "value"]
                },
                {
                    id: "L1_t6_b3_46", type: "quiz",
                    fen: "8/8/1r4q1/8/8/4B3/8/2b5 b - - 0 1",
                    question: "Capture the pieces the bishop is capable of (Only white will move).",
                    options: ["Bxb6→Be3→Bxc1", "Bxd6→Be3→Bxc1", "Bxc1→Be3→Bxb6", "Both A and C work"],
                    correctAnswer: 3,
                    explanation: "Both Bxd6→Be3→Bxc1 and Bxc1→Be3→Bxb6 work for capturing the accessible pieces.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b3_47", type: "quiz",
                    fen: "8/8/8/7q/8/5B2/8/3r4 b - - 0 1",
                    question: "Capture the most valuable piece.",
                    options: ["Bxh5", "Bg2", "Bg4", "Bxd1"],
                    correctAnswer: 0,
                    explanation: "Bxh5 captures the queen — always prioritize the highest value piece when both are capture-able.",
                    rating: 200, themes: ["bishop", "capture", "value"]
                },
                {
                    id: "L1_t6_b3_48", type: "quiz",
                    fen: "8/3pb3/4pp2/8/8/8/8/4R3 w - - 0 1",
                    question: "Capture the rook in two moves (Black to move only).",
                    options: ["Bb4→Bxe1", "Bc6→Bxe4", "Ba4→Bxe8", "Bd5→Bxe4"],
                    correctAnswer: 0,
                    explanation: "Bb4 then Bxe1 — Black's bishop moves to b4 and then captures the rook on e1.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b3_49", type: "quiz",
                    fen: "6b1/5R2/4Q3/3Q4/2Q5/1B6/P7/8 w - - 0 1",
                    question: "Capture all pieces (Only Black will move, 6 moves).",
                    options: ["Bxf7→Bxe6→Bxd5→Bxc4→Bxb3→Bxa2", "Bxe6→Bxf7→Bxd5→Bxc4→Bxb3→Bxa2", "Bxf7→Bxd5→Bxe6→Bxc4→Bxb3→Bxa2", "Bxa2→Bxb3→Bxc4→Bxd5→Bxe6→Bxf7"],
                    correctAnswer: 0,
                    explanation: "Bxf7, Bxe6, Bxd5, Bxc4, Bxb3, Bxa2 — Black's bishop zig-zags down eating all white pieces.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                },
                {
                    id: "L1_t6_b3_50", type: "quiz",
                    fen: "8/8/2b5/8/6n1/5q2/8/7R w - - 0 1",
                    question: "Capture the rook (Only Black will move, 4 moves).",
                    options: ["Bb5→Bf1→Bg2→Bxh1", "Ba4→Bf4→Bxh6→Bxh1", "Bd5→Bf3→Bxh1", "Bd7→Bxh3→Bxh1"],
                    correctAnswer: 0,
                    explanation: "Bb5, Bf1, Bg2, Bxh1 — Black's bishop navigates diagonally to capture the rook on h1.",
                    rating: 200, themes: ["bishop", "capture", "tactics"]
                }
            ]
        }
    ]
};

