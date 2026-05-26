// src/lib/schema/organization.ts
import { getSiteConfig } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export function organizationJsonLd(locale: Locale = 'tr') {
  const site = getSiteConfig(locale);

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.meta.name,
    alternateName: site.meta.tagline,
    url: site.meta.url,
    email: site.contact.email,
    telephone: site.contact.phoneE164,
    description: 'Enterprise AI governance, ISO 42001, EU AI Act compliance, and information security consultancy.',
    areaServed: ['TR', 'EU'],
    knowsAbout: ['ISO/IEC 42001', 'EU AI Act', 'ISO/IEC 27001', 'ISO 22301', 'AI Governance', 'Human Oversight']
  };
}
