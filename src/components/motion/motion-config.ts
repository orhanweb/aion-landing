// src/components/motion/motion-config.ts
import type { Transition } from 'motion/react';

export const revealEase = [0.25, 0.1, 0.25, 1] as const;

export const revealHidden = { opacity: 0, y: 20 } as const;

export const revealVisible = { opacity: 1, y: 0 } as const;

export function revealTransition(delay = 0): Transition {
  return {
    duration: 0.5,
    delay,
    ease: revealEase
  };
}

/** Scroll reveal: element must enter viewport meaningfully before animating. */
export const defaultScrollViewport = {
  once: true,
  amount: 0.4,
  margin: '0px 0px -10% 0px'
} as const;

export type ScrollViewportOptions = typeof defaultScrollViewport;
