// src/components/sections/related-services.tsx
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/motion/fade-in';
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
    <FadeIn>
      <MonoLabel className="text-accent">{t('relatedLabel')}</MonoLabel>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {related.map((service, index) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex flex-col rounded-lg border border-border bg-[var(--ink-elevated)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--line-strong)]"
          >
            <MonoLabel className="text-accent">{String(index + 1).padStart(2, '0')}</MonoLabel>
            <h3 className="font-display mt-3 text-xl tracking-tight text-foreground transition-colors group-hover:text-accent">{service.title}</h3>
            <p className="mt-2 font-mono-label text-[0.625rem] text-muted-foreground">{service.standard}</p>
            <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
            <span className="mt-4 font-mono-label text-[0.625rem] text-accent">{t('relatedLink')} →</span>
          </Link>
        ))}
      </div>
    </FadeIn>
  );
}
