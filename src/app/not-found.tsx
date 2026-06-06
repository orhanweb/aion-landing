// src/app/not-found.tsx
import './globals.css';
import Link from 'next/link';
import { siteFontClassName } from '@/lib/fonts';
import { routing } from '@/i18n/routing';

export default function RootNotFound() {
  return (
    <html lang={routing.defaultLocale} className={`${siteFontClassName} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="font-mono-label text-accent">404</p>
          <h1 className="font-display text-3xl tracking-tight">Page not found</h1>
          <p className="max-w-md text-sm text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link
            href={`/${routing.defaultLocale}`}
            className="mt-2 inline-flex rounded-md bg-accent px-5 py-3 font-mono-label text-[var(--ink)] transition-colors hover:bg-[var(--accent-strong)]"
          >
            Back to home
          </Link>
        </main>
      </body>
    </html>
  );
}
