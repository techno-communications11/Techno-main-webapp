import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation links
const navLinks = [
  { name: 'About', path: '/components/About' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const MobileMenu = ({ isOpen, toggleMenu, currentPath }) => {
  // Animation for menu
  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    closed: { x: '100%', opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white bg-opacity-95 z-50 md:hidden shadow-lg"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="flex justify-end p-6">
            <button
              className="text-gray-900 focus:outline-none hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 mt-12">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={link.path}
                  className={`text-gray-900 text-lg font-medium px-6 py-3 rounded-md ${
                    currentPath === link.path
                      ? 'bg-gray-200 text-blue-700'
                      : 'hover:bg-gray-100 hover:text-blue-600'
                  } transition-colors`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;