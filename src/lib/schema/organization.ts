// src/lib/schema/organization.ts
import { getSiteContact } from '@/lib/content/site-config';
import { SITE_URL } from '@/lib/seo/metadata';
import type { Locale } from '@/i18n/routing';

export function organizationJsonLd(locale: Locale = 'tr') {
  const contact = getSiteContact(locale);

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AION',
    alternateName: 'Artificial Intelligence Oversight Network',
    url: SITE_URL,
    email: contact.email,
    telephone: contact.phoneE164,
    description: 'Enterprise AI governance, ISO 42001, EU AI Act compliance, and information security consultancy.',
    areaServed: ['TR', 'EU'],
    knowsAbout: ['ISO/IEC 42001', 'EU AI Act', 'ISO/IEC 27001', 'ISO 22301', 'AI Governance', 'Human Oversight']
  };
}
