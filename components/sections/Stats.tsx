import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import { STATS } from '@/lib/constants';

export default function Stats() {
  return (
    <section className="relative z-20 -mt-16 px-6 lg:px-12">
      <div className="mx-auto max-w-content">
        <Reveal variant="scale">
          <div className="glass grid grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:px-12">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 text-center md:border-l md:border-white/10 md:first:border-l-0"
              >
                <span className="font-display text-4xl font-black tabular-nums text-foam md:text-5xl [font-stretch:112%]">
                  <CountUp
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    duration={1.6 + i * 0.1}
                  />
                </span>
                <span className="text-[0.7rem] uppercase tracking-widest2 text-mist">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
