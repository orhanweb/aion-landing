// src/components/layout/site-header.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LangSwitcher } from '@/components/layout/lang-switcher';
import { ScrollHeader } from '@/components/motion/scroll-header';
import { Logo } from '@/components/ui/logo';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils/cn';

const navItems = [
  { href: '/services' as const, key: 'services' as const },
  { href: '/approach' as const, key: 'approach' as const },
  { href: '/about' as const, key: 'about' as const },
  { href: '/contact' as const, key: 'contact' as const }
];

export function SiteHeader() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollHeader>
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {navItems.map(item => (
              <Link
                key={item.key}
                href={item.href}
                className="font-mono-label text-[0.625rem] text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LangSwitcher />
            <Link
              href="/assessment"
              className="hidden font-mono-label text-[0.625rem] text-accent transition-colors hover:text-[var(--accent-strong)] sm:inline-flex"
            >
              {t('assessment')} →
            </Link>
            <button
              type="button"
              className="font-mono-label text-[0.625rem] text-foreground md:hidden"
              aria-expanded={open}
              aria-label={open ? t('menuClose') : t('menuOpen')}
              onClick={() => setOpen(v => !v)}
            >
              {open ? t('menuClose') : t('menuOpen')}
            </button>
          </div>
        </Container>
      </ScrollHeader>

      <div className="h-16" aria-hidden />

      <div
        className={cn(
          'fixed inset-0 z-40 bg-[var(--ink)]/95 backdrop-blur-sm transition-opacity md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col items-start justify-center gap-8 px-8">
          {navItems.map(item => (
            <Link key={item.key} href={item.href} onClick={() => setOpen(false)} className="font-display text-3xl text-foreground">
              {t(item.key)}
            </Link>
          ))}
          <Link href="/assessment" onClick={() => setOpen(false)} className="font-mono-label text-accent">
            {t('assessment')} →
          </Link>
        </nav>
      </div>
    </>
  );
}
