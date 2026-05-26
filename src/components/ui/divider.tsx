// src/components/ui/divider.tsx
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';

type DividerProps = {
  label?: string;
  className?: string;
};

export function Divider({ label, className }: DividerProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div className="h-px flex-1 bg-border" />
      {label ? <MonoLabel>{label}</MonoLabel> : null}
      {label ? <div className="h-px flex-1 bg-border" /> : null}
    </div>
  );
}
