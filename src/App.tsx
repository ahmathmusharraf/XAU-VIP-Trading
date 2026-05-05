/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Premium from './pages/Premium';
import MobileNav from './components/MobileNav';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'premium'>('home');

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-gold-500 selection:text-black">
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#eeb01a08_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#00e0ff05_0%,transparent_40%)] pointer-events-none" />
      
      <Navbar activePage={currentPage} setPage={setCurrentPage} />
      
      <div className="relative">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          ) : (
            <motion.div
              key="premium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Premium />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />

      <MobileNav activePage={currentPage} setPage={setCurrentPage} />
    </main>
  );
}
