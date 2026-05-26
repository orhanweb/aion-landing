// src/components/sections/services-section.tsx
import { Link } from '@/i18n/navigation';
import { getServices } from '@/lib/content/services';
import { Container, Section } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslations, getLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

export async function ServicesSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('services');
  const services = getServices(locale);

  return (
    <Section id="services">
      <Container className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <Badge variant="accent">{t('eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('description')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(service => (
            <Card key={service.slug} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <Link href={`/hizmetler/${service.slug}`} className="text-sm font-medium text-primary hover:underline">
                  {t('learnMore')} →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
