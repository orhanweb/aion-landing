// src/lib/security-headers.ts

const sharedSecurityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' }
] as const;

const productionSecurityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains'
  }
] as const;

export function getSecurityHeaders() {
  if (process.env.NODE_ENV === 'production') {
    return [...sharedSecurityHeaders, ...productionSecurityHeaders];
  }

  return [...sharedSecurityHeaders];
}
