import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import About from '@/components/sections/About';
import Amenities from '@/components/sections/Amenities';
import Testimonials from '@/components/sections/Testimonials';
import Location from '@/components/sections/Location';
import WaveDivider from '@/components/ui/WaveDivider';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'A história, a missão e a localização do Shopping Fortaleza — compras, lazer e vista para o oceano na Baía de Luanda.',
  alternates: { canonical: '/sobre' },
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=2000&q=80"
        label="Sobre"
        title="A nossa"
        highlight="história"
        breadcrumbLabel="Sobre"
      />
      <About />
      <WaveDivider color="#04202D" />
      <Amenities />
      <Testimonials />
      <Location />
    </>
  );
}
