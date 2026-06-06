// src/lib/schema/service-page.ts
import { getService } from '@/lib/content/services';
import type { ServiceSlug } from '@/lib/content/services/types';
import { breadcrumbListJsonLd } from '@/lib/schema/breadcrumb';
import { organizationEntityId } from '@/lib/schema/site-entity';
import { getSiteUrl } from '@/lib/site';
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

  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/${locale}/services/${slug}`;
  const servicesUrl = `${siteUrl}/${locale}/services`;
  const homeUrl = `${siteUrl}/${locale}`;
  const serviceId = `${pageUrl}#service`;

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: service.title,
    description: service.shortDescription,
    url: pageUrl,
    inLanguage: locale === 'tr' ? 'tr-TR' : 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'AION',
      url: siteUrl
    },
    mainEntity: {
      '@id': serviceId
    }
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceId,
    name: service.title,
    description: service.shortDescription,
    url: pageUrl,
    serviceType: service.standard,
    provider: {
      '@id': organizationEntityId(siteUrl)
    },
    areaServed: ['TR', 'EU']
  };

  const breadcrumbs = breadcrumbListJsonLd([
    { name: meta('breadcrumb.home'), url: homeUrl },
    { name: nav('services'), url: servicesUrl },
    { name: service.title, url: pageUrl }
  ]);

  return [webPage, serviceSchema, breadcrumbs];
}
