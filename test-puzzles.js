import { Chess } from 'chess.js';

const puzzles = [
    {
        name: "Puzzle 1",
        fen: 'r2r3k/pppbn1pp/2np4/2P5/5q2/1BB3N1/PPQ2PP1/R4R1K w - - 0 1',
        solution: ['Bxg7+', 'Kxg7', 'Nh5+', 'Kh6', 'Nxf4']
    },
    {
        name: "Puzzle 2",
        fen: '1Q4rk/7p/6p1/3N4/3pq3/6Pb/1P3P2/3R2K1 w - - 0 1',
        solution: ['Qxg8+', 'Kxg8', 'Nf6+', 'Kh8', 'Nxe4']
    },
    {
        name: "Puzzle 3",
        fen: '3k4/3p4/3N1K2/7q/8/2B3P1/3P4/8 w - - 0 1',
        solution: ['Ba5+', 'Qxa5', 'Nb7+']
    },
    {
        name: "Puzzle 4",
        fen: '5q2/8/8/4Q2p/P1p3k1/1p6/1P5K/8 w - - 0 1',
        solution: ['Qg3+', 'Kf5', 'Qf3+', 'Kg5', 'Qxf8']
    },
    {
        name: "Puzzle 5",
        fen: 'r1bq1rk1/ppp2ppp/8/3n4/8/2NB3P/PPP2PP1/R2Q1RK1 w - - 0 1',
        solution: ['Nxd5', 'Qxd5', 'Bxh7+', 'Kxh7', 'Qxd5']
    }
];

puzzles.forEach((p, i) => {
    console.log(`\n${p.name}:`);
    const game = new Chess(p.fen);
    console.log('FEN valid:', game.fen() === p.fen);

    p.solution.forEach((move, j) => {
        try {
            const result = game.move(move);
            console.log(`  Move ${j + 1} (${move}):`, result ? 'OK' : 'FAILED');
        } catch (e) {
            console.log(`  Move ${j + 1} (${move}): ERROR - ${e.message}`);
        }
    });
});
