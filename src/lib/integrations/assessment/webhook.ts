// src/lib/integrations/assessment/webhook.ts
import type { AssessmentSubmission } from '@/lib/assessment/schema';
import type { AssessmentSubmitter } from '@/lib/integrations/assessment/types';

export function createWebhookAssessmentSubmitter(webhookUrl: string): AssessmentSubmitter {
  return {
    async submit(payload: AssessmentSubmission) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() })
        });

        if (!response.ok) {
          console.error('[assessment:webhook] delivery failed', response.status);
          return { success: false, error: 'delivery' };
        }

        return { success: true };
      } catch (error) {
        console.error('[assessment:webhook] request error', error);
        return { success: false, error: 'unknown' };
      }
    }
  };
}
