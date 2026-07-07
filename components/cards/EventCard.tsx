import Image from 'next/image';
import { FiCalendar } from 'react-icons/fi';
import { EventItem } from '@/types';

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="group relative h-full overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 80vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/40 to-transparent" />

        <span className="glass absolute right-4 top-4 flex items-center gap-1.5 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-foam">
          <FiCalendar size={12} className="text-coral" /> {event.dateLabel}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="mb-2 inline-block text-[0.65rem] uppercase tracking-widest text-lagoon">
            {event.category}
          </span>
          <h3 className="font-display text-2xl font-bold leading-tight text-foam">
            {event.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mist">{event.description}</p>
        </div>
      </div>
    </article>
  );
}
