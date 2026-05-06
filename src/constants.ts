import { motion } from 'motion/react';
import { TrendingUp, Shield, Zap, Globe, MessageSquare, Award, CreditCard, Users, Star } from 'lucide-react';

export interface Feature {
  icon: typeof TrendingUp;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Daily 5 to 6 Solid Scalps",
    description: "Clear BUY and SELL signals every day with high precision entry points."
  },
  {
    icon: Shield,
    title: "Exact Lot Sizes",
    description: "Professional risk management to protect your capital in all market conditions."
  },
  {
    icon: TrendingUp,
    title: "Live Trade Execution",
    description: "Real-time entry, SL, TP and professional trade management."
  },
  {
    icon: Globe,
    title: "Market Analysis",
    description: "Fundamental + technical breakdown for high probability setups."
  },
  {
    icon: MessageSquare,
    title: "News & Sessions",
    description: "Trade during high impact news and major global market sessions."
  },
  {
    icon: Award,
    title: "Account Flipping",
    description: "Signature challenges from $1K to $10K and beyond."
  },
  {
    icon: Users,
    title: "Learn While Earning",
    description: "Grow your trading knowledge while making consistent profits."
  },
  {
    icon: Shield,
    title: "High Accuracy",
    description: "Consistent performance you can trust with verified results."
  }
];

export const STATS = [
  { label: "HAPPY TRADERS", value: "1000+", icon: Users },
  { label: "ACCURACY RATE", value: "85%+", icon: Award },
  { label: "DAILY SIGNALS", value: "5-6", icon: TrendingUp },
  { label: "CHALLENGES", value: "$1K TO $10K+", icon: CreditCard }
];

export const TELEGRAM_LINK = "https://t.me/XAURVIP_PLUS";

export interface Review {
  id: string;
  user: string;
  content: string;
  rating: number;
  image?: string;
}

export const REVIEWS: Review[] = [
  { id: '1', user: 'Alex T.', content: 'Another clean gold scalp! +98 pips. XAU VIP+ never misses!', rating: 5 },
  { id: '2', user: 'Maria S.', content: 'Hit TP! Beautiful sell setup. Thank you XAU VIP+ TEAM.', rating: 5 },
  { id: '3', user: 'James K.', content: 'From $1k to $3.5k in a week. The risk management is top notch.', rating: 5 }
];
