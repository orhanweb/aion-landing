// src/components/ui/container.tsx
import { cn } from '@/lib/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { type HTMLAttributes } from 'react';

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8', className)} {...props} />;
}

const sectionVariants = cva('relative', {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      elevated: 'bg-[var(--ink-elevated)] text-foreground',
      paper: 'bg-paper text-paper-foreground'
    },
    spacing: {
      default: 'py-24 md:py-32 lg:py-40',
      compact: 'py-16 md:py-20',
      none: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    spacing: 'default'
  }
});

export type SectionProps = HTMLAttributes<HTMLElement> & VariantProps<typeof sectionVariants>;

export function Section({ className, variant, spacing, ...props }: SectionProps) {
  return <section className={cn(sectionVariants({ variant, spacing }), className)} {...props} />;
}
