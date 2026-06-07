// src/lib/mock/content/legal/cookies.en.ts
import type { LegalDocument } from '@/lib/content/legal/types';

export const cookiesEn: LegalDocument = {
  slug: 'cookies',
  title: 'Cookie Policy',
  description: 'Cookies and similar technologies used on the AION website.',
  lastUpdated: '2026-05-26',
  sections: [
    {
      id: 'intro',
      title: 'Overview',
      paragraphs: [
        'This policy describes cookies and similar technologies used on our website at aion.tr.',
        'Non-essential cookies are only loaded through third-party services activated by your explicit action (e.g. clicking “Open Calendar”).'
      ]
    },
    {
      id: 'first-party',
      title: 'First-Party Cookies',
      paragraphs: ['Our site uses the following first-party mechanisms:'],
      list: [
        'Language preference — locale routing for the session (next-intl)',
        'Technical session cookies — security and load balancing (hosting provider)',
        'No first-party marketing or profiling cookies'
      ]
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      paragraphs: [
        'Calendly: We load the scheduling widget only after you click “Open Calendar”. Calendly may set its own cookies.',
        'Calendly privacy: calendly.com/privacy'
      ],
      list: ['calendly.com — appointment scheduling (after user action)', 'Hosting/CDN provider — static asset delivery (technical cookies)']
    },
    {
      id: 'fonts',
      title: 'Fonts and Analytics',
      paragraphs: [
        'Fonts are self-hosted via next/font; we do not load Google Fonts from a CDN.',
        'We do not use Google Analytics or similar behavioural analytics tools.'
      ]
    },
    {
      id: 'control',
      title: 'Managing Preferences',
      paragraphs: [
        'You can delete or block cookies in your browser settings. Disabling essential cookies may affect site functionality.',
        'No third-party cookies are set until the Calendly embed loads; you may contact us by email instead.'
      ]
    },
    {
      id: 'updates',
      title: 'Updates',
      paragraphs: [
        'We may update this policy when our services or legal requirements change. The revision date is shown at the top of the page.',
        'For questions, see our Privacy Notice and contact channels.'
      ]
    }
  ]
};
