// src/lib/content/legal/cookies.tr.ts
import type { LegalDocument } from '@/lib/content/legal/types';

export const cookiesTr: LegalDocument = {
  slug: 'cookies',
  title: 'Çerez Politikası',
  description: 'AION web sitesinde kullanılan çerezler ve benzeri teknolojiler.',
  lastUpdated: '2026-05-26',
  disclaimer: 'Bu metin bilgilendirme amaçlıdır. Üçüncü taraf hizmet sağlayıcıları kendi politikalarını güncelleyebilir.',
  sections: [
    {
      id: 'intro',
      title: 'Genel',
      paragraphs: [
        'Bu politika, aion.tr alan adlı web sitemizde kullanılan çerezler ve benzeri teknolojiler hakkında bilgi verir.',
        'Zorunlu olmayan çerezler yalnızca açık eyleminizle (ör. “Takvimi Aç” butonu) devreye giren üçüncü taraf hizmetler aracılığıyla yüklenir.'
      ]
    },
    {
      id: 'first-party',
      title: 'Birinci Taraf Çerezler',
      paragraphs: ['Sitemizde aşağıdaki birinci taraf kullanım söz konusudur:'],
      list: [
        'Dil tercihi — oturum süresince locale yönlendirmesi (next-intl)',
        'Teknik oturum çerezleri — güvenlik ve yük dengeleme (barındırma sağlayıcısı)',
        'Pazarlama veya profil oluşturma amaçlı birinci taraf izleme çerezi kullanılmaz'
      ]
    },
    {
      id: 'third-party',
      title: 'Üçüncü Taraf Hizmetler',
      paragraphs: [
        'Calendly: Görüşme planlama aracını yalnızca “Takvimi Aç” butonuna tıkladığınızda yükleriz. Calendly kendi çerezlerini ayarlayabilir.',
        'Calendly çerezleri ve politikası: calendly.com/privacy'
      ],
      list: ['calendly.com — randevu planlama (kullanıcı eylemi sonrası)', 'Barındırma/CDN sağlayıcısı — statik dosya dağıtımı (teknik çerezler)']
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
        'Calendly embed yüklenmeden önce üçüncü taraf çerez oluşmaz; embed’i kullanmamayı tercih edebilir ve doğrudan e-posta ile iletişime geçebilirsiniz.'
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
