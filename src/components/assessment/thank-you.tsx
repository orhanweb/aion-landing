// src/components/assessment/thank-you.tsx
'use client';

import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import { useTranslations } from 'next-intl';

type ThankYouProps = {
  calendlyUrl: string;
  responseTime: string;
};

export function ThankYou({ calendlyUrl, responseTime }: ThankYouProps) {
  const t = useTranslations('assessment');

  return (
    <Card>
      <CardHeader>
        <MonoLabel className="text-accent">{t('thankYou.eyebrow')}</MonoLabel>
        <CardTitle className="font-display text-2xl">{t('thankYou.title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">{t('thankYou.description', { responseTime })}</p>
        <div className="flex flex-wrap gap-3">
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}>
            {t('thankYou.calendlyCta')}
          </a>
        </div>
        <p className="font-mono-label text-[0.625rem] text-muted-foreground">{t('thankYou.privacyNote')}</p>
      </CardContent>
    </Card>
  );
}
