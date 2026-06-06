// src/components/layout/site-footer.tsx
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { MonoLabel } from '@/components/ui/mono-label';
import { getServices } from '@/lib/content/services';
import { getSiteConfig } from '@/lib/site';
import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

export async function SiteFooter() {
  const t = await getTranslations('footer');
  const locale = (await getLocale()) as Locale;
  const site = getSiteConfig(locale);
  const contact = site.contact;
  const services = getServices(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[var(--ink-elevated)] py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">{t('tagline')}</p>
          </div>

          <nav aria-label={t('columns.services')}>
            <MonoLabel className="mb-4 block text-foreground">{t('columns.services')}</MonoLabel>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              {services.map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="transition-colors hover:text-foreground">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t('columns.company')}>
            <MonoLabel className="mb-4 block text-foreground">{t('columns.company')}</MonoLabel>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  {t('columns.companyLinks.about')}
                </Link>
              </li>
              <li>
                <Link href="/approach" className="transition-colors hover:text-foreground">
                  {t('columns.companyLinks.approach')}
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="transition-colors hover:text-foreground">
                  {t('columns.companyLinks.assessment')}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={t('columns.legal')}>
            <MonoLabel className="mb-4 block text-foreground">{t('columns.legal')}</MonoLabel>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-foreground">
                  {t('columns.legalLinks.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="transition-colors hover:text-foreground">
                  {t('columns.legalLinks.cookies')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-foreground">
                  {t('columns.legalLinks.contact')}
                </Link>
              </li>
            </ul>
            <a href={`mailto:${contact.email}`} className="mt-4 block text-sm text-foreground transition-colors hover:text-accent">
              {contact.email}
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono-label text-muted-foreground">{t('copyright', { year })}</p>
          <p className="font-mono-label text-[0.625rem] text-muted-foreground">{t('legalNotice')}</p>
        </div>
      </Container>
    </footer>
  );
}
