import { motion, AnimatePresence } from 'motion/react';
import { FEATURES, STATS, TELEGRAM_LINK } from '../constants';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Star, Send, Headphones, LineChart, Settings, ShieldCheck, GraduationCap, Users as UsersIcon, Lock } from 'lucide-react';
import React from 'react';

const REVIEWS_DATA = [
  { text: "Another clean gold scalp! +98 pips. XAU VIP+ never misses!", user: "TradingKing_99", profit: "+$1,450", pair: "XAUUSD" },
  { text: "Hit TP! Beautiful sell setup. Thank you XAU VIP+ TEAM.", user: "ForexQueen", profit: "+$890", pair: "XAUUSD" },
  { text: "The best gold signal group I have ever joined. Consistency is key.", user: "PipMaster_X", profit: "+$2,200", pair: "XAUUSD" },
  { text: "Joined with $1k, now at $4.2k in just 2 weeks. Challenges are real!", user: "GoldSniper", profit: "+$3,200", pair: "XAUUSD" },
  { text: "Precision entries minimized my drawdowns. Highly recommend for serious traders.", user: "Marco_Trade", profit: "+$1,100", pair: "XAUUSD" },
  { text: "NY session signals are pure fire. TP hits while I'm at work.", user: "NYS_Trader", profit: "+$950", pair: "XAUUSD" },
  { text: "The most transparent team in the game. Real results, real profits.", user: "London_FX", profit: "+$1,820", pair: "XAUUSD" },
  { text: "Flipped $500 to $2k following the risk management rules. Insane!", user: "SmallAccount_Pro", profit: "+$1,500", pair: "XAUUSD" }
];

function ReviewSlider() {
  const [index, setIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 4;
  const groups = Array.from({ length: Math.ceil(REVIEWS_DATA.length / itemsPerPage) }, (_, i) =>
    REVIEWS_DATA.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % groups.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [groups.length]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${index}-${itemsPerPage}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {groups[index]?.map((review) => (
            <div
              key={review.user}
              className="p-4 md:p-6 rounded-[20px] md:rounded-[32px] bg-black border border-white/10 relative overflow-hidden group hover:border-gold-500/50 transition-all duration-500 shadow-2xl flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-acc-blue via-gold-500 to-acc-blue opacity-30" />
              
              <div className="flex justify-between items-start mb-4 md:mb-8">
                <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                   <div className="text-[8px] md:text-[10px] font-black tracking-widest text-gray-500 uppercase">Pair</div>
                   <div className="text-xs md:text-sm font-black text-white">{review.pair} <span className="text-gold-500 uppercase">sell</span></div>
                </div>
                <div className="text-right text-acc-blue">
                   <div className="text-[8px] md:text-[10px] font-black tracking-widest text-gray-400 uppercase italic">Status</div>
                   <div className="text-xs md:text-sm font-black uppercase flex items-center justify-end gap-1">Hit TP <CheckCircle2 size={12} /></div>
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-xs md:text-lg font-bold text-white mb-4 md:mb-10 leading-tight md:leading-snug">"{review.text}"</p>
              </div>
              
              <div className="flex items-center justify-between pt-3 md:pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-900 border border-gold-400 p-0.5 shadow-lg" />
                  <span className="font-bold text-white/50 text-[10px] md:text-sm">@{review.user}</span>
                </div>
                <div>
                  <div className="text-[8px] md:text-[10px] font-black tracking-widest text-gray-500 uppercase text-right mb-0.5 md:mb-1">Profit</div>
                  <div className="text-sm md:text-2xl font-black font-mono text-acc-blue">{review.profit} <span className="text-[10px]">USD</span></div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 md:mt-20 flex justify-center gap-2 md:gap-3">
        {groups.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 md:h-1.5 transition-all duration-500 rounded-full ${
              index === i ? 'w-8 md:w-12 bg-gold-500 glow-gold' : 'w-1.5 md:w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 md:pt-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,#d4a01715_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-acc-blue/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="text-center lg:text-left"
          >
            <motion.div 
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-6 md:mb-8"
            >
              <TrendingUp size={12} />
              Accurate • Consistent • Profitable
            </motion.div>
            
            <motion.h1 
              variants={item}
              className="text-4xl md:text-8xl font-black tracking-tight leading-[0.9] mb-4 md:mb-6"
            >
              XAU VIP<span className="text-gold-500">+</span><br />
              <span className="text-gradient-gold">GOLD TRADING</span><br />
              <span className="text-white">SIGNALS</span>
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-xs md:text-xl text-gray-400 max-w-sm md:max-w-xl mx-auto lg:mx-0 mb-6 md:mb-10 leading-relaxed font-semibold"
            >
              Get high accuracy gold signals, market insights, and account flipping challenges from $1K to $10K.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 max-w-xs mx-auto lg:mx-0">
              <motion.button
                onClick={() => window.open(TELEGRAM_LINK, '_blank')}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212, 160, 23, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gold-500 text-black px-6 md:px-12 py-3.5 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-xl flex items-center justify-center gap-2 group glow-gold border-2 border-gold-400"
              >
                JOIN TELEGRAM 
                <Send className="group-hover:translate-x-1 transition-transform fill-black" size={16} />
              </motion.button>
            </motion.div>
            
            <motion.div variants={item} className="flex items-center justify-center lg:justify-start gap-2.5 md:gap-4 text-[10px] md:text-sm text-gray-500 font-bold tracking-tight uppercase">
              <CheckCircle2 size={14} className="text-gold-500" /> Trusted by 1k+ traders
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Background Chart Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none" />
            
            {/* Gold Bars & Bull Representation */}
            <div className="relative z-10 flex flex-col items-center">
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="relative"
               >
                 <img 
                   src="https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2070&auto=format&fit=crop" 
                   alt="Gold Bars"
                   className="w-[550px] h-auto rounded-[40px] glow-gold border border-gold-500/20 shadow-2xl rotate-2" 
                   referrerPolicy="no-referrer"
                 />
                 
                 {/* Daily Scalps Badge (matching image) */}
                 <div className="absolute -top-10 -right-10 bg-black/80 backdrop-blur-xl border-2 border-gold-500 p-6 rounded-2xl glow-gold flex flex-col items-center text-center -rotate-3 scale-110">
                    <span className="text-gray-400 text-[10px] font-black tracking-widest uppercase">Daily</span>
                    <span className="text-4xl font-black text-white">5-6</span>
                    <span className="text-gold-500 text-[11px] font-black tracking-tighter uppercase">Solid Scalps</span>
                    <div className="text-[10px] font-bold text-gray-400 mt-1">BUY & SELL SIGNALS</div>
                 </div>
               </motion.div>

               {/* Growth Card */}
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.8 }}
                 className="absolute -bottom-10 -left-10 bg-black/90 backdrop-blur-2xl p-6 rounded-3xl border border-white/10 glow-blue rotate-[-5deg] z-20"
               >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-acc-blue/20 flex items-center justify-center">
                      <TrendingUp className="text-acc-blue" size={16} />
                    </div>
                    <span className="text-acc-blue font-black text-sm tracking-widest">HITS TP VERIFIED</span>
                  </div>
                  <div className="text-2xl font-black font-mono">+$8,450.21</div>
                  <div className="flex gap-1 mt-2">
                    <div className="h-1 w-8 bg-acc-blue rounded-full" />
                    <div className="h-1 w-4 bg-acc-blue/30 rounded-full" />
                    <div className="h-1 w-12 bg-acc-blue/60 rounded-full" />
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-24 relative z-20">
        <div className="max-w-[1440px] mx-auto px-4">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="p-3.5 md:p-6 rounded-[20px] md:rounded-[32px] bg-white/[0.03] border border-white/5 text-center group transition-all"
              >
                <div className="mb-2.5 md:mb-4 flex justify-center">
                   <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
                      <stat.icon size={14} />
                   </div>
                </div>
                <div className="text-lg md:text-3xl font-black mb-0.5 text-gradient-gold">{stat.value}</div>
                <div className="text-[7px] md:text-[9px] font-black text-white/30 tracking-[0.2em] uppercase italic">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-6 md:py-32 px-4 relative bg-[#050505]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-4 md:mb-20">
            <h2 className="text-[11px] md:text-6xl font-black mb-1 md:mb-6 uppercase tracking-tight italic flex items-center justify-center gap-1.5 md:gap-4 text-center flex-wrap">
              <span className="text-white">WHAT IS</span> 
              <span className="text-gradient-gold">XAU VIP+</span>
              <span className="text-white">?</span>
            </h2>
            <div className="w-5 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto glow-gold" />
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-6"
          >
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
                className="p-2 md:p-8 rounded-[10px] md:rounded-[40px] bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:bg-gold-500/5 hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="mb-1.5 md:mb-6 w-5 h-5 md:w-14 md:h-14 rounded-sm md:rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 scale-110 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 shadow-[inset_0_0_20px_rgba(238,176,26,0.1)]">
                  <feature.icon size={10} className="md:w-6 md:h-6" />
                </div>
                <h3 className="text-[7.5px] md:text-lg font-black mb-0.5 md:mb-3 h-3 md:h-12 flex items-center tracking-tight text-white leading-none uppercase text-center">{feature.title}</h3>
                <p className="text-gray-500 text-[6.5px] md:text-sm font-medium leading-[1.1] md:leading-relaxed group-hover:text-gray-300 transition-colors px-0.5">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 md:py-40 px-4 bg-white/[0.02]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-10 md:mb-24">
            <h2 className="text-2xl md:text-7xl font-black mb-4 md:mb-8 uppercase tracking-tight italic flex items-center justify-center gap-2 md:gap-4 text-center flex-wrap">
              <span className="text-white">⭐ CLIENT</span> <span className="text-gradient-gold uppercase">REVIEWS</span>
            </h2>
            <div className="w-16 md:w-32 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto glow-gold" />
          </div>

          <ReviewSlider />
        </div>
      </section>

      {/* CTA Section - Blue Neon Theme */}
      <section className="py-12 md:py-32 px-4 bg-black relative">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative p-0.5 md:p-1 rounded-[20px] md:rounded-[40px] bg-gradient-to-r from-acc-blue/50 via-acc-blue/20 to-acc-blue/50 group">
            <div className="absolute inset-0 bg-acc-blue/20 blur-3xl group-hover:bg-acc-blue/30 transition-all duration-500 opacity-50" />
            
            <div className="relative bg-black rounded-[18px] md:rounded-[36px] p-4 md:p-14 flex flex-col lg:flex-row items-center gap-6 md:gap-14 border border-acc-blue/30">
              {/* Left: Large Icon */}
              <div className="shrink-0 w-12 h-12 md:w-28 md:h-28 rounded-full border border-acc-blue/50 flex items-center justify-center bg-acc-blue/5 glow-blue">
                <Send size={20} className="text-acc-blue fill-acc-blue/20 md:w-10 md:h-10" />
              </div>

              {/* Center: Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-5xl font-black mb-3 tracking-tighter italic uppercase leading-[0.9]"
                >
                  <span className="text-white">READY TO TAKE YOUR</span> <br className="hidden md:block" />
                  <span className="text-acc-blue">TRADING TO THE</span> <span className="text-gradient-gold">NEXT LEVEL?</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-[10px] md:text-lg font-bold max-w-xl mx-auto lg:mx-0 uppercase tracking-wide opacity-80"
                >
                  Join XAU VIP+ now and start your journey towards consistent profits.
                </motion.p>
              </div>

              {/* Right: Button & Badges */}
              <div className="flex flex-col items-center gap-3 md:gap-5 w-full lg:w-auto">
                <motion.button 
                  onClick={() => window.open(TELEGRAM_LINK, '_blank')}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileTap={{ opacity: 0.8 }}
                  className="w-full lg:w-auto bg-acc-blue text-black px-6 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-xl flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(14,165,233,0.4)] hover:shadow-[0_0_60px_rgba(14,165,233,0.7)] transition-all duration-300"
                >
                  <Send size={20} className="fill-black" /> JOIN TELEGRAM
                </motion.button>
                
                <div className="flex items-center gap-4 md:gap-6 text-[8px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-acc-blue" /> SECURE</span>
                  <span className="text-gray-800">|</span>
                  <span className="flex items-center gap-1"><Lock size={12} className="text-acc-blue" /> PRIVATE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits Bar */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10 overflow-hidden">
               <div className="h-px bg-gradient-to-r from-transparent to-acc-blue/30 flex-1" />
               <h3 className="text-acc-blue font-black tracking-[0.2em] uppercase text-[10px] md:text-lg italic">Additional Benefits</h3>
               <div className="h-px bg-gradient-to-l from-transparent to-acc-blue/30 flex-1" />
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4">
              {[
                { icon: Headphones, label: "24/7 SUPPORT" },
                { icon: LineChart, label: "DAILY ANALYSIS" },
                { icon: Settings, label: "TRADE MGMT" },
                { icon: ShieldCheck, label: "RISK MGMT" },
                { icon: GraduationCap, label: "EDUCATION" },
                { icon: UsersIcon, label: "COMMUNITY" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center gap-2 group"
                >
                  <motion.div 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                    className="p-2 md:p-2.5 rounded-lg md:rounded-xl border border-acc-blue/10 bg-acc-blue/5 text-acc-blue glow-blue group-hover:bg-acc-blue group-hover:text-black transition-all"
                  >
                    <item.icon size={14} className="md:w-[18px] md:h-[18px]" />
                  </motion.div>
                  <span className="text-[7px] md:text-[11px] font-black tracking-widest text-gray-500 group-hover:text-white transition-colors">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
