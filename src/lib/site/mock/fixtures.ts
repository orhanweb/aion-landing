// src/lib/site/mock/fixtures.ts
import type { LocalizedString, SiteContact, SiteMeta } from '@/lib/site/types';

/**
 * Placeholder runtime values used when env vars are not set.
 * Replace by setting vars in .env — never edit these for production.
 */
export const mockSiteMeta: SiteMeta = {
  url: 'https://aion.tr',
  name: 'AION',
  tagline: 'Artificial Intelligence Oversight Network'
};

export const mockContactBase = {
  email: 'contact@aion.tr',
  phoneE164: '+902125550000',
  phoneDisplay: '+90 (212) 555 00 00',
  calendlyUrl: 'https://calendly.com/aion-consulting/discovery-call',
  linkedin: 'https://www.linkedin.com/company/aion-tr'
} as const;

export const mockContactAddress: LocalizedString = {
  tr: 'Levent, İstanbul, Türkiye',
  en: 'Levent, Istanbul, Türkiye'
};

export const mockContactResponseTime: LocalizedString = {
  tr: 'İş günlerinde 24 saat içinde dönüş',
  en: 'Response within 24 business hours'
};

export function buildMockContact(locale: keyof LocalizedString): SiteContact {
  return {
    ...mockContactBase,
    address: mockContactAddress[locale],
    responseTime: mockContactResponseTime[locale]
  };
}
