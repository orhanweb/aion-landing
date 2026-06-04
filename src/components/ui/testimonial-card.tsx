// src/components/ui/testimonial-card.tsx
import { MonoLabel } from '@/components/ui/mono-label';
import { cn } from '@/lib/utils/cn';
import type { Testimonial } from '@/lib/content/testimonials';

type TestimonialCardProps = {
  testimonial: Testimonial;
  variant?: 'spotlight' | 'grid';
};

function testimonialCardClassName(className?: string) {
  return cn(
    'relative overflow-hidden rounded-lg border border-border border-l-2 border-l-transparent bg-[var(--ink-elevated)] text-foreground',
    'transition-colors duration-300',
    'group-hover:border-accent/25 group-hover:border-l-accent/70',
    className
  );
}

function testimonialCardShellClassName() {
  return cn('group h-full rounded-lg transition-shadow duration-300', 'hover:shadow-[-12px_0_28px_-6px_rgba(184,149,106,0.38)]');
}

function QuoteMark({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn('font-display leading-none text-accent/15 select-none', className)}>
      &ldquo;
    </span>
  );
}

export function TestimonialCard({ testimonial, variant = 'grid' }: TestimonialCardProps) {
  if (variant === 'spotlight') {
    return (
      <div className={testimonialCardShellClassName()}>
        <blockquote className={testimonialCardClassName('px-8 py-10 md:px-12 md:py-14')}>
          <QuoteMark className="absolute -top-4 right-8 text-[5rem] md:right-12 md:text-[6rem]" />
          <div className="relative max-w-3xl">
            <MonoLabel className="text-accent">{testimonial.sector}</MonoLabel>
            <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl md:leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-8 border-t border-border pt-6">
              <cite className="font-display text-lg not-italic text-foreground">{testimonial.author}</cite>
            </footer>
          </div>
        </blockquote>
      </div>
    );
  }

  return (
    <div className={testimonialCardShellClassName()}>
      <blockquote className={testimonialCardClassName('flex h-full min-h-[220px] flex-col p-6 md:min-h-[240px] md:p-8')}>
        <MonoLabel className="text-accent">{testimonial.sector}</MonoLabel>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">&ldquo;{testimonial.quote}&rdquo;</p>
        <footer className="mt-6 border-t border-border pt-5">
          <cite className="font-display text-base not-italic text-foreground">{testimonial.author}</cite>
        </footer>
      </blockquote>
    </div>
  );
}
