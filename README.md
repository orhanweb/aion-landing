# AION Web

Enterprise AI governance marketing site — Next.js, custom UI kit, TR/EN.

## Stack

- Next.js 16 (App Router, standalone output)
- TypeScript (strict)
- Tailwind CSS 4
- Custom UI components (`src/components/ui/`) — no shadcn
- next-intl (TR / EN)
- Zod + React Hook Form (assessment wizard)
- MDX-ready (`content/`)

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
├── app/[locale]/     # Routes
├── components/
│   ├── ui/           # Custom design system
│   ├── layout/       # Header, footer
│   ├── sections/     # Homepage sections
│   └── assessment/   # Multi-step form
├── lib/              # SEO, schema, content
├── i18n/             # next-intl config
messages/             # TR / EN UI strings
content/              # MDX content (services)
research/             # Site audit & screenshots
public/llms.txt       # GEO
```

## Deploy (Hetzner)

Build produces standalone output:

```bash
npm run build
node .next/standalone/server.js
```

Docker + Caddy setup — coming next.
