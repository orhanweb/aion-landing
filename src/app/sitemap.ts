// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getServiceSlugs } from '@/lib/content/services';
import { CONTENT_LAST_MODIFIED } from '@/lib/seo/content-version';
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
        lastModified: CONTENT_LAST_MODIFIED,
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8
      });
    }

    for (const slug of getServiceSlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/services/${slug}`,
        lastModified: CONTENT_LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: 0.7
      });
    }
  }

  return entries;
}
