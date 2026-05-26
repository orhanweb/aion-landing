// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getServiceSlugs } from '@/lib/content/services';
import { routing, type Locale } from '@/i18n/routing';

const SITE_URL = 'https://aion.tr';

const staticPaths = ['', '/hizmetler', '/yaklasimimiz', '/hakkimizda', '/degerlendirme', '/iletisim'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8
      });
    }

    for (const slug of getServiceSlugs(locale as Locale)) {
      entries.push({
        url: `${SITE_URL}/${locale}/hizmetler/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7
      });
    }
  }

  return entries;
}
