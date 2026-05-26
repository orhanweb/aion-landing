// src/lib/assessment/actions.ts
'use server';

import { assessmentSubmissionSchema, type AssessmentSubmission } from '@/lib/assessment/schema';

export type SubmitAssessmentResult = { success: true } | { success: false; error: 'validation' | 'unknown' };

export async function submitAssessment(payload: AssessmentSubmission): Promise<SubmitAssessmentResult> {
  const parsed = assessmentSubmissionSchema.safeParse(payload);

  if (!parsed.success) {
    console.error('[assessment] validation failed', parsed.error.flatten());
    return { success: false, error: 'validation' };
  }

  // Stub until Phase G — log server-side only; no client persistence.
  console.info('[assessment] submission received', {
    topic: parsed.data.topic,
    company: parsed.data.company,
    email: parsed.data.email,
    submittedAt: new Date().toISOString()
  });

  return { success: true };
}
