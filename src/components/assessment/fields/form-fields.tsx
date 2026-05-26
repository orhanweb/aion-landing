// src/components/assessment/fields/form-fields.tsx
'use client';

import { cn } from '@/lib/utils/cn';
import { useTranslations } from 'next-intl';
import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type FormFieldError = { message?: string } | undefined;

type FieldErrorProps = {
  error?: FormFieldError;
};

export function FieldError({ error }: FieldErrorProps) {
  const t = useTranslations('assessment');

  if (!error?.message) {
    return null;
  }

  const message = error.message.startsWith('errors.') ? t(error.message as 'errors.required') : error.message;

  return <p className="text-xs text-[var(--accent-strong)]">{message}</p>;
}

type RadioGroupFieldProps<T extends FieldValues> = {
  legend: string;
  name: Path<T>;
  options: readonly string[];
  register: UseFormRegister<T>;
  labelPrefix: string;
  error?: FormFieldError;
  className?: string;
};

export function RadioGroupField<T extends FieldValues>({ legend, name, options, register, labelPrefix, error, className }: RadioGroupFieldProps<T>) {
  const t = useTranslations('assessment');

  return (
    <fieldset className={cn('space-y-3', className)}>
      <legend className="font-mono-label mb-4 block text-foreground">{legend}</legend>
      {options.map(option => (
        <label key={option} className="flex items-center gap-3 text-sm">
          <input type="radio" value={option} {...register(name)} className="accent-[var(--accent)]" />
          {t(`${labelPrefix}.${option}` as 'fields.company')}
        </label>
      ))}
      <FieldError error={error} />
    </fieldset>
  );
}

type CheckboxGroupFieldProps<T extends FieldValues> = {
  legend: string;
  name: Path<T>;
  options: readonly string[];
  register: UseFormRegister<T>;
  labelPrefix: string;
  error?: FormFieldError;
  className?: string;
};

export function CheckboxGroupField<T extends FieldValues>({
  legend,
  name,
  options,
  register,
  labelPrefix,
  error,
  className
}: CheckboxGroupFieldProps<T>) {
  const t = useTranslations('assessment');

  return (
    <fieldset className={cn('space-y-3', className)}>
      <legend className="font-mono-label mb-4 block text-foreground">{legend}</legend>
      {options.map(option => (
        <label key={option} className="flex items-center gap-3 text-sm">
          <input type="checkbox" value={option} {...register(name)} className="accent-[var(--accent)]" />
          {t(`${labelPrefix}.${option}` as 'fields.company')}
        </label>
      ))}
      <FieldError error={error} />
    </fieldset>
  );
}
