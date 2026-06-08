// src/app/[locale]/assessment/page.tsx
import { AssessmentWizard } from '@/components/assessment/assessment-wizard';
import { Container, Section } from '@/components/ui/container';
import { Narrow } from '@/components/ui/content-width';
import { MonoLabel } from '@/components/ui/mono-label';
import { buildLocalizedPageMetadata } from '@/lib/seo/page-metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildLocalizedPageMetadata(locale as Locale, '/assessment', 'assessment');
}

export default async function AssessmentPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('assessment');

  return (
    <Section className="pt-24">
      <Container>
        <Narrow>
          <MonoLabel>{t('eyebrow')}</MonoLabel>
          <h1 id="assessment-page-title" className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
            {t('title')}
          </h1>
          <p className="mt-3 text-muted-foreground">{t('description')}</p>
          <div className="mt-10">
            <AssessmentWizard />
          </div>
        </Narrow>
      </Container>
    </Section>
  );
}
