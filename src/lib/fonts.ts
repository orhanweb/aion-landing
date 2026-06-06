// src/lib/fonts.ts
import { IBM_Plex_Mono, Lora, Plus_Jakarta_Sans } from 'next/font/google';

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
});

export const lora = Lora({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap'
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  variable: '--font-ibm-plex-mono',
  display: 'swap'
});

export const siteFontClassName = `${plusJakartaSans.variable} ${lora.variable} ${ibmPlexMono.variable}`;
