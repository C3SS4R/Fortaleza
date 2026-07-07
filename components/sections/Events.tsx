'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import EventCard from '@/components/cards/EventCard';
import { EVENTS } from '@/lib/constants';

interface EventsProps {
  showHeader?: boolean;
}

export default function Events({ showHeader = true }: EventsProps) {
  return (
    <section id="eventos" className="bg-abyss-deep px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-content">
        {showHeader && (
          <SectionHeader
            label="Agenda"
            title="Há sempre algo"
            highlight="a acontecer"
            align="center"
          />
        )}

        <Reveal className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.15}
            grabCursor
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 2.15 },
              1024: { slidesPerView: 3.2 },
            }}
            style={
              {
                '--swiper-pagination-color': '#EE7250',
                '--swiper-pagination-bullet-inactive-color': '#9DB3BC',
                paddingBottom: '3rem',
              } as React.CSSProperties
            }
          >
            {EVENTS.map((event) => (
              <SwiperSlide key={event.slug} className="h-auto">
                <EventCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
