// src/app/[locale]/opengraph-image.tsx
import { ImageResponse } from 'next/og';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const alt = 'AION';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

type OpenGraphImageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const meta = await getTranslations('meta');
  const home = await getTranslations('meta.pages.home');

  const siteName = meta('siteName');
  const tagline = meta('siteTagline');
  const headline = home('description');

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: '#0a0b0d',
        padding: '80px',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 96, fontWeight: 600, color: '#eeeae3', letterSpacing: '0.08em' }}>{siteName}</div>
        <div style={{ fontSize: 22, color: '#9a9590', letterSpacing: '0.16em', textTransform: 'uppercase' }}>{tagline}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 960 }}>
        <div style={{ fontSize: 38, fontWeight: 600, color: '#eeeae3', lineHeight: 1.2 }}>{headline}</div>
        <div style={{ fontSize: 22, color: '#b8956a', letterSpacing: '0.14em', textTransform: 'uppercase' }}>ISO 42001 / EU AI ACT / ISO 27001</div>
      </div>
    </div>,
    { ...size }
  );
}
