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
import { buildLocalizedPageMetadata } from '@/lib/seo/page-metadata';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildLocalizedPageMetadata(locale as Locale, '/', 'home');
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
