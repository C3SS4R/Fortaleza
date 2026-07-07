import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/constants';
import Preloader from '@/components/layout/Preloader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

const body = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

// Archivo variavel com eixo de largura (wdth) -> permite o "expanded"
// monumental do wordmark via font-stretch, sem familia separada.
const display = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Shopping Fortaleza',
    'Luanda',
    'centro comercial',
    'lojas',
    'eventos',
    'vista para o mar',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ShoppingCenter',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address,
    addressLocality: 'Luanda',
    addressCountry: 'AO',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${body.variable} ${display.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
