// src/components/sections/contact-channels.tsx
import { Link } from '@/i18n/navigation';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { MonoLabel } from '@/components/ui/mono-label';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { getSiteConfig } from '@/lib/site';
import { buildWhatsAppUrl } from '@/lib/site/whatsapp';
import { getTranslations, getLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

export async function ContactChannels() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('contact');
  const site = getSiteConfig(locale);
  const contact = site.contact;
  const whatsappUrl = buildWhatsAppUrl(contact.whatsappE164, t('whatsappPrefill'));

  return (
    <div className="mt-12 space-y-12">
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="flex gap-4">
          <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.75} />
          <div>
            <MonoLabel className="text-accent">{t('emailLabel')}</MonoLabel>
            <a href={`mailto:${contact.email}`} className="mt-3 block text-lg text-foreground transition-colors hover:text-accent">
              {contact.email}
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <WhatsAppIcon className="mt-1 text-accent" />
          <div>
            <MonoLabel className="text-accent">{t('whatsappLabel')}</MonoLabel>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('whatsappAriaLabel', { number: contact.whatsappDisplay })}
              className="mt-3 block text-lg text-foreground transition-colors hover:text-accent"
            >
              {t('whatsappCta')}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{contact.whatsappDisplay}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.75} />
          <div>
            <MonoLabel className="text-accent">{t('addressLabel')}</MonoLabel>
            <p className="mt-3 text-base text-muted-foreground">{contact.address}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <ExternalLink aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.75} />
          <div>
            <MonoLabel className="text-accent">{t('linkedinLabel')}</MonoLabel>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('linkedinAriaLabel')}
              className="mt-3 block text-lg text-foreground transition-colors hover:text-accent"
            >
              {t('linkedinCta')}
            </a>
          </div>
        </div>
      </div>

      <p className="font-mono-label text-muted-foreground">{contact.responseTime}</p>

      <p className="text-sm text-muted-foreground">
        {t('privacyNote')}{' '}
        <Link href="/privacy" className="text-accent transition-colors hover:text-(--accent-strong)">
          {t('privacyLink')}
        </Link>
        {' · '}
        <Link href="/cookies" className="text-accent transition-colors hover:text-(--accent-strong)">
          {t('cookiesLink')}
        </Link>
      </p>
    </div>
  );
}
