// src/lib/content/data/index.ts
import type { Locale } from '@/i18n/routing';
import type { LegalDocument, LegalSlug } from '@/lib/content/legal/types';
import type { Service, ServiceContent } from '@/lib/content/services/types';
import { cookiesEn } from '@/lib/content/data/legal/cookies.en';
import { cookiesTr } from '@/lib/content/data/legal/cookies.tr';
import { privacyEn } from '@/lib/content/data/legal/privacy.en';
import { privacyTr } from '@/lib/content/data/legal/privacy.tr';
import { servicesEn } from '@/lib/content/data/services/en';
import { serviceFaqsEn } from '@/lib/content/data/services/faqs/en';
import { serviceFaqsTr } from '@/lib/content/data/services/faqs/tr';
import { servicesTr } from '@/lib/content/data/services/tr';

const legalTr = { privacy: privacyTr, cookies: cookiesTr } as const;
const legalEn = { privacy: privacyEn, cookies: cookiesEn } as const;

function attachFaqs(services: ServiceContent[], locale: Locale): Service[] {
  const faqsBySlug = locale === 'tr' ? serviceFaqsTr : serviceFaqsEn;

  return services.map(service => {
    const faqs = faqsBySlug[service.slug];

    if (!faqs || faqs.length === 0) {
      throw new Error(`Missing FAQ content for service slug "${service.slug}" (${locale}).`);
    }

    return {
      ...service,
      faqs
    };
  });
}

export function resolveServices(locale: Locale): Service[] {
  const services = locale === 'tr' ? servicesTr : servicesEn;

  return attachFaqs(services, locale);
}

export function resolveLegalDocument(locale: Locale, slug: LegalSlug): LegalDocument {
  const bundle = locale === 'tr' ? legalTr : legalEn;
  return bundle[slug];
}
