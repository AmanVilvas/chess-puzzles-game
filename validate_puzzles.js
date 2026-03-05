import fs from 'fs';
import path from 'path';

const dataDir = 'c:\\Users\\hp\\Desktop\\web dev\\client work\\chess\\src\\data';

const files = [
    'level1_king.js',
    'level1_kingrole.js',
    'level1_knight.js',
    'level1_part1.js',
    'level1_part2.js',
    'level1_part3.js',
    'level1_part4.js',
    'level1_part5.js',
    'level1_queen.js',
    'level2_advanced_topics.js',
    'level2_captures_and_checks.js',
    'level2_decoy.js',
    'level2_mate_in_1.js',
    'level2_mate_in_2.js',
    'level2_value_of_pieces.js',
    'level3_part1.js',
    'level3_part2.js',
    'level4_part1.js',
    'level4_part2.js',
    'level5_part1.js',
    'level5_part2.js',
    'level5_part3.js',
    'level5_part4.js'
];

const errors = [];

function validatePuzzle(puzzle, fileName, topicTitle) {
    const idPrefix = `${fileName} [${topicTitle}]`;
    if (!puzzle.id) errors.push(`${idPrefix}: Missing id`);
    if (!puzzle.fen) errors.push(`${idPrefix} (${puzzle.id}): Missing fen`);

    if (puzzle.type === 'quiz') {
        if (!puzzle.question) errors.push(`${idPrefix} (${puzzle.id}): Missing question`);
        if (!Array.isArray(puzzle.options)) errors.push(`${idPrefix} (${puzzle.id}): Missing/invalid options`);
        if (typeof puzzle.correctAnswer !== 'number' && typeof puzzle.correctAnswer !== 'string') errors.push(`${idPrefix} (${puzzle.id}): Missing/invalid correctAnswer`);
        else if (puzzle.options && (Number(puzzle.correctAnswer) < 0 || Number(puzzle.correctAnswer) >= puzzle.options.length)) {
            errors.push(`${idPrefix} (${puzzle.id}): correctAnswer ${puzzle.correctAnswer} out of range (options: ${puzzle.options.length})`);
        }
    } else {
        // board or normal type
        if (!Array.isArray(puzzle.solution)) {
            if (!puzzle.solution) errors.push(`${idPrefix} (${puzzle.id}): Board puzzle missing solution`);
        }
    }
}

for (const file of files) {
    const filePath = path.join(dataDir, file);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${file}`);
        continue;
    }

    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Strip imports and exports to make it evaluatable
        const scriptContent = content
            .replace(/import\s+.*\s+from\s+['"].*['"];?/g, '')
            .replace(/export\s+const\s+(\w+)\s*=/g, 'this.$1 =');

        const context = {};
        try {
            const runner = new Function(scriptContent);
            runner.call(context);

            for (const key in context) {
                const topic = context[key];
                if (topic && topic.blocks) {
                    topic.blocks.forEach(block => {
                        if (block.puzzles) {
                            block.puzzles.forEach(p => validatePuzzle(p, file, topic.title || key));
                        }
                    });
                }
            }
        } catch (evalErr) {
            errors.push(`File ${file}: Failed to parse/eval: ${evalErr.message}`);
        }

    } catch (err) {
        errors.push(`File ${file}: Error reading: ${err.message}`);
    }
}

if (errors.length === 0) {
    console.log("No structural errors found!");
} else {
    console.log("Found errors:");
    errors.forEach(e => console.log(e));
}
