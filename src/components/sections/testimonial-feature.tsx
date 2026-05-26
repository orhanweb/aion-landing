// src/components/sections/testimonial-feature.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { getTranslations } from 'next-intl/server';

export async function TestimonialFeature() {
  const t = await getTranslations('testimonial');

  return (
    <Section variant="paper" spacing="compact">
      <Container>
        <FadeIn>
          <MonoLabel className="text-[var(--accent-strong)]">{t('eyebrow')}</MonoLabel>
          <blockquote className="font-display mt-8 max-w-4xl text-[clamp(1.5rem,3vw,2rem)] italic leading-snug tracking-tight text-paper-foreground">
            &ldquo;{t('quote')}&rdquo;
          </blockquote>
          <footer className="mt-8 flex flex-col gap-1">
            <cite className="font-display not-italic text-lg text-paper-foreground">{t('author')}</cite>
            <span className="font-mono-label text-[0.625rem] text-paper-muted-foreground">{t('sector')}</span>
          </footer>
        </FadeIn>
      </Container>
    </Section>
  );
}
