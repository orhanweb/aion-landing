# AION — Content Expansion Master Plan v1.1

**Date:** 2026-05-26 (updated 2026-05-26)
**Owner:** Orhan + Asi
**Status:** Approved. Phase A decisions locked. Phase 0 (URLs) added. Phases require explicit go-ahead one by one.
**Companion docs:** `docs/DESIGN-PLAN.md` (visual system), `research/*` (audit).

> **Do not delete this file.** It is the execution guide for closing the content gap between the new redesign and the legacy `aion.tr` site, plus the additions required to ship a credible enterprise-grade B2B presence.

---

## 0. Why this plan exists

The redesign succeeded on **visual identity** (regulatory-editorial direction, custom UI kit, typography stack, motion system). It deliberately removed legacy noise — WordPress carousels, stock imagery, placeholder blog, duplicate forms.

But the **trust-signal density** dropped too far:

- 1 testimonial instead of 5
- 0 team members instead of 3
- ~70% of per-service depth (intro + 7-step accordions) removed
- Assessment wizard reduced from ~20 substantive questions to ~5
- No legal pages (KVKK, cookies) — blocker for a compliance brand
- No contact mechanism beyond a CTA button
- No insights/blog layer (legacy was placeholder; we still need a real one eventually)

This plan reinstates and improves that content **without re-introducing the legacy aesthetic**.

---

## 1. Reference baseline

### 1.1 Legacy reference content (worth migrating)

| Source                    | Asset                                           | Quality               | Action                                              |
| ------------------------- | ----------------------------------------------- | --------------------- | --------------------------------------------------- |
| `/yapay-zeka-yonetisimi/` | 2 intro paragraphs + 7-step accordion           | High                  | Migrate as-is, polish copy                          |
| Other 4 service pages     | Same pattern                                    | High (assumed parity) | Migrate                                             |
| Homepage `#aboutus`       | 3 team members + LinkedIn                       | High                  | Migrate, add photos + bios                          |
| Homepage testimonials     | 5 quotes, ~120 words each                       | High                  | Migrate full text                                   |
| Homepage forms            | ISO 27001 + ISO 42001 assessments               | High structure        | Restructure into wizard branches                    |
| EU AI Act popup           | Risk profile form + €35M / 7% penalty messaging | High urgency          | Move messaging to signal banner + assessment branch |
| Calendly embed            | Booking flow                                    | Functional            | Use on `/contact`                                   |

### 1.2 Legacy content to NOT migrate

- Placeholder blog (10 demo posts dated 2024-02-01)
- Stock robot / chat mockup imagery
- Auto-playing carousels
- AI Globe theme decorative dots / floating icons
- Aggressive on-load popup

### 1.3 New site current state (post-redesign)

```
src/app/[locale]/
├── page.tsx                  Homepage  (Hero, Trust, Bento, Process, Testimonial×1, Signal)
├── hizmetler/page.tsx        Services hub          ⚠️ Turkish folder — migrate in Phase 0
├── hizmetler/[slug]/page.tsx Service detail
├── yaklasimimiz/page.tsx     Approach
├── hakkimizda/page.tsx       About (1 paragraph)
├── iletisim/page.tsx         Contact (1 paragraph + CTA)
└── degerlendirme/page.tsx    Assessment wizard (3 steps, 5 fields)
```

---

## 2. Final information architecture

### 2.1 URL strategy — English canonical paths (locked)

**Decision (Orhan, 2026-05-26):** All URL path segments must be **English**, in both `/tr/` and `/en/` locales. Turkish appears in page content and UI strings only — not in slugs.

**Why:**

- Industry standard for i18n routing (Stripe, Linear, Vercel pattern)
- Stable URLs when copy changes; easier CDN caching, analytics, and link sharing
- Service slugs work across locales without duplicate content at different paths
- Legacy WordPress used Turkish slugs (`/yapay-zeka-yonetisimi/`) — we **301-redirect** those at launch, not preserve them

**Rule:** App Router folder names = English. `next-intl` `Link`/`usePathname` use English logical paths. No localized pathname variants (no `/tr/hizmetler` vs `/en/services`).

**Target routes** (without `/[locale]/` prefix):

```
/                              Homepage
/services                      Services hub
/services/[slug]               Service detail
/approach                      Methodology (6-step process)
/about                         About — mission, story, principles, team summary
/team                          Full team grid                         [Phase D, optional]
/assessment                    Assessment wizard — topic-branched
/contact                       Contact — Calendly + email + phone
/insights                      Editorial hub (replaces legacy /blog/)  [Phase F]
/insights/[slug]               Article detail
/privacy                       KVKK / Privacy Policy                  [Phase E]
/cookies                       Cookie Policy                          [Phase E]
/terms                         Terms of Service (optional)            [Phase E]
```

**Service slugs (both locales, English only):**

| Service                 | Slug                     |
| ----------------------- | ------------------------ |
| AI Governance           | `ai-governance`          |
| Regulation & Compliance | `regulatory-compliance`  |
| Information Security    | `information-security`   |
| Operational Resilience  | `operational-resilience` |
| Human Oversight         | `human-oversight`        |

**Examples:**

```
/tr/services/ai-governance
/en/services/ai-governance
/tr/assessment
/en/contact
```

**Legacy → new redirects** (implement in `middleware.ts` or `next.config` redirects, Phase 0):

| Legacy (aion.tr)                                              | New canonical                                                    |
| ------------------------------------------------------------- | ---------------------------------------------------------------- |
| `/yapay-zeka-yonetisimi/`                                     | `/tr/services/ai-governance`                                     |
| `/regulasyon-ve-uyum/`                                        | `/tr/services/regulatory-compliance`                             |
| `/bilgi-guvenligi-guvenli-ai/`                                | `/tr/services/information-security`                              |
| `/operasyonel-dayaniklilik/`                                  | `/tr/services/operational-resilience`                            |
| `/yapay-zekada-insan-gozetimi-human-oversight-nasil-kurulur/` | `/tr/services/human-oversight`                                   |
| `/blog/`                                                      | `/tr/insights` (once Phase F live) or 301 to homepage until then |
| `/our-team/`                                                  | `/tr/about#team` or `/tr/team`                                   |

EN legacy paths (if any) mirror to `/en/...` equivalents.

**Phase 0 scope:** Rename app directories, unify service slugs in `lib/content/services.ts`, update all `Link` hrefs, sitemap, metadata paths, and add redirect map. **Do before production launch**; can run in parallel with Phase A if internal links are updated in the same PR.

### 2.2 Page map (post-expansion)

```
/                          Homepage — trust-dense, single conversion path
/services                  Services hub
/services/[slug]           Service detail — intro + 7-step accordion + CTA
/approach                  Methodology
/about                     About
/team                      Team grid (optional)                     [Phase D]
/assessment                Assessment wizard
/contact                   Contact
/insights                  Editorial hub                            [Phase F]
/insights/[slug]           Article detail                           [Phase F]
/privacy                   Privacy / KVKK                           [Phase E]
/cookies                   Cookie policy                            [Phase E]
/terms                     Terms (optional)                         [Phase E]
```

**Testimonials:** Homepage grid only at launch (D3). No `/testimonials` route unless grid proves insufficient later.

i18n: every route under `/tr/...` and `/en/...` via `next-intl` `localePrefix: 'always'`.

---

## 3. Content models

All content lives in TypeScript modules under `src/lib/content/` for type safety, locale switching, and easy migration to a CMS later. No CMS is introduced now.

### 3.1 Service (extended)

```ts
// src/lib/content/services.ts
export type ServiceStandard = 'ISO 42001' | 'EU AI Act' | 'ISO 27001' | 'ISO 22301' | 'Human Oversight';

export type Service = {
  slug: string; // English only — same slug in tr and en (e.g. 'ai-governance')
  title: string;
  subtitle: string;
  standard: ServiceStandard;
  shortDescription: string; // bento card
  intro: string[]; // 2 paragraphs on detail page
  steps: ServiceStep[]; // 7 items per service (parity with legacy)
  outcomes: string[]; // 3-5 bullet outcomes
  relatedSlugs: string[];
};

export type ServiceStep = {
  title: string;
  description: string; // 2-3 sentences
};
```

### 3.2 Team

```ts
// src/lib/content/team.ts
export type TeamMember = {
  slug: string; // 'tolga-aktas'
  name: string;
  role: string; // localized
  bio: string; // 2-3 sentences
  expertise: string[]; // ISO 42001, EU AI Act, ...
  linkedin?: string;
  photo: string; // /team/<slug>.jpg — 1:1 crop
};
```

Display order is array order. No CMS, no DB.

### 3.3 Testimonial

```ts
// src/lib/content/testimonials.ts
export type Testimonial = {
  id: string;
  author: string;
  authorRole?: string;
  sector: string; // localized
  quote: string; // full text, no truncation
  serviceSlug?: string; // anchor for related service
  featured: boolean; // 1-2 featured for homepage hero quote
};
```

### 3.4 Insight (Phase F)

```ts
// src/lib/content/insights.ts — sourced from /content/insights/*.mdx
export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  topic: 'eu-ai-act' | 'iso-42001' | 'iso-27001' | 'iso-22301' | 'governance';
  readingMinutes: number;
  author: string; // matches TeamMember.name
};
```

---

## 4. Component inventory

### 4.1 New components

| Path                                        | Purpose                        | Phase |
| ------------------------------------------- | ------------------------------ | ----- |
| `components/sections/value-bullets.tsx`     | Hero 3-bullet ISO summary      | A     |
| `components/sections/team-section.tsx`      | Homepage team grid (3-4 cards) | A     |
| `components/sections/testimonials-grid.tsx` | Homepage 5-quote grid          | A     |
| `components/sections/assessment-teaser.tsx` | Homepage CTA to wizard         | A     |
| `components/ui/team-card.tsx`               | TeamMember card primitive      | A     |
| `components/ui/testimonial-card.tsx`        | Testimonial primitive          | A     |
| `components/sections/service-outcomes.tsx`  | Service detail outcomes block  | B     |
| `components/sections/related-services.tsx`  | Service detail cross-links     | B     |
| `components/assessment/branches/*.tsx`      | Topic-specific question sets   | C     |
| `components/assessment/thank-you.tsx`       | Wizard success state           | C     |
| `components/sections/contact-channels.tsx`  | Email/phone/calendly block     | D     |
| `components/layout/legal-footer.tsx`        | KVKK/cookie strip              | E     |
| `components/insights/article-card.tsx`      | Insights hub card              | F     |
| `components/insights/article-meta.tsx`      | Article topbar                 | F     |

### 4.2 Modified components

| Path                                          | Change                                                     | Phase |
| --------------------------------------------- | ---------------------------------------------------------- | ----- |
| `components/sections/hero-section.tsx`        | Insert `<ValueBullets />` between description and CTAs     | A     |
| `components/sections/signal-banner.tsx`       | Add penalty figure (€35M / %7), date countdown copy        | A     |
| `components/sections/testimonial-feature.tsx` | Replace with `TestimonialsGrid`, keep as featured fallback | A     |
| `app/[locale]/page.tsx`                       | Compose new homepage with all sections in priority order   | A     |
| `app/[locale]/about/page.tsx`                 | Mission + story + principles + team summary + CTA          | D     |
| `app/[locale]/contact/page.tsx`               | Replace stub with full contact channels                    | D     |
| `app/[locale]/assessment/page.tsx`            | Wizard branching, success state                            | C     |
| `lib/assessment/schema.ts`                    | Add per-topic schemas + discriminated union                | C     |
| `components/layout/site-footer.tsx`           | Legal column + insights link when live                     | E/F   |
| `components/layout/site-header.tsx`           | Add `/insights` link when live                             | F     |

---

## 5. i18n strategy

All user-visible strings live in `messages/tr.json` + `messages/en.json`. Long-form content (service intro paragraphs, team bios, testimonial quotes) lives in `src/lib/content/*.ts` per locale (already the pattern in `services.ts`).

**Rule:** UI labels → `messages/`; editorial content → `lib/content/`. Do not mix.

**New top-level i18n keys to add:**

```
heroValueBullets, team, testimonials, assessmentTeaser, contactChannels,
about (mission, story, principles), insights, legal (kvkk, cookies)
```

Each phase below specifies the exact keys.

---

## 6. Phase execution plan

Each phase is shippable in isolation. **Do not chain phases without explicit user approval between them** (per workspace rule).

Effort estimates assume Asi implementing with Orhan reviewing.

---

### PHASE 0 — English URL canonicalization `~0.5 day`

**Goal:** Replace Turkish App Router segments and localized service slugs with English canonical paths (§2.1). Required before production launch.

**Scope:**

1. Rename route folders:
   - `hizmetler` → `services`
   - `yaklasimimiz` → `approach`
   - `hakkimizda` → `about`
   - `iletisim` → `contact`
   - `degerlendirme` → `assessment`
2. Unify `lib/content/services.ts` — single English `slug` per service for both locales
3. Update all internal `Link` hrefs, footer, header, sitemap, `buildPageMetadata` paths
4. Add legacy 301 redirect map (§2.1 table) in `next.config.ts` or middleware
5. Verify TR and EN both resolve e.g. `/tr/services/ai-governance`

**Critical files touched:** `next.config.ts`, `middleware.ts`, `src/app/[locale]/**`, `src/lib/content/services.ts`, `src/app/sitemap.ts`

**Acceptance criteria:**

- [ ] No Turkish segments remain in public URLs
- [ ] All existing internal links updated (grep for `hizmetler`, `degerlendirme`, etc.)
- [ ] Sitemap emits English paths only
- [ ] Legacy redirect table documented and tested locally
- [ ] `npm run build` passes

**Timing:** Can run **before Phase A** or **in the same PR as Phase A** — recommend same PR to avoid broken links mid-migration.

---

### PHASE A — Homepage trust density `~1–1.5 day`

**Goal:** Make the homepage feel as informationally rich as the legacy site without re-introducing carousels or template noise.

**Scope:**

1. Hero value bullets (3 × ISO standard one-liners)
2. `TeamSection` — 3 members
3. `TestimonialsGrid` — 5 testimonials (full text)
4. Signal banner expansion — date + penalty figure + risk profile CTA
5. `AssessmentTeaser` — brief block linking to `/assessment`
6. Updated homepage composition

**New files:**

```
src/components/sections/value-bullets.tsx
src/components/sections/team-section.tsx
src/components/sections/testimonials-grid.tsx
src/components/sections/assessment-teaser.tsx
src/components/ui/team-card.tsx
src/components/ui/testimonial-card.tsx
src/lib/content/team.ts
src/lib/content/testimonials.ts
public/team/tolga-aktas.jpg          (downloaded from legacy site — original asset, not screenshot)
public/team/osman-yaycioglu.jpg
public/team/batuhan-delice.jpg
```

**Team asset migration (D1, D2 — locked):**

- Bios + LinkedIn URLs: scrape from legacy homepage `#aboutus` section
- Photos: download original image URLs from legacy WordPress media (inspect `img src` / `srcset` on team carousel); save as optimized WebP/JPG under `public/team/`
- If legacy serves low-res or placeholder (`elementor-placeholder.png`): flag to Orhan; use initials avatar fallback until real photos supplied
- Do **not** use browser screenshots — quality must match source file resolution

**Modified files:**

```
src/app/[locale]/page.tsx
src/components/sections/hero-section.tsx
src/components/sections/signal-banner.tsx
messages/tr.json
messages/en.json
```

**Homepage section order (post-Phase A):**

```
1. Hero          (eyebrow + H1 + description + 3 ISO bullets + 2 CTAs + standards strip)
2. TrustStrip    (wrap layout — already done)
3. ServicesBento (5 services — already done)
4. ProcessTimeline (6 steps — already done)
5. TestimonialsGrid (5 quotes, 2x3 or 3+2 layout)
6. TeamSection   (3 members)
7. AssessmentTeaser (compact CTA block)
8. SignalBanner  (EU AI Act urgency with penalty figure)
```

**Acceptance criteria:**

- [ ] All 5 testimonials render with full quote text, sector, and author
- [ ] 3 team members render with name, role, bio, LinkedIn link, photo placeholder
- [ ] Hero ISO bullets visible above the fold on desktop
- [ ] Signal banner mentions Ağustos 2026, €35M / %7 ceza
- [ ] No horizontal scroll on any breakpoint
- [ ] Build clean: `npm run typecheck && npm run lint && npm run build`
- [ ] Visual QA in TR and EN

**Decisions — Phase A (locked 2026-05-26):**

- ~~D1~~ **Resolved:** Bios from legacy site
- ~~D2~~ **Resolved:** Photos downloaded from legacy WP media (original files, not screenshots)
- ~~D3~~ **Resolved:** Homepage testimonials grid only; no `/testimonials` page at launch

**Remaining open decisions:** none blocking Phase A start (Phase 0 recommended in same PR).

---

### PHASE B — Service depth `~1.5–2 days`

**Goal:** Bring all 5 service detail pages to legacy parity (`/yapay-zeka-yonetisimi/` is the quality floor).

**Scope:**

1. Extend each `Service` in `lib/content/services.ts`:
   - `intro: string[]` — 2 paragraphs
   - `steps: ServiceStep[]` — 7 items
   - `outcomes: string[]` — 3-5 bullets
   - `standard: ServiceStandard`
   - `relatedSlugs: string[]`
2. Service detail page redesign:
   - Hero band (subtitle + title + intro)
   - Outcomes block (mono-label bullets)
   - 7-step accordion (existing component, already styled)
   - Related services (2 cross-links)
   - CTA to assessment
3. Services hub (`/services`) — section title + intro + grid of all 5 services with anchor to `/assessment`

**Modified files:**

```
src/lib/content/services.ts                (massive content additions, both locales)
src/app/[locale]/services/[slug]/page.tsx (compose new blocks)
src/app/[locale]/services/page.tsx        (rebuild hub layout)
src/components/sections/service-outcomes.tsx  (new)
src/components/sections/related-services.tsx (new)
messages/tr.json, messages/en.json         (new keys: serviceDetail.*)
```

**Acceptance criteria:**

- [ ] All 5 services have 2 intro paragraphs + 7 accordion steps in both locales
- [ ] Service detail page reading time roughly matches legacy (~3-4 minutes)
- [ ] Each detail page has primary CTA to `/assessment`
- [ ] Hub page lists all 5 services in a structured grid (not carousel)
- [ ] JSON-LD `Service` schema added per detail page (separate decision; can defer to Phase G)

**Content source:** Pull from current `aion.tr` service pages. Polish for editorial tone, remove WordPress idioms, ensure TR/EN parity.

---

### PHASE C — Assessment wizard expansion `~1 day`

**Goal:** Match legacy form depth and lead-qualification quality without overwhelming the user.

**Wizard flow:**

```
Step 1: Topic
  → ISO 27001 | ISO 42001 | EU AI Act | General Consulting

Step 2: Topic-specific questions (3-5 dynamic questions)
  • ISO 27001:
      - Employee count (1-10 / 11-50 / 51-250 / 250+)
      - IT model (In-house / Outsource / Basic)
      - Primary motivation (Contracts / Regulation / Maturity)
      - Existing ISO systems (multi-select)
  • ISO 42001:
      - Sector
      - AI role (Developer / Provider / Deployer — multi-select)
      - AI use case description (textarea)
      - Existing ISO systems (multi-select)
      - Primary motivation
  • EU AI Act:
      - Value chain role (Provider / Deployer / Importer)
      - Self-assessed risk classification
      - Transparency & human oversight (Yes / No / Partial)
      - Training data provenance framework
      - Existing management systems
  • General:
      - Free-text describe-your-need

Step 3: Company (Company name, Sector if not asked)
Step 4: Contact (Name, Email, Phone, Title)
Step 5: Consent (KVKK + marketing opt-in)
Step 6: Thank-you screen with secondary action (Calendly link, or "we'll respond in 24h")
```

**Implementation:**

- Discriminated-union Zod schemas per topic in `lib/assessment/schema.ts`
- Step state machine in wizard component (current shape supports this with minor refactor)
- Branch components in `components/assessment/branches/`
- Submission: write to a stub server action; persist to console/log until Phase G integration is decided

**Acceptance criteria:**

- [ ] Each topic shows correct branch
- [ ] Step navigation: forward validates current step; backward preserves state
- [ ] Reduced-motion users see no entrance animation
- [ ] Both locales fully translated
- [ ] Success screen shows next-step CTA
- [ ] No client-side persistence of PII beyond submission

**Decisions needed:**

- D4. Submission target — email via Resend? Postgres? File log? (Phase G dependency)
- D5. Whether to include Calendly inline on success screen or just link

---

### PHASE D — About + Contact depth `~0.5–1 day`

**Goal:** Replace stub `/about` and `/contact` with credible enterprise content.

**`/about` sections:**

1. Mission (1 paragraph)
2. Why AION (3-4 principle blocks: Trust by Design, Audit-ready, Standards-first, Long-term partnership)
3. Methodology summary (link to `/approach`)
4. Team summary (3 cards, optional anchor `#team` on same page; `/team` only if Phase D exposes it)
5. CTA — Free assessment

**`/contact` sections:**

1. Lead paragraph
2. Contact channels block: corporate email, phone, optional address, LinkedIn
3. Calendly embed (lazy-loaded iframe, dismiss-on-load)
4. KVKK notice + link

**New files:**

```
src/components/sections/about-principles.tsx
src/components/sections/contact-channels.tsx
src/components/integrations/calendly-embed.tsx  (lazy, cookie-aware)
```

**Modified files:**

```
src/app/[locale]/about/page.tsx
src/app/[locale]/contact/page.tsx
messages/tr.json, messages/en.json
```

**Acceptance criteria:**

- [ ] No 1-paragraph stub pages remain
- [ ] Calendly embed loads only after user interaction (button click) to avoid third-party cookies on initial load
- [ ] Contact page has at least 2 alternative channels besides Calendly
- [ ] All copy localized

**Decisions needed:**

- D6. Real contact email + phone + Calendly URL
- D7. Whether to expose physical address

---

### PHASE E — Legal & trust pages `~0.5 day`

**Goal:** Close the legal compliance gap (mandatory for a brand selling compliance).

**Scope:**

1. `/privacy` — KVKK Aydınlatma Metni (PDPL notice); EN mirror under same path
2. `/cookies` — Cookie policy (matches third-party usage: Calendly; fonts self-hosted via `next/font`)
3. Footer legal column with links
4. Footer KVKK consent log reminder (no banner unless required)

**Optional:**

- `/kullanim-kosullari` — Terms of Service (only if Orhan needs)
- Cookie consent banner — **only if** EU/Calendly usage requires; currently fonts are self-hosted

**Content:** Draft legal copy in TR (primary jurisdiction). EN version is informational mirror. Recommend legal review before publishing.

**Modified files:**

```
src/app/[locale]/privacy/page.tsx              (new)
src/app/[locale]/cookies/page.tsx              (new)
src/components/layout/site-footer.tsx
src/app/sitemap.ts                          (add new routes)
```

**Acceptance criteria:**

- [ ] Legal links visible in footer
- [ ] Both pages indexable, in sitemap, in both locales
- [ ] Cookie policy lists every third-party domain + cookie name

**Decisions needed:**

- D8. Legal copy source — existing legacy text, Orhan's lawyer, or draft + review

---

### PHASE F — Insights / blog replacement `~1–1.5 day` for infrastructure + per-article cost

**Goal:** Establish a thought-leadership channel at `/insights`. This **replaces** the legacy `/blog/` nav item — not a migration of legacy posts.

#### Legacy blog — do NOT migrate (locked)

The legacy site’s `/blog/` contains **10 ThemeForest demo articles** (all dated 2024-02-01, English, irrelevant topics: “Smart Kitchens”, “Face Recognition App”, etc.). Research verdict: **credibility damage if copied**.

| Action                                                                                 | Detail                      |
| -------------------------------------------------------------------------------------- | --------------------------- |
| ❌ Do not scrape or republish legacy blog posts                                        | Junk content                |
| ✅ Build `/insights` infrastructure in Phase F                                         | MDX, editorial layout       |
| ✅ Write **new** articles (see seed list below)                                        | TR + EN, compliance-focused |
| ✅ Redirect `/blog/` → `/tr/insights` when hub goes live; until then → homepage or 410 | SEO hygiene                 |
| ✅ Nav label: **“Insights”** (TR: “İçgörüler” or “Kaynaklar” — Orhan picks in D16)     | Not “Blog”                  |

**When does the page go live?** Only when **≥1 real article** exists per locale. No empty hub, no placeholder cards. Nav link hidden until then (same rule as before).

**Scope:**

1. MDX setup with `@next/mdx` (no external CMS)
2. Content folder: `content/insights/<locale>/<slug>.mdx`
3. Frontmatter parsing → `InsightMeta`
4. Hub page `/insights` — grouped by topic, sorted by date
5. Detail page `/insights/[slug]` — MDX rendered with editorial typography
6. Topic filter (client component, optional)
7. RSS feed (optional, Phase G)
8. JSON-LD `Article` schema per detail page
9. Header nav + footer link

**Seed articles (Orhan or commissioned writer):**

| Slug                               | Topic     | Target reader      |
| ---------------------------------- | --------- | ------------------ |
| `eu-ai-act-agustos-2026-checklist` | eu-ai-act | CISO, GC           |
| `iso-42001-vs-iso-27001-fark`      | iso-42001 | Compliance officer |
| `ai-risk-siniflandirma-rehberi`    | eu-ai-act | Product owner      |

**Modified files:**

```
package.json                            (add @next/mdx, remark/rehype as needed)
next.config.ts                          (mdx config)
src/app/[locale]/insights/page.tsx       (new)
src/app/[locale]/insights/[slug]/page.tsx (new)
src/lib/content/insights.ts              (new)
src/components/insights/*.tsx            (new)
content/insights/{tr,en}/*.mdx           (new content folder)
src/components/layout/site-header.tsx
src/components/layout/site-footer.tsx
src/app/sitemap.ts
```

**Acceptance criteria:**

- [ ] At least 1 article published per locale before nav link goes live
- [ ] No "Coming soon" page; nav link hidden until content exists
- [ ] Article typography uses display serif for H1, sans for body, mono labels — same system as marketing pages
- [ ] Reading time computed at build
- [ ] Static-generated; no client-side fetch

**Decisions needed:**

- D9. Author voice — Orhan alone vs team-attributed
- D10. Whether to expose author bio block linking to `/ekip`
- D11. Cadence target (1/month? 1/quarter?)

---

### PHASE G — Trust signals + integrations + SEO polish `~1 day`

**Goal:** Final layer of enterprise trust signals and outbound integrations.

**Scope:**

1. Client logo strip (under hero or trust strip) — needs client approval per logo
2. Certification badge row (ISO 42001 trainer cert, ISO 27001 LA cert, etc. — verify with Orhan)
3. JSON-LD additions: `Service`, `Person` (team), `Review` (testimonials), `Article` (insights)
4. Sitemap + robots polish (already in place; verify priorities)
5. Open Graph image generation (Next.js `opengraph-image.tsx`)
6. Assessment submission backend (email via Resend or DB write — depends on D4)
7. Analytics — Plausible self-hosted on Hetzner, no Google Analytics
8. Lighthouse pass: target 95+ across categories

**Out of scope for this plan:** A/B testing, chatbot, newsletter signup. Document in `docs/FUTURE-ROADMAP.md` if Orhan agrees later.

---

## 7. Decisions log

These need Orhan's explicit answer before relevant phases start. Each phase lists which decisions block it.

| ID  | Topic                                                 | Blocks phase | Status                                                |
| --- | ----------------------------------------------------- | ------------ | ----------------------------------------------------- |
| D1  | Team bios + LinkedIn URLs                             | A            | **Resolved** — legacy site                            |
| D2  | Team photo source                                     | A            | **Resolved** — download WP originals, not screenshots |
| D3  | Expose `/testimonials` as standalone page             | A            | **Resolved** — homepage grid only at launch           |
| D15 | Migrate legacy `/blog/` posts                         | F            | **Resolved** — no; write new Insights content         |
| D16 | Insights nav label TR (“İçgörüler” vs “Kaynaklar”)    | F            | Open                                                  |
| D4  | Assessment submission target (email / DB / log)       | C, G         | Open                                                  |
| D5  | Calendly inline vs link on assessment success         | C, D         | Open                                                  |
| D6  | Real contact email + phone + Calendly URL             | D            | Open                                                  |
| D7  | Physical address publication                          | D            | Open                                                  |
| D8  | Legal copy source                                     | E            | Open                                                  |
| D9  | Insights author voice (Orhan / team / guest)          | F            | Open                                                  |
| D10 | Author bio block on articles                          | F            | Open                                                  |
| D11 | Insights cadence target                               | F            | Open                                                  |
| D12 | Client logo permissions list                          | G            | Open                                                  |
| D13 | Real certification badges to display                  | G            | Open                                                  |
| D14 | Analytics choice (Plausible self-host / none / other) | G            | Open                                                  |

---

## 8. Risks & mitigations

| Risk                                                | Impact               | Mitigation                                                                        |
| --------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------- |
| Real team photos unavailable                        | A blocks visually    | Download legacy WP media first; initials avatar fallback if placeholder detected  |
| URL refactor breaks bookmarks                       | SEO / UX             | Phase 0 redirect table; test all legacy paths before launch                       |
| Legacy service copy is WP-flavored                  | B reads off-tone     | Edit pass during migration; treat legacy as source material not source of truth   |
| Calendly third-party cookies on initial load        | E/D compliance issue | Lazy-load on user gesture; cookie policy lists it                                 |
| Form PII handling without backend                   | C exposes data risk  | Phase C ships with stub submission; no PII storage. D4 must resolve before launch |
| Bilingual content drift                             | Every phase          | Each PR/commit must touch both locales or explicitly justify why not              |
| Scope creep into Phase G (chatbot, analytics, etc.) | Schedule             | Document in roadmap; refuse mid-phase additions                                   |
| Insights cadence stalls after launch                | F looks abandoned    | Hide nav link until ≥3 articles exist; commit to first 3 before publishing        |

---

## 9. Out of scope (explicitly deferred)

- Headless CMS (Sanity, Payload, etc.) — TS modules are sufficient at this content volume
- Newsletter signup
- Live chat / chatbot
- Interactive EU AI Act risk classifier (already covered partially by assessment wizard)
- Multi-region deployment
- A/B testing framework
- Detailed analytics dashboards

Revisit after launch + 90 days of real traffic.

---

## 10. Working agreement

1. **One phase at a time.** Asi proposes phase scope, Orhan approves, Asi implements, Orhan reviews. No skipping ahead.
2. **No critical-file edits without listing them first** (per user rule). Critical files: `package.json`, `next.config.ts`, lockfile, env files, middleware.
3. **Bilingual parity is mandatory.** Every content change touches both `tr.json`/`en.json` and both locale paths in `lib/content/*`.
4. **Verification commands per change:** `npm run typecheck && npm run lint && npm run build`. Manual visual QA in TR + EN.
5. **No git commits unless requested.** Stage and report; Orhan decides when to commit.
6. **Plan is the rulebook.** If reality contradicts the plan, update the plan first, then code.

---

## 11. Suggested execution order

0. **Phase 0** — English URLs + legacy redirects (same PR as Phase A recommended)
1. **Phase A** — biggest perception jump for minimal risk
2. **Phase D** — fixes the contact/about stub embarrassment
3. **Phase B** — full service depth (most copy-heavy phase)
4. **Phase C** — assessment wizard expansion
5. **Phase E** — legal pages (independent, can run parallel with anything)
6. **Phase F** — insights hub + **new** articles only (≥1 per locale before nav goes live)
7. **Phase G** — trust signals + submission backend + SEO polish

Total estimated implementation time once decisions are answered: **5–7 working days** of focused build, exclusive of Orhan's content/photo/legal turnaround.

---

## 12. Next action

**Locked (Orhan, 2026-05-26):** D1, D2, D3, D15, English URL strategy (§2.1).

Asi waits for Orhan to:

1. Confirm plan v1.1 as rulebook (URL + blog sections).
2. Approve **Phase 0 + Phase A** together (recommended single PR) or Phase A alone with Turkish URLs temporarily.
3. Optional: pick Insights nav label TR (D16) — can defer to Phase F.

Asi will not begin implementation without explicit per-phase approval.
