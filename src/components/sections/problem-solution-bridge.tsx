// src/components/sections/problem-solution-bridge.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

type BridgeItem = {
  title: string;
  description: string;
};

export async function ProblemSolutionBridge() {
  const t = await getTranslations('problemSolution');
  const problems = t.raw('problems') as BridgeItem[];
  const solutions = t.raw('solutions') as BridgeItem[];

  return (
    <Section spacing="compact">
      <Container>
        <FadeIn>
          <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.75rem,3vw,2.75rem)] leading-tight tracking-tight">{t('title')}</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{t('description')}</p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeIn delay={0.05}>
            <BridgeColumn label={t('problemsLabel')} items={problems} tone="signal" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <BridgeColumn label={t('solutionsLabel')} items={solutions} tone="accent" />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

type BridgeColumnProps = {
  label: string;
  items: BridgeItem[];
  tone: 'signal' | 'accent';
};

function BridgeColumn({ label, items, tone }: BridgeColumnProps) {
  const markerClass = tone === 'signal' ? 'border-signal/40 bg-signal/10 text-signal' : 'border-accent/40 bg-accent/10 text-accent';

  return (
    <div className="h-full rounded-lg border border-border bg-card p-6 md:p-8">
      <MonoLabel className={cn(tone === 'signal' ? 'text-signal' : 'text-accent')}>{label}</MonoLabel>
      <ul className="mt-6 space-y-6">
        {items.map((item, index) => (
          <li key={item.title} className="flex gap-4">
            <span
              aria-hidden
              className={cn('mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[0.6875rem]', markerClass)}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-display text-lg leading-snug tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
