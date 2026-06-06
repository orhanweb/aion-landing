// src/components/sections/team-section.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { TeamCard } from '@/components/ui/team-card';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { getTeamMembers } from '@/lib/content/team';
import { getTranslations, getLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type TeamSectionProps = {
  id?: string;
};

export async function TeamSection({ id }: TeamSectionProps = {}) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('team');
  const members = getTeamMembers(locale);

  return (
    <Section id={id}>
      <Container>
        <FadeIn>
          <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
          <h2 className="font-display mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-tight tracking-tight">{t('title')}</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{t('description')}</p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <FadeIn key={member.slug} delay={index * 0.08}>
              <TeamCard
                member={member}
                linkedinLabel={t('linkedinCta', { name: member.name })}
                linkedinAriaLabel={t('linkedinAria', { name: member.name })}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
