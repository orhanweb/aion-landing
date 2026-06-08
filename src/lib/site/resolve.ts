// src/lib/site/resolve.ts
import type { Locale } from '@/i18n/routing';
import { buildMockContact, mockContactResponseTime, mockSiteMeta } from '@/lib/mock/site';
import { resolveDataSource } from '@/lib/mock/source';
import { readPublicEnv } from '@/lib/site/env';
import type { SiteConfig, SiteContact, SiteMeta } from '@/lib/site/types';

function resolveMeta(): SiteMeta {
  return {
    url: readPublicEnv('NEXT_PUBLIC_SITE_URL') ?? mockSiteMeta.url,
    name: readPublicEnv('NEXT_PUBLIC_SITE_NAME') ?? mockSiteMeta.name,
    tagline: readPublicEnv('NEXT_PUBLIC_SITE_TAGLINE') ?? mockSiteMeta.tagline
  };
}

function resolveContact(locale: Locale): SiteContact {
  const source = resolveDataSource();
  const mock = buildMockContact(locale);

  if (source === 'mock') {
    return mock;
  }

  return {
    email: readPublicEnv('NEXT_PUBLIC_CONTACT_EMAIL') ?? mock.email,
    whatsappE164: readPublicEnv('NEXT_PUBLIC_WHATSAPP_NUMBER') ?? mock.whatsappE164,
    whatsappDisplay: readPublicEnv('NEXT_PUBLIC_WHATSAPP_DISPLAY') ?? mock.whatsappDisplay ?? mock.whatsappE164,
    responseTime: mockContactResponseTime[locale]
  };
}

export function resolveSiteConfig(locale: Locale): SiteConfig {
  const source = resolveDataSource();

  return {
    source,
    meta: resolveMeta(),
    contact: resolveContact(locale)
  };
}

export function getSiteUrl(): string {
  return resolveMeta().url;
}
