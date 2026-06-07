// src/app/[locale]/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { AssessmentTeaser } from '@/components/sections/assessment-teaser';
import { RelatedServices } from '@/components/sections/related-services';
import { ServiceDetailHero } from '@/components/sections/service-detail-hero';
import { ServiceFaqSection } from '@/components/sections/service-faq-section';
import { ServiceGapCards } from '@/components/sections/service-gap-cards';
import { ServiceOutcomes } from '@/components/sections/service-outcomes';
import { ServiceProcessTimeline } from '@/components/sections/service-process-timeline';
import { ServiceTopicGrid } from '@/components/sections/service-topic-grid';
import { Container, Section } from '@/components/ui/container';
import { getService, getServiceSlugs } from '@/lib/content/services';
import type { ServiceSectionsLayout, ServiceSlug, ServiceStep } from '@/lib/content/services/types';
import { JsonLd } from '@/lib/schema/json-ld';
import { servicePageJsonLd } from '@/lib/schema/service-page';
import { buildServicePageMetadata } from '@/lib/seo/page-metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap(locale => getServiceSlugs().map(slug => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;

  return buildServicePageMetadata(locale as Locale, slug);
}

function ServiceBody({ layout, label, title, steps }: { layout: ServiceSectionsLayout; label: string; title: string; steps: ServiceStep[] }) {
  if (layout === 'process') {
    return <ServiceProcessTimeline label={label} title={title} steps={steps} />;
  }

  if (layout === 'gaps') {
    return <ServiceGapCards label={label} title={title} steps={steps} />;
  }

  return <ServiceTopicGrid label={label} title={title} steps={steps} />;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getService(locale as Locale, slug);

  if (!service) {
    notFound();
  }

  const { sections } = service;
  const structuredData = await servicePageJsonLd(locale as Locale, slug as ServiceSlug);
  const t = await getTranslations('serviceDetail');

  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceDetailHero subtitle={service.subtitle} title={service.title} intro={service.intro} standard={service.standard} />

      <Section variant="elevated">
        <Container>
          <ServiceOutcomes standard={service.standard} outcomes={service.outcomes} />
        </Container>
      </Section>

      <Section>
        <Container>
          <ServiceBody layout={sections.layout} label={sections.label} title={sections.title} steps={service.steps} />
        </Container>
      </Section>

      {service.faqs.length > 0 ? (
        <Section id="faq" variant="elevated" aria-labelledby="service-faq-heading">
          <Container>
            <ServiceFaqSection
              label={t('faqLabel')}
              title={t('faqTitle', { service: service.title })}
              titleId="service-faq-heading"
              faqs={service.faqs}
            />
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <RelatedServices locale={locale as Locale} relatedSlugs={service.relatedSlugs} />
        </Container>
      </Section>

      <AssessmentTeaser />
    </>
  );
}
