// src/components/assessment/branches/iso27001-branch.tsx
'use client';

import { employeeCounts, itModels, isoSystems, motivations, type AssessmentFormValues } from '@/lib/assessment/schema';
import { CheckboxGroupField, RadioGroupField } from '@/components/assessment/fields/form-fields';
import type { UseFormReturn } from 'react-hook-form';
import { useTranslations } from 'next-intl';

type Iso27001BranchProps = {
  form: UseFormReturn<AssessmentFormValues>;
};

export function Iso27001Branch({ form }: Iso27001BranchProps) {
  const t = useTranslations('assessment');
  const { register, formState } = form;

  return (
    <div className="space-y-8">
      <RadioGroupField
        legend={t('branch.iso27001.employeeCount')}
        name="employeeCount"
        options={employeeCounts}
        register={register}
        labelPrefix="options.employeeCount"
        error={formState.errors.employeeCount}
      />
      <RadioGroupField
        legend={t('branch.iso27001.itModel')}
        name="itModel"
        options={itModels}
        register={register}
        labelPrefix="options.itModel"
        error={formState.errors.itModel}
      />
      <RadioGroupField
        legend={t('branch.iso27001.primaryMotivation')}
        name="primaryMotivation"
        options={motivations}
        register={register}
        labelPrefix="options.motivation"
        error={formState.errors.primaryMotivation}
      />
      <CheckboxGroupField
        legend={t('branch.iso27001.existingIsoSystems')}
        name="existingIsoSystems"
        options={isoSystems}
        register={register}
        labelPrefix="options.isoSystems"
        error={formState.errors.existingIsoSystems}
      />
    </div>
  );
}
