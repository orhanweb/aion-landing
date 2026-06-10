// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getServiceSlugs } from '@/lib/content/services';
import { getTechnicalOfferingPath } from '@/lib/content/technical-offering';
import { GEO_SITEMAP_PATHS } from '@/lib/geo/public-paths';
import { buildLocalizedLanguages, defaultLocaleUrl } from '@/lib/geo/sitemap-alternates';
import { CONTENT_LAST_MODIFIED } from '@/lib/seo/content-version';

function buildSitemapEntry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) {
  return {
    url: defaultLocaleUrl(path),
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency,
    priority,
    alternates: {
      languages: buildLocalizedLanguages(path)
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = GEO_SITEMAP_PATHS.map(({ path, sitemapPriority, sitemapChangeFrequency }) =>
    buildSitemapEntry(path, sitemapPriority, sitemapChangeFrequency)
  );

  for (const slug of getServiceSlugs()) {
    entries.push(buildSitemapEntry(`/services/${slug}`, 0.7, 'monthly'));
  }

  entries.push(buildSitemapEntry(getTechnicalOfferingPath(), 0.7, 'monthly'));

  return entries;
}
