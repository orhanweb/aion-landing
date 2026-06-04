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
    <Section>
      <Container>
        <FadeIn>
          <MonoLabel className="text-accent">{t('eyebrow')}</MonoLabel>
          <h2 className="font-display mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-tight tracking-tight">{t('title')}</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{t('description')}</p>
        </FadeIn>

        <FadeIn className="mt-16">
          <TestimonialCard testimonial={featured} variant="spotlight" />
        </FadeIn>

        <ul className="mt-6 grid list-none gap-6 sm:grid-cols-2">
          {rest.map((item, index) => (
            <li key={item.id}>
              <FadeIn delay={0.06 + index * 0.05}>
                <TestimonialCard testimonial={item} variant="grid" />
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
