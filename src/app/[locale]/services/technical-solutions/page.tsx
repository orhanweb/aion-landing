// src/app/[locale]/services/technical-solutions/page.tsx
import { ServiceOutcomes } from '@/components/sections/service-outcomes';
import { ServiceTopicGrid } from '@/components/sections/service-topic-grid';
import { TechnicalDetailHero } from '@/components/sections/technical-detail-hero';
import { Container, Section } from '@/components/ui/container';
import { getTechnicalOffering } from '@/lib/content/technical-offering';
import { buildTechnicalOfferingPageMetadata } from '@/lib/seo/page-metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildTechnicalOfferingPageMetadata(locale as Locale);
}

export default async function TechnicalSolutionsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const offering = getTechnicalOffering(locale as Locale);
  const t = await getTranslations('technicalDetail');

  return (
    <>
      <TechnicalDetailHero
        subtitle={offering.subtitle}
        title={offering.title}
        intro={offering.intro}
        focus={offering.focus}
        linkedinUrl={offering.linkedinUrl}
      />

      <Section variant="elevated">
        <Container>
          <ServiceOutcomes standard={offering.focus} outcomes={offering.capabilities} outcomesLabel={t('capabilitiesLabel')} />
        </Container>
      </Section>

      <Section>
        <Container>
          <ServiceTopicGrid label={t('areasLabel')} title={t('areasTitle')} steps={offering.areas} />
        </Container>
      </Section>
    </>
  );
}
