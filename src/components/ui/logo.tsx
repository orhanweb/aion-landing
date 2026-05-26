// src/components/ui/logo.tsx
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils/cn';

type LogoProps = {
  className?: string;
  subtitle?: string;
};

export function Logo({ className, subtitle = 'Oversight Network' }: LogoProps) {
  return (
    <Link href="/" className={cn('group inline-flex flex-col gap-0.5', className)}>
      <span className="font-display text-xl tracking-tight text-foreground transition-colors group-hover:text-accent">AION</span>
      <span className="font-mono-label hidden text-[0.6rem] text-muted-foreground sm:block">{subtitle}</span>
    </Link>
  );
}
