// src/app/[locale]/services/page.tsx
import { AssessmentTeaser } from '@/components/sections/assessment-teaser';
import { ServicesBento } from '@/components/sections/services-bento';
import { buildLocalizedPageMetadata } from '@/lib/seo/page-metadata';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildLocalizedPageMetadata(locale as Locale, '/services', 'services');
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ServicesBento className="pt-24" showHubIntro titleAs="h1" />
      <AssessmentTeaser />
    </>
  );
}
