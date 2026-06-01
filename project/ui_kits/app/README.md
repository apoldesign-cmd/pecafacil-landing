# PeçaFácil — App UI Kit

A high-fidelity, **mobile-first** interactive recreation of the PeçaFácil operator app (the product yard staff use on a phone). Built from the brand brief and the marketing site's described screens — there was no codebase or Figma file, so component internals are cosmetic recreations, not production logic.

## Run it
Open `index.html`. It boots a phone frame that auto-scales to the viewport. Flow:
**Login → Painel (dashboard) → tap `+` → Cadastrar pela placa → scanner animation → Casa de peça (catalog) → Part detail (price intelligence + channels + AI description).** A **Vendas** tab shows a channel chart.

## Files
- `index.html` — app shell: phone frame, status bar, bottom tab bar, screen state machine, auto-scaling.
- `app.css` — kit styles (imports the system tokens from `../../colors_and_type.css`).
- `data.jsx` — sample parts, channels, BRL formatter.
- `primitives.jsx` — `Icon` (Lucide-style paths), `Logo`, `Stripe`, `Plate` (Mercosul), `Pill`, `PartThumb`.
- `ScreenLogin.jsx` — navy login with Senna top stripe.
- `ScreenDashboard.jsx` — KPI cards, AI insight callout, recent parts list.
- `ScreenScan.jsx` — plate entry + animated "explode em peças" scanner.
- `ScreenCatalog.jsx` — filter chips + 2-up grid of part product cards.
- `ScreenPartDetail.jsx` — price intelligence grid, channel toggles, AI description.

## Notes
- Icons are Lucide-style inline paths (2px stroke). Channel names (Mercado Livre, OLX, Facebook) are shown as text — third-party logos are intentionally not recreated.
- Part photos are neutral placeholders (gear glyph / camera icon) — drop in real photos for production.
- Components share scope via `window` assignment because each `<script type="text/babel">` is transpiled independently.
