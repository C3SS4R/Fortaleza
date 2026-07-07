'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import StoreCard from '@/components/cards/StoreCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { STORES } from '@/lib/constants';
import { StoreCategory } from '@/types';
import { cn, unique } from '@/lib/utils';

type Filter = 'Todas' | StoreCategory;

interface StoresProps {
  /** true na Home: mostra header + botao "ver todas"; false na pagina /lojas. */
  preview?: boolean;
}

export default function Stores({ preview = false }: StoresProps) {
  const categories: Filter[] = useMemo(
    () => ['Todas', ...unique(STORES.map((s) => s.category))],
    [],
  );
  const [active, setActive] = useState<Filter>('Todas');

  const filtered = useMemo(() => {
    const list = active === 'Todas' ? STORES : STORES.filter((s) => s.category === active);
    return preview ? list.slice(0, 8) : list;
  }, [active, preview]);

  return (
    <section id="lojas" className="bg-abyss px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-content">
        {preview && (
          <SectionHeader
            label="Lojas & Marcas"
            title="Mais de 150 lojas,"
            highlight="uma só vista"
            align="center"
          />
        )}

        {/* Filtros por categoria */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300',
                active === cat
                  ? 'border-coral bg-coral text-abyss'
                  : 'border-white/15 text-mist hover:border-lagoon hover:text-foam',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid filtrada com stagger */}
        <motion.div layout className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((store, i) => (
              <motion.div
                key={store.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{
                  duration: 0.5,
                  delay: (i % 8) * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <StoreCard store={store} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {preview && (
          <div className="mt-12 text-center">
            <Link href="/lojas" className="cta-outline group">
              Ver todas as lojas
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
