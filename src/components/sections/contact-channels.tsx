// src/components/sections/contact-channels.tsx
import { Link } from '@/i18n/navigation';
import { CalendarDays, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { CalendlyEmbed } from '@/components/integrations/calendly-embed';
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
          <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.75} />
          <div>
            <MonoLabel className="text-accent">{t('phoneLabel')}</MonoLabel>
            <a href={`tel:${contact.phoneE164}`} className="mt-3 block text-lg text-foreground transition-colors hover:text-accent">
              {contact.phoneDisplay}
            </a>
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

      <div>
        <div className="flex items-center gap-3">
          <CalendarDays aria-hidden="true" className="size-5 text-accent" strokeWidth={1.75} />
          <MonoLabel className="text-accent">{t('calendlyLabel')}</MonoLabel>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{t('calendlyDescription')}</p>
        <CalendlyEmbed url={contact.calendlyUrl} label={t('calendlyButton')} className="mt-6" />
      </div>

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
