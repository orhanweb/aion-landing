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
  const stepStatus = t('stepStatus', {
    current: currentIndex + 1,
    total: wizardSteps.length,
    step: t(`steps.${currentStep}`)
  });

  return (
    <nav aria-label={t('progressLabel')}>
      <p className="font-mono-label text-muted-foreground">
        {currentIndex + 1} / {wizardSteps.length}
      </p>
      <p aria-live="polite" aria-atomic="true" className="sr-only">
        {stepStatus}
      </p>
      <ol className="mt-4 flex flex-wrap gap-2">
        {wizardSteps.map((step, index) => {
          const isActive = step === currentStep;
          const isComplete = index < currentIndex;

          return (
            <li key={step} aria-current={isActive ? 'step' : undefined}>
              <span
                className={cn(
                  'inline-block rounded-full border px-3 py-1 font-mono-label transition-colors',
                  isActive && 'border-accent bg-accent/10 text-accent',
                  isComplete && !isActive && 'border-[var(--line-strong)] text-foreground',
                  !isActive && !isComplete && 'border-border text-muted-foreground'
                )}
              >
                {t(`steps.${step}`)}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
