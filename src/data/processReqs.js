import fs from 'fs';
import { Chess } from 'chess.js';

const cleanMove = (moveStr) => {
    let s = moveStr.replace(/^1\.\s*/, '').replace(/\(\.\.\.\)\s*/, '').trim();
    if (s.endsWith('.')) s = s.slice(0, -1);
    return s.trim();
};

const parseFile = (file, blockNameOverride) => {
    let blocks = [];
    let currentBlock = null;
    let currentPuzzle = null;

    if (!fs.existsSync(file)) return [];
    const text = fs.readFileSync(file, 'utf8');
    const lines = text.split('\n');

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (!line) continue;

        if (line.match(/^Block (\d+)/i)) {
            if (currentPuzzle && currentBlock && currentPuzzle.fen) {
                currentBlock.puzzles.push(currentPuzzle);
                currentPuzzle = null; 
            }

            let match = line.match(/^Block (\d+)/i);
            let blockId = `b${match[1]}`;
            let blockName = "Block " + match[1];
            
            if (blockNameOverride) {
                blockName = blockNameOverride;
            }

            currentBlock = {
                id: blockId,
                name: blockName,
                puzzles: []
            };
            blocks.push(currentBlock);
        }

        if (line.startsWith("I'd:") || line.startsWith("Id:")) {
            if (currentPuzzle && currentBlock) {
                currentBlock.puzzles.push(currentPuzzle);
            }
            currentPuzzle = {
                id: line.substring(line.indexOf(':') + 1).trim()
            };
        }

        if (currentPuzzle) {
            if (line.toLowerCase().startsWith("fen ")) {
                currentPuzzle.fen = line.substring(line.indexOf(':') + 1).trim();
            }

            if (line.toLowerCase().startsWith("goal")) {
                currentPuzzle.goal = line.substring(line.indexOf(':') + 1).trim();
            }

            if (line.toLowerCase().startsWith("turn")) {
                let t = line.substring(line.indexOf(':') + 1).trim().toLowerCase();
                currentPuzzle.turn = t.startsWith('w') ? 'w' : 'b';
            }

            if (line.toLowerCase().startsWith("rating")) {
                let tmp = line.substring(line.indexOf(':') + 1).trim();
                let nums = tmp.match(/\d+/g);
                if (nums && nums.length > 0) currentPuzzle.rating = parseInt(nums[0]);
                else currentPuzzle.rating = 200;
            }

            if (line.toLowerCase().startsWith("theme")) {
                currentPuzzle.themes = [line.substring(line.indexOf(':') + 1).trim()];
            }

            if (line.toLowerCase().startsWith("question")) {
                currentPuzzle.explanation = line.substring(line.indexOf(':') + 1).trim();
            }

            // Etiquette specials
            if (line.toLowerCase().startsWith("describe:")) {
                currentPuzzle.description = line.substring(line.indexOf(':') + 1).trim();
            }
            if (line.toLowerCase().startsWith("example:")) {
                currentPuzzle.explanation = line.substring(line.indexOf(':') + 1).trim();
            }

            let answerMatch = line.match(/^Answer\s*:\s*(.*)/i) || line.match(/^\[\.\.\.\]\s*(.*)/i);
            if (answerMatch) {
                let ansString = answerMatch[1].trim();
                let san = cleanMove(ansString);
                
                try {
                    let chess = new Chess(currentPuzzle.fen);
                    
                    if (san.match(/^[a-h][1-8][a-h][1-8]$/)) {
                        currentPuzzle.solution = [san];
                    } else {
                        let m = chess.move(san);
                        if (m) {
                            let uci = m.from + m.to + (m.promotion ? m.promotion : '');
                            currentPuzzle.solution = [uci];
                        } else {
                            currentPuzzle.solution = [san];
                            console.warn("Could not parse move: " + san + " for FEN: " + currentPuzzle.fen);
                        }
                    }
                } catch (e) {
                    currentPuzzle.solution = [san];
                    console.warn("Exception parsing FEN/move: " + currentPuzzle.fen + " | " + san + " -> " + e.message);
                }
            }
        }
    }
    
    if (currentPuzzle && currentBlock && currentPuzzle.fen) {
        currentBlock.puzzles.push(currentPuzzle);
        currentPuzzle = null;
    }
    
    blocks.forEach(b => {
        b.puzzles.forEach(p => {
            if (!p.themes) p.themes = ["Tactics"];
            if (!p.rating) p.rating = 200;
            if (!p.goal) p.goal = "Find the best move";
        });
    });

    return blocks;
};

// Map each requirement to its topic and create properly formatted JS
// req1.txt: Discovered Check -> TOPIC_3_CHECKS (replace inside level2_captures_and_checks.js? Or new file?)
// Actually, let's just create new files for each and update levels.js! It's much cleaner than munging existing code!
// I'll create new JS files and output everything we parse.

let req1Blocks = parseFile('req1.txt', 'Discovered Check');
fs.writeFileSync('level2_t3_discovered_check.js', `export const TOPIC_3_CHECKS = ${JSON.stringify({ title: "Discovered Check", blocks: req1Blocks }, null, 4)};\n`);

let req2Blocks = parseFile('req2.txt', 'Block 1');
let req3Blocks = parseFile('req3.txt', 'Block 2');
let mateIn1Blocks = req2Blocks.concat(req3Blocks);
fs.writeFileSync('level2_mate_in_1.js', `export const MATE_IN_1_PUZZLES = ${JSON.stringify({ title: "Mate in 1", blocks: mateIn1Blocks }, null, 4)};\n`);

let req4Blocks = parseFile('req4.txt', 'Double Check');
fs.writeFileSync('level2_t2_double_check.js', `export const TOPIC_2_DOUBLE_CHECK = ${JSON.stringify({ title: "Double Check", blocks: req4Blocks }, null, 4)};\n`);

// req5 and req6 should go to level2_advanced_topics.js or maybe separate files to be safe
let req5Blocks = parseFile('req5.txt', 'Pawn Structure');
let req6Blocks = parseFile('req6.txt', 'Chess Etiquette');

// For req5 and req6, these belong to TOPIC_7_PAWN_STRUCTURE and TOPIC_8_ETIQUETTE normally in level2_advanced_topics.js
// We can just overwrite level2_advanced_topics.js with these two replacing the ones there, or just generate separate files for them.
// Let's generate level2_pawn_structure.js and level2_etiquette.js
fs.writeFileSync('level2_pawn_structure.js', `export const TOPIC_7_PAWN_STRUCTURE = ${JSON.stringify({ title: "Pawn Structure", blocks: req5Blocks }, null, 4)};\n`);
fs.writeFileSync('level2_etiquette.js', `export const TOPIC_8_ETIQUETTE = ${JSON.stringify({ title: "Chess Etiquette", blocks: req6Blocks }, null, 4)};\n`);

console.log("Parsing completed and JS files generated.");
