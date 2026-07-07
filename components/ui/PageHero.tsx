import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface PageHeroProps {
  image: string;
  label: string;
  title: string;
  highlight?: string;
  breadcrumbLabel: string;
}

export default function PageHero({
  image,
  label,
  title,
  highlight,
  breadcrumbLabel,
}: PageHeroProps) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover brightness-[0.4]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/60 to-abyss/20" />
      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-14 lg:px-12">
        <Reveal>
          <span className="section-label">{label}</span>
          <h1 className="wordmark text-5xl text-foam sm:text-6xl md:text-7xl">
            {title} {highlight && <span className="text-coral">{highlight}</span>}
          </h1>
          <div className="mt-6">
            <Breadcrumb current={breadcrumbLabel} />
          </div>
        </Reveal>
      </div>
      <div className="horizon-line absolute inset-x-0 bottom-0 z-10 opacity-60" />
    </section>
  );
}
