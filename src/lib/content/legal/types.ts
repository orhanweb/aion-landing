// src/lib/content/legal/types.ts
export const LEGAL_SLUGS = ['privacy', 'cookies'] as const;

export type LegalSlug = (typeof LEGAL_SLUGS)[number];

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalDocument = {
  slug: LegalSlug;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};
