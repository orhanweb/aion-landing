// src/components/sections/service-gap-cards.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { serviceDetailScrollViewport } from '@/components/motion/motion-config';
import { MonoLabel } from '@/components/ui/mono-label';
import type { ServiceStep } from '@/lib/content/services/types';

type ServiceGapCardsProps = {
  label: string;
  title: string;
  steps: ServiceStep[];
};

function GapCard({ step, index }: { step: ServiceStep; index: number }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="border-l-[3px] border-signal py-2 pl-6 md:pl-8">
      <span className="font-mono-label text-signal">{num}</span>
      <h3 className="font-display mt-2 text-xl tracking-tight md:text-2xl">{step.title}</h3>
      {step.highlight ? <p className="mt-3 inline-block rounded-sm bg-signal/10 px-3 py-1 font-mono-label text-signal">{step.highlight}</p> : null}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{step.description}</p>
    </article>
  );
}

export function ServiceGapCards({ label, title, steps }: ServiceGapCardsProps) {
  return (
    <>
      <FadeIn viewport={serviceDetailScrollViewport}>
        <MonoLabel className="text-signal">{label}</MonoLabel>
        <h2 className="font-display mt-4 text-2xl tracking-tight md:text-3xl">{title}</h2>
      </FadeIn>

      <div className="mt-12 space-y-12">
        {steps.map((step, index) => (
          <FadeIn viewport={serviceDetailScrollViewport} key={step.title} delay={index * 0.05}>
            <GapCard step={step} index={index} />
          </FadeIn>
        ))}
      </div>
    </>
  );
}
