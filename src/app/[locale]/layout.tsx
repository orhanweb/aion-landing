// src/app/[locale]/layout.tsx
import type { Metadata } from 'next';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { IBM_Plex_Mono, Lora, Plus_Jakarta_Sans } from 'next/font/google';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { SkipLink } from '@/components/layout/skip-link';
import { JsonLd } from '@/lib/schema/json-ld';
import { organizationJsonLd, websiteJsonLd } from '@/lib/schema/organization';
import { routing, type Locale } from '@/i18n/routing';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
});

const lora = Lora({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap'
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap'
});

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const meta = await getTranslations('meta');

  return {
    title: {
      template: `%s | ${meta('siteName')}`,
      default: meta('pages.home.title')
    }
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} ${lora.variable} ${ibmPlexMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <JsonLd data={[await organizationJsonLd(locale as Locale), websiteJsonLd(locale as Locale)]} />
        <NextIntlClientProvider messages={messages}>
          <SkipLink />
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
