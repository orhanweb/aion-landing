// src/lib/integrations/assessment/index.ts
import { mockIntegrationsDefaults } from '@/lib/mock/integrations';
import { readServerEnv } from '@/lib/site/env';
import { stubAssessmentSubmitter } from '@/lib/integrations/assessment/stub';
import type { AssessmentSubmitter } from '@/lib/integrations/assessment/types';
import { createWebhookAssessmentSubmitter } from '@/lib/integrations/assessment/webhook';
import type { AssessmentSubmitMode, IntegrationsConfig } from '@/lib/integrations/types';

function isAssessmentSubmitMode(value: string): value is AssessmentSubmitMode {
  return value === 'stub' || value === 'webhook';
}

function resolveAssessmentMode(): AssessmentSubmitMode {
  const mode = readServerEnv('ASSESSMENT_SUBMIT_MODE');

  if (mode && isAssessmentSubmitMode(mode)) {
    return mode;
  }

  if (mode) {
    console.warn(`[assessment] Unknown ASSESSMENT_SUBMIT_MODE="${mode}" — falling back to stub`);
  }

  return mockIntegrationsDefaults.assessmentSubmitMode;
}

function resolveIntegrationsConfig(): IntegrationsConfig {
  return {
    assessment: {
      mode: resolveAssessmentMode(),
      webhookUrl: readServerEnv('ASSESSMENT_WEBHOOK_URL')
    }
  };
}

export function getAssessmentSubmitter(): AssessmentSubmitter {
  const config = resolveIntegrationsConfig();

  if (config.assessment.mode === 'webhook') {
    const url = config.assessment.webhookUrl;
    if (!url) {
      console.warn('[assessment] ASSESSMENT_SUBMIT_MODE=webhook but ASSESSMENT_WEBHOOK_URL is missing — falling back to stub');
      return stubAssessmentSubmitter;
    }
    return createWebhookAssessmentSubmitter(url);
  }

  return stubAssessmentSubmitter;
}
