// src/lib/content/services/index.ts
import type { Locale } from '@/i18n/routing';
import { servicesEn } from '@/lib/content/services/en';
import { servicesTr } from '@/lib/content/services/tr';
import { SERVICE_SLUGS, type Service, type ServiceSlug } from '@/lib/content/services/types';

export { SERVICE_SLUGS, type Service, type ServiceSlug, type ServiceStandard, type ServiceStep } from '@/lib/content/services/types';

export function getServices(locale: Locale): Service[] {
  return locale === 'tr' ? servicesTr : servicesEn;
}

export function getService(locale: Locale, slug: string): Service | undefined {
  return getServices(locale).find(service => service.slug === slug);
}

export function getRelatedServices(locale: Locale, slugs: ServiceSlug[]): Service[] {
  return slugs.map(slug => getService(locale, slug)).filter((service): service is Service => service !== undefined);
}

export function getServiceSlugs(): ServiceSlug[] {
  return [...SERVICE_SLUGS];
}
