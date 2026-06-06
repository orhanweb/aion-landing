// src/components/ui/team-card.tsx
import Image from 'next/image';
import { InteractiveCardShell, interactiveCardSurfaceClassName } from '@/components/ui/interactive-card';
import { MonoLabel } from '@/components/ui/mono-label';
import type { TeamMember } from '@/lib/content/team';

type TeamCardProps = {
  member: TeamMember;
  linkedinLabel: string;
  linkedinAriaLabel: string;
};

export function TeamCard({ member, linkedinLabel, linkedinAriaLabel }: TeamCardProps) {
  return (
    <InteractiveCardShell>
      <article className={interactiveCardSurfaceClassName('flex h-full flex-col p-6')}>
        <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-border bg-[var(--ink-muted)] sm:size-28">
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

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkedinAriaLabel}
          className="mt-5 inline-block font-mono-label text-[0.625rem] text-muted-foreground transition-colors hover:text-accent"
        >
          {linkedinLabel} →
        </a>
      </article>
    </InteractiveCardShell>
  );
}
