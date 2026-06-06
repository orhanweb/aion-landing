// src/app/robots.ts
import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

const AI_CRAWLERS = ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'Google-Extended'] as const;

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      },
      ...AI_CRAWLERS.map(userAgent => ({
        userAgent,
        allow: '/'
      }))
    ],
    sitemap: `${siteUrl.replace(/\/+$/, '')}/sitemap.xml`
  };
}
