'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const seaY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden"
    >
      {/* Camada-mar (parallax mais lento) */}
      <motion.div style={{ y: seaY }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Vista sobre o oceano Atlântico a partir do Shopping Fortaleza"
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover brightness-[0.5]"
        />
      </motion.div>

      {/* Gradiente-assinatura horizonte: ceu (topo) -> mar profundo (fundo) */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/70 via-abyss/25 to-abyss" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-coral/15" />
      {/* Linha luminosa do horizonte */}
      <div className="horizon-line absolute inset-x-0 top-[44%] opacity-70" />

      {/* Conteudo */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto max-w-content px-6 text-center"
      >
        <motion.span
          {...fadeUp(1.6)}
          className="mb-6 block text-xs font-semibold uppercase tracking-widest3 text-lagoon"
        >
          Baía de Luanda · Angola
        </motion.span>

        <h1 className="wordmark text-foam">
          <motion.span
            {...fadeUp(1.75)}
            className="block text-[clamp(3rem,14vw,11rem)]"
          >
            Shopping
          </motion.span>
          <motion.span
            {...fadeUp(1.9)}
            className="block text-[clamp(3rem,14vw,11rem)] text-transparent [-webkit-text-stroke:1.5px_#F3FAFB]"
          >
            Fortaleza
          </motion.span>
        </h1>

        <motion.p
          {...fadeUp(2.1)}
          className="mx-auto mt-6 max-w-md text-base font-light tracking-wide text-mist sm:text-lg"
        >
          Compras <span className="text-sand">·</span> Lazer{' '}
          <span className="text-sand">·</span> Oceano
        </motion.p>

        <motion.div
          {...fadeUp(2.3)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/lojas" className="cta-primary">
            Explorar Lojas
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/eventos" className="cta-outline">
            Ver Eventos
          </Link>
        </motion.div>
      </motion.div>

      {/* Cue de scroll */}
      <motion.div
        {...fadeUp(2.6)}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">Descer</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-lagoon to-transparent" />
      </motion.div>
    </section>
  );
}
