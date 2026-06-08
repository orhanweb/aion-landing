// src/lib/site/whatsapp.ts

/** Build a WhatsApp chat URL from an E.164 number (+905xxxxxxxxx). */
export function buildWhatsAppUrl(e164: string, prefilledMessage?: string): string {
  let digits = e164.replace(/\D/g, '');

  // Accept Turkish local input (05xxxxxxxxx) in env.
  if (digits.startsWith('0') && digits.length === 11) {
    digits = `90${digits.slice(1)}`;
  }

  const base = `https://wa.me/${digits}`;

  if (!prefilledMessage) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(prefilledMessage)}`;
}
