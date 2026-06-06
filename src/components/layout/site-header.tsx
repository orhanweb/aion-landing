// src/components/layout/site-header.tsx
'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { LangSwitcher } from '@/components/layout/lang-switcher';
import { MobileNav } from '@/components/layout/mobile-nav';
import { StickyHeaderCta } from '@/components/layout/sticky-header-cta';
import { ScrollHeader } from '@/components/motion/scroll-header';
import { Logo } from '@/components/ui/logo';
import { Container } from '@/components/ui/container';

const navItems = [
  { href: '/services' as const, key: 'services' as const },
  { href: '/approach' as const, key: 'approach' as const },
  { href: '/about' as const, key: 'about' as const },
  { href: '/contact' as const, key: 'contact' as const }
];

export function SiteHeader() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [trackedPathname, setTrackedPathname] = useState(pathname);

  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    if (open) {
      setOpen(false);
    }
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <ScrollHeader>
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label={t('mainNav')} className="hidden items-center gap-8 md:flex">
            {navItems.map(item => (
              <Link
                key={item.key}
                href={item.href}
                className="font-mono-label text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LangSwitcher />
            <Link
              href="/assessment"
              className="hidden font-mono-label text-accent transition-colors hover:text-[var(--accent-strong)] sm:inline-flex lg:hidden"
            >
              {t('assessment')} →
            </Link>
            <StickyHeaderCta label={t('stickyCta')} />
            <button
              ref={menuButtonRef}
              type="button"
              className="font-mono-label text-foreground md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(value => !value)}
            >
              {open ? t('menuClose') : t('menuOpen')}
            </button>
          </div>
        </Container>
      </ScrollHeader>

      <div className="h-16" aria-hidden />

      <MobileNav open={open} onClose={closeMenu} navItems={navItems} menuButtonRef={menuButtonRef} />
    </>
  );
}
