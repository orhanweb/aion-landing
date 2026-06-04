// src/lib/mock/integrations.ts
import type { AssessmentSubmitMode } from '@/lib/integrations/types';

/** Default integration modes when env vars are unset. */
export const mockIntegrationsDefaults = {
  assessmentSubmitMode: 'stub' satisfies AssessmentSubmitMode
} as const;
