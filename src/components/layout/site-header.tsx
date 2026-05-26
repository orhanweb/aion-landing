// src/components/layout/site-header.tsx
import { Link } from '@/i18n/navigation';
import { LangSwitcher } from '@/components/layout/lang-switcher';
import { Container } from '@/components/ui/container';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

const navItems = [
  { href: '/hizmetler' as const, key: 'services' as const },
  { href: '/yaklasimimiz' as const, key: 'approach' as const },
  { href: '/hakkimizda' as const, key: 'about' as const },
  { href: '/iletisim' as const, key: 'contact' as const }
];

export async function SiteHeader() {
  const t = await getTranslations('nav');

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          AION
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navItems.map(item => (
            <Link key={item.key} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher />
          <Link href="/degerlendirme" className={cn(buttonVariants({ size: 'sm' }), 'hidden sm:inline-flex')}>
            {t('assessment')}
          </Link>
        </div>
      </Container>
    </header>
  );
}
