// src/components/sections/service-process-timeline.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { serviceDetailScrollViewport } from '@/components/motion/motion-config';
import { MonoLabel } from '@/components/ui/mono-label';
import type { ServiceStep } from '@/lib/content/services/types';

type ServiceProcessTimelineProps = {
  label: string;
  title: string;
  steps: ServiceStep[];
};

export function ServiceProcessTimeline({ label, title, steps }: ServiceProcessTimelineProps) {
  return (
    <>
      <FadeIn viewport={serviceDetailScrollViewport}>
        <MonoLabel className="text-accent">{label}</MonoLabel>
        <h2 className="font-display mt-4 text-2xl tracking-tight md:text-3xl">{title}</h2>
      </FadeIn>

      <ol className="relative mt-16 space-y-0">
        {steps.map((step, index) => {
          const num = String(index + 1).padStart(2, '0');
          const isLast = index === steps.length - 1;

          return (
            <FadeIn
              viewport={serviceDetailScrollViewport}
              as="li"
              key={step.title}
              delay={index * 0.05}
              className="relative grid gap-6 pb-12 md:grid-cols-[80px_1fr] md:gap-12"
            >
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
    </>
  );
}
