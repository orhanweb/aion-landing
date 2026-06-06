// src/components/sections/signal-banner.tsx
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { buttonVariants } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

export async function SignalBanner() {
  const t = await getTranslations('cta');

  return (
    <Section spacing="compact">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-lg border border-signal/25 bg-card">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="border-l-[3px] border-signal px-6 py-8 md:px-10 md:py-10 lg:px-12">
                <MonoLabel className="text-signal">{t('dateLabel')}</MonoLabel>
                <p className="font-mono-label mt-2 text-muted-foreground">{t('eyebrow')}</p>
                <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tight">{t('title')}</h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">{t('description')}</p>
                <Link href="/assessment" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-8 inline-flex')}>
                  {t('button')}
                  <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                </Link>
              </div>

              <aside className="flex min-h-56 flex-col justify-between border-t border-signal/20 bg-signal/10 p-6 md:p-8 lg:border-l lg:border-t-0">
                <MonoLabel className="text-signal">{t('penalty')}</MonoLabel>
                <div>
                  <p className="font-display text-[clamp(3rem,8vw,5.5rem)] leading-none tracking-tight text-signal">35M EUR</p>
                  <p className="mt-3 font-mono-label leading-relaxed text-muted-foreground">{t('dateLabel')}</p>
                </div>
              </aside>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
