// src/lib/integrations/assessment/index.ts
import { requireServerEnv } from '@/lib/site/env';
import { stubAssessmentSubmitter } from '@/lib/integrations/assessment/stub';
import type { AssessmentSubmitter } from '@/lib/integrations/assessment/types';
import { createWebhookAssessmentSubmitter } from '@/lib/integrations/assessment/webhook';

export function getAssessmentSubmitter(): AssessmentSubmitter {
  const mode = requireServerEnv('ASSESSMENT_SUBMIT_MODE');

  if (mode === 'webhook') {
    const url = requireServerEnv('ASSESSMENT_WEBHOOK_URL');
    if (!url) {
      throw new Error('ASSESSMENT_WEBHOOK_URL is required when ASSESSMENT_SUBMIT_MODE=webhook');
    }
    return createWebhookAssessmentSubmitter(url);
  }

  return stubAssessmentSubmitter;
}
