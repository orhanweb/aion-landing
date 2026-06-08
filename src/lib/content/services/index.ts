// src/lib/content/services/index.ts
import type { Locale } from '@/i18n/routing';
import { resolveServices } from '@/lib/content/data';
import { SERVICE_SLUGS, type Service, type ServiceSlug } from '@/lib/content/services/types';

export {
  SERVICE_SLUGS,
  type Service,
  type ServiceContent,
  type ServiceFaq,
  type ServiceSlug,
  type ServiceStandard,
  type ServiceStep,
  type ServiceSections,
  type ServiceSectionsLayout
} from '@/lib/content/services/types';

export function getServices(locale: Locale): Service[] {
  return resolveServices(locale);
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
