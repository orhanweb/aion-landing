// src/lib/content/site-config.ts
import type { Locale } from '@/i18n/routing';

/**
 * Single source of truth for site-wide business data.
 * MOCK values below — swap by editing MOCK or setting env vars for production.
 *
 * Env overrides (optional):
 *   NEXT_PUBLIC_CONTACT_EMAIL
 *   NEXT_PUBLIC_CONTACT_PHONE
 *   NEXT_PUBLIC_CONTACT_PHONE_DISPLAY
 *   NEXT_PUBLIC_CALENDLY_URL
 *   NEXT_PUBLIC_LINKEDIN_URL
 *   NEXT_PUBLIC_COMPANY_ADDRESS
 */

const MOCK = {
  contact: {
    email: 'contact@aion.tr',
    phoneE164: '+902125550000',
    phoneDisplay: '+90 (212) 555 00 00',
    calendlyUrl: 'https://calendly.com/aion-consulting/discovery-call',
    address: {
      tr: 'Levent, İstanbul, Türkiye',
      en: 'Levent, Istanbul, Türkiye'
    },
    responseTime: {
      tr: 'İş günlerinde 24 saat içinde dönüş',
      en: 'Response within 24 business hours'
    }
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/aion-tr'
  }
} as const;

export type SiteContact = {
  email: string;
  phoneE164: string;
  phoneDisplay: string;
  calendlyUrl: string;
  address: string;
  responseTime: string;
  linkedin: string;
  isMock: boolean;
};

function readEnv(key: string): string | undefined {
  const value = process.env[key]?.trim();
  return value && value.length > 0 ? value : undefined;
}

export function getSiteContact(locale: Locale): SiteContact {
  const email = readEnv('NEXT_PUBLIC_CONTACT_EMAIL') ?? MOCK.contact.email;
  const phoneE164 = readEnv('NEXT_PUBLIC_CONTACT_PHONE') ?? MOCK.contact.phoneE164;
  const phoneDisplay = readEnv('NEXT_PUBLIC_CONTACT_PHONE_DISPLAY') ?? MOCK.contact.phoneDisplay;
  const calendlyUrl = readEnv('NEXT_PUBLIC_CALENDLY_URL') ?? MOCK.contact.calendlyUrl;
  const linkedin = readEnv('NEXT_PUBLIC_LINKEDIN_URL') ?? MOCK.social.linkedin;
  const address = readEnv('NEXT_PUBLIC_COMPANY_ADDRESS') ?? MOCK.contact.address[locale === 'tr' ? 'tr' : 'en'];

  const usingEnv =
    Boolean(readEnv('NEXT_PUBLIC_CONTACT_EMAIL')) || Boolean(readEnv('NEXT_PUBLIC_CONTACT_PHONE')) || Boolean(readEnv('NEXT_PUBLIC_CALENDLY_URL'));

  return {
    email,
    phoneE164,
    phoneDisplay,
    calendlyUrl,
    address,
    responseTime: MOCK.contact.responseTime[locale === 'tr' ? 'tr' : 'en'],
    linkedin,
    isMock: !usingEnv
  };
}
