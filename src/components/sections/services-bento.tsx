// src/components/sections/services-bento.tsx
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/motion/fade-in';
import { getServices } from '@/lib/content/services';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import { getTranslations, getLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

export async function ServicesBento() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('services');
  const services = getServices(locale);

  return (
    <Section id="services">
      <Container>
        <FadeIn className="max-w-2xl">
          <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
          <h2 className="font-display mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-tight tracking-tight">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('description')}</p>
        </FadeIn>

        <div className="mt-16 grid gap-4 md:grid-cols-6 md:grid-rows-2">
          {services.map((service, index) => {
            const num = String(index + 1).padStart(2, '0');
            const isFeatured = index === 0;

            return (
              <FadeIn
                key={service.slug}
                delay={index * 0.05}
                className={cn('group', isFeatured && 'md:col-span-4 md:row-span-2', index === 1 && 'md:col-span-2', index >= 2 && 'md:col-span-2')}
              >
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="flex h-full flex-col justify-between rounded-lg border border-border bg-[var(--ink-elevated)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--line-strong)] md:p-8"
                >
                  <div>
                    <MonoLabel className="text-accent">{num}</MonoLabel>
                    <h3 className={cn('font-display mt-4 tracking-tight text-foreground', isFeatured ? 'text-2xl md:text-3xl' : 'text-xl')}>
                      {service.title}
                    </h3>
                    <p className="mt-2 font-mono-label text-[0.625rem] text-muted-foreground">{service.subtitle}</p>
                  </div>
                  <p className={cn('mt-6 text-sm leading-relaxed text-muted-foreground', isFeatured ? 'max-w-lg' : 'line-clamp-3')}>
                    {service.description}
                  </p>
                  <span className="mt-6 font-mono-label text-[0.625rem] text-accent">{t('learnMore')} →</span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
