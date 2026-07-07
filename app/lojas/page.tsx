import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Stores from '@/components/sections/Stores';

export const metadata: Metadata = {
  title: 'Lojas & Marcas',
  description:
    'Mais de 150 lojas e marcas — moda, eletrónica, restauração, serviços e lazer — distribuídas por três pisos com vista para o mar.',
  alternates: { canonical: '/lojas' },
};

export default function LojasPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80"
        label="Lojas & Marcas"
        title="Diretório de"
        highlight="lojas"
        breadcrumbLabel="Lojas"
      />
      <Stores />
    </>
  );
}
