// src/app/[locale]/about/page.tsx
import { AboutPrinciples } from '@/components/sections/about-principles';
import { AssessmentTeaser } from '@/components/sections/assessment-teaser';
import { TeamSection } from '@/components/sections/team-section';
import { Container, Section } from '@/components/ui/container';
import { Prose } from '@/components/ui/content-width';
import { MonoLabel } from '@/components/ui/mono-label';
import { buildLocalizedPageMetadata } from '@/lib/seo/page-metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildLocalizedPageMetadata(locale as Locale, '/about', 'about');
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('about');

  return (
    <>
      <Section className="pt-24">
        <Container>
          <Prose>
            <MonoLabel>{t('eyebrow')}</MonoLabel>
            <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">{t('title')}</h1>
            <AboutPrinciples locale={locale as Locale} />
          </Prose>
        </Container>
      </Section>
      <TeamSection id="team" />
      <AssessmentTeaser />
    </>
  );
}
