# Reactbits Component Map — miesala

> Living document. Every reactbits component pulled into this project gets logged here with its **use case**, **install command**, and **location in code**.

## How to add a new component

You give me:
1. **Link** to the component page on reactbits.dev (or pro.reactbits.dev)
2. **Use case** — where in the project we want to use it

I do:
1. Identify the right registry (`@react-bits` / `@reactbits-starter` / `@reactbits-pro`)
2. Install via `npx shadcn@latest add @<registry>/<slug>`
3. Add an entry below
4. Note where it landed in the codebase

## Registry quick reference

| Alias | Tier | Auth | Endpoint |
|---|---|---|---|
| `@react-bits` | Free | None | `https://reactbits.dev/r/{name}.json` (note: free registry requires the **exact slug** including suffix like `-JS-CSS`) |
| `@reactbits-starter` | Starter (paid) | `REACTBITS_LICENSE_KEY` | `https://pro.reactbits.dev/api/r/starter/{name}.json` |
| `@reactbits-pro` | Pro (paid) | `REACTBITS_LICENSE_KEY` | `https://pro.reactbits.dev/api/r/pro/{name}.json` |

Set `REACTBITS_LICENSE_KEY=...` in `.env.local` (already gitignored).

## Status legend

| Symbol | Meaning |
|---|---|
| 🟢 | Installed and used in production code |
| 🟡 | Installed, not yet placed |
| 🔵 | Planned, not yet installed |
| ⚪ | Considered, decided against |

## Installed components

| Status | Slug | Tier | Source page | Code location | Where it's used |
|---|---|---|---|---|---|
| 🟢 | `count-up` | Free (vendored) | https://reactbits.dev/text-animations/count-up | `components/react-bits/CountUp.tsx` | All stats strips — animated 4.8★ / 44+ / 10+ / 15+ |
| 🟢 | `staggered-text-tw` | Starter (paid) | https://pro.reactbits.dev/components/staggered-text | `components/react-bits/staggered-text.tsx` | 43 plain-text h2 headings across 9 example pages (default header animation) |
| 🟢 | `BlurText-JS-CSS` | Free | https://reactbits.dev/text-animations/blur-text | `components/react-bits/BlurText.jsx` | ex-5 testimonials h2 ("Klienci mówią to samo."), ex-10 testimonials h2 ("Słowa, które mnie napędzają.") — fits soft pastel / warm organic variants |
| 🟢 | `SplitText-JS-CSS` | Free | https://reactbits.dev/text-animations/split-text | `components/react-bits/SplitText.jsx` | ex-1 blog teaser h2 ("Wiedza, którą mogę się podzielić.") — char-by-char GSAP animation pairs with the editorial serif |
| 🟢 | `TextType-JS-CSS` | Free | https://reactbits.dev/text-animations/text-type | `components/react-bits/TextType.jsx` + `TextType.css` | ex-3 (Industrial) hero eyebrow — rotates between "DORADZTWO KREDYTOWE / KREDYT HIPOTECZNY / REFINANSOWANIE / KONSOLIDACJA / PROGRAMY RZĄDOWE" with terminal-style cursor |
| 🟢 | `preloader-tw` | Starter (paid) | https://pro.reactbits.dev/components/preloader | `components/react-bits/preloader.tsx` + wrapper at `components/layout/SitePreloader.tsx` | First-visit brand intro on every example page. SessionStorage gates so it only plays once per session per variant (key pattern: `miesala-pre-example-N`). Per-variant params (variant / bgColor / loadingText / textClassName) match each example's design language — see SitePreloader call-sites in each `app/example-N/page.tsx` |

## Local patches applied

| File | Patch | Why |
|---|---|---|
| `BlurText.jsx`, `SplitText.jsx`, `staggered-text.tsx` | Prepended `"use client"` directive | Files use `useState`/`useEffect`/`useRef`; Next.js App Router requires client directive for these |
| `BlurText.jsx` | Added `as` prop + replaced root `<p>` with `<Tag>` | Lets the same component render as `<h2>` for semantic headings |
| `TextType.jsx` | Defaulted `variableSpeed` and `onSentenceComplete` to `undefined` | Without defaults, TS infers props as required in destructured signature |
| `SplitText.jsx` | Defaulted `onLetterAnimationComplete` to `undefined` | Same reason |

## Application strategy

- **StaggeredText** is the default "premium header animation" for plain-text h2s on every variant.
- **BlurText** lives on the soft variants (Claymorphism, Warm Organic) where its blur-fade matches the dreamy aesthetic.
- **SplitText** lives on the Editorial Minimal variant where its GSAP char-by-char move pairs with the Playfair serif.
- **TextType** is industrial-only — the typewriter cursor reinforces the "control panel / terminal" mood of variant 3.
- **CountUp** is universal — every stats strip uses it for 4.8★, 44+ opinions, 10+ years, 15+ banks.
