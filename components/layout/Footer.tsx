import Link from 'next/link';
import { FiFacebook, FiInstagram, FiClock, FiMapPin } from 'react-icons/fi';
import {
  FOOTER_EXPLORE,
  FOOTER_LEGAL,
  FOOTER_SERVICES,
  SITE_CONFIG,
} from '@/lib/constants';
import { NavLink } from '@/types';

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h4 className="mb-6 text-[0.7rem] font-semibold uppercase tracking-widest2 text-lagoon">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-mist transition-colors hover:text-foam"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const socials = [
  { Icon: FiInstagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
  { Icon: FiFacebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-abyss-deep px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-xl font-black uppercase tracking-tight text-foam [font-stretch:125%]">
              Shopping
              <br />
              Fortaleza
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              {SITE_CONFIG.tagline}. Na Marginal da Baía de Luanda, onde a cidade encontra o mar.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-mist transition-all hover:border-lagoon hover:bg-lagoon/10 hover:text-foam"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Explorar" links={FOOTER_EXPLORE} />
          <FooterColumn title="Serviços" links={FOOTER_SERVICES} />

          <div>
            <h4 className="mb-6 text-[0.7rem] font-semibold uppercase tracking-widest2 text-lagoon">
              Visite-nos
            </h4>
            <ul className="space-y-4 text-sm text-mist">
              <li className="flex gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-lagoon" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex gap-3">
                <FiClock className="mt-0.5 shrink-0 text-lagoon" />
                <span>{SITE_CONFIG.openingHours}</span>
              </li>
            </ul>
            <ul className="mt-6 space-y-2">
              {FOOTER_LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-mist transition-colors hover:text-foam"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-mist sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
          <p>Feito com maré alta em Luanda.</p>
        </div>
      </div>
    </footer>
  );
}
