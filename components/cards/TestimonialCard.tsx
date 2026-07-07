import { FiStar } from 'react-icons/fi';
import Reveal from '@/components/ui/Reveal';
import { Testimonial } from '@/types';

export default function TestimonialCard({
  testimonial,
  delay = 0,
}: {
  testimonial: Testimonial;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="glass flex h-full flex-col p-8">
      <div className="mb-5 flex gap-1 text-coral">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FiStar key={i} size={15} fill="currentColor" />
        ))}
      </div>
      <p className="flex-1 text-lg font-light italic leading-relaxed text-foam">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="font-display font-bold text-foam">{testimonial.name}</p>
        <p className="text-xs uppercase tracking-widest text-mist">{testimonial.origin}</p>
      </div>
    </Reveal>
  );
}
