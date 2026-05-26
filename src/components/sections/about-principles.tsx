// src/components/sections/about-principles.tsx
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/motion/fade-in';
import { MonoLabel } from '@/components/ui/mono-label';
import { getAboutContent } from '@/lib/content/about';
import type { Locale } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

type AboutPrinciplesProps = {
  locale: Locale;
};

export async function AboutPrinciples({ locale }: AboutPrinciplesProps) {
  const t = await getTranslations('about');
  const content = getAboutContent(locale);

  return (
    <div className="mt-16 space-y-16">
      <FadeIn>
        <MonoLabel className="text-accent">{t('missionLabel')}</MonoLabel>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{content.mission}</p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <MonoLabel className="text-accent">{t('storyLabel')}</MonoLabel>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{content.story}</p>
      </FadeIn>

      <div>
        <FadeIn>
          <MonoLabel className="text-accent">{t('principlesLabel')}</MonoLabel>
          <h2 className="font-display mt-4 text-2xl tracking-tight md:text-3xl">{t('principlesTitle')}</h2>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {content.principles.map((principle, index) => (
            <FadeIn key={principle.title} delay={index * 0.05}>
              <article className="h-full rounded-lg border border-border bg-[var(--ink-elevated)] p-6 md:p-8">
                <h3 className="font-display text-xl tracking-tight text-foreground">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn>
        <p className="text-sm text-muted-foreground">
          {t('approachLinkPrefix')}{' '}
          <Link href="/approach" className="font-mono-label text-accent transition-colors hover:text-[var(--accent-strong)]">
            {t('approachLink')} →
          </Link>
        </p>
      </FadeIn>
    </div>
  );
}
