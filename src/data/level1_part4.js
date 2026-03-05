// Part 4: Queen, Knight, King (Quiz only)
export const QUEEN = {
    title: "Queen",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                { id: "qn_q1", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "How does the queen move?", options: ["Only diagonally", "Only straight lines", "Both straight and diagonally", "L-shape like a knight"], correctAnswer: 2, explanation: "The queen combines the power of a rook AND bishop - she can move straight or diagonally!", rating: 100, themes: ["queen"] },
                { id: "qn_q2", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "What is the value of a queen in points?", options: ["3 points", "5 points", "9 points", "Infinite"], correctAnswer: 2, explanation: "The queen is worth 9 points - she's the most powerful piece on the board!", rating: 100, themes: ["queen", "value"] },
                { id: "qn_q3", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "How many queens does each player start with?", options: ["0 queens", "1 queen", "2 queens", "3 queens"], correctAnswer: 1, explanation: "Each player starts with 1 queen. But you can get more through pawn promotion!", rating: 100, themes: ["queen"] }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                { id: "qn_q4", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "Where does the white queen start?", options: ["d1 (a light square)", "e1 (a dark square)", "d8", "e8"], correctAnswer: 0, explanation: "White queen starts on d1. Remember: 'Queen on her own color' - white queen on light square!", rating: 100, themes: ["queen", "setup"] },
                { id: "qn_q5", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "Can the queen jump over pieces?", options: ["Yes, always", "No, never", "Only over pawns", "Only when capturing"], correctAnswer: 1, explanation: "The queen cannot jump over pieces. Only the knight can jump!", rating: 100, themes: ["queen"] },
                { id: "qn_q6", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "Why should you protect your queen?", options: ["She looks pretty", "She's worth the most points", "She's required to win", "She can't be captured"], correctAnswer: 1, explanation: "The queen is worth 9 points - losing her for less value is usually game-losing!", rating: 100, themes: ["queen", "strategy"] }
            ]
        },
        {
            id: "block_3",
            puzzles: [
                {
                    id: "qn_board_1",
                    type: "quiz",
                    fen: "8/8/p7/1B6/8/8/8/k1K5 w - - 0 1",
                    question: "Which piece is attacking black pawn at a6?",
                    options: ["White Bishop", "White Knight", "White Rook", "None"],
                    correctAnswer: 0,
                    explanation: "The White Bishop on b5 is attacking the pawn on a6 diagonally.",
                    rating: 100,
                    themes: ["queen", "board", "attack"]
                },
                {
                    id: "qn_board_2",
                    type: "quiz",
                    fen: "8/p7/8/8/3B4/8/8/k1K5 w - - 0 1",
                    question: "Is a7 under attack by white bishop?",
                    options: ["Yes", "No", "Only if it moves", "Blocked"],
                    correctAnswer: 0,
                    explanation: "Yes, the Bishop on d4 controls the long diagonal to a7.",
                    rating: 100,
                    themes: ["queen", "board", "attack"]
                },
                {
                    id: "qn_board_3",
                    type: "quiz",
                    fen: "8/8/4k3/8/4Q3/8/8/K7 w - - 0 1",
                    question: "Is black in check?",
                    options: ["Yes", "No", "Checkmate", "Stalemate"],
                    correctAnswer: 0,
                    explanation: "Yes, the White Queen on e4 is attacking the King on e6.",
                    rating: 100,
                    themes: ["queen", "board", "check"]
                }
            ]
        }
    ]
};

export const KNIGHT = {
    title: "Knight",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                { id: "kn_q1", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "How does a knight move?", options: ["Straight lines", "Diagonally", "L-shape (2 squares + 1 square)", "One square any direction"], correctAnswer: 2, explanation: "Knights move in an L-shape: 2 squares in one direction, then 1 square perpendicular.", rating: 100, themes: ["knight"] },
                { id: "kn_q2", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "What makes the knight unique among all pieces?", options: ["It's the strongest piece", "It can jump over other pieces", "It moves diagonally", "It can't be captured"], correctAnswer: 1, explanation: "The knight is the ONLY piece that can jump over other pieces!", rating: 100, themes: ["knight"] },
                { id: "kn_q3", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "What is the value of a knight in points?", options: ["1 point", "3 points", "5 points", "9 points"], correctAnswer: 1, explanation: "A knight is worth 3 points - the same as a bishop.", rating: 100, themes: ["knight", "value"] }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                { id: "kn_q4", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "How many knights does each player start with?", options: ["1 knight", "2 knights", "3 knights", "4 knights"], correctAnswer: 1, explanation: "Each player starts with 2 knights, next to the rooks.", rating: 100, themes: ["knight"] },
                { id: "kn_q5", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "When a knight moves, what color square does it land on?", options: ["Same color as it started", "Always the opposite color", "Always white", "Always black"], correctAnswer: 1, explanation: "Knights always change square color when they move. If on white, they land on black!", rating: 100, themes: ["knight"] },
                { id: "kn_q6", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "What is a 'knight fork'?", options: ["A special capture", "Attacking two pieces at once", "Trading knights", "A defensive move"], correctAnswer: 1, explanation: "A knight fork is when a knight attacks two or more pieces at the same time!", rating: 100, themes: ["knight", "tactics"] }
            ]
        },
        {
            id: "block_3",
            puzzles: [
                {
                    id: "kn_board_1",
                    type: "quiz",
                    fen: "7K/8/8/8/3N4/8/8/4k3 w - - 0 1",
                    question: "What piece is on d4?",
                    options: ["Knight", "Pawn", "Bishop", "Rook"],
                    correctAnswer: 0,
                    explanation: "That is a Knight on d4.",
                    rating: 100,
                    themes: ["knight", "board"]
                },
                {
                    id: "kn_board_2",
                    type: "quiz",
                    fen: "7K/8/8/8/3N4/8/8/4k3 w - - 0 1",
                    question: "Can the knight move to f5?",
                    options: ["Yes", "No", "Only if capturing", "Only forward"],
                    correctAnswer: 0,
                    explanation: "Yes, d4 to f5 is a legal L-shaped move.",
                    rating: 100,
                    themes: ["knight", "movement"]
                },
                {
                    id: "kn_board_3",
                    type: "quiz",
                    fen: "7K/8/5k2/8/3N4/8/8/8 w - - 0 1",
                    question: "Is the black king under attack?",
                    options: ["Yes", "No", "Checkmate", "Stalemate"],
                    correctAnswer: 0,
                    explanation: "Yes, the Knight is attacking the King.",
                    rating: 100,
                    themes: ["knight", "check"]
                }
            ]
        }
    ]
};

export const KING = {
    title: "King",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                { id: "kg_q1", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "How does the king move?", options: ["Any number of squares", "One square in any direction", "Only forward", "L-shape"], correctAnswer: 1, explanation: "The king moves one square in any direction - up, down, left, right, or diagonally.", rating: 100, themes: ["king"] },
                { id: "kg_q2", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "Can the king ever be captured?", options: ["Yes, like any piece", "No - the game ends in checkmate first", "Only by the queen", "Only by pawns"], correctAnswer: 1, explanation: "The king is never actually captured. When it's in checkmate with no escape, the game ends.", rating: 100, themes: ["king"] },
                { id: "kg_q3", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "Can two kings stand next to each other?", options: ["Yes", "No, that's illegal", "Only in endgames", "Only when in check"], correctAnswer: 1, explanation: "Kings can NEVER be on adjacent squares. They must stay at least one square apart.", rating: 100, themes: ["king"] }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                { id: "kg_q4", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "How many kings does each player have?", options: ["0 kings", "1 king", "2 kings", "3 kings"], correctAnswer: 1, explanation: "Each player has exactly 1 king - and protecting it is the whole point of chess!", rating: 100, themes: ["king"] },
                { id: "kg_q5", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "Can the king move into check (where it would be attacked)?", options: ["Yes, anytime", "No - it's illegal", "Only to escape", "Only in the endgame"], correctAnswer: 1, explanation: "Moving into check is always illegal. You can never put your own king in danger!", rating: 100, themes: ["king", "rules"] },
                { id: "kg_q6", type: "quiz", fen: "8/8/8/8/8/8/8/8 w - - 0 1", question: "When is the king actually strong?", options: ["In the opening", "In the middlegame", "In the endgame", "Never"], correctAnswer: 2, explanation: "In the endgame, when most pieces are gone, the king becomes an active fighting piece!", rating: 100, themes: ["king", "endgame"] }
            ]
        },
        {
            id: "block_3",
            puzzles: [
                {
                    id: "kg_board_1",
                    type: "quiz",
                    fen: "7k/8/8/8/8/8/4K3/8 w - - 0 1",
                    question: "What piece is on e2?",
                    options: ["King", "Queen", "Rook", "Bishop"],
                    correctAnswer: 0,
                    explanation: "That is the King on e2.",
                    rating: 100,
                    themes: ["king", "board"]
                },
                {
                    id: "kg_board_2",
                    type: "quiz",
                    fen: "7k/8/8/8/8/8/4K3/8 w - - 0 1",
                    question: "Can the king move to e3?",
                    options: ["Yes", "No", "Only if capturing", "Only if in check"],
                    correctAnswer: 0,
                    explanation: "Yes, the King can move one square forward to e3.",
                    rating: 100,
                    themes: ["king", "movement"]
                },
                {
                    id: "kg_board_3",
                    type: "quiz",
                    fen: "7k/6Q1/7K/8/8/8/8/8 w - - 0 1",
                    question: "Is this a checkmate?",
                    options: ["Yes", "No", "Stalemate", "Draw"],
                    correctAnswer: 0,
                    explanation: "Yes! The King is in check by the Queen and has no escape (protected by White King).",
                    rating: 100,
                    themes: ["king", "checkmate"]
                }
            ]
        }
    ]
};
