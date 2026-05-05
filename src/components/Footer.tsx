import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black text-center px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-2">
        <h3 className="text-white/80 font-black tracking-[0.2em] text-[10px] md:text-xs uppercase">
          XAU VIP+ <span className="text-white/20 mx-2">|</span> GOLD TRADING SIGNALS
        </h3>
        <p className="text-white/30 font-bold text-[8px] md:text-[10px] tracking-widest uppercase">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
      {/* Spacer for mobile nav */}
      <div className="h-24 md:hidden" />
    </footer>
  );
}
