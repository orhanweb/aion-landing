// src/lib/content/team.ts
import type { Locale } from '@/i18n/routing';
import { resolveTeamMembers, type TeamMemberRecord } from '@/lib/content/data/team';

export type TeamMember = TeamMemberRecord;

export function getTeamMembers(locale: Locale): TeamMember[] {
  return resolveTeamMembers(locale);
}
