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
    description: puzzle.description,
    exampleText: puzzle.exampleText,
  };

  const extractImage = (text) => {
    if (!text) return { text: '', image: null };
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const match = text.match(urlPattern);
    if (match) {
      const image = match[0];
      // Clean up punctuation that might be left after removing URL at end
      const cleanText = text.replace(image, '').trim().replace(/[:.]$/, '');
      return { text: cleanText, image };
    }
    return { text, image: null };
  };

  // Detect description-heavy puzzles (interactive board with rule description)
  const isEtiquette = safePuzzle.type === 'etiquette' || !!safePuzzle.description;

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
      const height = window.innerHeight;
      // Cap board to 85% of viewport height minus padding so it never overflows
      const maxByHeight = Math.floor(height * 0.85) - 40;

      // Compact mode only for Level 1 block 3 (pawn structure)
      const useCompact = level?.id === 1 && blockNumber === 3;

      let size;
      if (width < 640) {
        size = useCompact ? Math.min(320, width * 0.8) : Math.min(360, width - 40);
      } else if (width < 1024) {
        size = useCompact ? Math.min(400, width - 64) : Math.min(480, width - 64);
      } else if (width < 1280) {
        size = useCompact ? 440 : 540;
      } else if (width < 1536) {
        size = useCompact ? 480 : 600;
      } else {
        size = useCompact ? 520 : 660;
      }

      // Never let the board taller than what the viewport can show
      setBoardSize(Math.min(size, maxByHeight));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [level, blockNumber]);
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
  
  const { text: questionText, image: questionImage } = extractImage(safePuzzle.type === 'quiz' ? (safePuzzle.question || safePuzzle.explanation) : (safePuzzle.explanation || safePuzzle.goal));
  const optionsWithMeta = (safePuzzle.options || []).map(opt => extractImage(opt));
  const anyOptionHasImage = optionsWithMeta.some(opt => opt.image);
  
  // Case 1: No Question Image + Options HAVE Images => Show options in center
  const showOptionsInCenter = !questionImage && anyOptionHasImage;
  
  // Show board when: (NOT showing options in center) AND (not level 1, OR it's level 1 block 3, OR the puzzle has a FEN position AND no image)
  const showBoard = !showOptionsInCenter && (!isLevel1 || isBlock3 || (puzzleHasFen && !questionImage));

  const themeOptions = Object.entries(BOARD_THEMES);

  return (
    <div
      className="flex flex-col min-h-screen md:h-[100dvh] p-4 md:p-6 fade-in"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div 
        className="flex flex-col lg:flex-row gap-5 h-full w-full max-w-[1400px] mx-auto overflow-hidden"
      >
        {/* LEFT SIDEBAR */}
        <aside className="flex flex-col gap-5 w-full lg:w-[320px] flex-shrink-0 order-2 lg:order-1">
          <div className="card flex flex-col gap-4 p-4 lg:p-5 shadow-sm h-full" style={{ borderLeft: "4px solid var(--color-accent-orange)", background: "var(--color-bg-secondary)" }}>
            {/* Back, Topic, Puzzle Num */}
            <div className="flex items-center gap-4">
               <button onClick={onBack} className="btn btn-secondary py-1.5 px-3 flex items-center gap-1 text-sm font-semibold">
                 <ChevronLeft className="w-4 h-4" />
                 back
               </button>
               <div className="flex flex-col" style={{ overflow: "hidden" }}>
                 <span className="text-sm font-bold text-[var(--color-text-primary)] leading-tight truncate">{topic ? topic.title : "Topic Name"}</span>
                 <span className="text-xs font-semibold mt-0.5" style={{ color: "var(--color-accent-orange)" }}>puzzle {currentPuzzleIndex + 1} of {totalPuzzles}</span>
               </div>
            </div>

            {/* Retry & Skip */}
            <div className="flex gap-3">
               <button onClick={handleRetry} className="btn btn-secondary flex-1 flex justify-center items-center gap-2 shadow-sm text-sm hover:scale-[1.02] transition-base">
                 retry
               </button>
               <button onClick={handleSkip} className="btn btn-secondary flex-1 flex justify-center items-center gap-2 shadow-sm text-sm hover:scale-[1.02] transition-base">
                 skip
               </button>
            </div>

            {/* Move History */}
            <div className="flex flex-col p-3 rounded-2xl border border-[var(--color-border-primary)] mt-1 shadow-inner" style={{ backgroundColor: "var(--color-bg-primary)" }}>
              <h3 className="text-[12px] font-bold text-[var(--color-text-primary)] flex justify-center items-center gap-2 mb-3">
                 Move history
              </h3>
              <div className="flex flex-row overflow-x-auto gap-2 pb-2 custom-scrollbar w-full min-h-[44px] items-center">
                {moveHistory.length === 0 ? (
                   <div className="flex-1 text-center text-xs text-[var(--color-text-muted)] italic opacity-50">
                     <div className="inline-block border-2 border-dashed border-[var(--color-border-primary)] rounded-md px-4 py-1.5">No moves yet</div>
                   </div>
                ) : (
                  moveHistory.map((m, i) => (
                    <div key={i} className="flex flex-shrink-0 gap-2 text-xs py-1.5 px-2.5 rounded-lg border border-[var(--color-border-primary)] shadow-sm items-center transition-base hover:border-[var(--color-border-secondary)] badge-pulse" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
                       <span className="text-[var(--color-text-muted)] font-bold">{i + 1}.</span>
                       <span className="font-mono font-bold text-[var(--color-text-primary)] tracking-tight">{m.san}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Board Themes */}
            <div className="relative mt-1" ref={themeButtonRef}>
              <button onClick={toggleThemePopover} className="btn btn-secondary w-full py-3.5 px-4 flex justify-center items-center gap-2 shadow-sm hover:scale-[1.02] transition-base border border-[var(--color-border-primary)]" style={{ backgroundColor: "var(--color-bg-primary)" }}>
                 Board themes
              </button>
              {showThemePopover && (
                <div className="absolute bottom-[calc(100%+12px)] left-0 w-full card shadow-xl p-3 z-50 fade-in">
                   <div className="grid grid-cols-2 gap-2">
                      {themeOptions.map(([key, theme]) => (
                        <button key={key} onClick={() => handleThemeChange(key)} className="btn btn-secondary text-xs font-semibold py-2.5 transition-colors text-center flex justify-center items-center hover:bg-[var(--color-bg-tertiary)] hover:border-[var(--color-border-secondary)]">
                          {theme.name}
                        </button>
                      ))}
                   </div>
                </div>
              )}
            </div>

            {/* Empty space filler */}
            <div className="flex-1"></div>
          </div>
        </aside>

        {/* CENTER: CHESS BOARD */}
        <div className="flex-1 flex flex-col items-center justify-center card p-4 lg:p-8 min-h-[400px] lg:min-h-0 relative shadow-md order-1 lg:order-2 overflow-hidden">
           <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
             {showBoard ? (
               <ChessBoardView
                 position={game ? game.fen() : (safePuzzle.fen || STARTING_FEN)}
                 onSquareClick={handleSquareClick}
                 lastMove={moveHistory[moveHistory.length - 1]}
                 orientation={orientation}
                 theme={boardTheme}
                 size={boardSize}
                 selectedSquare={selectedSquare}
                 showLegalMoves={true}
               />
             ) : (
                (() => {
                  if (questionImage) {
                    return (
                      <div className="flex flex-col items-center gap-6 fade-in w-full max-w-[750px]">
                        <div className="relative group w-full flex justify-center">
                          <img 
                            src={questionImage} 
                            alt="question" 
                            className="w-full h-auto max-h-[75vh] rounded-3xl shadow-2xl object-contain border-4 border-white transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                        </div>
                        <div className="text-2xl font-black text-[var(--color-text-primary)] text-center px-6 leading-tight">
                           {questionText}
                        </div>
                      </div>
                    );
                  }

                  if (showOptionsInCenter) {
                    return (
                      <div className="flex flex-col items-center gap-8 fade-in w-full max-w-[950px]">
                        {/* Question Text Box at Top */}
                        <div className="bg-[var(--color-bg-secondary)] border-2 border-[var(--color-border-primary)] rounded-3xl px-10 py-6 shadow-sm w-full max-w-[700px] text-center">
                           <h2 className="text-2xl lg:text-3xl font-black text-[var(--color-text-primary)] leading-tight">
                             ques: {questionText}
                           </h2>
                        </div>
                        
                        {/* Large Options Grid */}
                        <div className="grid grid-cols-2 gap-6 lg:gap-8 w-full px-4">
                           {safePuzzle.options?.map((option, idx) => {
                              const { text: optText, image: optImage } = extractImage(option);
                              let isSelected = selectedOption !== null && (idx === selectedOption || (idx === safePuzzle.correctAnswer && isPuzzleComplete));
                              let className = "btn btn-secondary border p-4 lg:p-6 text-xl font-black transition-all shadow-md flex flex-col items-center justify-center gap-3 rounded-[2rem] h-auto relative hover:scale-[1.02]";
                              let style = { minHeight: optImage ? '240px' : 'auto' };
                              
                              if (selectedOption !== null) {
                                if (idx === safePuzzle.correctAnswer && (selectedOption === idx || isPuzzleComplete)) {
                                   className = "btn p-4 lg:p-6 text-xl font-black transition-all shadow-xl flex flex-col items-center justify-center gap-3 rounded-[2rem] text-white fade-in h-auto relative";
                                   style = { ...style, backgroundColor: "var(--color-accent-emerald)", borderColor: "var(--color-accent-emerald)", transform: "scale(1.05)" };
                                } else if (idx === selectedOption && idx !== safePuzzle.correctAnswer) {
                                   className = "btn p-4 lg:p-6 text-xl font-black transition-all shadow-xl flex flex-col items-center justify-center gap-3 rounded-[2rem] text-white h-auto relative";
                                   style = { ...style, backgroundColor: "var(--color-error)", borderColor: "var(--color-error)", transform: "scale(0.95)" };
                                } else if (isPuzzleComplete && idx !== safePuzzle.correctAnswer) {
                                   className = "btn btn-secondary border p-4 lg:p-6 text-xl font-black transition-all flex flex-col items-center justify-center gap-3 rounded-[2rem] opacity-40 h-auto relative";
                                }
                              }

                              return (
                                <button
                                  key={idx}
                                  onClick={() => handleOptionClick(idx)}
                                  disabled={isPuzzleComplete}
                                  className={className}
                                  style={style}
                                >
                                  {optImage && (
                                     <div className="w-full bg-white rounded-2xl p-2 mb-2 overflow-hidden shadow-inner flex items-center justify-center" style={{ height: '160px' }}>
                                       <img 
                                         src={optImage} 
                                         alt={`option-${idx}`} 
                                         className="max-w-full max-h-full object-contain" 
                                       />
                                     </div>
                                   )}
                                  <span className="leading-tight text-center" style={{ wordBreak: "break-word" }}>
                                      {optText}
                                  </span>
                                </button>
                              );
                           })}
                        </div>
                      </div>
                    );
                  }
                  
                  return <div className="text-[var(--color-text-muted)] text-sm italic py-10">No board available for this puzzle.</div>;
                })()
             )}
             
             {isWrongMove && (
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-white px-6 py-3 rounded-xl font-bold font-sans shadow-xl flex items-center gap-2 z-50 backdrop-blur-sm fade-in" style={{ backgroundColor: "var(--color-error)", animation: "shake 0.5s" }}>
                  <span className="text-xl">❌</span> Wrong move! Try again
                </div>
             )}
           </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="flex flex-col gap-5 w-full lg:w-[360px] flex-shrink-0 order-3 lg:order-3">
           <div className="flex flex-col gap-4 h-full">
             
             {/* Info Block — etiquette card, quiz options, or plain question */}
             {isEtiquette ? (
               /* ── ETIQUETTE RULE CARD ─────────────────────────────────── */
               <div className="card shadow-sm flex flex-col gap-0 overflow-hidden" style={{ backgroundColor: "var(--color-bg-elevated)", border: "2px solid var(--color-accent-orange)" }}>
                 {/* Header strip */}
                  <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: "var(--color-accent-orange)", opacity: 0.95 }}>
                    <span style={{ fontSize: 18 }}>📖</span>
                    <span className="text-sm font-extrabold text-white uppercase tracking-wider">{safePuzzle.themes?.[0] || 'Chess Topic'}</span>
                  </div>

                 {/* Rule description */}
                 <div className="px-4 pt-4 pb-3 flex flex-col gap-3">
                   <p className="text-[13px] font-semibold leading-snug" style={{ color: "var(--color-text-primary)" }}>
                     {safePuzzle.description}
                   </p>

                   {/* Example box */}
                   <div className="rounded-xl p-3 flex flex-col gap-1" style={{ backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border-primary)" }}>
                     <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--color-accent-orange)" }}>Example</span>
                     <p className="text-[12px] leading-snug" style={{ color: "var(--color-text-secondary)" }}>
                       {safePuzzle.explanation}
                     </p>
                     {safePuzzle.exampleText && (
                       <div className="mt-1 px-2 py-1 rounded-md inline-block font-mono font-bold text-xs" style={{ backgroundColor: "var(--color-bg-primary)", color: "var(--color-accent-emerald)", border: "1px solid var(--color-border-primary)" }}>
                         {safePuzzle.exampleText}
                       </div>
                     )}
                   </div>

                   {/* Turn indicator + prompt */}
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                       <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: safePuzzle.turn === "w" ? "white" : "#2a2a2a", border: "2px solid var(--color-border-primary)", flexShrink: 0 }} />
                       <span className="text-xs font-bold" style={{ color: "var(--color-text-secondary)" }}>
                         {safePuzzle.turn === "w" ? "White" : "Black"} to play
                       </span>
                     </div>
                     {!isPuzzleComplete && safePuzzle.solution?.length > 0 && (
                       <span className="text-[11px] font-semibold" style={{ color: "var(--color-text-muted)" }}>Play the example move ↑</span>
                     )}
                     {isPuzzleComplete && (
                       <span className="text-[11px] font-bold" style={{ color: "var(--color-accent-emerald)" }}>✓ Well done!</span>
                     )}
                   </div>
                 </div>
               </div>
             ) : (
               /* ── REGULAR PUZZLE INFO BLOCK ───────────────────────────── */
               <div className="card p-5 shadow-sm flex flex-col gap-3" style={{ backgroundColor: "var(--color-bg-elevated)", minHeight: "130px" }}>
                 {showOptionsInCenter ? (
                    <div className="flex flex-col items-center justify-center py-4 gap-2 text-center">
                       <h3 className="text-sm font-black uppercase tracking-widest text-[var(--color-accent-orange)]">
                         Select the correct option
                       </h3>
                       <p className="text-xs text-[var(--color-text-muted)] font-medium italic max-w-[180px]">
                         The options are displayed in the center grid for better visibility
                       </p>
                    </div>
                 ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: safePuzzle.turn === "w" ? "white" : "#2a2a2a", border: "1px solid var(--color-border-primary)" }} />
                        <span className="text-sm font-bold text-[var(--color-text-secondary)]">
                          playing as {safePuzzle.turn === "w" ? "white" : "black"}
                        </span>
                      </div>

                      {/* Question text — always shown */}
                      <div className="font-bold text-[15px] text-[var(--color-text-primary)]">
                         ques: {questionText}
                      </div>

                      {/* Options — for any level quiz-type puzzles */}
                      {safePuzzle.type === 'quiz' && safePuzzle.options && safePuzzle.options.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 flex-shrink-0 mt-1">
                          {safePuzzle.options?.map((option, idx) => {
                             const { text: optText, image: optImage } = extractImage(option);
                             let isSelected = selectedOption !== null && (idx === selectedOption || (idx === safePuzzle.correctAnswer && isPuzzleComplete));
                             let className = "btn btn-secondary border px-3 py-2.5 text-xs font-bold transition-all shadow-sm flex flex-col items-center justify-center gap-1 rounded-xl h-auto relative";
                             let style = {};
                             
                             if (selectedOption !== null) {
                               if (idx === safePuzzle.correctAnswer && (selectedOption === idx || isPuzzleComplete)) {
                                  className = "btn px-3 py-2.5 text-xs font-bold transition-all shadow-lg flex flex-col items-center justify-center gap-1 rounded-xl text-white fade-in h-auto relative";
                                  style = { backgroundColor: "var(--color-accent-emerald)", borderColor: "var(--color-accent-emerald)", transform: "scale(1.02)" };
                               } else if (idx === selectedOption && idx !== safePuzzle.correctAnswer) {
                                  className = "btn px-3 py-2.5 text-xs font-bold transition-all shadow-lg flex flex-col items-center justify-center gap-1 rounded-xl text-white h-auto relative";
                                  style = { backgroundColor: "var(--color-error)", borderColor: "var(--color-error)", transform: "scale(0.98)" };
                               } else if (isPuzzleComplete && idx !== safePuzzle.correctAnswer) {
                                  className = "btn btn-secondary border px-3 py-2.5 text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 rounded-xl opacity-50 h-auto relative";
                               }
                             }

                             return (
                               <button
                                 key={idx}
                                 onClick={() => handleOptionClick(idx)}
                                 disabled={isPuzzleComplete}
                                 className={className}
                                 style={style}
                               >
                                 {optImage && (
                                    <div className="w-full bg-white rounded-lg p-1.5 mb-2 overflow-hidden shadow-inner flex items-center justify-center" style={{ height: '130px' }}>
                                      <img 
                                        src={optImage} 
                                        alt={`option-${idx}`} 
                                        className="max-w-full max-h-full object-contain" 
                                      />
                                    </div>
                                  )}
                                 <span className="leading-tight font-bold text-center" style={{ wordBreak: "break-word" }}>
                                     {optText}
                                 </span>
                               </button>
                             );
                          })}
                        </div>
                      )}
                    </>
                 )}
               </div>
             )}

             {/* Pagination Block */}
             <div className="card pt-5 pb-6 px-4 flex flex-col relative items-center justify-center shadow-sm flex-1" style={{ backgroundColor: "var(--color-bg-elevated)", minHeight: "200px" }}>
               <h3 className="text-[12px] font-bold text-[var(--color-text-muted)] absolute top-4 left-4 uppercase tracking-widest opacity-80">
                 puzzles pagination
               </h3>
               <div className="flex flex-wrap gap-2.5 justify-center max-w-[280px] mt-6">
                 {(() => {
                   const PAGE_SIZE = 50;
                   const pageIndex = Math.floor(currentPuzzleIndex / PAGE_SIZE);
                   const startIndex = pageIndex * PAGE_SIZE;
                   const endIndex = Math.min(startIndex + PAGE_SIZE, totalPuzzles);
                   const pagePuzzles = Array.from({ length: endIndex - startIndex }).map((_, i) => startIndex + i);
                   
                   return pagePuzzles.map((idx) => {
                     const isCurrentPuzzle = idx === currentPuzzleIndex;
                     const style = isCurrentPuzzle 
                       ? { backgroundColor: "var(--color-accent-blue)", borderColor: "var(--color-accent-blue)", color: "white", boxShadow: "0 4px 12px rgba(37,99,235,0.4)", transform: "translateY(-2px)" }
                       : { backgroundColor: "var(--color-bg-secondary)", borderColor: "var(--color-border-primary)", color: "var(--color-text-primary)" };
                     
                     return (
                        <button
                          key={idx}
                          onClick={() => onPuzzleChange && onPuzzleChange(idx)}
                          className="w-[36px] h-[36px] rounded-lg font-bold text-sm flex items-center justify-center border transition-all hover:-translate-y-0.5 shadow-sm"
                          style={style}
                        >
                           {idx + 1}
                        </button>
                     );
                   });
                 })()}
               </div>
             </div>

           </div>
        </aside>
      </div>

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
            display: "flex", alignItems: "center", justifyItems: "center",
            flexShrink: 0,
          }}>
            <Check className="w-4 h-4 ml-[6px] mt-[6px]" style={{ color: "white" }} />
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
    </div>
  );
};
