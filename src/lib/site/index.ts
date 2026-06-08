// src/lib/site/index.ts
import { resolveSiteConfig, getSiteUrl } from '@/lib/site/resolve';
import type { SiteConfig } from '@/lib/site/types';

export type { SiteConfig, SiteContact, SiteMeta } from '@/lib/site/types';

/** Runtime site config (contact + meta from env). */
export function getSiteConfig(): SiteConfig {
  return resolveSiteConfig();
}

/** Canonical site URL for SEO, sitemap, JSON-LD. */
export { getSiteUrl };
