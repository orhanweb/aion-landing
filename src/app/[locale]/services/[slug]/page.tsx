// src/app/[locale]/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { AssessmentTeaser } from '@/components/sections/assessment-teaser';
import { RelatedServices } from '@/components/sections/related-services';
import { ServiceDetailHero } from '@/components/sections/service-detail-hero';
import { ServiceGapCards } from '@/components/sections/service-gap-cards';
import { ServiceOutcomes } from '@/components/sections/service-outcomes';
import { ServiceProcessTimeline } from '@/components/sections/service-process-timeline';
import { ServiceTopicGrid } from '@/components/sections/service-topic-grid';
import { Container, Section } from '@/components/ui/container';
import { getService, getServiceSlugs } from '@/lib/content/services';
import type { ServiceSectionsLayout, ServiceStep } from '@/lib/content/services/types';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap(locale => getServiceSlugs().map(slug => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const service = getService(locale as Locale, slug);

  if (!service) {
    return {};
  }

  return buildPageMetadata({
    locale: locale as Locale,
    path: `/services/${slug}`,
    title: `${service.title} | AION`,
    description: service.shortDescription
  });
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

  return (
    <>
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

      {sections.layout === 'gaps' ? <AssessmentTeaser variant="inline" /> : null}

      <Section>
        <Container>
          <RelatedServices locale={locale as Locale} relatedSlugs={service.relatedSlugs} />
        </Container>
      </Section>

      <AssessmentTeaser />
    </>
  );
}
