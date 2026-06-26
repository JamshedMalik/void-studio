# Void Studio

A professional one-page website for **Void Studio** — a design agency creating logos, websites, and visual brand systems for companies.

## Live Preview

> Run locally with `npm run dev` → [http://localhost:3000](http://localhost:3000)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Components | shadcn/ui |
| 3D / Shader | Three.js (WebGL) |
| Fonts | Syne · Outfit · Space Mono (via `next/font/google`) |

## Features

- **WebGL hero** — full-viewport chromatic sine-wave shader (Three.js `RawShaderMaterial`) with a double-border content card overlay
- **Liquid glass CTA button** — SVG `feTurbulence` + `feDisplacementMap` backdrop filter effect
- **Portfolio grid** — 6 project cards with per-project atmospheric radial glows and ghost monograms
- **Scroll-aware nav** — transparent → blur + dark background on scroll, with mobile hamburger overlay
- **Marquee ticker** — pure CSS animation, no JS
- **Fully responsive** — 1-column mobile → 2-column tablet → 3-column desktop
- **Accessible** — `prefers-reduced-motion` respected, visible focus rings, semantic HTML

## Project Structure

```
├── app/
│   ├── globals.css       # Tailwind directives + CSS variables + utility classes
│   ├── layout.tsx        # Root layout with Google Fonts
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── nav.tsx           # Sticky navigation
│   ├── sections/
│   │   ├── hero.tsx      # WebGL shader + centered content card
│   │   ├── ticker.tsx    # Marquee strip
│   │   ├── work.tsx      # Portfolio grid (6 projects)
│   │   ├── services.tsx  # Logo / Web / Brand cards
│   │   ├── about.tsx     # Pull quote + studio description
│   │   ├── contact.tsx   # CTA + email link
│   │   └── footer.tsx    # Footer
│   └── ui/
│       ├── web-gl-shader.tsx        # Three.js WebGL canvas component
│       └── liquid-glass-button.tsx  # Glass morphism button
├── lib/
│   └── utils.ts          # cn() utility (clsx + tailwind-merge)
├── tailwind.config.ts    # Custom design tokens + animations
├── CLAUDE.md             # AI assistant conventions for this project
└── components.json       # shadcn/ui config
```

## Design Tokens

| Token | Value | Role |
|---|---|---|
| `--void` | `#0B0B12` | Primary background |
| `--signal` | `#F4F2EE` | Primary text |
| `--ash` | `#6E6E7E` | Secondary text / labels |
| `--matter` | `#181824` | Card backgrounds |
| `--surface` | `#28283E` | Borders / dividers |
| Gradient | `#8A5CF7 → #D4587A → #F0956A` | Shader accent (hero only) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Sections

1. **Hero** — WebGL chromatic wave shader + "Before your brand, there is a void." card
2. **Ticker** — scrolling service categories marquee
3. **Selected Work** — Meri, Kairos, Sable, North Quarter, Ardent, Fenix
4. **Services** — Logo · Web · Brand
5. **About** — Studio philosophy and process
6. **Contact** — "Ready to exist?" CTA

---

Built with [Claude Code](https://claude.ai/code)
