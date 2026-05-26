// src/app/[locale]/yaklasimimiz/page.tsx
import { ProcessTimeline } from '@/components/sections/process-timeline';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildPageMetadata({
    locale: locale as Locale,
    path: '/yaklasimimiz',
    title: locale === 'tr' ? 'Yaklaşımımız | AION' : 'Our Approach | AION',
    description:
      locale === 'tr' ? 'Stratejiden sertifikasyon denetimine kadar AION yöntemi.' : 'The AION method from strategy to certification audit.'
  });
}

export default async function ApproachPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProcessTimeline />;
}
