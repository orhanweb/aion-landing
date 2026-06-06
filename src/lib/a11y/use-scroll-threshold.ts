// src/lib/a11y/use-scroll-threshold.ts
'use client';

import { useSyncExternalStore } from 'react';

const scrollListeners = new Set<() => void>();
let scrollY = 0;

function handleScroll() {
  scrollY = window.scrollY;
  scrollListeners.forEach(listener => listener());
}

function subscribe(listener: () => void) {
  if (scrollListeners.size === 0) {
    scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  scrollListeners.add(listener);

  return () => {
    scrollListeners.delete(listener);

    if (scrollListeners.size === 0) {
      window.removeEventListener('scroll', handleScroll);
    }
  };
}

export function useScrollY() {
  return useSyncExternalStore(
    subscribe,
    () => scrollY,
    () => 0
  );
}

export function useScrollThreshold(threshold: number) {
  return useSyncExternalStore(
    subscribe,
    () => scrollY > threshold,
    () => false
  );
}
