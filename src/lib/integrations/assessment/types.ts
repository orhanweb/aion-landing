// src/lib/integrations/assessment/types.ts
import type { AssessmentSubmission } from '@/lib/assessment/schema';
import type { AssessmentSubmitResult } from '@/lib/integrations/types';

export type AssessmentSubmitter = {
  submit(payload: AssessmentSubmission): Promise<AssessmentSubmitResult>;
};
