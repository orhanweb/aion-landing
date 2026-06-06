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
  const standards = ['ISO 42001', 'EU AI Act', 'ISO 27001'];

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #08090b 0%, #0d0f12 46%, #050607 100%)',
        padding: '72px 82px',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 76% 48%, rgba(184,149,106,0.26) 0%, rgba(184,149,106,0.08) 29%, rgba(10,11,13,0) 58%)'
        }}
      />
      <svg
        width="620"
        height="620"
        viewBox="0 0 80 80"
        fill="none"
        style={{
          position: 'absolute',
          right: '-84px',
          top: '4px',
          opacity: 0.16
        }}
      >
        <path d="M40 10L58 22V38L40 50L22 38V22L40 10Z" stroke="#d7b77f" strokeWidth="4" strokeLinejoin="miter" />
        <path d="M22 42L40 54L58 42V58L40 70L22 58V42Z" fill="#b8956a" fillOpacity="0.9" />
        <path d="M40 24L49 30V38L40 44L31 38V30L40 24Z" fill="#08090b" fillOpacity="0.95" />
        <circle cx="40" cy="34" r="3" fill="#c45c3e" />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(8,9,11,0.98) 0%, rgba(8,9,11,0.82) 48%, rgba(8,9,11,0.42) 100%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 82,
          right: 82,
          top: 52,
          height: 1,
          background: 'linear-gradient(90deg, rgba(184,149,106,0.52), rgba(184,149,106,0.04))'
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          gap: 18
        }}
      >
        <div style={{ fontSize: 94, fontWeight: 600, color: '#eeeae3', letterSpacing: '0.105em' }}>{siteName}</div>
        <div style={{ fontSize: 21, color: '#9f9992', letterSpacing: '0.19em', textTransform: 'uppercase' }}>{tagline}</div>
      </div>

      <div style={{ display: 'flex', position: 'relative', flexDirection: 'column', gap: 28, maxWidth: 910 }}>
        <div style={{ fontSize: 40, fontWeight: 600, color: '#eeeae3', lineHeight: 1.16, letterSpacing: '-0.015em' }}>{headline}</div>
        <div style={{ display: 'flex', gap: 14 }}>
          {standards.map(standard => (
            <div
              key={standard}
              style={{
                display: 'flex',
                border: '1px solid rgba(184,149,106,0.46)',
                borderRadius: 999,
                padding: '10px 16px',
                color: '#d7b77f',
                background: 'rgba(184,149,106,0.08)',
                fontSize: 18,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              {standard}
            </div>
          ))}
        </div>
      </div>
    </div>,
    { ...size }
  );
}
