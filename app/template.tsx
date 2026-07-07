'use client';

import { motion } from 'framer-motion';

/**
 * app/template.tsx re-monta a cada navegacao — usado para a transicao
 * suave de pagina. reduced-motion e respeitado globalmente via globals.css
 * (durations reduzidas), pelo que aqui mantemos apenas fade + leve subida.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
