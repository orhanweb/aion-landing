// src/lib/seo/metadata.ts
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/routing';
import { getSiteUrl } from '@/lib/site';

type PageMetadataInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
};

export function buildPageMetadata({ locale, path, title, description }: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const localizedPath = `/${locale}${path === '/' ? '' : path}`;
  const canonical = `${siteUrl}${localizedPath}`;
  const alternateLocale = locale === 'tr' ? 'en' : 'tr';

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        tr: `${siteUrl}/tr${path === '/' ? '' : path}`,
        en: `${siteUrl}/en${path === '/' ? '' : path}`
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'AION',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      alternateLocale: alternateLocale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website'
    },
    robots: {
      index: true,
      follow: true
    },
    metadataBase: new URL(siteUrl)
  };
}
