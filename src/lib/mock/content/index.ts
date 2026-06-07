// src/lib/mock/content/index.ts
import type { Locale } from '@/i18n/routing';
import type { LegalSlug } from '@/lib/content/legal/types';
import type { Service, ServiceContent } from '@/lib/content/services/types';
import { cookiesEn } from '@/lib/mock/content/legal/cookies.en';
import { cookiesTr } from '@/lib/mock/content/legal/cookies.tr';
import { privacyEn } from '@/lib/mock/content/legal/privacy.en';
import { privacyTr } from '@/lib/mock/content/legal/privacy.tr';
import { mockServicesEn } from '@/lib/mock/content/services/en';
import { serviceFaqsEn } from '@/lib/mock/content/services/faqs/en';
import { serviceFaqsTr } from '@/lib/mock/content/services/faqs/tr';
import { mockServicesTr } from '@/lib/mock/content/services/tr';

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

export function getMockServices(locale: Locale): Service[] {
  const services = locale === 'tr' ? mockServicesTr : mockServicesEn;

  return attachFaqs(services, locale);
}

export function getMockLegalDocument(locale: Locale, slug: LegalSlug) {
  const bundle = locale === 'tr' ? legalTr : legalEn;
  return bundle[slug];
}
