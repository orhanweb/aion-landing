// src/app/[locale]/hizmetler/page.tsx
import { ServicesSection } from '@/components/sections/services-section';
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
    path: '/hizmetler',
    title: locale === 'tr' ? 'Hizmetler | AION' : 'Services | AION',
    description:
      locale === 'tr'
        ? 'AI yönetişimi, regülasyon uyumu, bilgi güvenliği, operasyonel dayanıklılık ve insan gözetimi hizmetleri.'
        : 'AI governance, regulatory compliance, information security, operational resilience, and human oversight services.'
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesSection />;
}
