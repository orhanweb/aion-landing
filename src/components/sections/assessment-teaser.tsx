// src/components/sections/assessment-teaser.tsx
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
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
          <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
          <h2 className="font-display mt-4 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tight">{t('title')}</h2>

          <div className="mt-8 grid gap-8 rounded-lg border border-border bg-card px-8 py-10 md:px-12 md:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{t('description')}</p>
              <p className="mt-4 font-mono-label leading-relaxed text-muted-foreground">{t('privacy')}</p>
            </div>
            <Link
              href="/assessment"
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'inline-flex justify-self-start lg:justify-self-end')}
            >
              {t('button')}
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
