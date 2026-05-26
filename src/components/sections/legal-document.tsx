// src/components/sections/legal-document.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { MonoLabel } from '@/components/ui/mono-label';
import type { LegalDocument } from '@/lib/content/legal';
import { getTranslations } from 'next-intl/server';

type LegalDocumentProps = {
  document: LegalDocument;
};

export async function LegalDocumentView({ document }: LegalDocumentProps) {
  const t = await getTranslations('legal');

  return (
    <article className="mt-10 space-y-12">
      <FadeIn>
        <p className="font-mono-label text-[0.625rem] text-muted-foreground">{t('lastUpdated', { date: document.lastUpdated })}</p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{document.disclaimer}</p>
      </FadeIn>

      {document.sections.map((section, index) => (
        <FadeIn key={section.id} delay={index * 0.03}>
          <section id={section.id} className="scroll-mt-28">
            <MonoLabel className="text-accent">{String(index + 1).padStart(2, '0')}</MonoLabel>
            <h2 className="font-display mt-4 text-2xl tracking-tight">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map(paragraph => (
                <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.list ? (
              <ul className="mt-4 space-y-2">
                {section.list.map(item => (
                  <li key={item.slice(0, 40)} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        </FadeIn>
      ))}
    </article>
  );
}
