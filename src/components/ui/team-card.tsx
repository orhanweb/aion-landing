// src/components/ui/team-card.tsx
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { InteractiveCardShell, interactiveCardSurfaceClassName } from '@/components/ui/interactive-card';
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import { personKnowsAboutTopics } from '@/lib/content/authority';
import type { TeamMember } from '@/lib/content/team';

type TeamCardProps = {
  member: TeamMember;
  expertiseLabel: string;
  linkedinLabel: string;
  linkedinAriaLabel: string;
  profileLinkAriaLabel?: string;
};

type TeamCardBodyProps = {
  member: TeamMember;
  expertiseLabel: string;
  expertiseTopics: string[];
};

function TeamCardBody({ member, expertiseLabel, expertiseTopics }: TeamCardBodyProps) {
  return (
    <>
      <div className="size-24 shrink-0 overflow-hidden rounded-full border border-border bg-muted sm:size-28">
        <Image
          src={member.photo}
          alt={member.name}
          width={112}
          height={112}
          className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
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
    </>
  );
}

export function TeamCard({ member, expertiseLabel, linkedinLabel, linkedinAriaLabel, profileLinkAriaLabel }: TeamCardProps) {
  const expertiseTopics = personKnowsAboutTopics(member);
  const body = <TeamCardBody member={member} expertiseLabel={expertiseLabel} expertiseTopics={expertiseTopics} />;

  return (
    <InteractiveCardShell>
      <article
        id={`team-${member.slug}`}
        className={interactiveCardSurfaceClassName(
          cn(
            'flex h-full flex-col p-6',
            member.profilePath &&
              'group-hover:border-accent/40 group-hover:bg-linear-to-br group-hover:from-accent/12 group-hover:via-accent/6 group-hover:to-card'
          )
        )}
      >
        {member.profilePath && profileLinkAriaLabel ? (
          <Link
            href={member.profilePath}
            aria-label={profileLinkAriaLabel}
            className="flex flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            {body}
          </Link>
        ) : (
          <div className="flex flex-1 flex-col">{body}</div>
        )}

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
