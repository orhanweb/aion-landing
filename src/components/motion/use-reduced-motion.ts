// src/components/motion/use-reduced-motion.ts
'use client';

import { useSyncExternalStore } from 'react';

function getReducedMotionPreference() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getServerSnapshot() {
  return false;
}

function subscribe(listener: () => void) {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', listener);

  return () => media.removeEventListener('change', listener);
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getReducedMotionPreference, getServerSnapshot);
}
