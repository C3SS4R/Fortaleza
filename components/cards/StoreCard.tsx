import Image from 'next/image';
import { FiLayers } from 'react-icons/fi';
import { Store } from '@/types';

export default function StoreCard({ store }: { store: Store }) {
  return (
    <div className="group h-full">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={store.image}
          alt={store.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-transparent" />

        <span className="glass absolute left-3 top-3 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-foam">
          {store.category}
        </span>

        <div className="glass absolute inset-x-3 bottom-3 p-4 transition-transform duration-500 group-hover:-translate-y-1">
          <p className="mb-1 flex items-center gap-1.5 text-[0.65rem] uppercase tracking-widest text-lagoon">
            <FiLayers size={11} /> {store.floor}
          </p>
          <h4 className="font-display text-lg font-bold text-foam">{store.name}</h4>
          <p className="mt-1 text-xs leading-relaxed text-mist">{store.description}</p>
        </div>
      </div>
    </div>
  );
}
