// src/app/[locale]/iletisim/page.tsx
import { Container, Section } from '@/components/ui/container';
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
    path: '/iletisim',
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
        <h1 className="text-4xl font-bold tracking-tight">{locale === 'tr' ? 'İletişim' : 'Contact'}</h1>
        <p className="mt-4 text-muted-foreground">
          {locale === 'tr'
            ? 'Kurumsal AI uyum yolculuğunuz için bizimle iletişime geçin.'
            : 'Get in touch for your enterprise AI compliance journey.'}
        </p>
        <Link href="/degerlendirme" className={cn(buttonVariants({ size: 'lg' }), 'mt-8 inline-flex')}>
          {locale === 'tr' ? 'Değerlendirme Başlat' : 'Start Assessment'}
        </Link>
      </Container>
    </Section>
  );
}
