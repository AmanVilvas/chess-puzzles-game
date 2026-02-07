// Progress Manager - Handles saving and loading user progress from localStorage

const STORAGE_KEY = 'chess_puzzle_progress';

/**
 * Get all progress data from localStorage
 * @returns {Object} Progress data object
 */
export const getProgress = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {
            levels: {},
            topics: {},
            blocks: {},
            puzzles: {},
            stats: {
                totalSolved: 0,
                totalAttempted: 0,
                currentStreak: 0,
                bestStreak: 0,
                accuracy: 100
            }
        };
    } catch (error) {
        console.error('Error loading progress:', error);
        return {
            levels: {},
            topics: {},
            blocks: {},
            puzzles: {},
            stats: {
                totalSolved: 0,
                totalAttempted: 0,
                currentStreak: 0,
                bestStreak: 0,
                accuracy: 100
            }
        };
    }
};

/**
 * Save progress data to localStorage
 * @param {Object} progress - Progress data to save
 */
export const saveProgress = (progress) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error('Error saving progress:', error);
    }
};

/**
 * Mark a puzzle as completed
 * @param {string} levelId - Level ID
 * @param {string} topicId - Topic ID
 * @param {string} blockId - Block ID
 * @param {string} puzzleId - Puzzle ID
 * @param {boolean} isCorrect - Whether the puzzle was solved correctly
 */
export const markPuzzleCompleted = (levelId, topicId, blockId, puzzleId, isCorrect = true) => {
    const progress = getProgress();
    const uniqueBlockId = `${levelId}-${topicId}-${blockId}`;

    // Initialize structures if they don't exist
    if (!progress.levels[levelId]) progress.levels[levelId] = { completed: 0, total: 0 };
    if (!progress.topics[topicId]) progress.topics[topicId] = { completed: 0, total: 0 };
    if (!progress.blocks[uniqueBlockId]) progress.blocks[uniqueBlockId] = { completed: 0, total: 0, puzzles: {} };

    // Mark puzzle as completed if not already done
    if (!progress.blocks[uniqueBlockId].puzzles[puzzleId]) {
        progress.blocks[uniqueBlockId].puzzles[puzzleId] = {
            completed: true,
            attempts: 1,
            correct: isCorrect,
            timestamp: Date.now()
        };

        // Update block completion count
        progress.blocks[uniqueBlockId].completed = Object.keys(progress.blocks[uniqueBlockId].puzzles).length;

        // Update level and topic completion counts
        progress.levels[levelId].completed++;
        progress.topics[topicId].completed++;

        // Update stats
        progress.stats.totalSolved++;
        progress.stats.totalAttempted++;

        if (isCorrect) {
            progress.stats.currentStreak++;
            if (progress.stats.currentStreak > progress.stats.bestStreak) {
                progress.stats.bestStreak = progress.stats.currentStreak;
            }
        } else {
            progress.stats.currentStreak = 0;
        }

        // Update accuracy
        progress.stats.accuracy = Math.round(
            (progress.stats.totalSolved / progress.stats.totalAttempted) * 100
        );
    } else {
        // Increment attempts
        progress.blocks[uniqueBlockId].puzzles[puzzleId].attempts++;
    }

    saveProgress(progress);
    return progress;
};

/**
 * Get block progress
 * @param {string} blockId - Block ID
 * @param {string} levelId - Level ID (optional but recommended for uniqueness)
 * @param {string} topicId - Topic ID (optional but recommended for uniqueness)
 * @returns {Object} Block progress data
 */
export const getBlockProgress = (blockId, levelId, topicId) => {
    const progress = getProgress();
    // Try unique ID first if all params provided
    if (levelId && topicId) {
        const uniqueId = `${levelId}-${topicId}-${blockId}`;
        if (progress.blocks[uniqueId]) return progress.blocks[uniqueId];
    }
    // Fallback to simple ID (legacy support)
    return progress.blocks[blockId] || { completed: 0, total: 0, puzzles: {} };
};

/**
 * Get topic progress
 * @param {string} topicId - Topic ID
 * @returns {Object} Topic progress data
 */
export const getTopicProgress = (topicId) => {
    const progress = getProgress();
    return progress.topics[topicId] || { completed: 0, total: 0 };
};

/**
 * Get level progress
 * @param {string} levelId - Level ID
 * @returns {Object} Level progress data
 */
export const getLevelProgress = (levelId) => {
    const progress = getProgress();
    return progress.levels[levelId] || { completed: 0, total: 0 };
};

/**
 * Calculate level completion percentage
 * @param {string} levelId - Level ID
 * @param {number} totalTasks - Total tasks in the level
 * @returns {number} Completion percentage
 */
export const calculateLevelCompletion = (levelId, totalTasks) => {
    const progress = getProgress();
    const levelProgress = progress.levels[levelId] || { completed: 0 };
    return totalTasks > 0 ? Math.round((levelProgress.completed / totalTasks) * 100) : 0;
};

/**
 * Get user statistics
 * @returns {Object} User stats
 */
export const getStats = () => {
    const progress = getProgress();
    return progress.stats;
};

/**
 * Reset all progress (use with caution!)
 */
export const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
};

/**
 * Check if a puzzle is completed
 * @param {string} blockId - Block ID
 * @param {string} puzzleId - Puzzle ID
 * @returns {boolean} Whether the puzzle is completed
 */
export const isPuzzleCompleted = (blockId, puzzleId) => {
    const progress = getProgress();
    return progress.blocks[blockId]?.puzzles[puzzleId]?.completed || false;
};
