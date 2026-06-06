// src/components/layout/mobile-nav.tsx
'use client';

import { useId, useRef, type RefObject } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useFocusTrap } from '@/lib/a11y/use-focus-trap';
import { cn } from '@/lib/utils/cn';

type NavItem = {
  href: '/services' | '/approach' | '/about' | '/contact';
  key: 'services' | 'approach' | 'about' | 'contact';
};

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  navItems: readonly NavItem[];
  menuButtonRef: RefObject<HTMLButtonElement | null>;
};

export function MobileNav({ open, onClose, navItems, menuButtonRef }: MobileNavProps) {
  const t = useTranslations('nav');
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useFocusTrap({
    active: open,
    containerRef: panelRef,
    returnFocusRef: menuButtonRef,
    onEscape: onClose
  });

  if (!open) {
    return null;
  }

  return (
    <div
      ref={panelRef}
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={cn('fixed inset-x-0 top-16 bottom-0 z-40 md:hidden')}
    >
      <div role="presentation" className="absolute inset-0 bg-(--ink)/95 backdrop-blur-sm" onClick={onClose} />

      <nav aria-label={t('mobileNav')} className="relative flex h-full flex-col items-start justify-center gap-8 px-8">
        <h2 id={titleId} className="sr-only">
          {t('mobileMenuTitle')}
        </h2>
        {navItems.map(item => (
          <Link key={item.key} href={item.href} onClick={onClose} className="font-display text-3xl text-foreground">
            {t(item.key)}
          </Link>
        ))}
        <Link href="/assessment" onClick={onClose} className="inline-flex items-center gap-2 font-mono-label text-accent">
          {t('assessment')}
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
        </Link>
      </nav>
    </div>
  );
}
