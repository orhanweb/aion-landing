// src/lib/site/types.ts
import type { Locale } from '@/i18n/routing';

/** Runtime data origin for contact channels — mock defaults or live env overrides. */
export type SiteDataSource = 'mock' | 'live';

export type LocalizedString = Record<Locale, string>;

export type SiteContact = {
  email: string;
  whatsappE164: string;
  whatsappDisplay: string;
  responseTime: string;
};

export type SiteMeta = {
  url: string;
  name: string;
  tagline: string;
};

export type SiteConfig = {
  source: SiteDataSource;
  meta: SiteMeta;
  contact: SiteContact;
};
