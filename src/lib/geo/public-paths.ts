// src/lib/geo/public-paths.ts
import type { MetadataRoute } from 'next';
import type { LegalSlug } from '@/lib/content/legal/types';

export type GeoStaticPageKey = 'home' | 'services' | 'approach' | 'about' | 'assessment' | 'contact';

type ChangeFrequency = MetadataRoute.Sitemap[number]['changeFrequency'];

export type GeoPublicPath = {
  path: string;
  llmsKey?: GeoStaticPageKey;
  sitemapPriority: number;
  sitemapChangeFrequency: ChangeFrequency;
};

export type GeoLegalPath = {
  path: string;
  slug: LegalSlug;
};

export const GEO_CORE_PATHS: GeoPublicPath[] = [
  { path: '', llmsKey: 'home', sitemapPriority: 1, sitemapChangeFrequency: 'weekly' },
  { path: '/services', llmsKey: 'services', sitemapPriority: 0.8, sitemapChangeFrequency: 'monthly' },
  { path: '/approach', llmsKey: 'approach', sitemapPriority: 0.8, sitemapChangeFrequency: 'monthly' },
  { path: '/about', llmsKey: 'about', sitemapPriority: 0.8, sitemapChangeFrequency: 'monthly' },
  { path: '/assessment', llmsKey: 'assessment', sitemapPriority: 0.8, sitemapChangeFrequency: 'monthly' },
  { path: '/contact', llmsKey: 'contact', sitemapPriority: 0.8, sitemapChangeFrequency: 'monthly' }
];

export const GEO_LEGAL_PATHS: GeoLegalPath[] = [
  { path: '/privacy', slug: 'privacy' },
  { path: '/cookies', slug: 'cookies' }
];

export const GEO_SITEMAP_PATHS: GeoPublicPath[] = [
  ...GEO_CORE_PATHS,
  ...GEO_LEGAL_PATHS.map(({ path }) => ({
    path,
    sitemapPriority: 0.5,
    sitemapChangeFrequency: 'yearly' as ChangeFrequency
  }))
];
