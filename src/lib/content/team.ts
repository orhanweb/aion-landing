// src/lib/content/team.ts
import type { Locale } from '@/i18n/routing';
import { getMockTeamMembers, type MockTeamMember } from '@/lib/mock/content/team';

export type TeamMember = MockTeamMember;

export function getTeamMembers(locale: Locale): TeamMember[] {
  return getMockTeamMembers(locale);
}
