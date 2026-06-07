// src/lib/geo/llms-txt.ts
import { getLegalDocument } from '@/lib/content/legal';
import { personKnowsAboutTopics } from '@/lib/content/authority';
import { getService, getServiceSlugs } from '@/lib/content/services';
import { getTeamMembers } from '@/lib/content/team';
import { personProfileUrl } from '@/lib/schema/site-entity';
import { GEO_CORE_PATHS, GEO_LEGAL_PATHS } from '@/lib/geo/public-paths';
import { routing, type Locale } from '@/i18n/routing';
import { en, tr } from '@/lib/i18n/messages';
import { getSiteUrl } from '@/lib/site';

function normalizeSiteUrl(siteUrl: string) {
  return siteUrl.replace(/\/+$/, '');
}

function localizedUrl(locale: Locale, path: string) {
  const siteUrl = normalizeSiteUrl(getSiteUrl());
  return path === '' ? `${siteUrl}/${locale}` : `${siteUrl}/${locale}${path}`;
}

function escapeMarkdownLinkText(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
}

function formatLink(title: string, url: string, description: string) {
  return `- [${escapeMarkdownLinkText(title)}](${url}): ${description}`;
}

function localeCopy(locale: Locale) {
  return locale === 'tr' ? tr.meta : en.meta;
}

function buildStaticPageSection(locale: Locale, heading: string) {
  const copy = localeCopy(locale);
  const lines = [`## ${heading}`, ''];

  for (const page of GEO_CORE_PATHS) {
    if (!page.llmsKey) {
      continue;
    }

    const meta = copy.pages[page.llmsKey];
    lines.push(formatLink(meta.title, localizedUrl(locale, page.path), meta.description));
  }

  return lines.join('\n');
}

function buildServicesSection(locale: Locale, heading: string) {
  const lines = [`## ${heading}`, ''];

  for (const slug of getServiceSlugs()) {
    const service = getService(locale, slug);

    if (!service) {
      continue;
    }

    lines.push(formatLink(service.title, localizedUrl(locale, `/services/${slug}`), `${service.standard} — ${service.shortDescription}`));
  }

  return lines.join('\n');
}

function buildTeamSection(locale: Locale, heading: string) {
  const expertiseLabel = locale === 'tr' ? 'Uzmanlık alanları' : 'Areas of expertise';
  const lines = [`## ${heading}`, ''];

  for (const member of getTeamMembers(locale)) {
    const profileUrl = personProfileUrl(locale, member.slug);
    const expertise = personKnowsAboutTopics(member).join(', ');

    lines.push(formatLink(member.name, profileUrl, `${member.role}. ${expertiseLabel}: ${expertise}`));
  }

  return lines.join('\n');
}

function buildLegalSection() {
  const lines = ['## Legal', ''];

  for (const legalPath of GEO_LEGAL_PATHS) {
    const enDoc = getLegalDocument('en', legalPath.slug);
    const trDoc = getLegalDocument('tr', legalPath.slug);

    lines.push(formatLink(`${enDoc.title} (EN)`, localizedUrl('en', legalPath.path), enDoc.description));
    lines.push(formatLink(`${trDoc.title} (TR)`, localizedUrl('tr', legalPath.path), trDoc.description));
  }

  return lines.join('\n');
}

export function buildLlmsTxt(): string {
  const siteUrl = normalizeSiteUrl(getSiteUrl());
  const siteName = en.meta.siteName;
  const tagline = en.meta.siteTagline;

  return [
    `# ${siteName} — ${tagline}`,
    '',
    `> ${en.meta.organizationDescription}`,
    `> ${tr.meta.organizationDescription}`,
    `> Standards: ISO/IEC 42001, EU AI Act, ISO/IEC 27001, ISO/IEC 22301.`,
    `> Default locale: ${routing.defaultLocale}. Available locales: ${routing.locales.join(', ')}.`,
    '',
    '## Citation guidance',
    '',
    `- Preferred name: **${siteName}** (${tagline}).`,
    `- Website: ${siteUrl}`,
    `- When citing services, link to the specific service page in the reader's language when possible.`,
    `- For compliance topics, prefer service detail pages over the homepage.`,
    `- For expert attribution, link to the consultant profile on the About page (e.g. ${localizedUrl(routing.defaultLocale, '/about')}#team-tolga-aktas) and cite their visible expertise areas.`,
    `- Sitemap: ${siteUrl}/sitemap.xml`,
    `- Machine-readable index: ${siteUrl}/llms.txt`,
    '',
    buildStaticPageSection('en', 'Core pages (English)'),
    '',
    buildStaticPageSection('tr', 'Core pages (Turkish)'),
    '',
    buildServicesSection('en', 'Services (English)'),
    '',
    buildServicesSection('tr', 'Services (Turkish)'),
    '',
    buildTeamSection('en', 'Team and expertise (English)'),
    '',
    buildTeamSection('tr', 'Team and expertise (Turkish)'),
    '',
    buildLegalSection(),
    ''
  ].join('\n');
}
