// src/components/assessment/branches/eu-ai-act-branch.tsx
'use client';

import {
  isoSystems,
  provenanceLevels,
  riskClassifications,
  transparencyLevels,
  valueChainRoles,
  type AssessmentFormValues
} from '@/lib/assessment/schema';
import { CheckboxGroupField, RadioGroupField } from '@/components/assessment/fields/form-fields';
import type { UseFormReturn } from 'react-hook-form';
import { useTranslations } from 'next-intl';

type EuAiActBranchProps = {
  form: UseFormReturn<AssessmentFormValues>;
};

export function EuAiActBranch({ form }: EuAiActBranchProps) {
  const t = useTranslations('assessment');
  const { register, formState } = form;

  return (
    <div className="space-y-8">
      <RadioGroupField
        legend={t('branch.euAiAct.valueChainRole')}
        name="valueChainRole"
        options={valueChainRoles}
        register={register}
        labelPrefix="options.valueChainRoles"
        error={formState.errors.valueChainRole}
      />
      <RadioGroupField
        legend={t('branch.euAiAct.riskClassification')}
        name="riskClassification"
        options={riskClassifications}
        register={register}
        labelPrefix="options.riskClassifications"
        error={formState.errors.riskClassification}
      />
      <RadioGroupField
        legend={t('branch.euAiAct.transparencyOversight')}
        name="transparencyOversight"
        options={transparencyLevels}
        register={register}
        labelPrefix="options.transparencyLevels"
        error={formState.errors.transparencyOversight}
      />
      <RadioGroupField
        legend={t('branch.euAiAct.trainingDataProvenance')}
        name="trainingDataProvenance"
        options={provenanceLevels}
        register={register}
        labelPrefix="options.provenanceLevels"
        error={formState.errors.trainingDataProvenance}
      />
      <CheckboxGroupField
        legend={t('branch.euAiAct.existingManagementSystems')}
        name="existingManagementSystems"
        options={isoSystems}
        register={register}
        labelPrefix="options.isoSystems"
        error={formState.errors.existingManagementSystems}
      />
    </div>
  );
}
