// src/components/layout/lang-switcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils/cn';
import type { Locale } from '@/i18n/routing';

export function LangSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center rounded-full border border-border p-1 text-xs">
      {(['tr', 'en'] as const).map(item => (
        <button
          key={item}
          type="button"
          onClick={() => switchLocale(item)}
          className={cn(
            'rounded-full px-2.5 py-1 uppercase transition-colors',
            locale === item ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
