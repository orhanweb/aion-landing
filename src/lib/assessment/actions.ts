// src/lib/assessment/actions.ts
'use server';

import { assessmentSubmissionSchema, type AssessmentSubmission } from '@/lib/assessment/schema';
import { getAssessmentSubmitter } from '@/lib/integrations';
import type { AssessmentSubmitResult } from '@/lib/integrations/types';

export type SubmitAssessmentResult = AssessmentSubmitResult;

export async function submitAssessment(payload: AssessmentSubmission): Promise<SubmitAssessmentResult> {
  const parsed = assessmentSubmissionSchema.safeParse(payload);

  if (!parsed.success) {
    console.error('[assessment] validation failed', parsed.error.flatten());
    return { success: false, error: 'validation' };
  }

  return getAssessmentSubmitter().submit(parsed.data);
}
