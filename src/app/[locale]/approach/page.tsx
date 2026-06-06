// src/app/[locale]/approach/page.tsx
import { ProcessTimeline } from '@/components/sections/process-timeline';
import { buildLocalizedPageMetadata } from '@/lib/seo/page-metadata';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildLocalizedPageMetadata(locale as Locale, '/approach', 'approach');
}

export default async function ApproachPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProcessTimeline titleAs="h1" />;
}
