// src/lib/schema/site-graph.ts
import { organizationKnowsAboutTopics } from '@/lib/content/authority';
import { SCHEMA_AREA_SERVED, schemaImageObject, schemaInLanguage } from '@/lib/schema/helpers';
import { teamPersonSchemaNodes } from '@/lib/schema/person';
import { organizationEntityId, websiteEntityId } from '@/lib/schema/site-entity';
import { absoluteAssetUrl, localizedPageUrl, normalizeSiteUrl } from '@/lib/schema/url';
import { getSiteConfig, getSiteUrl } from '@/lib/site';
import type { Locale } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

async function organizationSchemaNode(locale: Locale, siteUrl: string, personIds: string[]) {
  setRequestLocale(locale);
  const meta = await getTranslations('meta');
  const site = getSiteConfig(locale);
  const logoUrl = absoluteAssetUrl('/aion-mark.svg', siteUrl);
  const homeUrl = localizedPageUrl(locale, '', siteUrl);

  return {
    '@type': 'ProfessionalService',
    '@id': organizationEntityId(siteUrl),
    name: site.meta.name,
    alternateName: meta('siteTagline'),
    url: homeUrl,
    logo: schemaImageObject(logoUrl),
    image: schemaImageObject(logoUrl),
    email: site.contact.email,
    telephone: site.contact.phoneE164,
    description: meta('organizationDescription'),
    inLanguage: schemaInLanguage(locale),
    areaServed: [...SCHEMA_AREA_SERVED],
    knowsAbout: organizationKnowsAboutTopics(locale),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.address,
      addressCountry: 'TR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: site.contact.email,
      telephone: site.contact.phoneE164,
      areaServed: [...SCHEMA_AREA_SERVED],
      availableLanguage: ['Turkish', 'English']
    },
    ...(site.contact.linkedin ? { sameAs: [site.contact.linkedin] } : {}),
    ...(personIds.length > 0 ? { employee: personIds.map(id => ({ '@id': id })) } : {})
  };
}

function websiteSchemaNode(locale: Locale, siteUrl: string) {
  const site = getSiteConfig(locale);
  const homeUrl = localizedPageUrl(locale, '', siteUrl);

  return {
    '@type': 'WebSite',
    '@id': websiteEntityId(siteUrl),
    name: site.meta.name,
    url: homeUrl,
    inLanguage: schemaInLanguage(locale),
    publisher: {
      '@id': organizationEntityId(siteUrl)
    }
  };
}

export async function siteGraphJsonLd(locale: Locale) {
  const siteUrl = normalizeSiteUrl(getSiteUrl());
  const persons = teamPersonSchemaNodes(locale, siteUrl);
  const personIds = persons.map(person => person['@id']);

  return {
    '@context': 'https://schema.org',
    '@graph': [await organizationSchemaNode(locale, siteUrl, personIds), websiteSchemaNode(locale, siteUrl), ...persons]
  };
}
