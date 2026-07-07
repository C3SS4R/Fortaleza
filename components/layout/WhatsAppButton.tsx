'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '@/lib/constants';

export default function WhatsAppButton() {
  const href = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    'Olá, gostava de saber mais sobre o Shopping Fortaleza.',
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      className="liquid-glass liquid-glass--wa liquid-sheen fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white transition-transform duration-300 hover:scale-110 lg:right-10"
    >
      <FaWhatsapp className="drop-shadow-[0_1px_3px_rgba(0,30,15,0.55)]" />
    </motion.a>
  );
}
