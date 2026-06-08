// src/lib/site/resolve.ts
import { requirePublicEnv } from '@/lib/site/env';
import type { SiteConfig, SiteContact, SiteMeta } from '@/lib/site/types';

function resolveMeta(): SiteMeta {
  return {
    url: requirePublicEnv('NEXT_PUBLIC_SITE_URL'),
    name: requirePublicEnv('NEXT_PUBLIC_SITE_NAME'),
    tagline: requirePublicEnv('NEXT_PUBLIC_SITE_TAGLINE')
  };
}

function resolveContact(): SiteContact {
  return {
    email: requirePublicEnv('NEXT_PUBLIC_CONTACT_EMAIL'),
    whatsappE164: requirePublicEnv('NEXT_PUBLIC_WHATSAPP_NUMBER'),
    whatsappDisplay: requirePublicEnv('NEXT_PUBLIC_WHATSAPP_DISPLAY')
  };
}

export function resolveSiteConfig(): SiteConfig {
  return {
    meta: resolveMeta(),
    contact: resolveContact()
  };
}

export function getSiteUrl(): string {
  return resolveMeta().url;
}
