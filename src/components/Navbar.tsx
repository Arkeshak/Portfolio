import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Education', 'Projects', 'Achievements', 'Contact'];

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (isOpen) closeMenu();

    const element = document.getElementById(targetId);
    if (element) {
      // Small timeout allows the mobile menu close animation to start before scrolling
      // which prevents jitter on lower-end devices
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between py-6 relative z-50"
      >
        <div className="text-2xl font-bold tracking-tighter">arkeshak.</div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-300">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link.toLowerCase())}
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed top-20 left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-800 rounded-3xl z-[100] pointer-events-auto overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col py-6 px-8 space-y-6">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link.toLowerCase())}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors w-full border-b border-gray-800/50 pb-4 last:border-0"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
