// src/components/sections/testimonials-grid.tsx
import { FadeIn } from '@/components/motion/fade-in';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { Container, Section } from '@/components/ui/container';
import { MonoLabel } from '@/components/ui/mono-label';
import { getTestimonials } from '@/lib/content/testimonials';
import { getTranslations, getLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

export async function TestimonialsGrid() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('testimonials');
  const testimonials = getTestimonials(locale);
  const featured = testimonials.find(item => item.featured) ?? testimonials[0];
  const rest = testimonials.filter(item => item.id !== featured.id);

  return (
    <Section variant="paper">
      <Container>
        <FadeIn className="max-w-2xl">
          <MonoLabel className="text-[var(--accent-strong)]">{t('eyebrow')}</MonoLabel>
          <h2 className="font-display mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-tight tracking-tight text-paper-foreground">{t('title')}</h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="lg:col-span-7">
            <TestimonialCard testimonial={featured} variant="featured" />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.slice(0, 2).map((item, index) => (
              <FadeIn key={item.id} delay={0.08 + index * 0.06}>
                <TestimonialCard testimonial={item} />
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.slice(2).map((item, index) => (
            <FadeIn key={item.id} delay={0.12 + index * 0.06}>
              <TestimonialCard testimonial={item} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
