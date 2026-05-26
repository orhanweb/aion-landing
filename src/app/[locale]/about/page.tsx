// src/app/[locale]/about/page.tsx
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return buildPageMetadata({
    locale: locale as Locale,
    path: '/about',
    title: locale === 'tr' ? 'Hakkımızda | AION' : 'About | AION',
    description:
      locale === 'tr'
        ? 'AION, kurumsal yapay zeka yönetişimi ve uyum danışmanlığı sunar.'
        : 'AION provides enterprise AI governance and compliance consulting.'
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const copy =
    locale === 'tr'
      ? 'AION (Artificial Intelligence Oversight Network), kurumların yapay zeka sistemlerini güvenli, şeffaf ve denetlenebilir şekilde yönetmesi için ISO standartları ve EU AI Act uyumunda danışmanlık sunar.'
      : 'AION (Artificial Intelligence Oversight Network) helps organizations manage AI systems securely, transparently, and auditably under ISO standards and the EU AI Act.';

  return (
    <Section className="pt-24">
      <Container className="max-w-3xl">
        <MonoLabel>{locale === 'tr' ? 'Kurumsal' : 'Company'}</MonoLabel>
        <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">{locale === 'tr' ? 'Hakkımızda' : 'About'}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{copy}</p>
      </Container>
    </Section>
  );
}
