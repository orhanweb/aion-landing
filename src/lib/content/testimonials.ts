// src/lib/content/testimonials.ts
import type { Locale } from '@/i18n/routing';
import { resolveTestimonials, type TestimonialRecord } from '@/lib/content/data/testimonials';

export type Testimonial = TestimonialRecord;

export function getTestimonials(locale: Locale): Testimonial[] {
  return resolveTestimonials(locale);
}
