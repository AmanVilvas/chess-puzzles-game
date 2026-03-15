
// =========================
// =========================
// Topic 5: Lawnmower Mate
// =========================
export const TOPIC_5_LAWNMOWER = {
    title: "Lawnmower mate",
    blocks: [
        {
            id: "t5_b1",
            name: "Double Rooks Mate",
            puzzles: [
                      {
                                "id": "l2_t5_b1_1",
                                "fen": "2k5/R7/7R/8/8/8/8/7K w - - 10 6",
                                "turn": "w",
                                "description": "Lawnmower Mate (Ladder Mate): Use two rooks to push the king to the edge of the board. One rook cuts off the escape route while the other delivers check, forcing the king back until it reaches the edge.",
                                "explanation": "In this position, the rook on a7 already cuts off the 7th rank. The rook on h6 can deliver checkmate on the 8th rank.",
                                "exampleText": "1. Rh8#",
                                "solution": [
                                          "h6h8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_2",
                                "fen": "7K/8/8/8/8/7R/R7/3k4 w - - 10 6",
                                "turn": "w",
                                "explanation": "Can you use both rooks to trap the king?",
                                "solution": [
                                          "h3h1"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_3",
                                "fen": "8/8/8/k7/8/1R6/2R5/7K w - - 8 5",
                                "turn": "w",
                                "explanation": "Can the rooks control the rank and mate?",
                                "solution": [
                                          "c2a2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_4",
                                "fen": "6R1/8/8/8/7k/8/5R2/4K3 w - - 8 5",
                                "turn": "w",
                                "explanation": "Is there a ladder mate with the rooks?",
                                "solution": [
                                          "f2h2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_5",
                                "fen": "1k4r1/p1p1R3/1p1p4/7p/4P3/2N2r1P/PP6/1RB4K b - - 5 29",
                                "turn": "b",
                                "explanation": "Can the two rooks deliver checkmate together?",
                                "solution": [
                                          "f3h3"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_6",
                                "fen": "r7/pR4R1/3pk3/2p1p1p1/2P1P2p/2KP1PrP/8/8 w - - 6 36",
                                "turn": "w",
                                "explanation": "Calculate the fastest mate using both rooks",
                                "solution": [
                                          "g7g6"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_7",
                                "fen": "5k2/R7/1R6/8/8/8/4K3/8 w - - 0 1",
                                "turn": "w",
                                "explanation": "Can the rooks alternate checks for mate?",
                                "solution": [
                                          "b6b8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_8",
                                "fen": "5K2/1p1r4/p5k1/6P1/1PP1p3/4P2r/1P2R3/4R3 b - - 8 5",
                                "turn": "b",
                                "explanation": "Can you start a ladder mate sequence?",
                                "solution": [
                                          "h3h8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_9",
                                "fen": "3r4/1p6/p7/5kP1/1PP1p2K/4Pr2/1P2R3/4R3 b - - 2 2",
                                "turn": "b",
                                "explanation": "Can one rook give check and the other seal escape?",
                                "solution": [
                                          "f3h3"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_10",
                                "fen": "2n4R/r5R1/1qp1k2p/p2pPp2/1p3P2/7N/PPP4P/1K6 w - - 0 4",
                                "turn": "w",
                                "explanation": "Is there a rook check that forces mate?",
                                "solution": [
                                          "h8h6"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_11",
                                "fen": "4r1k1/1p1R1p1p/6p1/2P5/Q7/P4PPP/BP4K1/4r3 b - - 2 3",
                                "turn": "b",
                                "explanation": "Can the two rooks deliver checkmate together?",
                                "solution": [
                                          "e8e2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_12",
                                "fen": "6k1/p2R2pp/1p1p4/6rn/1P1p4/1N1P1P2/P1R1KP2/2B4r b - - 1 3",
                                "turn": "b",
                                "explanation": "Is there a classic double-rook mate?",
                                "solution": [
                                          "g5c5"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_13",
                                "fen": "8/1b3p1k/p7/1p1BPP2/8/2R5/P6P/1K4R1 w - - 1 9",
                                "turn": "w",
                                "explanation": "Can you use both rooks to trap the king?",
                                "solution": [
                                          "g1h1"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_14",
                                "fen": "3qr3/5p1k/p2p1p2/7r/2p4R/P7/1PP2P1P/2K3R1 w - - 2 7",
                                "turn": "w",
                                "explanation": "Can the rooks control the rank and mate?",
                                "solution": [
                                          "h4h5"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_15",
                                "fen": "5r2/pp5k/1n6/3b3q/6R1/2P4R/P4PPP/6K1 w - - 2 3",
                                "turn": "w",
                                "explanation": "Is there a ladder mate with the rooks?",
                                "solution": [
                                          "h3h5"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_16",
                                "fen": "5r2/5pk1/p7/3pP1qR/1p4RP/3P4/r5P1/7K w - - 2 3",
                                "turn": "w",
                                "explanation": "Can the two rooks deliver checkmate together?",
                                "solution": [
                                          "g4g5"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_17",
                                "fen": "7k/2R2pp1/3p3p/p4P2/6n1/NN5P/2B2r1r/2R1K3 b - - 6 4",
                                "turn": "b",
                                "explanation": "Can you start a ladder mate sequence?",
                                "solution": [
                                          "h2h1"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_18",
                                "fen": "6k1/2p1R1b1/1p1p4/1N1P4/1PP3Pp/P3R2K/5r2/5r2 b - - 4 3",
                                "turn": "b",
                                "explanation": "Can one rook give check and the other seal escape?",
                                "solution": [
                                          "f2h2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_19",
                                "fen": "4Rr1k/3R3p/3p2p1/q2P1p2/2p5/8/5PPP/6K1 w - - 2 3",
                                "turn": "w",
                                "explanation": "Is there a rook check that forces mate?",
                                "solution": [
                                          "e8f8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_20",
                                "fen": "2k3rr/1p3p2/B1b3Q1/3p4/8/4bPK1/PP1N4/R1R5 b - - 2 3",
                                "turn": "b",
                                "explanation": "Is there a classic double-rook mate?",
                                "solution": [
                                          "g8g3"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_21",
                                "fen": "1r4k1/3b1ppp/8/5P2/p1R2NP1/P4N2/K1PQ3P/1r6 b - - 1 3",
                                "turn": "b",
                                "explanation": "Can you use both rooks to trap the king?",
                                "solution": [
                                          "b8b2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_22",
                                "fen": "6k1/1Q3pp1/1p1B2pb/8/4R3/6PP/r6r/5RK1 b - - 2 3",
                                "turn": "b",
                                "explanation": "Can the rooks control the rank and mate?",
                                "solution": [
                                          "h2g2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_23",
                                "fen": "1n2Rq1k/r2r3p/p7/1p6/8/2P3R1/P4PPP/6K1 w - - 2 3",
                                "turn": "w",
                                "explanation": "Is there a ladder mate with the rooks?",
                                "solution": [
                                          "e8f8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_24",
                                "fen": "6k1/2R1R1pp/r7/n2r1P2/P1p3P1/2qp3P/2B2P2/6K1 w - - 0 2",
                                "turn": "w",
                                "explanation": "Can the two rooks deliver checkmate together?",
                                "solution": [
                                          "e7e8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_25",
                                "fen": "5r1k/7p/4p2r/3pP3/p2Q1P2/P4pK1/4bP2/R5RB b - - 2 3",
                                "turn": "b",
                                "explanation": "Did your opponent overlook the rook mate?",
                                "solution": [
                                          "h6g6"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_26",
                                "fen": "r3Nk2/p5RR/2p5/2n2r1p/8/8/1PP5/1K6 w - - 4 3",
                                "turn": "w",
                                "explanation": "Is there only one rook move that mates?",
                                "solution": [
                                          "h7h8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_27",
                                "fen": "5r2/3R1pp1/4k2n/4p1p1/4P3/1Pq4P/P4PP1/3R2K1 w - - 0 2",
                                "turn": "w",
                                "explanation": "Can you start a ladder mate sequence?",
                                "solution": [
                                          "d1d6"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_28",
                                "fen": "r7/3R1np1/3R4/4pkp1/4q3/1P5P/P4PPK/8 w - - 0 5",
                                "turn": "w",
                                "explanation": "Can the rooks alternate checks for mate?",
                                "solution": [
                                          "d7f7"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_29",
                                "fen": "6k1/5p1p/1B1P2p1/p7/2PQ1PB1/8/r6r/5RK1 b - - 1 4",
                                "turn": "b",
                                "explanation": "Is there a rook check that forces mate?",
                                "solution": [
                                          "a2g2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_30",
                                "fen": "5R2/1p4k1/6pp/6q1/2p5/3P4/1P2r1PP/5R1K w - - 1 4",
                                "turn": "w",
                                "explanation": "Can one rook give check and the other seal escape?",
                                "solution": [
                                          "f1f7"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_31",
                                "fen": "1k6/p1p4r/Pp5R/1P6/5p2/3P3K/4P3/2R3r1 b - - 1 5",
                                "turn": "b",
                                "explanation": "Calculate the fastest mate using both rooks",
                                "solution": [
                                          "h7h6"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_32",
                                "fen": "2k3r1/Q7/2p1pp2/2Np1p2/3P4/4P2P/P1P1B2K/6r1 b - - 3 4",
                                "turn": "b",
                                "explanation": "Is the king trapped by rook coordination?",
                                "solution": [
                                          "g8g2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_33",
                                "fen": "5R2/p1nk4/2q1p1p1/3pP1Pp/3P3P/8/P7/5RK1 w - - 3 4",
                                "turn": "w",
                                "explanation": "Can you use both rooks to trap the king?",
                                "solution": [
                                          "f1f7"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_34",
                                "fen": "5R2/p1n4k/2q1p1p1/3pP1Pp/3P3P/8/P7/5RK1 w - - 3 4",
                                "turn": "w",
                                "explanation": "Can the rooks control the rank and mate?",
                                "solution": [
                                          "f1f7"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_35",
                                "fen": "R2Q4/1r3pk1/6pp/8/3Pn3/4P2P/5r2/7K b - - 1 3",
                                "turn": "b",
                                "explanation": "Is there a ladder mate with the rooks?",
                                "solution": [
                                          "b7b1"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_36",
                                "fen": "4r1k1/1p1R1p1p/6p1/2P5/Q7/P4PPP/BP5K/4r3 b - - 2 3",
                                "turn": "b",
                                "explanation": "Can the two rooks deliver checkmate together?",
                                "solution": [
                                          "e8e2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_37",
                                "fen": "3nr2k/p4pR1/5P1b/1p6/8/7R/PPp1p1PP/4K3 w - - 2 3",
                                "turn": "w",
                                "explanation": "Can the rooks cut off the king vertically?",
                                "solution": [
                                          "g7h7"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_38",
                                "fen": "r4r2/pb3p2/1p5k/3qN1R1/3PpP1b/4P3/PP1K4/7R w - - 4 4",
                                "turn": "w",
                                "explanation": "Did your opponent overlook the rook mate?",
                                "solution": [
                                          "h1h4"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_39",
                                "fen": "2k4r/ppp1bpp1/6r1/4P2Q/2PP4/7K/PP3R1P/R7 b - - 4 4",
                                "turn": "b",
                                "explanation": "Is there only one rook move that mates?",
                                "solution": [
                                          "g6h6"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_40",
                                "fen": "4rrk1/1R5R/p2q1Pp1/3p4/8/8/5PP1/6K1 w - - 4 4",
                                "turn": "w",
                                "explanation": "Is there a rook check that forces mate?",
                                "solution": [
                                          "h7g7"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_41",
                                "fen": "7r/pp3k2/1b2p3/3p2p1/P2P1pP1/1P1Q1P2/1BR2K2/2R4r b - - 1 3",
                                "turn": "b",
                                "explanation": "Can one rook give check and the other seal escape?",
                                "solution": [
                                          "h8h2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_42",
                                "fen": "3R4/3R4/p4p1k/1p3Pp1/1P2b3/P5PP/2r3BK/8 w - - 2 5",
                                "turn": "w",
                                "explanation": "Can you start a ladder mate sequence?",
                                "solution": [
                                          "d8h8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_43",
                                "fen": "r7/p6R/2p3k1/1p1q1pp1/3P4/P4P2/1P4P1/2K4R w - - 0 4",
                                "turn": "w",
                                "explanation": "Can the rooks alternate checks for mate?",
                                "solution": [
                                          "h1h6"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_44",
                                "fen": "4k2b/p1r5/1pN1P1Rp/5n2/5P2/3R4/1P5P/4K3 w - - 2 2",
                                "turn": "w",
                                "explanation": "Calculate the fastest mate using both rooks",
                                "solution": [
                                          "g6g8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_45",
                                "fen": "4k2b/p4R2/1pr1P1Rp/5n2/5P2/8/1P5P/4K3 w - - 4 4",
                                "turn": "w",
                                "explanation": "Is there a ladder mate with the rooks?",
                                "solution": [
                                          "g6g8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_46",
                                "fen": "4k2b/p2R4/1pr1P1Rp/5n2/5P2/8/1P5P/4K3 w - - 2 3",
                                "turn": "w",
                                "explanation": "Can the two rooks deliver checkmate together?",
                                "solution": [
                                          "g6g8"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_47",
                                "fen": "6k1/p5pp/1p1p1r2/3R2r1/1P2Pp2/1N3P2/P1Q4K/R7 b - - 0 3",
                                "turn": "b",
                                "explanation": "Is there a ladder mate with the rooks?",
                                "solution": [
                                          "g5h5"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_48",
                                "fen": "6k1/p5pp/1p1p1r2/3R2r1/1P2Pp2/1N3n1K/P1Q3P1/R7 b - - 1 3",
                                "turn": "b",
                                "explanation": "Can the rooks control the rank and mate?",
                                "solution": [
                                          "g5h5"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_49",
                                "fen": "6k1/p2R2pp/1pQp4/6r1/1P1p4/1N1P1P2/P3K3/2R4r b - - 1 3",
                                "turn": "b",
                                "explanation": "Can you use both rooks to trap the king?",
                                "solution": [
                                          "g5g2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      },
                      {
                                "id": "l2_t5_b1_50",
                                "fen": "6k1/p5pp/1p1p4/3R3r/1P2Pp2/1N3P2/P1Q2K2/R6r b - - 1 3",
                                "turn": "b",
                                "explanation": "Is there a classic double-rook mate?",
                                "solution": [
                                          "h5h2"
                                ],
                                "goal": "Double Rooks Checkmate",
                                "rating": 200,
                                "themes": [
                                          "Double Rooks Mate"
                                ]
                      }
            ]
        }
    ]
};

// Topic 6: Stalemate
// =========================
export const TOPIC_6_DRAW = {
    "title": "Stalemate",
    "blocks": [
        {
            "id": "b1",
            "name": "Block 1",
            "puzzles": [
                {
                    "id": "l2_t7_b1_1",
                    "fen": "8/7p/5Qpk/8/P7/5P1q/5P2/6K1 b - - 2 3",
                    "goal": "Stalemate trick",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "description": "Stalemate is a drawing resource where the player to move has no legal moves and their king is not in check. In desperate positions, you can sometimes sacrifice your pieces to create a stalemate and save a half-point.",
                    "explanation": "Black is losing here, but can sacrifice the queen to create a stalemate position where the black king has no squares to move.",
                    "exampleText": "1... Qg4+ 2. fxg4 (Stalemate)",
                    "solution": [
                        "h3g4"
                    ]
                },
                {
                    "id": "l2_t7_b1_2",
                    "fen": "8/8/8/3Bk1p1/2P1N1Pp/4K2P/2r5/8 b - - 4 4",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you stalemate?",
                    "solution": [
                        "c2c4"
                    ]
                },
                {
                    "id": "l2_t7_b1_3",
                    "fen": "3k4/1pp2pp1/1b4r1/pP2p3/P3P3/5qNb/2Q2P1P/4B1KR w - - 0 6",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "What is the stalemate idea?",
                    "solution": [
                        "c2d1"
                    ]
                },
                {
                    "id": "l2_t7_b1_4",
                    "fen": "7k/5RRp/7P/4p3/p3B1P1/8/PKP5/8 b - - 0 8",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "How can you stalemate here?",
                    "solution": [
                        "a4a3"
                    ]
                },
                {
                    "id": "l2_t7_b1_5",
                    "fen": "8/1q6/5P1k/P4Q2/5K2/7P/2R2P2/8 b - - 0 3",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a safe Stalemate move?",
                    "solution": [
                        "b7f3"
                    ]
                },
                {
                    "id": "l2_t7_b1_6",
                    "fen": "3KQ3/8/1k2b3/4q3/8/8/8/8 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you find a stalemate?",
                    "solution": [
                        "e8e6"
                    ]
                },
                {
                    "id": "l2_t7_b1_7",
                    "fen": "8/8/8/8/8/k2q4/1R6/2K5 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you find stalemate and draw the game?",
                    "solution": [
                        "b2a2"
                    ]
                },
                {
                    "id": "l2_t7_b1_8",
                    "fen": "8/1Q6/4kp2/5N2/3PPP2/6K1/5P1P/5q2 b - - 2 3",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you Stalemate?",
                    "solution": [
                        "f1h3"
                    ]
                },
                {
                    "id": "l2_t7_b1_9",
                    "fen": "1Q6/7k/3p1p1p/3PpNpP/4P1P1/5PK1/8/7q b - - 5 5",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there any stalemate idea?",
                    "solution": [
                        "h1g2"
                    ]
                },
                {
                    "id": "l2_t7_b1_10",
                    "fen": "6K1/3nkP2/8/5P2/8/2b5/8/8 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you create stalemate by force?",
                    "solution": [
                        "f7f8q"
                    ]
                },
                {
                    "id": "l2_t7_b1_11",
                    "fen": "8/8/3p4/7p/4P1pP/6K1/8/6k1 w - - 1 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a stalemate trick?",
                    "solution": [
                        "e4e5"
                    ]
                },
                {
                    "id": "l2_t7_b1_12",
                    "fen": "8/4R3/8/3k4/3np3/4K3/r7/8 w - - 0 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you force stalemate or a draw?",
                    "solution": [
                        "e7e5"
                    ]
                },
                {
                    "id": "l2_t7_b1_13",
                    "fen": "6qk/R2RQ3/8/8/2B5/8/8/7K b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is stalemate possible here?",
                    "solution": [
                        "g8g1"
                    ]
                },
                {
                    "id": "l2_t7_b1_14",
                    "fen": "R4bk1/1q3pp1/6N1/8/2BQ3R/2B5/8/6K1 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the game end in a stalemate?",
                    "solution": [
                        "b7g2"
                    ]
                },
                {
                    "id": "l2_t7_b1_15",
                    "fen": "8/8/4r1N1/4b3/8/3k1P2/8/3K4 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a stalemate in this position?",
                    "solution": [
                        "g6f4"
                    ]
                },
                {
                    "id": "l2_t7_b1_16",
                    "fen": "Q7/5p1k/5P1p/7K/p6P/4P3/1pq5/8 w - - 2 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a hidden stalemate idea by the Queen?",
                    "solution": [
                        "a8e4"
                    ]
                },
                {
                    "id": "l2_t7_b1_17",
                    "fen": "8/8/8/8/3q4/6NK/8/2n3k1 w - - 0 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the position collapse into stalemate?",
                    "solution": [
                        "g3e2"
                    ]
                },
                {
                    "id": "l2_t7_b1_18",
                    "fen": "6k1/6p1/5pP1/5p1K/5P2/8/p6P/8 w - - 0 3",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you create stalemate by force?",
                    "solution": [
                        "h2h4"
                    ]
                },
                {
                    "id": "l2_t7_b1_19",
                    "fen": "8/2k2b2/8/8/4B2K/7P/7r/8 w - - 2 2",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a stalemate trick?",
                    "solution": [
                        "e4g2"
                    ]
                },
                {
                    "id": "l2_t7_b1_20",
                    "fen": "7k/6q1/6r1/7K/6pP/6P1/5Q2/8 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you force stalemate?",
                    "solution": [
                        "f2f6"
                    ]
                },
                {
                    "id": "l2_t7_b1_21",
                    "fen": "8/8/8/p7/Pp6/1K6/5R2/1kq5 w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is stalemate possible here?",
                    "solution": [
                        "f2f1"
                    ]
                },
                {
                    "id": "l2_t7_b1_22",
                    "fen": "8/8/8/8/8/1k4q1/8/2KR4 w - - 0 12",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the game end in a stalemate with a Rook check?",
                    "solution": [
                        "d1d3"
                    ]
                },
                {
                    "id": "l2_t3_b1_23",
                    "fen": "8/8/8/6r1/5K1k/5Q2/8/8 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a stalemate in this position?",
                    "solution": [
                        "g5f5"
                    ]
                },
                {
                    "id": "l2_t7_b1_24",
                    "fen": "6k1/R7/6NK/5r2/8/8/8/8 b - - 0 1",
                    "goal": "Draw",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the defender aim only for stalemate?",
                    "solution": [
                        "f5h5"
                    ]
                },
                {
                    "id": "l2_t7_b1_25",
                    "fen": "8/6k1/8/5p2/p5p1/6Pp/1b3B1P/7K w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can stalemate occur immediately?",
                    "solution": [
                        "f2d4"
                    ]
                },
                {
                    "id": "l2_t7_b1_26",
                    "fen": "8/kp3q2/p7/P3p3/7Q/8/8/7K w - - 0 1",
                    "goal": "Draw",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the position suddenly become stalemate with the Queen check?",
                    "solution": [
                        "h4f2"
                    ]
                },
                {
                    "id": "l2_t7_b1_27",
                    "fen": "k7/3R4/1K6/1p1p4/1PpP4/2P5/8/8 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is the opponent close to stalemate? Prevent it.",
                    "solution": [
                        "d7d8"
                    ]
                },
                {
                    "id": "l2_t7_b1_28",
                    "fen": "4k3/8/3KN3/8/8/3B4/8/8 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a hidden stalemate idea? Don't fall into it.",
                    "solution": [
                        "d3g6"
                    ]
                },
                {
                    "id": "l2_t7_b1_29",
                    "fen": "3k4/8/p1KN4/Pp6/1P6/8/3B4/8 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the position collapse into stalemate, find a way to win?",
                    "solution": [
                        "d2g5"
                    ]
                },
                {
                    "id": "l2_t7_b1_30",
                    "fen": "3k4/8/2KN4/6p1/6P1/8/4R3/8 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you create mate by force?",
                    "solution": [
                        "e2e8"
                    ]
                },
                {
                    "id": "l2_t7_b1_31",
                    "fen": "3k4/3B4/2K5/6p1/6P1/Q7/8/8 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a mate trick?",
                    "solution": [
                        "a3f8"
                    ]
                },
                {
                    "id": "l2_t7_b1_32",
                    "fen": "1r6/8/8/7p/6pP/k1n3P1/8/K7 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you force mate? And avoid stalemate?",
                    "solution": [
                        "Rb1#"
                    ]
                },
                {
                    "id": "l2_t7_b1_33",
                    "fen": "8/3b4/8/7p/6pP/3nk1P1/8/3K4 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is mate possible here?",
                    "solution": [
                        "Ba4#"
                    ]
                },
                {
                    "id": "l2_t7_b1_34",
                    "fen": "8/6b1/8/1p6/pP6/P3nk2/8/4K3 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the game end in a mate?",
                    "solution": [
                        "Bc3#"
                    ]
                },
                {
                    "id": "l2_t7_b1_35",
                    "fen": "8/8/5q2/1p6/pP6/P3nk2/8/4K3 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a stalemate to prevent in this position?",
                    "solution": [
                        "Qc3#"
                    ]
                },
                {
                    "id": "l2_t7_b1_36",
                    "fen": "3r4/8/8/1p6/pP6/P3nk2/8/4K3 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is stalemate forced? Try to mate.",
                    "solution": [
                        "Rd1#"
                    ]
                },
                {
                    "id": "l2_t7_b1_37",
                    "fen": "4b3/8/8/8/8/6kn/8/7K w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the king be left with no good move?",
                    "solution": [
                        "Bc6#"
                    ]
                },
                {
                    "id": "l2_t7_b1_38",
                    "fen": "8/3b4/8/8/8/6k1/5p2/5K2 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the defender aim only for win?",
                    "solution": [
                        "Bb5#"
                    ]
                },
                {
                    "id": "l2_t7_b1_39",
                    "fen": "5k2/8/3pKN2/1PpP4/2P5/8/3B4/8 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the position collapse into mate?",
                    "solution": [
                        "d2h6"
                    ]
                },
                {
                    "id": "l2_t7_b1_40",
                    "fen": "1R6/5Npk/3p2p1/2pP2p1/2P3P1/8/6K1/8 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you create win by force?",
                    "solution": [
                        "b8h8"
                    ]
                },
                {
                    "id": "l2_t7_b1_41",
                    "fen": "Q7/5Npk/1p4p1/1Pp3p1/2P3P1/8/6K1/8 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the position suddenly become stalemate?",
                    "solution": [
                        "a8h8"
                    ]
                },
                {
                    "id": "l2_t7_b1_42",
                    "fen": "2k5/5Np1/1pP3p1/1Pp3p1/2P3P1/6B1/8/R2K4 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is the opponent close to stalemate or you can just stop it?",
                    "solution": [
                        "a1a8"
                    ]
                },
                {
                    "id": "l2_t7_b1_43",
                    "fen": "2k5/5Np1/1pP3p1/1Pp3p1/2P3P1/2K3B1/8/Q7 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a hidden mate idea?",
                    "solution": [
                        "a1a8"
                    ]
                },
                {
                    "id": "l2_t7_b1_44",
                    "fen": "2k5/8/2K2B2/1p4p1/1Pp3P1/2P5/8/Q7 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a stalemate trick to be stop?",
                    "solution": [
                        "a1a8"
                    ]
                },
                {
                    "id": "l2_t7_b1_45",
                    "fen": "7k/8/4p1K1/4P1p1/5QP1/8/8/8 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "w",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can you force win without stalemate?",
                    "solution": [
                        "f4f8"
                    ]
                },
                {
                    "id": "l2_t7_b1_46",
                    "fen": "8/2p5/p1P4p/P3n2P/8/4k3/4b3/4K3 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is win possible here?",
                    "solution": [
                        "Nd3#"
                    ]
                },
                {
                    "id": "l2_t7_b1_47",
                    "fen": "8/8/p2p3b/P2P3p/7P/6k1/6b1/6K1 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Can the game end in stalemate or there are any mate?",
                    "solution": [
                        "Be3#"
                    ]
                },
                {
                    "id": "l2_t7_b1_48",
                    "fen": "8/8/2p5/2Pp3p/p2P3P/P5k1/2r5/7K w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "Is there a stalemate to stop in this position?",
                    "solution": [
                        "Rc1#"
                    ]
                },
                {
                    "id": "l2_t7_b1_49",
                    "fen": "5q2/8/2p5/2Pp4/p2P4/P5k1/8/7K w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "How can you avoid stalemate here?",
                    "solution": [
                        "Qf1#"
                    ]
                },
                {
                    "id": "l2_t7_b1_50",
                    "fen": "8/8/2p2pk1/2Pp1q1p/3P3P/6K1/2q5/8 w - - 0 1",
                    "goal": "Prevent Stalemate",
                    "turn": "b",
                    "rating": 200,
                    "themes": [
                        "Stalemate"
                    ],
                    "explanation": "What is the winning move without stalemate?",
                    "solution": [
                        "Qf2#"
                    ]
                }
            ]
        }
    ]
};


// =========================
// Topic 7: Pawn Structure
// =========================
export const TOPIC_7_PAWN_STRUCTURE = {
    title: "Pawn structure",
    blocks: [
        {
            id: "t7_b1",
            name: "Weak Pawns",
            puzzles: [
                {
                    id: "ps_1_1",
                    fen: "7k/8/8/4p3/3P4/8/8/7K w - - 0 1",
                    goal: "Create a passed pawn",
                    solution: ["d4e5"],
                    turn: "w",
                    themes: ["structure"],
                    explanation: "Capturing removes the opposing pawn, creating a passer."
                },
                {
                    id: "ps_1_2",
                    fen: "rnbqk1nr/pppp1ppp/8/4p3/1b2P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 2 3",
                    goal: "Create doubled pawns for White",
                    solution: ["b4c3"],
                    turn: "b",
                    themes: ["structure"],
                    explanation: "Bishop captures, forcing a doubled pawn after recapture."
                },
                {
                    id: "ps_1_3",
                    fen: "7k/8/8/8/4p3/3P4/8/7K w - - 0 1", // K moved to h8
                    goal: "Fix the pawn structure",
                    solution: ["d3e4"],
                    turn: "w",
                    themes: ["structure"],
                    explanation: "Pawn capture resolves the pawn tension."
                }
            ]
        }
    ]
};

// =========================
// Topic 8: Chess Etiquette
// =========================
export const TOPIC_8_ETIQUETTE = {
    title: "Chess etiquette",
    blocks: [
        {
            id: "t8_b1",
            name: "Good Manners",
            puzzles: [
                {
                    id: "et_1_1",
                    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                    goal: "Start the game politely (Play e4)",
                    solution: ["e2e4"],
                    turn: "w",
                    themes: ["etiquette"],
                    explanation: "A standard and polite opening move."
                },
                {
                    id: "et_1_2",
                    fen: "7k/3Q4/8/6K1/8/8/8/8 b - - 0 1",
                    goal: "Play the only legal move",
                    solution: ["h8g8"],
                    turn: "b",
                    themes: ["etiquette"],
                    explanation: "When lost, make a legal move or resign."
                },
                {
                    id: "et_1_3",
                    type: "quiz",
                    fen: "8/8/8/8/4k3/8/4K3/8 w - - 0 1",
                    question: "You touched the King. What must you do according to rules?",
                    options: ["Move the King", "Move any piece", "Resign", "Skip turn"],
                    correctAnswer: 0,
                    explanation: "Touch-move rule: touched piece must be moved if a legal move exists.",
                    rating: 100,
                    themes: ["etiquette"]
                }
            ]
        }
    ]
};
