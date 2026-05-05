import React from 'react';
import { motion } from 'motion/react';
import { Home, Trophy, Send, Zap, MessageSquare } from 'lucide-react';
import { TELEGRAM_LINK } from '../constants';

interface MobileNavProps {
  activePage: 'home' | 'premium';
  setPage: (page: 'home' | 'premium') => void;
}

export default function MobileNav({ activePage, setPage }: MobileNavProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[90%] max-w-[440px]">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#0A0A0A]/95 backdrop-blur-3xl border border-white/5 rounded-full p-1.5 flex justify-center items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 px-6"
      >
        <button 
          onClick={() => setPage('home')}
          className={`relative flex flex-col items-center justify-center py-3 transition-all duration-300 px-2 ${activePage === 'home' ? 'text-gold-500' : 'text-gray-500'}`}
        >
          {activePage === 'home' && (
            <motion.div 
              layoutId="mobile-nav-pill"
              className="absolute inset-0 bg-gold-500/10 rounded-[20px] border border-gold-500/20"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Home size={22} className="relative z-10" />
          <span className="text-[9px] font-black mt-1 tracking-widest uppercase relative z-10">HOME</span>
        </button>

        {/* Central Telegram Button */}
        <div className="relative z-20">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.button 
              onClick={() => window.open(TELEGRAM_LINK, '_blank')}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-b from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-[0_5px_20px_rgba(212,160,23,0.4)] border-2 border-[#0A0A0A] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Send size={24} className="text-black fill-black -translate-x-0.5 relative z-10" />
            </motion.button>
          </motion.div>
        </div>

        <button 
          onClick={() => setPage('premium')}
          className={`relative flex flex-col items-center justify-center py-3 transition-all duration-300 px-2 ${activePage === 'premium' ? 'text-gold-500' : 'text-gray-500'}`}
        >
          {activePage === 'premium' && (
            <motion.div 
              layoutId="mobile-nav-pill"
              className="absolute inset-0 bg-gold-500/10 rounded-[20px] border border-gold-500/20"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Zap size={22} className="relative z-10" />
          <span className="text-[8px] font-black mt-1 tracking-widest uppercase relative z-10">PREMIUM</span>
        </button>
      </motion.div>
    </div>
  );
}
