// src/app/[locale]/not-found.tsx
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import type { Locale } from '@/i18n/routing';
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('notFound');

  return {
    title: t('title'),
    robots: {
      index: false,
      follow: false
    }
  };
}

export default async function NotFound() {
  const locale = (await getLocale()) as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('notFound');

  return (
    <Section className="pt-24">
      <Container>
        <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
        <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">{t('title')}</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">{t('description')}</p>
        <Link href="/" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-8 inline-flex')}>
          {t('homeCta')}
        </Link>
      </Container>
    </Section>
  );
}
