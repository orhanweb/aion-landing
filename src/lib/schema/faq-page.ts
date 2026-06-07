// src/lib/schema/faq-page.ts
import { schemaInLanguage } from '@/lib/schema/helpers';
import { faqPageEntityId, faqQuestionEntityId } from '@/lib/schema/site-entity';
import type { ServiceFaq } from '@/lib/content/services/types';
import type { Locale } from '@/i18n/routing';

export function faqPageGraphNode(faqs: ServiceFaq[], pageUrl: string, webPageId: string, locale: Locale) {
  if (faqs.length === 0) {
    return null;
  }

  return {
    '@type': 'FAQPage',
    '@id': faqPageEntityId(pageUrl),
    inLanguage: schemaInLanguage(locale),
    isPartOf: {
      '@id': webPageId
    },
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      '@id': faqQuestionEntityId(pageUrl, faq.id),
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
