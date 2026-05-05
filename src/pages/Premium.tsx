import { motion } from 'motion/react';
import { DollarSign, Rocket, Target, ShieldCheck, Zap, ArrowRight, BarChart3, Lock, Send } from 'lucide-react';
import { TELEGRAM_LINK } from '../constants';

const BENEFITS_LIST = [
  {
    title: "ACCOUNT FLIPPING CHALLENGES",
    desc: "Our signature challenges from $1K to $10K and $500 to $5K. We provide the exact entry/exit strategy.",
    icon: Rocket,
    color: "bg-gold-500"
  },
  {
    title: "PRECISION ENTRIES",
    desc: "Market sniper entries with minimum drawdowns. We trade gold with precision using institutional levels.",
    icon: Target,
    color: "bg-acc-blue"
  },
  {
    title: "1-ON-1 MENTALITY COACHING",
    desc: "Access to private sessions for psychology and discipline management which is 90% of trading.",
    icon: ShieldCheck,
    color: "bg-gold-500"
  },
  {
    title: "ELITE COMMUNITY ACCESS",
    desc: "Network with professional full-time traders who trade the NY and London sessions daily.",
    icon: BarChart3,
    color: "bg-acc-blue"
  }
];

export default function Premium() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemY = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#030303] overflow-hidden relative">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-gold-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-acc-blue/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>

      <section className="py-12 md:py-20 px-4 relative z-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Creative Header */}
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
            className="text-center mb-12 md:mb-32"
          >
            <motion.div
              variants={itemY}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8"
            >
              <Zap size={14} className="fill-gold-500" />
              THE XAU EXPERIENCE
            </motion.div>
            
            <motion.h1 
              variants={itemY}
              className="text-3xl md:text-9xl font-black mb-4 md:mb-8 italic uppercase tracking-tighter leading-[0.8] relative inline-block"
            >
              <span className="text-white relative z-10">ELITE</span> <br className="md:hidden" />
              <span className="text-gradient-gold relative z-10">PREMIUM</span> <br className="md:hidden" />
              <span className="text-white relative z-10">BENEFITS</span>
              
              {/* Decorative behind text */}
              <div className="absolute -top-4 -right-8 text-gold-500/10 text-6xl rotate-12 select-none pointer-events-none hidden md:block">VIP+</div>
            </motion.h1>
            
            <motion.p 
              variants={itemY}
              className="text-gray-400 max-w-2xl mx-auto text-sm md:text-xl font-bold uppercase tracking-tight opacity-70 leading-relaxed"
            >
              We don't just provide signals; we provide a complete trading ecosystem designed for consistent wealth generation.
            </motion.p>
          </motion.div>

          {/* Benefits Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-16 md:mb-32">
            {BENEFITS_LIST.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group relative rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 bg-white/[0.02] p-5 md:p-12 hover:border-gold-500/30 transition-all duration-500 ${
                  i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                {/* Pattern Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>
                
                <div className="flex flex-col h-full relative z-10">
                  <motion.div 
                    animate={floatingAnimation}
                    className={`w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-3xl ${benefit.color} flex items-center justify-center text-black shadow-2xl shadow-black/50 mb-5 md:mb-8 transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    <benefit.icon size={28} className="md:w-8 md:h-8" />
                  </motion.div>
                  
                  <h3 className="text-xl md:text-4xl font-black mb-3 md:mb-4 text-white leading-[0.9] uppercase italic tracking-tighter">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm md:text-lg font-bold uppercase tracking-tight opacity-60 leading-snug max-w-md group-hover:text-gray-300 transition-colors">
                    {benefit.desc}
                  </p>
                  
                  <div className="mt-auto pt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-500 text-gold-500 font-black text-xs tracking-widest uppercase">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>

                {/* Decorative Gradient */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* New Interactive Section: The Elite Ecosystem */}
          <div className="relative mb-16 md:mb-48">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5 hidden md:block" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/5 hidden md:block" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative p-6 md:p-20 rounded-[40px] md:rounded-[80px] bg-white/[0.03] border border-white/10 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#0ea5e910_0%,transparent_50%)] pointer-events-none" />
                  
                  <div className="mb-6 md:mb-10 p-4 md:p-8 rounded-[24px] md:rounded-[32px] bg-gold-500 text-black flex items-center justify-between shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500">
                    <div>
                      <div className="text-[10px] font-black tracking-widest uppercase opacity-70 mb-1">Current Performance Metrics</div>
                      <div className="text-3xl md:text-6xl font-black tracking-tighter leading-none italic">92.4% <span className="text-[8px] md:text-xs align-top mt-1 md:mt-2 inline-block">WIN RATE</span></div>
                    </div>
                    <div className="bg-black/10 p-2 md:p-4 rounded-xl md:rounded-2xl">
                      <TrendingUp className="w-8 h-8 md:w-12 md:h-12 opacity-80" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-5xl font-black mb-6 md:mb-8 leading-[0.9] uppercase italic tracking-tighter">
                    <span className="text-white">Why settle for</span> <span className="text-gray-500/50">average</span> <br />
                    <span className="text-white">when you can trade with the</span> <span className="text-gold-500">best?</span>
                  </h3>
                  
                  <ul className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                    {[
                      "NY Session Exclusive Sniper Setups",
                      "Risk-Reward Ratio 1:3 Minimum",
                      "Daily News Impact Predictions",
                      "Trading Education & Weekly Webinars"
                    ].map((text, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (idx * 0.1) }}
                        className="flex items-center gap-4 text-sm md:text-lg font-bold text-gray-400 uppercase tracking-tight"
                      >
                        <div className="w-6 h-6 rounded-lg bg-acc-blue/10 border border-acc-blue/20 flex items-center justify-center text-acc-blue shrink-0">
                          <Zap size={14} fill="currentColor" />
                        </div>
                        {text}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button 
                    onClick={() => window.open(TELEGRAM_LINK, '_blank')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-6 rounded-[32px] bg-white text-black font-black text-xl hover:bg-gold-500 transition-all duration-300 flex items-center justify-center gap-3 relative z-10 shadow-xl overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-3 font-black">
                      <Lock size={20} fill="currentColor" /> UNLOCK PREMIUM ACCESS
                    </span>
                  </motion.button>
                </div>

                {/* Decorative floating stats */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-10 -right-10 md:-top-16 md:-right-16 p-6 rounded-3xl bg-black border border-acc-blue/30 shadow-2xl shadow-acc-blue/20 hidden lg:block"
                >
                  <BarChart3 size={24} className="text-acc-blue mb-2" />
                  <div className="text-white font-black text-2xl tracking-tighter italic">LIVE FEED</div>
                  <div className="text-[10px] text-acc-blue font-bold tracking-widest uppercase">Active Signals</div>
                </motion.div>
              </motion.div>

              <div className="flex flex-col gap-6 md:gap-8">
                <div className="text-left">
                  <h2 className="text-2xl md:text-7xl font-black mb-4 md:mb-6 uppercase italic tracking-tighter leading-[0.85]">
                    <span className="text-white">THE MOST</span> <br />
                    <span className="text-gradient-gold">TRANSPARENT</span> <br />
                    <span className="text-white">ECOSYSTEM.</span>
                  </h2>
                  <p className="text-gray-400 text-xs md:text-xl font-bold uppercase tracking-tight opacity-50 mb-6 md:mb-8 max-w-md">
                    We track every single trade. Every pair, every pips, every result is documented and public.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="p-4 md:p-6 rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/10">
                      <div className="text-xl md:text-3xl font-black text-white italic tracking-tighter">+8,400</div>
                      <div className="text-[7px] md:text-[8px] font-black text-gold-500 uppercase tracking-widest">Monthly Pips</div>
                    </div>
                    <div className="p-4 md:p-6 rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/10">
                      <div className="text-xl md:text-3xl font-black text-white italic tracking-tighter">0.5%</div>
                      <div className="text-[7px] md:text-[8px] font-black text-acc-blue uppercase tracking-widest">Avg. Drawdown</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Futuristic Pricing Section */}
      <section className="py-16 md:py-40 relative px-4 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gold-500/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-2xl md:text-8xl font-black mb-6 md:mb-8 italic uppercase tracking-tighter leading-[0.85]"
           >
             <span className="text-white">Transparency is our</span> <br />
             <span className="text-gradient-gold">CURRENCY</span>
           </motion.h2>

           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-gray-400 max-w-2xl mx-auto text-xs md:text-xl font-bold uppercase tracking-tight opacity-60 mb-8 md:mb-16 leading-relaxed"
           >
             Access to XAU VIP+ is currently through a selective application process or direct monthly subscription via our Telegram bot.
           </motion.p>

           <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 md:p-14 rounded-[32px] md:rounded-[48px] glass-card border border-white/10 flex flex-col items-center flex-1 bg-white/[0.03] backdrop-blur-xl relative overflow-hidden group"
              >
                 <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
                 
                 <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] text-gold-500 uppercase mb-3 md:mb-4">MONTHLY ELITE</span>
                 <div className="text-4xl md:text-7xl font-black mb-6 md:mb-8 text-white italic tracking-tighter">$99<span className="text-[10px] md:text-sm text-gray-500 align-bottom mb-1 md:mb-2 inline-block">/MO</span></div>
                 
                 <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-[8px] md:text-xs font-black uppercase tracking-widest text-gray-400 text-center">
                   <li>Daily Sniper Signals</li>
                   <li>Account Management</li>
                   <li>Community Access</li>
                 </ul>

                 <button className="w-full py-4 px-8 md:py-5 md:px-10 rounded-xl md:rounded-2xl bg-white/10 border border-white/20 text-[10px] md:text-xs font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                    CHOOSE PLAN
                 </button>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10, scale: 1.05 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="p-6 md:p-14 rounded-[32px] md:rounded-[48px] bg-gold-500 text-black flex flex-col items-center flex-1 md:scale-110 shadow-[0_0_80px_rgba(212,160,23,0.3)] relative overflow-hidden group"
              >
                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                 <Send className="w-8 h-8 md:w-12 md:h-12 absolute -top-4 -right-4 md:-top-6 md:-right-6 opacity-10 rotate-12" />

                 <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] opacity-60 uppercase mb-3 md:mb-4">LIFETIME ACCESS</span>
                 <div className="text-4xl md:text-7xl font-black mb-6 md:mb-8 italic tracking-tighter">$499<span className="text-[10px] md:text-sm opacity-60 align-bottom mb-1 md:mb-2 inline-block">/ONCE</span></div>
                 
                 <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-[8px] md:text-xs font-black uppercase tracking-widest opacity-70 text-center">
                   <li>Everything in Monthly</li>
                   <li>Mentality Coaching</li>
                   <li>Personal Strategy</li>
                 </ul>

                 <button className="w-full py-4 px-8 md:py-5 md:px-10 rounded-xl md:rounded-2xl bg-black text-white text-[10px] md:text-xs font-black tracking-widest uppercase hover:scale-105 transition-transform shadow-xl">
                    BEST VALUE
                 </button>
              </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
}

function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
