// src/lib/geo/sitemap-alternates.ts
import { routing, type Locale } from '@/i18n/routing';
import { getSiteUrl } from '@/lib/site';

function normalizeSiteUrl(siteUrl: string) {
  return siteUrl.replace(/\/+$/, '');
}

function buildLocalizedPath(locale: Locale, path: string) {
  return path === '' ? `/${locale}` : `/${locale}${path}`;
}

export function buildLocalizedLanguages(path: string): Record<string, string> {
  const siteUrl = normalizeSiteUrl(getSiteUrl());
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    languages[locale] = `${siteUrl}${buildLocalizedPath(locale, path)}`;
  }

  languages['x-default'] = `${siteUrl}${buildLocalizedPath(routing.defaultLocale, path)}`;

  return languages;
}

export function defaultLocaleUrl(path: string): string {
  return `${normalizeSiteUrl(getSiteUrl())}${buildLocalizedPath(routing.defaultLocale, path)}`;
}
