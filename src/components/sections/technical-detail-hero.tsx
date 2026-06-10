// src/components/sections/technical-detail-hero.tsx
import { Link } from '@/i18n/navigation';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { Container, Section } from '@/components/ui/container';
import { TextMeasure } from '@/components/ui/content-width';
import { MonoLabel } from '@/components/ui/mono-label';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

type TechnicalDetailHeroProps = {
  subtitle: string;
  title: string;
  intro: string[];
  focus: string;
  linkedinUrl: string;
};

export async function TechnicalDetailHero({ subtitle, title, intro, focus, linkedinUrl }: TechnicalDetailHeroProps) {
  const t = await getTranslations('technicalDetail');

  return (
    <Section variant="default" spacing="compact" className="pt-24">
      <Container>
        <FadeIn>
          <MonoLabel className="text-accent">{subtitle}</MonoLabel>
          <h1 className="font-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">{title}</h1>
          <TextMeasure className="mt-6 space-y-4">
            {intro.map(paragraph => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
          </TextMeasure>
          <p className="mt-8 font-mono-label text-muted-foreground">{focus}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
              aria-label={t('primaryCtaAria')}
            >
              {t('primaryCta')}
              <ExternalLink aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </a>
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
