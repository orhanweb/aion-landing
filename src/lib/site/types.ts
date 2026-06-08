// src/lib/site/types.ts

export type SiteContact = {
  email: string;
  whatsappE164: string;
  whatsappDisplay: string;
};

export type SiteMeta = {
  url: string;
  name: string;
  tagline: string;
};

export type SiteConfig = {
  meta: SiteMeta;
  contact: SiteContact;
};
