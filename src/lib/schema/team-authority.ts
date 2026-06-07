// src/lib/schema/team-authority.ts
import { getServices } from '@/lib/content/services';
import { getTeamMembers } from '@/lib/content/team';
import type { Locale } from '@/i18n/routing';

/** Topics visible on service pages and team profiles — single source for org-level knowsAbout. */
export function organizationKnowsAboutTopics(locale: Locale): string[] {
  const serviceTopics = getServices(locale).flatMap(service => [service.standard, service.title]);
  const teamTopics = getTeamMembers(locale).flatMap(member => member.expertise);

  return [...new Set([...serviceTopics, ...teamTopics])];
}

export function personKnowsAboutTopics(member: { expertise: string[] }): string[] {
  return [...member.expertise];
}
