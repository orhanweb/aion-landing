// src/app/[locale]/page.tsx
import { HeroSection } from '@/components/sections/hero-section';
import { TrustStrip } from '@/components/sections/trust-strip';
import { ServicesBento } from '@/components/sections/services-bento';
import { ProcessTimeline } from '@/components/sections/process-timeline';
import { TestimonialFeature } from '@/components/sections/testimonial-feature';
import { SignalBanner } from '@/components/sections/signal-banner';
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
    path: '/',
    title: locale === 'tr' ? 'AION — Güvenilir ve Denetlenebilir Yapay Zeka' : 'AION — Trustworthy and Auditable AI',
    description:
      locale === 'tr'
        ? 'ISO 42001, EU AI Act, ISO 27001 ve ISO 22301 ile kurumsal AI yönetişimi ve uyum danışmanlığı.'
        : 'Enterprise AI governance and compliance consultancy for ISO 42001, EU AI Act, ISO 27001, and ISO 22301.'
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesBento />
      <ProcessTimeline />
      <TestimonialFeature />
      <SignalBanner />
    </>
  );
}
