// src/lib/content/about.ts
import type { Locale } from '@/i18n/routing';
import { getMockAboutContent, type MockAboutContent, type MockAboutPrinciple } from '@/lib/mock/content/about';

export type AboutPrinciple = MockAboutPrinciple;
export type AboutContent = MockAboutContent;

export function getAboutContent(locale: Locale): AboutContent {
  return getMockAboutContent(locale);
}
