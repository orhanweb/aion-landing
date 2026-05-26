// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getServiceSlugs } from '@/lib/content/services';
import { routing } from '@/i18n/routing';
import { getSiteUrl } from '@/lib/site';

const staticPaths = ['', '/services', '/approach', '/about', '/assessment', '/contact', '/privacy', '/cookies'];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8
      });
    }

    for (const slug of getServiceSlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7
      });
    }
  }

  return entries;
}
