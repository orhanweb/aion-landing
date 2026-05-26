// src/components/motion/fade-in.tsx
'use client';

import { motion, type HTMLMotionProps } from 'motion/react';
import { useReducedMotion } from '@/components/motion/use-reduced-motion';
import { cn } from '@/lib/utils/cn';

type FadeInProps = HTMLMotionProps<'div'> & {
  delay?: number;
};

export function FadeIn({ children, className, delay = 0, ...props }: FadeInProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
