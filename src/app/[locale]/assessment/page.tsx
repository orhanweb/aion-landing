// src/app/[locale]/assessment/page.tsx
import { AssessmentWizard } from '@/components/assessment/assessment-wizard';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { getSiteContact } from '@/lib/content/site-config';
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
    path: '/assessment',
    title: locale === 'tr' ? 'Uyum Değerlendirmesi | AION' : 'Compliance Assessment | AION',
    description:
      locale === 'tr'
        ? 'ISO 27001, ISO 42001 ve EU AI Act için kurumunuza özel uyum değerlendirmesi.'
        : 'Organization-specific compliance assessment for ISO 27001, ISO 42001, and EU AI Act.'
  });
}

export default async function AssessmentPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('assessment');
  const contact = getSiteContact(locale as Locale);

  return (
    <Section className="pt-24">
      <Container className="max-w-2xl">
        <MonoLabel>{t('eyebrow')}</MonoLabel>
        <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">{t('title')}</h1>
        <p className="mt-3 text-muted-foreground">{t('description')}</p>
        <div className="mt-10">
          <AssessmentWizard calendlyUrl={contact.calendlyUrl} responseTime={contact.responseTime} />
        </div>
      </Container>
    </Section>
  );
}
