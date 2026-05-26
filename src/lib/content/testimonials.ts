// src/lib/content/testimonials.ts
import type { Locale } from '@/i18n/routing';
import type { ServiceSlug } from '@/lib/content/services';

export type Testimonial = {
  id: string;
  author: string;
  sector: string;
  quote: string;
  serviceSlug?: ServiceSlug;
  featured: boolean;
};

const testimonialsTr: Testimonial[] = [
  {
    id: 'fatih-kuran',
    author: 'Fatih Kuran',
    sector: 'Finans ve Bankacılık',
    quote:
      "AION ile çalışmak, yapay zeka stratejimizi tamamen yeni bir seviyeye taşıdı. Özellikle ISO 42001 standartları ve EU AI Act uyum süreci konusundaki derin uzmanlıkları sayesinde, karmaşık regülasyonları başarıyla yönettik. YZ sistemlerimizin etik, şeffaf ve uluslararası düzeyde denetlenebilir bir yapıya kavuşması, hem yatırımcılarımıza hem de müşterilerimize büyük bir güven verdi. Gerçek bir çözüm ortağı arayan, yapay zeka odaklı tüm kurumlara AION'u gönül rahatlığıyla tavsiye ederiz.",
    serviceSlug: 'ai-governance',
    featured: true
  },
  {
    id: 'kemal-esen',
    author: 'Kemal Esen',
    sector: 'Sağlık Teknolojileri',
    quote:
      'Sağlık teknolojileri alanında faaliyet gösteren bir firma olarak, verilerin gizliliği ve bilgi güvenliği bizim için en kritik konu. AION, ISO 27001 çerçevesinde güvenli veri altyapımızı kurarken, yapay zeka operasyonlarımızı da bu güvenli mimariye kusursuz bir şekilde entegre etti. Bize sundukları kontrol mekanizmaları sayesinde artık verilerimizin güvende olduğundan tam anlamıyla emin olarak projelerimizi geliştiriyoruz. AION ekibinin profesyonelliği her adımda kendini hissettiriyor.',
    serviceSlug: 'information-security',
    featured: false
  },
  {
    id: 'damla-sivrioglu-aslan',
    author: 'Damla Sivrioglu Aslan',
    sector: 'Yazılım ve SaaS',
    quote:
      "Yapay zeka altyapımızın mevcut durumunu değerlendirmek için AION'un sunduğu GAP analizi süreci bizim için ufuk açıcıydı. Uzman danışman kadrosu, sistemimizdeki boşlukları net bir şekilde tespit edip, sertifikasyon yolculuğumuz için bize özel, maliyet ve zaman tasarrufu sağlayan stratejik bir yol haritası sundu. Denetim süreçlerini sıfır stresle ve başarıyla tamamlamamızın arkasındaki en büyük güç AION'un proaktif yaklaşımıdır.",
    serviceSlug: 'ai-governance',
    featured: false
  },
  {
    id: 'burcu-yozgatli',
    author: 'Burcu Yozgatli',
    sector: 'Üretim ve Lojistik',
    quote:
      "Operasyonel dayanıklılık ve iş sürekliliği tedarik zincirimizin can damarıdır. AION'un Sürekliliğe Tasarlanmış AI yaklaşımı ve ISO 22301 entegrasyonu sayesinde, kritik yapay zeka ve veri sistemlerimizin olası kesintilerde bile güvenle çalışmaya devam edeceğini garantiledik. Bize sundukları dayanıklılık modeli, operasyonel süreçlerimizi hiç olmadığı kadar güçlü ve kesintisiz hale getirdi.",
    serviceSlug: 'operational-resilience',
    featured: false
  },
  {
    id: 'serdar-sahin',
    author: 'Serdar Şahin',
    sector: 'E-Ticaret ve Perakende',
    quote:
      "Yapay zeka tabanlı öneri algoritmalarımızın standartlara uygunluğunu sağlama noktasında AION'un danışmanlığına başvurduk. Yalnızca sertifikasyon odaklı teknik bir hizmet vermekle kalmadılar; kurum kültürümüze sorumlu ve güvenilir yapay zeka vizyonunu entegre etmemizi sağladılar. Sektördeki deneyimleri, profesyonel yaklaşımları ve süreç boyunca gösterdikleri destekleyici tutum, AION'u bizim için sıradan bir danışmanlık firması değil, vazgeçilmez bir iş ortağı yaptı.",
    serviceSlug: 'regulatory-compliance',
    featured: false
  }
];

const testimonialsEn: Testimonial[] = [
  {
    id: 'fatih-kuran',
    author: 'Fatih Kuran',
    sector: 'Finance and Banking',
    quote:
      'Working with AION took our AI strategy to an entirely new level. Their deep expertise in ISO 42001 standards and EU AI Act compliance helped us navigate complex regulations successfully. Our AI systems became ethical, transparent, and auditable at an international level — giving confidence to both investors and customers. We wholeheartedly recommend AION to any AI-focused organization seeking a true solution partner.',
    serviceSlug: 'ai-governance',
    featured: true
  },
  {
    id: 'kemal-esen',
    author: 'Kemal Esen',
    sector: 'Health Technology',
    quote:
      "As a health technology company, data privacy and information security are our top priorities. AION built our secure data infrastructure under ISO 27001 while seamlessly integrating our AI operations into that architecture. Their control mechanisms give us full confidence to develop projects knowing our data is protected. The AION team's professionalism is evident at every step.",
    serviceSlug: 'information-security',
    featured: false
  },
  {
    id: 'damla-sivrioglu-aslan',
    author: 'Damla Sivrioglu Aslan',
    sector: 'Software and SaaS',
    quote:
      "AION's gap analysis process was eye-opening for assessing our AI infrastructure. Their expert consultants identified gaps clearly and delivered a strategic roadmap tailored to our certification journey — saving both cost and time. AION's proactive approach was the driving force behind completing our audit processes with zero stress and full success.",
    serviceSlug: 'ai-governance',
    featured: false
  },
  {
    id: 'burcu-yozgatli',
    author: 'Burcu Yozgatli',
    sector: 'Manufacturing and Logistics',
    quote:
      "Operational resilience and business continuity are the lifeblood of our supply chain. Through AION's AI Designed for Continuity approach and ISO 22301 integration, we ensured our critical AI and data systems will keep running safely during disruptions. Their resilience model made our operational processes stronger and more uninterrupted than ever.",
    serviceSlug: 'operational-resilience',
    featured: false
  },
  {
    id: 'serdar-sahin',
    author: 'Serdar Şahin',
    sector: 'E-Commerce and Retail',
    quote:
      'We turned to AION to ensure our AI-based recommendation algorithms met regulatory standards. They did not just deliver certification-focused technical services — they helped integrate a responsible and trustworthy AI vision into our company culture. Their industry experience, professional approach, and supportive attitude throughout made AION an indispensable business partner, not just another consultancy.',
    serviceSlug: 'regulatory-compliance',
    featured: false
  }
];

export function getTestimonials(locale: Locale): Testimonial[] {
  return locale === 'tr' ? testimonialsTr : testimonialsEn;
}
