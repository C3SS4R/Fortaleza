'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-abyss"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="wordmark text-center text-2xl text-foam sm:text-4xl"
          >
            Shopping Fortaleza
          </motion.p>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 180, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="horizon-line mt-6"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
