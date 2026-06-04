// src/lib/mock/index.ts
/**
 * Single mock-data entry point for AION runtime content.
 *
 * Edit files under src/lib/mock/ to update client-facing placeholders.
 * Contact channels: set SITE_DATA_SOURCE=live + NEXT_PUBLIC_* env vars to override mock site.ts.
 * Assessment delivery: set ASSESSMENT_SUBMIT_MODE=webhook + ASSESSMENT_WEBHOOK_URL.
 */
export { resolveDataSource, isMockDataSource } from '@/lib/mock/source';
export { mockSiteMeta, mockContactBase, mockContactAddress, mockContactResponseTime, buildMockContact, getMockContact } from '@/lib/mock/site';
export {
  getMockContentBundle,
  getMockServices,
  getMockLegalDocument,
  getMockAboutContent,
  getMockTeamMembers,
  getMockTestimonials,
  mockServicesTr,
  mockServicesEn
} from '@/lib/mock/content';
export type { MockContentBundle, MockAboutContent, MockTeamMember, MockTestimonial } from '@/lib/mock/content';
export { mockIntegrationsDefaults } from '@/lib/mock/integrations';
