// src/components/layout/sticky-header-cta.tsx
'use client';

import { Link } from '@/i18n/navigation';
import { useScrollThreshold } from '@/lib/a11y/use-scroll-threshold';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';

type StickyHeaderCtaProps = {
  label: string;
};

export function StickyHeaderCta({ label }: StickyHeaderCtaProps) {
  const visible = useScrollThreshold(320);

  return (
    <span className="hidden lg:contents" inert={visible ? undefined : true}>
      <Link
        href="/assessment"
        className={cn(
          buttonVariants({ variant: 'primary', size: 'sm' }),
          'inline-flex transition-all duration-300',
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-1 opacity-0'
        )}
      >
        {label}
      </Link>
    </span>
  );
}
