// src/components/ui/mock-data-banner.tsx
import { cn } from '@/lib/utils/cn';

type MockDataBannerProps = {
  message: string;
  className?: string;
};

export function MockDataBanner({ message, className }: MockDataBannerProps) {
  return (
    <p
      className={cn(
        'rounded-md border border-border bg-[var(--ink-elevated)] px-4 py-3 font-mono-label text-muted-foreground',
        className
      )}
      role="status"
    >
      {message}
    </p>
  );
}
