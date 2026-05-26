// src/app/[locale]/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Container, Section } from '@/components/ui/container';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { MonoLabel } from '@/components/ui/mono-label';
import { getService, getServiceSlugs } from '@/lib/content/services';
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
    description: service.description
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

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
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{service.description}</p>
        </Container>
      </Section>

      {service.steps.length > 0 ? (
        <Section>
          <Container className="max-w-3xl">
            <Accordion>
              {service.steps.map(step => (
                <AccordionItem key={step.title} title={step.title}>
                  {step.description}
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
