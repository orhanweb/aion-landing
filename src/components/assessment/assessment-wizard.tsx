// src/components/assessment/assessment-wizard.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { assessmentSchema, assessmentStepSchemas, assessmentTopics, type AssessmentFormValues } from '@/lib/assessment/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AssessmentWizard() {
  const t = useTranslations('assessment');
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<AssessmentFormValues>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      topic: 'iso42001',
      company: '',
      name: '',
      email: '',
      phone: '',
      consent: false
    },
    mode: 'onBlur'
  });

  async function goNext() {
    const schema = assessmentStepSchemas[step];
    const values = form.getValues();
    const result = schema.safeParse(values);

    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof AssessmentFormValues;
        form.setError(field, { message: issue.message });
      }
      return;
    }

    if (step < assessmentStepSchemas.length - 1) {
      setStep(current => current + 1);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('submit')}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Form captured locally for now. Server action will be wired on Hetzner deploy.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
        <p className="text-sm text-muted-foreground">{t('description')}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {step === 0 ? (
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium">{t('stepTopic')}</legend>
            {assessmentTopics.map(topic => (
              <label key={topic} className="flex items-center gap-3 text-sm">
                <input type="radio" value={topic} {...form.register('topic')} className="accent-primary" />
                {t(`topics.${topic}`)}
              </label>
            ))}
          </fieldset>
        ) : null}

        {step === 1 ? (
          <div className="space-y-2">
            <Label htmlFor="company">{t('fields.company')}</Label>
            <Input id="company" {...form.register('company')} />
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('fields.name')}</Label>
              <Input id="name" {...form.register('name')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('fields.email')}</Label>
              <Input id="email" type="email" {...form.register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t('fields.phone')}</Label>
              <Input id="phone" {...form.register('phone')} />
            </div>
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={form.watch('consent')}
                onChange={event =>
                  form.setValue('consent', event.target.checked, {
                    shouldValidate: true
                  })
                }
                className="mt-1 accent-primary"
              />
              {t('fields.consent')}
            </label>
          </div>
        ) : null}

        <div className="flex gap-3">
          {step > 0 ? (
            <Button type="button" variant="secondary" onClick={() => setStep(s => s - 1)}>
              {t('back')}
            </Button>
          ) : null}
          <Button type="button" onClick={goNext}>
            {step === assessmentStepSchemas.length - 1 ? t('submit') : t('next')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
