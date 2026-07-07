'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WaveDividerProps {
  /** Cor da onda — normalmente a cor da seccao para onde a onda "verte". */
  color?: string;
  /** Espelha verticalmente (onda invertida). */
  flip?: boolean;
  className?: string;
}

/*
 * Cristas tileaveis (0..1440 repetido para 1440..2880). Como o padrao repete
 * a cada 1440, animar x de 0% a -50% no SVG de largura dupla (w-[200%]) da um
 * ciclo perfeitamente continuo — a "onda" flui sem emenda durante o scroll.
 */
const WAVE_BACK =
  'M0,64 C240,120 480,0 720,48 C960,96 1200,24 1440,72 C1680,120 1920,0 2160,48 C2400,96 2640,24 2880,72 L2880,120 L0,120 Z';
const WAVE_FRONT =
  'M0,80 C280,40 560,120 840,72 C1120,24 1360,96 1440,60 C1720,40 2000,120 2280,72 C2560,24 2800,96 2880,60 L2880,120 L0,120 Z';

export default function WaveDivider({
  color = '#062A3B',
  flip = false,
  className,
}: WaveDividerProps) {
  const reduce = useReducedMotion();

  const loop = (duration: number) =>
    reduce
      ? undefined
      : { x: { duration, ease: 'linear' as const, repeat: Infinity, repeatType: 'loop' as const } };

  return (
    <div
      aria-hidden
      className={cn(
        'relative h-16 w-full overflow-hidden md:h-24',
        flip && 'rotate-180',
        className,
      )}
    >
      {/* Camada de tras — mais lenta e translucida (profundidade) */}
      <motion.svg
        className="absolute inset-0 h-full w-[200%]"
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
        animate={reduce ? undefined : { x: ['0%', '-50%'] }}
        transition={loop(22)}
      >
        <path d={WAVE_BACK} fill={color} opacity={0.4} />
      </motion.svg>

      {/* Camada da frente — mais rapida e solida */}
      <motion.svg
        className="absolute inset-0 h-full w-[200%]"
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
        animate={reduce ? undefined : { x: ['0%', '-50%'] }}
        transition={loop(14)}
      >
        <path d={WAVE_FRONT} fill={color} />
      </motion.svg>
    </div>
  );
}
