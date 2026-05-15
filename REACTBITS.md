# Reactbits Component Map — miesala

> Living document. Every reactbits component pulled into this project gets logged here with its **use case**, **install command**, and **location in code**.

## How to add a new component

You give me:
1. **Link** to the component page on reactbits.dev (or pro.reactbits.dev)
2. **Use case** — where in the project we want to use it

I do:
1. Identify the right registry (`@react-bits` / `@reactbits-starter` / `@reactbits-pro`)
2. Add an entry below
3. Install via `npx shadcn@latest add @<registry>/<slug>` — or, for free-tier components where reactbits.dev no longer serves JSON, vendor the source manually into `components/react-bits/` with attribution
4. Note where it landed

## Registry quick reference

| Alias | Tier | Auth | Notes |
|---|---|---|---|
| `@react-bits` | Free | None | `https://reactbits.dev/r/{name}.json` — currently returns HTML; vendor source manually for now |
| `@reactbits-starter` | Starter (paid) | `REACTBITS_LICENSE_KEY` | `https://pro.reactbits.dev/api/r/starter/{name}.json` |
| `@reactbits-pro` | Pro (paid) | `REACTBITS_LICENSE_KEY` | `https://pro.reactbits.dev/api/r/pro/{name}.json` |

Set `REACTBITS_LICENSE_KEY=...` in `.env.local` to install pro components via the shadcn CLI.

## Status legend

| Symbol | Meaning |
|---|---|
| 🟢 | Installed and used in production code |
| 🟡 | Installed, not yet placed |
| 🔵 | Planned, not yet installed |
| ⚪ | Considered, decided against |

## Installed components

| Status | Slug | Tier | Source | Location | Used in |
|---|---|---|---|---|---|
| 🟢 | `count-up` | Free | https://reactbits.dev/text-animations/count-up | `components/react-bits/CountUp.tsx` | Stats sections across example homepages — animated rating, opinion count, banks count, years of experience |
