// src/components/motion/stagger.tsx
'use client';

import { motion } from 'motion/react';
import { revealEase, revealHidden, revealVisible } from '@/components/motion/motion-config';
import { useReducedMotion } from '@/components/motion/use-reduced-motion';
import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function Stagger({ children, className, stagger = 0.08 }: StaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } }
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: revealHidden,
        visible: {
          ...revealVisible,
          transition: { duration: 0.5, ease: revealEase }
        }
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
