// src/lib/seo/page-metadata.ts
import type { Locale } from '@/i18n/routing';
import { getLegalDocument } from '@/lib/content/legal';
import type { LegalSlug } from '@/lib/content/legal/types';
import { getService } from '@/lib/content/services';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export type StaticPageMetaKey = 'home' | 'about' | 'approach' | 'contact' | 'assessment' | 'services';

type PageCopy = {
  title: string;
  description: string;
};

async function buildResolvedPageMetadata(locale: Locale, path: string, resolveCopy: (siteName: string) => PageCopy) {
  setRequestLocale(locale);
  const meta = await getTranslations('meta');
  const copy = resolveCopy(meta('siteName'));

  return buildPageMetadata({
    locale,
    path,
    title: copy.title,
    description: copy.description,
    siteName: meta('siteName')
  });
}

export async function buildLocalizedPageMetadata(locale: Locale, path: string, pageKey: StaticPageMetaKey) {
  setRequestLocale(locale);
  const t = await getTranslations(`meta.pages.${pageKey}`);

  return buildResolvedPageMetadata(locale, path, () => ({
    title: t('title'),
    description: t('description')
  }));
}

export async function buildLegalPageMetadata(locale: Locale, path: string, slug: LegalSlug) {
  const doc = getLegalDocument(locale, slug);

  return buildResolvedPageMetadata(locale, path, siteName => ({
    title: `${doc.title} | ${siteName}`,
    description: doc.description
  }));
}

export async function buildServicePageMetadata(locale: Locale, slug: string) {
  const service = getService(locale, slug);

  if (!service) {
    return {};
  }

  return buildResolvedPageMetadata(locale, `/services/${slug}`, siteName => ({
    title: `${service.title} | ${siteName}`,
    description: service.shortDescription
  }));
}
