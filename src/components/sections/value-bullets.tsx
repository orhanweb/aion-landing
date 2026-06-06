// src/components/sections/value-bullets.tsx
import { CheckCircle2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function ValueBullets() {
  const t = await getTranslations('hero');
  const bullets = t.raw('valueBullets') as string[];

  return (
    <ul className="mt-6 space-y-3">
      {bullets.map(bullet => (
        <li key={bullet} className="flex items-start gap-3">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.75} />
          <span className="text-sm leading-relaxed text-foreground md:text-base">{bullet}</span>
        </li>
      ))}
    </ul>
  );
}
