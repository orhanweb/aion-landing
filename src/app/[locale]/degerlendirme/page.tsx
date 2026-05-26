// src/app/[locale]/degerlendirme/page.tsx
import { AssessmentWizard } from '@/components/assessment/assessment-wizard';
import { Container, Section } from '@/components/ui/container';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildPageMetadata({
    locale: locale as Locale,
    path: '/degerlendirme',
    title: locale === 'tr' ? 'Uyum Değerlendirmesi | AION' : 'Compliance Assessment | AION',
    description:
      locale === 'tr'
        ? 'ISO 27001, ISO 42001 ve EU AI Act için kurumunuza özel uyum değerlendirmesi.'
        : 'Organization-specific compliance assessment for ISO 27001, ISO 42001, and EU AI Act.'
  });
}

export default async function AssessmentPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('assessment');

  return (
    <Section className="pt-24">
      <Container className="max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
          <p className="mt-3 text-muted-foreground">{t('description')}</p>
        </div>
        <AssessmentWizard />
      </Container>
    </Section>
  );
}
