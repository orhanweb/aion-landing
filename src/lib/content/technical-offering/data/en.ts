// src/lib/content/technical-offering/data/en.ts
import { TECHNICAL_OFFERING_SLUG, type TechnicalOffering } from '@/lib/content/technical-offering/types';

export const technicalOfferingEn: TechnicalOffering = {
  slug: TECHNICAL_OFFERING_SLUG,
  title: 'Technical Development',
  subtitle: 'Orhan Kahraman, full-stack TypeScript developer',
  shortDescription:
    'Delivers end-to-end software for corporate sites, SaaS products, and multi-step applications, with performance, security, and maintainable architecture as priorities.',
  focus: 'Full-Stack TypeScript',
  intro: [
    'Orhan Kahraman is a full-stack TypeScript developer in the React and Next.js ecosystem. He builds corporate marketing sites, SaaS products, internal operations tools, and AI-powered workflows.',
    'At AION he serves as the technical delivery partner, turning consulting output into user-facing, maintainable software. This site is an example of the same approach, including its multilingual setup, assessment flow, and production infrastructure.'
  ],
  capabilities: [
    'Corporate websites and service showcases',
    'SaaS product development across frontend, backend, and database layers',
    'Multi-step forms and wizard flows',
    'Dashboards and internal operations tools',
    'AI and automation integrations',
    'API design and third-party system connections'
  ],
  areas: [
    {
      title: 'Corporate Web',
      description:
        'Landing pages, service showcases, and multilingual corporate sites. Accessibility, SEO, and security headers are built in from the start, with reliable production deployment.'
    },
    {
      title: 'Product Development',
      description:
        'SaaS from MVP to production: authentication, forms, list and detail screens. Modular architecture designed to grow with the product.'
    },
    {
      title: 'Backend and Data',
      description: 'REST APIs, database modelling, background jobs, and file storage. A server layer that is reliable, testable, and documented.'
    },
    {
      title: 'AI and Automation',
      description:
        'LLM integration, content and workflow automation, and webhook-based pipelines. Manual processes turned into measurable digital workflows.'
    }
  ],
  linkedinUrl: 'https://www.linkedin.com/in/orhan-kahraman/'
};
