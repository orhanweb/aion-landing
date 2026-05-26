// src/components/sections/value-bullets.tsx
import { getTranslations } from 'next-intl/server';

export async function ValueBullets() {
  const t = await getTranslations('hero');
  const bullets = t.raw('valueBullets') as string[];

  return (
    <ul className="mt-6 space-y-3">
      {bullets.map(bullet => (
        <li key={bullet} className="flex items-start gap-3">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
          <span className="text-sm leading-relaxed text-foreground md:text-base">{bullet}</span>
        </li>
      ))}
    </ul>
  );
}
