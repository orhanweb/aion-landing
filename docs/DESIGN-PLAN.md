# AION — Design Plan v1

**Date:** 2026-05-26
**Goal:** Master pro, designer-crafted B2B site — zero "AI template" feel
**Stack:** Tailwind CSS 4 + Framer Motion (`motion/react`) + custom UI kit

---

## 1. Why Current Code Smells Like AI

### Code-level patterns (our scaffold)

| Pattern                                       | Problem                                                |
| --------------------------------------------- | ------------------------------------------------------ |
| `#0a0e1a` + indigo `#4f46e5` + cyan `#06b6d4` | Most generic "AI SaaS dark mode" triad on the internet |
| Plus Jakarta Sans everywhere                  | Overused in 2024–2026 landing pages                    |
| `Badge → H1 → bullet list with →`             | Default LLM page structure                             |
| Hero right side: 2×2 ISO card grid            | Placeholder visual — no design intent                  |
| Uniform `rounded-2xl` cards in 3-col grid     | shadcn/Tailwind UI default composition                 |
| `rounded-full` pill buttons                   | Startup template cliché                                |
| Single radial purple gradient                 | "Add glow" reflex                                      |
| Every section identical rhythm                | No editorial pacing, no tension                        |

### Old site (aion.tr) — same disease, worse symptoms

- Stock 3D robot + lorem ipsum chat UI
- Purple underline on headline
- Floating emoji-style icons
- Carousel everything

**Root cause:** We're selling _institutional trust_ with _consumer AI startup_ visual language.

---

## 2. Design North Star

> **"Regulatory Editorial"** — The site should feel like a cross between a Big Four audit report cover, a Swiss design annual, and a premium legal tech product. Not a YC demo day slide.

### Audience mental model

Visitor is a **CISO, Compliance Officer, or General Counsel** evaluating whether AION is serious enough to invite to a board conversation. They need:

- Authority (not excitement)
- Clarity (not decoration)
- Proof (not promises)
- Restraint (not animation circus)

### References (mood, not copy)

| Reference                                                      | Take                                         |
| -------------------------------------------------------------- | -------------------------------------------- |
| **Basewell**                                                   | Human-centered compliance, digital edge      |
| **Palantir** (marketing pages)                                 | Data precision, dark ink, monospace labels   |
| **Stripe Press / Stripe docs**                                 | Typographic hierarchy, whitespace discipline |
| **Linear**                                                     | Motion with purpose, minimal chrome          |
| **Swiss regulatory PDFs**                                      | Grid, numbering, structured disclosure       |
| **NOT:** ThemeForest AI Globe, purple gradient SaaS, 3D robots |

---

## 3. Visual System

### 3.1 Color — "Ink & Authority"

Abandon indigo+cyan. One warm dark foundation + one accent + paper sections.

```css
/* Dark foundation — warm ink, NOT blue-navy */
--ink: #0a0b0d;
--ink-elevated: #12141a;
--ink-muted: #1a1d26;

/* Light sections — warm paper (editorial break) */
--paper: #f3f0e8;
--paper-muted: #e8e4da;

/* Text */
--text-primary: #eeeae3; /* on dark */
--text-secondary: #9a9590;
--text-dark: #1c1a17; /* on paper */

/* Accent — single spot color (certification / authority) */
--accent: #b8956a; /* champagne bronze — trust, certification */
--accent-strong: #9a7848;

/* Regulatory urgency (EU AI Act only) */
--signal: #c45c3e; /* muted terracotta — NOT neon red */

/* Structure */
--line: rgba(238, 234, 227, 0.08);
--line-strong: rgba(238, 234, 227, 0.16);
```

**Rule:** Accent appears on ≤15% of any viewport. Never as full background fill.

### 3.2 Typography — Editorial Pairing

Abandon Plus Jakarta as sole font.

| Role                    | Font               | Why                                   |
| ----------------------- | ------------------ | ------------------------------------- |
| **Display / H1–H2**     | `Instrument Serif` | Editorial authority, not tech startup |
| **Body / UI**           | `Geist Sans`       | Clean, modern, excellent legibility   |
| **Labels / ISO / data** | `IBM Plex Mono`    | Audit trail, compliance document feel |

**Scale (fluid):**

```
H1: clamp(2.75rem, 5vw, 4.5rem)  — serif, tight leading
H2: clamp(2rem, 3.5vw, 3rem)
Body: 1rem / 1.7 line-height
Label: 0.6875rem mono uppercase tracking-[0.14em]
```

### 3.3 Layout Grid

- 12-column grid, `max-w-[1280px]`
- **Asymmetric splits:** 7/5, 8/4 — never boring 50/50
- Section padding: `py-24 md:py-32 lg:py-40` — generous whitespace
- **Rhythm:** Alternate dark → paper → dark sections (breaks monotony)

### 3.4 Shape Language

| Element             | Radius                          | Notes                 |
| ------------------- | ------------------------------- | --------------------- |
| Buttons (primary)   | `rounded-sm` (4px)              | Sharp = institutional |
| Buttons (secondary) | underline or border-bottom only | Editorial link style  |
| Cards               | `rounded-lg` (8px) max          | Not 24px soft blobs   |
| Images              | none or 4px                     | Sharp crops           |

### 3.5 Texture & Depth

- **Grain overlay:** CSS noise SVG at 3% opacity on dark sections
- **Grid lines:** 1px structural grid visible in hero (technical drawing)
- **No:** glassmorphism, neon glows, floating orbs, mesh gradients

---

## 4. Homepage — Section-by-Section Plan

### 4.1 Header

```
[ AION wordmark ]     Hizmetler  Yaklaşım  Hakkımızda     [TR|EN]  [Değerlendirme →]
────────────────────────────────────────────────────────────────────────────────────
```

- Fixed, transparent → solid ink on scroll (Framer Motion `useScroll`)
- Logo: custom wordmark — serif "AION" + mono subtitle "Oversight Network"
- Nav: mono uppercase labels, underline-on-hover (not color change)
- CTA: text link with arrow, not pill button

### 4.2 Hero — "The Statement"

**Layout:** 7/5 asymmetric. Left dominates.

**Left:**

```
KURUMSAL AI YÖNETİŞİMİ                    ← mono label
Güvenilir ve                              ← serif display
Denetlenebilir                            ← serif display, accent underline (thin, not purple bar)
Yapay Zeka

AION, yapay zeka kullanım ve çözümlerinizi...   ← body, max-w-md

[ Ücretsiz Değerlendirme ]   Hizmetler →        ← sharp button + text link

ISO 42001 · EU AI Act · ISO 27001 · ISO 22301   ← mono inline, NOT card grid
```

**Right:**

- Custom SVG: **Governance topology graph** — nodes + lines, minimal, animated draw-on-load
- OR: Live-style stat counters (monospace): `6` standards, `2026` deadline, etc.
- **NOT:** card grid, robot, chat mockup

**Motion:**

- Text stagger fade-up (Framer `staggerChildren: 0.08`)
- SVG path `pathLength` animation on load
- `prefers-reduced-motion`: instant show, no animation

### 4.3 Trust Strip

Full-width mono band on `--ink-elevated`:

```
TRUSTED FRAMEWORKS    ISO/IEC 42001    EU AI ACT    ISO/IEC 27001    ISO 22301
```

Horizontal scroll on mobile. Static on desktop. No logos needed yet — text is enough.

### 4.4 Services — Bento Grid (asymmetric)

**NOT** uniform 3-column cards.

```
┌─────────────────────┬──────────┐
│  AI Yönetişimi      │ Regülasyon│  ← large + small
│  (featured, 2-col)  │  Uyum    │
├──────────┬──────────┴──────────┤
│ Bilgi    │ Operasyonel │ İnsan │
│ Güvenliği│ Dayanıklılık│Gözetim│
└──────────┴─────────────┴───────┘
```

- Featured service (AI Governance): larger tile, serif title, mono slug
- Hover: subtle border brighten + 2px lift (transform, not glow)
- Each tile: number prefix `01`–`05` in mono

### 4.5 Process — Editorial Timeline

**NOT** 6 identical cards in a grid.

Vertical timeline on left rail with mono step numbers. Content on right. Line connects steps.

```
01 ─── Strateji ve Yol Haritası
 │     Kuruluşunuzun AI vizyonu...
 │
02 ─── Risk Analizi
 │     ...
```

**Motion:** Steps fade-in as user scrolls (`whileInView`, `once: true`)

Alternative (Phase 2): Horizontal pinned scroll section — premium but more complex.

### 4.6 Social Proof — Large Quote

**NOT** carousel.

One featured testimonial at a time OR static stack of 2–3 quotes:

```
"                                                           "
  AION ile çalışmak, yapay zeka stratejimizi tamamen
  yeni bir seviyeye taşıdı...
"                                                           "

— Fatih Kuran          Finans ve Bankacılık
```

- Serif italic for quote
- Generous size (`text-2xl md:text-3xl`)
- Paper background section for contrast

### 4.7 EU AI Act — Signal Banner

**NOT** gradient CTA box.

```
┌─ SIGNAL ─────────────────────────────────────────────────┐
│  Ağustos 2026                                            │
│  EU AI Act yürürlükte.                                   │
│  Risk profilinizi 2 dakikada öğrenin.     [Değerlendir →]│
└──────────────────────────────────────────────────────────┘
```

- Left border: 3px `--signal` color
- Mono date label
- Restrained, urgent but not alarmist

### 4.8 Footer — Structured

4 columns: Brand, Hizmetler, Kurumsal, İletişim
Mono copyright line. No empty footer.

---

## 5. Motion System (Framer Motion)

### Install

```bash
npm install motion
```

Import from `motion/react` (Framer Motion v11+).

### Principles

| Do                              | Don't                        |
| ------------------------------- | ---------------------------- |
| Stagger text reveal on hero     | Bounce / spring overshoot    |
| `whileInView` fade-up once      | Repeat animations on scroll  |
| SVG path draw                   | Parallax on everything       |
| Header opacity on scroll        | Floating decorative elements |
| Page transition fade (optional) | Carousel auto-play           |

### Shared components to build

```
src/components/motion/
├── fade-in.tsx          # whileInView wrapper
├── stagger.tsx          # stagger container
├── text-reveal.tsx      # split text animation (hero)
└── scroll-header.tsx    # header bg on scroll
```

### Performance

- Motion only in `'use client'` section wrappers
- Server Components for content; wrap with motion at boundary
- `viewport={{ once: true, margin: '-80px' }}`
- Respect `prefers-reduced-motion`

---

## 6. Component Refactor Plan

### Design tokens

- Rewrite `globals.css` with new token system
- Add `@theme` mappings for Tailwind v4

### UI kit updates

| Component           | Change                                                        |
| ------------------- | ------------------------------------------------------------- |
| `Button`            | Sharp corners, primary = ink bg + paper text OR accent border |
| `Badge`             | → `Label` mono uppercase (rename conceptually)                |
| `Card`              | Thinner border, less padding, no heavy bg                     |
| `Container`         | Add grid utility variants                                     |
| **New** `Section`   | dark / paper variants                                         |
| **New** `Divider`   | 1px line with optional label                                  |
| **New** `MonoLabel` | ISO-style labels                                              |

### New sections to build

```
src/components/sections/
├── hero-section.tsx         # REWRITE
├── trust-strip.tsx          # NEW
├── services-bento.tsx       # REWRITE (replace grid)
├── process-timeline.tsx     # REWRITE
├── testimonial-feature.tsx  # NEW
├── signal-banner.tsx        # REWRITE (replace cta-section)
└── index.ts
```

### Layout

```
src/components/layout/
├── site-header.tsx          # REWRITE + scroll behavior
├── site-footer.tsx          # REWRITE (4-col)
└── logo.tsx                 # NEW wordmark
```

---

## 7. Implementation Phases

### Phase 1 — Foundation (Day 1)

- [ ] Design tokens in `globals.css`
- [ ] Typography (Instrument Serif + Geist + IBM Plex Mono)
- [ ] Refactor Button, Label, Section primitives
- [ ] Motion utilities
- [ ] Header + Footer redesign

### Phase 2 — Homepage (Day 2–3)

- [ ] Hero with SVG graph + stagger animation
- [ ] Trust strip
- [ ] Services bento
- [ ] Process timeline
- [ ] Testimonial section
- [ ] Signal banner

### Phase 3 — Inner pages (Day 4)

- [ ] Service detail — editorial layout
- [ ] Assessment wizard — match new system
- [ ] About / Contact — paper section variants

### Phase 4 — Polish (Day 5)

- [ ] Mobile responsive pass
- [ ] `prefers-reduced-motion`
- [ ] Lighthouse + visual QA

---

## 8. What We Explicitly Avoid

- Purple / indigo / cyan gradient combos
- Rounded-full pill buttons
- 3D robots, chat mockups, lorem ipsum UI
- Uniform card grids
- Badge + arrow bullet lists
- Stock illustration libraries
- Auto-playing carousels
- Popups on load
- Glassmorphism cards
- "Get Started" English CTAs on TR pages

---

## 9. Success Criteria

| Criteria         | Target                                                |
| ---------------- | ----------------------------------------------------- |
| First impression | "This is a serious consultancy" not "another AI site" |
| Typography       | Clear hierarchy, serif + sans contrast                |
| Color            | Max 2 accents visible per viewport                    |
| Motion           | Subtle, purposeful, ≤5 animated elements above fold   |
| Mobile           | Editorial layout holds, bento stacks gracefully       |
| Performance      | No CLS from animations, LCP < 2s                      |
| Brand fit        | Matches ISO/EU AI Act authority positioning           |

---

## 10. Approval Checklist

Before coding, confirm with Orhan:

1. **Color direction:** Ink dark + paper sections + bronze accent — OK?
2. **Typography:** Instrument Serif + Geist + IBM Plex Mono — OK?
3. **Hero visual:** SVG governance graph (no photography initially) — OK?
4. **Motion level:** Subtle stagger + scroll reveal (not heavy) — OK?
5. **Start with Phase 1 + Homepage?**
