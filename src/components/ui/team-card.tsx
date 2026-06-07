// src/components/ui/team-card.tsx
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { InteractiveCardShell, interactiveCardSurfaceClassName } from '@/components/ui/interactive-card';
import { MonoLabel } from '@/components/ui/mono-label';
import { personKnowsAboutTopics } from '@/lib/schema/team-authority';
import type { TeamMember } from '@/lib/content/team';

type TeamCardProps = {
  member: TeamMember;
  expertiseLabel: string;
  linkedinLabel: string;
  linkedinAriaLabel: string;
};

export function TeamCard({ member, expertiseLabel, linkedinLabel, linkedinAriaLabel }: TeamCardProps) {
  const expertiseTopics = personKnowsAboutTopics(member);

  return (
    <InteractiveCardShell>
      <article id={`team-${member.slug}`} className={interactiveCardSurfaceClassName('flex h-full flex-col p-6')}>
        <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-border bg-muted sm:size-28">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 96px, 112px"
          />
        </div>

        <div className="mt-5">
          <MonoLabel className="text-accent">{member.role}</MonoLabel>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">{member.name}</h3>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>

        {expertiseTopics.length > 0 ? (
          <div className="mt-5">
            <h4 id={`team-${member.slug}-expertise-label`} className="font-mono-label text-xs text-muted-foreground">
              {expertiseLabel}
            </h4>
            <ul aria-labelledby={`team-${member.slug}-expertise-label`} className="mt-3 flex flex-wrap gap-2">
              {expertiseTopics.map(topic => (
                <li key={topic}>
                  <span className="inline-flex rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium tracking-tight text-foreground">
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkedinAriaLabel}
          className="mt-auto inline-flex items-center gap-2 pt-5 font-mono-label text-muted-foreground transition-colors hover:text-accent"
        >
          {linkedinLabel}
          <ExternalLink aria-hidden="true" className="size-4" strokeWidth={1.75} />
        </a>
      </article>
    </InteractiveCardShell>
  );
}
