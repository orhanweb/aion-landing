// src/app/layout.tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl())
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
