const fs = require('fs');
let code = fs.readFileSync('PuzzleView.jsx', 'utf8');

// The replacement logic: we want to replace everything from "const themeOptions = ..."
// down to the very end of the file. However, there's a problem: the current source contains
// if (level?.id === 1) { return ... }  which contains a "const themeOptions...".
// Then there's the default return which ALSO contains "const themeOptions...".
// What we want is to REPLACE the ENTIRE rendering block.
// Let's find "const isLevel1 = level?.id === 1;" since it is defined right before the rendering branches.

const startMarker = 'const isLevel1 = level?.id === 1;';
const startIndex = code.indexOf(startMarker);

if (startIndex === -1) {
  console.log("Could not find start marker");
  process.exit(1);
}

const newRenderBlock = `const isLevel1 = level?.id === 1;
  const isBlock3 = blockNumber === 3;
  const puzzleHasFen = !!(safePuzzle.fen && safePuzzle.fen.trim());
  const showBoard = (!isLevel1 || isBlock3 || puzzleHasFen);

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
                 <span className="text-xs font-semibold mt-0.5" style={{ color: "var(--color-accent-orange)" }}>puzzle {currentPuzzleIndex + 1}</span>
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
                 position={isQuizBoardMode && game ? game.fen() : (safePuzzle.fen || (game ? game.fen() : STARTING_FEN))}
                 onSquareClick={handleSquareClick}
                 lastMove={moveHistory[moveHistory.length - 1]}
                 orientation={orientation}
                 theme={boardTheme}
                 size={boardSize}
                 selectedSquare={selectedSquare}
                 showLegalMoves={true}
               />
             ) : (
                <div className="text-[var(--color-text-muted)] text-sm italic py-10">No board available for this puzzle.</div>
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
             
             {/* Info Block */}
             <div className="card p-5 shadow-sm flex flex-col gap-3" style={{ backgroundColor: "var(--color-bg-elevated)", minHeight: "130px" }}>
               <div className="flex items-center gap-3">
                 <div className="flex items-center gap-2">
                   <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: safePuzzle.turn === "w" ? "white" : "#2a2a2a", border: "1px solid var(--color-border-primary)" }} />
                   <span className="text-sm font-bold text-[var(--color-text-secondary)]">
                     playing as {safePuzzle.turn === "w" ? "white" : "black"}
                   </span>
                 </div>
               </div>

               {safePuzzle.type === 'quiz' ? (
                 <>
                   <div className="font-bold text-[15px] text-[var(--color-text-primary)]">
                     ques: {safePuzzle.question || safePuzzle.explanation}
                   </div>
                   {safePuzzle.options && safePuzzle.options.length > 0 && (
                     <div className="grid grid-cols-2 gap-3 flex-shrink-0 mt-3">
                       {safePuzzle.options?.map((option, idx) => {
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
                              <span className="leading-tight mt-0.5" style={{ wordBreak: "break-word" }}>{option}</span>
                            </button>
                          );
                       })}
                     </div>
                   )}
                 </>
               ) : (
                 <div className="font-bold text-[15px] text-[var(--color-text-primary)]">
                   ques: {safePuzzle.explanation || safePuzzle.goal}
                 </div>
               )}
             </div>

             {/* Pagination Block */}
             <div className="card pt-5 pb-6 px-4 flex flex-col relative items-center justify-center shadow-sm flex-1" style={{ backgroundColor: "var(--color-bg-elevated)", minHeight: "200px" }}>
               <h3 className="text-[12px] font-bold text-[var(--color-text-muted)] absolute top-4 left-4 uppercase tracking-widest opacity-80">
                 puzzles pagination
               </h3>
               <div className="flex flex-wrap gap-2.5 justify-center max-w-[280px] mt-6">
                 {Array.from({ length: totalPuzzles }).map((_, idx) => {
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
                 })}
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
`;

const reconstructedCode = code.substring(0, startIndex) + newRenderBlock;
fs.writeFileSync('PuzzleView.jsx', reconstructedCode);
console.log('Successfully replaced file content.');
