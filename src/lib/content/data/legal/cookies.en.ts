// src/lib/content/data/legal/cookies.en.ts
import type { LegalDocument } from '@/lib/content/legal/types';

export const cookiesEn: LegalDocument = {
  slug: 'cookies',
  title: 'Cookie Policy',
  description: 'A brief overview of how cookies are used on the AION website.',
  lastUpdated: '2026-06-08',
  sections: [
    {
      id: 'what-we-use',
      title: 'What We Use',
      paragraphs: [
        'This site uses one functional cookie to remember your language preference. Your language is also determined by the URL in the address bar (/tr or /en).',
        'We do not use cookies for marketing, advertising, profiling, or behavioural analytics.'
      ]
    },
    {
      id: 'what-we-do-not-use',
      title: 'What We Do Not Use',
      paragraphs: ['The following are not used on our site:'],
      list: [
        'Google Analytics or similar behavioural analytics tools',
        'Advertising or targeting cookies',
        'Third-party scheduling, chat, or social media embeds',
        'In-site WhatsApp integration (WhatsApp is offered as an external link only)'
      ]
    },
    {
      id: 'questions',
      title: 'Questions',
      paragraphs: [
        'You can delete or block cookies in your browser settings. Disabling the language cookie may require your preference to be set again on your next visit; access to site content is not affected.',
        'For questions, use the email or WhatsApp channels on our contact page. See our Privacy Notice for details on how personal data is processed.'
      ]
    }
  ]
};
