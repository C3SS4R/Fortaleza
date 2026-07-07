import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { AMENITIES } from '@/lib/constants';

export default function Amenities() {
  return (
    <section id="comodidades" className="bg-abyss-deep px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-content">
        <SectionHeader
          label="Comodidades"
          title="Pensado para"
          highlight="ficar o dia todo"
          align="center"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((amenity, i) => {
            const Icon = amenity.icon;
            return (
              <Reveal key={amenity.index} delay={i * 0.1} className="group h-full">
                <div className="relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover brightness-[0.45] transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/40 to-transparent" />

                  <span className="absolute right-4 top-3 font-display text-5xl font-black text-sand/80 [font-stretch:112%]">
                    {amenity.index}
                  </span>

                  <div className="glass relative m-3 p-5">
                    <Icon className="mb-3 text-2xl text-lagoon" />
                    <h3 className="font-display text-lg font-bold text-foam">{amenity.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-mist">{amenity.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
