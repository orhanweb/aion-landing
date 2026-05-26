// src/lib/integrations/assessment/stub.ts
import type { AssessmentSubmission } from '@/lib/assessment/schema';
import type { AssessmentSubmitter } from '@/lib/integrations/assessment/types';

/** Default submitter — logs server-side only; swap via ASSESSMENT_SUBMIT_MODE. */
export const stubAssessmentSubmitter: AssessmentSubmitter = {
  async submit(payload: AssessmentSubmission) {
    console.info('[assessment:stub] submission received', {
      topic: payload.topic,
      company: payload.company,
      email: payload.email,
      submittedAt: new Date().toISOString()
    });
    return { success: true };
  }
};
