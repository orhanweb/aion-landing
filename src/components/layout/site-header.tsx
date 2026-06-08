// src/components/layout/site-header.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { HeaderCtaLink } from '@/components/layout/header-cta-link';
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

  useEffect(() => {
    const main = document.getElementById('main-content');
    const footer = document.querySelector('footer');
    const backgroundRegions = [main, footer].filter((region): region is HTMLElement => region instanceof HTMLElement);

    for (const region of backgroundRegions) {
      if (open) {
        region.inert = true;
        region.setAttribute('aria-hidden', 'true');
      } else {
        region.inert = false;
        region.removeAttribute('aria-hidden');
      }
    }

    return () => {
      for (const region of backgroundRegions) {
        region.inert = false;
        region.removeAttribute('aria-hidden');
      }
    };
  }, [open]);

  // Close mobile menu when viewport reaches desktop nav (Tailwind lg) so inert/scroll lock cleanup runs.
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');

    function closeOnDesktopNav(event?: MediaQueryListEvent) {
      if (event?.matches ?? media.matches) {
        setOpen(false);
      }
    }

    closeOnDesktopNav();
    media.addEventListener('change', closeOnDesktopNav);

    return () => media.removeEventListener('change', closeOnDesktopNav);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  function isCurrentPath(href: (typeof navItems)[number]['href']) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <ScrollHeader>
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo priority />

          <nav aria-label={t('mainNav')} className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map(item => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isCurrentPath(item.href) ? 'page' : undefined}
                className="font-mono-label text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LangSwitcher />
            <HeaderCtaLink
              label={t('stickyCta')}
              aria-current={pathname === '/assessment' ? 'page' : undefined}
              className="hidden sm:inline-flex lg:hidden"
            />
            <StickyHeaderCta label={t('stickyCta')} />
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex items-center rounded-md p-2 text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-(--ink) lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={t('mobileMenuTitle')}
              onClick={() => setOpen(value => !value)}
            >
              {open ? (
                <X aria-hidden="true" className="size-4" strokeWidth={1.75} />
              ) : (
                <Menu aria-hidden="true" className="size-4" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </Container>
      </ScrollHeader>

      <div className="h-16" aria-hidden />

      <MobileNav open={open} onClose={closeMenu} navItems={navItems} menuButtonRef={menuButtonRef} />
    </>
  );
}
