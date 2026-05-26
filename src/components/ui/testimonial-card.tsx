// src/components/ui/testimonial-card.tsx
import { MonoLabel } from '@/components/ui/mono-label';
import type { Testimonial } from '@/lib/content/testimonials';

type TestimonialCardProps = {
  testimonial: Testimonial;
  variant?: 'default' | 'featured';
};

export function TestimonialCard({ testimonial, variant = 'default' }: TestimonialCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <blockquote
      className={
        isFeatured
          ? 'flex h-full flex-col rounded-lg border border-border bg-[var(--ink-elevated)] p-8 md:p-10'
          : 'flex h-full flex-col rounded-lg border border-border bg-[var(--ink-elevated)] p-6 md:p-8'
      }
    >
      <p
        className={
          isFeatured
            ? 'font-display text-lg italic leading-relaxed tracking-tight text-foreground md:text-xl'
            : 'text-sm leading-relaxed text-muted-foreground md:text-base'
        }
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-auto pt-6">
        <cite className="font-display not-italic text-base text-foreground">{testimonial.author}</cite>
        <MonoLabel className="mt-1 block text-[0.625rem] text-muted-foreground">{testimonial.sector}</MonoLabel>
      </footer>
    </blockquote>
  );
}
