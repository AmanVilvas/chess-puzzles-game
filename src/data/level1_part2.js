// Part 2: Pawn (Quiz only - 3 blocks)
export const PAWN = {
    title: "Pawn",
    blocks: [
        {
            id: "block_1",
            puzzles: [
                { id: "pwn_q1", type: "quiz", question: "How does a pawn move mainly?", options: ["Forward", "Backward", "Sideways", "Diagonally"], correctAnswer: 0, explanation: "Pawns move forward one square at a time (except on their first move).", rating: 100, themes: ["pawn"] },
                { id: "pwn_q2", type: "quiz", question: "How many points is a pawn worth?", options: ["1 point", "3 points", "5 points", "10 points"], correctAnswer: 0, explanation: "A pawn is worth 1 point. It's the basic unit of value in chess.", rating: 100, themes: ["pawn", "value"] },
                { id: "pwn_q3", type: "quiz", question: "How many pawns does each player start with?", options: ["8", "10", "16", "2"], correctAnswer: 0, explanation: "Each player starts with a line of 8 pawns protecting their pieces.", rating: 100, themes: ["pawn"] }
            ]
        },
        {
            id: "block_2",
            puzzles: [
                { id: "pwn_q4", type: "quiz", question: "How does a pawn capture?", options: ["Diagonally forward", "Straight forward", "Sideways", "Backwards"], correctAnswer: 0, explanation: "Pawns are unique - they move straight but capture diagonally forward!", rating: 100, themes: ["pawn", "capture"] },
                { id: "pwn_q5", type: "quiz", question: "What happens when a pawn reaches the other side?", options: ["Promotion (becomes another piece)", "It gets removed", "It stays there forever", "It teleports back"], correctAnswer: 0, explanation: "Promotion! A pawn can become a Queen, Rook, Bishop, or Knight.", rating: 100, themes: ["pawn", "promotion"] },
                { id: "pwn_q6", type: "quiz", question: "On its very first move, how many squares can a pawn move?", options: ["1 or 2 squares", "Always 1 square", "Up to 3 squares", "Any number"], correctAnswer: 0, explanation: "On its first move only, a pawn can choose to move 1 or 2 squares forward.", rating: 100, themes: ["pawn", "rules"] }
            ]
        },
        {
            id: "block_3",
            puzzles: [
                {
                    id: "pwn_board_1",
                    type: "quiz",
                    fen: "7K/8/8/8/3P4/8/8/4k3 w - - 0 1",
                    question: "What piece is on d4?",
                    options: ["Pawn", "Rook", "Bishop", "Knight"],
                    correctAnswer: 0,
                    explanation: "That is a white Pawn on d4.",
                    rating: 100,
                    themes: ["pawn", "board"]
                },
                {
                    id: "pwn_board_2",
                    type: "quiz",
                    fen: "7K/8/8/8/8/8/3P4/4k3 w - - 0 1",
                    question: "Is d2-d4 a legal move?",
                    options: ["Yes", "No", "Only if capturing", "Only in check"],
                    correctAnswer: 0,
                    explanation: "Yes, because the pawn is on its starting rank (2nd rank), it can move 2 squares.",
                    rating: 100,
                    themes: ["pawn", "movement"]
                },
                {
                    id: "pwn_board_3",
                    type: "quiz",
                    fen: "7K/8/8/8/2p5/3P4/8/4k3 w - - 0 1",
                    question: "Is the pawn on d3 attacking c4?",
                    options: ["Yes", "No", "Only black pawn attacks", "Depends on turn"],
                    correctAnswer: 0,
                    explanation: "Yes, pawns attack diagonally forward. White pawn on d3 attacks c4.",
                    rating: 100,
                    themes: ["pawn", "capture"]
                }
            ]
        }
    ]
};
