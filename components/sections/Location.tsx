import { FiMapPin, FiClock, FiNavigation, FiPhone } from 'react-icons/fi';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG } from '@/lib/constants';

const infoBlocks = [
  {
    icon: FiMapPin,
    title: 'Endereço',
    lines: [SITE_CONFIG.address],
  },
  {
    icon: FiNavigation,
    title: 'Acesso & Transportes',
    lines: ['A partir da Marginal (Av. 4 de Fevereiro)', 'Táxi, autocarro e estacionamento próprio'],
  },
  {
    icon: FiClock,
    title: 'Horário',
    lines: [SITE_CONFIG.openingHours],
  },
  {
    icon: FiPhone,
    title: 'Contacto',
    lines: [SITE_CONFIG.phone, SITE_CONFIG.email],
  },
];

export default function Location({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="localizacao" className="bg-abyss-deep px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-content">
        {showHeader && (
          <SectionHeader
            label="Localização"
            title="Na Marginal,"
            highlight="de frente para o mar"
            align="center"
          />
        )}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal variant="scale" className="h-full">
            <div className="h-full min-h-[360px] overflow-hidden border border-white/10">
              <iframe
                src={SITE_CONFIG.mapsEmbed}
                title="Mapa — Shopping Fortaleza, Baía de Luanda"
                className="h-full min-h-[360px] w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {infoBlocks.map((block, i) => {
              const Icon = block.icon;
              return (
                <Reveal key={block.title} delay={i * 0.1} className="h-full">
                  <div className="glass flex h-full flex-col p-6">
                    <Icon className="mb-4 text-2xl text-lagoon" />
                    <h3 className="font-display text-base font-bold uppercase tracking-wide text-foam">
                      {block.title}
                    </h3>
                    <div className="mt-2 space-y-1">
                      {block.lines.map((line) => (
                        <p key={line} className="text-sm leading-relaxed text-mist">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
