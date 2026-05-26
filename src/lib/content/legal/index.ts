// src/lib/content/legal/index.ts
import type { Locale } from '@/i18n/routing';
import { cookiesEn } from '@/lib/content/legal/cookies.en';
import { cookiesTr } from '@/lib/content/legal/cookies.tr';
import { privacyEn } from '@/lib/content/legal/privacy.en';
import { privacyTr } from '@/lib/content/legal/privacy.tr';
import { LEGAL_SLUGS, type LegalDocument, type LegalSlug } from '@/lib/content/legal/types';

export { LEGAL_SLUGS, type LegalDocument, type LegalSlug, type LegalSection } from '@/lib/content/legal/types';

const documentsTr: Record<LegalSlug, LegalDocument> = {
  privacy: privacyTr,
  cookies: cookiesTr
};

const documentsEn: Record<LegalSlug, LegalDocument> = {
  privacy: privacyEn,
  cookies: cookiesEn
};

export function getLegalDocument(locale: Locale, slug: LegalSlug): LegalDocument {
  const bundle = locale === 'tr' ? documentsTr : documentsEn;
  return bundle[slug];
}

export function getLegalSlugs(): LegalSlug[] {
  return [...LEGAL_SLUGS];
}
