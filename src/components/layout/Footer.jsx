import React from 'react';
import { Layout, Trophy, Settings } from 'lucide-react';
export const Footer = () => (
  <footer className="mt-20 border-t border-neutral-800 bg-[#121212] py-12 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <span className="text-lg font-black tracking-tight uppercase text-neutral-400">RATHISHRAVI</span>
      </div>
      <div className="text-neutral-500 text-sm">
        © 2026 RATHISHRAVI. Built for chess improvement.
      </div>
      <div className="flex gap-4 text-neutral-400">
        <Layout className="w-5 h-5 cursor-pointer hover:text-orange-500" />
        <Trophy className="w-5 h-5 cursor-pointer hover:text-orange-500" />
        <Settings className="w-5 h-5 cursor-pointer hover:text-orange-500" />
      </div>
    </div>
  </footer>
);
