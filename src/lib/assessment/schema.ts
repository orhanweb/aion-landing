// src/lib/assessment/schema.ts
import { z } from 'zod';

export const assessmentTopics = ['iso27001', 'iso42001', 'euAiAct', 'general'] as const;
export type AssessmentTopic = (typeof assessmentTopics)[number];

export const wizardSteps = ['topic', 'branch', 'company', 'contact', 'consent'] as const;
export type WizardStep = (typeof wizardSteps)[number];

export const employeeCounts = ['1-10', '11-50', '51-250', '250+'] as const;
export type EmployeeCount = (typeof employeeCounts)[number];

export const itModels = ['inHouse', 'outsource', 'basic'] as const;
export type ItModel = (typeof itModels)[number];

export const motivations = ['contracts', 'regulation', 'maturity'] as const;
export type Motivation = (typeof motivations)[number];

export const sectors = ['finance', 'healthcare', 'technology', 'manufacturing', 'public', 'other'] as const;
export type Sector = (typeof sectors)[number];

export const isoSystems = ['iso27001', 'iso42001', 'iso22301', 'iso9001', 'none'] as const;
export type IsoSystem = (typeof isoSystems)[number];

export const aiRoles = ['developer', 'provider', 'deployer'] as const;
export type AiRole = (typeof aiRoles)[number];

export const valueChainRoles = ['provider', 'deployer', 'importer'] as const;
export type ValueChainRole = (typeof valueChainRoles)[number];

export const riskClassifications = ['minimal', 'limited', 'high', 'unacceptable', 'unsure'] as const;
export type RiskClassification = (typeof riskClassifications)[number];

export const transparencyLevels = ['yes', 'no', 'partial'] as const;
export type TransparencyLevel = (typeof transparencyLevels)[number];

export const provenanceLevels = ['documented', 'partial', 'none', 'unsure'] as const;
export type ProvenanceLevel = (typeof provenanceLevels)[number];

const required = { message: 'errors.required' };
const minArray = { message: 'errors.minArray' };
const minText = { message: 'errors.minText' };

const topicSchema = z.object({
  topic: z.enum(assessmentTopics, required)
});

const iso27001BranchSchema = z.object({
  employeeCount: z.enum(employeeCounts, required),
  itModel: z.enum(itModels, required),
  primaryMotivation: z.enum(motivations, required),
  existingIsoSystems: z.array(z.enum(isoSystems)).min(1, minArray)
});

const iso42001BranchSchema = z.object({
  sector: z.enum(sectors, required),
  aiRoles: z.array(z.enum(aiRoles)).min(1, minArray),
  aiUseCase: z.string().min(20, minText),
  existingIsoSystems: z.array(z.enum(isoSystems)).min(1, minArray),
  primaryMotivation: z.enum(motivations, required)
});

const euAiActBranchSchema = z.object({
  valueChainRole: z.enum(valueChainRoles, required),
  riskClassification: z.enum(riskClassifications, required),
  transparencyOversight: z.enum(transparencyLevels, required),
  trainingDataProvenance: z.enum(provenanceLevels, required),
  existingManagementSystems: z.array(z.enum(isoSystems)).min(1, minArray)
});

const generalBranchSchema = z.object({
  needDescription: z.string().min(20, minText)
});

export function getBranchSchema(topic: AssessmentTopic) {
  switch (topic) {
    case 'iso27001':
      return iso27001BranchSchema;
    case 'iso42001':
      return iso42001BranchSchema;
    case 'euAiAct':
      return euAiActBranchSchema;
    case 'general':
      return generalBranchSchema;
  }
}

export function getCompanySchema(topic: AssessmentTopic) {
  const base = z.object({
    company: z.string().min(2, required)
  });

  if (topic === 'iso42001') {
    return base;
  }

  return base.extend({
    sector: z.enum(sectors, required)
  });
}

const contactSchema = z.object({
  name: z.string().min(2, required),
  email: z.string().email({ message: 'errors.email' }),
  phone: z.string().min(7, required),
  title: z.string().min(2, required)
});

const consentSchema = z.object({
  consent: z.boolean().refine(value => value === true, { message: 'errors.consent' }),
  marketingOptIn: z.boolean()
});

export const assessmentFormSchema = z
  .object({
    topic: z.enum(assessmentTopics),
    employeeCount: z.enum(employeeCounts).optional(),
    itModel: z.enum(itModels).optional(),
    primaryMotivation: z.enum(motivations).optional(),
    existingIsoSystems: z.array(z.enum(isoSystems)).optional(),
    sector: z.enum(sectors).optional(),
    aiRoles: z.array(z.enum(aiRoles)).optional(),
    aiUseCase: z.string().optional(),
    valueChainRole: z.enum(valueChainRoles).optional(),
    riskClassification: z.enum(riskClassifications).optional(),
    transparencyOversight: z.enum(transparencyLevels).optional(),
    trainingDataProvenance: z.enum(provenanceLevels).optional(),
    existingManagementSystems: z.array(z.enum(isoSystems)).optional(),
    needDescription: z.string().optional(),
    company: z.string().min(2, required),
    name: z.string().min(2, required),
    email: z.string().email({ message: 'errors.email' }),
    phone: z.string().min(7, required),
    title: z.string().min(2, required),
    consent: z.boolean(),
    marketingOptIn: z.boolean()
  })
  .superRefine((values, ctx) => {
    const branchResult = getBranchSchema(values.topic).safeParse(values);
    if (!branchResult.success) {
      for (const issue of branchResult.error.issues) {
        ctx.addIssue({ ...issue, path: issue.path });
      }
    }

    const companyResult = getCompanySchema(values.topic).safeParse(values);
    if (!companyResult.success) {
      for (const issue of companyResult.error.issues) {
        ctx.addIssue({ ...issue, path: issue.path });
      }
    }
  });

export type AssessmentFormValues = z.infer<typeof assessmentFormSchema>;

export function getStepSchema(step: WizardStep, topic: AssessmentTopic) {
  switch (step) {
    case 'topic':
      return topicSchema;
    case 'branch':
      return getBranchSchema(topic);
    case 'company':
      return getCompanySchema(topic);
    case 'contact':
      return contactSchema;
    case 'consent':
      return consentSchema;
  }
}

export function getDefaultFormValues(): AssessmentFormValues {
  return {
    topic: 'iso42001',
    existingIsoSystems: [],
    aiRoles: [],
    existingManagementSystems: [],
    company: '',
    name: '',
    email: '',
    phone: '',
    title: '',
    consent: false,
    marketingOptIn: false
  };
}

export function clearBranchFields(values: AssessmentFormValues): AssessmentFormValues {
  return {
    ...values,
    employeeCount: undefined,
    itModel: undefined,
    primaryMotivation: undefined,
    existingIsoSystems: [],
    sector: undefined,
    aiRoles: [],
    aiUseCase: undefined,
    valueChainRole: undefined,
    riskClassification: undefined,
    transparencyOversight: undefined,
    trainingDataProvenance: undefined,
    existingManagementSystems: [],
    needDescription: undefined
  };
}

export const assessmentSubmissionSchema = z.discriminatedUnion('topic', [
  z.object({
    topic: z.literal('iso27001'),
    employeeCount: z.enum(employeeCounts),
    itModel: z.enum(itModels),
    primaryMotivation: z.enum(motivations),
    existingIsoSystems: z.array(z.enum(isoSystems)).min(1),
    company: z.string().min(2),
    sector: z.enum(sectors),
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    title: z.string().min(2),
    consent: z.literal(true),
    marketingOptIn: z.boolean()
  }),
  z.object({
    topic: z.literal('iso42001'),
    sector: z.enum(sectors),
    aiRoles: z.array(z.enum(aiRoles)).min(1),
    aiUseCase: z.string().min(20),
    existingIsoSystems: z.array(z.enum(isoSystems)).min(1),
    primaryMotivation: z.enum(motivations),
    company: z.string().min(2),
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    title: z.string().min(2),
    consent: z.literal(true),
    marketingOptIn: z.boolean()
  }),
  z.object({
    topic: z.literal('euAiAct'),
    valueChainRole: z.enum(valueChainRoles),
    riskClassification: z.enum(riskClassifications),
    transparencyOversight: z.enum(transparencyLevels),
    trainingDataProvenance: z.enum(provenanceLevels),
    existingManagementSystems: z.array(z.enum(isoSystems)).min(1),
    company: z.string().min(2),
    sector: z.enum(sectors),
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    title: z.string().min(2),
    consent: z.literal(true),
    marketingOptIn: z.boolean()
  }),
  z.object({
    topic: z.literal('general'),
    needDescription: z.string().min(20),
    company: z.string().min(2),
    sector: z.enum(sectors),
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    title: z.string().min(2),
    consent: z.literal(true),
    marketingOptIn: z.boolean()
  })
]);

export type AssessmentSubmission = z.infer<typeof assessmentSubmissionSchema>;
