// src/lib/schema/person.ts
import { getTeamMembers } from '@/lib/content/team';
import type { TeamMember } from '@/lib/content/team';
import { personKnowsAboutTopics } from '@/lib/content/authority';
import { organizationEntityId, personEntityId, personProfileUrl } from '@/lib/schema/site-entity';
import { absoluteAssetUrl, normalizeSiteUrl } from '@/lib/schema/url';
import { schemaImageObject, type SchemaNodeWithId } from '@/lib/schema/helpers';
import type { Locale } from '@/i18n/routing';

export type PersonSchemaNode = SchemaNodeWithId & {
  '@type': 'Person';
  name: string;
  jobTitle: string;
  description: string;
  image: ReturnType<typeof schemaImageObject>;
  url: string;
  sameAs: string[];
  worksFor: { '@id': string };
  knowsAbout?: string[];
};

export function personSchemaNode(member: TeamMember, locale: Locale, siteUrl = normalizeSiteUrl()): PersonSchemaNode {
  return {
    '@type': 'Person',
    '@id': personEntityId(member.slug, siteUrl),
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    image: schemaImageObject(absoluteAssetUrl(member.photo, siteUrl)),
    url: personProfileUrl(locale, member.slug, siteUrl),
    sameAs: [member.linkedin],
    worksFor: {
      '@id': organizationEntityId(siteUrl)
    },
    ...(member.expertise.length > 0 ? { knowsAbout: personKnowsAboutTopics(member) } : {})
  };
}

export function teamPersonSchemaNodes(locale: Locale, siteUrl = normalizeSiteUrl()): PersonSchemaNode[] {
  return getTeamMembers(locale).map(member => personSchemaNode(member, locale, siteUrl));
}
