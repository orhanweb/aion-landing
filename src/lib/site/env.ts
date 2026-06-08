// src/lib/site/env.ts
import { validateEnv, type ValidatedEnv } from '@/lib/site/env-schema';

let cachedEnv: ValidatedEnv | undefined;

export function getValidatedEnv(): ValidatedEnv {
  if (!cachedEnv) {
    cachedEnv = validateEnv();
  }

  return cachedEnv;
}

export function requirePublicEnv<Key extends keyof ValidatedEnv['public']>(key: Key): ValidatedEnv['public'][Key] {
  return getValidatedEnv().public[key];
}

export function requireServerEnv<Key extends keyof ValidatedEnv['assessment']>(key: Key): ValidatedEnv['assessment'][Key] {
  return getValidatedEnv().assessment[key];
}
