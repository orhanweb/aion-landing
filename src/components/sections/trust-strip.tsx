// src/components/sections/trust-strip.tsx
import { Container } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { getTranslations } from 'next-intl/server';

export async function TrustStrip() {
  const t = await getTranslations('trust');
  const frameworks = t.raw('frameworks') as string[];

  return (
    <div className="border-y border-border bg-card py-5">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8 lg:gap-12">
          <MonoLabel className="shrink-0 text-accent">{t('label')}</MonoLabel>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-8 lg:gap-x-12">
            {frameworks.map(framework => (
              <li key={framework}>
                <span className="font-mono-label text-muted-foreground">{framework}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
