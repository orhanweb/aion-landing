// next.config.ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { getSecurityHeaders } from './src/lib/security-headers';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'standalone',
  // Allow LAN devices (e.g. phone) to load dev resources during development.
  allowedDevOrigins: ['192.168.1.116'],
  headers: async () => [
    {
      source: '/(.*)',
      headers: getSecurityHeaders()
    }
  ]
};

export default withNextIntl(nextConfig);
