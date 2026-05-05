import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Zap, Send, TrendingUp, Lock } from 'lucide-react';
import { TELEGRAM_LINK } from '../constants';

interface NavbarProps {
  activePage: 'home' | 'premium';
  setPage: (page: 'home' | 'premium') => void;
}

export default function Navbar({ activePage, setPage }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <motion.div 
          onClick={() => setPage('home')}
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center glow-gold">
            <span className="text-black font-black text-xl">X</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">XAU VIP<span className="text-gold-500 text-3xl font-bold">+</span></span>
        </motion.div>

        {/* Desktop Links */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          <button 
            onClick={() => setPage('home')}
            className={`text-xs font-black tracking-[0.2em] transition-colors ${activePage === 'home' ? 'text-gold-400' : 'text-gray-400 hover:text-white'}`}
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

        {/* Mobile Toggle */}
        <button className="md:hidden text-white bg-white/5 p-2 rounded-lg border border-white/10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] md:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl" onClick={() => setIsOpen(false)} />
            
            <motion.div 
              className="absolute top-0 right-0 w-[80%] h-full bg-black border-l border-white/10 p-8 flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-gold-500 font-black tracking-[0.3em] text-[10px] uppercase">Navigation</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white bg-white/5 rounded-full border border-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  { label: 'HOME', page: 'home' }
                ].map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => { setPage(item.page as any); setIsOpen(false); }}
                    className={`text-left text-2xl font-black tracking-tight ${activePage === item.page ? 'text-gold-500' : 'text-white'} transition-colors`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <div className="h-px bg-white/5 mb-8" />
                <motion.button 
                  onClick={() => window.open(TELEGRAM_LINK, '_blank')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full bg-gold-500 text-black py-4 rounded-2xl font-black text-sm tracking-widest flex items-center justify-center gap-2 glow-gold mb-8"
                >
                  <Send size={16} className="fill-black" /> JOIN TELEGRAM
                </motion.button>
                <div className="flex justify-center gap-8 text-gray-700">
                  <Zap size={20} />
                  <TrendingUp size={20} />
                  <Lock size={20} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
