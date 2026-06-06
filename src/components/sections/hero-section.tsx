// src/components/sections/hero-section.tsx
import { Link } from '@/i18n/navigation';
import { ValueBullets } from '@/components/sections/value-bullets';
import { AuditReadinessConsole } from '@/components/motion/audit-readiness-console';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

export async function HeroSection() {
  const t = await getTranslations('hero');

  return (
    <Section spacing="none" className="grain-overlay grid-lines overflow-hidden py-16 md:py-20 xl:py-28">
      <Container>
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(340px,440px)] xl:gap-16">
          <Stagger className="max-w-[900px] xl:max-w-none">
            <StaggerItem>
              <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-display mt-6 text-balance text-[clamp(3rem,5.8vw,5rem)] font-semibold leading-[1.05] tracking-[0.01em] xl:text-[clamp(4rem,5vw,5.5rem)]">
                <span className="block">{t('titleLine1')}</span>
                <span className="block text-accent">{t('titleLine2')}</span>
              </h1>
              <p className="mt-5 max-w-2xl font-mono-label leading-relaxed text-accent">{t('titleLine3')}</p>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{t('description')}</p>
            </StaggerItem>

            <StaggerItem>
              <ValueBullets />
            </StaggerItem>

            <StaggerItem>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link href="/assessment" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}>
                  {t('primaryCta')}
                </Link>
                <Link href="/services" className="font-mono-label text-foreground transition-colors hover:text-accent">
                  {t('secondaryCta')} →
                </Link>
              </div>
              <p className="mt-4 font-mono-label text-muted-foreground">{t('ctaNote')}</p>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-10 font-mono-label text-muted-foreground">{t('standards')}</p>
            </StaggerItem>
          </Stagger>

          <div className="hidden xl:block">
            <AuditReadinessConsole />
          </div>
        </div>
      </Container>
    </Section>
  );
}
