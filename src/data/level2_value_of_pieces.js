export const VALUE_OF_PIECES = {
    title: "Value of pieces",
    blocks: [
        {
            id: "val_b1",
            name: "Basic Piece Values",
            puzzles: [
                {
                    id: "val_1_1",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
                    question: "What is the standard point value of a Pawn?",
                    options: ["1 point", "3 points", "5 points", "0 points"],
                    correctAnswer: 0,
                    explanation: "A pawn is the basic unit of value in chess, worth 1 point.",
                    rating: 100,
                    themes: ["value"]
                },
                {
                    id: "val_1_2",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
                    question: "How many points is a Knight worth?",
                    options: ["1 point", "3 points", "5 points", "9 points"],
                    correctAnswer: 1,
                    explanation: "A Knight is generally valued at 3 points, similar to a Bishop.",
                    rating: 100,
                    themes: ["value"]
                },
                {
                    id: "val_1_3",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
                    question: "What is the approximate value of a Bishop?",
                    options: ["1 point", "3 points", "5 points", "10 points"],
                    correctAnswer: 1,
                    explanation: "A Bishop is worth about 3 points, roughly the same as a Knight.",
                    rating: 100,
                    themes: ["value"]
                },
                {
                    id: "val_1_4",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
                    question: "How much is a Rook worth?",
                    options: ["3 points", "5 points", "7 points", "9 points"],
                    correctAnswer: 1,
                    explanation: "A Rook is a major piece, valued at 5 points.",
                    rating: 100,
                    themes: ["value"]
                },
                {
                    id: "val_1_5",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
                    question: "What is the value of the Queen?",
                    options: ["5 points", "9 points", "10 points", "Infinite"],
                    correctAnswer: 1,
                    explanation: "The Queen is the most powerful piece, worth 9 points.",
                    rating: 100,
                    themes: ["value"]
                }
            ]
        },
        {
            id: "val_b2",
            name: "Comparing Values",
            puzzles: [
                {
                    id: "val_2_1",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
                    question: "Which piece has a higher value?",
                    options: ["Knight (3)", "Rook (5)", "They are equal", "Pawn (1)"],
                    correctAnswer: 1,
                    explanation: "A Rook (5 points) is worth more than a Knight (3 points).",
                    rating: 100,
                    themes: ["value"]
                },
                {
                    id: "val_2_2",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
                    question: "Is it a good trade to give up a Queen for a Rook?",
                    options: ["Yes, always", "No, because 9 > 5", "Yes, they are equal", "Only if it's Tuesday"],
                    correctAnswer: 1,
                    explanation: "Generally no. You lose 9 points of material and only get 5 back.",
                    rating: 100,
                    themes: ["value"]
                },
                {
                    id: "val_2_3",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
                    question: "Which pair of pieces has the same total value?",
                    options: ["Rook & Pawn (6)", "Two Knights (6)", "Bishop & Knight (6)", "All of the above"],
                    correctAnswer: 3,
                    explanation: "Rook+Pawn=6, Two Knights=6, Bishop+Knight=6. All simplify to 6 points.",
                    rating: 100,
                    themes: ["value"]
                },
                {
                    id: "val_2_4",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
                    question: "Who is winning in material? White: Rook + Pawn vs Black: Bishop + Knight.",
                    options: ["White is winning", "Black is winning", "Material is equal", "Impossible to tell"],
                    correctAnswer: 2,
                    explanation: "White: 5+1=6. Black: 3+3=6. The material count is equal.",
                    rating: 100,
                    themes: ["value"]
                },
                {
                    id: "val_2_5",
                    type: "quiz",
                    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
                    question: "Which combination is worth the most points?",
                    options: ["Two Rooks (10)", "One Queen (9)", "Three Minor Pieces (9)", "Eight Pawns (8)"],
                    correctAnswer: 0,
                    explanation: "Two Rooks correspond to 10 points, which is slightly more than a Queen (9).",
                    rating: 100,
                    themes: ["value"]
                }
            ]
        }
    ]
};
