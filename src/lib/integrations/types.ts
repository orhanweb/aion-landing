// src/lib/integrations/types.ts

export type AssessmentSubmitMode = 'stub' | 'webhook';

export type IntegrationsConfig = {
  assessment: {
    mode: AssessmentSubmitMode;
    webhookUrl?: string;
  };
};

export type AssessmentSubmitResult = { success: true } | { success: false; error: 'validation' | 'delivery' | 'unknown' };
