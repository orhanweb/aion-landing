// src/components/sections/testimonial-feature.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { getTranslations } from 'next-intl/server';

export async function TestimonialFeature() {
  const t = await getTranslations('testimonial');

  return (
    <Section spacing="compact">
      <Container>
        <FadeIn>
          <blockquote className="relative overflow-hidden rounded-lg border border-border border-l-2 border-l-accent/50 bg-[var(--ink-elevated)] px-8 py-10 text-foreground md:px-10 md:py-12">
            <span aria-hidden className="font-display absolute -top-4 right-8 text-[5rem] leading-none text-accent/15 select-none">
              &ldquo;
            </span>
            <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
            <p className="relative mt-8 max-w-4xl text-[clamp(1.125rem,2.5vw,1.375rem)] leading-relaxed text-foreground">
              &ldquo;{t('quote')}&rdquo;
            </p>
            <footer className="relative mt-8 border-t border-border pt-6">
              <cite className="font-display text-lg not-italic">{t('author')}</cite>
              <span className="font-mono-label mt-1 block text-[0.625rem] text-muted-foreground">{t('sector')}</span>
            </footer>
          </blockquote>
        </FadeIn>
      </Container>
    </Section>
  );
}
