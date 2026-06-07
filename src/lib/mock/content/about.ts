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
    'AION, kurumların yapay zeka sistemlerini güvenli, şeffaf ve denetlenebilir biçimde yönetmesi için ISO standartları ve EU AI Act uyumunda danışmanlık sunar.',
  story:
    'Yapay zeka regülasyonları hızla değişiyor. Teknik ekipler ile uyum birimleri arasında köprü kurmak giderek zorlaşıyor. AION, sertifikasyon odaklı danışmanlık deneyimini yapay zeka yönetişimine taşıyarak stratejiden denetime kadar yanınızda olur.',
  principles: [
    {
      title: 'Trust by Design',
      description: 'Güven sonradan eklenen bir katman değil. Süreçlerin ve sistemlerin tasarımının parçasıdır.'
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
      description: 'Sertifika bitiş çizgisi değil. Sürekli iyileştirme ve regülasyon takibi için kalıcı bir ilişkinin başlangıcıdır.'
    }
  ]
};

export const mockAboutEn: MockAboutContent = {
  mission: 'AION helps organizations manage AI systems securely, transparently, and auditably under ISO standards and the EU AI Act.',
  story:
    'AI regulation is changing quickly, and the gap between technical teams and compliance functions keeps widening. AION brings certification-grade consulting to AI governance, from strategy through audit.',
  principles: [
    {
      title: 'Trust by Design',
      description: 'Trust is built into how processes and systems are designed, not added at the end.'
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
      description: 'Certification is a milestone, not the finish line. We stay with you for continuous improvement and regulatory tracking.'
    }
  ]
};

export function getMockAboutContent(locale: Locale): MockAboutContent {
  return locale === 'tr' ? mockAboutTr : mockAboutEn;
}
