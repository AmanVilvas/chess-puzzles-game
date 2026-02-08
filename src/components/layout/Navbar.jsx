import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
export const Navbar = ({ setView, isMenuOpen, setIsMenuOpen }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-mode');
    } else {
      root.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setView('levels')}
          >
            <span className="text-xl font-black tracking-tight uppercase">RATHISHRAVI</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-[var(--color-text-muted)]">
            <a href="https://learn.chesswithrathish.com/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</a>

          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="http://chesswithrathish.com/"
            className="hidden md:flex items-center gap-2 bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)] hover:border-orange-500/40 px-4 py-1.5 rounded-lg transition-all duration-300 group shadow-lg shadow-black/50 hover:shadow-orange-900/10"
          >
            <span className="font-bold text-sm bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-text-muted)] bg-clip-text text-transparent group-hover:from-[var(--color-text-primary)] group-hover:to-[var(--color-text-primary)]">
              Learn
            </span>
          </a>

          <button
            onClick={toggleTheme}
            className={`flex items-center w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none border border-[var(--color-border-primary)] ${theme === 'dark' ? 'bg-white' : 'bg-neutral-800'}`}
            aria-label="Toggle Theme"
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm
                ${theme === 'dark'
                  ? 'translate-x-7 bg-black text-white'
                  : 'translate-x-0 bg-white text-black'
                }
              `}
            >
              {theme === 'dark' ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
            </div>
          </button>

          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-2 rounded-full text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20">
            Start Training
          </button>
          <button className="md:hidden p-2 text-[var(--color-text-muted)]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};
