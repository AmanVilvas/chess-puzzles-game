export const TOPIC_8_ETIQUETTE = {
    "title": "Chess Etiquette",
    "blocks": [
        {
            "id": "b1",
            "name": "Chess Etiquette",
            "puzzles": [
                {
                    "id": "l2_t9_b1_1",
                    "fen": "8/8/3k4/8/3P4/4K3/8/8 w - - 0 1",
                    "goal": "Good Manners",
                    "type": "etiquette",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Rule of Chess"],
                    "description": "The touch-move rule: if you touch one of your own pieces (whether on purpose or accidentally) when it is your turn to move, you must move that piece if this can be legally done.",
                    "explanation": "If playing as White you have touched the d4-pawn, then you have to make a move with this pawn.",
                    "exampleText": "1. d5",
                    "solution": ["d4d5"]
                },
                {
                    "id": "l2_t9_b1_2",
                    "fen": "8/4bk2/3r4/8/3P4/3K4/8/8 b - - 0 1",
                    "goal": "Good Manners",
                    "type": "etiquette",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Rule of Chess"],
                    "description": "Touch and capture: if you touch an opponent's piece (whether on purpose or accidentally) when it is your turn to move, you have to capture it, if that can be legally done. It does not matter whether this capture is profitable or not.",
                    "explanation": "You are playing as Black. If you have touched the d4-pawn, then you must capture it with the rook.",
                    "exampleText": "1… Rxd4+",
                    "solution": ["d6d4"]
                },
                {
                    "id": "l2_t9_b1_3",
                    "fen": "b6k/1q4rp/8/8/8/5P2/1B1Q2P1/6K1 b - - 0 1",
                    "goal": "Good Manners",
                    "type": "etiquette",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Rule of Chess"],
                    "description": "If a forced move is illegal then the piece touched stays on its square without consequences. In such cases there are no penalty actions and you can make any other move with another piece.",
                    "explanation": "a) You touched the a8-bishop — but it is blocked by the b7-queen and has no possible moves, so it stays without penalty. b) You touched the g7-rook — but if the rook moves the black king would be in check from the b2-bishop, so that move is impossible and you must make some other move.",
                    "exampleText": "1… Qd5",
                    "solution": ["b7d5"]
                },
                {
                    "id": "l2_t9_b1_4",
                    "fen": "7k/1q4r1/8/4B3/8/8/6P1/4N1K1 b - - 0 1",
                    "goal": "Good Manners",
                    "type": "etiquette",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Rule of Chess"],
                    "description": "J'adoube (I adjust): If you wish to adjust a piece (yours or opponent's), you must first say \"J'adoube\" and only then adjust it. If you touch a piece first without saying J'adoube, the touch-move rule applies. You may only adjust pieces on your own turn.",
                    "explanation": "You touched the white pawn on g2 — you must capture it! The g7-rook is pinned by the e5-bishop and cannot move, so Black is forced to play Qxg2+. White replies Nxg2 and Black loses the queen.",
                    "exampleText": "1… Qxg2+ 2. Nxg2",
                    "solution": ["b7g2"]
                },
                {
                    "id": "l2_t9_b1_5",
                    "fen": "8/8/3kP3/8/5K2/8/8/8 b - - 0 1",
                    "goal": "Good Manners",
                    "type": "etiquette",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Rule of Chess"],
                    "description": "Insufficient material draw: when only two kings remain on the board, checkmate is impossible. A king alone cannot trap the opposing king — the game ends immediately in a draw.",
                    "explanation": "If Black captures the pawn on e6, only the two kings will remain on the board. There is no way for either side to checkmate the opponent's king.",
                    "exampleText": "1… Kxe6 = (Draw)",
                    "solution": ["d6e6"]
                },
                {
                    "id": "l2_t9_b1_6",
                    "fen": "7k/5RRp/7P/4p3/4B1P1/p7/PKP5/8 b - - 0 8",
                    "goal": "Good Manners",
                    "type": "etiquette",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Rule of Chess"],
                    "description": "Stalemate: when a player has no legal moves but their king is not in check, the game ends immediately in a draw. Even if one side has much more material, stalemate means neither player wins.",
                    "explanation": "If Black plays a3 here, after White makes any move the position becomes stalemate — Black will have no legal moves available. The game is drawn!",
                    "exampleText": "1… a3 2. Kxa3 = (Stalemate)",
                    "solution": ["a2a3"]
                },
                {
                    "id": "l2_t9_b1_7",
                    "fen": "r3r1k1/p4pp1/1p5p/2pP4/8/P6P/1P3PP1/R2R2K1 w - c6 0 1",
                    "goal": "Good Manners",
                    "type": "etiquette",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Rule of Chess"],
                    "description": "En passant: if a pawn moves two squares forward from its starting position and lands next to an opponent's pawn, that pawn may capture it as if it had moved only one square. This capture must be done immediately on the very next move, otherwise the right is lost.",
                    "explanation": "White has a pawn on d5. Black just moved the pawn from c7 to c5. White can capture en passant by moving d5 to c6, capturing the pawn that moved to c5 — even though the pawn is on c5, it is captured as if it moved only to c6.",
                    "exampleText": "1. dxc6",
                    "solution": ["d5c6"]
                },
                {
                    "id": "l2_t9_b1_8",
                    "fen": "8/6K1/8/3p4/3k4/8/8/5R2 w - - 0 1",
                    "goal": "Good Manners",
                    "type": "etiquette",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Rule of Chess"],
                    "description": "The Fifty-Move Rule: a player can claim a draw if no pawn move and no capture has occurred in the last 50 consecutive moves by each side (100 half-moves). If this happens, either player may claim a draw.",
                    "explanation": "In a King + Rook vs King + pawn ending, players can keep moving pieces without capturing or moving pawns. If 50 moves pass without any pawn move or capture, either player can claim a draw.",
                    "exampleText": "1. Re8+",
                    "solution": ["f1e8"]
                },
                {
                    "id": "l2_t9_b1_9",
                    "fen": "8/2p5/pb3kp1/1r5p/8/1P4P1/P1B2RKP/8 w - - 0 1",
                    "goal": "Good Manners",
                    "type": "etiquette",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Rule of Chess"],
                    "description": "Illegal moves: a player makes an illegal move when they move a piece incorrectly or leave their king in check. In tournament games, an illegal move results in a penalty — often adding time to the opponent's clock.",
                    "explanation": "White's king is not in check here. This position illustrates that if your king WERE in check from the rook, playing 1…a5 would be illegal since the king is still in check. You must deal with the check. Here, play the example move to understand the rule.",
                    "exampleText": "1… Bf2 (example legal move)",
                    "solution": ["b6f2"]
                },
                {
                    "id": "l2_t9_b1_10",
                    "fen": "r1bqk2r/1p2bppp/p1nppn2/8/3PP3/P1NB4/1P1B1PPP/R2QK1NR w KQkq - 0 1",
                    "goal": "Good Manners",
                    "type": "etiquette",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Rule of Chess"],
                    "description": "Move only one piece per turn: a player can move only one piece per turn. After making a move, the turn passes to the opponent. The only exception is castling, where king and rook move together as one special move.",
                    "explanation": "White moves the knight from g1 to f3. White cannot also move the bishop in the same turn — only one piece can be moved each turn, so White must wait for the next move.",
                    "exampleText": "1. Nf3",
                    "solution": ["g1f3"]
                }
            ]
        }
    ]
};
