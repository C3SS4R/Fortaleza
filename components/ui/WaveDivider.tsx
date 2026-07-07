'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WaveDividerProps {
  /** Cor da onda — normalmente a cor da seccao para onde a onda "verte". */
  color?: string;
  /** Espelha verticalmente (onda invertida). */
  flip?: boolean;
  className?: string;
}

/**
 * Elemento-assinatura "linha do horizonte": crista de onda SVG em duas
 * camadas que separa seccoes claras/escuras. A camada de tras desliza
 * suavemente com o scroll (parallax ambiente), respeitando reduced-motion.
 */
export default function WaveDivider({
  color = '#062A3B',
  flip = false,
  className,
}: WaveDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn('relative h-16 w-full overflow-hidden md:h-24', flip && 'rotate-180', className)}
    >
      <motion.svg
        style={{ x: reduce ? 0 : x }}
        className="absolute inset-0 h-full w-[112%]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,120 480,0 720,48 C960,96 1200,24 1440,72 L1440,120 L0,120 Z"
          fill={color}
          opacity={0.35}
        />
        <path
          d="M0,80 C280,40 560,120 840,72 C1120,24 1320,96 1440,56 L1440,120 L0,120 Z"
          fill={color}
        />
      </motion.svg>
    </div>
  );
}
