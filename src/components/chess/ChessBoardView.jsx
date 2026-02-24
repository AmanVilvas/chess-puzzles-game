import React, { useMemo } from 'react';
import { Chess } from 'chess.js';
import { PIECE_SVGS, BOARD_THEMES } from '../../constants/pieces';

// Parse a FEN string into an 8x8 board array without requiring kings (for educational puzzles)
const parseFenToBoard = (fen) => {
  const pieceMap = { p: 'p', r: 'r', n: 'n', b: 'b', q: 'q', k: 'k', P: 'P', R: 'R', N: 'N', B: 'B', Q: 'Q', K: 'K' };
  const board = Array(8).fill(null).map(() => Array(8).fill(null));
  const ranks = fen.split(' ')[0].split('/');
  ranks.forEach((rank, r) => {
    let c = 0;
    for (const ch of rank) {
      if (/\d/.test(ch)) { c += parseInt(ch); }
      else if (pieceMap[ch]) {
        const isWhite = ch === ch.toUpperCase();
        board[r][c] = { type: ch.toLowerCase(), color: isWhite ? 'w' : 'b' };
        c++;
      }
    }
  });
  return board;
};

export const ChessBoardView = ({
  position,
  lastMove,
  onSquareClick,
  orientation = 'w',
  theme = 'modern',
  size = 440,
  selectedSquare = null,
  showLegalMoves = true
}) => {
  // Try chess.js first; fall back to custom parser for positions without kings
  const game = useMemo(() => {
    try { return new Chess(position); } catch { return null; }
  }, [position]);
  const board = useMemo(() => {
    if (game) return game.board();
    return parseFenToBoard(position || '8/8/8/8/8/8/8/8 w - - 0 1');
  }, [game, position]);
  const legalMoves = useMemo(() => {
    if (!selectedSquare || !showLegalMoves || !game) return [];
    try {
      const moves = game.moves({ square: selectedSquare, verbose: true });
      return moves.map(m => m.to);
    } catch {
      return [];
    }
  }, [game, selectedSquare, showLegalMoves]);
  const rows = orientation === 'w' ? [0, 1, 2, 3, 4, 5, 6, 7] : [7, 6, 5, 4, 3, 2, 1, 0];
  const cols = orientation === 'w' ? [0, 1, 2, 3, 4, 5, 6, 7] : [7, 6, 5, 4, 3, 2, 1, 0];
  const currentTheme = BOARD_THEMES[theme] || BOARD_THEMES.modern;
  const squareSize = Math.floor(size / 8);
  const actualBoardSize = squareSize * 8;
  const renderPiece = (piece) => {
    if (!piece) return null;
    const pieceKey = piece.color === 'w' ? piece.type.toUpperCase() : piece.type;
    const svg = PIECE_SVGS[pieceKey];
    if (!svg) return null;
    return (
      <div
        className="w-[85%] h-[85%] z-10 pointer-events-none"
        style={{
          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))',
          transition: 'transform 0.15s ease'
        }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  };
  return (
    <div
      className="inline-flex flex-col"
      style={{
        backgroundColor: currentTheme.border,
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.6)',
        userSelect: 'none',
        width: 'fit-content',
        height: 'fit-content',
        flexShrink: 0
      }}
    >
      { }
      <div className="flex mb-1" style={{ marginLeft: 0 }}>
        {cols.map(c => (
          <div
            key={`top-${c}`}
            className="flex items-center justify-center"
            style={{
              width: squareSize,
              height: '12px',
              fontSize: '10px',
              fontWeight: 600,
              color: '#888',
              letterSpacing: '0.05em'
            }}
          >
            {String.fromCharCode(65 + c)}
          </div>
        ))}
      </div>
      <div className="flex">
        { }
        <div className="flex flex-col mr-1">
          {rows.map(r => (
            <div
              key={`left-${r}`}
              className="flex items-center justify-center"
              style={{
                height: squareSize,
                width: '12px',
                fontSize: '10px',
                fontWeight: 600,
                color: '#888'
              }}
            >
              {8 - r}
            </div>
          ))}
        </div>
        { }
        <div
          className="grid grid-cols-8 overflow-hidden"
          style={{
            width: actualBoardSize,
            height: actualBoardSize,
            borderRadius: '4px',
            boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)'
          }}
        >
          {rows.map(r => cols.map(c => {
            const square = board[r][c];
            const squareLabel = String.fromCharCode(97 + c) + (8 - r);
            const isDark = (r + c) % 2 === 1;
            const isLastMoveSquare = lastMove?.from === squareLabel || lastMove?.to === squareLabel;
            const isSelected = selectedSquare === squareLabel;
            const isLegalMove = legalMoves.includes(squareLabel);
            const hasPiece = square !== null;
            let bgColor = isDark ? currentTheme.dark : currentTheme.light;
            if (isLastMoveSquare) {
              bgColor = currentTheme.highlight;
            }
            if (isSelected) {
              bgColor = currentTheme.selected;
            }
            return (
              <div
                key={squareLabel}
                onClick={() => onSquareClick(squareLabel)}
                className="chess-square relative flex items-center justify-center cursor-pointer"
                style={{
                  backgroundColor: bgColor,
                  width: squareSize,
                  height: squareSize,
                  transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
                  boxShadow: isSelected ? `inset 0 0 0 2px ${currentTheme.moveIndicator}` : 'none'
                }}
              >
                { }
                {renderPiece(square)}
                { }
                {isLegalMove && (
                  hasPiece ? (
                    <div
                      className="move-indicator capture absolute rounded-full pointer-events-none"
                      style={{
                        inset: '4px',
                        border: `3px solid ${currentTheme.moveIndicator}`,
                        opacity: 0.7,
                        zIndex: 20
                      }}
                    />
                  ) : (
                    <div
                      className="move-indicator absolute rounded-full pointer-events-none"
                      style={{
                        width: '30%',
                        height: '30%',
                        backgroundColor: currentTheme.moveIndicator,
                        opacity: 0.6,
                        zIndex: 20
                      }}
                    />
                  )
                )}
              </div>
            );
          }))}
        </div>
        { }
        <div className="flex flex-col ml-1">
          {rows.map(r => (
            <div
              key={`right-${r}`}
              className="flex items-center justify-center"
              style={{
                height: squareSize,
                width: '12px',
                fontSize: '10px',
                fontWeight: 600,
                color: '#888'
              }}
            >
              {8 - r}
            </div>
          ))}
        </div>
      </div>
      { }
      <div className="flex mt-1" style={{ marginLeft: 0 }}>
        {cols.map(c => (
          <div
            key={`bottom-${c}`}
            className="flex items-center justify-center"
            style={{
              width: squareSize,
              height: '12px',
              fontSize: '10px',
              fontWeight: 600,
              color: '#888',
              letterSpacing: '0.05em'
            }}
          >
            {String.fromCharCode(65 + c)}
          </div>
        ))}
      </div>
    </div>
  );
};
