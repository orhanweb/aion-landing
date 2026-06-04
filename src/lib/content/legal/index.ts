// src/lib/content/legal/index.ts
import type { Locale } from '@/i18n/routing';
import { getMockLegalDocument } from '@/lib/mock/content';
import type { LegalDocument, LegalSlug } from '@/lib/content/legal/types';

export type { LegalDocument, LegalSlug, LegalSection } from '@/lib/content/legal/types';

export function getLegalDocument(locale: Locale, slug: LegalSlug): LegalDocument {
  return getMockLegalDocument(locale, slug);
}
