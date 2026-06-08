// src/components/layout/header-cta-link.tsx
import { Link } from '@/i18n/navigation';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import type { ComponentProps } from 'react';

type HeaderCtaLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'children'> & {
  label: string;
};

export function HeaderCtaLink({ label, className, ...props }: HeaderCtaLinkProps) {
  return (
    <Link href="/assessment" className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), className)} {...props}>
      {label}
    </Link>
  );
}
