'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section className="bg-abyss px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div ref={ref} className="relative aspect-[4/5] overflow-hidden lg:aspect-[4/4.5]">
          <motion.div style={{ y: imgY }} className="absolute inset-[-8%]">
            <Image
              src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80"
              alt="Interior do Shopping Fortaleza com vista para o mar"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-abyss/50 to-transparent" />
          {/* Selo "Desde" */}
          <div className="liquid-glass absolute bottom-5 left-5 rounded-2xl px-5 py-4">
            <p className="text-[0.65rem] uppercase tracking-widest2 text-lagoon">Desde</p>
            <p className="font-display text-3xl font-black text-foam [font-stretch:112%]">
              {SITE_CONFIG.foundedYear}
            </p>
          </div>
        </div>

        <div>
          <Reveal>
            <span className="section-label">A experiência Fortaleza</span>
            <h2 className="section-title text-left">
              Um dia inteiro à beira do <span>Atlântico</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-mist">
              O Shopping Fortaleza nasceu na Marginal de Luanda com uma ideia simples: reunir num só
              lugar as compras, a boa mesa e o lazer — sempre com o oceano à vista. Três pisos de
              lojas e marcas, esplanadas debruçadas sobre a baía e um terraço panorâmico onde o
              pôr-do-sol é o espetáculo da casa.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-mist">
              Mais do que um centro comercial, é um ponto de encontro da cidade — para famílias,
              amigos e para quem simplesmente quer ver o mar.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8">
              <Button href="/sobre">Conhecer a nossa história</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
