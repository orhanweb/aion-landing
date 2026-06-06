// src/lib/seo/metadata.ts
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/routing';
import { getSiteUrl } from '@/lib/site';

type PageMetadataInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  siteName?: string;
};

const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630
} as const;

function buildOgImagePath(locale: Locale) {
  return `/${locale}/opengraph-image`;
}

function resolvePageTitle(path: string, title: string, siteName: string) {
  return path === '/' ? title : `${title} | ${siteName}`;
}

export function buildPageMetadata({ locale, path, title, description, siteName = 'AION' }: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const pathSuffix = path === '/' ? '' : path;
  const localizedPath = `/${locale}${pathSuffix}`;
  const canonical = `${siteUrl}${localizedPath}`;
  const alternateLocale = locale === 'tr' ? 'en' : 'tr';
  const ogImagePath = buildOgImagePath(locale);
  const resolvedTitle = resolvePageTitle(path, title, siteName);
  const ogImage = { url: ogImagePath, ...OG_IMAGE_SIZE, alt: resolvedTitle };

  return {
    title: path === '/' ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        'x-default': `${siteUrl}/tr${pathSuffix}`,
        tr: `${siteUrl}/tr${pathSuffix}`,
        en: `${siteUrl}/en${pathSuffix}`
      }
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url: canonical,
      siteName,
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      alternateLocale: alternateLocale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      images: [ogImagePath]
    },
    robots: {
      index: true,
      follow: true
    },
    metadataBase: new URL(siteUrl)
  };
}
