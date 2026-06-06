// src/lib/schema/url.ts
import { getSiteUrl } from '@/lib/site';

export function normalizeSiteUrl(siteUrl = getSiteUrl()) {
  return siteUrl.replace(/\/+$/, '');
}

export function absoluteAssetUrl(path: string, siteUrl = normalizeSiteUrl()) {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function localizedPageUrl(locale: string, path: string, siteUrl = normalizeSiteUrl()) {
  return path === '' ? `${siteUrl}/${locale}` : `${siteUrl}/${locale}${path}`;
}
