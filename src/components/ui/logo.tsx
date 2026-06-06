// src/components/ui/logo.tsx
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils/cn';

type LogoProps = {
  className?: string;
  subtitle?: string;
};

export function Logo({ className, subtitle = 'Oversight Network' }: LogoProps) {
  return (
    <Link href="/" aria-label="AION home" className={cn('group inline-flex items-center gap-3', className)}>
      <Image src="/aion-mark.svg" alt="" width={40} height={40} priority className="h-10 w-10 shrink-0" />
      <span className="inline-flex flex-col gap-0.5">
        <span className="font-display text-xl tracking-tight text-foreground transition-colors group-hover:text-accent">AION</span>
        <span className="font-mono-label hidden text-[0.6rem] text-muted-foreground sm:block">{subtitle}</span>
      </span>
    </Link>
  );
}
