// src/app/[locale]/hizmetler/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Container, Section } from '@/components/ui/container';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { getService, getServiceSlugs } from '@/lib/content/services';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap(locale => getServiceSlugs(locale).map(slug => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const service = getService(locale as Locale, slug);

  if (!service) {
    return {};
  }

  return buildPageMetadata({
    locale: locale as Locale,
    path: `/hizmetler/${slug}`,
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
      <Section className="border-b border-border/60 bg-card/20 pt-24">
        <Container className="max-w-3xl">
          <Badge>{service.subtitle}</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">{service.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{service.description}</p>
        </Container>
      </Section>

      {service.steps.length > 0 ? (
        <Section>
          <Container className="max-w-3xl">
            <Accordion defaultOpenId={undefined}>
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
