import React from 'react';
import { Menu, X } from 'lucide-react';
export const Navbar = ({ setView, isMenuOpen, setIsMenuOpen }) => (
  <nav className="sticky top-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-neutral-800">
    <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setView('levels')}
        >
          <span className="text-xl font-black tracking-tight uppercase">RATHISHRAVI</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
          <a href="https://learn.chesswithrathish.com/" className="hover:text-white transition-colors">Home</a>

        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="http://chesswithrathish.com/"
          className="hidden md:flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] border border-neutral-800 hover:border-orange-500/40 px-4 py-1.5 rounded-lg transition-all duration-300 group shadow-lg shadow-black/50 hover:shadow-orange-900/10"
        >
          <span className="font-bold text-sm bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white">
            Learn
          </span>
        </a>
        <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-2 rounded-full text-sm transition-all transform hover:scale-105 active:scale-95">
          Start Training
        </button>
        <button className="md:hidden p-2 text-neutral-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>
  </nav>
);
