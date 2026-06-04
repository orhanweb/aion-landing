// src/lib/mock/content/index.ts
import type { Locale } from '@/i18n/routing';
import type { LegalSlug } from '@/lib/content/legal/types';
import type { Service } from '@/lib/content/services/types';
import { getMockAboutContent, type MockAboutContent } from '@/lib/mock/content/about';
import { cookiesEn } from '@/lib/mock/content/legal/cookies.en';
import { cookiesTr } from '@/lib/mock/content/legal/cookies.tr';
import { privacyEn } from '@/lib/mock/content/legal/privacy.en';
import { privacyTr } from '@/lib/mock/content/legal/privacy.tr';
import { mockServicesEn } from '@/lib/mock/content/services/en';
import { mockServicesTr } from '@/lib/mock/content/services/tr';
import { getMockTeamMembers, type MockTeamMember } from '@/lib/mock/content/team';
import { getMockTestimonials, type MockTestimonial } from '@/lib/mock/content/testimonials';

export type { MockAboutContent, MockAboutPrinciple } from '@/lib/mock/content/about';
export type { MockTeamMember } from '@/lib/mock/content/team';
export type { MockTestimonial } from '@/lib/mock/content/testimonials';
export { mockServicesTr, mockServicesEn };

const legalTr = { privacy: privacyTr, cookies: cookiesTr } as const;
const legalEn = { privacy: privacyEn, cookies: cookiesEn } as const;

export function getMockServices(locale: Locale): Service[] {
  return locale === 'tr' ? mockServicesTr : mockServicesEn;
}

export function getMockLegalDocument(locale: Locale, slug: LegalSlug) {
  const bundle = locale === 'tr' ? legalTr : legalEn;
  return bundle[slug];
}

export { getMockAboutContent, getMockTeamMembers, getMockTestimonials, legalTr, legalEn };

export type MockContentBundle = {
  team: MockTeamMember[];
  testimonials: MockTestimonial[];
  about: MockAboutContent;
  services: Service[];
};

export function getMockContentBundle(locale: Locale): MockContentBundle {
  return {
    team: getMockTeamMembers(locale),
    testimonials: getMockTestimonials(locale),
    about: getMockAboutContent(locale),
    services: getMockServices(locale)
  };
}
