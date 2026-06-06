// src/components/layout/lang-switcher.tsx
'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils/cn';
import type { Locale } from '@/i18n/routing';

const localeLabels: Record<Locale, string> = {
  tr: 'TR',
  en: 'EN'
};

export function LangSwitcher() {
  const locale = useLocale() as Locale;
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale: Locale = locale === 'tr' ? 'en' : 'tr';

  function switchLocale() {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <button
      type="button"
      onClick={switchLocale}
      aria-label={locale === 'tr' ? t('switchToEnglish') : t('switchToTurkish')}
      className={cn(
        'font-mono-label inline-flex min-h-8 min-w-8 items-center justify-center rounded-md px-2.5 py-1.5',
        'text-muted-foreground transition-[color,background-color] duration-200',
        'hover:bg-[rgba(238,234,227,0.06)] hover:text-foreground',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)]'
      )}
    >
      {localeLabels[nextLocale]}
    </button>
  );
}
