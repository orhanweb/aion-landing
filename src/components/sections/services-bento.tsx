// src/components/sections/services-bento.tsx
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { InteractiveCardShell, interactiveCardSurfaceClassName } from '@/components/ui/interactive-card';
import { getServices } from '@/lib/content/services';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import { getTranslations, getLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type ServicesBentoProps = {
  className?: string;
  showHubIntro?: boolean;
  titleAs?: 'h1' | 'h2';
};

export async function ServicesBento({ className, showHubIntro, titleAs = 'h2' }: ServicesBentoProps = {}) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('services');
  const services = getServices(locale);
  const [coreService, ...controlServices] = services;
  const TitleTag = titleAs;

  if (!coreService) {
    return null;
  }

  return (
    <Section id="services" className={className}>
      <Container>
        <FadeIn>
          <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
          <TitleTag className="font-display mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-tight tracking-tight">{t('title')}</TitleTag>
          <p className="mt-4 max-w-xl text-muted-foreground">{t('description')}</p>
          {showHubIntro ? <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{t('hubIntro')}</p> : null}
        </FadeIn>

        <div className="mt-16">
          <FadeIn>
            <InteractiveCardShell>
              <Link
                href={`/services/${coreService.slug}`}
                aria-label={t('learnMoreLabel', { service: coreService.title })}
                className={interactiveCardSurfaceClassName('block p-8 md:p-10 lg:p-12')}
              >
                <div aria-hidden className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full border border-accent/20" />
                <div aria-hidden className="absolute bottom-0 right-0 h-px w-1/2 bg-linear-to-l from-accent/30 to-transparent" />

                <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
                  <div>
                    <MonoLabel className="text-accent">01</MonoLabel>
                    <h3 className="font-display mt-5 max-w-3xl text-[clamp(2rem,4vw,4rem)] leading-[1.05] tracking-tight text-foreground">
                      {coreService.title}
                    </h3>
                    <p className="mt-4 max-w-xl font-mono-label leading-relaxed text-muted-foreground">{coreService.subtitle}</p>
                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{coreService.shortDescription}</p>
                  </div>

                  <div className="rounded-lg border border-border bg-background/35 p-5">
                    <p className="font-mono-label text-muted-foreground">{coreService.standard}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-mono-label text-accent">
                      {t('learnMore')}
                      <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                    </span>
                  </div>
                </div>
              </Link>
            </InteractiveCardShell>
          </FadeIn>

          <div aria-hidden className="relative hidden h-14 lg:block">
            <div className="absolute left-1/2 top-0 h-full w-px bg-border" />
            <div className="absolute bottom-0 left-1/4 h-px w-1/2 bg-border" />
          </div>

          <div className="mt-4 grid gap-4 lg:mt-0 lg:grid-cols-2">
            {controlServices.map((service, index) => {
              const num = String(index + 2).padStart(2, '0');

              return (
                <FadeIn key={service.slug} delay={(index + 1) * 0.05}>
                  <InteractiveCardShell className={cn(index % 2 === 0 ? 'lg:mr-3' : 'lg:ml-3')}>
                    <Link
                      href={`/services/${service.slug}`}
                      aria-label={t('learnMoreLabel', { service: service.title })}
                      className={interactiveCardSurfaceClassName('flex min-h-[260px] flex-col p-6 md:p-8')}
                    >
                      <div>
                        <MonoLabel className="text-accent">{num}</MonoLabel>
                        <h3 className="font-display mt-4 text-2xl leading-tight tracking-tight text-foreground">{service.title}</h3>
                        <p className="mt-2 font-mono-label leading-relaxed text-muted-foreground">{service.subtitle}</p>
                      </div>

                      <p className="mt-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-8 font-mono-label text-accent">
                        {t('learnMore')}
                        <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                      </span>
                    </Link>
                  </InteractiveCardShell>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
