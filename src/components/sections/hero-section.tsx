// src/components/sections/hero-section.tsx
import { Link } from '@/i18n/navigation';
import { GovernanceGraph } from '@/components/motion/governance-graph';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

export async function HeroSection() {
  const t = await getTranslations('hero');

  return (
    <Section className="grain-overlay grid-lines overflow-hidden pt-8">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Stagger className="lg:col-span-7">
            <StaggerItem>
              <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-display mt-6 text-balance text-[clamp(2.875rem,5vw,4.75rem)] font-semibold leading-[1.12] tracking-[0.02em]">
                <span className="block">{t('titleLine1')}</span>
                <span className="block text-accent">{t('titleLine2')}</span>
                <span className="block">{t('titleLine3')}</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">{t('description')}</p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link href="/degerlendirme" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}>
                  {t('primaryCta')}
                </Link>
                <Link href="/hizmetler" className="font-mono-label text-foreground transition-colors hover:text-accent">
                  {t('secondaryCta')} →
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-10 font-mono-label text-[0.625rem] text-muted-foreground">{t('standards')}</p>
            </StaggerItem>
          </Stagger>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-lg border border-border bg-[var(--ink-elevated)] p-8 sm:p-10">
              <GovernanceGraph />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
