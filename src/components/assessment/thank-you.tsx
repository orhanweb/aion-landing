// src/components/assessment/thank-you.tsx
'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MonoLabel } from '@/components/ui/mono-label';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

type ThankYouProps = {
  responseTime: string;
};

export function ThankYou({ responseTime }: ThankYouProps) {
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
        <p className="font-mono-label text-muted-foreground">{t('thankYou.privacyNote')}</p>
      </CardContent>
    </Card>
  );
}
