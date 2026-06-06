// src/app/llms.txt/route.ts
import { buildLlmsTxt } from '@/lib/geo/llms-txt';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
