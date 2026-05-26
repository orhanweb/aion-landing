// src/lib/content/legal/privacy.tr.ts
import type { LegalDocument } from '@/lib/content/legal/types';

export const privacyTr: LegalDocument = {
  slug: 'privacy',
  title: 'KVKK Aydınlatma Metni',
  description: 'AION kişisel verilerin işlenmesine ilişkin aydınlatma metni.',
  lastUpdated: '2026-05-26',
  disclaimer: 'Bu metin bilgilendirme amaçlıdır. Yayınlanmadan önce hukuk danışmanınız tarafından gözden geçirilmelidir.',
  sections: [
    {
      id: 'controller',
      title: 'Veri Sorumlusu',
      paragraphs: [
        '6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu AION (“AION”, “biz”) olarak kişisel verilerinizi aşağıda açıklanan çerçevede işlemekteyiz.',
        'İletişim: web sitemizdeki güncel e-posta ve adres bilgileri üzerinden bize ulaşabilirsiniz.'
      ]
    },
    {
      id: 'data',
      title: 'İşlenen Kişisel Veriler',
      paragraphs: ['Aşağıdaki kişisel veriler, hizmetlerimiz kapsamında toplanabilir:'],
      list: [
        'Kimlik ve iletişim bilgileri (ad soyad, unvan, kurumsal e-posta, telefon)',
        'Kurumsal bilgiler (şirket adı, sektör, çalışan sayısı aralığı)',
        'Değerlendirme formu yanıtları (ISO/EU AI Act uyum soruları, serbest metin açıklamalar)',
        'Teknik veriler (IP adresi, tarayıcı türü — sunucu günlükleri aracılığıyla)',
        'Pazarlama tercihi (isteğe bağlı bilgilendirme onayı)'
      ]
    },
    {
      id: 'purposes',
      title: 'İşleme Amaçları',
      paragraphs: ['Kişisel verileriniz aşağıdaki amaçlarla işlenir:'],
      list: [
        'Uyum değerlendirme talebinizi almak ve yanıtlamak',
        'Danışmanlık hizmeti teklif ve görüşme süreçlerini yürütmek',
        'Sözleşme öncesi iletişim kurmak',
        'Yasal yükümlülüklerimizi yerine getirmek',
        'Açık rızanız halinde pazarlama ve bilgilendirme iletişimi göndermek',
        'Web sitesi güvenliği ve hizmet kalitesini sağlamak'
      ]
    },
    {
      id: 'legal-basis',
      title: 'Hukuki Sebepler',
      paragraphs: ['KVKK m.5 ve m.6 kapsamında kişisel verileriniz şu hukuki sebeplere dayanılarak işlenir:'],
      list: [
        'Bir sözleşmenin kurulması veya ifası için gerekli olması',
        'Veri sorumlusunun meşru menfaati (lead yönetimi, güvenlik)',
        'Kanunlarda açıkça öngörülmesi',
        'Açık rıza (pazarlama iletişimi gibi isteğe bağlı işlemler)'
      ]
    },
    {
      id: 'transfer',
      title: 'Aktarım',
      paragraphs: [
        'Verileriniz yalnızca hizmet sunumu için gerekli olduğu ölçüde, sözleşmesel gizlilik yükümlülükleri altındaki hizmet sağlayıcılarına (ör. barındırma, e-posta, takvim planlama) aktarılabilir.',
        'Yurt dışına aktarım söz konusu olduğunda KVKK m.9 hükümlerine uygun önlemler alınır.'
      ]
    },
    {
      id: 'retention',
      title: 'Saklama Süresi',
      paragraphs: [
        'Değerlendirme formu verileri, talebin sonuçlandırılmasından itibaren en fazla 24 ay saklanır; yasal zorunluluk veya devam eden müşteri ilişkisi varsa bu süre uzatılabilir.',
        'Sunucu günlükleri bilgi güvenliği amacıyla sınırlı süre tutulur.'
      ]
    },
    {
      id: 'rights',
      title: 'Haklarınız',
      paragraphs: ['KVKK m.11 kapsamında aşağıdaki haklara sahipsiniz:'],
      list: [
        'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
        'İşlenmişse buna ilişkin bilgi talep etme',
        'Amacına uygun kullanılıp kullanılmadığını öğrenme',
        'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
        'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
        'KVKK m.7 kapsamında silinmesini veya yok edilmesini isteme',
        'Otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme',
        'Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde tazminat talep etme'
      ]
    },
    {
      id: 'application',
      title: 'Başvuru',
      paragraphs: [
        'Haklarınızı kullanmak için web sitemizdeki iletişim e-posta adresine yazılı başvuruda bulunabilirsiniz. Başvurular en geç 30 gün içinde sonuçlandırılır.',
        'Kişisel Verileri Koruma Kurulu’na şikâyet hakkınız saklıdır.'
      ]
    }
  ]
};
