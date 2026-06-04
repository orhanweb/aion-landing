// src/components/layout/sticky-header-cta.tsx
'use client';

import { Link } from '@/i18n/navigation';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import { useScroll, useMotionValueEvent } from 'motion/react';
import { useRef, useState } from 'react';

type StickyHeaderCtaProps = {
  label: string;
};

export function StickyHeaderCta({ label }: StickyHeaderCtaProps) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    const nextVisible = latest > 320;

    if (nextVisible !== visibleRef.current) {
      visibleRef.current = nextVisible;
      setVisible(nextVisible);
    }
  });

  return (
    <Link
      href="/assessment"
      className={cn(
        buttonVariants({ variant: 'primary', size: 'sm' }),
        'hidden transition-all duration-300 lg:inline-flex',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-1 opacity-0'
      )}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      {label}
    </Link>
  );
}
