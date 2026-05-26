// src/components/sections/assessment-teaser.tsx
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/motion/fade-in';
import { buttonVariants } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

export async function AssessmentTeaser() {
  const t = await getTranslations('assessmentTeaser');

  return (
    <Section spacing="compact">
      <Container>
        <FadeIn>
          <div className="rounded-lg border border-border bg-[var(--ink-elevated)] px-8 py-10 md:px-12 md:py-14">
            <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
            <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tight">{t('title')}</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">{t('description')}</p>
            <p className="mt-3 font-mono-label text-[0.625rem] text-muted-foreground">{t('privacy')}</p>
            <Link href="/assessment" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-8 inline-flex')}>
              {t('button')}
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
