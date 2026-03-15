import fs from 'fs';
import { Chess } from 'chess.js';

const rawFiles = ['raw1.txt', 'raw2.txt', 'raw3.txt', 'raw4.txt', 'raw5.txt'];

let blocks = [];
let currentBlock = null;
let currentPuzzle = null;

const cleanMove = (moveStr) => {
    let s = moveStr.replace(/^1\.\s*/, '').replace(/\(\.\.\.\)\s*/, '').trim();
    if (s.endsWith('.')) s = s.slice(0, -1);
    return s.trim();
};

const processFiles = () => {
    for (let f of rawFiles) {
        if (!fs.existsSync(f)) continue;
        const text = fs.readFileSync(f, 'utf8');
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
                let blockId = `t2_b${match[1]}`;
                let blockName = "Block " + match[1];

                let maybeTitleLine = lines[i-1] ? lines[i-1].trim() : "";
                if (!maybeTitleLine && lines[i-2]) maybeTitleLine = lines[i-2].trim();
                
                if (maybeTitleLine && maybeTitleLine.toLowerCase().includes("level 2")) {
                    blockName = maybeTitleLine.replace(/Level 2/i, '').trim();
                } else if (f === 'raw2.txt' && match[1] === '2') {
                    blockName = "Capturing Unprotected Piece";
                } else if (f === 'raw3.txt' && match[1] === '3') {
                    blockName = "Piece Exchange";
                } else if (f === 'raw4.txt' && match[1] === '4') {
                    blockName = "Free Piece";
                } else if (f === 'raw5.txt' && match[1] === '5') {
                    blockName = "Recapture";
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
                    id: line.split(':')[1].trim()
                };
            }

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

            if (line.toLowerCase().startsWith("answer")) {
                let ansString = line.substring(line.indexOf(':') + 1).trim();
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
            if (!p.themes) p.themes = ["Simple Capture"];
            if (!p.rating) p.rating = 200;
            if (!p.goal) p.goal = "Capture";
        });
    });

    const outputObj = {
        title: "Simple Captures",
        blocks: blocks
    };
    
    const outputJs = `export const TOPIC_2_CAPTURES = ${JSON.stringify(outputObj, null, 4)};\n`;
    const origFile = 'level2_captures_and_checks.js';
    let origText = fs.readFileSync(origFile, 'utf8');
    
    const splitIndex = origText.indexOf('export const TOPIC_3_CHECKS');
    if (splitIndex !== -1) {
        const topic3Comment = origText.lastIndexOf('// ======================================', splitIndex);
        if (topic3Comment !== -1) {
            let newContent = `// =========================\n// Topic 2: Simple Captures\n// =========================\n${outputJs}\n\n${origText.substring(topic3Comment)}`;
            fs.writeFileSync(origFile, newContent, 'utf8');
            console.log("Successfully updated level2_captures_and_checks.js!");
        } else {
            console.log("Could not find Topic 3 comment.");
        }
    } else {
        console.log("Could not find TOPIC_3_CHECKS.");
        fs.writeFileSync('TOPIC_2_CAPTURES_NEW.js', outputJs, 'utf8');
    }
};

processFiles();
