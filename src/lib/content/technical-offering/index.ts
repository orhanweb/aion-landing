// src/lib/content/technical-offering/index.ts
import { technicalOfferingEn } from '@/lib/content/technical-offering/data/en';
import { technicalOfferingTr } from '@/lib/content/technical-offering/data/tr';
import type { TechnicalOffering } from '@/lib/content/technical-offering/types';
import { TECHNICAL_OFFERING_SLUG } from '@/lib/content/technical-offering/types';
import type { Locale } from '@/i18n/routing';

export { TECHNICAL_OFFERING_SLUG, type TechnicalOffering, type TechnicalOfferingArea } from '@/lib/content/technical-offering/types';

export function getTechnicalOffering(locale: Locale): TechnicalOffering {
  return locale === 'tr' ? technicalOfferingTr : technicalOfferingEn;
}

export function getTechnicalOfferingPath(): string {
  return `/services/${TECHNICAL_OFFERING_SLUG}`;
}
