// src/components/motion/scroll-header.tsx
'use client';

import { type ReactNode } from 'react';
import { useScrollThreshold } from '@/lib/a11y/use-scroll-threshold';
import { cn } from '@/lib/utils/cn';

type ScrollHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollHeader({ children, className }: ScrollHeaderProps) {
  const scrolled = useScrollThreshold(80);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300',
        scrolled ? 'border-b border-border bg-(--ink)/95 backdrop-blur-sm' : 'border-b border-transparent bg-transparent',
        className
      )}
    >
      {children}
    </header>
  );
}
