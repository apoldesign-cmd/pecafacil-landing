---
name: pecafacil-design
description: Use this skill to generate well-branded interfaces and assets for PeçaFácil (sistema de gestão e venda de autopeças usadas para desmanches), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Tokens & type:** `colors_and_type.css` — import it; never hardcode hex.
- **Brand:** navy `#212E50` "Peça" + blue `#3B5391` "Fácil", gear (engrenagem) mark, green `#008044` + yellow `#FFCB35` Senna stripes (green always leads). Inter, bold titles, tracking −0.02em.
- **Assets:** `assets/` (logo-horizontal.svg, logo-mark.svg, senna-stripe.svg).
- **Components:** `preview/` cards show every token and component state.
- **UI kit:** `ui_kits/app/` — mobile-first operator app; reuse `primitives.jsx` (Icon, Logo, Plate, Pill, PartThumb) and the screen components.
- **Icons:** Lucide (2px stroke). **Voice:** Brazilian Portuguese, "você", direct & quantified. Emoji only ✅ in AI listing copy.
