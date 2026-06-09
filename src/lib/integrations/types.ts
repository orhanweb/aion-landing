// src/lib/integrations/types.ts

export type AssessmentSubmitMode = 'stub' | 'email';

export type IntegrationsConfig = {
  assessment: {
    mode: AssessmentSubmitMode;
  };
};

export type AssessmentSubmitResult = { success: true } | { success: false; error: 'validation' | 'delivery' | 'unknown' };
