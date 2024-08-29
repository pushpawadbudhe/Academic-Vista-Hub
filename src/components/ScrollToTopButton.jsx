import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3  bg-blue-gradient text-white rounded-full shadow-lg  rounded-[10px] outline-none transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
      <img src="/arrow.png" alt="Scroll to top" className="w-5 h-5" />
      </motion.button>
    )
  );
};

export default ScrollToTopButton;
