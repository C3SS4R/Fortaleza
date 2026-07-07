import type { Metadata } from 'next';
import { FiMail, FiPhone, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/sections/ContactForm';
import Location from '@/components/sections/Location';
import Reveal from '@/components/ui/Reveal';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contactos',
  description:
    'Fale com o Shopping Fortaleza — formulário, telefone, WhatsApp, horário de funcionamento e localização na Baía de Luanda.',
  alternates: { canonical: '/contactos' },
};

export default function ContactosPage() {
  const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsapp}`;

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=80"
        label="Contactos"
        title="Fale"
        highlight="connosco"
        breadcrumbLabel="Contactos"
      />

      <section className="bg-abyss px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="section-label">Envie uma mensagem</span>
              <h2 className="section-title text-left">
                Como podemos <span>ajudar?</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-mist">
                Dúvidas sobre lojas, eventos ou espaços comerciais? Preencha o formulário e a nossa
                equipa responde com a maior brevidade.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <ContactForm />
            </Reveal>
          </div>

          <Reveal delay={0.2} variant="scale">
            <div className="glass flex h-full flex-col gap-6 p-8">
              <h3 className="font-display text-lg font-bold text-foam">Contactos diretos</h3>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 text-sm text-mist transition-colors hover:text-foam"
              >
                <FiPhone className="text-lagoon" /> {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-4 text-sm text-mist transition-colors hover:text-foam"
              >
                <FiMail className="text-lagoon" /> {SITE_CONFIG.email}
              </a>
              <p className="flex items-center gap-4 text-sm text-mist">
                <FiClock className="text-lagoon" /> {SITE_CONFIG.openingHours}
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest2 text-white transition-transform hover:scale-[1.02]"
              >
                <FaWhatsapp className="text-lg" /> Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Location showHeader={false} />
    </>
  );
}
