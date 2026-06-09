// src/lib/integrations/assessment/index.ts
import { createEmailAssessmentSubmitter } from '@/lib/integrations/assessment/email';
import { stubAssessmentSubmitter } from '@/lib/integrations/assessment/stub';
import type { AssessmentSubmitter } from '@/lib/integrations/assessment/types';
import { requireServerEnv } from '@/lib/site/env';

export function getAssessmentSubmitter(): AssessmentSubmitter {
  const mode = requireServerEnv('ASSESSMENT_SUBMIT_MODE');

  if (mode === 'email') {
    const apiKey = requireServerEnv('RESEND_API_KEY');
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is required when ASSESSMENT_SUBMIT_MODE=email');
    }
    return createEmailAssessmentSubmitter(apiKey);
  }

  return stubAssessmentSubmitter;
}
