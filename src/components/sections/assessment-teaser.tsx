// src/components/sections/assessment-teaser.tsx
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/motion/fade-in';
import { buttonVariants } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

type AssessmentTeaserProps = {
  variant?: 'default' | 'inline';
};

export async function AssessmentTeaser({ variant = 'default' }: AssessmentTeaserProps) {
  const t = await getTranslations('assessmentTeaser');
  const isInline = variant === 'inline';

  return (
    <Section variant={isInline ? 'elevated' : 'default'} spacing="compact">
      <Container>
        <FadeIn>
          <MonoLabel className={isInline ? 'text-signal' : 'text-accent'}>{t('eyebrow')}</MonoLabel>
          <h2
            className={cn(
              'font-display mt-4 max-w-3xl leading-tight tracking-tight',
              isInline ? 'text-[clamp(1.5rem,2.5vw,2rem)]' : 'text-[clamp(1.75rem,3vw,2.5rem)]'
            )}
          >
            {t('title')}
          </h2>

          <div
            className={cn(
              'mt-8 grid gap-8 rounded-lg bg-card px-8 py-10 md:px-12 md:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center',
              isInline ? 'border border-signal/30' : 'border border-border'
            )}
          >
            <div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{t('description')}</p>
              {!isInline ? <p className="mt-4 font-mono-label text-[0.625rem] leading-relaxed text-muted-foreground">{t('privacy')}</p> : null}
            </div>
            <Link
              href="/assessment"
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'inline-flex justify-self-start lg:justify-self-end')}
            >
              {t('button')}
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
