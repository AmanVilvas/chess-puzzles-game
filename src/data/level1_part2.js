// Part 2: Pawn (Puzzle-based Quiz topics)
export const PAWN = {
    title: "Pawn",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                {
                    id: "L1_t4_b1_1",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/3P4/8 w - - 0 1",
                    question: "Can the pawn go forward?",
                    options: ["Maybe", "Yes", "No"],
                    correctAnswer: 1,
                    explanation: "Yes! The pawn can move forward one or two squares from its starting position.",
                    rating: 100,
                    themes: ["pawn", "board"]
                },
                {
                    id: "L1_t4_b1_2",
                    type: "quiz",
                    fen: "8/8/8/3p4/8/8/3P4/8 w - - 0 1",
                    question: "Can the pawn go 2 steps forward?",
                    options: ["No", "One move forward", "Yes"],
                    correctAnswer: 2,
                    explanation: "Yes! A pawn on its starting rank can move two squares forward, as long as the path is clear.",
                    rating: 100,
                    themes: ["pawn", "board"]
                },
                {
                    id: "L1_t4_b1_3",
                    type: "quiz",
                    fen: "8/8/8/8/3p4/8/3P4/8 w - - 0 1",
                    question: "Can the pawn go 2 steps forward?",
                    options: ["No", "Yes", "One move forward"],
                    correctAnswer: 0,
                    explanation: "No! The black pawn is blocking the path. The white pawn can only move one square forward.",
                    rating: 100,
                    themes: ["pawn", "board"]
                },
                {
                    id: "L1_t4_b1_4",
                    type: "quiz",
                    fen: "8/8/8/4p3/5P2/8/8/8 w - - 0 1",
                    question: "What should the pawn do?",
                    options: ["Move forward", "Capture the piece left forward", "Go Backward"],
                    correctAnswer: 1,
                    explanation: "The white pawn on f4 can capture the black pawn on e5 diagonally to the left forward.",
                    rating: 100,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b1_5",
                    type: "quiz",
                    fen: "8/8/5P2/8/8/8/8/8 w - - 0 1",
                    question: "How many squares can the pawn move forward?",
                    options: ["One square", "Three squares", "Two squares"],
                    correctAnswer: 0,
                    explanation: "A pawn that is not on its starting rank can only move one square forward.",
                    rating: 100,
                    themes: ["pawn", "board"]
                },
                {
                    id: "L1_t4_b1_6",
                    type: "quiz",
                    fen: "8/8/8/6P1/5p2/8/8/8 w - - 0 1",
                    question: "Can my pawn capture the Backward left side pawn?",
                    options: ["Of course", "No"],
                    correctAnswer: 1,
                    explanation: "No! Pawns can only capture diagonally FORWARD, never backward.",
                    rating: 100,
                    themes: ["pawn", "board", "rules"]
                },
                {
                    id: "L1_t4_b1_7",
                    type: "quiz",
                    fen: "8/8/4p3/8/8/8/5P2/8 w - - 0 1",
                    question: "How many squares should I move forward?",
                    options: ["Two squares", "One square", "3 squares"],
                    correctAnswer: 0,
                    explanation: "Two squares! From f2, moving two squares to f4 threatens the black pawn on e5 — you can get a free pawn next move!",
                    rating: 100,
                    themes: ["pawn", "board", "strategy"]
                },
                {
                    id: "L1_t4_b1_8",
                    type: "quiz",
                    fen: "8/8/8/3p4/3P4/8/8/8 w - - 0 1",
                    question: "Can the pawn go forward?",
                    options: ["Yes", "No"],
                    correctAnswer: 1,
                    explanation: "No! The white pawn's path is blocked by the black pawn directly in front of it.",
                    rating: 100,
                    themes: ["pawn", "board", "rules"]
                },
                {
                    id: "L1_t4_b1_9",
                    type: "quiz",
                    fen: "8/8/8/pP6/P7/8/8/8 w - - 0 1",
                    question: "Can any pawn move forward?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    explanation: "Yes! The white pawn on b5 can move forward to b6. The pawn on a4 is blocked by the pawn on a5.",
                    rating: 100,
                    themes: ["pawn", "board"]
                },
                {
                    id: "L1_t4_b1_10",
                    type: "quiz",
                    fen: "8/8/3p4/2P1P3/8/8/8/8 w - - 0 1",
                    question: "Do both pawns have the capability of capturing the piece?",
                    options: ["No", "Yes", "None of them"],
                    correctAnswer: 1,
                    explanation: "Yes! Both white pawns on c5 and e5 can capture the black pawn on d6 diagonally.",
                    rating: 100,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b1_11",
                    type: "quiz",
                    fen: "8/8/8/4P3/8/8/8/8 w - - 0 1",
                    question: "Where can the pawn go?",
                    options: ["Forward", "Backward", "Right forward"],
                    correctAnswer: 0,
                    explanation: "Pawns can only move forward! There is nothing to capture, so the only option is to move straight ahead.",
                    rating: 100,
                    themes: ["pawn", "board", "rules"]
                },
                {
                    id: "L1_t4_b1_12",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/6P1/8 w - - 0 1",
                    question: "How many squares would the pawn go at most?",
                    options: ["Three squares", "Four squares", "Two squares"],
                    correctAnswer: 2,
                    explanation: "Two squares! The pawn on g2 is on its starting rank, so it can move one or two squares forward at most.",
                    rating: 100,
                    themes: ["pawn", "board", "rules"]
                },
                {
                    id: "L1_t4_b1_13",
                    type: "quiz",
                    fen: "8/8/8/6p1/5P2/8/8/8 w - - 0 1",
                    question: "What would you play in this position?",
                    options: ["Move forward", "Capture left forward", "Capture right forward"],
                    correctAnswer: 2,
                    explanation: "Capture right forward! The white pawn on f4 captures the black pawn on g5 diagonally to the right.",
                    rating: 100,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b1_14",
                    type: "quiz",
                    fen: "8/8/4P3/8/8/8/8/8 w - - 0 1",
                    question: "What should you move?",
                    options: ["Left forward", "Forward", "Backward"],
                    correctAnswer: 1,
                    explanation: "Forward! With nothing to capture, the pawn simply advances forward.",
                    rating: 100,
                    themes: ["pawn", "board"]
                },
                {
                    id: "L1_t4_b1_15",
                    type: "quiz",
                    fen: "8/8/8/4p3/8/8/3P4/8 w - - 0 1",
                    question: "What will you play in this position?",
                    options: ["Move one square forward", "Move two squares forward"],
                    correctAnswer: 0,
                    explanation: "Move one square forward! Moving just one square to d3 sets up a capture of the e5 pawn next move — you get a free pawn!",
                    rating: 100,
                    themes: ["pawn", "board", "strategy"]
                },
                {
                    id: "L1_t4_b1_16",
                    type: "quiz",
                    fen: "8/8/4p3/4P3/8/8/8/8 w - - 0 1",
                    question: "Can you move your pawn?",
                    options: ["No", "Yes"],
                    correctAnswer: 0,
                    explanation: "No! The white pawn on e5 is completely blocked by the black pawn on e6 directly in front of it.",
                    rating: 100,
                    themes: ["pawn", "board", "rules"]
                },
                {
                    id: "L1_t4_b1_17",
                    type: "quiz",
                    fen: "8/8/8/4p3/P3P3/8/8/8 w - - 0 1",
                    question: "Can your pawn move forward?",
                    options: ["No", "Yes"],
                    correctAnswer: 1,
                    explanation: "Yes! The pawn on a4 can freely move forward to a5. The e4 pawn is blocked, but a4 is free.",
                    rating: 100,
                    themes: ["pawn", "board"]
                },
                {
                    id: "L1_t4_b1_18",
                    type: "quiz",
                    fen: "8/8/8/8/6P1/6P1/8/8 w - - 0 1",
                    question: "Which pawn can go forward?",
                    options: ["Upper pawn (g4)", "Back pawn (g3)"],
                    correctAnswer: 0,
                    explanation: "The upper pawn on g4 can move to g5. The back pawn on g3 is blocked by the pawn on g4.",
                    rating: 100,
                    themes: ["pawn", "board"]
                },
                {
                    id: "L1_t4_b1_19",
                    type: "quiz",
                    fen: "8/8/8/8/5P2/8/8/8 w - - 0 1",
                    question: "After how many moves will the pawn reach the 7th square on the Board?",
                    options: ["After 5 moves", "After 3 moves", "After 7 moves"],
                    correctAnswer: 1,
                    explanation: "After 3 moves! The pawn on f4 needs to reach f7: f4→f5→f6→f7, that's 3 moves.",
                    rating: 100,
                    themes: ["pawn", "board", "counting"]
                },
                {
                    id: "L1_t4_b1_20",
                    type: "quiz",
                    fen: "8/5p2/8/8/8/8/5P2/8 w - - 0 1",
                    question: "How many moves can the white pawn go forward at most?",
                    options: ["4 moves", "5 moves", "6 moves"],
                    correctAnswer: 0,
                    explanation: "4 moves! The white pawn on f2 can move at most to f6 (blocked by the black pawn on f7): f2→f4→f5→f6. That's 4 moves.",
                    rating: 100,
                    themes: ["pawn", "board", "counting"]
                }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                {
                    id: "L1_t4_b2_21",
                    type: "quiz",
                    fen: "8/1b6/2n5/3r4/4n3/5P2/8/8 w - - 0 1",
                    question: "Capture all pieces. Only white will move. What is the sequence?",
                    options: ["fxe4, exd5, dxc6, cxb7", "f4, fxe5, exd6, dxc7", "fxg4, gxh5, hxg6, gxh7"],
                    correctAnswer: 0,
                    explanation: "fxe4, exd5, dxc6, cxb7 — the pawn captures up the diagonal taking all four black pieces!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_22",
                    type: "quiz",
                    fen: "8/4p3/8/3N4/8/4Q3/8/8 b - - 0 1",
                    question: "Capture all pieces. Only Black will move. What is the sequence?",
                    options: ["e6, exd5, d4, dxe3", "e5, exd4, d3, dxe2", "e6, e5, exd4, dxe3"],
                    correctAnswer: 0,
                    explanation: "e6, exd5, d4, dxe3 — the black pawn advances and captures both the white knight and queen!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_23",
                    type: "quiz",
                    fen: "8/8/6p1/Pp3pP1/1Pp1pP2/2PpP3/3P4/8 b - - 0 1",
                    question: "Which white pawn is free to move forward?",
                    options: ["The pawn on a5", "The pawn on g5", "The pawn on b4"],
                    correctAnswer: 0,
                    explanation: "The pawn on a5 can advance to a6 — it is not blocked and there is nothing to capture on its path.",
                    rating: 150,
                    themes: ["pawn", "board", "strategy"]
                },
                {
                    id: "L1_t4_b2_24",
                    type: "quiz",
                    fen: "8/8/8/3p4/2pP4/3P4/8/8 b - - 0 1",
                    question: "Capture all pawns. Only white will move. What is the sequence?",
                    options: ["dxc4, cxd5", "d4, dxc5", "dxe4, exd5"],
                    correctAnswer: 0,
                    explanation: "dxc4, cxd5 — white captures the c4 pawn then the d5 pawn, winning both!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_25",
                    type: "quiz",
                    fen: "8/8/8/4p3/3Q1P2/8/8/8 b - - 0 1",
                    question: "Capture the most valuable piece. Black to move.",
                    options: ["exf4", "exd4", "e4"],
                    correctAnswer: 1,
                    explanation: "exd4! The black pawn captures the white Queen on d4 — the most valuable piece on the board!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_26",
                    type: "quiz",
                    fen: "8/8/8/8/8/3q1r2/4P3/8 b - - 0 1",
                    question: "Capture the most valuable piece. White to move.",
                    options: ["exf3", "exd3", "e3"],
                    correctAnswer: 1,
                    explanation: "exd3! The white pawn captures the black queen on d3 — the most valuable piece!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_27",
                    type: "quiz",
                    fen: "8/8/8/3p1p2/3PPP2/8/8/8 b - - 0 1",
                    question: "Which white pawn can go forward?",
                    options: ["The e4 pawn", "The d4 pawn", "The f4 pawn"],
                    correctAnswer: 0,
                    explanation: "The e4 pawn can advance to e5! The d4 pawn is blocked by d5 pawn and f4 pawn is blocked by f5 pawn.",
                    rating: 150,
                    themes: ["pawn", "board"]
                },
                {
                    id: "L1_t4_b2_28",
                    type: "quiz",
                    fen: "8/8/8/8/3r1b2/4P3/8/8 b - - 0 1",
                    question: "Capture the most valuable piece. White to move.",
                    options: ["exf4", "exd4", "e4"],
                    correctAnswer: 1,
                    explanation: "exd4! The white pawn captures the rook on d4, which is more valuable than the bishop.",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_29",
                    type: "quiz",
                    fen: "8/8/8/8/8/n1r5/1P6/8 b - - 0 1",
                    question: "Capture the most valuable piece. White to move.",
                    options: ["bxa3", "bxc3", "b4"],
                    correctAnswer: 1,
                    explanation: "bxc3! The white pawn captures the rook on c3, which is more valuable than the knight on a3.",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_30",
                    type: "quiz",
                    fen: "8/8/1p1b4/2q1n3/1n1r4/b1r5/1P6/8 b - - 0 1",
                    question: "Capture as many valuable pieces as possible! Only white will move. What is the sequence?",
                    options: ["bxc3, cxd4, dxc5, cxd6", "bxa3, axb4, bxc5, cxd6", "b4, bxc5, cxd6, dxe7"],
                    correctAnswer: 0,
                    explanation: "bxc3, cxd4, dxc5, cxd6 — the white pawn goes on a capturing rampage, taking the rook, rook, queen, and bishop!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_31",
                    type: "quiz",
                    fen: "8/8/3p1p2/2B3R1/8/8/8/8 w - - 0 1",
                    question: "Capture both white pieces. Only Black will move. What is the sequence?",
                    options: ["dxc5 and fxg5", "dxe5 and fxe5", "d5 and f5"],
                    correctAnswer: 0,
                    explanation: "dxc5 AND fxg5 — the black pawn on d6 captures the bishop on c5, and the black pawn on f6 captures the rook on g5.",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_32",
                    type: "quiz",
                    fen: "8/8/2pp4/2P1p3/4P3/8/8/8 w - - 0 1",
                    question: "Capture. White to move — what is the best capture?",
                    options: ["cxd6", "cxb6", "exd5"],
                    correctAnswer: 0,
                    explanation: "cxd6! The white pawn on c5 captures the pawn on d6.",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_33",
                    type: "quiz",
                    fen: "8/8/8/1p4p1/4p3/1P6/4P1P1/8 w - - 0 1",
                    question: "Move forward Soldiers. Only white will move. Which pawns can advance?",
                    options: ["b3-b4, b4-b5 and e2-e3 and g2-g4", "b3, e3, g4 all in one move", "Only the e2 pawn"],
                    correctAnswer: 0,
                    explanation: "b3→b4→b5, e2→e3, and g2→g4 — these white pawns can all advance forward in sequence!",
                    rating: 150,
                    themes: ["pawn", "board", "strategy"]
                },
                {
                    id: "L1_t4_b2_34",
                    type: "quiz",
                    fen: "8/8/8/3pp3/8/8/3P4/8 w - - 0 1",
                    question: "Move forward and capture. Only white will move. What is the sequence?",
                    options: ["d4, dxe5", "d3, d4, dxe5", "dxe5 immediately"],
                    correctAnswer: 0,
                    explanation: "d4 then dxe5 — the pawn advances two steps to d4, then captures the e5 pawn on the next move.",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_35",
                    type: "quiz",
                    fen: "8/3b4/4n3/3b4/4q3/3r4/2P5/8 w - - 0 1",
                    question: "Capture all pieces. Only white will move. What is the sequence?",
                    options: ["cxd3, dxe4, exd5, dxe6, exd7", "c4, cxd5, dxe6, exd7, dxc8", "cxb3, bxa4, axb5, bxc6, cxd7"],
                    correctAnswer: 0,
                    explanation: "cxd3, dxe4, exd5, dxe6, exd7 — the white pawn starts a spectacular capture chain taking the rook, queen, bishop, knight, and finally the bishop!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_36",
                    type: "quiz",
                    fen: "8/8/8/6q1/5P2/4q3/3P4/8 w - - 0 1",
                    question: "Capture both Queens. Only white will move. What is the sequence?",
                    options: ["dxe3 and fxg5", "d4 and f5", "dxe3, exf4, fxg5"],
                    correctAnswer: 0,
                    explanation: "dxe3 AND fxg5 — the d2 pawn captures the queen on e3, and the f4 pawn captures the queen on g5!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_37",
                    type: "quiz",
                    fen: "8/8/8/8/3q4/8/4P3/8 w - - 0 1",
                    question: "Move forward and Capture the piece. What is the sequence?",
                    options: ["e3, exd4", "e4, exd5", "exd3 immediately"],
                    correctAnswer: 0,
                    explanation: "e3 then exd4 — the pawn first advances to e3, then captures the black queen on d4!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_38",
                    type: "quiz",
                    fen: "8/8/3b4/8/4n3/8/3P4/8 w - - 0 1",
                    question: "Capture both pieces. Only white will move. What is the sequence?",
                    options: ["d3, dxe4, e5, exd6", "d4, dxe5, exd6", "dxe3, exd4, dxe5"],
                    correctAnswer: 0,
                    explanation: "d3, dxe4, e5, exd6 — advance to d3, capture the knight on e4, advance to e5, then capture the bishop on d6!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_39",
                    type: "quiz",
                    fen: "8/8/5p2/4p1p1/3p4/4P3/8/8 w - - 0 1",
                    question: "Capture all pieces. Only white will move. What is the sequence?",
                    options: ["exd4, dxe5, exf6", "exf4, fxe5, exd6", "exg5, gxf6, fxe7"],
                    correctAnswer: 0,
                    explanation: "exd4, dxe5, exf6 — the white pawn captures the d4 pawn, then e5 pawn, then the f6 pawn!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_40",
                    type: "quiz",
                    fen: "8/8/4p3/8/3P1P2/8/8/8 w - - 0 1",
                    question: "Capture the piece. White to move — which pawn should capture?",
                    options: ["fxe5", "dxe5", "Either pawn can capture"],
                    correctAnswer: 0,
                    explanation: "fxe5! The f4 pawn captures the black pawn on e5. (After black plays e5, white responds fxe5.)",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_41",
                    type: "quiz",
                    fen: "8/8/1p6/p7/1P6/2P5/8/8 w - - 0 1",
                    question: "Multiple capture! White to move — what is the sequence?",
                    options: ["axb4, then cxb4", "bxa5, then cxa5", "c4, then cxb5"],
                    correctAnswer: 0,
                    explanation: "Black plays axb4, then white plays cxb4 — a pawn exchange! White recaptures with the c pawn.",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_42",
                    type: "quiz",
                    fen: "8/8/8/4p1p1/5P2/4P1P1/8/8 w - - 0 1",
                    question: "Multiple captures! What is the sequence?",
                    options: ["exf4, gxf4, then gxf4", "Black exf4, White exf4, Black gxf4, White gxf4", "f5, g4, fxg5"],
                    correctAnswer: 1,
                    explanation: "Black exf4, White exf4, Black gxf4, White gxf4 — a series of pawn exchanges on the f-file!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_43",
                    type: "quiz",
                    fen: "8/p3p3/1p1p4/2p1P1p1/3P1P1P/P1P3P1/1P6/8 w - - 0 1",
                    question: "Capture the unprotected piece!",
                    options: ["hxg5", "fxg5", "dxc5"],
                    correctAnswer: 0,
                    explanation: "hxg5! The white pawn on h4 captures the unprotected black pawn on g5.",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_44",
                    type: "quiz",
                    fen: "8/8/3rr3/3bb3/3nn3/2P2P2/8/8 w - - 0 1",
                    question: "Capture with both white pawns. Only white will move. What is the sequence?",
                    options: ["cxd4, dxe5, exd6 and fxe4, exd5, dxe6", "c4, f4, then cxd5 and fxe5", "cxb4 and fxg4"],
                    correctAnswer: 0,
                    explanation: "cxd4, dxe5, exd6 AND fxe4, exd5, dxe6 — both pawns go on capturing runs taking all black pieces!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_45",
                    type: "quiz",
                    fen: "8/pp6/8/8/PP6/2P5/3P4/8 w - - 0 1",
                    question: "Capture as many pawns as possible! Only Black will move. What is the sequence?",
                    options: ["a5, axb4, bxc3, cxd2", "axb4, bxc3, cxd2", "a5, a4, axb3"],
                    correctAnswer: 0,
                    explanation: "a5, axb4, bxc3, cxd2 — the black pawn advances and then captures the white pawns in a chain!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_46",
                    type: "quiz",
                    fen: "8/2p5/3p4/2p5/2P5/8/3P4/8 w - - 0 1",
                    question: "Capture as many pawns as possible! Only white will move. What is the sequence?",
                    options: ["d4, dxc5, cxd6, dxc7", "cxd5, dxc6, cxb7", "d3, d4, dxc5, cxd6"],
                    correctAnswer: 0,
                    explanation: "d4, dxc5, cxd6, dxc7 — white advances the d pawn and then captures all three black pawns!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_47",
                    type: "quiz",
                    fen: "8/3b4/4r3/8/3n4/2q5/1P6/8 w - - 0 1",
                    question: "Capture as many pieces as possible! Only white will move. What is the sequence?",
                    options: ["bxc3, cxd4, d5, dxe6, exd7", "b4, bxc5, cxd6, dxe7", "bxa3, axb4, bxc5, cxd6"],
                    correctAnswer: 0,
                    explanation: "bxc3, cxd4, d5, dxe6, exd7 — the white pawn captures the queen, knight, advances, then captures the rook and bishop!",
                    rating: 150,
                    themes: ["pawn", "capture", "board"]
                },
                {
                    id: "L1_t4_b2_48",
                    type: "quiz",
                    fen: "8/8/8/8/p1pPp1p1/P1P1P1P1/8/8 w - - 0 1",
                    question: "Move forward Soldiers! Which pawn should advance?",
                    options: ["d5!!", "a4", "g4"],
                    correctAnswer: 0,
                    explanation: "d5!! The d4 pawn breaks through — it threatens to capture both c5 and e5 pawns while advancing toward promotion!",
                    rating: 200,
                    themes: ["pawn", "board", "strategy", "breakthrough"]
                },
                {
                    id: "L1_t4_b2_49",
                    type: "quiz",
                    fen: "8/5p1q/4rpP1/4pP2/3pP3/3P4/8/8 w - - 0 1",
                    question: "Capture the most valuable piece!?",
                    options: ["gxh7!! Brilliant", "gxf7", "g7"],
                    correctAnswer: 0,
                    explanation: "gxh7!! The white pawn on g6 captures the black queen on h7 — a brilliant pawn capture!",
                    rating: 200,
                    themes: ["pawn", "capture", "board", "tactics"]
                },
                {
                    id: "L1_t4_b2_50",
                    type: "quiz",
                    fen: "8/3q4/1b3r2/2P1P3/3P4/3r4/8/8 w - - 0 1",
                    question: "Capture the most valuable piece!?",
                    options: ["exf6", "cxb6", "exd6"],
                    correctAnswer: 0,
                    explanation: "exf6! The white pawn on e5 captures the black rook on f6. Although the queen is more valuable, the rook on f6 is directly diagonally attackable.",
                    rating: 200,
                    themes: ["pawn", "capture", "board", "tactics"]
                }
            ]
        }
    ]
};
