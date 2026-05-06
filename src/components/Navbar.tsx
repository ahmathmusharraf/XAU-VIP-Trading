import React from 'react';
import { motion } from 'motion/react';
import { Send, TrendingUp } from 'lucide-react';
import { TELEGRAM_LINK } from '../constants';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <motion.div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center glow-gold">
              <span className="text-black font-black text-xl">X</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">XAU VIP<span className="text-gold-500 text-3xl font-bold">+</span></span>
          </motion.div>
        </div>

        {/* Desktop Links */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-black tracking-[0.2em] text-gold-400 hover:text-white transition-colors"
          >
            HOME
          </button>
          <motion.button 
            onClick={() => window.open(TELEGRAM_LINK, '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black border border-white/20 text-white px-6 py-2.5 rounded font-black text-[11px] tracking-[0.2em] flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
          >
            <Send size={14} className="fill-current" /> JOIN TELEGRAM
          </motion.button>
        </motion.div>
      </div>
    </nav>
  );
}
