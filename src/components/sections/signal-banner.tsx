// src/components/sections/signal-banner.tsx
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/motion/fade-in';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { getTranslations } from 'next-intl/server';

export async function SignalBanner() {
  const t = await getTranslations('cta');

  return (
    <Section spacing="compact">
      <Container>
        <FadeIn>
          <div className="border-l-[3px] border-signal py-2 pl-8 md:pl-12">
            <MonoLabel className="text-signal">{t('dateLabel')}</MonoLabel>
            <p className="font-mono-label mt-2 text-muted-foreground">{t('eyebrow')}</p>
            <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tight">{t('title')}</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">{t('description')}</p>
            <Link href="/degerlendirme" className="mt-8 inline-block font-mono-label text-accent transition-colors hover:text-[var(--accent-strong)]">
              {t('button')} →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
