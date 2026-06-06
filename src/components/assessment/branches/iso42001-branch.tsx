// src/components/assessment/branches/iso42001-branch.tsx
'use client';

import { useId } from 'react';
import { aiRoles, isoSystems, motivations, sectors, type AssessmentFormValues } from '@/lib/assessment/schema';
import { CheckboxGroupField, FieldError, RadioGroupField } from '@/components/assessment/fields/form-fields';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { UseFormReturn } from 'react-hook-form';
import { useTranslations } from 'next-intl';

type Iso42001BranchProps = {
  form: UseFormReturn<AssessmentFormValues>;
};

export function Iso42001Branch({ form }: Iso42001BranchProps) {
  const t = useTranslations('assessment');
  const { register, formState } = form;
  const aiUseCaseErrorId = useId();
  const aiUseCaseError = formState.errors.aiUseCase;

  return (
    <div className="space-y-8">
      <RadioGroupField
        legend={t('branch.iso42001.sector')}
        name="sector"
        options={sectors}
        register={register}
        labelPrefix="options.sectors"
        error={formState.errors.sector}
      />
      <CheckboxGroupField
        legend={t('branch.iso42001.aiRoles')}
        name="aiRoles"
        options={aiRoles}
        register={register}
        labelPrefix="options.aiRoles"
        error={formState.errors.aiRoles}
      />
      <div className="space-y-2">
        <Label htmlFor="aiUseCase">{t('branch.iso42001.aiUseCase')}</Label>
        <Textarea
          id="aiUseCase"
          rows={4}
          placeholder={t('branch.iso42001.aiUseCasePlaceholder')}
          aria-invalid={aiUseCaseError ? true : undefined}
          aria-describedby={aiUseCaseError ? aiUseCaseErrorId : undefined}
          {...register('aiUseCase')}
        />
        <FieldError id={aiUseCaseErrorId} error={aiUseCaseError} />
      </div>
      <CheckboxGroupField
        legend={t('branch.iso42001.existingIsoSystems')}
        name="existingIsoSystems"
        options={isoSystems}
        register={register}
        labelPrefix="options.isoSystems"
        error={formState.errors.existingIsoSystems}
      />
      <RadioGroupField
        legend={t('branch.iso42001.primaryMotivation')}
        name="primaryMotivation"
        options={motivations}
        register={register}
        labelPrefix="options.motivation"
        error={formState.errors.primaryMotivation}
      />
    </div>
  );
}
