// src/components/ui/team-card.tsx
import Image from 'next/image';
import { MonoLabel } from '@/components/ui/mono-label';
import type { TeamMember } from '@/lib/content/team';

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="group flex flex-col">
      <div className="relative mx-auto size-32 shrink-0 overflow-hidden rounded-full border border-border bg-[var(--ink-muted)] sm:size-36">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 128px, 144px"
        />
      </div>
      <div className="mt-5">
        <MonoLabel className="text-accent">{member.role}</MonoLabel>
        <h3 className="font-display mt-2 text-xl tracking-tight text-foreground">{member.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-mono-label text-[0.625rem] text-muted-foreground transition-colors hover:text-accent"
        >
          LinkedIn →
        </a>
      </div>
    </article>
  );
}
