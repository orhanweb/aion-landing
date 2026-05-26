// src/app/[locale]/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { AssessmentTeaser } from '@/components/sections/assessment-teaser';
import { RelatedServices } from '@/components/sections/related-services';
import { ServiceOutcomes } from '@/components/sections/service-outcomes';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { FadeIn } from '@/components/motion/fade-in';
import { getService, getServiceSlugs } from '@/lib/content/services';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { setRequestLocale, getTranslations } from 'next-intl/server';
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

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('serviceDetail');

  const service = getService(locale as Locale, slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Section variant="elevated" spacing="compact" className="pt-24">
        <Container className="max-w-3xl">
          <MonoLabel className="text-accent">{service.subtitle}</MonoLabel>
          <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">{service.title}</h1>
          <div className="mt-6 space-y-4">
            {service.intro.map(paragraph => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <ServiceOutcomes standard={service.standard} outcomes={service.outcomes} />
        </Container>
      </Section>

      <Section variant="elevated">
        <Container className="max-w-3xl">
          <FadeIn>
            <MonoLabel className="text-accent">{t('processLabel')}</MonoLabel>
            <h2 className="font-display mt-4 text-2xl tracking-tight md:text-3xl">{t('processTitle')}</h2>
          </FadeIn>
          <div className="mt-10">
            <Accordion>
              {service.steps.map(step => (
                <AccordionItem key={step.title} title={step.title}>
                  {step.description}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <RelatedServices locale={locale as Locale} relatedSlugs={service.relatedSlugs} />
        </Container>
      </Section>

      <AssessmentTeaser />
    </>
  );
}
