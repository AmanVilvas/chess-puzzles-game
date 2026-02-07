import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileMenu } from './components/layout/MobileMenu';
import { LevelsView } from './components/views/LevelsView';
import { TopicsView } from './components/views/TopicsView';
import { PuzzleView } from './components/views/PuzzleView';
import { getPuzzlesForTopic } from './data/puzzleGenerator';
const MAX_PUZZLES_PER_BLOCK = 6;
export default function App() {
  const [view, setView] = useState('levels');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentBlock, setCurrentBlock] = useState(null);
  const [blockNumber, setBlockNumber] = useState(1);
  const [currentPuzzles, setCurrentPuzzles] = useState([]);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [game, setGame] = useState(new Chess());
  const [moveHistory, setMoveHistory] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [orientation, setOrientation] = useState('w');
  const [timer, setTimer] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoadingPuzzles, setIsLoadingPuzzles] = useState(false);
  useEffect(() => {
    let interval;
    if (view === 'puzzle') {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [view]);
  useEffect(() => {
    if (view === 'puzzle') {
      document.body.classList.add('puzzle-page');
    } else {
      document.body.classList.remove('puzzle-page');
    }
    return () => {
      document.body.classList.remove('puzzle-page');
    };
  }, [view]);
  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    setView('topics');
    window.scrollTo(0, 0);
  };
  const startPuzzle = async (topic, block, blockNum) => {
    try {
      setIsLoadingPuzzles(true);
      setCurrentTopic(topic);
      setCurrentBlock(block);
      setBlockNumber(blockNum);

      // Use puzzles from block data if available, otherwise generate
      let puzzles;
      if (block.puzzles && block.puzzles.length > 0) {
        puzzles = block.puzzles;
      } else {
        const puzzleCount = Math.min(Math.max(block.total || 5, 5), MAX_PUZZLES_PER_BLOCK);
        puzzles = getPuzzlesForTopic(topic.title, blockNum, puzzleCount);
      }

      if (!puzzles || puzzles.length === 0) {
        console.error('No puzzles found');
        return;
      }
      setCurrentPuzzles(puzzles);
      console.log(`Loaded ${puzzles.length} puzzles for ${topic.title} - Block ${blockNum}`);
      setCurrentPuzzleIndex(0);
      const firstPuzzle = puzzles[0];

      // Only set game for non-quiz puzzles
      if (firstPuzzle.type !== 'quiz' && firstPuzzle.fen) {
        try {
          const newGame = new Chess(firstPuzzle.fen);
          setGame(newGame);
        } catch (error) {
          console.error('Invalid FEN:', firstPuzzle.fen, error);
          setGame(new Chess());
        }
      } else {
        setGame(new Chess());
      }
      setMoveHistory([]);
      setSelectedSquare(null);
      setTimer(0);
      setView('puzzle');
    } catch (error) {
      console.error('Error starting puzzle:', error);
    } finally {
      setIsLoadingPuzzles(false);
    }
  };
  const handlePuzzleChange = (index) => {
    try {
      if (index >= 0 && index < currentPuzzles.length) {
        setCurrentPuzzleIndex(index);
        const p = currentPuzzles[index];
        try {
          const newGame = new Chess(p.fen);
          setGame(newGame);
        } catch (error) {
          console.error('Invalid FEN for puzzle', index, ':', p.fen, error);
          setGame(new Chess());
        }
        setMoveHistory([]);
        setSelectedSquare(null);
      }
    } catch (error) {
      console.error('Error changing puzzle:', error);
    }
  };
  const handleBlockChange = async (blockIndex) => {
    try {
      if (!currentTopic || !currentTopic.blocks) return;
      setIsLoadingPuzzles(true);
      const newBlock = currentTopic.blocks[blockIndex];
      const newBlockNumber = blockIndex + 1;
      if (!newBlock) return;
      setCurrentBlock(newBlock);
      setBlockNumber(newBlockNumber);

      // Use puzzles from block data if available, otherwise generate
      let puzzles;
      if (newBlock.puzzles && newBlock.puzzles.length > 0) {
        puzzles = newBlock.puzzles;
      } else {
        const puzzleCount = Math.min(Math.max(newBlock.total || 5, 5), MAX_PUZZLES_PER_BLOCK);
        puzzles = getPuzzlesForTopic(currentTopic.title, newBlockNumber, puzzleCount);
      }

      if (!puzzles || puzzles.length === 0) {
        console.error('No puzzles found for block');
        return;
      }
      setCurrentPuzzles(puzzles);
      console.log(`Switched to ${currentTopic.title} - Block ${newBlockNumber} (${puzzles.length} puzzles)`);
      setCurrentPuzzleIndex(0);
      const firstPuzzle = puzzles[0];

      // Only set game for non-quiz puzzles
      if (firstPuzzle.type !== 'quiz' && firstPuzzle.fen) {
        try {
          const newGame = new Chess(firstPuzzle.fen);
          setGame(newGame);
        } catch (error) {
          console.error('Invalid FEN:', firstPuzzle.fen, error);
          setGame(new Chess());
        }
      } else {
        setGame(new Chess());
      }
      setMoveHistory([]);
      setSelectedSquare(null);
      setTimer(0);
    } catch (error) {
      console.error('Error changing block:', error);
    } finally {
      setIsLoadingPuzzles(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-neutral-100 font-sans selection:bg-orange-500/30">
      { }
      {view !== 'puzzle' && (
        <Navbar
          setView={setView}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
      { }
      <main className="relative">
        {view === 'levels' && (
          <LevelsView onLevelClick={handleLevelClick} />
        )}
        {view === 'topics' && selectedLevel && (
          <TopicsView
            level={selectedLevel}
            onBack={() => setView('levels')}
            onStartPuzzle={startPuzzle}
          />
        )}
        {view === 'puzzle' && (
          <PuzzleView
            puzzle={currentPuzzles[currentPuzzleIndex]}
            game={game}
            setGame={setGame}
            moveHistory={moveHistory}
            setMoveHistory={setMoveHistory}
            orientation={orientation}
            setOrientation={setOrientation}
            timer={timer}
            onBack={() => setView('topics')}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
            currentPuzzleIndex={currentPuzzleIndex}
            totalPuzzles={currentPuzzles.length}
            onPuzzleChange={handlePuzzleChange}
            onBlockChange={handleBlockChange}
            topic={currentTopic}
            block={currentBlock}
            blockNumber={blockNumber}
            level={selectedLevel}
            isLoadingPuzzles={isLoadingPuzzles}
          />
        )}
      </main>
      { }
      {view !== 'puzzle' && <Footer />}
      { }
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
}
