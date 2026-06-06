// src/components/assessment/branches/general-branch.tsx
'use client';

import { useId } from 'react';
import type { AssessmentFormValues } from '@/lib/assessment/schema';
import { FieldError } from '@/components/assessment/fields/form-fields';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { UseFormReturn } from 'react-hook-form';
import { useTranslations } from 'next-intl';

type GeneralBranchProps = {
  form: UseFormReturn<AssessmentFormValues>;
};

export function GeneralBranch({ form }: GeneralBranchProps) {
  const t = useTranslations('assessment');
  const { register, formState } = form;
  const errorId = useId();
  const needDescriptionError = formState.errors.needDescription;

  return (
    <div className="space-y-2">
      <Label htmlFor="needDescription">{t('branch.general.needDescription')}</Label>
      <Textarea
        id="needDescription"
        rows={6}
        placeholder={t('branch.general.needDescriptionPlaceholder')}
        aria-invalid={needDescriptionError ? true : undefined}
        aria-describedby={needDescriptionError ? errorId : undefined}
        {...register('needDescription')}
      />
      <FieldError id={errorId} error={needDescriptionError} />
    </div>
  );
}
