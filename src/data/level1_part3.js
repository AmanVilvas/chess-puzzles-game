// Part 3: Rook and Bishop (Quiz only)
export const ROOK = {
    title: "Rook",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                { id: "rk_q1", type: "quiz", question: "How does a rook move?", options: ["Straight lines (rows/columns)", "Diagonally", "L-shape", "One square only"], correctAnswer: 0, explanation: "Rooks move as far as they want in straight lines - forward, backward, left, or right.", rating: 100, themes: ["rook"] },
                { id: "rk_q2", type: "quiz", question: "What is the value of a rook?", options: ["5 points", "3 points", "1 point", "9 points"], correctAnswer: 0, explanation: "A rook is worth 5 points. It's a 'major piece'!", rating: 100, themes: ["rook", "value"] },
                { id: "rk_q3", type: "quiz", question: "Where do rooks start on the board?", options: ["In the corners", "Next to the King", "In the center", "On the second row"], correctAnswer: 0, explanation: "Rooks start in the four corners of the board (a1, h1, a8, h8).", rating: 100, themes: ["rook", "setup"] }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                { id: "rk_q4", type: "quiz", question: "Can a rook jump over pieces?", options: ["No, never", "Yes, always", "Only when castling", "Only over pawns"], correctAnswer: 0, explanation: "Rooks cannot jump. They are blocked by other pieces. (Castling is a special king move, not a jump).", rating: 100, themes: ["rook", "rules"] },
                { id: "rk_q5", type: "quiz", question: "If a rook is on a white square, can it move to a black square?", options: ["Yes, easily", "No, never", "Only if capturing", "Only if in check"], correctAnswer: 0, explanation: "Yes! By moving straight, a rook crosses squares of both colors.", rating: 100, themes: ["rook"] },
                { id: "rk_q6", type: "quiz", question: "Which piece works best with a rook?", options: ["Another rook", "Knight", "Bishop", "King"], correctAnswer: 0, explanation: "Two rooks working together ('connected rooks') are extremely powerful!", rating: 100, themes: ["rook", "strategy"] }
            ]
        },
        {
            id: "block_3",
            puzzles: [
                {
                    id: "rk_board_1",
                    type: "quiz",
                    fen: "r2q1rk1/ppp2ppp/3N4/8/3P4/8/PPP2PPP/R2Q1RK1 w - - 0 1",
                    question: "What piece is on d6?",
                    options: ["White Knight", "Black Rook", "White Bishop", "None"],
                    correctAnswer: 0,
                    explanation: "There is a White Knight on the d6 square.",
                    rating: 100,
                    themes: ["rook", "board", "perception"]
                },
                {
                    id: "rk_board_2",
                    type: "quiz",
                    fen: "8/8/4k1p1/2b2p2/2N2P2/3P1K2/8/8 w - - 0 1",
                    question: "How many pieces are on the board?",
                    options: ["8", "10", "12", "32"],
                    correctAnswer: 0,
                    explanation: "Count carefully: 4 Black pieces + 4 White pieces = 8 total.",
                    rating: 100,
                    themes: ["rook", "board", "counting"]
                },
                {
                    id: "rk_board_3",
                    type: "quiz",
                    fen: "r2q1rk1/pp3ppp/2n5/8/4P3/8/PPPP1PPP/RNBQ1RK1 w - - 0 1",
                    question: "How many pieces does black have?",
                    options: ["10", "16", "8", "5"],
                    correctAnswer: 0,
                    explanation: "Black has: Rook, Queen, Rook, King (4) + Knight (1) + 5 Pawns = 10 pieces.",
                    rating: 100,
                    themes: ["rook", "board", "counting"]
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
                { id: "bp_q1", type: "quiz", question: "How does a bishop move?", options: ["Diagonally only", "Straight lines", "L-shape", "One square at a time"], correctAnswer: 0, explanation: "Bishops move diagonally as far as they want.", rating: 100, themes: ["bishop"] },
                { id: "bp_q2", type: "quiz", question: "What is the value of a bishop?", options: ["3 points", "1 point", "5 points", "9 points"], correctAnswer: 0, explanation: "A bishop is worth 3 points.", rating: 100, themes: ["bishop", "value"] },
                { id: "bp_q3", type: "quiz", question: "Can a bishop change square colors?", options: ["No, never", "Yes, anytime", "Only when capturing", "Only if promoted"], correctAnswer: 0, explanation: "A bishop stays on its starting color forever! That's why you have a 'light-squared' and 'dark-squared' bishop.", rating: 100, themes: ["bishop"] }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                { id: "bp_q4", type: "quiz", question: "Can a bishop jump over pieces?", options: ["No", "Yes", "Only pawns", "Only Kings"], correctAnswer: 0, explanation: "Like rooks and queens, bishops cannot jump over other pieces.", rating: 100, themes: ["bishop", "rules"] },
                { id: "bp_q5", type: "quiz", question: "Which is generally stronger?", options: ["Bishop pair (two bishops)", "Knight pair", "Rook and Knight", "Two pawns"], correctAnswer: 0, explanation: "The 'Bishop Pair' is considered an advantage because they control both color complexes!", rating: 100, themes: ["bishop", "strategy"] },
                { id: "bp_q6", type: "quiz", question: "How many bishops do you start with?", options: ["2", "1", "3", "4"], correctAnswer: 0, explanation: "You start with 2 bishops - one on a light square, one on a dark square.", rating: 100, themes: ["bishop", "setup"] }
            ]
        },
        {
            id: "block_3",
            puzzles: [
                {
                    id: "bp_board_1",
                    type: "quiz",
                    fen: "r1b2rk1/ppp2ppp/2n5/8/3P4/5N2/PPP2PPP/R4RK1 w - - 0 1",
                    question: "Is there any queen on the board?",
                    options: ["No", "Yes - White", "Yes - Black", "Yes - Both"],
                    correctAnswer: 0,
                    explanation: "No, there are no Queens on this board. They must have been traded!",
                    rating: 100,
                    themes: ["bishop", "board", "perception"]
                },
                {
                    id: "bp_board_2",
                    type: "quiz",
                    fen: "r1bq1rk1/ppp2ppp/2np4/2b1p3/2B1P3/2PP1Q2/PP3PPP/R1B1K2R w KQ - 0 1",
                    question: "Does white have a knight?",
                    options: ["No", "Yes", "Only promoted", "Captured"],
                    correctAnswer: 0,
                    explanation: "No, White has Rooks, Bishops, and a Queen, but no Knights on the board.",
                    rating: 100,
                    themes: ["bishop", "board", "perception"]
                },
                {
                    id: "bp_board_3",
                    type: "quiz",
                    fen: "8/8/8/8/8/1P6/1P6/K6k w - - 0 1",
                    question: "Is b2-b3 a legal move?",
                    options: ["No", "Yes", "Yes but bad", "Only capture"],
                    correctAnswer: 0,
                    explanation: "No, pawns move forward. The square b3 is already occupied by a white piece!",
                    rating: 100,
                    themes: ["bishop", "board", "rules"]
                }
            ]
        }
    ]
};
