// src/components/layout/sticky-header-cta.tsx
'use client';

import { HeaderCtaLink } from '@/components/layout/header-cta-link';
import { useScrollThreshold } from '@/lib/a11y/use-scroll-threshold';
import { cn } from '@/lib/utils/cn';

type StickyHeaderCtaProps = {
  label: string;
};

export function StickyHeaderCta({ label }: StickyHeaderCtaProps) {
  const visible = useScrollThreshold(320);

  return (
    <span className="hidden lg:contents" inert={visible ? undefined : true}>
      <HeaderCtaLink
        label={label}
        className={cn('transition-all duration-300', visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-1 opacity-0')}
      />
    </span>
  );
}
