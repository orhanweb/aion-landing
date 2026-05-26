// src/lib/schema/organization.ts
import { SITE_URL } from '@/lib/seo/metadata';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AION',
    alternateName: 'Artificial Intelligence Oversight Network',
    url: SITE_URL,
    description: 'Enterprise AI governance, ISO 42001, EU AI Act compliance, and information security consultancy.',
    areaServed: ['TR', 'EU'],
    knowsAbout: ['ISO/IEC 42001', 'EU AI Act', 'ISO/IEC 27001', 'ISO 22301', 'AI Governance', 'Human Oversight']
  };
}
