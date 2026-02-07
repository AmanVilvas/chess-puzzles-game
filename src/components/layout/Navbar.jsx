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
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <span className="font-black text-black text-xl">B</span>
          </div>
          <span className="text-xl font-black tracking-tight uppercase">Blitzmate</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">How it works</a>
          <a href="#" className="hover:text-white transition-colors">FAQ</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
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
