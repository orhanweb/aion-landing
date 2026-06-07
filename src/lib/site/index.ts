// src/lib/site/index.ts
import type { Locale } from '@/i18n/routing';
import { resolveSiteConfig, getSiteUrl } from '@/lib/site/resolve';
import type { SiteConfig } from '@/lib/site/types';

export type { SiteConfig, SiteContact, SiteDataSource, SiteMeta, LocalizedString } from '@/lib/site/types';

/** Full runtime site config for a locale (contact + meta + source flags). */
export function getSiteConfig(locale: Locale): SiteConfig {
  return resolveSiteConfig(locale);
}

/** Canonical site URL for SEO, sitemap, JSON-LD. */
export { getSiteUrl };
