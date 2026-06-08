// src/instrumentation.ts
import { validateEnv } from '@/lib/site/env-schema';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    validateEnv();
  }
}
