'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '@/lib/constants';

export default function WhatsAppButton() {
  const href = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostava de saber mais sobre o Shopping Fortaleza.',
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
      className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 lg:right-10"
    >
      <FaWhatsapp />
    </motion.a>
  );
}
