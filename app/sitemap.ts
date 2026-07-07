import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/sobre', '/lojas', '/eventos', '/contactos', '/politica-de-privacidade'];
  const now = new Date();
  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
