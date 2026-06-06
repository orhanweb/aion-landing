// src/components/assessment/thank-you.tsx
'use client';

import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import { useTranslations } from 'next-intl';
import { CalendarDays } from 'lucide-react';
import { useEffect, useRef } from 'react';

type ThankYouProps = {
  calendlyUrl: string;
  responseTime: string;
};

export function ThankYou({ calendlyUrl, responseTime }: ThankYouProps) {
  const t = useTranslations('assessment');
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  return (
    <Card role="status" aria-live="polite">
      <CardHeader>
        <MonoLabel className="text-accent">{t('thankYou.eyebrow')}</MonoLabel>
        <h2 ref={titleRef} tabIndex={-1} className="font-display text-2xl tracking-tight outline-none">
          {t('thankYou.title')}
        </h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">{t('thankYou.description', { responseTime })}</p>
        <div className="flex flex-wrap gap-3">
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}>
            {t('thankYou.calendlyCta')}
            <CalendarDays aria-hidden="true" className="size-4" strokeWidth={1.75} />
          </a>
        </div>
        <p className="font-mono-label text-muted-foreground">{t('thankYou.privacyNote')}</p>
      </CardContent>
    </Card>
  );
}
