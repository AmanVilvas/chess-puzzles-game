import React from 'react';
import { BookOpenCheck, Heart } from 'lucide-react';
export const Footer = () => (
  <footer className="mt-16 border-t border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/70 px-4 py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-[var(--color-text-secondary)]">
        <BookOpenCheck className="h-4 w-4 text-[var(--color-accent-orange)]" /> Chess Training
      </div>
      <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">Made for curious minds <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" /></div>
      <div className="text-xs text-[var(--color-text-muted)]">© 2026 RATHISHRAVI</div>
    </div>
  </footer>
);
