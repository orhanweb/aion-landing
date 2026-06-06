// src/lib/schema/organization.ts
import { organizationEntityId } from '@/lib/schema/site-entity';
import { getSiteConfig, getSiteUrl } from '@/lib/site';
import type { Locale } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export function websiteJsonLd(locale: Locale) {
  const site = getSiteConfig(locale);
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: site.meta.name,
    url: siteUrl,
    inLanguage: locale === 'tr' ? 'tr-TR' : 'en-US',
    publisher: {
      '@id': organizationEntityId(siteUrl)
    }
  };
}

export async function organizationJsonLd(locale: Locale) {
  setRequestLocale(locale);
  const meta = await getTranslations('meta');
  const site = getSiteConfig(locale);
  const siteUrl = getSiteUrl();
  const logoUrl = `${siteUrl}/aion-mark.svg`;

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': organizationEntityId(siteUrl),
    name: site.meta.name,
    alternateName: meta('siteTagline'),
    url: siteUrl,
    logo: logoUrl,
    image: logoUrl,
    email: site.contact.email,
    telephone: site.contact.phoneE164,
    description: meta('organizationDescription'),
    inLanguage: locale === 'tr' ? 'tr-TR' : 'en-US',
    areaServed: ['TR', 'EU'],
    knowsAbout: ['ISO/IEC 42001', 'EU AI Act', 'ISO/IEC 27001', 'ISO 22301', 'AI Governance', 'Human Oversight'],
    ...(site.contact.linkedin ? { sameAs: [site.contact.linkedin] } : {})
  };
}
