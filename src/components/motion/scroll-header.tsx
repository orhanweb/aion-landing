// src/components/motion/scroll-header.tsx
'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type ScrollHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollHeader({ children, className }: ScrollHeaderProps) {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 80], ['rgba(10, 11, 13, 0)', 'rgba(10, 11, 13, 0.95)']);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header style={{ backgroundColor }} className={cn('fixed inset-x-0 top-0 z-50', className)}>
      <motion.div style={{ opacity: borderOpacity }} className="absolute inset-x-0 bottom-0 h-px bg-border" />
      {children}
    </motion.header>
  );
}
