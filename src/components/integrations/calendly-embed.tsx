// src/components/integrations/calendly-embed.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';

type CalendlyEmbedProps = {
  url: string;
  label: string;
  className?: string;
};

export function CalendlyEmbed({ url, label, className }: CalendlyEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <Button type="button" variant="secondary" size="lg" className={className} onClick={() => setLoaded(true)}>
        {label}
      </Button>
    );
  }

  return (
    <div className={cn('overflow-hidden rounded-lg border border-border', className)}>
      <iframe title="Schedule a meeting" src={url} className="h-[630px] w-full bg-background" loading="lazy" />
    </div>
  );
}
