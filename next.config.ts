// next.config.ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { getSecurityHeaders } from './src/lib/security-headers';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const legacyRedirects = [
  { source: '/yapay-zeka-yonetisimi', destination: '/tr/services/ai-governance', permanent: true },
  { source: '/yapay-zeka-yonetisimi/', destination: '/tr/services/ai-governance', permanent: true },
  { source: '/regulasyon-ve-uyum', destination: '/tr/services/regulatory-compliance', permanent: true },
  { source: '/regulasyon-ve-uyum/', destination: '/tr/services/regulatory-compliance', permanent: true },
  { source: '/bilgi-guvenligi-guvenli-ai', destination: '/tr/services/information-security', permanent: true },
  { source: '/bilgi-guvenligi-guvenli-ai/', destination: '/tr/services/information-security', permanent: true },
  { source: '/operasyonel-dayaniklilik', destination: '/tr/services/operational-resilience', permanent: true },
  { source: '/operasyonel-dayaniklilik/', destination: '/tr/services/operational-resilience', permanent: true },
  {
    source: '/yapay-zekada-insan-gozetimi-human-oversight-nasil-kurulur',
    destination: '/tr/services/human-oversight',
    permanent: true
  },
  {
    source: '/yapay-zekada-insan-gozetimi-human-oversight-nasil-kurulur/',
    destination: '/tr/services/human-oversight',
    permanent: true
  },
  { source: '/blog', destination: '/tr', permanent: false },
  { source: '/blog/', destination: '/tr', permanent: false },
  { source: '/our-team', destination: '/tr/about#team', permanent: true },
  { source: '/our-team/', destination: '/tr/about#team', permanent: true }
];

const nextConfig: NextConfig = {
  output: 'standalone',
  // Allow LAN devices (e.g. phone) to load dev resources during development.
  allowedDevOrigins: ['192.168.1.116'],
  redirects: async () => legacyRedirects,
  headers: async () => [
    {
      source: '/(.*)',
      headers: getSecurityHeaders()
    }
  ]
};

export default withNextIntl(nextConfig);
