// src/components/sections/service-faq-section.tsx
import { ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { serviceDetailScrollViewport } from '@/components/motion/motion-config';
import { MonoLabel } from '@/components/ui/mono-label';
import { faqQuestionFragmentId } from '@/lib/schema/site-entity';
import type { ServiceFaq } from '@/lib/content/services/types';

type ServiceFaqSectionProps = {
  label: string;
  title: string;
  titleId: string;
  faqs: ServiceFaq[];
};

export function ServiceFaqSection({ label, title, titleId, faqs }: ServiceFaqSectionProps) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <>
      <FadeIn viewport={serviceDetailScrollViewport}>
        <MonoLabel className="text-accent">{label}</MonoLabel>
        <h2 id={titleId} className="font-display mt-4 text-2xl tracking-tight md:text-3xl">
          {title}
        </h2>
      </FadeIn>

      <div className="mt-12 space-y-4">
        {faqs.map((faq, index) => (
          <FadeIn viewport={serviceDetailScrollViewport} key={faq.id} delay={index * 0.05}>
            <details id={faqQuestionFragmentId(faq.id)} className="group rounded-lg border border-border bg-card open:border-accent/25">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-lg px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold tracking-tight text-foreground md:text-lg">{faq.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                  strokeWidth={1.75}
                />
              </summary>
              <div className="border-t border-border px-6 pb-6 pt-4">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{faq.answer}</p>
              </div>
            </details>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
