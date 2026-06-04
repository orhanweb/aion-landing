// src/components/motion/audit-readiness-console.tsx
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

type AuditReadinessConsoleProps = {
  className?: string;
};

type PreviewStep = {
  label: string;
  status: string;
  summary: string;
};

export async function AuditReadinessConsole({ className }: AuditReadinessConsoleProps) {
  const t = await getTranslations('hero.preview');
  const steps = t.raw('steps') as PreviewStep[];
  const outputs = t.raw('outputs') as string[];

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg border border-border bg-card p-5 shadow-[0_24px_80px_-48px_rgba(184,149,106,0.55)]',
        className
      )}
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(184,149,106,0.16),transparent_34%)]" />
      <div aria-hidden className="absolute right-0 top-0 h-36 w-36 translate-x-12 -translate-y-12 rounded-full border border-accent/20" />
      <div aria-hidden className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-transparent via-border to-transparent" />
      <div aria-hidden className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono-label text-[0.625rem] text-accent">{t('title')}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{t('subtitle')}</p>
          </div>
          <div className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono-label text-[0.5625rem] text-accent">{t('badge')}</div>
        </div>

        <div className="mt-8 rounded-sm border border-border bg-background/30 p-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-display text-5xl leading-none text-foreground">{t('areasCount')}</p>
              <p className="mt-2 font-mono-label text-[0.5625rem] leading-relaxed text-muted-foreground">{t('areasLabel')}</p>
            </div>
            <p className="max-w-40 text-right text-xs leading-relaxed text-muted-foreground">{t('summary')}</p>
          </div>
        </div>

        <div className="mt-5 grid gap-8">
          <div className="grid items-center gap-7">
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={step.label} className="rounded-sm border border-border bg-background/40 p-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono-label text-[0.5625rem] text-accent">{String(index + 1).padStart(2, '0')}</span>
                      <p className="text-sm text-foreground">{step.label}</p>
                    </div>
                    <span className="font-mono-label text-[0.5625rem] text-accent">{step.status}</span>
                  </div>
                  <p className="mt-2 pl-8 text-xs leading-relaxed text-muted-foreground">{step.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-accent/20 bg-accent/10 p-4">
            <p className="font-mono-label text-[0.5625rem] text-accent">{t('outputsTitle')}</p>
            <ul className="mt-3 space-y-2">
              {outputs.map(item => (
                <li key={item} className="flex items-center gap-2 text-xs leading-relaxed text-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
