// src/app/[locale]/contact/page.tsx
import { ContactChannels } from '@/components/sections/contact-channels';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildPageMetadata({
    locale: locale as Locale,
    path: '/contact',
    title: locale === 'tr' ? 'İletişim | AION' : 'Contact | AION',
    description: locale === 'tr' ? 'AION ile iletişime geçin veya uyum değerlendirmesi başlatın.' : 'Contact AION or start a compliance assessment.'
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <Section className="pt-24">
      <Container className="max-w-3xl">
        <MonoLabel>{t('eyebrow')}</MonoLabel>
        <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">{t('title')}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{t('description')}</p>
        <ContactChannels />
      </Container>
    </Section>
  );
}
