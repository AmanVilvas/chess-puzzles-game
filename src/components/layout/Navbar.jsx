import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, BookOpenCheck, ArrowUpRight } from 'lucide-react';
export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/85 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-3 text-left" onClick={() => navigate('/')} aria-label="Go to chess training home">
            <span className="grid h-10 w-10 place-items-center rounded-2xl" style={{ backgroundColor: 'var(--color-hover)', color: 'var(--color-accent-orange)' }}>
              <BookOpenCheck className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-black tracking-tight text-[var(--color-text-primary)] sm:text-base">Chess Training</span>
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] sm:block">Learn · Practice · Improve</span>
            </span>
          </button>
          <a href="https://learn.chesswithrathish.com/" className="hidden text-sm font-semibold text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)] md:block">Learning hub</a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] transition hover:text-[var(--color-text-primary)]"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="https://chesswithrathish.com/" className="hidden items-center gap-2 rounded-xl bg-[var(--color-accent-orange)] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex">
            Explore courses <ArrowUpRight className="h-4 w-4" />
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-xl text-[var(--color-text-muted)] hover:bg-[var(--color-bg-tertiary)] md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};
