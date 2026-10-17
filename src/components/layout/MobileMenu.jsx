import React from 'react';
import { ArrowUpRight, BookOpenCheck, X } from 'lucide-react';
export const MobileMenu = ({ setIsMenuOpen }) => (
  <div className="fixed inset-0 z-[100] flex flex-col gap-8 bg-[var(--color-bg-primary)] p-6 text-[var(--color-text-primary)] md:hidden">
    <button className="grid h-10 w-10 self-end place-items-center rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)]" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
      <X className="h-5 w-5" />
    </button>
    <div className="mb-2 flex items-center gap-3 border-b border-[var(--color-border-primary)] pb-6">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--color-hover)] text-[var(--color-accent-orange)]"><BookOpenCheck className="h-5 w-5" /></span>
      <span className="text-lg font-black">Chess Training</span>
    </div>
    <div className="flex flex-col gap-2 text-lg font-bold">
      <a className="rounded-xl px-4 py-4 hover:bg-[var(--color-bg-secondary)]" href="https://learn.chesswithrathish.com/" onClick={() => setIsMenuOpen(false)}>Learning hub</a>
      <a className="rounded-xl px-4 py-4 hover:bg-[var(--color-bg-secondary)]" href="https://chesswithrathish.com/" onClick={() => setIsMenuOpen(false)}>Explore courses <ArrowUpRight className="ml-1 inline h-4 w-4" /></a>
    </div>
    <p className="mt-auto rounded-2xl bg-[var(--color-bg-secondary)] p-5 text-sm leading-relaxed text-[var(--color-text-muted)]">Build a stronger game with clear lessons and bite-sized chess puzzles.</p>
  </div>
);
