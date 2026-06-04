// src/app/[locale]/page.tsx
import { HeroSection } from '@/components/sections/hero-section';
import { TrustStrip } from '@/components/sections/trust-strip';
import { ServicesBento } from '@/components/sections/services-bento';
import { ProcessTimeline } from '@/components/sections/process-timeline';
import { TestimonialsGrid } from '@/components/sections/testimonials-grid';
import { TeamSection } from '@/components/sections/team-section';
import { AssessmentTeaser } from '@/components/sections/assessment-teaser';
import { SignalBanner } from '@/components/sections/signal-banner';
import { ProblemSolutionBridge } from '@/components/sections/problem-solution-bridge';
import { MetricsBand } from '@/components/sections/metrics-band';
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
    title: locale === 'tr' ? 'AION — AI Sisteminiz Denetime Hazır mı?' : 'AION — Is Your AI System Audit-Ready?',
    description:
      locale === 'tr'
        ? 'EU AI Act ve ISO 42001 için risk sınıflandırması, kontrol boşluğu analizi ve sertifikasyona giden uyum yol haritası.'
        : 'Risk classification, control gap analysis, and compliance roadmap for EU AI Act and ISO 42001 readiness.'
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <TrustStrip />
      <SignalBanner />
      <ProblemSolutionBridge />
      <MetricsBand />
      <ServicesBento />
      <ProcessTimeline />
      <TestimonialsGrid />
      <TeamSection />
      <AssessmentTeaser />
    </>
  );
}
