import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  SkipForward,
  Check,
  ChevronsLeft,
  ChevronsRight,
  Play,
  Clock,
  Target,
  Palette,
  BookOpen,
  X,
} from "lucide-react";
import { Chess } from "chess.js";
import { ChessBoardView } from "../chess/ChessBoardView";
import { BOARD_THEMES } from "../../constants/pieces";
import { getBlockProgress } from "../../utils/progressManager";

/**
 * Creates a Chess.js game from an arbitrary FEN string.
 * Teaching puzzles often have incomplete positions (only one king etc).
 * We fall back to skipValidation so those FENs still produce a playable game.
 */
const STARTING_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const createGameFromFen = (fen) => {
  const safeFen = fen || STARTING_FEN;
  try {
    return new Chess(safeFen);
  } catch {
    try {
      const g = new Chess();
      g.load(safeFen, { skipValidation: true });
      return g;
    } catch {
      return new Chess();
    }
  }
};

// ── Manual move helpers for educational positions (may lack both kings) ──────

/** Parse a FEN string into an 8×8 board array. */
const parseFenBoard = (fen) => {
  const SYMBOLS = 'prnbqkPRNBQK';
  const board = Array(8).fill(null).map(() => Array(8).fill(null));
  const ranks = fen.split(' ')[0].split('/');
  ranks.forEach((rank, r) => {
    let c = 0;
    for (const ch of rank) {
      if (/\d/.test(ch)) { c += parseInt(ch); }
      else if (SYMBOLS.includes(ch)) {
        board[r][c] = { type: ch.toLowerCase(), color: ch === ch.toUpperCase() ? 'w' : 'b', symbol: ch };
        c++;
      }
    }
  });
  return board;
};

/** Apply from→to on a FEN and return the new FEN (with turn flipped). */
const applyMoveToFen = (fen, fromSq, toSq, playerColor) => {
  const board = parseFenBoard(fen);
  const fc = fromSq.charCodeAt(0) - 97, fr = 8 - parseInt(fromSq[1]);
  const tc = toSq.charCodeAt(0) - 97, tr = 8 - parseInt(toSq[1]);
  const piece = board[fr][fc];
  if (!piece) return null;
  board[tr][tc] = piece;
  board[fr][fc] = null;
  // Rebuild FEN position string
  const rows = board.map(row => {
    let s = '', empty = 0;
    row.forEach(sq => {
      if (!sq) { empty++; }
      else { if (empty) { s += empty; empty = 0; } s += sq.symbol; }
    });
    if (empty) s += empty;
    return s;
  });
  const parts = fen.split(' ');
  parts[0] = rows.join('/');
  parts[1] = playerColor === 'w' ? 'w' : 'b'; // keep same turn (we re-flip after storing)
  parts[3] = '-'; // clear en-passant
  return parts.join(' ');
};

/** Generate simplified SAN for a move (enough for king/piece captures). */
const generateQuizSan = (board, fromSq, toSq) => {
  const fc = fromSq.charCodeAt(0) - 97, fr = 8 - parseInt(fromSq[1]);
  const tc = toSq.charCodeAt(0) - 97, tr = 8 - parseInt(toSq[1]);
  const movingPiece = board[fr][fc];
  const targetPiece = board[tr][tc];
  if (!movingPiece) return null;
  const sym = movingPiece.type === 'p' ? '' : movingPiece.type.toUpperCase();
  const cap = targetPiece ? 'x' : '';
  // Pawn capture: include from-file
  if (movingPiece.type === 'p' && targetPiece) return fromSq[0] + 'x' + toSq;
  return sym + cap + toSq;
};

export const PuzzleView = ({
  puzzle = {},
  game,
  setGame,
  moveHistory,
  setMoveHistory,
  orientation,
  setOrientation,
  timer,
  onBack,
  selectedSquare,
  setSelectedSquare,
  currentPuzzleIndex = 0,
  totalPuzzles = 7,
  onPuzzleChange,
  onBlockChange,
  topic = null,
  block = null,
  blockNumber = 1,
  isLoadingPuzzles = false,
  onPuzzleComplete,
  sessionStats,
  level = null, // Add level prop
}) => {
  const MAX_PUZZLES_PER_BLOCK = 6;
  const safePuzzle = {
    id: puzzle.id || "puzzle-1",
    fen: puzzle.fen || "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    goal: puzzle.goal || "Find the best move",
    rating: puzzle.rating || 1000,
    themes: Array.isArray(puzzle.themes) ? puzzle.themes : ["tactics"],
    solution: Array.isArray(puzzle.solution) ? puzzle.solution : [],
    turn: puzzle.turn || "w",
    type: puzzle.type || "normal",
    question: puzzle.question,
    options: puzzle.options,
    correctAnswer: puzzle.correctAnswer,
    explanation: puzzle.explanation,
  };

  // Parse SAN moves from option text like "Kg4 then Kg3 then Kh2" or "fxe4, exd5"
  const parseMovesFromText = (text) => {
    if (!text) return [];
    // Split on 'then', 'and', commas, or arrow variations
    const parts = text.split(/\s+then\s+|\s+and\s+|,\s*|\s*→\s*|\s*->\s*|\s*=>\s*/i);
    // Basic SAN pattern: optional piece, optional file/rank, optional x or -, dest square, optional promo/check
    const movePattern = /^([KQRBN]?[a-h]?[1-8]?[-x]?[a-h][1-8]([KQRBN])?[+#!?]*|O-O(-O)?)$/;
    return parts.map(p => p.trim()).filter(p => movePattern.test(p));
  };

  // Derived move solution for quiz puzzles (from correct option text)
  const quizDerivedSolution = React.useMemo(() => {
    if (safePuzzle.type !== 'quiz') return [];
    const correctText = safePuzzle.options?.[safePuzzle.correctAnswer] ?? '';
    return parseMovesFromText(correctText);
  }, [puzzle.id, safePuzzle.type, safePuzzle.correctAnswer]);

  // Board is playable for quiz puzzles only when the correct option is a move sequence
  const isQuizBoardMode = safePuzzle.type === 'quiz' && quizDerivedSolution.length > 0;

  // Active solution: for quiz board mode use derived, otherwise use data solution
  const activeSolution = isQuizBoardMode ? quizDerivedSolution : safePuzzle.solution;

  // In quiz board mode the user always plays the color from the initial FEN (usually 'w')
  const quizPlayerColor = React.useMemo(() => {
    if (!isQuizBoardMode || !safePuzzle.fen) return 'w';
    const parts = safePuzzle.fen.split(' ');
    return (parts[1] === 'b') ? 'b' : 'w';
  }, [isQuizBoardMode, safePuzzle.fen]);


  // Use sessionStats from props or provide defaults
  const stats = sessionStats || {
    streak: 0,
    currentStreak: 0,
    solved: 0,
    totalSolved: 0,
    accuracy: 100,
  };
  const [boardSize, setBoardSize] = useState(720);
  const [boardTheme, setBoardTheme] = useState("green");
  // solvedIndices removed in favor of blockCompletedCount tracking
  const [showThemePopover, setShowThemePopover] = useState(false);
  const themeButtonRef = React.useRef(null);
  const [isPuzzleComplete, setIsPuzzleComplete] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isWrongMove, setIsWrongMove] = useState(false);
  const [autoAdvanceCount, setAutoAdvanceCount] = useState(null); // countdown seconds or null
  const autoAdvanceRef = React.useRef(null);
  const countdownRef = React.useRef(null);

  // Quiz specific state
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState(null); // 'correct' or 'incorrect'

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Use compact board for Block 3 AND any Level 1 puzzle that has a FEN (pawn board puzzles)
      const hasFenProp = !!(safePuzzle.fen && safePuzzle.fen.trim());
      const useCompact = (level?.id === 1 && blockNumber === 3) || (level?.id === 1 && hasFenProp);

      if (width < 640) {
        setBoardSize(useCompact ? Math.min(340, width * 0.8) : Math.min(420, width - 40));
      } else if (width < 1024) {
        setBoardSize(useCompact ? Math.min(460, width - 64) : Math.min(580, width - 64));
      } else if (width < 1280) {
        setBoardSize(useCompact ? 500 : 640);
      } else if (width < 1536) {
        setBoardSize(useCompact ? 560 : 760);
      } else {
        setBoardSize(useCompact ? 600 : 840);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [level, blockNumber, safePuzzle.fen]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;
      if (e.key === "r" || e.key === "R") handleRetry();
      if (e.key === "n" || e.key === "N") handleSkip();
      if (e.key === "f" || e.key === "F") handleFlipBoard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  useEffect(() => {
    if (!showThemePopover) return;
    const handleClickOutside = (e) => {
      if (
        themeButtonRef.current &&
        !themeButtonRef.current.contains(e.target)
      ) {
        setShowThemePopover(false);
      }
    };
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showThemePopover]);

  // State to track completed puzzles in the current block (persistent + session)
  const [blockCompletedCount, setBlockCompletedCount] = useState(0);

  // Load block progress when block changes
  useEffect(() => {
    if (block?.id && level?.id && topic?.id) {
      const progress = getBlockProgress(block.id, level.id, topic.id);
      setBlockCompletedCount(progress.completed || 0);
    } else {
      setBlockCompletedCount(0);
    }
  }, [block, level, topic]);

  // Clear auto-advance timers helper
  const clearAutoAdvance = () => {
    if (autoAdvanceRef.current) { clearTimeout(autoAdvanceRef.current); autoAdvanceRef.current = null; }
    if (countdownRef.current) { clearInterval(countdownRef.current); countdownRef.current = null; }
    setAutoAdvanceCount(null);
  };

  // Start 5-second auto-advance
  const startAutoAdvance = (advanceFn) => {
    clearAutoAdvance();
    setAutoAdvanceCount(5);
    let count = 4;
    countdownRef.current = setInterval(() => {
      setAutoAdvanceCount(count);
      count--;
      if (count < 0) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
    }, 1000);
    autoAdvanceRef.current = setTimeout(() => {
      clearAutoAdvance();
      advanceFn();
    }, 5000);
  };

  // Reset state when puzzle changes
  useEffect(() => {
    clearAutoAdvance();
    setIsPuzzleComplete(false);
    setShowSuccessModal(false);
    setIsWrongMove(false);
    setSelectedOption(null);
    setShowExplanation(false);
    setQuizFeedback(null);
    setGame(createGameFromFen(puzzle.fen));
  }, [puzzle.id]);

  // Cleanup on unmount
  useEffect(() => () => clearAutoAdvance(), []);



  const handleSquareClick = (sq) => {
    if (isPuzzleComplete) return;
    if (safePuzzle.type === 'quiz' && !isQuizBoardMode) return; // view-only

    const allowedColor = isQuizBoardMode ? quizPlayerColor : game.turn();

    // ── Selection phase ────────────────────────────────────────────────────────
    if (!selectedSquare) {
      // Use parseFenBoard for quiz mode (works without both kings)
      const board = isQuizBoardMode ? parseFenBoard(game.fen()) : null;
      const piece = isQuizBoardMode
        ? (board ? board[8 - parseInt(sq[1])][sq.charCodeAt(0) - 97] : null)
        : game.get(sq);
      if (piece && piece.color === allowedColor) setSelectedSquare(sq);
      return;
    }

    // Re-select a different piece of the same color
    {
      const board = isQuizBoardMode ? parseFenBoard(game.fen()) : null;
      const piece = isQuizBoardMode
        ? (board ? board[8 - parseInt(sq[1])][sq.charCodeAt(0) - 97] : null)
        : game.get(sq);
      if (piece && piece.color === allowedColor) {
        setSelectedSquare(sq);
        return;
      }
    }

    // ── Move phase ─────────────────────────────────────────────────────────────
    if (isQuizBoardMode) {
      // ── QUIZ BOARD MODE: manual move (bypasses chess.js king-validation) ──
      const currentFen = game.fen();
      const board = parseFenBoard(currentFen);
      const san = generateQuizSan(board, selectedSquare, sq);
      const coordNotation = `${selectedSquare}${sq}`;
      const currentMoveIndex = moveHistory.length;
      const expectedMove = activeSolution[currentMoveIndex];

      const isCorrectMove =
        san === expectedMove ||
        coordNotation === expectedMove;

      if (isCorrectMove) {
        setIsWrongMove(false);
        const fakeMove = { san, from: selectedSquare, to: sq, piece: board[8 - parseInt(selectedSquare[1])][selectedSquare.charCodeAt(0) - 97]?.type };
        const newMoveHistory = [...moveHistory, fakeMove];
        const isLastMove = currentMoveIndex === activeSolution.length - 1;

        // Apply the move to FEN and create the next game state
        const newFen = applyMoveToFen(currentFen, selectedSquare, sq, quizPlayerColor);
        if (newFen) {
          const nextGame = new Chess();
          try { nextGame.load(newFen, { skipValidation: true }); } catch { /* keep default */ }
          setGame(nextGame);
        }
        setMoveHistory(newMoveHistory);

        if (isLastMove) {
          // ✅ Puzzle solved — exactly matching the correct option
          setIsPuzzleComplete(true);
          setSelectedOption(safePuzzle.correctAnswer);
          setQuizFeedback('correct');
          setShowExplanation(true);
          if (onPuzzleComplete) {
            onPuzzleComplete(safePuzzle.id, true);
            if (block?.id && level?.id && topic?.id) {
              setTimeout(() => {
                const newProgress = getBlockProgress(block.id, level.id, topic.id);
                setBlockCompletedCount(newProgress.completed || 0);
              }, 50);
            }
          }
          setTimeout(() => startAutoAdvance(handleNextPuzzle), 1500);
        }
        // else: more moves remain, user continues playing (turn stays quizPlayerColor)
      } else {
        // ❌ Wrong move
        setIsWrongMove(true);
        setTimeout(() => setIsWrongMove(false), 1500);
      }

      setSelectedSquare(null);
      return;
    }

    // ── NORMAL PUZZLE MODE: use chess.js ──────────────────────────────────────
    try {
      const move = game.move({ from: selectedSquare, to: sq, promotion: "q" });
      if (move) {
        const newMoveHistory = [...moveHistory, move];
        const currentMoveIndex = newMoveHistory.length - 1;
        const moveNotation = `${selectedSquare}${sq}`;
        const moveNotationWithPromotion = move.promotion ? `${selectedSquare}${sq}${move.promotion}` : moveNotation;
        const algebraicNotation = move.san;
        const expectedMove = activeSolution[currentMoveIndex];
        const isCorrectMove =
          expectedMove === moveNotation ||
          expectedMove === moveNotationWithPromotion ||
          expectedMove === algebraicNotation;

        if (isCorrectMove) {
          setIsWrongMove(false);
          setGame(new Chess(game.fen()));
          setMoveHistory(newMoveHistory);
          const isLastMove = currentMoveIndex === activeSolution.length - 1;
          if (isLastMove) {
            setIsPuzzleComplete(true);
            if (onPuzzleComplete) {
              onPuzzleComplete(safePuzzle.id, true);
              if (block?.id && level?.id && topic?.id) {
                setTimeout(() => {
                  const newProgress = getBlockProgress(block.id, level.id, topic.id);
                  setBlockCompletedCount(newProgress.completed || 0);
                }, 50);
              }
            }
            setTimeout(() => startAutoAdvance(handleNextPuzzle), 300);
          } else {
            // Auto-play opponent's next move
            const nextMoveIndex = currentMoveIndex + 1;
            if (nextMoveIndex < activeSolution.length) {
              setTimeout(() => {
                const opponentMove = activeSolution[nextMoveIndex];
                try {
                  let opponentMoveResult;
                  try { opponentMoveResult = game.move(opponentMove); }
                  catch {
                    if (opponentMove.length >= 4) {
                      const from = opponentMove.substring(0, 2);
                      const to = opponentMove.substring(2, 4);
                      const promotion = opponentMove.length > 4 ? opponentMove[4] : "q";
                      opponentMoveResult = game.move({ from, to, promotion });
                    }
                  }
                  if (opponentMoveResult) {
                    setGame(new Chess(game.fen()));
                    setMoveHistory([...newMoveHistory, opponentMoveResult]);
                    if (nextMoveIndex === activeSolution.length - 1) {
                      setIsPuzzleComplete(true);
                      if (onPuzzleComplete) {
                        onPuzzleComplete(safePuzzle.id, true);
                        if (block?.id && level?.id && topic?.id) {
                          setTimeout(() => {
                            const newProgress = getBlockProgress(block.id, level.id, topic.id);
                            setBlockCompletedCount(newProgress.completed || 0);
                          }, 50);
                        }
                      }
                      setTimeout(() => startAutoAdvance(handleNextPuzzle), 500);
                    }
                  }
                } catch (e) { console.error("opponent move failed:", e); }
              }, 600);
            }
          }
        } else {
          setIsWrongMove(true);
          game.undo();
          setGame(new Chess(game.fen()));
          setTimeout(() => setIsWrongMove(false), 1500);
        }
      }
    } catch (e) { /* move rejected by chess.js */ }
    setSelectedSquare(null);
  };

  const handleRetry = () => {
    clearAutoAdvance();
    setGame(createGameFromFen(puzzle.fen));
    setMoveHistory([]);
    setSelectedSquare(null);
    setIsPuzzleComplete(false);
    setShowSuccessModal(false);
    setIsWrongMove(false);
    setSelectedOption(null);
    setShowExplanation(false);
    setQuizFeedback(null);
  };
  const handleSkip = () => {
    if (onPuzzleChange && currentPuzzleIndex < totalPuzzles - 1) {
      onPuzzleChange(currentPuzzleIndex + 1);
    }
  };
  const handleHint = () => {
    console.log("Hint requested for puzzle:", safePuzzle.id);
  };
  const handleFlipBoard = () => {
    setOrientation((o) => (o === "w" ? "b" : "w"));
  };

  const handlePrevPuzzle = () => {
    if (onPuzzleChange && currentPuzzleIndex > 0) {
      setIsPuzzleComplete(false);
      setShowSuccessModal(false);
      setIsWrongMove(false);
      onPuzzleChange(currentPuzzleIndex - 1);
    }
  };
  const handleNextPuzzle = () => {
    if (currentPuzzleIndex < totalPuzzles - 1) {
      if (onPuzzleChange) {
        setIsPuzzleComplete(false);
        setShowSuccessModal(false);
        setIsWrongMove(false);
        onPuzzleChange(currentPuzzleIndex + 1);
      }
    } else {
      // Last puzzle in block
      const hasNextBlock = topic?.blocks && blockNumber < topic.blocks.length;

      if (hasNextBlock && onBlockChange) {
        setShowSuccessModal(false);
        onBlockChange(blockNumber);
      } else if (onBack) {
        setShowSuccessModal(false);
        onBack();
      }
    }
  };
  const handleFirstPuzzle = () => {
    if (onPuzzleChange) {
      setIsPuzzleComplete(false);
      setShowSuccessModal(false);
      setIsWrongMove(false);
      onPuzzleChange(0);
    }
  };
  const handleLastPuzzle = () => {
    if (onPuzzleChange) {
      setIsPuzzleComplete(false);
      setShowSuccessModal(false);
      setIsWrongMove(false);
      onPuzzleChange(totalPuzzles - 1);
    }
  };
  const handleThemeChange = (themeKey) => {
    setBoardTheme(themeKey);
    setShowThemePopover(false);
    console.log("Theme changed to:", themeKey);
  };
  const toggleThemePopover = () => {
    setShowThemePopover((prev) => !prev);
  };

  const handleOptionClick = (optionIndex) => {
    if (isPuzzleComplete) return;

    setSelectedOption(optionIndex);

    if (optionIndex === safePuzzle.correctAnswer) {
      setQuizFeedback('correct');
      setIsPuzzleComplete(true);
      setShowExplanation(true);
      if (onPuzzleComplete) {
        onPuzzleComplete(safePuzzle.id, true);
        if (block?.id && level?.id && topic?.id) {
          setTimeout(() => {
            const newProgress = getBlockProgress(block.id, level.id, topic.id);
            setBlockCompletedCount(newProgress.completed || 0);
          }, 50);
        }
      }
      // Auto-advance after 5 seconds (giving time to read explanation)
      setTimeout(() => startAutoAdvance(handleNextPuzzle), 1500);
    } else {
      setQuizFeedback('incorrect');
      setTimeout(() => setQuizFeedback(null), 1000);
    }
  };

  // Show board when: not level 1, OR it's level 1 block 3, OR the puzzle has a FEN position
  const isLevel1 = level?.id === 1;
  const isBlock3 = blockNumber === 3;
  const puzzleHasFen = !!(safePuzzle.fen && safePuzzle.fen.trim());
  const showBoard = (!isLevel1 || isBlock3 || puzzleHasFen);

  // If it's a quiz with NO board, we might want to center the quiz
  // or use the board area for the quiz.

  const themeOptions = Object.entries(BOARD_THEMES);
  return (
    <div
      className="flex flex-col min-h-screen md:h-[100dvh] md:overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-primary)",
      }}
    >
      { }
      <header
        className="flex-shrink-0 flex items-center justify-between px-6"
        style={{
          height: "56px",
          backgroundColor: "var(--color-bg-secondary)",
          borderBottom: "1px solid var(--color-border-primary)",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
          zIndex: 10,
          position: "relative",
        }}
      >
        <div className="flex items-center gap-2 md:gap-6">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-xl md:text-2xl">👑</span>
            <span
              className="text-base md:text-xl font-bold tracking-tight"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              RATHISHRAVI
            </span>
          </div>
          <button
            onClick={onBack}
            className="transition-base flex items-center gap-2 px-2 py-2 sm:px-4"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              backgroundColor: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border-primary)",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              color: "var(--color-text-primary)",
            }}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">PUZZLES</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.open("https://chesswithrathish.com/", "_blank")}
            className="flex items-center gap-2 px-3 py-2 sm:px-5 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            style={{
              background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
            }}
          >
            <BookOpen
              className="w-4 h-4 text-white/90 group-hover:text-white"
            />
            <span
              style={{
                color: "white",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              LEARN
            </span>
          </button>
          <div
            className="flex items-center gap-2 px-2 py-2 sm:px-4"
            style={{
              backgroundColor: "var(--color-bg-elevated)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-primary)",
            }}
          >
            <Check
              className="w-4 h-4"
              style={{ color: "var(--color-accent-emerald)" }}
            />
            <span
              style={{
                color: "var(--color-text-muted)",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              <span className="hidden sm:inline">Total Solved</span>
            </span>
            <span
              style={{
                color: "var(--color-accent-emerald)",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              {stats.totalSolved}
            </span>
          </div>
        </div>
      </header >
      { }
      < main
        className="flex puzzle-container"
        style={{
          flex: 1,
          minHeight: 0,
          position: "relative",
          paddingTop: "20px",
        }}
      >
        {isLoadingPuzzles && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 50,
            }}
          >
            <div
              style={{
                padding: "16px 24px",
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--radius-lg)",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              Loading puzzles from Lichess...
            </div>
          </div>
        )}
        { }
        <aside
          className="flex flex-col gap-3 puzzle-sidebar left-sidebar"
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            position: "relative",
            zIndex: 1,
            flexShrink: 0,
          }}
        >
          { }
          <div
            className="card"
            style={{
              padding: "14px",
              background:
                "linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-elevated) 100%)",
              borderLeft: "3px solid var(--color-accent-orange)",
            }}
          >
            <h2
              style={{
                color: "var(--color-text-primary)",
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "1.3",
                marginBottom: "4px",
              }}
            >
              Learn Chess: Beginner to Club
            </h2>
            <p
              style={{
                color: "var(--color-accent-orange)",
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: "1.3",
              }}
            >
              {topic
                ? `${topic.title} › ${block?.name || `Block ${blockNumber}`}`
                : "Mating a lone king › Block 1"}
            </p>
          </div>
          { }
          <div className="card" style={{ padding: "16px" }}>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="flex items-center justify-center"
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor:
                    currentPuzzleIndex >= 0
                      ? "var(--color-accent-emerald)"
                      : "var(--color-border-primary)",
                  boxShadow:
                    currentPuzzleIndex >= 0
                      ? "0 2px 6px rgba(16, 185, 129, 0.3)"
                      : "none",
                }}
              >
                {currentPuzzleIndex >= 0 && (
                  <Check className="w-4 h-4" style={{ color: "white" }} />
                )}
              </div>
              <div>
                <h3
                  style={{
                    color: "var(--color-text-primary)",
                    fontWeight: 700,
                    fontSize: "15px",
                    marginBottom: "2px",
                  }}
                >
                  Puzzle #{safePuzzle.id}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "11px",
                  }}
                >
                  {currentPuzzleIndex + 1} of {totalPuzzles}
                </p>
              </div>
            </div>

            <div style={{ marginBottom: "6px" }}>
              <span
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Themes
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {safePuzzle.themes.map((theme, idx) => (
                <span
                  key={idx}
                  className="transition-base"
                  style={{
                    backgroundColor: "var(--color-bg-elevated)",
                    color: "var(--color-text-secondary)",
                    padding: "5px 10px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "11px",
                    fontWeight: 600,
                    border: "1px solid var(--color-border-primary)",
                  }}
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
          { }
          <div className="card" style={{ padding: "16px" }}>
            <h3
              style={{
                color: "var(--color-text-muted)",
                marginBottom: "12px",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Session Stats
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                className="flex justify-between items-center"
                style={{
                  padding: "8px",
                  backgroundColor: "var(--color-bg-elevated)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  Total Solved
                </span>
                <span
                  style={{
                    color: "var(--color-accent-emerald)",
                    fontWeight: 700,
                    fontSize: "15px",
                  }}
                >
                  {stats.totalSolved}
                </span>
              </div>

            </div>
          </div>
          { }
          <div
            ref={themeButtonRef}
            style={{
              position: "relative",
              zIndex: 100,
            }}
          >
            { }
            <button
              onClick={toggleThemePopover}
              className="transition-base flex items-center justify-center gap-2"
              style={{
                width: "100%",
                padding: "12px 16px",
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--radius-lg)",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                cursor: "pointer",
                boxShadow: showThemePopover
                  ? "var(--shadow-md)"
                  : "var(--shadow-sm)",
              }}
            >
              <Palette
                className="w-4 h-4"
                style={{ color: "var(--color-accent-orange)" }}
              />
              <span>Board Theme</span>
            </button>
            { }
            {showThemePopover && (
              <div
                className="fade-in"
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: 0,
                  width: "260px",
                  backgroundColor: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border-primary)",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-xl)",
                  padding: "12px",
                  zIndex: 1000,
                  animation: "fadeIn 0.2s ease-out",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <span
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Select Theme
                  </span>
                </div>
                { }
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "10px",
                  }}
                >
                  {themeOptions.map(([key, theme]) => (
                    <button
                      key={key}
                      onClick={() => handleThemeChange(key)}
                      className="transition-base"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "6px",
                        padding: "10px",
                        backgroundColor:
                          boardTheme === key
                            ? "var(--color-bg-elevated)"
                            : "transparent",
                        border:
                          boardTheme === key
                            ? "2px solid var(--color-accent-orange)"
                            : "2px solid var(--color-border-primary)",
                        borderRadius: "var(--radius-md)",
                        cursor: "pointer",
                        boxShadow:
                          boardTheme === key ? "var(--shadow-md)" : "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (boardTheme !== key) {
                          e.currentTarget.style.borderColor =
                            "var(--color-border-secondary)";
                          e.currentTarget.style.backgroundColor =
                            "var(--color-bg-elevated)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (boardTheme !== key) {
                          e.currentTarget.style.borderColor =
                            "var(--color-border-primary)";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      { }
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "2px",
                          borderRadius: "var(--radius-sm)",
                          overflow: "hidden",
                          boxShadow: "var(--shadow-sm)",
                          pointerEvents: "none",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: theme.light,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                        <div
                          style={{
                            backgroundColor: theme.dark,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                        <div
                          style={{
                            backgroundColor: theme.dark,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                        <div
                          style={{
                            backgroundColor: theme.light,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                      { }
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color:
                            boardTheme === key
                              ? "var(--color-accent-orange)"
                              : "var(--color-text-secondary)",
                          textAlign: "center",
                          pointerEvents: "none",
                        }}
                      >
                        {theme.name}
                      </span>
                      { }
                      {boardTheme === key && (
                        <div
                          style={{
                            position: "absolute",
                            top: "8px",
                            right: "8px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "var(--color-accent-orange)",
                            boxShadow: "0 0 0 2px var(--color-bg-elevated)",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
        { }
        <div
          className="flex flex-col items-center gap-4 puzzle-board-area"
          style={{
            position: "relative",
            overflowY: "auto",
            overflowX: "hidden",
            flexShrink: 1,
            maxHeight: "100%",
            paddingTop: "5px",
            paddingBottom: "24px",
          }}
        >
          { }
          <div
            style={{
              position: "relative",
              width: "100%",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px"
            }}
          >
            {showBoard && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChessBoardView
                  position={isQuizBoardMode && game ? game.fen() : (safePuzzle.fen || (game ? game.fen() : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"))}
                  onSquareClick={handleSquareClick}
                  lastMove={moveHistory[moveHistory.length - 1]}
                  orientation={orientation}
                  theme={boardTheme}
                  size={boardSize}
                  selectedSquare={selectedSquare}
                  showLegalMoves={true}
                  isCompact={(blockNumber === 3 && level?.id === 1) || (level?.id === 1 && !!(safePuzzle.fen && safePuzzle.fen.trim()))}
                />
              </div>
            )}

            {safePuzzle.type === 'quiz' && (() => {
              // Use compact board+quiz layout for Block 3 AND any Level 1 FEN quiz puzzle
              const hasFenProp = !!(safePuzzle.fen && safePuzzle.fen.trim());
              const isSpecialQuiz = (level?.id === 1 && blockNumber === 3) || (level?.id === 1 && hasFenProp);

              return (
                <div
                  className={`quiz-card w-full max-w-[420px] 
                  ${isSpecialQuiz ? 'md:bg-transparent md:border-0 md:shadow-none md:p-0' : 'md:bg-[var(--color-bg-elevated)] md:border-[var(--color-border-primary)] md:shadow-xl md:p-3'}
                  bg-[var(--color-bg-elevated)] border border-[var(--color-border-primary)] rounded-xl shadow-xl p-3
                  transition-all duration-300
                `}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: isSpecialQuiz ? "6px" : "8px"
                  }}
                >
                  <div className={`quiz-header ${isSpecialQuiz ? 'md:text-center' : ''}`}>
                    <h2 className={`font-bold text-[var(--color-text-primary)] leading-tight mb-1 
                    ${isSpecialQuiz ? 'md:text-base md:uppercase md:tracking-wider md:mb-2' : 'text-sm md:text-base'}
                  `}>
                      {safePuzzle.question}
                    </h2>
                    <div className={`h-0.5 w-10 bg-orange-500/50 rounded-full ${isSpecialQuiz ? 'md:hidden' : ''}`}></div>
                  </div>

                  <div className="quiz-options flex flex-col md:grid md:grid-cols-2 gap-2">
                    {safePuzzle.options?.map((option, idx) => {
                      let btnClass = "bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] border-[var(--color-border-primary)] text-[var(--color-text-primary)]";
                      if (selectedOption !== null) {
                        if (idx === safePuzzle.correctAnswer && (selectedOption === idx || isPuzzleComplete)) {
                          btnClass = "bg-green-600 border-green-500 text-white";
                        } else if (idx === selectedOption && idx !== safePuzzle.correctAnswer) {
                          btnClass = "bg-red-600 border-red-500 text-white";
                        } else if (isPuzzleComplete && idx !== safePuzzle.correctAnswer) {
                          btnClass = "bg-[#2a2a2a] opacity-50";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(idx)}
                          disabled={isPuzzleComplete}
                          className={`
                          p-1.5 text-left rounded-md border transition-all duration-200
                          font-medium text-xs relative
                          ${btnClass}
                          ${isSpecialQuiz ? 'md:text-center md:flex md:justify-center md:items-center' : ''}
                        `}
                        >
                          <div className={`flex items-center gap-1.5 ${isSpecialQuiz ? 'md:justify-center md:w-full' : ''}`}>
                            <span className={`
                            w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold border flex-shrink-0
                            ${selectedOption === idx || (isPuzzleComplete && idx === safePuzzle.correctAnswer) ? 'border-transparent bg-white/20' : 'border-neutral-600 bg-transparent text-neutral-400'}
                            ${isSpecialQuiz ? 'md:hidden' : ''}
                          `}>
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span>{option}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {showExplanation && (
                    <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg fade-in">
                      <p className="text-blue-200 text-sm leading-relaxed">
                        <strong className="text-blue-100 block mb-1">Explanation:</strong>
                        {safePuzzle.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
          { }
          <div
            className="flex gap-2"
            style={{
              width: "100%",
              maxWidth: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              flexShrink: 0,
              marginTop: "1px",
              marginBottom: "1px",
            }}
          >
            {Array.from({ length: totalPuzzles }).map((_, idx) => {
              const isCurrentPuzzle = idx === currentPuzzleIndex;
              // We can't easily know if *this specific index* is completed without the full puzzle list and check.
              // For now, let's just highlight current.
              // Or better, let's fetch the puzzle ID if available.
              // PuzzleView receives `puzzle` for ONE puzzle. It doesn't receive the list.
              // So we can't accurately color the pagination dots for *other* puzzles unless we have their IDs.
              // But we can check if the *current* puzzle is completed.
              // Let's rely on blockCompletedCount generally, and maybe remove per-dot completion status if we can't track it.
              // Or just show current.
              const isCompleted = false; // We don't have the ID for index `idx`.
              return (
                <button
                  key={idx}
                  onClick={() => onPuzzleChange && onPuzzleChange(idx)}
                  className="transition-base"
                  style={{
                    width: "36px",
                    height: "36px",
                    minWidth: "36px",
                    minHeight: "36px",
                    borderRadius: "var(--radius-md)",
                    fontWeight: 700,
                    fontSize: "14px",
                    cursor: "pointer",
                    backgroundColor: isCurrentPuzzle
                      ? "var(--color-accent-blue)"
                      : isCompleted
                        ? "var(--color-accent-emerald)"
                        : "var(--color-bg-elevated)",
                    color:
                      isCurrentPuzzle || isCompleted
                        ? "white"
                        : "var(--color-text-muted)",
                    boxShadow: isCurrentPuzzle
                      ? "0 3px 10px rgba(37, 99, 235, 0.4)"
                      : isCompleted
                        ? "0 2px 6px rgba(16, 185, 129, 0.3)"
                        : "var(--shadow-sm)",
                    border: isCurrentPuzzle
                      ? "2px solid rgba(255, 255, 255, 0.2)"
                      : "none",
                    flexShrink: 0,
                  }}
                  title={`Puzzle ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          { }
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "12px",
              fontStyle: "italic",
              fontWeight: 500,
              marginTop: "-7px",
            }}
          >
            Puzzle {currentPuzzleIndex + 1} of {totalPuzzles} in Block{" "}
            {blockNumber}
          </p>
        </div>
        { }
        <aside
          className="flex flex-col gap-3 puzzle-sidebar"
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            position: "relative",
            zIndex: 1,
            flexShrink: 0,
          }}
        >
          { }
          <div className="card" style={{ padding: "14px" }}>
            <div className="flex items-center gap-2 mb-3">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: puzzle.turn === "w" ? "white" : "#2a2a2a",
                  border: "1px solid var(--color-border-primary)",
                  boxShadow:
                    puzzle.turn === "w"
                      ? "0 2px 6px rgba(0, 0, 0, 0.1)"
                      : "none",
                }}
              />
              <div>
                <h3
                  style={{
                    color: "var(--color-text-primary)",
                    fontWeight: 700,
                    fontSize: "15px",
                    marginBottom: "2px",
                  }}
                >
                  Your turn
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "12px",
                  }}
                >
                  {puzzle.turn === "w"
                    ? "Playing as White"
                    : "Playing as Black"}
                </p>
                {isQuizBoardMode && !isPuzzleComplete && (
                  <p style={{ color: "var(--color-accent-orange)", fontSize: "11px", fontWeight: 600, marginTop: "2px" }}>
                    ▶ Play the move on the board
                  </p>
                )}
              </div>
            </div>
            <div
              className="flex items-center gap-2"
              style={{
                padding: "10px",
                backgroundColor: "var(--color-accent-green-dark)",
                borderRadius: "var(--radius-md)",
                marginBottom: "10px",
              }}
            >
              <Target
                className="w-4 h-4"
                style={{ color: "white", flexShrink: 0 }}
              />
              <div>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "10px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "2px",
                  }}
                >
                  Goal
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 700,
                    lineHeight: "1.2",
                  }}
                >
                  {safePuzzle.goal}
                </p>
              </div>
            </div>
            { }
            {isWrongMove && (
              <div
                className="flex items-center gap-2"
                style={{
                  padding: "10px",
                  backgroundColor: "var(--color-error)",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "10px",
                }}
              >
                <span style={{ fontSize: "16px" }}>❌</span>
                <p
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                >
                  Wrong move! Try again
                </p>
              </div>
            )}
            <div className="flex gap-2">
              <div
                className="flex items-center gap-2 flex-1"
                style={{
                  padding: "8px",
                  backgroundColor: "var(--color-bg-elevated)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border-primary)",
                }}
              >
                <Clock
                  className="w-4 h-4"
                  style={{ color: "var(--color-text-muted)" }}
                />
                <span
                  style={{
                    color: "var(--color-text-primary)",
                    fontSize: "13px",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  {formatTime(timer)}
                </span>
              </div>
              <div
                className="flex items-center gap-2 flex-1"
                style={{
                  padding: "8px",
                  backgroundColor: "var(--color-accent-orange)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  {blockCompletedCount}/{totalPuzzles}
                </span>
              </div>
            </div>
          </div>
          { }
          <div className="flex gap-2">
            <button
              onClick={handleRetry}
              className="transition-base flex-1 flex items-center justify-center gap-2"
              style={{
                padding: "12px",
                fontSize: "13px",
                fontWeight: 600,
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                color: "var(--color-text-primary)",
              }}
            >
              <RotateCcw className="w-4 h-4" />
              Retry
            </button>
            <button
              onClick={handleSkip}
              className="transition-base flex-1 flex items-center justify-center gap-2"
              style={{
                padding: "12px",
                fontSize: "13px",
                fontWeight: 600,
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                color: "var(--color-text-primary)",
              }}
            >
              Skip
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
          { }
          <div
            className="card flex-1"
            style={{
              padding: "14px",
              minHeight: "120px",
              maxHeight: "160px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                marginBottom: "10px",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                color: "var(--color-text-muted)",
              }}
            >
              Move History
            </h3>
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              {moveHistory.length === 0 ? (
                <div
                  className="flex items-center justify-center"
                  style={{ height: "100%" }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "2px solid var(--color-accent-blue)",
                      borderRadius: "var(--radius-md)",
                      opacity: 0.4,
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "var(--color-accent-blue)",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>
              ) : (
                moveHistory.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                    style={{
                      padding: "6px 8px",
                      backgroundColor: "var(--color-bg-elevated)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-border-primary)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "12px",
                        fontWeight: 600,
                        width: "20px",
                      }}
                    >
                      {i + 1}.
                    </span>
                    <span
                      style={{
                        color: "var(--color-text-primary)",
                        fontWeight: 700,
                        fontSize: "13px",
                        fontFamily: "monospace",
                      }}
                    >
                      {m.san}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
          { }
          <div className="card" style={{ padding: "10px" }}>
            <div className="flex items-center justify-between gap-2">
              {[
                {
                  icon: ChevronsLeft,
                  onClick: handleFirstPuzzle,
                  disabled: currentPuzzleIndex === 0,
                  label: "First",
                },
                {
                  icon: ChevronLeft,
                  onClick: handlePrevPuzzle,
                  disabled: currentPuzzleIndex === 0,
                  label: "Previous",
                },
                { icon: Play, onClick: () => { }, label: "Play" },
                {
                  icon: ChevronRight,
                  onClick: handleNextPuzzle,
                  disabled: currentPuzzleIndex === totalPuzzles - 1 && (!topic?.blocks || blockNumber >= topic.blocks.length),
                  label: "Next",
                },
                {
                  icon: ChevronsRight,
                  onClick: handleLastPuzzle,
                  disabled: currentPuzzleIndex === totalPuzzles - 1,
                  label: "Last",
                },
              ].map((btn, idx) => {
                const Icon = btn.icon;
                return (
                  <button
                    key={idx}
                    onClick={btn.onClick}
                    disabled={btn.disabled}
                    title={btn.label}
                    className="transition-base"
                    style={{
                      padding: "8px",
                      backgroundColor: "var(--color-bg-elevated)",
                      border: "1px solid var(--color-border-primary)",
                      borderRadius: "var(--radius-md)",
                      cursor: btn.disabled ? "not-allowed" : "pointer",
                      opacity: btn.disabled ? 0.4 : 1,
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: "var(--color-text-primary)" }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          { }
          <div className="flex gap-2">
            <button
              onClick={handleFlipBoard}
              className="transition-base flex-1 flex items-center justify-center gap-2"
              style={{
                padding: "10px",
                fontSize: "12px",
                fontWeight: 600,
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                color: "var(--color-text-primary)",
              }}
            >
              <RotateCcw className="w-4 h-4" />
              Flip
            </button>

          </div>
          { }
          <div
            className="flex justify-center gap-3"
            style={{
              fontSize: "11px",
              color: "var(--color-text-muted)",
              paddingTop: "4px",
            }}
          >
            {[
              { key: "H", label: "Hint" },
              { key: "R", label: "Retry" },
              { key: "F", label: "Flip" },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center gap-1">
                <span
                  style={{
                    backgroundColor: "var(--color-bg-elevated)",
                    padding: "3px 5px",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    border: "1px solid var(--color-border-primary)",
                  }}
                >
                  {key}
                </span>
                <span style={{ fontWeight: 500, fontSize: "10px" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </main >
      { }
      {/* Auto-advance toast banner */}
      {autoAdvanceCount !== null && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            backgroundColor: "var(--color-bg-secondary)",
            border: "2px solid var(--color-accent-emerald)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            animation: "fadeIn 0.3s ease-out",
            whiteSpace: "nowrap",
          }}
        >
          <div style={{
            width: "28px", height: "28px", borderRadius: "50%",
            backgroundColor: "var(--color-accent-emerald)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <Check className="w-4 h-4" style={{ color: "white" }} />
          </div>
          <span style={{ color: "var(--color-text-primary)", fontWeight: 700, fontSize: "14px" }}>
            ✓ Correct!
          </span>
          <span style={{ color: "var(--color-text-muted)", fontSize: "13px" }}>
            Next in {autoAdvanceCount}s
          </span>
          <button
            onClick={handleRetry}
            style={{
              padding: "4px 12px",
              backgroundColor: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border-primary)",
              borderRadius: "var(--radius-md)",
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
          <button
            onClick={() => { clearAutoAdvance(); handleNextPuzzle(); }}
            style={{
              padding: "4px 12px",
              backgroundColor: "var(--color-accent-emerald)",
              border: "none",
              borderRadius: "var(--radius-md)",
              fontSize: "12px",
              fontWeight: 600,
              color: "white",
              cursor: "pointer",
            }}
          >
            Next →
          </button>
        </div>
      )}
    </div >
  );
};
