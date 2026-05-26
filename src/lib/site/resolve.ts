// src/lib/site/resolve.ts
import type { Locale } from '@/i18n/routing';
import { readPublicEnv } from '@/lib/site/env';
import { buildMockContact, mockContactAddress, mockContactBase, mockContactResponseTime, mockSiteMeta } from '@/lib/site/mock/fixtures';
import type { SiteConfig, SiteContact, SiteDataSource, SiteMeta } from '@/lib/site/types';

const LIVE_CONTACT_KEYS = [
  'NEXT_PUBLIC_CONTACT_EMAIL',
  'NEXT_PUBLIC_CONTACT_PHONE',
  'NEXT_PUBLIC_CONTACT_PHONE_DISPLAY',
  'NEXT_PUBLIC_CALENDLY_URL'
] as const;

function resolveDataSource(): SiteDataSource {
  const explicit = readPublicEnv('SITE_DATA_SOURCE');

  if (explicit === 'mock' || explicit === 'live') {
    return explicit;
  }

  const hasLiveContact = LIVE_CONTACT_KEYS.every(key => Boolean(readPublicEnv(key)));
  return hasLiveContact ? 'live' : 'mock';
}

function resolveMeta(): SiteMeta {
  return {
    url: readPublicEnv('NEXT_PUBLIC_SITE_URL') ?? mockSiteMeta.url,
    name: readPublicEnv('NEXT_PUBLIC_SITE_NAME') ?? mockSiteMeta.name,
    tagline: readPublicEnv('NEXT_PUBLIC_SITE_TAGLINE') ?? mockSiteMeta.tagline
  };
}

function resolveContact(locale: Locale, source: SiteDataSource): SiteContact {
  const mock = buildMockContact(locale);

  if (source === 'mock') {
    return mock;
  }

  return {
    email: readPublicEnv('NEXT_PUBLIC_CONTACT_EMAIL') ?? mock.email,
    phoneE164: readPublicEnv('NEXT_PUBLIC_CONTACT_PHONE') ?? mock.phoneE164,
    phoneDisplay: readPublicEnv('NEXT_PUBLIC_CONTACT_PHONE_DISPLAY') ?? mock.phoneDisplay,
    calendlyUrl: readPublicEnv('NEXT_PUBLIC_CALENDLY_URL') ?? mock.calendlyUrl,
    linkedin: readPublicEnv('NEXT_PUBLIC_LINKEDIN_URL') ?? mockContactBase.linkedin,
    address: readPublicEnv('NEXT_PUBLIC_COMPANY_ADDRESS') ?? mockContactAddress[locale],
    responseTime: mockContactResponseTime[locale]
  };
}

export function resolveSiteConfig(locale: Locale): SiteConfig {
  const source = resolveDataSource();

  return {
    source,
    meta: resolveMeta(),
    contact: resolveContact(locale, source),
    features: {
      showMockBanner: source === 'mock'
    }
  };
}

export function getSiteUrl(): string {
  return resolveMeta().url;
}
