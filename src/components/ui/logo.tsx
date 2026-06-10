// src/components/ui/logo.tsx
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils/cn';

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Link href="/" aria-label="AION home" className={cn('group inline-flex items-center gap-2.5', className)}>
      <Image src="/aion-mark.svg" alt="" width={40} height={40} priority={priority} className="h-10 w-10 shrink-0" />
      <span className="font-display text-[clamp(1.375rem,1.125rem+0.75vw,1.75rem)] font-semibold leading-none tracking-tight text-foreground transition-colors group-hover:text-accent">
        AION
      </span>
    </Link>
  );
}
