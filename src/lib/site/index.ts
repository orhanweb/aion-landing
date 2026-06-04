// src/lib/site/index.ts
import type { Locale } from '@/i18n/routing';
import { isMockDataSource as isMockFromSource } from '@/lib/mock/source';
import { resolveSiteConfig, getSiteUrl } from '@/lib/site/resolve';
import type { SiteConfig, SiteContact } from '@/lib/site/types';

export type { SiteConfig, SiteContact, SiteDataSource, SiteMeta, SiteFeatures, LocalizedString } from '@/lib/site/types';

/** Full runtime site config for a locale (contact + meta + source flags). */
export function getSiteConfig(locale: Locale): SiteConfig {
  return resolveSiteConfig(locale);
}

/** Contact slice — convenience for components that only need channels. */
export function getSiteContact(locale: Locale): SiteContact {
  return resolveSiteConfig(locale).contact;
}

/** Canonical site URL for SEO, sitemap, JSON-LD. */
export { getSiteUrl };

/** Whether runtime config is still mock-sourced. */
export function isMockDataSource(locale: Locale = 'tr'): boolean {
  void locale;
  return isMockFromSource();
}
