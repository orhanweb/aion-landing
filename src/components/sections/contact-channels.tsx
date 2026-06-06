// src/components/sections/contact-channels.tsx
import { Link } from '@/i18n/navigation';
import { CalendlyEmbed } from '@/components/integrations/calendly-embed';
import { MockDataBanner } from '@/components/ui/mock-data-banner';
import { MonoLabel } from '@/components/ui/mono-label';
import { getSiteConfig } from '@/lib/site';
import { getTranslations, getLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

export async function ContactChannels() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('contact');
  const site = getSiteConfig(locale);
  const contact = site.contact;

  return (
    <div className="mt-12 space-y-12">
      {site.features.showMockBanner ? <MockDataBanner message={t('mockNotice')} /> : null}

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <MonoLabel className="text-accent">{t('emailLabel')}</MonoLabel>
          <a href={`mailto:${contact.email}`} className="mt-3 block text-lg text-foreground transition-colors hover:text-accent">
            {contact.email}
          </a>
        </div>

        <div>
          <MonoLabel className="text-accent">{t('phoneLabel')}</MonoLabel>
          <a href={`tel:${contact.phoneE164}`} className="mt-3 block text-lg text-foreground transition-colors hover:text-accent">
            {contact.phoneDisplay}
          </a>
        </div>

        <div>
          <MonoLabel className="text-accent">{t('addressLabel')}</MonoLabel>
          <p className="mt-3 text-base text-muted-foreground">{contact.address}</p>
        </div>

        <div>
          <MonoLabel className="text-accent">{t('linkedinLabel')}</MonoLabel>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('linkedinAriaLabel')}
            className="mt-3 block text-lg text-foreground transition-colors hover:text-accent"
          >
            {t('linkedinCta')} →
          </a>
        </div>
      </div>

      <p className="font-mono-label text-[0.625rem] text-muted-foreground">{contact.responseTime}</p>

      <div>
        <MonoLabel className="text-accent">{t('calendlyLabel')}</MonoLabel>
        <p className="mt-3 text-sm text-muted-foreground">{t('calendlyDescription')}</p>
        <CalendlyEmbed url={contact.calendlyUrl} label={t('calendlyButton')} className="mt-6" />
      </div>

      <p className="text-sm text-muted-foreground">
        {t('privacyNote')}{' '}
        <Link href="/privacy" className="text-accent transition-colors hover:text-[var(--accent-strong)]">
          {t('privacyLink')}
        </Link>
        {' · '}
        <Link href="/cookies" className="text-accent transition-colors hover:text-[var(--accent-strong)]">
          {t('cookiesLink')}
        </Link>
      </p>
    </div>
  );
}
