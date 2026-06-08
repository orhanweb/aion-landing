// src/lib/content/legal/index.ts
import type { Locale } from '@/i18n/routing';
import { resolveLegalDocument } from '@/lib/content/data';
import type { LegalDocument, LegalSlug } from '@/lib/content/legal/types';

export type { LegalDocument, LegalSection, LegalSlug } from '@/lib/content/legal/types';

export function getLegalDocument(locale: Locale, slug: LegalSlug): LegalDocument {
  return resolveLegalDocument(locale, slug);
}
