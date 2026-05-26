// src/components/assessment/branches/topic-branch.tsx
'use client';

import { EuAiActBranch } from '@/components/assessment/branches/eu-ai-act-branch';
import { GeneralBranch } from '@/components/assessment/branches/general-branch';
import { Iso27001Branch } from '@/components/assessment/branches/iso27001-branch';
import { Iso42001Branch } from '@/components/assessment/branches/iso42001-branch';
import type { AssessmentFormValues, AssessmentTopic } from '@/lib/assessment/schema';
import type { UseFormReturn } from 'react-hook-form';

type TopicBranchProps = {
  topic: AssessmentTopic;
  form: UseFormReturn<AssessmentFormValues>;
};

export function TopicBranch({ topic, form }: TopicBranchProps) {
  switch (topic) {
    case 'iso27001':
      return <Iso27001Branch form={form} />;
    case 'iso42001':
      return <Iso42001Branch form={form} />;
    case 'euAiAct':
      return <EuAiActBranch form={form} />;
    case 'general':
      return <GeneralBranch form={form} />;
  }
}
