// src/lib/content/about.ts
import type { Locale } from '@/i18n/routing';
import { resolveAboutContent, type AboutContentRecord, type AboutPrincipleRecord } from '@/lib/content/data/about';

export type AboutPrinciple = AboutPrincipleRecord;
export type AboutContent = AboutContentRecord;

export function getAboutContent(locale: Locale): AboutContent {
  return resolveAboutContent(locale);
}
