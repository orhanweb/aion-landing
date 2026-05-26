// src/components/motion/fade-in.tsx
'use client';

import { motion, type HTMLMotionProps, type ViewportOptions } from 'motion/react';
import { defaultScrollViewport, revealHidden, revealTransition, revealVisible } from '@/components/motion/motion-config';
import { useReducedMotion } from '@/components/motion/use-reduced-motion';
import { cn } from '@/lib/utils/cn';

type FadeInProps = HTMLMotionProps<'div'> & {
  delay?: number;
  viewport?: ViewportOptions;
};

export function FadeIn({ children, className, delay = 0, viewport, ...props }: FadeInProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : revealHidden}
      whileInView={reduced ? undefined : revealVisible}
      viewport={{ ...defaultScrollViewport, ...viewport }}
      transition={revealTransition(delay)}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
