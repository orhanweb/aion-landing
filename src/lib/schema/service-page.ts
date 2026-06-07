// src/lib/schema/service-page.ts
import { getService } from '@/lib/content/services';
import type { ServiceSlug } from '@/lib/content/services/types';
import { breadcrumbGraphNode } from '@/lib/schema/breadcrumb';
import { faqPageGraphNode } from '@/lib/schema/faq-page';
import { SCHEMA_AREA_SERVED, schemaInLanguage } from '@/lib/schema/helpers';
import { faqPageEntityId, organizationEntityId, serviceEntityId, serviceWebPageEntityId, websiteEntityId } from '@/lib/schema/site-entity';
import { localizedPageUrl, normalizeSiteUrl } from '@/lib/schema/url';
import { CONTENT_LAST_MODIFIED } from '@/lib/seo/content-version';
import type { Locale } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function servicePageJsonLd(locale: Locale, slug: ServiceSlug) {
  const service = getService(locale, slug);

  if (!service) {
    return null;
  }

  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const meta = await getTranslations('meta');

  const siteUrl = normalizeSiteUrl();
  const pageUrl = localizedPageUrl(locale, `/services/${slug}`, siteUrl);
  const servicesUrl = localizedPageUrl(locale, '/services', siteUrl);
  const homeUrl = localizedPageUrl(locale, '', siteUrl);
  const serviceId = serviceEntityId(locale, slug, siteUrl);
  const webPageId = serviceWebPageEntityId(locale, slug, siteUrl);
  const faqNode = faqPageGraphNode(service.faqs, pageUrl, webPageId, locale);

  const webPage = {
    '@type': 'WebPage',
    '@id': webPageId,
    name: service.title,
    description: service.shortDescription,
    url: pageUrl,
    inLanguage: schemaInLanguage(locale),
    dateModified: CONTENT_LAST_MODIFIED.toISOString(),
    isPartOf: {
      '@id': websiteEntityId(siteUrl)
    },
    publisher: {
      '@id': organizationEntityId(siteUrl)
    },
    mainEntity: {
      '@id': serviceId
    },
    ...(faqNode ? { hasPart: { '@id': faqPageEntityId(pageUrl) } } : {})
  };

  const serviceSchema = {
    '@type': 'Service',
    '@id': serviceId,
    name: service.title,
    description: service.shortDescription,
    url: pageUrl,
    serviceType: service.standard,
    provider: {
      '@id': organizationEntityId(siteUrl)
    },
    areaServed: [...SCHEMA_AREA_SERVED],
    serviceOutput: service.outcomes.map(outcome => ({
      '@type': 'Thing',
      name: outcome
    }))
  };

  const breadcrumbs = breadcrumbGraphNode(
    [
      { name: meta('breadcrumb.home'), url: homeUrl },
      { name: nav('services'), url: servicesUrl },
      { name: service.title, url: pageUrl }
    ],
    pageUrl
  );

  const graph = [webPage, serviceSchema, breadcrumbs, ...(faqNode ? [faqNode] : [])];

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}
