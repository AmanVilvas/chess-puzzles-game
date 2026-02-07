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
  Settings,
  Clock,
  Target,
  Award,
  TrendingUp,
  Zap,
  Palette,
} from "lucide-react";
import { Chess } from "chess.js";
import { ChessBoardView } from "../chess/ChessBoardView";
import { BOARD_THEMES } from "../../constants/pieces";
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
    solution: Array.isArray(puzzle.solution) ? puzzle.solution : ["e2e4"],
    turn: puzzle.turn || "w",
    type: puzzle.type || "normal",
    question: puzzle.question,
    options: puzzle.options,
    correctAnswer: puzzle.correctAnswer,
    explanation: puzzle.explanation,
  };

  // Use sessionStats from props or provide defaults
  const stats = sessionStats || {
    streak: 0,
    currentStreak: 0,
    solved: 0,
    totalSolved: 0,
    accuracy: 100,
  };
  const [boardSize, setBoardSize] = useState(520);
  const [boardTheme, setBoardTheme] = useState("neutral");
  const [score] = useState(0);
  const [showThemePopover, setShowThemePopover] = useState(false);
  const themeButtonRef = React.useRef(null);
  const [isPuzzleComplete, setIsPuzzleComplete] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isWrongMove, setIsWrongMove] = useState(false);

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
      const isLevel1Block3 = level?.id === 1 && blockNumber === 3;

      // Calculate board size based on available width

      if (width < 640) {
        // Mobile
        if (isLevel1Block3) {
          // STRICT REQUEST: "board size is way too much". Make it small to fit quiz options.
          setBoardSize(Math.min(260, width * 0.65));
        } else {
          // Standard mobile board size (readable but not huge)
          setBoardSize(Math.min(340, width - 40));
        }
      } else if (width < 1024) {
        // Tablet
        if (isLevel1Block3) {
          setBoardSize(Math.min(320, width - 64));
        } else {
          setBoardSize(Math.min(472, width - 64));
        }
      } else {
        // Desktop
        if (isLevel1Block3) {
          setBoardSize(320);
        } else {
          setBoardSize(520);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation

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

  // Reset state when puzzle changes
  useEffect(() => {
    setIsPuzzleComplete(false);
    setShowSuccessModal(false);
    setIsWrongMove(false);
    setSelectedOption(null);
    setShowExplanation(false);
    setQuizFeedback(null);
    setGame(new Chess(puzzle.fen || "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"));
  }, [puzzle.id]);

  const handleSquareClick = (sq) => {
    if (isPuzzleComplete) return;
    if (!selectedSquare) {
      const piece = game.get(sq);
      if (piece && piece.color === game.turn()) {
        setSelectedSquare(sq);
      }
      return;
    }
    const piece = game.get(sq);
    if (piece && piece.color === game.turn()) {
      setSelectedSquare(sq);
      return;
    }
    try {
      const move = game.move({ from: selectedSquare, to: sq, promotion: "q" });
      if (move) {
        const newMoveHistory = [...moveHistory, move];
        const currentMoveIndex = newMoveHistory.length - 1;
        const moveNotation = `${selectedSquare}${sq}`;
        const moveNotationWithPromotion = move.promotion
          ? `${selectedSquare}${sq}${move.promotion}`
          : moveNotation;
        const algebraicNotation = move.san;
        const expectedMove = safePuzzle.solution[currentMoveIndex];
        const isCorrectMove =
          expectedMove === moveNotation ||
          expectedMove === moveNotationWithPromotion ||
          expectedMove === algebraicNotation;
        if (isCorrectMove) {
          setIsWrongMove(false);
          setGame(new Chess(game.fen()));
          setMoveHistory(newMoveHistory);
          if (currentMoveIndex === safePuzzle.solution.length - 1) {
            setIsPuzzleComplete(true);
            // Track puzzle completion
            if (onPuzzleComplete) {
              onPuzzleComplete(safePuzzle.id, true);
            }
            setTimeout(() => {
              setShowSuccessModal(true);
            }, 300);
          } else {
            const nextMoveIndex = currentMoveIndex + 1;
            if (nextMoveIndex < safePuzzle.solution.length) {
              setTimeout(() => {
                const opponentMove = safePuzzle.solution[nextMoveIndex];
                try {
                  let opponentMoveResult;
                  try {
                    opponentMoveResult = game.move(opponentMove);
                  } catch {
                    if (opponentMove.length >= 4) {
                      const from = opponentMove.substring(0, 2);
                      const to = opponentMove.substring(2, 4);
                      const promotion =
                        opponentMove.length > 4 ? opponentMove[4] : "q";
                      opponentMoveResult = game.move({ from, to, promotion });
                    }
                  }
                  if (opponentMoveResult) {
                    const updatedHistory = [
                      ...newMoveHistory,
                      opponentMoveResult,
                    ];
                    setGame(new Chess(game.fen()));
                    setMoveHistory(updatedHistory);
                    if (nextMoveIndex === safePuzzle.solution.length - 1) {
                      setIsPuzzleComplete(true);
                      // Track puzzle completion
                      if (onPuzzleComplete) {
                        onPuzzleComplete(safePuzzle.id, true);
                      }
                      setTimeout(() => {
                        setShowSuccessModal(true);
                      }, 500);
                    }
                  }
                } catch (e) {
                  console.error("Failed to play opponent move:", e);
                }
              }, 600);
            }
          }
        } else {
          setIsWrongMove(true);
          game.undo();
          setGame(new Chess(game.fen()));
          setTimeout(() => {
            setIsWrongMove(false);
          }, 1500);
        }
      }
    } catch (e) { }
    setSelectedSquare(null);
  };
  const handleRetry = () => {
    setGame(new Chess(puzzle.fen));
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
  const handleSettings = () => {
    console.log("Settings panel - ready for implementation");
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
    if (onPuzzleChange && currentPuzzleIndex < totalPuzzles - 1) {
      setIsPuzzleComplete(false);
      setShowSuccessModal(false);
      setIsWrongMove(false);
      onPuzzleChange(currentPuzzleIndex + 1);
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
      }
      setTimeout(() => {
        setShowSuccessModal(true);
      }, 1500); // Wait a bit to read explanation
    } else {
      setQuizFeedback('incorrect');
      setTimeout(() => setQuizFeedback(null), 1000);
    }
  };

  // Determine if board should be shown
  // Level 1 logic: Show board only if Block 3
  const isLevel1 = level?.id === 1;
  const isBlock3 = blockNumber === 3;
  const isLevel2Topic1 = level?.id === 2 && topic?.id === 't2-1';
  const showBoard = (!isLevel1 || isBlock3) && !isLevel2Topic1;

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
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3">
            <span style={{ fontSize: "24px" }}>👑</span>
            <span
              style={{
                color: "var(--color-text-primary)",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "-0.5px",
              }}
            >
              blitzmate
            </span>
          </div>
          <button
            onClick={onBack}
            className="transition-base flex items-center gap-2"
            style={{
              padding: "8px 16px",
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
            PUZZLES
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-2"
            style={{
              backgroundColor: "var(--color-bg-elevated)",
              padding: "8px 16px",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-primary)",
            }}
          >
            <Award
              className="w-4 h-4"
              style={{ color: "var(--color-accent-orange)" }}
            />
            <span
              style={{
                color: "var(--color-text-muted)",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              Rating
            </span>
            <span
              style={{
                color: "var(--color-text-primary)",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              1000
            </span>
          </div>
          <div
            className="flex items-center gap-2"
            style={{
              backgroundColor: "var(--color-bg-elevated)",
              padding: "8px 16px",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-primary)",
            }}
          >
            <Zap
              className="w-4 h-4"
              style={{ color: "var(--color-accent-orange)" }}
            />
            <span
              style={{
                color: "var(--color-text-muted)",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              Streak
            </span>
            <span
              style={{
                color: "var(--color-accent-orange)",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              {stats.currentStreak}
            </span>
          </div>
        </div>
      </header>
      { }
      <main
        className="flex puzzle-container"
        style={{
          flex: 1,
          minHeight: 0,
          position: "relative",
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
            <div
              className="flex items-center justify-between mb-3"
              style={{
                padding: "10px",
                backgroundColor: "var(--color-bg-elevated)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-primary)",
              }}
            >
              <div className="flex items-center gap-2">
                <TrendingUp
                  className="w-4 h-4"
                  style={{ color: "var(--color-accent-orange)" }}
                />
                <span
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Rating
                </span>
              </div>
              <span
                style={{
                  color: "var(--color-accent-orange)",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                {safePuzzle.rating}
              </span>
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
                  Streak
                </span>
                <span
                  style={{
                    color: "var(--color-accent-emerald)",
                    fontWeight: 700,
                    fontSize: "15px",
                  }}
                >
                  {stats.currentStreak}
                </span>
              </div>
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
                  Solved
                </span>
                <span
                  style={{
                    color: "var(--color-text-primary)",
                    fontWeight: 700,
                    fontSize: "15px",
                  }}
                >
                  {stats.totalSolved}
                </span>
              </div>
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
                  Accuracy
                </span>
                <span
                  style={{
                    color: "var(--color-accent-emerald)",
                    fontWeight: 700,
                    fontSize: "15px",
                  }}
                >
                  {stats.accuracy}%
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
          className="flex flex-col items-center justify-center gap-4 puzzle-board-area"
          style={{
            position: "relative",
            overflow: "visible",
            flexShrink: 0,
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
                  position={game.fen()}
                  onSquareClick={handleSquareClick}
                  lastMove={moveHistory[moveHistory.length - 1]}
                  orientation={orientation}
                  theme={boardTheme}
                  size={boardSize}
                  selectedSquare={selectedSquare}
                  showLegalMoves={true}
                />
              </div>
            )}

            {safePuzzle.type === 'quiz' && (() => {
              const isSpecialQuiz = level?.id === 1 && blockNumber === 3;

              return (
                <div
                  className={`quiz-card w-full max-w-[520px] 
                  ${isSpecialQuiz ? 'md:bg-transparent md:border-0 md:shadow-none md:p-0' : 'md:bg-[#222] md:border-[#404040] md:shadow-xl md:p-6'}
                  bg-[#222] border border-[#404040] rounded-xl shadow-xl p-6
                  transition-all duration-300
                `}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: isSpecialQuiz ? "16px" : "20px"
                  }}
                >
                  <div className={`quiz-header ${isSpecialQuiz ? 'md:text-center' : ''}`}>
                    <h2 className={`font-bold text-white leading-tight mb-2 
                    ${isSpecialQuiz ? 'md:text-xl md:uppercase md:tracking-wider md:mb-4' : 'text-xl md:text-2xl'}
                  `}>
                      {safePuzzle.question}
                    </h2>
                    <div className={`h-1 w-20 bg-orange-500/50 rounded-full ${isSpecialQuiz ? 'md:hidden' : ''}`}></div>
                  </div>

                  <div className="quiz-options flex flex-col md:grid md:grid-cols-2 gap-3">
                    {safePuzzle.options?.map((option, idx) => {
                      let btnClass = "bg-[#2a2a2a] hover:bg-[#333] border-[#404040]";
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
                          p-4 text-left rounded-lg border transition-all duration-200
                          font-medium text-base relative
                          ${btnClass}
                          ${isSpecialQuiz ? 'md:text-center md:flex md:justify-center md:items-center' : ''}
                        `}
                        >
                          <div className={`flex items-center gap-3 ${isSpecialQuiz ? 'md:justify-center md:w-full' : ''}`}>
                            <span className={`
                            w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border
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
              maxWidth: "552px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              marginTop: "16px",
            }}
          >
            {Array.from({ length: totalPuzzles }).map((_, idx) => {
              const isCurrentPuzzle = idx === currentPuzzleIndex;
              const isCompleted = false;
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
                  border:
                    puzzle.turn === "b"
                      ? "2px solid var(--color-border-primary)"
                      : "none",
                  boxShadow:
                    puzzle.turn === "w"
                      ? "0 2px 6px rgba(255, 255, 255, 0.4)"
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
                  {score}/{totalPuzzles * 10}
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
                  disabled: currentPuzzleIndex === totalPuzzles - 1,
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
            <button
              onClick={handleSettings}
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
              <Settings className="w-4 h-4" />
              Settings
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
      </main>
      { }
      {showSuccessModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--color-bg-secondary)",
              border: "2px solid var(--color-accent-emerald)",
              borderRadius: "var(--radius-xl)",
              padding: "32px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
              minWidth: "320px",
              textAlign: "center",
              animation: "scaleIn 0.3s ease-out",
            }}
          >
            { }
            <div
              style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 20px",
                borderRadius: "50%",
                backgroundColor: "var(--color-accent-emerald)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(16, 185, 129, 0.4)",
              }}
            >
              <Check className="w-8 h-8" style={{ color: "white" }} />
            </div>
            { }
            <h2
              style={{
                color: "var(--color-text-primary)",
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              Puzzle Solved!
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "14px",
                marginBottom: "24px",
              }}
            >
              Great job! You completed this puzzle.
            </p>
            { }
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={handleRetry}
                className="transition-base"
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  backgroundColor: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border-primary)",
                  borderRadius: "var(--radius-lg)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                }}
              >
                Retry
              </button>
              <button
                onClick={handleNextPuzzle}
                className="transition-base"
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  backgroundColor: "var(--color-accent-emerald)",
                  border: "none",
                  borderRadius: "var(--radius-lg)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(16, 185, 129, 0.3)",
                }}
              >
                Next Puzzle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
