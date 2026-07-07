'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'border-b border-white/10 bg-abyss/90 py-4 backdrop-blur-xl' : 'py-6',
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="font-display text-lg font-black uppercase tracking-tight text-foam [font-stretch:125%]"
        >
          Fortaleza
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative text-xs font-medium uppercase tracking-widest2 text-mist transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-coral after:transition-all after:duration-300 hover:text-foam',
                pathname === link.href ? 'text-foam after:w-full' : 'after:w-0 hover:after:w-full',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contactos"
            className="cta-outline px-6 py-2.5 text-[0.7rem]"
          >
            Visitar
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="text-2xl text-foam md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-abyss md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={link.href}
                  className="font-display text-3xl font-extrabold uppercase tracking-tight text-foam [font-stretch:115%]"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/contactos" className="cta-primary mt-4">
                Visitar
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
