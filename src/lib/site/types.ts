// src/lib/site/types.ts
import type { Locale } from '@/i18n/routing';

/** Runtime data origin for contact channels — mock defaults or live env overrides. */
export type SiteDataSource = 'mock' | 'live';

export type LocalizedString = Record<Locale, string>;

export type SiteContact = {
  email: string;
  phoneE164: string;
  phoneDisplay: string;
  calendlyUrl: string;
  address: string;
  responseTime: string;
  linkedin: string;
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
