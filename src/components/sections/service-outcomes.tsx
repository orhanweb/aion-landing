// src/components/sections/service-outcomes.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { MonoLabel } from '@/components/ui/mono-label';
import { getTranslations } from 'next-intl/server';

type ServiceOutcomesProps = {
  standard: string;
  outcomes: string[];
};

export async function ServiceOutcomes({ standard, outcomes }: ServiceOutcomesProps) {
  const t = await getTranslations('serviceDetail');

  return (
    <FadeIn>
      <MonoLabel className="text-accent">{t('outcomesLabel')}</MonoLabel>
      <p className="mt-2 font-mono-label text-[0.625rem] text-muted-foreground">{standard}</p>
      <ul className="mt-8 space-y-4">
        {outcomes.map((outcome, index) => (
          <li key={outcome} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
            <span className="font-mono-label shrink-0 text-[0.625rem] text-accent">{String(index + 1).padStart(2, '0')}</span>
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
