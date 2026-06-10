// src/lib/content/technical-offering/data/tr.ts
import { TECHNICAL_OFFERING_SLUG, type TechnicalOffering } from '@/lib/content/technical-offering/types';

export const technicalOfferingTr: TechnicalOffering = {
  slug: TECHNICAL_OFFERING_SLUG,
  title: 'Teknik Geliştirme',
  subtitle: 'Orhan Kahraman, full-stack TypeScript geliştirici',
  shortDescription:
    'Kurumsal siteler, SaaS ürünleri ve çok adımlı uygulamalarda uçtan uca yazılım teslim eder. Performans, güvenlik ve sürdürülebilir mimariyi önceliklendirir.',
  focus: 'Full-Stack TypeScript',
  intro: [
    'Orhan Kahraman, React ve Next.js ekosisteminde full-stack TypeScript geliştiricidir. Kurumsal pazarlama siteleri, SaaS ürünleri, iç operasyon araçları ve AI destekli iş akışları geliştirir.',
    'Orhan Kahraman, AION bünyesinde teknik teslimat ortağı olarak danışmanlık çıktılarını kullanıcıya dönük ve sürdürülebilir yazılıma dönüştürür. Bu site; çok dilli yapı, değerlendirme akışı ve canlı ortam altyapısıyla aynı yaklaşımın örneğidir.'
  ],
  capabilities: [
    'Kurumsal web siteleri ve hizmet vitrinleri',
    'SaaS ürün geliştirme, frontend ile backend ve veritabanı katmanları',
    'Çok adımlı formlar ve wizard akışları',
    'Dashboard ve iç operasyon araçları',
    'AI ve otomasyon entegrasyonları',
    'API tasarımı ve üçüncü parti sistem bağlantıları'
  ],
  areas: [
    {
      title: 'Kurumsal Web',
      description:
        'Landing sayfaları, hizmet vitrinleri ve çok dilli kurumsal siteler. Erişilebilirlik, SEO ve güvenlik başlıkları geliştirme sürecinin parçasıdır; canlı ortama sorunsuz deploy hedeflenir.'
    },
    {
      title: 'Ürün Geliştirme',
      description:
        'MVP aşamasından canlı ürüne SaaS geliştirme. Kimlik doğrulama, formlar, liste ve detay ekranları. Ürün büyüdükçe genişleyebilen modüler mimari.'
    },
    {
      title: 'Backend ve Veri',
      description:
        'REST API, veritabanı modelleme, arka plan işleri ve dosya depolama. Test edilebilir, güvenilir ve dokümante edilmiş sunucu katmanı.'
    },
    {
      title: 'AI ve Otomasyon',
      description:
        'LLM entegrasyonu, içerik ve iş akışı otomasyonu, webhook tabanlı pipeline yapıları. Manuel süreçlerin ölçülebilir dijital akışlara dönüştürülmesi.'
    }
  ],
  linkedinUrl: 'https://www.linkedin.com/in/orhan-kahraman/'
};
