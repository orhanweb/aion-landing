// src/lib/content/services/types.ts
export const SERVICE_SLUGS = ['ai-governance', 'regulatory-compliance', 'information-security', 'operational-resilience', 'human-oversight'] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type ServiceStandard = 'ISO 42001' | 'EU AI Act' | 'ISO 27001' | 'ISO 22301' | 'Human Oversight';

/** How the detail page renders its main body section. */
export type ServiceSectionsLayout = 'process' | 'gaps' | 'topics';

export type ServiceSections = {
  layout: ServiceSectionsLayout;
  label: string;
  title: string;
};

export type ServiceStep = {
  title: string;
  description: string;
  /** Optional callout for gaps layout (e.g. penalty figures). */
  highlight?: string;
};

export type Service = {
  slug: ServiceSlug;
  title: string;
  subtitle: string;
  standard: ServiceStandard;
  shortDescription: string;
  intro: string[];
  outcomes: string[];
  sections: ServiceSections;
  steps: ServiceStep[];
  relatedSlugs: ServiceSlug[];
};
