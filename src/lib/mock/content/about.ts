// src/lib/mock/content/about.ts
import type { Locale } from '@/i18n/routing';

export type MockAboutPrinciple = {
  title: string;
  description: string;
};

export type MockAboutContent = {
  mission: string;
  story: string;
  principles: MockAboutPrinciple[];
};

export const mockAboutTr: MockAboutContent = {
  mission:
    'AION, kurumların yapay zeka sistemlerini güvenli, şeffaf ve denetlenebilir şekilde yönetmesi için ISO standartları ve EU AI Act uyumunda uçtan uca danışmanlık sunar.',
  story:
    'Yapay zeka regülasyonları hızla evriliyor; kurumlar teknik ekipler ile uyum birimleri arasında köprü kuracak güvenilir bir ortağa ihtiyaç duyuyor. AION, sertifikasyon odaklı danışmanlık geleneğini AI yönetişimi alanına taşıyarak stratejiden denetime kadar yanınızda olur.',
  principles: [
    {
      title: 'Trust by Design',
      description: 'Güven, sonradan eklenen bir katman değil; süreçlerin ve sistemlerin tasarımının merkezinde yer alır.'
    },
    {
      title: 'Audit-Ready',
      description: 'Her adım, uluslararası denetim ve akredite sertifikasyon gereksinimlerine göre yapılandırılır.'
    },
    {
      title: 'Standards-First',
      description: 'ISO 42001, ISO 27001, ISO 22301 ve EU AI Act çerçeveleri tüm yol haritalarımızın temelidir.'
    },
    {
      title: 'Long-Term Partnership',
      description: 'Sertifika almak bir bitiş değil; sürekli iyileştirme ve regülasyon takibi için kalıcı bir ilişki başlatır.'
    }
  ]
};

export const mockAboutEn: MockAboutContent = {
  mission:
    'AION delivers end-to-end consulting so organizations manage AI systems securely, transparently, and auditably under ISO standards and the EU AI Act.',
  story:
    'AI regulation is evolving fast; enterprises need a trusted partner bridging technical teams and compliance functions. AION brings certification-grade consulting to AI governance — from strategy through audit.',
  principles: [
    {
      title: 'Trust by Design',
      description: 'Trust is not a layer added later — it sits at the center of how processes and systems are designed.'
    },
    {
      title: 'Audit-Ready',
      description: 'Every step is structured against international audit and accredited certification requirements.'
    },
    {
      title: 'Standards-First',
      description: 'ISO 42001, ISO 27001, ISO 22301, and the EU AI Act frame every roadmap we build.'
    },
    {
      title: 'Long-Term Partnership',
      description: 'Certification is not the finish line — it starts a lasting relationship for continuous improvement and regulatory tracking.'
    }
  ]
};

export function getMockAboutContent(locale: Locale): MockAboutContent {
  return locale === 'tr' ? mockAboutTr : mockAboutEn;
}
