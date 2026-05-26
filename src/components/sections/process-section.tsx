// src/components/sections/process-section.tsx
import { Container, Section } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { getTranslations } from 'next-intl/server';

export async function ProcessSection() {
  const t = await getTranslations('process');
  const steps = t.raw('steps') as { title: string; description: string }[];

  return (
    <Section id="approach" className="border-y border-border/60 bg-card/30">
      <Container className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <Badge>{t('eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('description')}</p>
        </div>

        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border bg-background p-6">
              <p className="text-sm font-medium text-primary">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
