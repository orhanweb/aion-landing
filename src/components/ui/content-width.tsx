// src/components/ui/content-width.tsx
import { cn } from '@/lib/utils/cn';
import { type HTMLAttributes } from 'react';

type ContentWidthProps = HTMLAttributes<HTMLDivElement>;

/** Reading column — legal, contact, long-form prose blocks. */
export function Prose({ className, ...props }: ContentWidthProps) {
  return <div className={cn('mx-auto w-full max-w-[var(--layout-prose)]', className)} {...props} />;
}

/** Form and wizard column — assessment, focused tasks. */
export function Narrow({ className, ...props }: ContentWidthProps) {
  return <div className={cn('mx-auto w-full max-w-[var(--layout-narrow)]', className)} {...props} />;
}

/** Optional line-length cap inside shell sections — hero intros, CTA copy. */
export function TextMeasure({ className, ...props }: ContentWidthProps) {
  return <div className={cn('max-w-[var(--layout-prose)]', className)} {...props} />;
}
