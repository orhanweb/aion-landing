// src/lib/integrations/assessment/index.ts
import { readServerEnv } from '@/lib/site/env';
import { stubAssessmentSubmitter } from '@/lib/integrations/assessment/stub';
import type { AssessmentSubmitter } from '@/lib/integrations/assessment/types';
import { createWebhookAssessmentSubmitter } from '@/lib/integrations/assessment/webhook';
import type { AssessmentSubmitMode, IntegrationsConfig } from '@/lib/integrations/types';

function resolveAssessmentMode(): AssessmentSubmitMode {
  const mode = readServerEnv('ASSESSMENT_SUBMIT_MODE');
  if (mode === 'stub' || mode === 'webhook' || mode === 'resend') {
    return mode;
  }
  return 'stub';
}

export function resolveIntegrationsConfig(): IntegrationsConfig {
  return {
    assessment: {
      mode: resolveAssessmentMode(),
      webhookUrl: readServerEnv('ASSESSMENT_WEBHOOK_URL')
    }
  };
}

export function getAssessmentSubmitter(): AssessmentSubmitter {
  const config = resolveIntegrationsConfig();

  switch (config.assessment.mode) {
    case 'webhook': {
      const url = config.assessment.webhookUrl;
      if (!url) {
        console.warn('[assessment] ASSESSMENT_SUBMIT_MODE=webhook but ASSESSMENT_WEBHOOK_URL is missing — falling back to stub');
        return stubAssessmentSubmitter;
      }
      return createWebhookAssessmentSubmitter(url);
    }
    case 'resend':
      console.warn('[assessment] ASSESSMENT_SUBMIT_MODE=resend not implemented — falling back to stub');
      return stubAssessmentSubmitter;
    case 'stub':
    default:
      return stubAssessmentSubmitter;
  }
}
