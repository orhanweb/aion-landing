// src/components/sections/related-services.tsx
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { serviceDetailScrollViewport } from '@/components/motion/motion-config';
import { InteractiveCardShell, interactiveCardSurfaceClassName } from '@/components/ui/interactive-card';
import { MonoLabel } from '@/components/ui/mono-label';
import type { Locale } from '@/i18n/routing';
import { getRelatedServices, type ServiceSlug } from '@/lib/content/services';
import { getTranslations } from 'next-intl/server';

type RelatedServicesProps = {
  locale: Locale;
  relatedSlugs: ServiceSlug[];
};

export async function RelatedServices({ locale, relatedSlugs }: RelatedServicesProps) {
  const t = await getTranslations('serviceDetail');
  const related = getRelatedServices(locale, relatedSlugs);

  if (related.length === 0) {
    return null;
  }

  return (
    <FadeIn viewport={serviceDetailScrollViewport}>
      <h2 className="font-display text-2xl tracking-tight md:text-3xl">{t('relatedLabel')}</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {related.map((service, index) => (
          <InteractiveCardShell key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              aria-label={t('relatedLinkLabel', { service: service.title })}
              className={interactiveCardSurfaceClassName('flex h-full flex-col p-6')}
            >
              <MonoLabel className="text-accent">{String(index + 1).padStart(2, '0')}</MonoLabel>
              <h3 className="font-display mt-3 text-xl tracking-tight text-foreground transition-colors group-hover:text-accent">{service.title}</h3>
              <p className="mt-2 font-mono-label text-muted-foreground">{service.standard}</p>
              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-mono-label text-accent">
                {t('relatedLink')}
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </span>
            </Link>
          </InteractiveCardShell>
        ))}
      </div>
    </FadeIn>
  );
}
