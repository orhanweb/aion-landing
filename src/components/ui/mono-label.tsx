// src/components/ui/mono-label.tsx
import { cn } from '@/lib/utils/cn';
import { type HTMLAttributes } from 'react';

export function MonoLabel({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('font-mono-label text-muted-foreground', className)} {...props} />;
}
