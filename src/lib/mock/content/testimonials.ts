// src/lib/mock/content/testimonials.ts
import type { Locale } from '@/i18n/routing';
import type { ServiceSlug } from '@/lib/content/services/types';

export type MockTestimonial = {
  id: string;
  author: string;
  sector: string;
  outcome: string;
  quote: string;
  serviceSlug?: ServiceSlug;
  featured: boolean;
};

export const mockTestimonialsTr: MockTestimonial[] = [
  {
    id: 'fatih-kuran',
    author: 'Fatih Kuran',
    sector: 'Finans ve Bankacılık',
    outcome: 'ISO 42001 yol haritası ve kontrol boşluğu haritası',
    quote:
      'ISO 42001 ve EU AI Act uyum sürecinde AION, karmaşık regülasyonları net bir yol haritasıyla yönetmemizi sağladı. YZ sistemlerimiz artık etik, şeffaf ve uluslararası düzeyde denetlenebilir.',
    serviceSlug: 'ai-governance',
    featured: true
  },
  {
    id: 'kemal-esen',
    author: 'Kemal Esen',
    sector: 'Sağlık Teknolojileri',
    outcome: 'Güvenli veri mimarisi ve AI operasyon kontrol seti',
    quote:
      'ISO 27001 çerçevesinde güvenli veri altyapımızı kurarken AI operasyonlarımızı aynı mimariye kusursuz entegre ettiler. Veri güvenliği konusunda artık tam güvenle ilerliyoruz.',
    serviceSlug: 'information-security',
    featured: false
  },
  {
    id: 'damla-sivrioglu-aslan',
    author: 'Damla Sivrioglu Aslan',
    sector: 'Yazılım ve SaaS',
    outcome: 'Önceliklendirilmiş gap analizi ve sertifikasyon planı',
    quote:
      'Gap analizi süreci mevcut durumumuzu netleştirdi ve sertifikasyon yolculuğumuz için maliyet ile zaman tasarrufu sağlayan stratejik bir plan sundu.',
    serviceSlug: 'ai-governance',
    featured: false
  },
  {
    id: 'burcu-yozgatli',
    author: 'Burcu Yozgatli',
    sector: 'Üretim ve Lojistik',
    outcome: 'İş sürekliliği senaryoları ve dayanıklılık hedefleri',
    quote:
      'Sürekliliğe Tasarlanmış AI yaklaşımı sayesinde kritik sistemlerimizin kesintilerde bile güvenle çalışacağını garantiledik. Operasyonel dayanıklılığımız belirgin şekilde güçlendi.',
    serviceSlug: 'operational-resilience',
    featured: false
  },
  {
    id: 'serdar-sahin',
    author: 'Serdar Şahin',
    sector: 'E-Ticaret ve Perakende',
    outcome: 'Sorumlu AI ilkeleri ve yönetim kuruluna hazır sunum seti',
    quote:
      'Sadece teknik uyum değil, kurum kültürümüze sorumlu yapay zeka vizyonunu entegre etmemizi sağladılar. AION, danışmanlık firması değil, gerçek bir iş ortağı.',
    serviceSlug: 'regulatory-compliance',
    featured: false
  }
];

export const mockTestimonialsEn: MockTestimonial[] = [
  {
    id: 'fatih-kuran',
    author: 'Fatih Kuran',
    sector: 'Finance and Banking',
    outcome: 'ISO 42001 roadmap and control gap map',
    quote:
      'During ISO 42001 and EU AI Act compliance, AION gave us a clear roadmap through complex regulation. Our AI systems are now ethical, transparent, and auditable at an international level.',
    serviceSlug: 'ai-governance',
    featured: true
  },
  {
    id: 'kemal-esen',
    author: 'Kemal Esen',
    sector: 'Health Technology',
    outcome: 'Secure data architecture and AI operations control set',
    quote:
      'They built our ISO 27001 secure data infrastructure and integrated AI operations into the same architecture seamlessly. We now move forward with full confidence in our data security.',
    serviceSlug: 'information-security',
    featured: false
  },
  {
    id: 'damla-sivrioglu-aslan',
    author: 'Damla Sivrioglu Aslan',
    sector: 'Software and SaaS',
    outcome: 'Prioritized gap analysis and certification plan',
    quote: 'The gap analysis clarified our current state and delivered a strategic plan that saved both cost and time on our certification journey.',
    serviceSlug: 'ai-governance',
    featured: false
  },
  {
    id: 'burcu-yozgatli',
    author: 'Burcu Yozgatli',
    sector: 'Manufacturing and Logistics',
    outcome: 'Business continuity scenarios and resilience targets',
    quote:
      'Through AI Designed for Continuity, we ensured critical systems keep running safely during disruptions. Our operational resilience improved significantly.',
    serviceSlug: 'operational-resilience',
    featured: false
  },
  {
    id: 'serdar-sahin',
    author: 'Serdar Şahin',
    sector: 'E-Commerce and Retail',
    outcome: 'Responsible AI principles and board-ready briefing pack',
    quote:
      'Beyond technical compliance, they helped integrate a responsible AI vision into our company culture. AION is a true business partner, not just another consultancy.',
    serviceSlug: 'regulatory-compliance',
    featured: false
  }
];

export function getMockTestimonials(locale: Locale): MockTestimonial[] {
  return locale === 'tr' ? mockTestimonialsTr : mockTestimonialsEn;
}
