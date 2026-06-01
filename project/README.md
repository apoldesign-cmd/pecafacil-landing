# PeçaFácil — Design System

> Sistema de gestão e venda de autopeças usadas para desmanches. O operador cadastra as peças pela placa, precifica com inteligência do Mercado Livre e anuncia em vários canais.

PeçaFácil is a SaaS for auto-salvage yards (*desmanches*). The flow: the operator types a license **plate**, the system "explodes" every part of that vehicle model, suggests a **Mercado Livre** price per part, generates quotes/receipts, and publishes listings across channels (Mercado Livre, OLX, Facebook, own store). The brand voice is **confiável, direto, profissional** — trustworthy, direct, professional — built for use on a phone, in the yard.

The product is **mobile-first**: operators work outdoors, one-handed, cataloguing parts. Reliability and clarity beat decoration.

---

## Sources

- **Visual reference (marketing site):** https://pecafacil-rho.vercel.app — recreated from full page text/structure. *Note: the live site's binary assets (logo SVG, screenshots) were not directly downloadable in this environment; the wordmark + gear symbol are recreated in code from the brand brief.*
- **Brand brief:** provided directly (wordmark, gear symbol, green/yellow Senna stripe motif, Inter typography, exact hex tokens).
- No codebase or Figma file was attached — components are built from the brand brief and the marketing site's described screens.

---

## Brand at a glance

- **Wordmark:** "Peça" in navy `#212E50` + "Fácil" in brand blue `#3B5391`. Symbol: an **engrenagem (gear)**.
- **Senna motif:** two vertical stripes — **green `#008044` + yellow `#FFCB35`** — used at corners, dividers and accents. (Evokes Brazilian racing / national colors; signals speed + trust.)
- **Typography:** Inter. Titles bold with slightly negative tracking.

---

## CONTENT FUNDAMENTALS

How PeçaFácil writes (observed from the marketing site):

- **Language:** Brazilian Portuguese.
- **Person:** Direct **"você"** (you). Speaks to the yard owner as a partner. Imperative, action-led: *"Digite a placa"*, *"Cadastre sua primeira sucata hoje"*, *"É só vender."*
- **Tone:** Confident, concrete, benefit-first. No jargon, no fluff. Sentences are short and punchy. Promises are quantified: *"47 peças por veículo, em segundos"*, *"+30% de margem"*, *"1 clique para anunciar"*.
- **Casing:** Sentence case for headings and buttons (*"Começar grátis"*, *"Ver o sistema"*). Eyebrows are short Title/sentence-case labels (*"Por dentro do sistema"*, *"Como funciona"*). Plate characters are uppercase.
- **Numbers:** Prices always `R$ 1.430` (BRL, dot thousands). Stats lead with the number + a tight benefit clause.
- **Emoji:** Used **sparingly and functionally** — only the green check ✅ inside AI-generated listing copy and channel checkmarks. Not decorative. Do not sprinkle emoji into UI chrome.
- **Vibe:** "From a messy yard to an organized business." Practical transformation story (*Antes / Depois*). Trustworthy, never hypey.

Example copy blocks:
- Hero: *"Você cadastra o veículo inteiro em minutos."*
- Sub: *"Digite a placa e o PeçaFácil explode todas as peças do modelo, sugere o preço do Mercado Livre, emite orçamentos e recibos e publica seus anúncios — tudo num só lugar."*
- CTA pair: *"Começar grátis"* (primary) / *"Ver o sistema"* (secondary).
- Reassurance line: *"Sem cartão · Plano gratuito para sempre"*.

---

## VISUAL FOUNDATIONS

- **Color vibe:** Cool, trustworthy navy/blue base lifted by the warm green+yellow Senna accent. Backgrounds are a very light cool gray `#F7F9FC`; surfaces are pure white. Text is slate, not pure black.
- **Type:** Inter throughout. Display/headings are **bold–extrabold (700–800)** with negative tracking (`-0.02em`) for a tight, engineered feel. Body is 400/500 with relaxed leading. Numerals use tabular figures in data contexts (prices, KPIs, plates).
- **The Senna stripe:** the signature device — a thin green bar beside a thin yellow bar, vertical. Used as: a left accent rail on hero/section cards, a divider, a corner flag, and the active-state indicator in navigation. Green always leads (left/top), yellow follows. Keep stripes thin (3–6px each) and confident — never gradients.
- **Backgrounds:** flat fills. No photographic hero backgrounds in chrome; product imagery (part photos) is content, framed in cards. Subtle tinted semantic surfaces (`--*-bg`) for callouts. **Avoid** bluish-purple gradients entirely.
- **Cards:** white surface, `--radius-lg` (14px) corners, hairline `1px solid var(--border)` border + soft `--shadow-sm`. On hover, lift to `--shadow-md` and the border warms slightly. Featured/product cards may carry a green+yellow stripe on the left edge.
- **Corner radii:** controls 10px, cards 14px, large panels 20px, pills/avatars full. Plate uses 8px with a heavier inner frame.
- **Borders:** 1px `#E2E8F0` hairlines for structure; 1.5–2px brand border for outline buttons and focused inputs.
- **Shadows:** soft, navy-tinted, never gray-black. Five-step elevation (xs→xl). Elevation conveys interactivity; flat = static.
- **Motion:** quick and purposeful. `--dur-base` 200ms with `--ease-standard`. Fades + small translate/scale (≤4px / 0.98–1.0). No bounces, no long spring. Hover transitions on shadow/border/transform. Loading uses a subtle shimmer or a thin brand progress bar.
- **Hover states:** primary buttons darken to `--brand-700`; ghost/outline gain a tinted `--info-bg` fill; cards lift. **Press states:** scale to `0.98` + remove lift.
- **Focus:** always visible — `--shadow-focus` 3px brand ring (`rgba(59,83,145,0.28)`), never removed.
- **Transparency / blur:** used lightly — modal scrims `rgba(26,36,64,0.55)`, optional sticky-header backdrop blur. Not a primary aesthetic.
- **Layout:** mobile-first. Sticky top header (60px), bottom tab bar on mobile / left sidebar (248px) on desktop. Generous gaps (16–24px) on a 4px spacing base.

---

## ICONOGRAPHY

- **System:** **Lucide** (https://lucide.dev) — clean 2px-stroke, rounded line icons. This matches the product's clean, engineered, trustworthy feel. Loaded from CDN (`lucide@latest`). *Substitution note: no icon set was shipped in the brief; Lucide is the chosen standard — flag if the real product uses something else.*
- **Stroke / style:** outline (line) icons, 2px stroke, 24px grid, rounded line caps/joins. Use at 18–24px in UI, 16px inline.
- **Brand symbol:** the **gear (engrenagem)** is the logo mark — use Lucide `cog`/`settings` silhouette for the brandmark, rendered in navy or as a green/yellow accent. Do not use the gear as a generic settings icon elsewhere when it appears at logo scale.
- **Emoji:** only ✅ inside AI-written listing copy and channel confirmation — never in chrome.
- **Unicode:** the middot `·` is used as a separator (*"Motor · Boa"*, *"Sem cartão · Plano gratuito para sempre"*).
- **Channel logos** (Mercado Livre, OLX, Facebook) appear as small brand chips — represent with neutral labeled pills in the kit (do not recreate third-party logos).

See `assets/` for the recreated PeçaFácil logo and the Senna stripe device.

---

## INDEX — files in this system

- `README.md` — this file: context, content, visual foundations, iconography, index.
- `colors_and_type.css` — all design tokens (color, type scale, spacing, radius, shadow, motion) + semantic element styles.
- `SKILL.md` — Agent Skill manifest for reuse in Claude Code.
- `assets/` — logo (wordmark + gear), Senna stripe device, favicon.
- `preview/` — Design System tab cards (colors, type, spacing, components, brand). Open `preview/_index.html` to browse.
- `ui_kits/app/` — high-fidelity interactive recreation of the PeçaFácil operator app (mobile-first). Open `ui_kits/app/index.html`.
