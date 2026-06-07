// src/lib/mock/content/services/tr.ts
import type { ServiceContent } from '@/lib/content/services/types';

export const mockServicesTr: ServiceContent[] = [
  {
    slug: 'ai-governance',
    title: 'Yapay Zeka Yönetişimi',
    subtitle: 'ISO 42001: Riskten Değere Giden Yol Haritası',
    standard: 'ISO 42001',
    shortDescription:
      'ISO/IEC 42001 temelli yapay zeka yönetişim sistemi kuruyoruz. AI sistemlerinin risklerini, karar süreçlerini ve yaşam döngüsünü kurumsal kontrol altına alıyoruz.',
    intro: [
      'Yapay zeka yönetişiminde ilk adım, kurumunuzun bugünkü durumunu net biçimde görmektir. Sertifikasyon veya sistem kurulumuna geçmeden önce kullandığınız veya geliştirdiğiniz yapay zeka sistemlerini operasyonel, teknik ve yasal açıdan değerlendiriyoruz.',
      'Mevcut uygulamalarınızı ISO/IEC 42001 gereklilikleriyle karşılaştırıyor, gap analiziyle zayıf noktaları tespit ediyor ve ayrıntılı bir rapor sunuyoruz. Böylece yol haritasına başlamadan önce engelleri görür, zaman ve maliyet kaybını önlersiniz.'
    ],
    outcomes: [
      'ISO/IEC 42001 uyumlu AI yönetişim sistemi',
      'Gap analizi raporu ve stratejik yol haritası',
      'Risk mimarisi ve uygulanabilirlik bildirgesi',
      'Denetim hazırlığı ve sertifikasyon rehberliği',
      'Sürekli iyileştirme (CAPA) çerçevesi'
    ],
    sections: {
      layout: 'process',
      label: 'Süreç',
      title: 'Nasıl Çalışıyoruz'
    },
    steps: [
      {
        title: 'Hedef Belirleme',
        description:
          'Yapay zeka hedeflerinizi stratejik vizyonunuz ve mevcut politikalarınızla uyumlu hale getiriyoruz. Amaç ölçülebilir sonuçlar: somut değer, regülasyon hazırlığı ve sürdürülebilir sistemler.'
      },
      {
        title: 'Politika ve Prosedürler',
        description:
          'Yapay zeka sistemlerinizi geliştirmek ve kullanmak için gereken politika ve dokümantasyonu hazırlıyoruz. ISO/IEC 42001 yapay zeka politikanız; etik kullanım, veri güvenliği, şeffaflık ve adil karar almayı kapsar; kalite, bilgi güvenliği ve gizlilik politikalarınızla uyumlu çalışır.'
      },
      {
        title: 'Eğitim ve Farkındalık Faaliyetleri',
        description:
          'Yapay zeka yönetişimi teknoloji kadar insanla da ilgilidir. Çalışan ve yönetim ekiplerinizi yapay zeka politikaları, etik sorumluluklar, riskler ve rolleri konusunda eğitiyoruz. Yetkinlik açıklarını kapatıyor ve Trust by Design kültürünü kuruma yaygınlaştırıyoruz.'
      },
      {
        title: 'Risk Mimarisi ve Kontroller',
        description:
          'Algoritmik önyargı, veri zehirlenmesi ve şeffaflık eksikliği gibi yapay zekaya özgü riskleri tanımlıyor, YZ Sistem Etki Değerlendirmelerini yürütüyoruz. ISO/IEC 42001 Ek-A kapsamında Uygulanabilirlik Bildirgesi hazırlayıp kabul edilemez riski azaltacak kontrolleri devreye alıyoruz.'
      },
      {
        title: 'Performans Ölçümü',
        description:
          'Doğruluk, şeffaflık ve güvenlik gibi metriklerin ne sıklıkla, kim tarafından ölçüleceğini belirliyoruz. Yapay zeka sistemleri tanımlanan hedeflere ve etik kurallara göre izlenir; yönetime düzenli raporlama yapılır.'
      },
      {
        title: 'Sertifikasyon Denetimi',
        description:
          'Kurumunuzu akredite sertifikasyon denetimlerine hazırlıyoruz. Dış denetimler (BSI, TÜV vb.) öncesinde iç denetimler yapıyor, bulguları kapatıyor ve ISO 42001 sertifikasyon sürecinde yanınızda oluyoruz.'
      },
      {
        title: 'Sürekli İyileştirme',
        description:
          'Yapay zeka sistemleri yeni verilerle öğrenmeye devam eder. Uygunsuzluklarda kök neden analizi yapıyor, düzeltici faaliyetler (CAPA) planlıyor ve ölçeklendikçe yönetim sisteminizin etkin kalmasını sağlıyoruz.'
      }
    ],
    relatedSlugs: ['regulatory-compliance', 'human-oversight']
  },
  {
    slug: 'regulatory-compliance',
    title: 'Regülasyon ve Uyum',
    subtitle: "EU AI Act'e Hazır Yapay Zekâ",
    standard: 'EU AI Act',
    shortDescription:
      'AI sistemlerinizi EU AI Act ve uluslararası düzenlemeler kapsamında değerlendiriyor, risk sınıflandırması ve uyum süreçlerini yapılandırıyoruz.',
    intro: [
      'Yapay zeka sistemleri etik, güvenlik, şeffaflık ve regülasyon açısından yeni riskler doğurur. ISO 42001 bu riskleri yapılandırılmış ve denetlenebilir biçimde yönetmenize yardımcı olur. AI çözümlerinizi EU AI Act ve uluslararası standartlara uyumlu hale getiriyoruz: risk sınıflandırması, kontroller ve yönetişim uçtan uca.'
    ],
    outcomes: [
      'Doğru EU AI Act risk sınıflandırması',
      'Şeffaflık ve açıklanabilirlik (explainability) çerçevesi',
      'Veri yönetişimi ve insan gözetimi uyumu',
      'Sağlayıcı/kullanıcı sorumluluk haritası',
      'Denetim hazır uyum dokümantasyonu'
    ],
    sections: {
      layout: 'gaps',
      label: 'Uyum Boşlukları',
      title: 'EU AI Act Uyum Eksiklikleri Nelerdir?'
    },
    steps: [
      {
        title: 'Yanlış Risk Sınıflandırması ve Eksik Etki Değerlendirmeleri',
        highlight: "€35M veya küresel cironun %7'si",
        description:
          "Birçok kuruluş yapay zeka sistemlerini EU AI Act kapsamında yanlış sınıflandırıyor veya yüksek riskli kullanım senaryoları için zorunlu etki değerlendirmelerini atlıyor. Cezalar 35 milyon avroya veya küresel cironun %7'sine kadar çıkabilir. Sistemlerinizi uluslararası standartlara göre denetleyip doğru sınıflandırmanızı sağlıyoruz; yükümlülüklerinizi regülatör sormadan önce netleştirirsiniz."
      },
      {
        title: 'Şeffaflık ve Açıklanabilirlik (Explainability) Yetersizliği',
        description:
          'EU AI Act, kullanıcıların chatbot veya sentetik medya gibi yapay zeka ile etkileşime girdiğini bilmesini zorunlu kılar. Belirsiz model kararları güveni zedeler ve regülasyon riski yaratır. Karar süreçlerinizi belgeleyip açıklanabilir hale getirmenize yardımcı oluyoruz.'
      },
      {
        title: 'Veri Yönetişimi ve İnsan Gözetimi (Human Oversight) İhlalleri',
        description:
          'Eğitim verileri sorumlu biçimde yönetilmeli; otomatik kararlar etkili insan gözetimi altında olmalıdır. Veri kalitesi, önyargı kontrolü veya inceleme süreçlerindeki boşluklar hem yasal hem güvenlik riski doğurur. Veri yönetişimini güvence altına alıyor, regülatörlerin beklediği gözetim mimarisini entegre ediyoruz.'
      },
      {
        title: 'Sağlayıcı (Provider) ve Kullanıcı (Deployer) Sorumluluklarının İhmali',
        highlight: "€15M'ye varan dolaylı cezalar",
        description:
          "Yapay zeka değer zincirindeki roller net olmalıdır; özellikle üçüncü taraf model veya platform kullanımında. Tedarikçi due diligence eksikliği ve belgelenmemiş sorumluluklar 15 milyon avroya kadar ceza riski taşır. Sağlayıcı ve kullanıcı yükümlülüklerini haritalıyor, sözleşme ve kontrolleri ISO 42001 ile EU AI Act'e uyumlu hale getiriyoruz."
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
      'Yapay zeka eğitimi ve çıkarımında işlenen hassas veriler; sızıntılara ve veri zehirlenmesi gibi yapay zekaya özgü saldırılara karşı korunmalıdır.',
      'ISO/IEC 27001 (Bilgi Güvenliği) ve ISO/IEC 42001 (Yapay Zeka Yönetimi) gerekliliklerini entegre ederek verilerinizin gizliliğini ve bütünlüğünü uluslararası düzenlemelere uygun biçimde güvence altına alıyoruz.'
    ],
    outcomes: [
      'ISO 27001 + 42001 entegre güvenlik mimarisi',
      'AI penetrasyon testi ve tehdit analizi',
      'Güvenli model operasyonları (Trust by Design)',
      'Olay müdahale ve izleme mekanizmaları',
      'Sürekli güvenlik iyileştirme döngüsü'
    ],
    sections: {
      layout: 'topics',
      label: 'Derinlik',
      title: 'Güvenlik Konu Başlıkları'
    },
    steps: [
      {
        title: 'Güvenli Model Operasyonları',
        description:
          'Canlı ortamdaki yapay zeka modelleri prompt injection, kaçınma ve manipülasyon saldırılarına maruz kalır. Algoritmalarınızı yaşam döngüsü boyunca koruyor; çıktıların adil, şeffaf ve dış müdahaleye dayanıklı kalmasını sağlıyoruz.'
      },
      {
        title: 'Risk Mimarisi ve Tehdit Analizi',
        description:
          'Kuruma özel yapay zeka sızma testleri ve etki değerlendirmeleriyle güvenlik açıklarını saldırganlardan önce tespit ediyoruz. OWASP yönergeleri ve ISO/IEC 42001 çerçevesinde operasyonel, yasal ve itibar kaybını sınırlayan kontroller kuruyoruz.'
      },
      {
        title: 'İzleme ve Olay Yönetimi',
        description:
          'Yapay zeka modellerindeki anormallikler, performans sapmaları ve güvenlik ihlalleri hızlı tespit gerektirir. İzleme, olay müdahale planları ve gerektiğinde yasal bildirim süreçlerini birlikte tasarlıyoruz.'
      },
      {
        title: 'Sürekli Güvenlik İyileştirme',
        description:
          'Tehditler ve regülasyonlar sürekli değişir. İç denetimler, kök neden analizleri ve PUKÖ döngüsüyle güvenlik duruşunuzu güncel tutuyoruz; EU AI Act dahil gelişen risklere karşı hazırlıklı kalırsınız.'
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
      'Kritik yapay zeka ve veri sistemlerinin çalışmaya devam etmesini sağlıyor, kesinti risklerini görünür kılıyor ve sektörünüze uygun operasyonel dayanıklılık yapısı kuruyoruz. ISO 22301 çerçevesinde erişilebilirlik, iş sürekliliği ve kurtarma kabiliyetini güçlendiriyoruz.'
    ],
    outcomes: [
      'Kritik AI süreç envanteri ve risk analizi',
      'RTO/RPO hedefleri ve dayanıklılık metrikleri',
      'ISO 22301 uyumlu süreklilik politikaları',
      'Felaket kurtarma ve yedekli mimari',
      'Denetim hazır iş sürekliliği sistemi'
    ],
    sections: {
      layout: 'topics',
      label: 'Derinlik',
      title: 'Dayanıklılık Konu Başlıkları'
    },
    steps: [
      {
        title: 'Kritik Sistem ve Süreç Analizi',
        description:
          'Yapay zeka entegrasyonlarını, ML modellerini ve veri kaynaklarını analiz ederek kritik süreçleri ve tehditleri belirliyoruz. Sonuç, ISO 22301 ve ISO 42001 ile uyumlu, Trust by Design odaklı bir risk stratejisidir.'
      },
      {
        title: 'Dayanıklılık Hedeflerinin Belirlenmesi',
        description:
          'Operasyonlarınıza uygun RTO ve RPO hedefleri tanımlıyoruz. Kurtarma planları, kesinti anında müşteri deneyimini ve kritik iş fonksiyonlarını korur.'
      },
      {
        title: 'Süreklilik Politika ve Prosedürleri',
        description:
          'EU AI Act dahil regülasyonlara uyumlu iş sürekliliği ve kriz prosedürleri hazırlıyoruz. Kesinti anında yapay zeka modellerinin nasıl davranacağı önceden tanımlanır; güvenli degradasyon ve kurtarma adımları netleşir.'
      },
      {
        title: 'Eğitim ve Farkındalık Faaliyetleri',
        description:
          'Dayanıklılıkta insan faktörü belirleyicidir. Ekiplerinizi yapay zeka yönetişimi, veri güvenliği, olay müdahalesi ve insan gözetimi konusunda eğitiyoruz; otonom hataların kontrolsüz kalmasını önlüyoruz.'
      },
      {
        title: 'Dayanıklılık Mimarisi ve Kontroller',
        description:
          'Kesinti veya saldırı anında devreye giren yedekli mimari tasarlıyoruz. ISO 27001 ve ISO 42001 kontrollerini entegre ederek veri zehirlenmesi veya model sapması gibi tehditleri kaynağında engelliyoruz.'
      },
      {
        title: 'Performans Ölçümü ve Testler',
        description:
          'İş sürekliliği sadece kağıtta kalmaz. Yapay zeka sızma testleri ve felaket kurtarma tatbikatları performansı doğrular, zafiyetleri ortaya çıkarır ve dayanıklılık kapasitesini artırır.'
      },
      {
        title: 'Doğrulama ve Denetim Hazırlığı',
        description:
          'Yapay zeka süreçlerinizi bağımsız sertifikasyon denetimlerine hazırlıyor, belgeliyoruz. İç denetimlerle uyum boşluklarını dış denetim öncesinde kapatır, yasal ve finansal riski azaltırız.'
      },
      {
        title: 'Sürekli İyileştirme',
        description:
          'Süreklilik sistemlerinde PUKÖ döngüsü uygulayarak yapay zeka yönetişiminizi tehditler ve regülasyonlar değiştikçe güncel tutuyoruz.'
      }
    ],
    relatedSlugs: ['information-security', 'human-oversight']
  },
  {
    slug: 'human-oversight',
    title: 'Yapay Zekada İnsan Gözetimi',
    subtitle: 'Yapay Zekanın Gücü İnsan Gözetiminde',
    standard: 'Human Oversight',
    shortDescription: 'Tasarım yoluyla güven yaklaşımıyla insan gözetimini merkeze alan, hesap verebilir risk yönetim altyapısı inşa ediyoruz.',
    intro: [
      'İnsan gözetimi, yapay zeka sistemlerinin sorumlu, etik ve şeffaf kullanımını sağlar. ISO/IEC 42001 ve EU AI Act, hesap verebilirlik ve şeffaflık için bunu temel bir gereklilik olarak ele alır.'
    ],
    outcomes: [
      'AI System Impact Assessment tabanlı gözetim planı',
      'Override yetkili insan incelemeci yapısı',
      'Personel eğitimi ve yetkinlik programı',
      'Performans izleme ve geri bildirim mekanizması',
      'Tam otomasyon uygunluk değerlendirmesi'
    ],
    sections: {
      layout: 'topics',
      label: 'Derinlik',
      title: 'İnsan Gözetimi Konu Başlıkları'
    },
    steps: [
      {
        title: 'Etki Değerlendirmesi ile Gözetim İhtiyacının Belirlenmesi',
        description:
          'Gözetim hedefleri ve yaşam döngüsü aşamaları önceden planlanır. Gerekli düzey, Yapay Zeka Sistem Etki Değerlendirmesi sonuçlarına göre belirlenir. Sistem gerçek kişileri etkileyebiliyorsa gözetim süreçleri ve araçları açıkça tanımlanmalıdır.'
      },
      {
        title: 'Kararlara Müdahale Edebilen İnsan İncelemeciler Atanması',
        description:
          'Gözetim yapan kişiler çıktıları yalnızca izlememeli; gerektiğinde yapay zeka kararlarını geçersiz kılma (override) yetkisine sahip olmalıdır.'
      },
      {
        title: 'Personel Eğitimi ve Yetkinlik Sağlanması',
        description:
          'Gözetim personeli sistem talimatlarını, dokümantasyonu, gözetim hedeflerini ve kendi sorumluluklarını anlamalıdır. Eğitim ve yetkinlik kontrolleri tasarımın parçasıdır.'
      },
      {
        title: 'Performans İzleme ve Geri Bildirim Mekanizmaları',
        description:
          'Gözetim; sistem performansının ve çıktı doğruluğunun izlenmesini içerir. Gözetmenlerin paydaş etkisi veya performans sapması konusunda endişelerini iletebileceği net bir kanal kurulmalıdır.'
      },
      {
        title: 'Tam Otomasyonun Sorgulanması ve Uygunluk Kontrolü',
        description:
          'Her süreç tamamen otomasyona devredilmemelidir. Tam otomasyonun kullanım amacına ve sorumlu yapay zeka ilkelerine uygunluğu değerlendirilir; hesap verebilirlik veya şeffaflık gerektiren noktalarda manuel kontrol adımları korunur.'
      }
    ],
    relatedSlugs: ['ai-governance', 'regulatory-compliance']
  }
];
