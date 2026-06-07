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
  const labelId = useId();
  const descriptionId = useId();
  const errorId = useId();
  const describedBy = [descriptionId, error?.message ? errorId : undefined].filter(Boolean).join(' ');

  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <input
          id={inputId}
          type="checkbox"
          aria-labelledby={labelId}
          aria-describedby={describedBy || undefined}
          aria-invalid={error?.message ? true : undefined}
          aria-required="true"
          {...field}
          onChange={event => {
            field.onChange(event);
            onConsentChange?.();
          }}
          className="mt-1 accent-(--accent)"
        />
        <p id={descriptionId} className="text-sm text-muted-foreground">
          <span id={labelId}>
            {t('fields.consentPrefix') ? `${t('fields.consentPrefix')} ` : null}
            <Link href="/privacy" className="text-accent underline-offset-4 hover:underline">
              {t('fields.consentLink')}
            </Link>
            {t('fields.consentSuffix')}
          </span>
        </p>
      </div>
      <FieldError id={errorId} error={error} live />
    </div>
  );
}
