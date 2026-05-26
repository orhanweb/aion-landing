// src/lib/assessment/schema.ts
import { z } from 'zod';

export const assessmentTopics = ['iso27001', 'iso42001', 'euAiAct', 'general'] as const;

export type AssessmentTopic = (typeof assessmentTopics)[number];

export const assessmentSchema = z.object({
  topic: z.enum(assessmentTopics),
  company: z.string().min(2),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  consent: z.boolean().refine(value => value === true, {
    message: 'Consent is required'
  })
});

export type AssessmentFormValues = z.infer<typeof assessmentSchema>;

export const assessmentStepSchemas = [
  assessmentSchema.pick({ topic: true }),
  assessmentSchema.pick({ company: true }),
  assessmentSchema.pick({ name: true, email: true, phone: true, consent: true })
] as const;
