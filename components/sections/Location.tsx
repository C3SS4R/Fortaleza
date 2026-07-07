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
            <div className="group relative h-full min-h-[380px] overflow-hidden rounded-3xl border border-white/15 shadow-[0_20px_60px_-20px_rgba(4,32,45,0.85)]">
              {/* Aro luminoso do horizonte no topo (elemento-assinatura) */}
              <div className="horizon-line absolute inset-x-0 top-0 z-20 opacity-70" />

              <iframe
                src={SITE_CONFIG.mapsEmbed}
                title="Mapa — Shopping Fortaleza, Baía de Luanda"
                className="h-full min-h-[380px] w-full saturate-[1.15] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Vinheta + degrade inferior para integrar o mapa na paleta
                  (pointer-events-none: o mapa continua interativo) */}
              <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl shadow-[inset_0_0_90px_24px_rgba(4,32,45,0.55)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-abyss/80 to-transparent" />

              {/* Cartao-pin flutuante em liquid glass */}
              <div className="liquid-glass pointer-events-none absolute bottom-4 left-4 z-20 flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-white shadow-lg shadow-coral/30">
                  <FiMapPin size={16} />
                </span>
                <div>
                  <p className="text-sm font-bold text-foam">Shopping Fortaleza</p>
                  <p className="text-[0.7rem] text-mist">Baía de Luanda · Marginal</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {infoBlocks.map((block, i) => {
              const Icon = block.icon;
              return (
                <Reveal key={block.title} delay={i * 0.1} className="h-full">
                  <div className="liquid-glass flex h-full flex-col rounded-2xl p-6">
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
