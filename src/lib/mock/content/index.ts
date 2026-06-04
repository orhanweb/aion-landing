// src/lib/mock/content/index.ts
import type { Locale } from '@/i18n/routing';
import type { LegalSlug } from '@/lib/content/legal/types';
import type { Service } from '@/lib/content/services/types';
import { cookiesEn } from '@/lib/mock/content/legal/cookies.en';
import { cookiesTr } from '@/lib/mock/content/legal/cookies.tr';
import { privacyEn } from '@/lib/mock/content/legal/privacy.en';
import { privacyTr } from '@/lib/mock/content/legal/privacy.tr';
import { mockServicesEn } from '@/lib/mock/content/services/en';
import { mockServicesTr } from '@/lib/mock/content/services/tr';

const legalTr = { privacy: privacyTr, cookies: cookiesTr } as const;
const legalEn = { privacy: privacyEn, cookies: cookiesEn } as const;

export function getMockServices(locale: Locale): Service[] {
  return locale === 'tr' ? mockServicesTr : mockServicesEn;
}

export function getMockLegalDocument(locale: Locale, slug: LegalSlug) {
  const bundle = locale === 'tr' ? legalTr : legalEn;
  return bundle[slug];
}
