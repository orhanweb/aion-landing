// src/components/sections/service-outcomes.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { MonoLabel } from '@/components/ui/mono-label';
import { getTranslations } from 'next-intl/server';

type ServiceOutcomesProps = {
  standard: string;
  outcomes: string[];
  outcomesLabel?: string;
};

export async function ServiceOutcomes({ standard, outcomes, outcomesLabel }: ServiceOutcomesProps) {
  const t = await getTranslations('serviceDetail');

  return (
    <FadeIn>
      <MonoLabel className="text-accent">{outcomesLabel ?? t('outcomesLabel')}</MonoLabel>
      <p className="mt-2 font-mono-label text-muted-foreground">{standard}</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {outcomes.map((outcome, index) => (
          <FadeIn key={outcome} delay={index * 0.05}>
            <article className="h-full rounded-lg border border-border bg-card p-6 md:p-8">
              <span className="font-mono-label text-accent">{String(index + 1).padStart(2, '0')}</span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{outcome}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
}
