// src/components/sections/service-topic-grid.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import type { ServiceStep } from '@/lib/content/services/types';

type ServiceTopicGridProps = {
  label: string;
  title: string;
  steps: ServiceStep[];
};

function TopicCard({ step, index, fullWidth = false }: { step: ServiceStep; index: number; fullWidth?: boolean }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className={cn('h-full rounded-lg border border-border bg-[var(--ink-elevated)] p-6 md:p-8', fullWidth && 'sm:col-span-2')}>
      <span className="font-mono-label text-[0.625rem] text-accent">{num}</span>
      <h3 className="font-display mt-3 text-xl tracking-tight">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{step.description}</p>
    </article>
  );
}

export function ServiceTopicGrid({ label, title, steps }: ServiceTopicGridProps) {
  const hasTrailingCard = steps.length % 2 === 1;
  const gridSteps = hasTrailingCard ? steps.slice(0, -1) : steps;
  const trailingStep = hasTrailingCard ? steps[steps.length - 1] : undefined;

  return (
    <>
      <FadeIn>
        <MonoLabel className="text-accent">{label}</MonoLabel>
        <h2 className="font-display mt-4 text-2xl tracking-tight md:text-3xl">{title}</h2>
      </FadeIn>

      <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2">
        {gridSteps.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.05}>
            <TopicCard step={step} index={index} />
          </FadeIn>
        ))}

        {trailingStep ? (
          <FadeIn delay={gridSteps.length * 0.05}>
            <TopicCard step={trailingStep} index={steps.length - 1} fullWidth />
          </FadeIn>
        ) : null}
      </div>
    </>
  );
}
