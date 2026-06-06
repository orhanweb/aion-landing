// src/components/assessment/assessment-wizard.tsx
'use client';

import { ConsentField } from '@/components/assessment/consent-field';
import { TopicBranch } from '@/components/assessment/branches/topic-branch';
import { FieldError } from '@/components/assessment/fields/form-fields';
import { ThankYou } from '@/components/assessment/thank-you';
import { WizardProgress } from '@/components/assessment/wizard-progress';
import { useReducedMotion } from '@/components/motion/use-reduced-motion';
import { submitAssessment } from '@/lib/assessment/actions';
import {
  assessmentTopics,
  clearBranchFields,
  getDefaultFormValues,
  getStepSchema,
  sectors,
  wizardSteps,
  type AssessmentFormValues,
  type AssessmentSubmission,
  type AssessmentTopic,
  type WizardStep
} from '@/lib/assessment/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MonoLabel } from '@/components/ui/mono-label';
import { RadioGroupField } from '@/components/assessment/fields/form-fields';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

type AssessmentWizardProps = {
  calendlyUrl: string;
  responseTime: string;
};

function buildSubmission(values: AssessmentFormValues): AssessmentSubmission {
  const shared = {
    company: values.company,
    name: values.name,
    email: values.email,
    phone: values.phone,
    title: values.title,
    consent: true as const,
    marketingOptIn: values.marketingOptIn
  };

  switch (values.topic) {
    case 'iso27001':
      return {
        topic: 'iso27001',
        employeeCount: values.employeeCount!,
        itModel: values.itModel!,
        primaryMotivation: values.primaryMotivation!,
        existingIsoSystems: values.existingIsoSystems ?? [],
        sector: values.sector!,
        ...shared
      };
    case 'iso42001':
      return {
        topic: 'iso42001',
        sector: values.sector!,
        aiRoles: values.aiRoles ?? [],
        aiUseCase: values.aiUseCase ?? '',
        existingIsoSystems: values.existingIsoSystems ?? [],
        primaryMotivation: values.primaryMotivation!,
        ...shared
      };
    case 'euAiAct':
      return {
        topic: 'euAiAct',
        valueChainRole: values.valueChainRole!,
        riskClassification: values.riskClassification!,
        transparencyOversight: values.transparencyOversight!,
        trainingDataProvenance: values.trainingDataProvenance!,
        existingManagementSystems: values.existingManagementSystems ?? [],
        sector: values.sector!,
        ...shared
      };
    case 'general':
      return {
        topic: 'general',
        needDescription: values.needDescription ?? '',
        sector: values.sector!,
        ...shared
      };
  }
}

export function AssessmentWizard({ calendlyUrl, responseTime }: AssessmentWizardProps) {
  const t = useTranslations('assessment');
  const reduced = useReducedMotion();
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const previousTopic = useRef<AssessmentTopic>('iso42001');

  const form = useForm<AssessmentFormValues>({
    defaultValues: getDefaultFormValues(),
    mode: 'onSubmit'
  });

  const currentStep = wizardSteps[stepIndex] as WizardStep;
  const topic = form.watch('topic');
  const marketingOptIn = form.register('marketingOptIn');

  function applyStepErrors(issues: { path: PropertyKey[]; message: string }[]) {
    form.clearErrors();
    for (const issue of issues) {
      const field = issue.path[0];
      if (typeof field === 'string') {
        form.setError(field as keyof AssessmentFormValues, { message: issue.message });
      }
    }
  }

  async function goNext() {
    setSubmitError(false);
    const values = form.getValues();

    if (currentStep === 'topic' && values.topic !== previousTopic.current) {
      const cleared = clearBranchFields(values);
      form.reset({ ...cleared, topic: values.topic });
      previousTopic.current = values.topic;
    }

    const schema = getStepSchema(currentStep, form.getValues().topic);
    const result = schema.safeParse(form.getValues());

    if (!result.success) {
      applyStepErrors(result.error.issues);
      return;
    }

    if (stepIndex < wizardSteps.length - 1) {
      setStepIndex(index => index + 1);
      return;
    }

    setSubmitting(true);
    const submission = buildSubmission(form.getValues());
    const response = await submitAssessment(submission);
    setSubmitting(false);

    if (!response.success) {
      setSubmitError(true);
      return;
    }

    form.reset(getDefaultFormValues());
    setSubmitted(true);
  }

  function goBack() {
    setSubmitError(false);
    if (stepIndex > 0) {
      setStepIndex(index => index - 1);
    }
  }

  if (submitted) {
    return <ThankYou calendlyUrl={calendlyUrl} responseTime={responseTime} />;
  }

  return (
    <Card>
      <CardHeader>
        <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
        <CardTitle className="font-display text-2xl">{t('title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <WizardProgress currentStep={currentStep} />

        <motion.div
          key={currentStep}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.25 }}
        >
          {currentStep === 'topic' ? (
            <fieldset className="space-y-3">
              <legend className="font-mono-label mb-4 block text-foreground">{t('stepTopic')}</legend>
              {assessmentTopics.map(item => (
                <label key={item} className="flex items-center gap-3 text-sm">
                  <input type="radio" value={item} {...form.register('topic')} className="accent-(--accent)" />
                  {t(`topics.${item}`)}
                </label>
              ))}
              <FieldError error={form.formState.errors.topic} />
            </fieldset>
          ) : null}

          {currentStep === 'branch' ? <TopicBranch topic={topic} form={form} /> : null}

          {currentStep === 'company' ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company">{t('fields.company')}</Label>
                <Input id="company" {...form.register('company')} />
                <FieldError error={form.formState.errors.company} />
              </div>
              {topic !== 'iso42001' ? (
                <RadioGroupField
                  legend={t('fields.sector')}
                  name="sector"
                  options={sectors}
                  register={form.register}
                  labelPrefix="options.sectors"
                  error={form.formState.errors.sector}
                />
              ) : null}
            </div>
          ) : null}

          {currentStep === 'contact' ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('fields.name')}</Label>
                <Input id="name" {...form.register('name')} />
                <FieldError error={form.formState.errors.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">{t('fields.title')}</Label>
                <Input id="title" {...form.register('title')} />
                <FieldError error={form.formState.errors.title} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t('fields.email')}</Label>
                <Input id="email" type="email" {...form.register('email')} />
                <FieldError error={form.formState.errors.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t('fields.phone')}</Label>
                <Input id="phone" type="tel" {...form.register('phone')} />
                <FieldError error={form.formState.errors.phone} />
              </div>
            </div>
          ) : null}

          {currentStep === 'consent' ? (
            <div className="space-y-4">
              <ConsentField
                register={form.register}
                name="consent"
                error={form.formState.errors.consent}
                onConsentChange={() => void form.trigger('consent')}
              />
              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" {...marketingOptIn} className="mt-1 accent-(--accent)" />
                {t('fields.marketingOptIn')}
              </label>
            </div>
          ) : null}
        </motion.div>

        {submitError ? <p className="text-sm text-(--accent-strong)">{t('errors.submitFailed')}</p> : null}

        <div className="flex gap-3">
          {stepIndex > 0 ? (
            <Button type="button" variant="secondary" onClick={goBack} disabled={submitting}>
              {t('back')}
            </Button>
          ) : null}
          <Button type="button" onClick={() => void goNext()} disabled={submitting}>
            {stepIndex === wizardSteps.length - 1 ? (submitting ? t('submitting') : t('submit')) : t('next')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
