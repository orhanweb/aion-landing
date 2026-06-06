// src/lib/schema/helpers.ts
import type { Locale } from '@/i18n/routing';

export function schemaInLanguage(locale: Locale) {
  return locale === 'tr' ? 'tr-TR' : 'en-US';
}

export function schemaImageObject(url: string) {
  return {
    '@type': 'ImageObject' as const,
    url
  };
}

export const SCHEMA_AREA_SERVED = [
  { '@type': 'Country' as const, name: 'Turkey' },
  { '@type': 'AdministrativeArea' as const, name: 'European Union' }
] as const;

export type SchemaNodeWithId = {
  '@id': string;
};
