// src/lib/integrations/assessment/email.ts
import { Resend } from 'resend';

import type { AssessmentSubmission } from '@/lib/assessment/schema';
import { formatAssessmentSubmissionEmail } from '@/lib/integrations/assessment/format-submission-email';
import type { AssessmentSubmitter } from '@/lib/integrations/assessment/types';
import { requirePublicEnv } from '@/lib/site/env';

export function createEmailAssessmentSubmitter(apiKey: string): AssessmentSubmitter {
  const resend = new Resend(apiKey);

  return {
    async submit(payload: AssessmentSubmission) {
      const siteName = requirePublicEnv('NEXT_PUBLIC_SITE_NAME');
      const contactEmail = requirePublicEnv('NEXT_PUBLIC_CONTACT_EMAIL');
      const submittedAt = new Date().toISOString();
      const message = formatAssessmentSubmissionEmail(payload, siteName, submittedAt);

      try {
        const { error } = await resend.emails.send({
          from: `${siteName} <${contactEmail}>`,
          to: contactEmail,
          replyTo: payload.email,
          subject: message.subject,
          text: message.text,
          html: message.html,
          tags: [
            { name: 'source', value: 'assessment' },
            { name: 'topic', value: payload.topic }
          ]
        });

        if (error) {
          console.error('[assessment:email] delivery failed', error.name, error.message);
          return { success: false, error: 'delivery' };
        }

        return { success: true };
      } catch (error) {
        console.error('[assessment:email] request error', error);
        return { success: false, error: 'unknown' };
      }
    }
  };
}
