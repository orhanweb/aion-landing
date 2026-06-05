// src/app/[locale]/cookies/page.tsx
import { LegalDocumentView } from '@/components/sections/legal-document';
import { Container, Section } from '@/components/ui/container';
import { Prose } from '@/components/ui/content-width';
import { MonoLabel } from '@/components/ui/mono-label';
import { getLegalDocument } from '@/lib/content/legal';
import { buildLegalPageMetadata } from '@/lib/seo/page-metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildLegalPageMetadata(locale as Locale, '/cookies', 'cookies');
}

export default async function CookiesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('legal');
  const doc = getLegalDocument(locale as Locale, 'cookies');

  return (
    <Section className="pt-24">
      <Container>
        <Prose>
          <MonoLabel>{t('eyebrow')}</MonoLabel>
          <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">{doc.title}</h1>
          <p className="mt-4 text-muted-foreground">{doc.description}</p>
          <LegalDocumentView document={doc} />
        </Prose>
      </Container>
    </Section>
  );
}
