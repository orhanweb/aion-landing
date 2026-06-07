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
      'Yapay zekâ yönetişim sürecinizin ilk ve en kritik adımı, kurumunuzun mevcut durumunun net bir fotoğrafını çekmektir. Resmî belgelendirme sürecine ve sistem kurulumuna başlamadan önce kuruluşunuzda hâlihazırda kullanılan veya geliştirilen yapay zekâ sistemlerini; operasyonel, teknik ve yasal regülasyon riskleri açısından değerlendiriyoruz.',
      'Mevcut uygulamalarınız ile ISO/IEC 42001 standardının gereklilikleri arasındaki farkları (Boşluk Analizi / Gap Analizi) karşılaştırıyor, iyileştirmeye açık zayıf noktalarınızı tespit ederek size detaylı bir rapor sunuyoruz. Yaptığımız bu mevcut durum analizi ve ön değerlendirme sayesinde sertifikasyon yolculuğunuzun önündeki engelleri ve riskleri henüz en başındayken belirliyor; böylece zaman ve maliyet kayıplarını önleyerek kurumunuza en uygun, stratejik ve hedefe yönelik yol haritasını çıkarıyoruz.'
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
          'Yapay zekâ yolculuğunuzda rotanızı netleştiriyoruz. AION olarak kuruluşunuzun stratejik vizyonuyla uyumlu, ölçülebilir, izlenebilir ve kurumsal YZ politikalarınızla entegre yapay zekâ hedefleri belirliyoruz. Teknolojiyi sadece kullanmak için değil; kurumunuza somut değer katacak, regülasyonlara hazır ve sürdürülebilir sonuçlar elde etmeniz için başlangıç noktanızı tasarlıyoruz.'
      },
      {
        title: 'Politika ve Prosedürler',
        description:
          'Yapay zekâ sistemlerinizin geliştirilmesi ve kullanımı için kurumsal anayasanızı yazıyoruz. Etik kullanım, veri güvenliği, şeffaflık ve adil karar alma ilkelerini barındıran; organizasyonunuzun diğer politikalarıyla (kalite, bilgi güvenliği, gizlilik) konuşan sağlam bir ISO/IEC 42001 YZ politikası ve dokümantasyon altyapısı kuruyoruz.'
      },
      {
        title: 'Eğitim ve Farkındalık Faaliyetleri',
        description:
          'Yapay zekâ dönüşümü teknolojiyle değil, insanla başlar. Çalışanlarınızın ve yönetim ekibinizin YZ politikaları, etik sorumluluklar, potansiyel riskler ve kendi rolleri konusundaki farkındalıklarını artırıyoruz. Yetkinlik açıklarını tespit edip gerekli eğitimleri planlayarak kurumunuzun tamamında "Tasarım Yoluyla Güven" (Trust by Design) kültürünü inşa ediyoruz.'
      },
      {
        title: 'Risk Mimarisi ve Kontroller',
        description:
          'Yapay zekânın getirdiği algoritmik önyargı, veri zehirlenmesi ve şeffaflık eksikliği gibi benzersiz riskleri sistematik olarak tanımlıyor ve YZ Sistem Etki Değerlendirmelerini (AI System Impact Assessment) gerçekleştiriyoruz. ISO/IEC 42001 Ek-A gereklilikleri doğrultusunda kuruma özel bir "Uygulanabilirlik Bildirgesi" hazırlayarak kabul edilemez riskleri en aza indirecek teknik, yasal ve idari kontrolleri hayata geçiriyoruz.'
      },
      {
        title: 'Performans Ölçümü',
        description:
          'Kurduğumuz sistemin ve yapay zekâ modellerinizin sadece kâğıt üzerinde kalmamasını, sahada gerçekten işe yaramasını sağlıyoruz. Doğruluk, şeffaflık ve güvenlik gibi metriklerle neyin, ne zaman ve nasıl ölçüleceğini belirliyoruz. Böylece YZ sistemlerinizin belirlenen hedeflere ve etik kurallara ne kadar sadık kaldığını sürekli izliyor ve yönetime şeffaf raporlamalar sunuyoruz.'
      },
      {
        title: 'Sertifikasyon Denetimi',
        description:
          'Kurumunuzu uluslararası akredite belgelendirme denetimlerine uçtan uca hazırlıyoruz. Resmî dış denetimler (BSI, TÜV vb.) öncesinde uzman kadromuzla planlı "iç tetkikler" gerçekleştiriyor, olası bulguları ve zayıf noktaları tespit ederek eksikleri hızla gideriyoruz. Dış denetim ve belgelendirme sürecinde yanınızda yer alarak ISO 42001 sertifikasını başarıyla almanıza rehberlik ediyoruz.'
      },
      {
        title: 'Sürekli İyileştirme',
        description:
          'Yapay zekâ sistemleri statik yazılımlar değildir; sürekli yeni verilerle öğrenir ve değişirler. Bu dinamik yapıyı kontrol altında tutmak için meydana gelebilecek uygunsuzluklarda kök neden analizleri yapıyor ve düzeltici faaliyetler (CAPA) planlıyoruz. Kurumunuzun YZ yönetim sisteminin uygunluğunu, etkinliğini ve dayanıklılığını sürekli iyileştirerek inovasyon gücünüzü güvenle ölçeklendirmenizi sağlıyoruz.'
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
      'Yapay zekâ sistemleri; etik, güvenlik, şeffaflık ve regülasyon açısından yeni riskler doğurur. ISO 42001, bu riskleri kontrol altına alarak kurumlara güvenilir, sürdürülebilir ve denetlenebilir AI yönetimi sağlar. AI çözümlerinizi EU AI Act ve uluslararası standartlara uyumlu ve sorumlu hale getiriyor; risk sınıflandırması, kontrol mekanizmaları ve yönetişim süreçlerini uçtan uca yapılandırıyoruz.'
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
          "Birçok kuruluş, kullandığı yapay zekâ sistemlerinin EU AI Act kapsamındaki risk kategorisini doğru belirleyememekte ve yüksek riskli sistemler için zorunlu olan etki değerlendirmelerini atlamaktadır. Bu eksiklik, şirketleri 35 milyon Euro'ya veya küresel cironun %7'sine varan ağır idari para cezalarıyla karşı karşıya bırakabilmektedir. AION olarak sistemlerinizi uluslararası standartlarda denetleyip doğru sınıflandırarak bu ağır finansal ve yasal riskleri tamamen ortadan kaldırıyoruz. Stratejik risk değerlendirme yaklaşımımız sayesinde yasal denetimlerde kurumsal otoritenizi ve güvenilirliğinizi şüpheye yer bırakmayacak şekilde kanıtlıyorsunuz."
      },
      {
        title: 'Şeffaflık ve Açıklanabilirlik (Explainability) Yetersizliği',
        description:
          'Avrupa Birliği Yapay Zekâ Yasası, kullanıcıların bir yapay zekâ (örneğin chatbotlar veya deepfake içerikler) ile etkileşime girdiğini açıkça bilmesini zorunlu bir şeffaflık ilkesi olarak şart koşar. Modellerin ürettiği kararların "kara kutu" mantığıyla belirsiz olması, yalnızca müşteri güvenini zedelemekle kalmaz, regülatörler nezdinde de doğrudan ihlal sayılır. Sistemlerinizin karar alma süreçlerini açıklanabilir kılmamak, marka itibarınıza zarar vererek pazar payınızı doğrudan etkiler. AION ile yapay zekâ mimarinizi şeffaflaştırarak arama motorlarının ve yapay zekâ asistanlarının sizi güvenilir bir "otorite" olarak referans almasını sağlıyoruz.'
      },
      {
        title: 'Veri Yönetişimi ve İnsan Gözetimi (Human Oversight) İhlalleri',
        description:
          'Yasanın en katı kurallarından biri, modellerin eğitiminde kullanılan verilerin önyargılardan (bias) arındırılmış olması ve otomatik kararlara karşı mutlaka etkili bir "insan gözetimi" kurulmasıdır. Veri zehirlenmesine açık, ayrımcılık barındıran ve insan denetiminden tamamen yoksun otonom süreçler, büyük bir operasyonel ve hukuki uyum ihlalidir. Bu alandaki eksiklikler, kurumunuzu sadece yasal cezalara değil, aynı zamanda siber güvenlik zafiyetlerine karşı da savunmasız bırakır. AION uzmanlığı, veri kalitenizi güvence altına alarak sistemlerinize regülasyonların talep ettiği insan denetim mimarisini kusursuzca entegre eder.'
      },
      {
        title: 'Sağlayıcı (Provider) ve Kullanıcı (Deployer) Sorumluluklarının İhmali',
        highlight: "€15M'ye varan dolaylı cezalar",
        description:
          "İşletmelerin yapay zekâ değer zincirindeki rollerini netleştirmemesi, üçüncü taraf hizmetlerdeki sözleşmesel ve yasal sorumlulukların ihlaline yol açar. Özellikle dışarıdan tedarik edilen yapay zekâ hizmetlerinin risk analizlerinin yapılmaması, şirketinizi 15 milyon Euro'ya varan cezaların dolaylı hedefi hâline getiren kritik bir uyum boşluğudur. Tedarik zincirindeki bu denetimsizlik, güvenilir bir iş ortağı olma statünüzü kaybetmenize ve küresel pazarlara girişinizin engellenmesine neden olabilir. AION ile tüm tedarikçi ilişkilerinizi uçtan uca denetleyerek sorumluluk dağılımınızı uluslararası yasalara ve ISO 42001 gerekliliklerine tam uyumlu hâle getiriyoruz."
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
      'Yapay zekâ sistemlerinde veri güvenliği nasıl sağlanır? Yapay zekâ modellerinizin eğitimi ve çalışması sırasında işlenen hassas verileri, veri sızıntılarına ve yapay zekâya özgü model zehirlenmesi (data poisoning) saldırılarına karşı uçtan uca koruyoruz.',
      'ISO/IEC 27001 (Bilgi Güvenliği) ve ISO/IEC 42001 (Yapay Zekâ Yönetimi) standartlarının gerekliliklerini entegre ederek kurumsal verilerinizin gizliliğini ve bütünlüğünü uluslararası yasal düzenlemelere tam uyumlu bir şekilde güvence altına alıyoruz.'
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
          'Güvenli yapay zekâ model operasyonları, algoritmalarınızın canlı ortamda prompt injection (istem enjeksiyonu), modelden kaçınma (model evasion) ve manipülasyon gibi yeni nesil siber saldırılara karşı kesintisiz korunmasını ifade eder. AION uzmanlığı ile modellerinizin yaşam döngüsü boyunca dış müdahalelere kapalı, adil ve şeffaf sonuçlar üretmesini sağlıyor; "Tasarım Yoluyla Güven" (Trust by Design) ilkesiyle güvenilir yapay zekâ altyapıları inşa ediyoruz.'
      },
      {
        title: 'Risk Mimarisi ve Tehdit Analizi',
        description:
          'Kurumunuza özel yapay zekâ sızma testleri (AI Penetration Testing) ve YZ sistemi etki değerlendirmeleri uygulayarak altyapınızdaki "kara kutu" güvenlik açıklarını siber saldırganlardan önce tespit ediyoruz. OWASP yönergeleri ve ISO/IEC 42001 çerçevesinde kurumunuza özel bir risk mimarisi oluşturarak operasyonel, yasal ve itibar kayıplarını önleyecek proaktif savunma ile kontrol mekanizmaları geliştiriyoruz.'
      },
      {
        title: 'İzleme ve Olay Yönetimi',
        description:
          'Yapay zekâ modellerindeki anormalliklerin, performans düşüşlerinin (drift) ve siber güvenlik sapmalarının anında tespit edilmesi, operasyonel dayanıklılık ve iş sürekliliği için hayati önem taşır. AION olarak yapay zekâ altyapınızı sürekli denetleyen izleme mekanizmaları kuruyor; olası bir siber olayda hızlı ve etkili olay müdahale (incident response) planlarını devreye sokarak yasal bildirim süreçlerini ve sistem kurtarmayı profesyonelce yönetiyoruz.'
      },
      {
        title: 'Sürekli Güvenlik İyileştirme',
        description:
          'Yapay zekâ teknolojileri kendi kendine öğrenerek değişirken ve siber tehdit manzarası sürekli evrilirken güvenlik altyapınızın statik kalması düşünülemez. Düzenli iç denetimler, kök neden analizleri ve performans ölçümleriyle (PUKÖ döngüsü) sisteminizi sürekli güncelliyor; EU AI Act gibi hızla değişen küresel regülasyonlara ve geleceğin otonom tehditlerine karşı her zaman hazırlıklı ve dirençli kalmanızı sağlıyoruz.'
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
      'Kritik yapay zekâ ve veri sistemlerinin sürekliliğini güvence altına alıyor, kesinti risklerini görünür kılıyor ve kurumunuza özel operasyonel dayanıklılık yaklaşımıyla AI operasyonlarınızı sürdürülebilir, dirençli ve kontrol edilebilir bir yapıya dönüştürüyoruz. Her organizasyona terzi işi yaklaşarak, sektör ve kuruluş gereksinimlerini göz önüne alarak, ISO 22301 çerçevesinde sistemlerinizi yüksek erişilebilirlik, iş sürekliliği ve kurtarma kabiliyetiyle güçlendiriyoruz.'
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
          'İş sürekliliğini sağlamak adına kurumunuzdaki tüm yapay zekâ entegrasyonlarını, makine öğrenimi modellerini ve veri kaynaklarını detaylı bir risk analizinden geçiriyoruz. Olası siber tehditler veya operasyonel kesintiler karşısında en kritik süreçlerinizi belirleyerek proaktif bir yapay zekâ risk yönetimi stratejisi oluşturuyoruz. Böylece ISO 22301 ve ISO 42001 standartlarıyla tam uyumlu, "Tasarım Yoluyla Güven" (Trust by Design) ilkesini merkeze alan kesintisiz bir iş modeli tasarlıyoruz.'
      },
      {
        title: 'Dayanıklılık Hedeflerinin Belirlenmesi',
        description:
          'Beklenmedik kriz anlarında yapay zekâ operasyonlarınızın minimum kesintiyle çalışması için kurumsal hedeflerinize en uygun operasyonel dayanıklılık metriklerini (RTO/RPO) belirliyoruz. Arama motoru görünürlüğü ve kesintisiz müşteri deneyimi gibi kritik değerlerinizi korumak adına sistemlerinizin kriz anındaki toparlanma hızını optimize ediyoruz. Bu sayede pazar payınızı ve rekabet avantajınızı kaybetmeden sürdürülebilir ve güvenilir yapay zekâ altyapıları inşa etmenizi sağlıyoruz.'
      },
      {
        title: 'Süreklilik Politika ve Prosedürleri',
        description:
          'Küresel regülasyonlara ve EU AI Act (Avrupa Birliği Yapay Zekâ Yasası) gibi yasal düzenlemelere tam uyumlu, kurumunuza özel iş sürekliliği politikaları ve kriz yönetimi prosedürleri hazırlıyoruz. Yapay zekâ modellerinizin olası bir kesinti anında nasıl davranacağını önceden kurgulayarak "kara kutu" risklerini şeffaf, izlenebilir ve yönetilebilir adımlara dönüştürüyoruz. Kriz anlarında veri güvenliğinizi ve şeffaflık ilkelerini garanti altına alacak bu anayasalar sayesinde marka itibarınızı yasal güvenceye alıyoruz.'
      },
      {
        title: 'Eğitim ve Farkındalık Faaliyetleri',
        description:
          'Operasyonel dayanıklılığın en önemli halkası olan insan faktörünü güçlendirmek için ekiplerinize yapay zekâ yönetişimi ve veri güvenliği odaklı farkındalık eğitimleri sunuyoruz. Çalışanlarınızı potansiyel siber saldırılara, sızıntı risklerine ve kriz anı müdahale (incident response) süreçlerine karşı uygulamalı olarak hazırlıyoruz. Kurum genelinde proaktif bir güvenlik kültürü oluşturarak yapay zekâ altyapınızın insan gözetimi (human oversight) ile otonom hatalardan arınmış biçimde çalışmasını güvence altına alıyoruz.'
      },
      {
        title: 'Dayanıklılık Mimarisi ve Kontroller',
        description:
          'Yapay zekâ sistemleriniz için kesinti veya dışarıdan gelen bir siber saldırı durumunda anında devreye girecek yedekli ve güvenli bir dayanıklılık mimarisi kurguluyoruz. ISO 27001 bilgi güvenliği ve ISO 42001 yapay zekâ standartlarının zorunlu kıldığı teknik ve idari kontrol mekanizmalarını sistemlerinize uçtan uca entegre ediyoruz. Böylece veri zehirlenmesi (data poisoning) veya model sapması (model drift) gibi tehditleri henüz kaynağındayken engelleyen, kesintisiz bir hizmet altyapısı kuruyoruz.'
      },
      {
        title: 'Performans Ölçümü ve Testler',
        description:
          'Kurduğumuz iş sürekliliği yapısını kâğıt üzerinde bırakmıyor; yapay zekâ sızma testleri (AI Pen-Testing) ve felaket kurtarma senaryolarıyla canlı ortamda düzenli olarak sınıyoruz. Elde edilen verilerle yapay zekâ modellerinizin performansını sürekli ölçüyor, olası güvenlik zafiyetlerini (vulnerabilities) tespit edip operasyonel dayanıklılık kapasitenizi artırıyoruz. Müşteri odaklı bu ölçüm ve test süreçleri sayesinde kriz anlarında dahi yüksek performanslı ve güvenilir sonuçlar üretmeye devam etmenizi garantiliyoruz.'
      },
      {
        title: 'Doğrulama ve Denetim Hazırlığı',
        description:
          'Yapay zekâ süreçlerinizi, uluslararası akredite belgelendirme kuruluşlarının zorlu bağımsız denetimlerinden başarıyla geçecek şekilde doğruluyor ve belgeliyoruz. Kapsamlı iç tetkikler (Gap Analizi) uygulayarak regülasyon uyum eksikliklerinizi (compliance gaps) tespit ediyor ve dış denetimler öncesinde eksiksiz bir hazırlık sağlıyoruz. Sizi sadece yerel değil, küresel pazarda da güvenilir bir otorite hâline getirecek olan bu süreçle tüm yasal ve finansal ceza risklerinizi minimize ediyoruz.'
      },
      {
        title: 'Sürekli İyileştirme',
        description:
          'Yapay zekâ ekosisteminin sürekli evrilen dinamik doğasına ayak uydurmak için iş sürekliliği sistemlerinizi veri odaklı PUKÖ (Planla-Uygula-Kontrol Et-Önlem Al) döngüsü ile sürekli iyileştiriyoruz. Yeni siber tehditlere ve sürekli güncellenen küresel regülasyonlara karşı yapay zekâ yönetişim çerçevenizi her daim çevik ve güncel tutuyoruz. AION uzmanlığıyla sunduğumuz bu sürdürülebilir büyüme modeli, inovasyon hızınızı artırırken dijital yatırımlarınızın uzun vadeli ROI (Yatırım Getirisi) performansını da maksimize eder.'
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
      'Yapay zekâda "insan gözetimi" (human oversight), yapay zekâ sistemlerinin sorumlu, etik ve şeffaf bir şekilde kullanılmasını güvence altına almak için kurgulanan kritik bir mekanizmadır. ISO/IEC 42001 Yapay Zekâ Yönetim Sistemi standardı ve Avrupa Birliği Yapay Zekâ Yasası (EU AI Act) gibi çerçeveler; hesap verebilirlik ve şeffaflık beklentilerini karşılamak adına insan gözetimini temel bir şart olarak konumlandırır.'
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
          'İnsan gözetimi hedeflerinin, yapay zekâ sisteminin yaşam döngüsünün hangi aşamalarında devreye alınacağı önceden planlanmalıdır. İhtiyaç duyulan gözetimin seviyesi, yapılacak Yapay Zekâ Sistemi Etki Değerlendirmesi (AI System Impact Assessment) sonuçlarına göre belirlenmelidir. Özellikle sistemin gerçek kişiler üzerinde olası bir etkisi varsa insan gözetimi gereksinimleri (süreçler ve araçlar dâhil) mutlaka tanımlanmalıdır.'
      },
      {
        title: 'Kararlara Müdahale Edebilen İnsan İncelemeciler Atanması',
        description:
          'Sisteme entegre edilecek insan gözetmenler, yapay zekânın ürettiği çıktıları sadece izlemekle kalmamalıdır. Bu kişilere, yapay zekâ tarafından alınan kararları geçersiz kılma (override) yetkisi verilmelidir.'
      },
      {
        title: 'Personel Eğitimi ve Yetkinlik Sağlanması',
        description:
          'İnsan gözetimi faaliyetlerinde görev alacak personelin yetkinliği hayati önem taşır. Bu personelin; sistemin talimatları, dokümantasyonu ve insan gözetimi hedeflerini karşılamak için yürütecekleri spesifik görevler hakkında bilgilendirilmesi, eğitilmesi ve süreci tam olarak anlaması sağlanmalıdır.'
      },
      {
        title: 'Performans İzleme ve Geri Bildirim Mekanizmaları',
        description:
          'İnsan gözetimi, yapay zekâ çıktılarının doğruluğu da dâhil olmak üzere sistem performansının sürekli olarak izlenmesini içerir. Gözetmenlerin, sistem çıktılarının ilgili taraflara etkileri veya sistemin performansındaki sapmalar hakkında endişelerini raporlayabilecekleri şeffaf bir mekanizma kurulmalıdır.'
      },
      {
        title: 'Tam Otomasyonun Sorgulanması ve Uygunluk Kontrolü',
        description:
          'Her sürecin tamamen yapay zekâya devredilmesi doğru olmayabilir. Tamamen otomatik karar alma mekanizmasının, sistemin kullanım amacına ve sorumlu yapay zekâ kullanım ilkelerine uygun olup olmadığı dikkatlice değerlendirilmeli, gerektiğinde manuel kontrol adımları süreçte tutulmalıdır. Ayrıca sistemin, kullanım talimatlarına göre "kabul edilebilir kullanım" için gerektirdiği insan gözetimi standartlarına sahip olduğu garanti edilmelidir.'
      }
    ],
    relatedSlugs: ['ai-governance', 'regulatory-compliance']
  }
];
