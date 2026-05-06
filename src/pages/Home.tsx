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
  const row1 = [...REVIEWS_DATA.slice(0, 4), ...REVIEWS_DATA.slice(0, 4)];
  const row2 = [...REVIEWS_DATA.slice(4, 8), ...REVIEWS_DATA.slice(4, 8)];

  return (
    <div className="relative overflow-hidden py-10 md:py-20 -mx-4 px-4">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-500/10 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-acc-blue/10 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="flex flex-col gap-6 md:gap-10">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
            }}
            className="flex gap-4 md:gap-8 pr-4 md:pr-8 hover:[animation-play-state:paused]"
          >
            {row1.map((review, i) => (
              <ReviewCard key={`r1-${i}`} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear",
            }}
            className="flex gap-4 md:gap-8 pr-4 md:pr-8"
          >
            {row2.map((review, i) => (
              <ReviewCard key={`r2-${i}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Side Fades for Infinite Look */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
}

interface ReviewCardProps {
  review: {
    text: string;
    user: string;
    profit: string;
    pair: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="w-[240px] md:w-[320px] shrink-0 p-3 md:p-5 rounded-[20px] md:rounded-[32px] bg-[#0A0A0A] border border-white/5 relative group transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-14 md:w-20 h-14 md:h-20 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-tr-[32px] pointer-events-none" />
      
      <div className="flex items-start justify-between mb-3 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-900 p-0.5 shadow-lg">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-black text-gold-500 text-[10px] md:text-sm">
              {review.user[0]}
            </div>
          </div>
          <div>
            <div className="text-[10px] md:text-sm font-black text-white">@{review.user}</div>
            <div className="flex items-center gap-1">
               <Star size={8} className="fill-gold-500 text-gold-500" />
               <Star size={8} className="fill-gold-500 text-gold-500" />
               <Star size={8} className="fill-gold-500 text-gold-500" />
               <Star size={8} className="fill-gold-500 text-gold-500" />
               <Star size={8} className="fill-gold-500 text-gold-500" />
            </div>
          </div>
        </div>
        <div className="bg-acc-blue/10 border border-acc-blue/20 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(14,165,233,0.1)]">
           <div className="w-1 h-1 rounded-full bg-acc-blue animate-pulse" />
           <span className="text-[7px] md:text-[9px] font-black text-acc-blue tracking-widest uppercase">Verified</span>
        </div>
      </div>

      <p className="text-xs md:text-lg font-bold text-white mb-4 md:mb-8 leading-tight tracking-tight italic">"{review.text}"</p>
      
      <div className="grid grid-cols-2 gap-3 pt-3 md:pt-6 border-t border-white/5">
        <div>
          <div className="text-[7px] md:text-[9px] font-black tracking-widest text-gray-500 uppercase mb-1">Asset</div>
          <div className="text-[10px] md:text-sm font-black text-white flex items-center gap-1 uppercase">
            {review.pair} <span className="bg-gold-500/20 text-gold-500 px-1 py-0.5 rounded text-[7px] md:text-[9px]">SELL</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[7px] md:text-[9px] font-black tracking-widest text-gray-500 uppercase mb-1">Profit Secured</div>
          <div className="text-xs md:text-xl font-black font-mono text-acc-blue">{review.profit} <span className="text-[8px] md:text-xs">USD</span></div>
        </div>
      </div>
      
      {/* Interactive Hover Glow */}
      <div className="absolute inset-0 rounded-[32px] bg-gold-500/0 group-hover:bg-gold-500/[0.02] transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default function Home() {
  const [heroIndex, setHeroIndex] = React.useState(0);
  const HERO_IMAGES = [
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/1.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/2.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/3.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/4.jpg"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center pt-16 md:pt-32 px-4">
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative block order-first lg:order-last w-full"
          >
            {/* Background Chart Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none" />
            
            {/* Animated Image Carousel */}
            <div className="relative z-10 flex flex-col items-center mt-2 mb-10 lg:my-0">
               <div className="relative w-full max-w-[550px] md:max-w-[1050px] h-[320px] md:h-[620px] rounded-[32px] md:rounded-[80px] overflow-hidden rotate-1 md:rotate-2 border border-gold-500/20 shadow-2xl glow-gold mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={heroIndex}
                      src={HERO_IMAGES[heroIndex]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1.05 }}
                      exit={{ opacity: 0, scale: 1.15 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt="Gold Trading"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               </div>
                            {/* Daily Scalps Badge */}
                <motion.div 
                 initial={{ opacity: 0, rotate: 10, y: 20 }}
                 animate={{ opacity: 1, rotate: -3, y: 0 }}
                 transition={{ delay: 1, duration: 0.8 }}
                 whileHover={{ scale: 1.1, rotate: 0 }}
                 className="absolute -top-1 -right-1 md:-top-12 md:-right-12 bg-black/80 backdrop-blur-xl border border-gold-500/50 p-2 md:p-5 rounded-[16px] md:rounded-[24px] glow-gold flex flex-col items-center text-center scale-[0.6] md:scale-110 z-30 shadow-[0_20px_40px_rgba(212,160,23,0.3)] group/badge overflow-hidden origin-center"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent pointer-events-none" />
                  <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-gold-500/20 flex items-center justify-center mb-0.5 md:mb-2 border border-gold-500/30">
                     <Zap size={10} className="text-gold-500 md:w-4 md:h-4 group-hover/badge:animate-pulse" />
                  </div>
                  <span className="text-gray-400 text-[6px] md:text-[9px] font-black tracking-widest uppercase">Expert Daily</span>
                  <div className="flex items-baseline gap-0.5 md:gap-1">
                    <span className="text-lg md:text-4xl font-black text-white">5-6</span>
                    <span className="text-gold-500 text-[8px] md:text-xs font-black">+</span>
                  </div>
                  <span className="text-gold-500 text-[7px] md:text-[10px] font-black tracking-tighter uppercase mb-0.5 md:mb-2 text-nowrap">High-Win Scalps</span>
                  
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={4} className="fill-gold-500 text-gold-500 md:w-2 md:h-2" />
                    ))}
                  </div>
                </motion.div>

                {/* Growth Card */}
                <motion.div 
                 initial={{ opacity: 0, x: -20, rotate: 5 }}
                 animate={{ opacity: 1, x: 0, rotate: -5 }}
                 transition={{ delay: 1.2, duration: 0.8 }}
                 whileHover={{ scale: 1.05, rotate: -2 }}
                 className="absolute -bottom-1 -left-1 md:-bottom-10 md:-left-10 bg-black/60 backdrop-blur-[20px] p-2 md:p-7 rounded-[20px] md:rounded-[32px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group/card z-20 overflow-hidden scale-[0.6] md:scale-100 origin-center"
               >
                  {/* Internal Glow */}
                  <div className="absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 bg-acc-blue/10 blur-[30px] md:blur-[40px] rounded-full -mr-10 -mt-10 md:-mr-16 md:-mt-16 pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-1 md:mb-4 relative z-10">
                    <div className="flex items-center gap-1.5 md:gap-3">
                      <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-acc-blue/20 flex items-center justify-center border border-acc-blue/30 glow-blue">
                        <TrendingUp className="text-acc-blue w-3 h-3 md:w-4 md:h-4 group-hover/card:scale-110 transition-transform" size={12} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 md:gap-2">
                           <span className="text-acc-blue font-black text-[7px] md:text-xs tracking-[0.1em] uppercase">Live Results</span>
                           <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-acc-blue animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                        </div>
                        <div className="text-[6px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1 md:gap-2">
                          Real-time
                          <span className="bg-white/5 px-1 py-0.5 rounded border border-white/10 text-acc-blue text-[6px] md:text-[8px]">XAU/USD</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-base md:text-4xl font-black font-mono tracking-tighter text-white mb-0 md:mb-1">
                      +$8,450<span className="text-acc-blue">.21</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                       <div className="flex gap-0.5">
                         <div className="h-0.5 md:h-1 w-3 md:w-6 bg-acc-blue rounded-full group-hover/card:w-8 transition-all duration-500" />
                         <div className="h-0.5 md:h-1 w-1 md:w-2 bg-acc-blue/30 rounded-full" />
                         <div className="h-0.5 md:h-1 w-1.5 md:w-4 bg-acc-blue/60 rounded-full" />
                       </div>
                       <span className="text-[6px] md:text-[10px] font-black text-acc-blue/80">+24.5%</span>
                    </div>
                  </div>

                  {/* Scanline Effect */}
                  <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-acc-blue/20 to-transparent top-1/2 -translate-y-1/2 animate-scan" style={{ animationDuration: '3s' }} />
               </motion.div>

               {/* Carousel Indicators */}
               <div className="absolute bottom-6 flex gap-2 z-40">
                 {HERO_IMAGES.map((_, i) => (
                   <div 
                     key={i} 
                     className={`h-1 rounded-full transition-all duration-500 ${heroIndex === i ? 'w-8 bg-gold-500' : 'w-2 bg-white/30'}`}
                   />
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 md:py-10 relative z-20">
        <div className="max-w-[1440px] mx-auto px-4">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6"
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
                <div className="text-[7px] md:text-[9px] font-black text-white/30 tracking-[0.2em] uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-6 md:py-10 relative bg-[#050505]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-6xl font-black mb-1 md:mb-6 uppercase tracking-tight flex items-center justify-center gap-1.5 md:gap-4 text-center flex-wrap">
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
      <section className="py-6 md:py-12 px-4 bg-white/[0.02]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-6xl font-black mb-1 md:mb-6 uppercase tracking-tight flex items-center justify-center gap-1.5 md:gap-4 text-center flex-wrap">
              <span className="text-white">CLIENT</span> 
              <span className="text-gradient-gold uppercase">REVIEWS</span>
            </h2>
            <div className="w-5 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto glow-gold" />
          </div>

          <ReviewSlider />
        </div>
      </section>

      {/* CTA Section - Blue Neon Theme */}
      <section className="py-6 md:py-12 px-4 bg-black relative">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative p-0.5 md:p-1 rounded-[20px] md:rounded-[40px] bg-gradient-to-r from-acc-blue/50 via-acc-blue/20 to-acc-blue/50 group">
            <div className="absolute inset-0 bg-acc-blue/20 blur-3xl group-hover:bg-acc-blue/30 transition-all duration-500 opacity-50" />
            
            <div className="relative bg-black rounded-[18px] md:rounded-[36px] p-4 md:p-10 flex flex-col lg:flex-row items-center gap-6 md:gap-8 border border-acc-blue/30">
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
                  className="text-lg md:text-5xl font-black mb-3 tracking-tighter uppercase leading-[0.9]"
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
               <h3 className="text-acc-blue font-black tracking-[0.2em] uppercase text-[10px] md:text-lg">Additional Benefits</h3>
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
