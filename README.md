# Sinthos website

Next.js App Router, React, TypeScript, and Tailwind CSS. This migrates the approved Sinthos prototype while preserving its content and visual direction, with the approved Convergence logo reconstructed as SVG.

## Local development

Requires Node.js 20.9+ and pnpm. From this directory:

```sh
pnpm install
pnpm dev
```

Open http://127.0.0.1:4174. Port 4174 keeps the original reference prototype on 4173 available for comparison.

```sh
pnpm typecheck
pnpm build
pnpm start
```

No environment variables or application secrets are required.

## Structure

- `src/app/page.tsx`: server-rendered landing page and content.
- `src/app/globals.css`: Tailwind theme tokens, contextual typography, and bespoke motion.
- `src/components/brand.tsx`: approved vector mark and wordmark lockup.
- `src/components/interactions.tsx`: responsive navigation, reveal behavior, email copy.
- `src/components/sensing-study.tsx`: keyboard-accessible concept tabs and motion controls.
- `src/components/field.tsx`: canvas illustration, suspended offscreen and in hidden tabs.
- `public/assets`: original hero, self-hosted fonts and licenses, SVG logos.
- `docs/DESIGN.md`: original design brief.

The sensing animation is an illustration, not functional detection software. Public content makes no deployment or measured performance claims.

## Styling

Use Tailwind utilities for component layout and responsive spacing. Change brand colors and fonts through the central theme in `globals.css`. Keep custom CSS for contextual typography and effects that are clearer there. Add shadcn components when actual interactive requirements justify them; this page does not need the library yet.

## Deployment

The intended deployment is the existing Vercel Git integration. This branch sets the framework to Next.js in `vercel.json` and retires the obsolete GitHub Pages workflow. Before merging, inspect the Vercel project for stale build/output-directory overrides inherited from the static site. Confirm its production branch is `main` and its domain is `sinthosinc.com`.

Use a pull request preview to check desktop/mobile screenshots, keyboard navigation, all three concept tabs, motion preference, copy-email feedback, console errors, and performance. Target LCP <=2.5s, INP <=200ms, and CLS <=0.1 at the 75th percentile; lab checks are only proxies for field data.

## Monorepo evolution

Keep this application independently deployable. It can move to `apps/website` in a pnpm workspace later; shared tokens and genuinely reused UI can become separate packages. Application software should have independent deployment and bundle boundaries.

## Imported source material

- `docs/reference-prototype/`: original HTML, CSS, JavaScript, imagery, fonts, and research references, preserved for comparison.
- `docs/brand/convergence-concept-2.png`: approved generated logo presentation; concept 1 is the earlier exploration.
- `public/assets/sinthos-mark.svg`: the previous session's vector reconstruction used by the website.

Recovered from Codex thread `01a0ab0f-1ff1-7883-9b46-f6a611943e53`. Original files remain available in their source workspace.

## Verification and release status

Dependencies are installed and pinned in `pnpm-lock.yaml`. Production build and TypeScript checks pass. Desktop and mobile browser checks cover page rendering, navigation, workflow tabs, motion controls, and console errors. Clipboard-denied environments receive a manual-copy fallback.

Branch: `feat/sinthos-nextjs-preview`, based on `origin/main`. Local approval is required before pushing or deploying. No deployment or production performance claim is made by these local checks.
