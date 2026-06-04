// src/lib/content/legal/index.ts
import type { Locale } from '@/i18n/routing';
import { getMockLegalDocument } from '@/lib/mock/content';
import { LEGAL_SLUGS, type LegalDocument, type LegalSlug } from '@/lib/content/legal/types';

export { LEGAL_SLUGS, type LegalDocument, type LegalSlug, type LegalSection } from '@/lib/content/legal/types';

export function getLegalDocument(locale: Locale, slug: LegalSlug): LegalDocument {
  return getMockLegalDocument(locale, slug);
}

export function getLegalSlugs(): LegalSlug[] {
  return [...LEGAL_SLUGS];
}
