import { motion, AnimatePresence } from 'motion/react';
import { FEATURES, STATS, TELEGRAM_LINK } from '../constants';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Star, Send, Headphones, LineChart, Settings, ShieldCheck, GraduationCap, Users as UsersIcon, Lock, Instagram, Facebook, Music } from 'lucide-react';
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
  const row1 = [...REVIEWS_DATA.slice(0, 4), ...REVIEWS_DATA.slice(0, 4), ...REVIEWS_DATA.slice(0, 4)];
  const row2 = [...REVIEWS_DATA.slice(4, 8), ...REVIEWS_DATA.slice(4, 8), ...REVIEWS_DATA.slice(4, 8)];

  return (
    <div className="relative overflow-hidden py-10 md:py-20 -mx-4 px-4">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-500/10 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-acc-blue/10 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="flex flex-col gap-6 md:gap-10">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ 
              duration: 40, 
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
            animate={{ x: [-2000, 0] }}
            transition={{ 
              duration: 50, 
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
  const [liveAmount, setLiveAmount] = React.useState(8450.21);
  const HERO_IMAGES = [
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/1.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/2.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/3.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/4.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/5.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/6.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/7.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/8.jpg",
    "https://raw.githubusercontent.com/ahmathmusharraf/XAU-VIP-Trading/refs/heads/main/XAU%20VIP%2B%20Images/9.jpg"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    const profitTimer = setInterval(() => {
      setLiveAmount(prev => {
        const change = (Math.random() * 5 + 0.5) * (Math.random() > 0.3 ? 1 : -0.2);
        return parseFloat((prev + change).toFixed(2));
      });
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(profitTimer);
    };
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
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center pt-28 md:pt-32 lg:pt-40 px-4">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,#d4a01715_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-acc-blue/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 xl:gap-24 items-center relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="text-center lg:text-left"
          >
            <motion.div 
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-12 md:mb-8"
            >
              <TrendingUp size={12} />
              Accurate • Consistent • Profitable
            </motion.div>
            
            <motion.h1 
              variants={item}
              className="text-[32px] sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black tracking-tight leading-[0.9] mb-3 md:mb-6"
            >
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="inline-block overflow-hidden pb-1"
              >
                XAU VIP<span className="text-gold-500">+</span>
              </motion.span><br />
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
                className="inline-block overflow-hidden pb-1 text-gradient-gold"
              >
                GOLD TRADING
              </motion.span><br />
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                className="inline-block overflow-hidden pb-1 text-white"
              >
                SIGNALS
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-xs sm:text-sm md:text-xl lg:text-2xl text-gray-400 max-w-sm md:max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 mb-5 md:mb-10 leading-relaxed font-semibold px-4 md:px-0"
            >
              Get high accuracy gold signals, market insights, and account flipping challenges from $1K to $10K.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-5 md:mb-8 max-w-xs sm:max-w-md mx-auto lg:mx-0 w-full">
              <motion.button
                onClick={() => window.open(TELEGRAM_LINK, '_blank')}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212, 160, 23, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gold-500 text-black px-6 md:px-12 py-3.5 md:py-5 lg:py-6 rounded-xl md:rounded-2xl font-black text-sm md:text-xl lg:text-2xl flex items-center justify-center gap-2 group glow-gold border-2 border-gold-400 w-full"
              >
                JOIN TELEGRAM 
                <Send className="group-hover:translate-x-1 transition-transform fill-black" size={20} />
              </motion.button>
            </motion.div>
            
            <motion.div variants={item} className="flex items-center justify-center lg:justify-start gap-2.5 md:gap-4 text-[10px] md:text-sm text-gray-500 font-bold tracking-tight uppercase">
              <CheckCircle2 size={14} className="text-gold-500" /> Trusted by 7000+ traders
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative block w-full"
          >
            {/* Background Chart Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />
            
            {/* Animated Image Carousel */}
            <div className="relative z-10 flex flex-col items-center mt-6 mb-12 lg:my-0 lg:ml-auto w-full max-w-[1050px]">
               <div className="relative w-full h-[280px] md:h-[500px] lg:h-[620px] xl:h-[750px] rounded-sm md:rounded-lg p-[1px] md:p-[2px] overflow-hidden bg-gold-900/50 shadow-2xl glow-gold mx-auto">
                  {/* Moving Gold Line Animation */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_160deg,rgba(212,160,23,0.8)_180deg,transparent_200deg,transparent_360deg)] pointer-events-none z-0"
                  />
                  
                  <div className="relative w-full h-full rounded-[1px] md:rounded-[4px] overflow-hidden bg-black z-10">
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
               </div>

                {/* Carousel Indicators */}
               <div className="absolute top-4 right-4 flex gap-1.5 z-40 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                 {HERO_IMAGES.map((_, i) => (
                   <button 
                     key={i} 
                     onClick={() => setHeroIndex(i)}
                     className={`h-1.5 rounded-full transition-all duration-500 ${heroIndex === i ? 'w-6 bg-gold-500' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                   />
                 ))}
               </div>
            </div>
          </motion.div>
        </div>

        {/* Live Results Bar - Center Highlight Section */}
        <div className="w-full mt-8 md:mt-12 mb-4 md:mb-6 px-4 relative z-30">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-acc-blue/10 via-acc-blue/5 to-acc-blue/20 blur-xl opacity-30 group-hover:opacity-60 transition-opacity" />
              
              <div className="relative bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 rounded-xl md:rounded-[24px] p-3 md:p-6 flex flex-row items-center justify-between gap-4 md:gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Left Side: Status */}
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-acc-blue/10 border border-acc-blue/20 flex items-center justify-center glow-blue transition-transform group-hover:scale-105 duration-500">
                    <TrendingUp className="text-acc-blue w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 md:gap-2 mb-0.5">
                       <span className="text-acc-blue font-black text-[10px] md:text-sm tracking-[0.2em] uppercase">Live</span>
                       <div className="w-1.5 h-1.5 rounded-full bg-acc-blue animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                    </div>
                    <div className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
                      Real-time
                      <span className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10 text-acc-blue text-[7px] md:text-[9px]">XAU/USD</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Data */}
                <div className="flex flex-col items-end">
                  <motion.div 
                    key={liveAmount}
                    initial={{ opacity: 0.8, filter: "brightness(1.5)" }}
                    animate={{ opacity: 1, filter: "brightness(1)" }}
                    className="text-xl md:text-4xl font-black font-mono tracking-tighter text-white"
                  >
                    +${Math.floor(liveAmount).toLocaleString()}<span className="text-acc-blue">.{(liveAmount % 1).toFixed(2).split('.')[1]}</span>
                  </motion.div>
                  <div className="flex items-center gap-1.5 mt-1">
                     <div className="h-0.5 w-8 bg-acc-blue/20 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: [-32, 32] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="h-full w-full bg-acc-blue"
                        />
                     </div>
                     <span className="text-[7px] md:text-[10px] font-black text-acc-blue/80 tracking-widest">+24.5%</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-acc-blue/5 blur-[30px] rounded-full -mr-12 -mt-12 pointer-events-none" />
                
                {/* Horizontal Scanline */}
                <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-acc-blue/20 to-transparent top-1/2 -translate-y-1/2 animate-scan pointer-events-none opacity-30" style={{ animationDuration: '3s' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 md:py-16 relative z-20">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 lg:gap-10"
          >
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="p-3.5 md:p-6 rounded-[20px] md:rounded-[32px] bg-white/[0.03] border border-white/5 text-center group transition-all"
              >
                <div className="mb-2.5 md:mb-4 flex justify-center">
                   <motion.div 
                      key={idx}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: idx * 0.1 + 0.2 }}
                      className="w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all"
                   >
                      <stat.icon size={14} />
                   </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                  className="text-lg md:text-3xl font-black mb-0.5 text-gradient-gold"
                >
                  {stat.value}
                </motion.div>
                <div className="text-[7px] md:text-[9px] font-black text-white/30 tracking-[0.2em] uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Media Row */}
      <section className="py-10 md:py-16 relative z-10 border-y border-white/5 bg-black/40">
        <div className="max-w-[1600px] mx-auto px-4 flex flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {[
              { icon: Send, label: 'Telegram', link: TELEGRAM_LINK, color: 'hover:text-gold-400' },
              { icon: Instagram, label: 'Instagram', link: 'https://www.instagram.com/xautrading.club', color: 'hover:text-pink-500' },
              { icon: Facebook, label: 'Facebook', link: 'https://www.facebook.com/people/XAU-VIP-Signals/61571500714876/', color: 'hover:text-blue-500' },
              { icon: Music, label: 'TikTok', link: 'https://www.tiktok.com/@xautrading.club', color: 'hover:text-cyan-400' }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex flex-col items-center gap-3 group transition-all duration-300 ${social.color}`}
              >
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-[20px] md:rounded-[28px] bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-current group-hover:bg-white/5 transition-all shadow-[0_0_0_0_transparent] group-hover:shadow-[0_10px_30px_-5px_currentColor] group-hover:shadow-current/20">
                  <social.icon size={24} className="md:w-8 md:h-8" />
                </div>
                <span className="text-[10px] md:text-sm font-black tracking-[0.2em] uppercase text-gray-500 group-hover:text-white transition-colors">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 w-full max-w-lg">
             <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent flex-1" />
             <div className="text-[10px] md:text-xs font-bold text-gray-600 tracking-[0.3em] uppercase">Connect With Us</div>
             <div className="h-px bg-gradient-to-l from-transparent via-gold-500/20 to-transparent flex-1" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 md:py-24 relative bg-[#050505]">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 md:mb-6 uppercase tracking-tight flex items-center justify-center gap-2 md:gap-6 text-center flex-nowrap md:flex-wrap">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                WHAT IS
              </motion.span> 
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gradient-gold"
              >
                XAU VIP+
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-white"
              >
                ?
              </motion.span>
            </h2>
            <div className="w-5 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto glow-gold" />
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10"
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
                <motion.div 
                  initial={{ y: 0 }}
                  whileInView={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-1.5 md:mb-6 w-5 h-5 md:w-14 md:h-14 rounded-sm md:rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 scale-110 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 shadow-[inset_0_0_20px_rgba(238,176,26,0.1)]"
                >
                  <feature.icon size={10} className="md:w-6 md:h-6" />
                </motion.div>
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
      <section className="py-12 md:py-24 px-4 bg-white/[0.02]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 md:mb-6 uppercase tracking-tight flex items-center justify-center gap-2 md:gap-6 text-center flex-nowrap md:flex-wrap">
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                CLIENT
              </motion.span> 
              <motion.span 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gradient-gold uppercase"
              >
                REVIEWS
              </motion.span>
            </h2>
            <div className="w-5 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto glow-gold" />
          </div>

          <ReviewSlider />
        </div>
      </section>

      {/* CTA Section - Blue Neon Theme */}
      <section className="py-12 md:py-24 px-4 bg-black relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative p-0.5 md:p-1 rounded-[20px] md:rounded-[50px] bg-gradient-to-r from-acc-blue/50 via-acc-blue/20 to-acc-blue/50 group">
            <div className="absolute inset-0 bg-acc-blue/20 blur-3xl group-hover:bg-acc-blue/30 transition-all duration-500 opacity-50" />
            
            <div className="relative bg-black rounded-[18px] md:rounded-[48px] p-6 md:p-16 flex flex-col lg:flex-row items-center gap-8 md:gap-12 border border-acc-blue/30">
              {/* Left: Large Icon */}
              <div className="shrink-0 w-16 h-16 md:w-32 md:h-32 rounded-full border border-acc-blue/50 flex items-center justify-center bg-acc-blue/5 glow-blue">
                <Send size={24} className="text-acc-blue fill-acc-blue/20 md:w-12 md:h-12" />
              </div>

              {/* Center: Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl font-black mb-4 tracking-tighter uppercase leading-[0.9]"
                >
                  <span className="text-white">READY TO TAKE YOUR</span> <br className="hidden md:block" />
                  <span className="text-acc-blue">TRADING TO THE</span> <span className="text-gradient-gold">NEXT LEVEL?</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-xs md:text-lg lg:text-xl font-bold max-w-xl mx-auto lg:mx-0 uppercase tracking-wide opacity-80"
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
                  className="w-full lg:w-auto bg-acc-blue text-black px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-lg md:text-xl lg:text-2xl flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(14,165,233,0.4)] hover:shadow-[0_0_60px_rgba(14,165,233,0.7)] transition-all duration-300"
                >
                  <Send size={24} className="fill-black" />
                   <span className="flex overflow-hidden">
                    {"JOIN TELEGRAM".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.05,
                          ease: "easeInOut"
                        }}
                        className={char === " " ? "w-2 md:w-3" : ""}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
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
