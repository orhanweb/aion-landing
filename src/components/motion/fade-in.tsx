// src/components/motion/fade-in.tsx
'use client';

import { motion, type HTMLMotionProps, type ViewportOptions } from 'motion/react';
import { defaultScrollViewport, revealHidden, revealTransition, revealVisible } from '@/components/motion/motion-config';
import { useReducedMotion } from '@/components/motion/use-reduced-motion';
import { cn } from '@/lib/utils/cn';

type FadeInProps = {
  delay?: number;
  viewport?: ViewportOptions;
  as?: 'div' | 'li';
} & Omit<HTMLMotionProps<'div'>, 'delay' | 'viewport' | 'as'>;

export function FadeIn(props: FadeInProps) {
  const { children, className, delay = 0, viewport, as = 'div', ...rest } = props;
  const reduced = useReducedMotion();
  const animationProps = {
    initial: reduced ? false : revealHidden,
    whileInView: reduced ? undefined : revealVisible,
    viewport: { ...defaultScrollViewport, ...viewport },
    transition: revealTransition(delay),
    className: cn(className)
  };

  if (as === 'li') {
    return (
      <motion.li {...animationProps} {...(rest as HTMLMotionProps<'li'>)}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div {...animationProps} {...rest}>
      {children}
    </motion.div>
  );
}
