// src/components/sections/metrics-band.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { Container } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { getTranslations } from 'next-intl/server';

type MetricItem = {
  value: string;
  label: string;
};

export async function MetricsBand() {
  const t = await getTranslations('metrics');
  const items = t.raw('items') as MetricItem[];

  return (
    <div className="border-y border-border bg-card py-12 md:py-16">
      <Container>
        <FadeIn>
          <div>
            <MonoLabel className="text-accent">{t('label')}</MonoLabel>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{t('description')}</p>
          </div>
        </FadeIn>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.05} className="h-full rounded-sm border border-border bg-background/40 p-5">
              <dt className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-none tracking-tight text-foreground">{item.value}</dt>
              <dd className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.label}</dd>
            </FadeIn>
          ))}
        </dl>
      </Container>
    </div>
  );
}
