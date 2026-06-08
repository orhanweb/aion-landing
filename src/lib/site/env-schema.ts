// src/lib/site/env-schema.ts
import { z } from 'zod';

const sitePublicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url({ message: 'Must be a valid URL (e.g. https://aion.tr)' }),
  NEXT_PUBLIC_SITE_NAME: z.string().min(1),
  NEXT_PUBLIC_SITE_TAGLINE: z.string().min(1),
  NEXT_PUBLIC_CONTACT_EMAIL: z.email(),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().min(10),
  NEXT_PUBLIC_WHATSAPP_DISPLAY: z.string().min(5)
});

const assessmentServerSchema = z
  .object({
    ASSESSMENT_SUBMIT_MODE: z.enum(['stub', 'webhook']),
    ASSESSMENT_WEBHOOK_URL: z.string().optional()
  })
  .superRefine((value, ctx) => {
    if (value.ASSESSMENT_SUBMIT_MODE === 'webhook') {
      if (!value.ASSESSMENT_WEBHOOK_URL?.trim()) {
        ctx.addIssue({
          code: 'custom',
          message: 'ASSESSMENT_WEBHOOK_URL is required when ASSESSMENT_SUBMIT_MODE=webhook',
          path: ['ASSESSMENT_WEBHOOK_URL']
        });
        return;
      }

      try {
        new URL(value.ASSESSMENT_WEBHOOK_URL);
      } catch {
        ctx.addIssue({
          code: 'custom',
          message: 'ASSESSMENT_WEBHOOK_URL must be a valid URL',
          path: ['ASSESSMENT_WEBHOOK_URL']
        });
      }
    }
  });

export type SitePublicEnv = z.infer<typeof sitePublicSchema>;
export type AssessmentServerEnv = z.infer<typeof assessmentServerSchema>;

export type ValidatedEnv = {
  public: SitePublicEnv;
  assessment: AssessmentServerEnv;
};

function readRawEnv(key: string): string | undefined {
  const value = process.env[key]?.trim();
  return value && value.length > 0 ? value : undefined;
}

function formatZodIssues(label: string, issues: z.ZodIssue[]): string {
  const lines = issues.map(issue => `  - ${issue.path.join('.')}: ${issue.message}`);
  return `${label}\n${lines.join('\n')}`;
}

function missingKeys(keys: readonly string[]): string[] {
  return keys.filter(key => !readRawEnv(key));
}

export function validateEnv(): ValidatedEnv {
  const publicKeys = [
    'NEXT_PUBLIC_SITE_URL',
    'NEXT_PUBLIC_SITE_NAME',
    'NEXT_PUBLIC_SITE_TAGLINE',
    'NEXT_PUBLIC_CONTACT_EMAIL',
    'NEXT_PUBLIC_WHATSAPP_NUMBER',
    'NEXT_PUBLIC_WHATSAPP_DISPLAY'
  ] as const;

  const serverKeys = ['ASSESSMENT_SUBMIT_MODE'] as const;

  const missingPublic = missingKeys(publicKeys);
  const missingServer = missingKeys(serverKeys);

  if (missingPublic.length > 0 || missingServer.length > 0) {
    const lines = ['Missing required environment variables:', ...missingPublic.map(key => `  - ${key}`), ...missingServer.map(key => `  - ${key}`)];
    throw new Error(lines.join('\n'));
  }

  const publicResult = sitePublicSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: readRawEnv('NEXT_PUBLIC_SITE_URL'),
    NEXT_PUBLIC_SITE_NAME: readRawEnv('NEXT_PUBLIC_SITE_NAME'),
    NEXT_PUBLIC_SITE_TAGLINE: readRawEnv('NEXT_PUBLIC_SITE_TAGLINE'),
    NEXT_PUBLIC_CONTACT_EMAIL: readRawEnv('NEXT_PUBLIC_CONTACT_EMAIL'),
    NEXT_PUBLIC_WHATSAPP_NUMBER: readRawEnv('NEXT_PUBLIC_WHATSAPP_NUMBER'),
    NEXT_PUBLIC_WHATSAPP_DISPLAY: readRawEnv('NEXT_PUBLIC_WHATSAPP_DISPLAY')
  });

  if (!publicResult.success) {
    throw new Error(formatZodIssues('Invalid public environment variables:', publicResult.error.issues));
  }

  const assessmentResult = assessmentServerSchema.safeParse({
    ASSESSMENT_SUBMIT_MODE: readRawEnv('ASSESSMENT_SUBMIT_MODE'),
    ASSESSMENT_WEBHOOK_URL: readRawEnv('ASSESSMENT_WEBHOOK_URL')
  });

  if (!assessmentResult.success) {
    throw new Error(formatZodIssues('Invalid server environment variables:', assessmentResult.error.issues));
  }

  return {
    public: publicResult.data,
    assessment: assessmentResult.data
  };
}
