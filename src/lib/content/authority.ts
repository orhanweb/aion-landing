// src/lib/content/authority.ts
import { getServices } from '@/lib/content/services';
import type { TeamMember } from '@/lib/content/team';
import { getTeamMembers } from '@/lib/content/team';
import type { Locale } from '@/i18n/routing';

/** Topics visible on service pages and team profiles — single source for authority signals. */
export function organizationKnowsAboutTopics(locale: Locale): string[] {
  const serviceTopics = getServices(locale).flatMap(service => [service.standard, service.title]);
  const teamTopics = getTeamMembers(locale).flatMap(member => member.expertise);

  return [...new Set([...serviceTopics, ...teamTopics])];
}

export function personKnowsAboutTopics(member: Pick<TeamMember, 'expertise'>): string[] {
  return [...member.expertise];
}
