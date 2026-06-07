// src/lib/schema/site-entity.ts
import { localizedPageUrl, normalizeSiteUrl } from '@/lib/schema/url';
import { getSiteUrl } from '@/lib/site';

export function organizationEntityId(siteUrl = normalizeSiteUrl(getSiteUrl())) {
  return `${siteUrl}/#organization`;
}

export function websiteEntityId(siteUrl = normalizeSiteUrl(getSiteUrl())) {
  return `${siteUrl}/#website`;
}

export function personEntityId(slug: string, siteUrl = normalizeSiteUrl(getSiteUrl())) {
  return `${siteUrl}/#person-${slug}`;
}

export function personProfileUrl(locale: string, slug: string, siteUrl = normalizeSiteUrl(getSiteUrl())) {
  return `${localizedPageUrl(locale, '/about', siteUrl)}#team-${slug}`;
}

export function serviceEntityId(locale: string, slug: string, siteUrl = normalizeSiteUrl(getSiteUrl())) {
  return `${localizedPageUrl(locale, `/services/${slug}`, siteUrl)}#service`;
}

export function serviceWebPageEntityId(locale: string, slug: string, siteUrl = normalizeSiteUrl(getSiteUrl())) {
  return `${localizedPageUrl(locale, `/services/${slug}`, siteUrl)}#webpage`;
}

export function faqPageEntityId(pageUrl: string) {
  return `${pageUrl}#faq`;
}

export function faqQuestionFragmentId(faqId: string) {
  return `faq-${faqId}`;
}

export function faqQuestionEntityId(pageUrl: string, faqId: string) {
  return `${pageUrl}#${faqQuestionFragmentId(faqId)}`;
}

export function breadcrumbEntityId(pageUrl: string) {
  return `${pageUrl}#breadcrumb`;
}
