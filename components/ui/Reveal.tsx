'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  variant?: 'fade' | 'scale';
}

export default function Reveal({
  children,
  delay = 0,
  className,
  y = 60,
  variant = 'fade',
}: RevealProps) {
  const variants: Variants = {
    hidden: variant === 'scale' ? { opacity: 0, scale: 0.94 } : { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, delay, ease: [0.77, 0, 0.175, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
