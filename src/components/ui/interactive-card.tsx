// src/components/ui/interactive-card.tsx
import { cn } from '@/lib/utils/cn';
import type { HTMLAttributes, ReactNode } from 'react';

type InteractiveCardShellProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function InteractiveCardShell({ children, className, ...props }: InteractiveCardShellProps) {
  return (
    <div className={cn('group relative h-full', className)} {...props}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px -z-10 rounded-xl bg-accent/0 opacity-0 blur-2xl transition-all duration-500 group-hover:bg-accent/30 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}

export function interactiveCardSurfaceClassName(className?: string) {
  return cn(
    'relative overflow-hidden rounded-lg border border-border bg-[var(--ink-elevated)]',
    'transition-all duration-300',
    'group-hover:-translate-y-1 group-hover:border-accent/25',
    'group-hover:shadow-[0_16px_48px_-20px_rgba(184,149,106,0.55)]',
    className
  );
}
