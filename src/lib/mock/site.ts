// src/lib/mock/site.ts
import type { LocalizedString, SiteContact, SiteMeta } from '@/lib/site/types';

/**
 * Client-facing runtime placeholders — edit here before go-live.
 * Contact fields can also be overridden via NEXT_PUBLIC_* env when SITE_DATA_SOURCE=live.
 */
export const mockSiteMeta: SiteMeta = {
  url: 'https://aion.tr',
  name: 'AION',
  tagline: 'Artificial Intelligence Oversight Network'
};

export const mockContactBase = {
  email: 'contact@aion.tr',
  whatsappE164: '+905435218694',
  whatsappDisplay: '+90 (543) 521 86 94'
} as const;

export const mockContactResponseTime: LocalizedString = {
  tr: 'İş günlerinde 24 saat içinde dönüş',
  en: 'Response within 24 business hours'
};

export function buildMockContact(locale: keyof LocalizedString): SiteContact {
  return {
    ...mockContactBase,
    responseTime: mockContactResponseTime[locale]
  };
}
