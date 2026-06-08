// src/lib/content/data/legal/privacy.en.ts
import type { LegalDocument } from '@/lib/content/legal/types';

export const privacyEn: LegalDocument = {
  slug: 'privacy',
  title: 'Privacy Notice',
  description: 'AION privacy notice on the processing of personal data.',
  lastUpdated: '2026-06-08',
  sections: [
    {
      id: 'controller',
      title: 'Data Controller',
      paragraphs: [
        'Under applicable data protection law, AION (“we”, “us”) processes your personal data as described below.',
        'Contact us via the current email and WhatsApp details published on our website.'
      ]
    },
    {
      id: 'data',
      title: 'Personal Data Processed',
      paragraphs: ['We may collect the following categories of personal data:'],
      list: [
        'Identity and contact details (name, job title, corporate email, phone)',
        'Company information (company name, sector, employee count range)',
        'Assessment form responses (compliance questions, free-text descriptions)',
        'Technical data (IP address, browser type via server logs)',
        'Marketing preference (optional consent for updates)'
      ]
    },
    {
      id: 'purposes',
      title: 'Purposes of Processing',
      paragraphs: ['Your data is processed for the following purposes:'],
      list: [
        'Receiving and responding to compliance assessment requests',
        'Managing consulting proposals and discovery calls',
        'Pre-contractual communication',
        'Legal compliance',
        'Marketing communications where you have opted in',
        'Website security and service quality'
      ]
    },
    {
      id: 'legal-basis',
      title: 'Legal Bases',
      paragraphs: ['Processing is based on one or more of the following:'],
      list: [
        'Performance of a contract or pre-contractual steps',
        'Legitimate interests (lead management, security)',
        'Legal obligation',
        'Consent (optional processing such as marketing)'
      ]
    },
    {
      id: 'transfer',
      title: 'Transfers',
      paragraphs: [
        'Data may be shared with processors bound by confidentiality (hosting, email, scheduling) only as necessary to deliver our services.',
        'Cross-border transfers, if any, are subject to appropriate safeguards.'
      ]
    },
    {
      id: 'retention',
      title: 'Retention',
      paragraphs: [
        'Assessment data is retained for up to 24 months after the request is closed unless a longer period is required by law or an ongoing client relationship.',
        'Server logs are kept for a limited period for security purposes.'
      ]
    },
    {
      id: 'rights',
      title: 'Your Rights',
      paragraphs: ['Depending on applicable law, you may have the right to:'],
      list: [
        'Access your personal data',
        'Rectify inaccurate data',
        'Request erasure',
        'Restrict or object to processing',
        'Data portability where applicable',
        'Lodge a complaint with a supervisory authority'
      ]
    },
    {
      id: 'application',
      title: 'Contact',
      paragraphs: [
        'To exercise your rights, contact us at the email address published on our website. We respond within the timeframe required by applicable law.',
        'Nothing in this notice constitutes legal advice.'
      ]
    }
  ]
};
