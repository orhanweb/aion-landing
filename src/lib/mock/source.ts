// src/lib/mock/source.ts
import { readPublicEnv } from '@/lib/site/env';
import type { SiteDataSource } from '@/lib/site/types';

const LIVE_CONTACT_KEYS = [
  'NEXT_PUBLIC_CONTACT_EMAIL',
  'NEXT_PUBLIC_CONTACT_PHONE',
  'NEXT_PUBLIC_CONTACT_PHONE_DISPLAY',
  'NEXT_PUBLIC_CALENDLY_URL'
] as const;

/** Whether contact channels use mock defaults or live NEXT_PUBLIC_* env overrides. */
export function resolveDataSource(): SiteDataSource {
  const explicit = readPublicEnv('SITE_DATA_SOURCE');

  if (explicit === 'mock' || explicit === 'live') {
    return explicit;
  }

  const hasLiveContact = LIVE_CONTACT_KEYS.every(key => Boolean(readPublicEnv(key)));
  return hasLiveContact ? 'live' : 'mock';
}

export function isMockDataSource(): boolean {
  return resolveDataSource() === 'mock';
}
