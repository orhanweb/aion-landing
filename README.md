# AION Web

Enterprise AI governance marketing site — Next.js, custom UI kit, TR/EN.

## Stack

- Next.js 16 (App Router, standalone output)
- TypeScript (strict)
- Tailwind CSS 4
- Custom UI components (`src/components/ui/`) — no shadcn
- next-intl (TR / EN)
- Zod + React Hook Form (assessment wizard)
- Motion (`motion/react`) for scroll and reveal animations

Editorial content lives in TypeScript under `src/lib/mock/content/`, exposed through `src/lib/content/*` getters. UI copy is in `messages/*.json`. All content changes are developer-managed in the repo.

## Scripts

```bash
npm run dev        # http://localhost:3000 → redirects to /tr
npm run build
npm run start
npm run typecheck
npm run lint
```

## Structure

```
src/
├── app/[locale]/          # Routes (home, services, assessment, legal, …)
├── components/
│   ├── ui/                # Design system (button, container, cards, …)
│   ├── layout/            # Header, footer, lang switcher
│   ├── sections/          # Page sections (hero, services bento, …)
│   ├── motion/            # Fade, stagger, hero preview console
│   ├── assessment/        # Multi-step gap analysis wizard
├── lib/
│   ├── content/           # Public content API (facade → mock today)
│   ├── mock/              # Mock data + runtime source resolution
│   ├── site/              # Site config, contact, env helpers
│   ├── assessment/        # Zod schemas + server actions
│   ├── integrations/      # Assessment submit (stub / webhook)
│   └── seo/               # Metadata helpers
├── i18n/                  # next-intl routing + request config
messages/                  # TR / EN UI strings (next-intl)
public/                    # Static assets, team photos, llms.txt
research/                  # Internal audit notes & screenshots
```

## Content & data

| Layer                   | Role                                          |
| ----------------------- | --------------------------------------------- |
| `messages/*.json`       | UI copy, form labels, section headings        |
| `src/lib/mock/content/` | Services, team, testimonials, legal, about    |
| `src/lib/content/`      | Stable getters consumed by pages and sections |
| `src/lib/site/`         | Contact channels, site meta, env validation   |

Contact overrides: set required env vars (see `.env.example`).

Assessment delivery: `ASSESSMENT_SUBMIT_MODE=webhook` + `ASSESSMENT_WEBHOOK_URL`. Use `stub` to log only.

## Deploy (Hetzner)

Build produces standalone output:

```bash
npm run build
node .next/standalone/server.js
```

Docker + Caddy setup — coming next.
