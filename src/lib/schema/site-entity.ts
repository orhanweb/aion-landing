// src/lib/schema/site-entity.ts
import { getSiteUrl } from '@/lib/site';

export function organizationEntityId(siteUrl = getSiteUrl()) {
  return `${siteUrl}/#organization`;
}
