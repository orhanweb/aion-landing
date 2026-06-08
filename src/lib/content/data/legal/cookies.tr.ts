// src/lib/content/data/legal/cookies.tr.ts
import type { LegalDocument } from '@/lib/content/legal/types';

export const cookiesTr: LegalDocument = {
  slug: 'cookies',
  title: 'Çerez Politikası',
  description: 'AION web sitesinde çerez kullanımına ilişkin kısa bilgilendirme.',
  lastUpdated: '2026-06-08',
  sections: [
    {
      id: 'what-we-use',
      title: 'Ne Kullanıyoruz?',
      paragraphs: [
        'Bu site yalnızca dil tercihinizi hatırlamak için işlevsel bir çerez kullanır. Dil seçiminiz ayrıca adres çubuğundaki URL üzerinden de belirlenir (/tr veya /en).',
        'Pazarlama, reklam, profil oluşturma veya davranışsal analiz amacıyla çerez kullanılmaz.'
      ]
    },
    {
      id: 'what-we-do-not-use',
      title: 'Ne Kullanmıyoruz?',
      paragraphs: ['Sitemizde aşağıdaki teknolojiler kullanılmaz:'],
      list: [
        'Google Analytics veya benzeri davranışsal analitik araçları',
        'Reklam veya hedefleme çerezleri',
        'Üçüncü taraf randevu, sohbet veya sosyal medya embed’leri',
        'WhatsApp site içi entegrasyonu (WhatsApp yalnızca dış bağlantı olarak sunulur)'
      ]
    },
    {
      id: 'questions',
      title: 'Sorularınız',
      paragraphs: [
        'Çerezleri tarayıcı ayarlarınızdan silebilir veya engelleyebilirsiniz. Dil çerezini devre dışı bırakmak, bir sonraki ziyaretinizde dil tercihinin yeniden belirlenmesine yol açabilir; site içeriğine erişiminiz etkilenmez.',
        'Sorularınız için iletişim sayfamızdaki e-posta veya WhatsApp kanallarını kullanabilirsiniz. Kişisel verilerin işlenmesine ilişkin ayrıntılar için Gizlilik Politikamıza bakın.'
      ]
    }
  ]
};
