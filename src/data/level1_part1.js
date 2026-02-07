// Part 1: Introduction, Notation, Pieces (Quiz only topics)
export const INTRO = {
    title: "Introduction",
    blocks: [{
        id: "block_1",
        puzzles: [
            { id: "intro_1", type: "quiz", question: "What is the goal of chess?", options: ["Capture all pieces", "Checkmate the opponent's king", "Control the center", "Promote a pawn"], correctAnswer: 1, explanation: "Chess ends when one king is checkmated - attacked with no escape.", rating: 100, themes: ["intro"] },
            { id: "intro_2", type: "quiz", question: "Who moves first in chess?", options: ["Black", "White", "The younger player", "Random"], correctAnswer: 1, explanation: "White always makes the first move.", rating: 100, themes: ["intro"] },
            { id: "intro_3", type: "quiz", question: "How many squares are on a chessboard?", options: ["32", "64", "48", "100"], correctAnswer: 1, explanation: "A chessboard has 8x8 = 64 squares.", rating: 100, themes: ["intro"] },
            { id: "intro_4", type: "quiz", question: "What are the two colors in chess?", options: ["Red and Blue", "White and Black", "Gold and Silver", "Green and Yellow"], correctAnswer: 1, explanation: "Chess is played between White and Black.", rating: 100, themes: ["intro"] },
            { id: "intro_5", type: "quiz", question: "How many pieces does each player start with?", options: ["8", "12", "16", "20"], correctAnswer: 2, explanation: "Each player starts with 16 pieces.", rating: 100, themes: ["intro"] }
        ]
    }]
};

export const NOTATION = {
    title: "Notation",
    blocks: [{
        id: "block_1",
        puzzles: [
            { id: "not_1", type: "quiz", question: "What does 'e4' mean in chess notation?", options: ["King moves to e4", "A piece moves to the e4 square", "Capture on e4", "Check on e4"], correctAnswer: 1, explanation: "e4 means a piece (usually pawn) moves to the e4 square.", rating: 100, themes: ["notation"] },
            { id: "not_2", type: "quiz", question: "Columns (vertical) on the board are called?", options: ["Ranks", "Files", "Rows", "Lines"], correctAnswer: 1, explanation: "Vertical columns are called files (a-h).", rating: 100, themes: ["notation"] },
            { id: "not_3", type: "quiz", question: "Rows (horizontal) on the board are called?", options: ["Ranks", "Files", "Columns", "Lines"], correctAnswer: 0, explanation: "Horizontal rows are called ranks (1-8).", rating: 100, themes: ["notation"] },
            { id: "not_4", type: "quiz", question: "What square is bottom-left for White?", options: ["a8", "h1", "a1", "h8"], correctAnswer: 2, explanation: "a1 is the bottom-left corner for White.", rating: 100, themes: ["notation"] },
            { id: "not_5", type: "quiz", question: "What does 'x' mean in notation?", options: ["Check", "Checkmate", "Capture", "Castling"], correctAnswer: 2, explanation: "'x' indicates a capture (e.g., Bxe5).", rating: 100, themes: ["notation"] }
        ]
    }]
};

export const PIECES = {
    title: "Pieces",
    blocks: [{
        id: "block_1",
        puzzles: [
            { id: "pcs_1", type: "quiz", question: "How many pawns does each player start with?", options: ["6", "8", "10", "12"], correctAnswer: 1, explanation: "Each player starts with 8 pawns.", rating: 100, themes: ["pieces"] },
            { id: "pcs_2", type: "quiz", question: "Which piece can jump over others?", options: ["Bishop", "Rook", "Knight", "Queen"], correctAnswer: 2, explanation: "Only the Knight can jump over other pieces.", rating: 100, themes: ["pieces"] },
            { id: "pcs_3", type: "quiz", question: "Which piece is the most powerful?", options: ["King", "Queen", "Rook", "Bishop"], correctAnswer: 1, explanation: "The Queen is the most powerful piece.", rating: 100, themes: ["pieces"] },
            { id: "pcs_4", type: "quiz", question: "How many rooks does each player have?", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "Each player has 2 rooks in the corners.", rating: 100, themes: ["pieces"] },
            { id: "pcs_5", type: "quiz", question: "Which piece must be protected at all costs?", options: ["Queen", "Rook", "King", "Knight"], correctAnswer: 2, explanation: "The King - if checkmated, you lose!", rating: 100, themes: ["pieces"] }
        ]
    }]
};
