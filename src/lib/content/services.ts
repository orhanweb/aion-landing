// src/lib/content/services.ts
import type { Locale } from '@/i18n/routing';

export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  steps: { title: string; description: string }[];
};

const servicesTr: Service[] = [
  {
    slug: 'ai-yonetisimi',
    title: 'Yapay Zeka Yönetişimi',
    subtitle: 'ISO 42001: Riskten Değere Giden Yol Haritası',
    description:
      'ISO/IEC 42001 temelli yapay zeka yönetişim sistemi kuruyoruz. AI sistemlerinin risklerini, karar süreçlerini ve yaşam döngüsünü kurumsal kontrol altına alıyoruz.',
    steps: [
      {
        title: 'Hedef Belirleme',
        description: 'Kurumunuzun stratejik vizyonuyla uyumlu, ölçülebilir AI hedefleri belirliyoruz.'
      },
      {
        title: 'Politika ve Prosedürler',
        description: 'Etik kullanım, veri güvenliği ve şeffaflık ilkelerini içeren YZ politikası oluşturuyoruz.'
      },
      {
        title: 'Risk Mimarisi ve Kontroller',
        description: 'Algoritmik önyargı ve şeffaflık risklerini tanımlayıp kontrol mekanizmaları kuruyoruz.'
      }
    ]
  },
  {
    slug: 'regulasyon-uyum',
    title: 'Regülasyon ve Uyum',
    subtitle: "EU AI Act'e Hazır Yapay Zeka",
    description:
      'AI sistemlerinizi EU AI Act ve uluslararası düzenlemeler kapsamında değerlendiriyor, risk sınıflandırması ve uyum süreçlerini yapılandırıyoruz.',
    steps: []
  },
  {
    slug: 'bilgi-guvenligi',
    title: 'Bilgi Güvenliği',
    subtitle: 'Veri Güvenliği İnsanlarla Sağlanır',
    description: 'ISO 27001 çerçevesinde veri güvenliği, erişim kontrolü ve güvenli AI operasyonları için bilgi güvenliği mimarisi oluşturuyoruz.',
    steps: []
  },
  {
    slug: 'operasyonel-dayaniklilik',
    title: 'Operasyonel Dayanıklılık',
    subtitle: 'Sürekliliğe Tasarlanmış AI',
    description: 'ISO 22301 iş sürekliliği yaklaşımıyla kritik AI ve veri sistemlerinin kesintilerde güvenle çalışmasını sağlıyoruz.',
    steps: []
  },
  {
    slug: 'insan-gozetimi',
    title: 'Yapay Zekada İnsan Gözetimi',
    subtitle: 'YZ Gücü İnsan Gözetiminde',
    description: 'Tasarım yoluyla güven yaklaşımıyla insan gözetimini merkeze alan, hesap verebilir risk yönetim altyapısı inşa ediyoruz.',
    steps: []
  }
];

const servicesEn: Service[] = [
  {
    slug: 'ai-governance',
    title: 'AI Governance',
    subtitle: 'ISO 42001: Roadmap from Risk to Value',
    description: 'We build ISO/IEC 42001-based AI management systems and bring AI risks, decisions, and lifecycle under corporate control.',
    steps: [
      {
        title: 'Goal Setting',
        description: 'We define measurable AI goals aligned with your strategic vision.'
      },
      {
        title: 'Policies and Procedures',
        description: 'We create AI policies covering ethical use, data security, and transparency.'
      },
      {
        title: 'Risk Architecture and Controls',
        description: 'We identify algorithmic bias and transparency risks and implement controls.'
      }
    ]
  },
  {
    slug: 'regulatory-compliance',
    title: 'Regulation and Compliance',
    subtitle: 'EU AI Act Ready AI',
    description: 'We assess your AI systems under the EU AI Act and structure risk classification and compliance processes.',
    steps: []
  },
  {
    slug: 'information-security',
    title: 'Information Security',
    subtitle: 'Data Security Built with People',
    description: 'We design information security architecture for data protection and secure AI operations under ISO 27001.',
    steps: []
  },
  {
    slug: 'operational-resilience',
    title: 'Operational Resilience',
    subtitle: 'AI Designed for Continuity',
    description: 'We ensure critical AI and data systems keep running safely during disruptions with ISO 22301.',
    steps: []
  },
  {
    slug: 'human-oversight',
    title: 'Human Oversight in AI',
    subtitle: 'AI Power Under Human Oversight',
    description: 'We build accountable risk management infrastructure centered on human oversight by design.',
    steps: []
  }
];

export function getServices(locale: Locale): Service[] {
  return locale === 'tr' ? servicesTr : servicesEn;
}

export function getService(locale: Locale, slug: string): Service | undefined {
  return getServices(locale).find(service => service.slug === slug);
}

export function getServiceSlugs(locale: Locale): string[] {
  return getServices(locale).map(service => service.slug);
}
