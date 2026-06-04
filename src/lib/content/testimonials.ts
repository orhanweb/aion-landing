// src/lib/content/testimonials.ts
import type { Locale } from '@/i18n/routing';
import { getMockTestimonials, type MockTestimonial } from '@/lib/mock/content/testimonials';

export type Testimonial = MockTestimonial;

export function getTestimonials(locale: Locale): Testimonial[] {
  return getMockTestimonials(locale);
}
