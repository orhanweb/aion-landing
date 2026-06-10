// src/lib/content/data/team.ts
import type { Locale } from '@/i18n/routing';

export type TeamMemberRecord = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin: string;
  photo: string;
  profilePath?: string;
};

export const teamMembersTr: TeamMemberRecord[] = [
  {
    slug: 'tolga-aktas',
    name: 'Tolga Aktaş',
    role: 'Management Systems Addict',
    bio: 'ISO yönetim sistemleri ve akredite sertifikasyon süreçlerinde 15 yılı aşkın deneyime sahip. Kurumlara ISO 42001, ISO 27001 ve EU AI Act uyumunda uçtan uca danışmanlık sunar.',
    expertise: ['ISO 42001', 'ISO 27001', 'EU AI Act'],
    linkedin: 'https://www.linkedin.com/in/tolga-aktas-6b70a343/',
    photo: '/team/tolga-aktas.jpg'
  },
  {
    slug: 'osman-yaycioglu',
    name: 'Osman Yaycıoğlu',
    role: 'Senior Manager',
    bio: 'Kurumsal uyum programlarının stratejiden uygulamaya yönetiminde uzman. Risk değerlendirme, gap analizi ve denetim hazırlığı süreçlerinde müşteri ekiplerine liderlik eder.',
    expertise: ['Risk Management', 'Gap Analysis', 'Audit Readiness'],
    linkedin: 'https://www.linkedin.com/in/osman-yaycioglu-senior-manager/',
    photo: '/team/osman-yaycioglu.png'
  },
  {
    slug: 'orhan-kahraman',
    name: 'Orhan Kahraman',
    role: 'Full-Stack Developer',
    bio: 'React, Next.js ve TypeScript ile kurumsal web ve SaaS ürünleri geliştirir. Form akışları, API katmanları ve AI destekli otomasyon sistemleri kurar.',
    expertise: ['Full-Stack TypeScript', 'SaaS Development', 'AI Integration'],
    linkedin: 'https://www.linkedin.com/in/orhan-kahraman/',
    photo: '/team/orhan-kahraman.png',
    profilePath: '/services/technical-solutions'
  }
];

export const teamMembersEn: TeamMemberRecord[] = [
  {
    slug: 'tolga-aktas',
    name: 'Tolga Aktaş',
    role: 'Management Systems Addict',
    bio: 'Over 15 years of experience in ISO management systems and accredited certification processes. Delivers end-to-end consulting for ISO 42001, ISO 27001, and EU AI Act compliance.',
    expertise: ['ISO 42001', 'ISO 27001', 'EU AI Act'],
    linkedin: 'https://www.linkedin.com/in/tolga-aktas-6b70a343/',
    photo: '/team/tolga-aktas.jpg'
  },
  {
    slug: 'osman-yaycioglu',
    name: 'Osman Yaycıoğlu',
    role: 'Senior Manager',
    bio: 'Specialist in managing enterprise compliance programs from strategy to execution. Leads client teams through risk assessment, gap analysis, and audit preparation.',
    expertise: ['Risk Management', 'Gap Analysis', 'Audit Readiness'],
    linkedin: 'https://www.linkedin.com/in/osman-yaycioglu-senior-manager/',
    photo: '/team/osman-yaycioglu.png'
  },
  {
    slug: 'orhan-kahraman',
    name: 'Orhan Kahraman',
    role: 'Full-Stack Developer',
    bio: 'Builds corporate websites and SaaS products with React, Next.js, and TypeScript. Delivers form flows, API layers, and AI-powered automation systems.',
    expertise: ['Full-Stack TypeScript', 'SaaS Development', 'AI Integration'],
    linkedin: 'https://www.linkedin.com/in/orhan-kahraman/',
    photo: '/team/orhan-kahraman.png',
    profilePath: '/services/technical-solutions'
  }
];

export function resolveTeamMembers(locale: Locale): TeamMemberRecord[] {
  return locale === 'tr' ? teamMembersTr : teamMembersEn;
}
