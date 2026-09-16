# Local verification — 16 September 2026

- `pnpm build`: passed; homepage, robots.txt and sitemap.xml prerender successfully.
- `pnpm typecheck`: passed.
- `git diff --check`: passed.
- Production preview: http://127.0.0.1:4174 (`pnpm start`).
- Desktop (1440px) compared visually with the original prototype on port 4173.
- Mobile (390px): no horizontal overflow; navigation opens and Escape closes it.
- All three sensing tabs update their selected state and associated panel.
- Canvas changes while playing and remains unchanged when paused.
- Reduced-motion preference starts the canvas paused and disables hero animation.
- Research disclosure opens correctly.
- Clipboard-denied browser shows manual-copy fallback; permitted clipboard write was not independently verified.
- No browser runtime errors or framework overlays observed.

Screenshots are local verification evidence. Production mobile-network performance has not yet been measured. GitHub push and Vercel deployment await local design approval.
