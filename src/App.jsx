import React, { lazy, Suspense, useState, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate, useParams, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileMenu } from './components/layout/MobileMenu';
import { LEVEL_SUMMARIES } from './data/levelSummaries';
import { markPuzzleCompleted, getStats } from './utils/progressManager';

const LevelsView = lazy(() => import('./components/views/LevelsView').then(m => ({ default: m.LevelsView })));
const TopicsView = lazy(() => import('./components/views/TopicsView').then(m => ({ default: m.TopicsView })));
const PuzzleView = lazy(() => import('./components/views/PuzzleView').then(m => ({ default: m.PuzzleView })));

const MAX_PUZZLES_PER_BLOCK = 6;

// --- Page Components ---

const LevelsPage = () => {
  const navigate = useNavigate();
  return <LevelsView onLevelClick={(level) => navigate(`/level/${level.id}`)} />;
};

const TopicsPage = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();

  const [level, setLevel] = useState(null);
  useEffect(() => {
    let active = true;
    import('./data/levels').then(({ LEVELS_DATA }) => {
      if (active) setLevel(LEVELS_DATA.find(l => l.id.toString() === levelId) || null);
    });
    return () => { active = false; };
  }, [levelId]);

  if (!LEVEL_SUMMARIES.some(item => item.id.toString() === levelId)) return <Navigate to="/" replace />;
  if (!level) return <div className="p-8 text-center text-[var(--color-text-muted)]">Loading level…</div>;

  const handleStartPuzzle = (topic, block, blockNum) => {
    // Generate URL-friendly IDs or just use what we have. 
    // topic.id is like "t1-1", block.id is "b1-1-1".
    navigate(`/puzzle/${levelId}/${topic.id}/${block.id}`);
  };

  return (
    <TopicsView
      level={level}
      onBack={() => navigate('/')}
      onStartPuzzle={handleStartPuzzle}
    />
  );
};

const PuzzlePage = () => {
  const { levelId, topicId, blockId } = useParams();
  const navigate = useNavigate();

  // State
  const [currentPuzzles, setCurrentPuzzles] = useState([]);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [game, setGame] = useState(null);
  const [moveHistory, setMoveHistory] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [orientation, setOrientation] = useState('w');
  const [timer, setTimer] = useState(0);
  const [isLoadingPuzzles, setIsLoadingPuzzles] = useState(true);
  const [sessionStats, setSessionStats] = useState(() => getStats());

  // Derived Data
  const [level, setLevel] = useState(null);
  useEffect(() => {
    let active = true;
    import('./data/levels').then(({ LEVELS_DATA }) => {
      if (active) setLevel(LEVELS_DATA.find(l => l.id.toString() === levelId) || null);
    });
    return () => { active = false; };
  }, [levelId]);
  const topic = useMemo(() => level?.topics.find(t => t.id === topicId), [level, topicId]);
  const block = useMemo(() => topic?.blocks.find(b => b.id === blockId), [topic, blockId]);
  const blockNumber = useMemo(() => topic?.blocks.findIndex(b => b.id === blockId) + 1, [topic, blockId]);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Puzzle Page Class
  useEffect(() => {
    document.body.classList.add('puzzle-page');
    return () => document.body.classList.remove('puzzle-page');
  }, []);

  // Load Puzzles
  useEffect(() => {
    const loadPuzzles = async () => {
      if (!topic || !block) return;

      setIsLoadingPuzzles(true);
      try {
        let puzzles;
        if (block.puzzles && block.puzzles.length > 0) {
          puzzles = block.puzzles;
        } else {
          const puzzleCount = Math.min(Math.max(block.total || 5, 5), MAX_PUZZLES_PER_BLOCK);
          const { getPuzzlesForTopic } = await import('./data/puzzleGenerator');
          puzzles = getPuzzlesForTopic(topic.title, blockNumber, puzzleCount);
        }

        if (!puzzles || puzzles.length === 0) {
          console.error('No puzzles found');
          navigate(`/level/${levelId}`); // Go back if error
          return;
        }

        setCurrentPuzzles(puzzles);
        // Reset state for new block
        setCurrentPuzzleIndex(0);
        setMoveHistory([]);
        setSelectedSquare(null);
        setTimer(0);

        // Init first puzzle
        await initGame(puzzles[0]);
      } catch (error) {
        console.error('Error loading puzzles:', error);
      } finally {
        setIsLoadingPuzzles(false);
      }
    };

    loadPuzzles();
  }, [topic, block, blockNumber, levelId, navigate]);

  const initGame = async (puzzle) => {
    const { Chess } = await import('chess.js');
    if (puzzle && puzzle.fen) {
      try { setGame(new Chess(puzzle.fen)); }
      catch {
        const nextGame = new Chess();
        try { nextGame.load(puzzle.fen, { skipValidation: true }); } catch { /* use the standard starting position */ }
        setGame(nextGame);
      }
    } else {
      setGame(new Chess());
    }
  };


  const handlePuzzleChange = (index) => {
    if (index >= 0 && index < currentPuzzles.length) {
      setCurrentPuzzleIndex(index);
      setMoveHistory([]);
      setSelectedSquare(null);
      initGame(currentPuzzles[index]);
    }
  };

  const handlePuzzleComplete = (puzzleId, isCorrect = true) => {
    if (level && topic && block) {
      markPuzzleCompleted(level.id.toString(), topic.id, block.id, puzzleId, isCorrect);
      setSessionStats(getStats());
    }
  };

  const handleBlockChange = (blockIndex) => {
    // Navigate to the next block's URL
    if (topic && topic.blocks[blockIndex]) {
      const nextBlock = topic.blocks[blockIndex];
      navigate(`/puzzle/${levelId}/${topicId}/${nextBlock.id}`);
    }
  };

  if (!LEVEL_SUMMARIES.some(item => item.id.toString() === levelId)) return <Navigate to="/" replace />;
  if (!level) return <div className="p-8 text-center text-[var(--color-text-muted)]">Loading level…</div>;
  if (!topic || !block) return <Navigate to={`/level/${levelId}`} replace />;

  return (
    <PuzzleView
      puzzle={currentPuzzles[currentPuzzleIndex]}
      game={game}
      setGame={setGame}
      moveHistory={moveHistory}
      setMoveHistory={setMoveHistory}
      orientation={orientation}
      setOrientation={setOrientation}
      timer={timer}
      onBack={() => navigate(`/level/${levelId}`)}
      selectedSquare={selectedSquare}
      setSelectedSquare={setSelectedSquare}
      currentPuzzleIndex={currentPuzzleIndex}
      totalPuzzles={currentPuzzles.length}
      onPuzzleChange={handlePuzzleChange}
      onBlockChange={handleBlockChange}
      topic={topic}
      block={block}
      blockNumber={blockNumber}
      level={level}
      isLoadingPuzzles={isLoadingPuzzles}
      onPuzzleComplete={handlePuzzleComplete}
      sessionStats={sessionStats}
    />
  );
};


// --- Main App Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isPuzzlePage = location.pathname.startsWith('/puzzle');

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans selection:bg-orange-500/30 transition-colors duration-300">
      {!isPuzzlePage && (
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}

      <main className="relative">
        <Suspense fallback={<div className="p-8 text-center text-[var(--color-text-muted)]">Loading…</div>}>
          <Routes>
            <Route path="/" element={<LevelsPage />} />
            <Route path="/level/:levelId" element={<TopicsPage />} />
            <Route path="/puzzle/:levelId/:topicId/:blockId" element={<PuzzlePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {!isPuzzlePage && <Footer />}

      {!isPuzzlePage && isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
}
