// src/app/[locale]/privacy/page.tsx
import { LegalDocumentView } from '@/components/sections/legal-document';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { getLegalDocument } from '@/lib/content/legal';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const doc = getLegalDocument(locale as Locale, 'privacy');

  return buildPageMetadata({
    locale: locale as Locale,
    path: '/privacy',
    title: `${doc.title} | AION`,
    description: doc.description
  });
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('legal');
  const doc = getLegalDocument(locale as Locale, 'privacy');

  return (
    <Section className="pt-24">
      <Container className="max-w-3xl">
        <MonoLabel>{t('eyebrow')}</MonoLabel>
        <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">{doc.title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{doc.description}</p>
        <LegalDocumentView document={doc} />
      </Container>
    </Section>
  );
}
