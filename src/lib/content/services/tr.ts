// src/lib/content/services/tr.ts
import type { Service } from '@/lib/content/services/types';

export const servicesTr: Service[] = [
  {
    slug: 'ai-governance',
    title: 'Yapay Zeka Yönetişimi',
    subtitle: 'ISO 42001: Riskten Değere Giden Yol Haritası',
    standard: 'ISO 42001',
    shortDescription:
      'ISO/IEC 42001 temelli yapay zeka yönetişim sistemi kuruyoruz. AI sistemlerinin risklerini, karar süreçlerini ve yaşam döngüsünü kurumsal kontrol altına alıyoruz.',
    intro: [
      'Yapay zekâ yönetişim sürecinizin ilk adımı, kurumunuzun mevcut durumunun net bir fotoğrafını çekmektir. Resmî belgelendirme öncesinde kullanılan veya geliştirilen yapay zekâ sistemlerini operasyonel, teknik ve yasal regülasyon riskleri açısından değerlendiriyoruz.',
      'Mevcut uygulamalarınız ile ISO/IEC 42001 gereklilikleri arasındaki boşlukları (Gap Analizi) karşılaştırıyor, zayıf noktaları tespit ederek detaylı bir rapor sunuyoruz. Böylece sertifikasyon yolculuğunuzdaki engelleri en başından belirleyip zaman ve maliyet kaybını önlüyoruz.'
    ],
    outcomes: [
      'ISO/IEC 42001 uyumlu AI yönetişim sistemi',
      'Gap analizi raporu ve stratejik yol haritası',
      'Risk mimarisi ve uygulanabilirlik bildirgesi',
      'Denetim hazırlığı ve sertifikasyon rehberliği',
      'Sürekli iyileştirme (CAPA) çerçevesi'
    ],
    steps: [
      {
        title: 'Hedef Belirleme',
        description:
          'Kuruluşunuzun stratejik vizyonuyla uyumlu, ölçülebilir ve izlenebilir yapay zekâ hedefleri belirliyoruz. Regülasyonlara hazır, sürdürülebilir sonuçlar için başlangıç noktanızı tasarlıyoruz.'
      },
      {
        title: 'Politika ve Prosedürler',
        description:
          'Etik kullanım, veri güvenliği, şeffaflık ve adil karar alma ilkelerini içeren ISO/IEC 42001 YZ politikası ve dokümantasyon altyapısı kuruyoruz.'
      },
      {
        title: 'Eğitim ve Farkındalık Faaliyetleri',
        description:
          'Çalışanlarınızın ve yönetim ekibinizin YZ politikaları, etik sorumluluklar ve rolleri konusundaki farkındalığını artırarak Trust by Design kültürünü inşa ediyoruz.'
      },
      {
        title: 'Risk Mimarisi ve Kontroller',
        description:
          'Algoritmik önyargı, veri zehirlenmesi ve şeffaflık eksikliği gibi riskleri tanımlıyor; AI System Impact Assessment ve Uygulanabilirlik Bildirgesi hazırlıyoruz.'
      },
      {
        title: 'Performans Ölçümü',
        description:
          'Doğruluk, şeffaflık ve güvenlik metrikleriyle YZ sistemlerinizin hedeflere sadakatini sürekli izliyor ve yönetime şeffaf raporlamalar sunuyoruz.'
      },
      {
        title: 'Sertifikasyon Denetimi',
        description:
          'BSI, TÜV vb. dış denetimler öncesinde iç tetkikler gerçekleştiriyor, bulguları gideriyor ve ISO 42001 sertifikasyon sürecinde yanınızda yer alıyoruz.'
      },
      {
        title: 'Sürekli İyileştirme',
        description:
          'Kök neden analizleri ve düzeltici faaliyetler (CAPA) ile YZ yönetim sisteminizin uygunluğunu ve dayanıklılığını sürekli iyileştiriyoruz.'
      }
    ],
    relatedSlugs: ['regulatory-compliance', 'human-oversight']
  },
  {
    slug: 'regulatory-compliance',
    title: 'Regülasyon ve Uyum',
    subtitle: "EU AI Act'e Hazır Yapay Zeka",
    standard: 'EU AI Act',
    shortDescription:
      'AI sistemlerinizi EU AI Act ve uluslararası düzenlemeler kapsamında değerlendiriyor, risk sınıflandırması ve uyum süreçlerini yapılandırıyoruz.',
    intro: [
      'Yapay zekâ sistemleri etik, güvenlik, şeffaflık ve regülasyon açısından yeni riskler doğurur. AI çözümlerinizi EU AI Act ve uluslararası standartlara uyumlu hale getiriyoruz.',
      'Risk sınıflandırması, kontrol mekanizmaları ve yönetişim süreçlerini uçtan uca yapılandırarak ağır idari para cezaları ve yasal riskleri minimize ediyoruz.'
    ],
    outcomes: [
      'Doğru EU AI Act risk sınıflandırması',
      'Şeffaflık ve açıklanabilirlik (explainability) çerçevesi',
      'Veri yönetişimi ve insan gözetimi uyumu',
      'Sağlayıcı/kullanıcı sorumluluk haritası',
      'Denetim hazır uyum dokümantasyonu'
    ],
    steps: [
      {
        title: 'Risk Sınıflandırması ve Etki Değerlendirmesi',
        description:
          'Sistemlerinizin EU AI Act kapsamındaki risk kategorisini belirliyor, yüksek riskli sistemler için zorunlu etki değerlendirmelerini yapılandırıyoruz.'
      },
      {
        title: 'Şeffaflık ve Açıklanabilirlik',
        description:
          'Chatbot, deepfake ve otomatik karar süreçlerinde zorunlu şeffaflık gerekliliklerini karşılayan açıklanabilir AI mimarisi tasarlıyoruz.'
      },
      {
        title: 'Veri Yönetişimi ve İnsan Gözetimi',
        description:
          'Eğitim verilerindeki önyargı risklerini yönetiyor, otomatik kararlara karşı etkili insan gözetimi mekanizmalarını entegre ediyoruz.'
      },
      {
        title: 'Değer Zinciri Sorumlulukları',
        description:
          'Sağlayıcı (Provider), kullanıcı (Deployer) ve ithalatçı rollerinizi netleştiriyor, tedarikçi sözleşmelerini regülasyonlara uyumlu hale getiriyoruz.'
      },
      {
        title: 'Kontrol Mekanizmaları ve Dokümantasyon',
        description: 'ISO 42001 ve EU AI Act gerekliliklerine uygun teknik ve idari kontrolleri tanımlayıp dokümante ediyoruz.'
      },
      {
        title: 'İç Denetim ve Uyum Testleri',
        description: 'Regülasyon uyum boşluklarını tespit eden iç denetimler uyguluyor, dış denetim öncesi hazırlık sağlıyoruz.'
      },
      {
        title: 'Sürekli Regülasyon Takibi',
        description: 'EU AI Act ve uluslararası düzenlemelerdeki güncellemeleri izleyerek uyum çerçevenizi sürekli güncel tutuyoruz.'
      }
    ],
    relatedSlugs: ['ai-governance', 'information-security']
  },
  {
    slug: 'information-security',
    title: 'Bilgi Güvenliği',
    subtitle: 'Veri Güvenliği İnsanlarla Sağlanır',
    standard: 'ISO 27001',
    shortDescription:
      'ISO 27001 çerçevesinde veri güvenliği, erişim kontrolü ve güvenli AI operasyonları için bilgi güvenliği mimarisi oluşturuyoruz.',
    intro: [
      'Yapay zekâ modellerinizin eğitimi ve çalışması sırasında işlenen hassas verileri, veri sızıntılarına ve model zehirlenmesi (data poisoning) saldırılarına karşı uçtan uca koruyoruz.',
      'ISO/IEC 27001 ve ISO/IEC 42001 gerekliliklerini entegre ederek kurumsal verilerinizin gizliliğini ve bütünlüğünü uluslararası düzenlemelere uyumlu şekilde güvence altına alıyoruz.'
    ],
    outcomes: [
      'ISO 27001 + 42001 entegre güvenlik mimarisi',
      'AI penetrasyon testi ve tehdit analizi',
      'Güvenli model operasyonları (Trust by Design)',
      'Olay müdahale ve izleme mekanizmaları',
      'Sürekli güvenlik iyileştirme döngüsü'
    ],
    steps: [
      {
        title: 'Güvenli Model Operasyonları',
        description:
          'Prompt injection, model evasion ve manipülasyon saldırılarına karşı modellerinizin yaşam döngüsü boyunca korunmasını sağlıyoruz.'
      },
      {
        title: 'Risk Mimarisi ve Tehdit Analizi',
        description:
          'AI penetrasyon testleri ve sistem etki değerlendirmeleriyle güvenlik açıklarını tespit ediyor; OWASP ve ISO 42001 çerçevesinde risk mimarisi kuruyoruz.'
      },
      {
        title: 'İzleme ve Olay Yönetimi',
        description: 'Model drift, anomaliler ve siber sapmalar için sürekli izleme mekanizmaları kuruyor, olay müdahale planlarını devreye alıyoruz.'
      },
      {
        title: 'Erişim Kontrolü ve Veri Yaşam Döngüsü',
        description: 'Hassas verilerin toplanmasından imhasına kadar erişim kontrolü, şifreleme ve veri sınıflandırması politikalarını uyguluyoruz.'
      },
      {
        title: 'ISMS Entegrasyonu',
        description:
          'ISO 27001 bilgi güvenliği yönetim sistemini AI operasyonlarınızla entegre ederek kurumsal güvenlik çerçevenizi bütünleştiriyoruz.'
      },
      {
        title: 'Güvenlik Performans Ölçümü',
        description: 'Güvenlik metrikleri, iç denetimler ve uyum testleriyle altyapınızın etkinliğini düzenli olarak ölçüyoruz.'
      },
      {
        title: 'Sürekli Güvenlik İyileştirme',
        description: 'PUKÖ döngüsü ile güvenlik altyapınızı güncel tutuyor, EU AI Act ve yeni tehditlere karşı dirençli kalmanızı sağlıyoruz.'
      }
    ],
    relatedSlugs: ['ai-governance', 'operational-resilience']
  },
  {
    slug: 'operational-resilience',
    title: 'Operasyonel Dayanıklılık',
    subtitle: 'Sürekliliğe Tasarlanmış AI',
    standard: 'ISO 22301',
    shortDescription: 'ISO 22301 iş sürekliliği yaklaşımıyla kritik AI ve veri sistemlerinin kesintilerde güvenle çalışmasını sağlıyoruz.',
    intro: [
      'Kritik yapay zekâ ve veri sistemlerinin sürekliliğini güvence altına alıyor, kesinti risklerini görünür kılıyoruz. ISO 22301 çerçevesinde yüksek erişilebilirlik, iş sürekliliği ve kurtarma kabiliyetiyle sistemlerinizi güçlendiriyoruz.',
      'Her organizasyona özel operasyonel dayanıklılık yaklaşımıyla AI operasyonlarınızı sürdürülebilir, dirençli ve kontrol edilebilir bir yapıya dönüştürüyoruz.'
    ],
    outcomes: [
      'Kritik AI süreç envanteri ve risk analizi',
      'RTO/RPO hedefleri ve dayanıklılık metrikleri',
      'ISO 22301 uyumlu süreklilik politikaları',
      'Felaket kurtarma ve yedekli mimari',
      'Denetim hazır iş sürekliliği sistemi'
    ],
    steps: [
      {
        title: 'Kritik Sistem ve Süreç Analizi',
        description:
          'AI entegrasyonlarını, ML modellerini ve veri kaynaklarını analiz ederek en kritik süreçleri belirliyor, proaktif risk stratejisi oluşturuyoruz.'
      },
      {
        title: 'Dayanıklılık Hedeflerinin Belirlenmesi',
        description: 'RTO/RPO metriklerini kurumsal hedeflerinize göre belirliyor, kriz anındaki toparlanma hızını optimize ediyoruz.'
      },
      {
        title: 'Süreklilik Politika ve Prosedürleri',
        description: 'EU AI Act uyumlu iş sürekliliği politikaları ve kriz yönetimi prosedürleri hazırlıyoruz.'
      },
      {
        title: 'Eğitim ve Farkındalık Faaliyetleri',
        description: 'Ekiplerinize AI yönetişimi ve veri güvenliği odaklı farkındalık eğitimleri sunuyor, kriz müdahale süreçlerine hazırlıyoruz.'
      },
      {
        title: 'Dayanıklılık Mimarisi ve Kontroller',
        description: 'Kesinti veya siber saldırı durumunda devreye giren yedekli mimari kuruyor, ISO 27001 ve 42001 kontrollerini entegre ediyoruz.'
      },
      {
        title: 'Performans Ölçümü ve Testler',
        description: 'AI penetrasyon testleri ve felaket kurtarma senaryolarıyla iş sürekliliği yapısını düzenli olarak sınıyoruz.'
      },
      {
        title: 'Doğrulama ve Sürekli İyileştirme',
        description: 'İç tetkikler ve gap analizi ile denetim hazırlığı sağlıyor, PUKÖ döngüsü ile sistemlerinizi güncel tutuyoruz.'
      }
    ],
    relatedSlugs: ['information-security', 'human-oversight']
  },
  {
    slug: 'human-oversight',
    title: 'Yapay Zekada İnsan Gözetimi',
    subtitle: 'YZ Gücü İnsan Gözetiminde',
    standard: 'Human Oversight',
    shortDescription: 'Tasarım yoluyla güven yaklaşımıyla insan gözetimini merkeze alan, hesap verebilir risk yönetim altyapısı inşa ediyoruz.',
    intro: [
      'İnsan gözetimi (human oversight), yapay zekâ sistemlerinin sorumlu, etik ve şeffaf kullanımını güvence altına alır. ISO/IEC 42001 ve EU AI Act, hesap verebilirlik için insan gözetimini temel şart olarak konumlandırır.',
      'Sistemlerinize regülasyonların talep ettiği insan denetim mimarisini entegre ederek otonom hatalardan arınmış, güvenilir AI operasyonları kuruyoruz.'
    ],
    outcomes: [
      'AI System Impact Assessment tabanlı gözetim planı',
      'Override yetkili insan incelemeci yapısı',
      'Personel eğitimi ve yetkinlik programı',
      'Performans izleme ve geri bildirim mekanizması',
      'Tam otomasyon uygunluk değerlendirmesi'
    ],
    steps: [
      {
        title: 'Gözetim İhtiyacının Belirlenmesi',
        description: 'AI System Impact Assessment sonuçlarına göre hangi yaşam döngüsü aşamalarında insan gözetimi gerektiğini planlıyoruz.'
      },
      {
        title: 'İnsan İncelemeci Ataması',
        description: 'Gözetmenlere yapay zekâ kararlarını geçersiz kılma (override) yetkisi veren rol ve sorumluluk yapısı kuruyoruz.'
      },
      {
        title: 'Personel Eğitimi ve Yetkinlik',
        description: 'Gözetim personelini sistem talimatları, dokümantasyon ve spesifik görevler konusunda eğitiyoruz.'
      },
      {
        title: 'Performans İzleme ve Geri Bildirim',
        description: 'Sistem çıktılarının doğruluğu ve performans sapmaları için şeffaf raporlama mekanizmaları kuruyoruz.'
      },
      {
        title: 'Tam Otomasyon Değerlendirmesi',
        description: 'Her sürecin tamamen otomatikleştirilmesinin uygunluğunu değerlendiriyor, gerektiğinde manuel kontrol adımlarını koruyoruz.'
      },
      {
        title: 'Yaşam Döngüsü Entegrasyonu',
        description: 'İnsan gözetimini model geliştirmeden canlı operasyona kadar tüm AI yaşam döngüsüne entegre ediyoruz.'
      },
      {
        title: 'Sürekli Gözetim Etkinliği',
        description: 'Gözetim mekanizmalarının etkinliğini düzenli olarak ölçüyor, iyileştirme döngüsüyle güncel tutuyoruz.'
      }
    ],
    relatedSlugs: ['ai-governance', 'regulatory-compliance']
  }
];
