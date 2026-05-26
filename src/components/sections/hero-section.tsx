// src/components/sections/hero-section.tsx
import { Link } from '@/i18n/navigation';
import { Container, Section } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

export async function HeroSection() {
  const t = await getTranslations('hero');

  return (
    <Section className="relative overflow-hidden pt-20 sm:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.18),transparent_55%)]" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <Badge>{t('eyebrow')}</Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{t('title')}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{t('description')}</p>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            {t.raw('bullets').map((bullet: string) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 text-accent">→</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/degerlendirme" className={cn(buttonVariants({ size: 'lg' }))}>
              {t('primaryCta')}
            </Link>
            <Link href="/hizmetler" className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}>
              {t('secondaryCta')}
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {['ISO 42001', 'EU AI Act', 'ISO 27001', 'ISO 22301'].map(item => (
              <div key={item} className="rounded-2xl border border-border bg-background/60 p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Standard</p>
                <p className="mt-2 text-lg font-semibold text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
