// src/lib/mock/content/team.ts
import type { Locale } from '@/i18n/routing';

export type MockTeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin: string;
  photo: string;
};

export const mockTeamTr: MockTeamMember[] = [
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
    role: 'Developer',
    bio: 'AI yönetişim platformları ve uyum otomasyon araçlarının geliştirilmesinden sorumlu. Teknik altyapı, veri güvenliği mimarisi ve süreç dijitalleştirme çözümleri tasarlar.',
    expertise: ['Platform Engineering', 'Data Security', 'Process Automation'],
    linkedin: 'https://www.linkedin.com/in/orhan-kahraman/',
    photo: '/team/orhan-kahraman.png'
  }
];

export const mockTeamEn: MockTeamMember[] = [
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
    role: 'Developer',
    bio: 'Responsible for building AI governance platforms and compliance automation tools. Designs technical infrastructure, data security architecture, and process digitization solutions.',
    expertise: ['Platform Engineering', 'Data Security', 'Process Automation'],
    linkedin: 'https://www.linkedin.com/in/orhan-kahraman/',
    photo: '/team/orhan-kahraman.png'
  }
];

export function getMockTeamMembers(locale: Locale): MockTeamMember[] {
  return locale === 'tr' ? mockTeamTr : mockTeamEn;
}
