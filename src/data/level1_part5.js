// Part 5: Role of King (Quiz only) and Castling (Quiz only)
export const ROLE_OF_KING = {
    title: "Role of the King",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                { id: "role_q1", type: "quiz", question: "What is the most important piece?", options: ["King", "Queen", "Rook", "Pawn"], correctAnswer: 0, explanation: "The King is the most important - if you lose him (checkmate), the game is over!", rating: 100, themes: ["king", "strategy"] },
                { id: "role_q2", type: "quiz", question: "Is the King a strong attacker?", options: ["No, it's weak", "Yes, in the endgame", "Yes, in the opening", "It cannot attack"], correctAnswer: 1, explanation: "In the endgame, the King becomes a powerful piece that can attack pawns and support promotion.", rating: 100, themes: ["king", "endgame"] },
                { id: "role_q3", type: "quiz", question: "What is the King's main job in the opening?", options: ["To attack", "To clear the center", "To get to safety (castling)", "To sacrifice itself"], correctAnswer: 2, explanation: "In the opening, your #1 priority is King Safety, usually achieved by castling.", rating: 100, themes: ["king", "opening"] }
            ]
        }
    ]
};

export const CASTLING = {
    title: "Castling",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                { id: "cst_q1", type: "quiz", question: "Moves the King two squares towards a Rook, and the Roo jumps over.", options: ["Castling", "En Passant", "Promotion", "Checkmate"], correctAnswer: 0, explanation: "Castling is the only move where two pieces move at the same time!", rating: 100, themes: ["castling"] },
                { id: "cst_q2", type: "quiz", question: "When can you NOT castle?", options: ["If King is in check", "If it's runing", "If you are winning", "If it's move 10"], correctAnswer: 0, explanation: "You cannot castle if your King is in check, passes through check, or ends in check.", rating: 100, themes: ["castling", "rules"] },
                { id: "cst_q3", type: "quiz", question: "Which pieces move during castling?", options: ["King and Rook", "King and Queen", "Rook and Knight", "Two Rooks"], correctAnswer: 0, explanation: "Castling involves the King and the Rook moving together.", rating: 100, themes: ["castling"] }
            ]
        }
    ]
};
