// =========================
// Topic 11: Perpetual Check
// =========================
export const TOPIC_11_PERPETUAL = {
    title: "Perpetual",
    blocks: [
        {
            id: "t11_b1",
            name: "Perpetual",
            puzzles: [
                {
                    "id": "l2_t8_b1_1",
                    "fen": "2q5/1k6/8/8/8/8/4R3/1K6 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "description": "A perpetual check is when one player can give endless checks to the opponent's king. If the position repeats three times, the game can be claimed as a draw.",
                    "explanation": "Is there a perpetual check idea here?",
                    "solution": ["e2b2", "b7a7", "b2a2", "a7b8", "a2b2"]
                },
                {
                    "id": "l2_t8_b1_2",
                    "fen": "1r3b1k/6pp/3p4/3P2N1/pqP5/8/1P6/1KB1R1R1 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Can you escape with a perpetual check?",
                    "solution": ["g5f7", "h8g8", "f7h6", "g8h8", "h6f7"]
                },
                {
                    "id": "l2_t8_b1_3",
                    "fen": "5r1k/1p6/8/1P4Qp/1R2pP2/6PP/6RK/2qq4 w - - 2 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is a draw possible by perpetual check?",
                    "solution": ["g5h6", "h8g8", "h6g6", "g8h8", "g6h6"]
                },
                {
                    "id": "l2_t8_b1_4",
                    "fen": "6R1/1p1r4/2b2p2/2Pp3k/3P1bN1/8/2q2PB1/6K1 w - - 1 3",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Can the defender force a perpetual check?",
                    "solution": ["g4f6", "h5h6", "f6g4", "h6h5", "g4f6"]
                },
                {
                    "id": "l2_t8_b1_5",
                    "fen": "5rk1/pp4p1/3Np3/4P3/3P2Q1/2q3P1/8/5RK1 b - - 0 2",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is there a perpetual check idea here?",
                    "solution": ["c3e3", "g1g2", "e3e2", "g2g1", "e2e3"]
                },
                {
                    "id": "l2_t8_b1_6",
                    "fen": "8/1q6/5P1k/P4Q2/5K2/7P/2R2P2/8 b - - 0 3",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is there a perpetual check in this position?",
                    "solution": ["b7f3", "f4e5", "f3d5", "e5f4", "d5f3"]
                },
                {
                    "id": "l2_t8_b1_7",
                    "fen": "6k1/1p4p1/2n3Q1/p7/2q5/8/1P4PP/6K1 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Calculate the perpetual check.",
                    "solution": ["g6e8", "g8h7", "e8h5", "h7g8", "h5e8"]
                },
                {
                    "id": "l2_t8_b1_8",
                    "fen": "r4rk1/pp6/2n3p1/5Q2/3P4/5P2/P6P/qN5K w - - 0 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Show how to force a draw.",
                    "solution": ["f5g6", "g8h8", "g6h6", "h8g8", "h6g6"]
                },
                {
                    "id": "l2_t8_b1_9",
                    "fen": "r4rk1/pp3ppp/8/2b5/7Q/4nPN1/PP2B1PP/1N2R1KR b - - 2 2",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Identify the repetition idea.",
                    "solution": ["e3d1", "g1f1", "d1e3", "f1g1", "e3d1"]
                },
                {
                    "id": "l2_t8_b1_10",
                    "fen": "r4r2/pp1b1pkp/1b6/7p/5P1Q/4q3/PP4PP/R4R1K w - - 0 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Demonstrate the drawing mechanism.",
                    "solution": ["h4g5", "g7h8", "g5f6", "h8g8", "f6g5"]
                },
                {
                    "id": "l2_t8_b1_11",
                    "fen": "5k2/1p1R3p/2p2Np1/8/8/2P5/rr4PP/6K1 w - - 2 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Find the perpetual check.",
                    "solution": ["f6h7", "f8g8", "h7f6", "g8f8", "f6h7"]
                },
                {
                    "id": "l2_t8_b1_12",
                    "fen": "6k1/pp2Rp2/6p1/4P3/2r3PQ/PP6/3r3P/1K6 b - - 2 2",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Prove the position is drawn.",
                    "solution": ["d2d1", "b1b2", "d1d2", "b2b1", "d2d1"]
                },
                {
                    "id": "l2_t8_b1_13",
                    "fen": "1k1r1q2/1pp3p1/7p/Q2P4/2P5/6PP/1P5K/R1B5 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is there a perpetual check idea here?",
                    "solution": ["f6f2", "h2h1", "f2f1", "h1h2", "f1f2"]
                },
                {
                    "id": "l2_t8_b1_14",
                    "fen": "r3r1k1/p1R2ppp/1p6/8/Q7/P5nP/1P4PK/6N1 b - - 3 2",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Can you escape with a perpetual check?",
                    "solution": ["g3f1", "h2h1", "f1g3", "h1h2", "g3f1"]
                },
                {
                    "id": "l2_t8_b1_15",
                    "fen": "1q2r1k1/5N2/5KP1/8/8/8/8/8 w - - 2 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is a draw possible by perpetual check?",
                    "solution": ["f7h6", "g8h8", "h6f7", "h8g8", "f7h6"]
                },
                {
                    "id": "l2_t8_b1_16",
                    "fen": "8/5pk1/8/7Q/4n3/5PPP/3r4/6K1 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Can the defender force a perpetual check?",
                    "solution": ["d2d1", "g1g2", "d1d2", "g2g1", "d2d1"]
                },
                {
                    "id": "l2_t8_b1_17",
                    "fen": "6rk/p6q/1p5Q/2p5/8/1P4P1/5P1P/6K1 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is there a perpetual check in this position?",
                    "solution": ["h6f6", "g8g7", "f6d8", "h7g8", "d8h4"]
                },
                {
                    "id": "l2_t8_b1_18",
                    "fen": "8/p4ppk/Pp2R2p/5p1q/8/8/1P5Q/6RK b - - 0 2",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Calculate the perpetual check by Queen.",
                    "solution": ["h5f3", "g1g2", "f3d1", "h2g1", "d1h5"]
                },
                {
                    "id": "l2_t8_b1_19",
                    "fen": "3Q4/5ppk/7p/1P6/8/4n2P/2R2PPK/r7 b - - 0 2",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Show how to force a draw.",
                    "solution": ["e3f1", "h2g1", "f1g3", "g1g2", "g3f1"]
                },
                {
                    "id": "l2_t8_b1_20",
                    "fen": "1r5r/4np2/3pbkp1/qp5p/4P3/P3BP2/4B1PP/1N3RK1 w - - 0 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Identify the repetition idea.",
                    "solution": ["e3d4", "f6g5", "d4e3", "g5f6", "e3d4"]
                },
                {
                    "id": "l2_t8_b1_21",
                    "fen": "8/4N2p/p2p3k/3P4/P1p5/1r1q3P/1P5K/6R1 w - - 0 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is there a perpetual check idea here?",
                    "solution": ["e7g8", "h6h5", "g8f6", "h5h6", "f6g8"]
                },
                {
                    "id": "l2_t8_b1_22",
                    "fen": "5k2/3R4/1p1n4/p5Np/Pb6/8/3r4/6K1 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Can you escape with a perpetual check?",
                    "solution": ["g5h7", "f8g8", "h7f6", "g8f8", "f6h7"]
                },
                {
                    "id": "l2_t8_b1_23",
                    "fen": "R7/1rk1bpp1/3p4/6P1/1p1qBQ2/p7/PPP5/1K6 w - - 8 5",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is a draw possible by perpetual check?",
                    "solution": ["a8c8", "c7b6", "c8c6", "b6a7", "c6a6", "a7b8", "a6a8"]
                },
                {
                    "id": "l2_t8_b1_24",
                    "fen": "r1qr2k1/ppp1bpBp/1n6/3P1p2/8/8/PP2NP1P/3RK1R1 w - - 2 3",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Can the defender force a perpetual check?",
                    "solution": ["g7h6", "g8h8", "h6g7", "h8g8", "g7h6"]
                },
                {
                    "id": "l2_t8_b1_25",
                    "fen": "6k1/3p3p/2b3p1/1Pp1p3/2P3Pq/3R1P2/1Q4P1/6K1 b - - 0 2",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is there a perpetual check in this position?",
                    "solution": ["h4e1", "g1h2", "e1h4", "h2g1", "h4e1"]
                },
                {
                    "id": "l2_t8_b1_26",
                    "fen": "2r3k1/5pp1/p2qpb2/1p1bN2Q/3P4/7P/PP3PP1/3R2K1 w - - 2 3",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Demonstrate the drawing mechanism.",
                    "solution": ["h5f7", "g8h8", "f7h5", "h8g8", "h5f7"]
                },
                {
                    "id": "l2_t8_b1_27",
                    "fen": "r1b2rk1/pp2b3/1qn3p1/3p3Q/3P1B2/8/PP3PPP/R4RK1 w - - 0 3",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Find the perpetual check.",
                    "solution": ["h5g6", "g8h8", "g6h6", "h8g8", "h6g6"]
                },
                {
                    "id": "l2_t8_b1_28",
                    "fen": "4Q3/6pk/3pp2p/3n1p1P/3P4/6B1/P4PPK/2r1q3 w - - 1 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Calculate the perpetual check.",
                    "solution": ["e8g6", "g7h8", "g6e8", "h8h7", "e8g6"]
                },
                {
                    "id": "l2_t8_b1_29",
                    "fen": "5r2/1n3bkp/q2p1npN/3Pp3/2p1P2B/2P2N1P/5PRK/q5R1 w - - 9 7",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Show how to force a draw.",
                    "solution": ["h6f5", "g7g8", "f5h6", "g8g7", "h6f5"]
                },
                {
                    "id": "l2_t8_b1_30",
                    "fen": "6k1/7p/5Qp1/4B3/q7/8/1P5P/1K6 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Identify the repetition idea.",
                    "solution": ["a4d1", "b1a2", "d1a4", "a2b1", "a4d1"]
                },
                {
                    "id": "l2_t8_b1_31",
                    "fen": "7k/2RQ3p/6q1/8/5p1K/P7/8/8 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Reveal the perpetual sequence.",
                    "solution": ["g6g3", "h4h5", "g3g6", "h5h4", "g6g3"]
                },
                {
                    "id": "l2_t8_b1_32",
                    "fen": "1rr3k1/3RR3/8/8/8/2p5/1p6/1K6 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Execute the perpetual check.",
                    "solution": ["e7g7", "g8h8", "g7h7", "h8g8", "d7g7"]
                },
                {
                    "id": "l2_t8_b1_33",
                    "fen": "R7/1kp5/2p5/R7/1K6/7p/6q1/8 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Show the forced repetition.",
                    "solution": ["a5a7", "b7b6", "a7a6", "b6b7", "a6a7"]
                },
                {
                    "id": "l2_t8_b1_34",
                    "fen": "2kr3r/3R4/1K6/8/8/8/8/8 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Calculate the perpetual check.",
                    "solution": ["d7c7", "c8b8", "c7b7", "b8c8", "b7c7"]
                },
                {
                    "id": "l2_t8_b1_35",
                    "fen": "2R3R1/8/7p/7k/8/8/1p5K/q7 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is there a perpetual check idea here?",
                    "solution": ["c8c5", "h5h4", "c5c4", "h4h5", "c4c5"]
                },
                {
                    "id": "l2_t8_b1_36",
                    "fen": "8/Q7/8/8/8/3b4/3k2KP/4b1B1 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Can you escape with a perpetual check by the Bishop?",
                    "solution": ["d3e4", "g2h3", "e4f5", "h3g2", "f5e4"]
                },
                {
                    "id": "l2_t8_b1_37",
                    "fen": "8/4b3/8/4k3/Q3p3/4Kp2/7p/5R2 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is a draw possible by perpetual check?",
                    "solution": ["e7g5", "e3f2", "g5h4", "f2e3", "h4g5"]
                },
                {
                    "id": "l2_t8_b1_38",
                    "fen": "3k4/4R3/8/2p1N3/8/4b3/6K1/4q3 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Can the defender force a perpetual check with the Knight?",
                    "solution": ["e5c6", "d8c8", "c6a7", "c8d8", "a7c6"]
                },
                {
                    "id": "l2_t8_b1_39",
                    "fen": "r5k1/1b4pp/6N1/r7/1p1b4/1P6/8/1K3R1R w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is there a perpetual check in this position?",
                    "solution": ["g6e7", "g8h8", "e7g6", "h8g8", "g6e7"]
                },
                {
                    "id": "l2_t8_b1_40",
                    "fen": "r3R3/5pk1/5N1p/5K2/8/8/8/r7 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Calculate the perpetual check.",
                    "solution": ["f6h5", "g7h7", "h5f6", "h7g7", "f6h5"]
                },
                {
                    "id": "l2_t8_b1_41",
                    "fen": "2N5/1pn5/2p5/1k6/3P4/2K5/1P5q/R7 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Show how to force a draw by the Knight.",
                    "solution": ["c8a7", "b5b6", "a7c8", "b6b5", "c8a7"]
                },
                {
                    "id": "l2_t8_b1_42",
                    "fen": "4Q3/k4p2/1p6/1P5p/5P1P/2n2K1P/8/3r4 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Identify the repetition idea.",
                    "solution": ["d1d3", "f3f2", "d3d2", "f2f3", "d2d3"]
                },
                {
                    "id": "l2_t8_b1_43",
                    "fen": "7Q/2p5/2p5/2P5/1KPN4/1P6/5k2/q7 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Demonstrate the drawing mechanism.",
                    "solution": ["a1e1", "b4a4", "e1a1", "a4b4", "a1e1"]
                },
                {
                    "id": "l2_t8_b1_44",
                    "fen": "8/5k2/8/6b1/1Q4b1/2B3P1/1PK5/r7 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Find the perpetual check.",
                    "solution": ["g4f5", "c2b3", "f5e6", "b3c2", "e6f5"]
                },
                {
                    "id": "l2_t8_b1_45",
                    "fen": "3rkb1r/5p2/p1Pp3p/1p1N1Pp1/8/8/Pq4PP/6K1 w k - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Find a perpetual check by the Knight.",
                    "solution": ["d5c7", "e8e7", "c7d5", "e7e8", "d5c7"]
                },
                {
                    "id": "l2_t8_b1_46",
                    "fen": "8/8/2pbnp2/3bkp2/8/2P3P1/1P1K2P1/4N3 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Can you escape with a perpetual check?",
                    "solution": ["e1d3", "e5e4", "d3f2", "e4e5", "f2d3"]
                },
                {
                    "id": "l2_t8_b1_47",
                    "fen": "7k/5R2/6p1/2pB1pP1/2P1pP2/4q3/7K/8 w - - 0 3",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Can the defender force a perpetual check?",
                    "solution": ["f7f8", "h8g7", "f8f7", "g7g8", "f7f8"]
                },
                {
                    "id": "l2_t8_b1_48",
                    "fen": "5rk1/3r1p2/p1p3pp/1p2p3/2Bq4/1Pn3QP/5PP1/5RK1 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is a draw possible by perpetual check?",
                    "solution": ["g3g6", "g8h8", "g6h6", "h8g8", "h6g6"]
                },
                {
                    "id": "l2_t8_b1_49",
                    "fen": "k2rr3/8/7p/p2p2p1/1b6/n2Q1P2/6K1/8 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is there a perpetual check in this position?",
                    "solution": ["d3a6", "a8b8", "a6b6", "b8a8", "b6a6"]
                },
                {
                    "id": "l2_t8_b1_50",
                    "fen": "5rk1/pb1n1p2/1p2pP2/4R3/1p3P2/3P4/P1r1B1P1/5RK1 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": ["Perpetual"],
                    "explanation": "Is there a perpetual check idea here?",
                    "solution": ["e5g5", "g8h7", "g5h5", "h7g8", "h5g5"]
                }
            ]
        }
    ]
};
