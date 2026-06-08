// src/lib/content/data/services/faqs/tr.ts
import type { ServiceFaq, ServiceSlug } from '@/lib/content/services/types';

export const serviceFaqsTr = {
  'ai-governance': [
    {
      id: 'iso-42001-overview',
      question: 'ISO/IEC 42001 nedir ve kurumum neden bu standardı benimsemeli?',
      answer:
        'ISO/IEC 42001, yapay zeka yönetim sistemleri için uluslararası standarttır. Yapay zekanın nasıl geliştirileceğini, devreye alınacağını, izleneceğini ve iyileştirileceğini yapılandırılmış bir çerçevede yönetmenizi sağlar. Benimsenmesi regülasyon ve operasyonel riski azaltır, paydaş güvenini güçlendirir ve sorumlu yapay zeka için denetlenebilir bir temel oluşturur.'
    },
    {
      id: 'certification-timeline',
      question: 'ISO 42001 sertifikasyonu genellikle ne kadar sürer?',
      answer:
        'Süre; kurumsal olgunluk, sistem karmaşıklığı ve mevcut yönetim sistemi entegrasyonlarına bağlıdır. Çoğu kurum gap analizi, sistem tasarımı, uygulama ve iç denetim sürecini 6–12 ay içinde tamamlar. AION, yüksek riskli yapay zeka sistemlerini ve denetim kritik kontrollerini önceleyen aşamalı bir yol haritası kullanır.'
    },
    {
      id: 'iso-42001-eu-ai-act-relation',
      question: 'ISO 42001 ile EU AI Act arasındaki ilişki nedir?',
      answer:
        'ISO 42001 bir yapay zeka yönetim sisteminin nasıl işletileceğini tanımlar. EU AI Act ise belirli kullanım senaryoları için yasal yükümlülükler getirir. ISO 42001 uygulaması; risk yönetimi, dokümantasyon, insan gözetimi ve izleme gerekliliklerini sertifikasyona hazır bir yapı üzerinden karşılamanıza yardımcı olur.'
    },
    {
      id: 'certification-audit-support',
      question: 'AION sertifikasyon denetim sürecinde de destek veriyor mu?',
      answer:
        'Evet. Gap analizi ve politika tasarımından iç denetim ve düzeltici faaliyetlere kadar kurumunuzu hazırlıyoruz. Akredite belgelendirme kuruluşu denetimlerinde (BSI, TÜV vb.) yanınızda olur, dış denetim öncesi ve sırasında bulguların kapatılmasına rehberlik ederiz.'
    }
  ],
  'regulatory-compliance': [
    {
      id: 'high-risk-classification',
      question: 'EU AI Act kapsamında hangi yapay zeka sistemleri yüksek riskli sayılır?',
      answer:
        'Yüksek riskli sistemler; istihdam kararları, kredi skorlama, kolluk kuvvetleri, kritik altyapı, eğitim değerlendirmesi ve belirli biyometrik tanımlama gibi alanlardaki uygulamaları kapsayabilir. Sınıflandırma; kullanım amacı, devreye alma bağlamı ve sistemin temel hakları etkileyip etkilemediğine bağlıdır. AION, her sistem için yapılandırılmış etki değerlendirmesiyle doğru risk kategorisini belirler.'
    },
    {
      id: 'non-compliance-penalties',
      question: 'EU AI Act uyumsuzluğunda hangi cezai yaptırımlar uygulanır?',
      answer:
        "İdari para cezaları ihlal türüne göre değişir. Yasaklanmış yapay zeka uygulamaları için cezalar 35 milyon avroya veya küresel yıllık cironun %7'sine kadar çıkabilir. Tedarik zinciri ve sağlayıcı yükümlülükleri 15 milyon avroya veya cironun %3'üne kadar ceza içerebilir. Doğru risk sınıflandırması, dokümantasyon ve insan gözetimi kontrolleri bu riskleri azaltır."
    },
    {
      id: 'third-party-ai-compliance',
      question: 'Yalnızca üçüncü taraf yapay zeka araçları kullanıyorsak EU AI Act uyumu gerekli mi?',
      answer:
        'Çoğu durumda evet. Modeller veya platformlar dış kaynaklı olsa bile, devreye alan kuruluş kullanım biçiminden sorumludur. Sağlayıcı dokümantasyonunu doğrulamalı, gerektiğinde uygunluk değerlendirmesi yapmalı ve kendi kullanım senaryonuz için şeffaflık, veri yönetişimi ve insan gözetimini sağlamalısınız.'
    },
    {
      id: 'ai-act-classification-process',
      question: 'AION yapay zeka sistemlerimizi EU AI Act kapsamında nasıl sınıflandırır?',
      answer:
        'Her yapay zeka sistemini Ek III kriterleri ve geçerli istisnalara göre denetler, kullanım amacı ve devreye alma bağlamını belgeler ve yükümlülükleri somut kontrollere eşler. Çıktı; risk sınıflandırma kaydı, sorumluluk matrisi ve ISO 42001 ile EU AI Act gerekliliklerine uyumlu bir uyum yol haritasıdır.'
    }
  ],
  'information-security': [
    {
      id: 'iso-27001-ai-risks',
      question: 'ISO 27001 yapay zekaya özgü güvenlik risklerini nasıl ele alır?',
      answer:
        'ISO 27001; erişim kontrolü, şifreleme, olay yönetimi ve tedarikçi güvenliğiyle bilgi varlıklarını korur. Yapay zeka; model kaçırma, prompt injection, eğitim verisi zehirlenmesi ve çıkarım anında veri sızıntısı gibi ek tehditler getirir. AION, ISO 27001 kontrollerini ISO 42001 yapay zeka yönetişimiyle entegre ederek geleneksel ve yapay zekaya özgü saldırı yüzeylerini birlikte kapsar.'
    },
    {
      id: 'data-poisoning-protection',
      question: 'Yapay zeka veri zehirlenmesi nedir ve buna karşı nasıl korunulur?',
      answer:
        'Veri zehirlenmesi; saldırganların eğitim veya fine-tuning veri setlerine kötü niyetli örnekler enjekte etmesiyle modellerin hatalı davranması veya bilgi sızdırmasıdır. Koruma; veri kökeni takibi, bütünlük doğrulaması, eğitim hattı erişim kontrolleri, anomali tespiti ve düzenli model performans izlemesi gerektirir.'
    },
    {
      id: 'iso-27001-42001-integration',
      question: 'ISO 27001 ve ISO 42001 birlikte uygulanabilir mi?',
      answer:
        'Evet, hatta birlikte uygulanmalıdır. Her iki standart risk değerlendirme, kontrol seçimi, izleme ve sürekli iyileştirme yapılarını paylaşır. Birleşik uygulama tekrarlayan dokümantasyonu önler, denetim yükünü azaltır; bilgi güvenliği ile yapay zeka yönetişimi aynı hizada kalır.'
    },
    {
      id: 'ai-penetration-testing',
      question: 'Yapay zeka sızma testi neleri kapsar?',
      answer:
        'Yapay zeka sızma testleri; model girdilerini, API uç noktalarını, eğitim hatlarını ve devreye alma ortamlarını OWASP LLM Top 10 ve kuruma özel tehdit modellerine göre değerlendirir. Prompt injection, jailbreak girişimleri, model çıktıları üzerinden veri sızdırma, adversarial girdi oluşturma ve tedarik zinciri güvenlik açığı değerlendirmesini içerir.'
    }
  ],
  'operational-resilience': [
    {
      id: 'ai-business-continuity',
      question: 'Yapay zeka sistemleri için iş sürekliliği neden kritiktir?',
      answer:
        'Yapay zeka sistemleri sıklıkla müşteriye dönük kararlar, dolandırıcılık tespiti, lojistik ve uyum iş akışlarını destekler. Kesinti veya model arızası operasyonları durdurabilir, güveni zedeleyebilir ve regülasyon bildirim yükümlülüklerini tetikleyebilir. İş sürekliliği planlaması, yapay zeka altyapısının tanımlı süreler içinde kurtarılmasını ve kesinti sırasında güvenli çalışmaya devam etmesini sağlar.'
    },
    {
      id: 'rto-rpo-ai-operations',
      question: 'Yapay zeka operasyonlarında RTO ve RPO ne anlama gelir?',
      answer:
        'Kurtarma Süresi Hedefi (RTO), bir yapay zeka hizmeti için kabul edilebilir maksimum kesinti süresini tanımlar. Kurtarma Noktası Hedefi (RPO) ise kabul edilebilir maksimum veri kaybı penceresini belirler. Yapay zeka sistemlerinde RTO/RPO; yalnızca altyapı çalışma süresini değil, model yeniden eğitim süresini, çıkarım yedeklemesini ve veri hattı kurtarmasını da kapsamalıdır.'
    },
    {
      id: 'iso-22301-ml-infrastructure',
      question: 'ISO 22301 makine öğrenimi altyapısına nasıl uygulanır?',
      answer:
        "ISO 22301 kritik süreçlerin belirlenmesini, süreklilik hedeflerinin tanımlanmasını ve kurtarma prosedürlerinin uygulanmasını gerektirir. ML altyapısı için bu; yedekli çıkarım uç noktaları, yedek model sürümleri, eğitim verisi felaket kurtarması, belgelenmiş yedekleme runbook'ları ve iş etki analizine uyumlu düzenli kurtarma testlerini içerir."
    },
    {
      id: 'disaster-recovery-models',
      question: 'Felaket kurtarma senaryosunda yapay zeka modellerine ne olur?',
      answer:
        'AION, hangi model sürümlerinin devreye alınacağını, yedekleme sonrası çıktıların nasıl doğrulanacağını ve insan gözetiminin ne zaman devreye gireceğini tanımlayan kurtarma prosedürleri tasarlar. Önceden onaylanmış yedek modeller, önbelleğe alınmış tahminler ve manuel geçersiz kılma iş akışları; kısmi sistem kurtarması sırasında bile yapay zeka kararlarının güvenli ve denetlenebilir kalmasını sağlar.'
    }
  ],
  'human-oversight': [
    {
      id: 'eu-ai-act-oversight',
      question: 'EU AI Act kapsamında insan gözetimi nedir?',
      answer:
        'İnsan gözetimi; nitelikli personelin yapay zeka sistem çıktılarını izlemesi, yorumlaması ve gerektiğinde geçersiz kılması anlamına gelir; özellikle yüksek riskli uygulamalarda. EU AI Act, bireylere zarar verebilecek veya hakları ihlal edebilecek otomatik kararları durdurma veya geri alma yeteneği dahil olmak üzere etkili gözetim mekanizmalarını zorunlu kılar.'
    },
    {
      id: 'mandatory-oversight-cases',
      question: 'İnsan gözetimi hangi durumlarda zorunludur?',
      answer:
        'EU AI Act kapsamında yüksek riskli yapay zeka sistemleri için insan gözetimi zorunludur. ISO 42001 kapsamında ise insanları, güvenliği veya yasal sonuçları etkileyen tüm sistemler için şiddetle önerilir. Gerekli düzey; etki değerlendirme sonuçlarına, otomasyon kapsamına ve kararların yasal veya benzer şekilde önemli etkiler doğurup doğurmadığına bağlıdır.'
    },
    {
      id: 'full-automation-compliance',
      question: 'Tam otomatik yapay zeka karar alma uyumlu olabilir mi?',
      answer:
        'Düşük riskli kullanım senaryolarında tam otomasyon kabul edilebilir olabilir; ancak yüksek riskli sistemler geçersiz kılma yetkisine sahip anlamlı insan incelemesi gerektirir. AION her süreci sorumlu yapay zeka ilkeleri ve regülasyon gerekliliklerine göre değerlendirir; hesap verebilirlik veya şeffaflık standartlarını karşılayamayan noktalarda manuel kontrol adımlarını korur.'
    },
    {
      id: 'human-in-the-loop-design',
      question: 'AION insan-döngüde kontrolleri nasıl tasarlar?',
      answer:
        'Yapay Zeka Sistem Etki Değerlendirmesi ile gözetim kapsamını tanımlar, geçersiz kılma yetkisine sahip gözden geçiriciler atar, eskalasyon yolları oluşturur ve izleme panolarını entegre ederiz. Eğitim programları, gözetim yapan personelin sistem sınırlarını, dokümantasyon gerekliliklerini ve yürürlükteki regülasyonlar kapsamındaki yasal sorumluluklarını anlamasını sağlar.'
    }
  ]
} satisfies Record<ServiceSlug, ServiceFaq[]>;
