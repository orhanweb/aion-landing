// src/components/assessment/consent-field.tsx
'use client';

import { useId } from 'react';
import { Link } from '@/i18n/navigation';
import { FieldError } from '@/components/assessment/fields/form-fields';
import { useTranslations } from 'next-intl';
import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type ConsentFieldProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  error?: { message?: string };
  onConsentChange?: () => void;
};

export function ConsentField<T extends FieldValues>({ register, name, error, onConsentChange }: ConsentFieldProps<T>) {
  const t = useTranslations('assessment');
  const field = register(name);
  const inputId = useId();
  const errorId = useId();

  return (
    <div className="space-y-2">
      <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
        <input
          id={inputId}
          type="checkbox"
          aria-describedby={error?.message ? errorId : undefined}
          aria-invalid={error?.message ? true : undefined}
          aria-required="true"
          {...field}
          onChange={event => {
            field.onChange(event);
            onConsentChange?.();
          }}
          className="mt-1 shrink-0 accent-(--accent)"
        />
        <span>
          {t('fields.consentPrefix') ? `${t('fields.consentPrefix')} ` : null}
          <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-4 hover:underline">
            {t('fields.consentLink')}
          </Link>
          {t('fields.consentSuffix')}
        </span>
      </label>
      <FieldError id={errorId} error={error} live />
    </div>
  );
}
