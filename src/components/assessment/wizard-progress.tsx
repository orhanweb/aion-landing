// src/components/assessment/wizard-progress.tsx
'use client';

import { wizardSteps, type WizardStep } from '@/lib/assessment/schema';
import { cn } from '@/lib/utils/cn';
import { useTranslations } from 'next-intl';

type WizardProgressProps = {
  currentStep: WizardStep;
};

export function WizardProgress({ currentStep }: WizardProgressProps) {
  const t = useTranslations('assessment');
  const currentIndex = wizardSteps.indexOf(currentStep);

  return (
    <div className="mb-8">
      <p className="font-mono-label text-[0.625rem] text-muted-foreground">
        {currentIndex + 1} / {wizardSteps.length}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {wizardSteps.map((step, index) => {
          const isActive = step === currentStep;
          const isComplete = index < currentIndex;

          return (
            <span
              key={step}
              className={cn(
                'rounded-full border px-3 py-1 font-mono-label text-[0.625rem] transition-colors',
                isActive && 'border-accent bg-accent/10 text-accent',
                isComplete && !isActive && 'border-[var(--line-strong)] text-foreground',
                !isActive && !isComplete && 'border-border text-muted-foreground'
              )}
            >
              {t(`steps.${step}`)}
            </span>
          );
        })}
      </div>
    </div>
  );
}
