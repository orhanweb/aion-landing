// src/components/sections/service-detail-hero.tsx
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { serviceDetailScrollViewport } from '@/components/motion/motion-config';
import { Container, Section } from '@/components/ui/container';
import { TextMeasure } from '@/components/ui/content-width';
import { MonoLabel } from '@/components/ui/mono-label';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import type { ServiceStandard } from '@/lib/content/services/types';
import { getTranslations } from 'next-intl/server';

type ServiceDetailHeroProps = {
  subtitle: string;
  title: string;
  intro: string[];
  standard: ServiceStandard;
};

export async function ServiceDetailHero({ subtitle, title, intro, standard }: ServiceDetailHeroProps) {
  const t = await getTranslations('serviceDetail');

  return (
    <Section variant="default" spacing="compact" className="pt-24">
      <Container>
        <FadeIn viewport={serviceDetailScrollViewport}>
          <MonoLabel className="text-accent">{subtitle}</MonoLabel>
          <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">{title}</h1>
          <TextMeasure className="mt-6 space-y-4">
            {intro.map(paragraph => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
          </TextMeasure>
          <p className="mt-8 font-mono-label text-muted-foreground">{standard}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/assessment" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}>
              {t('primaryCta')}
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 font-mono-label text-foreground transition-colors hover:text-accent">
              {t('secondaryCta')}
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
