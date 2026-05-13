# Content Library — Ekspert Finansowy Artur Miesała

Scraped from <https://ekspert-finansowy-artur.localo.site/> on 2026-05-13.
Organized so you can drop it into any design / framework without re-scraping.

## File map

| File | What it is | Use it for |
|---|---|---|
| `company.json` | Core business identity — name, owner, phone, address, hours, rating, offer, external profiles | Header, footer, contact section, JSON-LD, SEO meta |
| `homepage.json` | Section-by-section homepage data, already chunked into `hero`, `sections.reviewsTeaser`, `sections.blogTeaser`, `sections.contact`, `sections.galleryTeaser`, `footer` | Drop straight into a homepage component tree |
| `images.json` | Avatar, hero/cover, full gallery (14 photos), per-post blog images, plus stock-mixing notes | Image picker for any layout / variant. URLs accept `=sNNN` suffix to resize (e.g. `=s600`, `=s1200`) |
| `reviews.json` | All 24 visible Google reviews (rating + author + text) plus summary (4.8 / 44 total) | Testimonials, social-proof carousel, trust strip |
| `reviews.md` | Same reviews in readable Markdown | Quick read-through, content audits, AI prompting |
| `blog/index.json` | List of 11 blog posts with title, date, image, excerpt, link to MD | Blog teaser card, sitemap, listing page |
| `blog/<slug>.md` | Full blog post body (Markdown, with frontmatter) | Article pages, CMS seeding, SEO-rich pages |
| `raw/` | Untouched HTML snapshots of every page (homepage, reviews, blog, photos, contact, all 11 blog post pages) | Re-parse if you need something else later |

## Quick facts to keep in mind

- **Business**: Ekspert Finansowy Artur Miesała — pośrednictwo kredytów hipotecznych
- **Owner**: Artur Miesała (solo expert; copy is written in first person — "moja misja", "skontaktuj się ze mną")
- **Location**: Leśna 45b, 86-031 Osielsko (k. Bydgoszczy)
- **Phone**: +48 579 632 837 (single CTA across the entire site — no contact form, no email shown)
- **Hours**: Mon–Fri 09:00–19:00, weekends closed
- **Rating**: 4.8 / 5 from 44 Google reviews
- **Language**: Polish only
- **Service area**: Osielsko, Bydgoszcz, Toruń, województwo kujawsko-pomorskie

## Designing the homepage — what you've got

Everything the original site shows is captured. For a redesign, the **must-have** sections are:

1. **Hero** — owner name + "Kredyt Hipoteczny" tagline, 4.8★ trust badge, "Zadzwoń!" CTA with phone, hero portrait/cover.
2. **Social proof** — pick 3 strongest reviews from `reviews.json`.
3. **Services / offer** — currently the site only says "Pośrednik kredytów hipotecznych". You can flesh this out from the blog topics (Kredyt 2%, Kredyt na Start 2024, marża, prowizja, konsolidacja, okres kredytowania, podatek od najmu).
4. **About / dlaczego ja** — re-use `company.longDescription` or rewrite based on it.
5. **Blog teaser** — 3 latest posts from `blog/index.json`.
6. **Gallery / portret** — pick from `images.gallery` or use one cover image.
7. **Contact** — phone, address, hours, embedded map (`company.contact.googleMaps.embed`).

## Images & stock mixing

All images are Google-hosted (`lh3.googleusercontent.com`). They look like phone-captured shots from the Google Business Profile. For a polished redesign:

- Keep `images.avatar` (real face) and `images.cover` (current hero) — they are authentic and high-trust.
- Mix in stock for hero variants, service tiles, and decorative shots. Suggested stock queries:
  `mortgage advisor poland`, `young family receiving house keys`, `kalkulator kredytowy`,
  `podpisywanie umowy kredytowej`, `dom jednorodzinny Polska`, `mieszkanie Bydgoszcz`,
  `professional financial advisor handshake`, `flat lay finance documents`.
- To request a specific size from Google: append `=sNNN` to any `=s0` URL (e.g. `=s600`, `=s1200`, `=s1920`).

## Re-scraping

Source pages saved to `raw/`. To rebuild structured files, re-run the parsing logic against:

- `raw/homepage.html`
- `raw/reviews.html`
- `raw/blog.html` + `raw/blog/<slug>.html` (11 posts)
- `raw/photos.html`
- `raw/contact.html`
