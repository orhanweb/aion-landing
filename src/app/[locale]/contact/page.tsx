// src/app/[locale]/contact/page.tsx
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { Link } from '@/i18n/navigation';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import { setRequestLocale } from 'next-intl/server';
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

  return (
    <Section className="pt-24">
      <Container className="max-w-2xl">
        <MonoLabel>{locale === 'tr' ? 'İletişim' : 'Contact'}</MonoLabel>
        <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">
          {locale === 'tr' ? 'Bizimle iletişime geçin' : 'Get in touch'}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {locale === 'tr'
            ? 'Kurumsal AI uyum yolculuğunuz için bizimle iletişime geçin.'
            : 'Get in touch for your enterprise AI compliance journey.'}
        </p>
        <Link href="/assessment" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-8 inline-flex')}>
          {locale === 'tr' ? 'Değerlendirme Başlat' : 'Start Assessment'}
        </Link>
      </Container>
    </Section>
  );
}
