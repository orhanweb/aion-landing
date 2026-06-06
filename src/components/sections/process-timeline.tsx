// src/components/sections/process-timeline.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { getTranslations } from 'next-intl/server';

type ProcessTimelineProps = {
  className?: string;
  titleAs?: 'h1' | 'h2';
};

export async function ProcessTimeline({ className, titleAs = 'h2' }: ProcessTimelineProps = {}) {
  const t = await getTranslations('process');
  const steps = t.raw('steps') as { title: string; description: string }[];
  const TitleTag = titleAs;

  return (
    <Section variant="elevated" id="approach" className={className}>
      <Container>
        <FadeIn>
          <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
          <TitleTag className="font-display mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-tight tracking-tight">{t('title')}</TitleTag>
          <p className="mt-4 max-w-xl text-muted-foreground">{t('description')}</p>
        </FadeIn>

        <ol className="relative mt-16 space-y-0">
          {steps.map((step, index) => {
            const num = String(index + 1).padStart(2, '0');
            const isLast = index === steps.length - 1;

            return (
              <FadeIn as="li" key={step.title} delay={index * 0.05} className="relative grid gap-6 pb-12 md:grid-cols-[80px_1fr] md:gap-12">
                {!isLast ? <div aria-hidden className="absolute left-[39px] top-12 hidden h-[calc(100%-3rem)] w-px bg-border md:block" /> : null}
                <div className="flex items-start gap-4 md:flex-col md:gap-2">
                  <span className="font-mono-label text-accent">{num}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight md:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{step.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
