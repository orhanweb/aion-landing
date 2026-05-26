// src/lib/site/env.ts

export function readEnv(key: string): string | undefined {
  const value = process.env[key]?.trim();
  return value && value.length > 0 ? value : undefined;
}

export function readPublicEnv(key: string): string | undefined {
  return readEnv(key);
}

export function readServerEnv(key: string): string | undefined {
  return readEnv(key);
}
