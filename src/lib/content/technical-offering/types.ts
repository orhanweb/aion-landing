// src/lib/content/technical-offering/types.ts
export const TECHNICAL_OFFERING_SLUG = 'technical-solutions' as const;

export type TechnicalOfferingArea = {
  title: string;
  description: string;
};

export type TechnicalOffering = {
  slug: typeof TECHNICAL_OFFERING_SLUG;
  title: string;
  subtitle: string;
  shortDescription: string;
  focus: string;
  intro: string[];
  capabilities: string[];
  areas: TechnicalOfferingArea[];
  linkedinUrl: string;
};
