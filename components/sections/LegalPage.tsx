import Reveal from '@/components/ui/Reveal';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { LegalSection } from '@/types';

interface LegalPageProps {
  title: string;
  updated: string;
  intro: string;
  sections: (LegalSection & { id?: string })[];
}

export default function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <article className="px-6 pb-24 pt-36 lg:px-12 lg:pt-44">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Breadcrumb current={title} />
          <h1 className="wordmark mt-6 text-4xl text-foam sm:text-5xl">{title}</h1>
          <p className="mt-4 text-xs uppercase tracking-widest2 text-mist">
            Última atualização: {updated}
          </p>
          <p className="mt-8 text-base leading-relaxed text-mist">{intro}</p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.05}>
              <section id={section.id}>
                <h2 className="font-display text-xl font-bold text-foam">{section.heading}</h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-mist">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
