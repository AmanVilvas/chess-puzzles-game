
const fs = require('fs');

const input = fs.readFileSync('raw_puzzles.txt', 'utf8');

function parse() {
  const sections = input.split(/Id:\s+/).filter(Boolean);
  const puzzles = sections.map(sec => {
    const lines = sec.trim().split(/\r?\n/);
    const id = lines[0].trim();
    const qnaLineIndex = lines.findIndex(l => l.startsWith('Qna') || l.startsWith('QnAns'));
    const optLineIndex = lines.findIndex(l => l.startsWith('Option') || l.startsWith('Opt'));
    const ansLineIndex = lines.findIndex(l => l.startsWith('Ans'));

    let question = '';
    if (qnaLineIndex !== -1 && optLineIndex !== -1) {
      question = lines.slice(qnaLineIndex, optLineIndex).join(' ').replace(/Qna\s*:\s*|QnAns\s*:\s*/i, '').trim();
    } else if (qnaLineIndex !== -1) {
      question = lines.slice(qnaLineIndex, ansLineIndex !== -1 ? ansLineIndex : lines.length).join(' ').replace(/Qna\s*:\s*|QnAns\s*:\s*/i, '').trim();
    }

    let optionText = '';
    if (optLineIndex !== -1 && ansLineIndex !== -1) {
        optionText = lines.slice(optLineIndex, ansLineIndex).join(' ').replace(/Option\s*:\s*|Opt\s*:\s*/i, '').trim();
    } else if (optLineIndex !== -1) {
        optionText = lines.slice(optLineIndex).join(' ').replace(/Option\s*:\s*|Opt\s*:\s*/i, '').trim();
    }

    const ansText = ansLineIndex !== -1 ? lines.slice(ansLineIndex).join(' ').replace(/Ans\s*:\s*/i, '').trim() : '';

    // Split options by A. B. C. D. or A) B) C) D)
    const options = [];
    const re = /\b([A-D](?:\.|\)))\s*/g;
    let m;
    let lastIndex = 0;
    while ((m = re.exec(optionText)) !== null) {
        if (lastIndex !== m.index) {
            const prev = optionText.substring(lastIndex, m.index).trim();
            if (prev) options.push(prev);
        }
        lastIndex = m.index;
    }
    if (lastIndex < optionText.length) {
        const last = optionText.substring(lastIndex).trim();
        if (last) options.push(last);
    }
    
    // Determine correct answer index
    let correctAnswer = 0;
    if (ansText.match(/^A(?:\.|\)|:|$)/i)) correctAnswer = 0;
    else if (ansText.match(/^B(?:\.|\)|:|$)/i)) correctAnswer = 1;
    else if (ansText.match(/^C(?:\.|\)|:|$)/i)) correctAnswer = 2;
    else if (ansText.match(/^D(?:\.|\)|:|$)/i)) correctAnswer = 3;
    else if (ansText.toLowerCase().includes('option: a')) correctAnswer = 0;
    else {
        // Fallback: search for option text in answer
        const foundIndex = options.findIndex(opt => {
            const cleanOpt = opt.replace(/^[A-D](\.|\))\s*/, '').trim();
            const cleanAns = ansText.replace(/^[A-D](\.|\))\s*/, '').trim();
            return cleanAns.includes(cleanOpt) || cleanOpt.includes(cleanAns);
        });
        if (foundIndex !== -1) correctAnswer = foundIndex;
    }

    return {
      id,
      type: "quiz",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", // default starting position
      question,
      options,
      correctAnswer,
      explanation: "",
      rating: 100,
      themes: ["intro"]
    };
  }).filter(p => p.question || p.options.length > 0);

  const block1 = puzzles.filter(p => p.id.toLowerCase().includes('_b1_'));
  const block2 = puzzles.filter(p => p.id.toLowerCase().includes('_b2_'));

  const result = {
      title: "Introduction",
      blocks: [
          { id: "block_1", puzzles: block1 },
          { id: "block_2", puzzles: block2 }
      ]
  };

  fs.writeFileSync('parsed_puzzles.json', JSON.stringify(result, null, 2));
}

parse();
