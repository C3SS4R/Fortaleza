import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Events from '@/components/sections/Events';
import Newsletter from '@/components/sections/Newsletter';
import WaveDivider from '@/components/ui/WaveDivider';

export const metadata: Metadata = {
  title: 'Eventos',
  description:
    'A agenda de eventos e promoções do Shopping Fortaleza — música, moda, cultura e gastronomia à beira-mar.',
  alternates: { canonical: '/eventos' },
};

export default function EventosPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80"
        label="Agenda"
        title="A agenda da"
        highlight="baía"
        breadcrumbLabel="Eventos"
      />
      <WaveDivider color="#0C6E88" />
      <Events showHeader={false} />
      <Newsletter />
    </>
  );
}
