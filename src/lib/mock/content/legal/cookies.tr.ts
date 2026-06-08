// src/lib/mock/content/legal/cookies.tr.ts
import type { LegalDocument } from '@/lib/content/legal/types';

export const cookiesTr: LegalDocument = {
  slug: 'cookies',
  title: 'Çerez Politikası',
  description: 'AION web sitesinde kullanılan çerezler ve benzeri teknolojiler.',
  lastUpdated: '2026-05-26',
  sections: [
    {
      id: 'intro',
      title: 'Genel',
      paragraphs: [
        'Bu politika, aion.tr alan adlı web sitemizde kullanılan çerezler ve benzeri teknolojiler hakkında bilgi verir.',
        'Sitemizde pazarlama, profil oluşturma veya randevu planlama amaçlı üçüncü taraf embed kullanılmaz.'
      ]
    },
    {
      id: 'first-party',
      title: 'Birinci Taraf Çerezler',
      paragraphs: ['Sitemizde aşağıdaki birinci taraf kullanım söz konusudur:'],
      list: [
        'Dil tercihi: oturum süresince locale yönlendirmesi (next-intl)',
        'Teknik oturum çerezleri: güvenlik ve yük dengeleme (barındırma sağlayıcısı)',
        'Pazarlama veya profil oluşturma amaçlı birinci taraf izleme çerezi kullanılmaz'
      ]
    },
    {
      id: 'third-party',
      title: 'Üçüncü Taraf Hizmetler',
      paragraphs: ['Barındırma altyapımız statik dosya dağıtımı için teknik çerezler kullanabilir.'],
      list: ['Barındırma/CDN sağlayıcısı: statik dosya dağıtımı (teknik çerezler)']
    },
    {
      id: 'fonts',
      title: 'Yazı Tipleri ve Analitik',
      paragraphs: [
        'Yazı tipleri self-hosted olarak next/font ile sunulur; Google Fonts CDN’i kullanılmaz.',
        'Google Analytics veya benzeri davranışsal analitik araçları kullanılmamaktadır.'
      ]
    },
    {
      id: 'control',
      title: 'Tercihlerinizi Yönetme',
      paragraphs: [
        'Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin devre dışı bırakılması site işlevlerini etkileyebilir.',
        'Doğrudan iletişim için e-posta, telefon veya LinkedIn kanallarımızı kullanabilirsiniz.'
      ]
    },
    {
      id: 'updates',
      title: 'Güncellemeler',
      paragraphs: [
        'Bu politika hizmetlerimiz veya yasal gereklilikler değiştikçe güncellenebilir. Güncelleme tarihi sayfa üstünde belirtilir.',
        'Sorularınız için Gizlilik Politikamıza ve iletişim kanallarımıza başvurabilirsiniz.'
      ]
    }
  ]
};
