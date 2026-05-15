import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, gImg, blogImage, pick } from "@/lib/content";
import { SitePreloader } from "@/components/layout/SitePreloader";
import { Reveal } from "@/components/motion/Reveal";
import { FaqItem } from "@/components/motion/FaqItem";
import { HeroLines, HeroLine } from "@/components/motion/HeroLines";
import { HeroImage } from "@/components/motion/HeroImage";
import { EditorialMarquee } from "@/components/motion/EditorialMarquee";
import { MobileNav } from "@/components/nav/MobileNav";
import CountUp from "@/components/react-bits/CountUp";

/* Variant 8 — Swiss Modernist Grid (v2 — editorial shuffle)
 * Asymmetric 12-col grid, monochrome + Swiss red, marquee band, editorial
 * blog TOC, sticky FAQ rail, typographic CTA. Inter as a Helvetica stand-in.
 */

const hero = pick(pixabay.real_estate, 0);
const spread = pick(pixabay.modern_house, 0);
const top3Reviews = reviews.reviews.slice(0, 3);
const top3Posts = blogIndex.slice(0, 3);

const TOTAL_SECTIONS = 7;

// Reusable section-eyebrow with paginator on the right
function SectionRail({ n, label }: { n: number; label: string }) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-x-6 text-[10px] uppercase tracking-[0.3em] border-b border-black pb-3">
      <p className="col-span-2 text-red-600">— Sekcja {String(n).padStart(2, "0")}</p>
      <p className="col-span-6 col-start-3 truncate text-black/60">{label}</p>
      <p className="col-span-4 text-right text-black/60 tabular-nums">{String(n).padStart(2, "0")} / {String(TOTAL_SECTIONS).padStart(2, "0")}</p>
    </div>
  );
}

const marqueeWords = [
  "BEZPŁATNA KONSULTACJA",
  "NIEZALEŻNY EKSPERT",
  "15+ BANKÓW W PORTFELU",
  "4.8★  / 44 OPINII GOOGLE",
  "OSIELSKO  ·  BYDGOSZCZ  ·  POLSKA",
  "OD 2014 ROKU",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black font-[family-name:var(--font-inter)]">
      <SitePreloader
        storageKey="miesala-pre-example-8"
        variant="stairs"
        bgColor="#ffffff"
        loadingText="Miesała Ekspert"
        textClassName="text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter"
        stairCount={10}
      />
      {/* Top header */}
      <header className="border-b border-black sticky top-0 z-40 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-14 grid grid-cols-12 items-center gap-6">
          <Link href="/" className="col-span-6 md:col-span-3 text-sm font-bold tracking-tight">
            <span className="text-red-600">●</span> Miesała ── Ekspert
          </Link>
          <nav className="col-span-6 hidden md:flex items-center justify-center gap-7 text-[11px] uppercase tracking-widest tabular-nums">
            <a href="#oferta">01 / Oferta</a>
            <a href="#opinie">02 / Opinie</a>
            <a href="#blog">03 / Blog</a>
            <a href="#galeria">04 / Galeria</a>
            <a href="#faq">05 / FAQ</a>
          </nav>
          <a href={company.contact.phoneTel} className="max-md:hidden md:col-span-3 text-right text-xs font-bold tracking-widest tabular-nums">
            {company.contact.phone} →
          </a>
          <div className="col-span-6 flex justify-end md:hidden">
            <MobileNav
              tone="light"
              items={ [{ label: "Oferta", href: "#oferta" }, { label: "Opinie", href: "#opinie" }, { label: "Blog", href: "#blog" }, { label: "Galeria", href: "#galeria" }, { label: "FAQ", href: "#faq" }] }
              phone={company.contact.phone}
              phoneTel={company.contact.phoneTel}
              ctaClassName="bg-black text-white hover:bg-red-600"
              triggerClassName="text-black"
            />
          </div>
        </div>
      </header>

      {/* Hero — asymmetric */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-14 grid grid-cols-12 gap-x-6 gap-y-10">
          {/* Editorial header line — hidden on mobile (12-col-of-tabular meta
              overlaps below ~600px). Decorative chrome; the page reads fine
              without it on phones. */}
          <div className="col-span-12 hidden md:grid grid-cols-12 gap-x-6 text-[10px] uppercase tracking-[0.3em] text-black/60 border-b border-black pb-3 tabular-nums">
            <p className="col-span-2">№ 01 / Hero</p>
            <p className="col-span-3">{company.contact.address.city}, PL · {company.contact.address.postalCode}</p>
            <p className="col-span-2">EST. 2014</p>
            <p className="col-span-2 col-start-9 text-right">{new Date().toLocaleDateString("pl-PL")}</p>
            <p className="col-span-3 text-right">Wariant 08 · Swiss Editorial v2</p>
          </div>

          {/* Left thin index column — hidden on mobile (becomes a useless
              horizontal `01 02 03 04` strip when stacked). */}
          <aside className="col-span-1 hidden md:flex flex-col items-start gap-10 text-[10px] uppercase tracking-[0.3em] tabular-nums">
            <span className="font-bold">01</span>
            <span className="text-black/30">02</span>
            <span className="text-black/30">03</span>
            <span className="text-black/30">04</span>
          </aside>

          {/* Big headline */}
          <div className="col-span-12 md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 mb-3">— Doradca kredytowy / 01</p>
            <HeroLines className="text-[14vw] md:text-[10vw] lg:text-[8.5vw] font-bold tracking-tighter leading-[0.82] uppercase">
              <HeroLine>Kredyt.</HeroLine>
              <HeroLine className="text-red-600">Hipoteczny.</HeroLine>
              <HeroLine className="font-light italic">Niezależny.</HeroLine>
            </HeroLines>
            <div className="mt-8 max-w-md text-sm leading-relaxed text-black/80">
              <p>
                Niezależny ekspert finansowy. Pośrednictwo kredytów hipotecznych w Osielsku i&nbsp;Bydgoszczy. Bezpłatna konsultacja, kompleksowa obsługa, 15+&nbsp;banków w&nbsp;portfelu.
              </p>
            </div>
          </div>

          {/* Right metadata column */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6 md:items-stretch md:text-right">
            <a href={company.contact.phoneTel} className="block bg-black text-white p-5 hover:bg-red-600 transition">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-2">Krok 01 · Telefon</p>
              <p className="text-3xl font-bold tracking-tight tabular-nums">{company.contact.phone}</p>
              <p className="text-[10px] uppercase tracking-[0.3em] mt-3">Pon–Pt 09:00&minus;19:00 →</p>
            </a>

            <div className="border border-black p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/60 mb-2">Rating · Google</p>
              <p className="text-7xl font-bold tracking-tight leading-none tabular-nums">
                {company.rating.value}
                <span className="text-black/30 text-3xl">/5</span>
              </p>
              <div className="mt-3 flex md:justify-end items-center gap-3">
                <span className="text-red-600 tracking-widest">{"★★★★★"}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-black/60 tabular-nums">{company.rating.count} opinii</span>
              </div>
            </div>
          </div>

          {/* Full-bleed hero photo */}
          <div className="col-span-12 grid grid-cols-12 gap-6 mt-6">
            <div className="col-span-12 md:col-span-9 aspect-[16/8] relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden animate-hero-zoom will-change-transform">
                <HeroImage src={hero.largeImageURL} alt="" className="object-cover grayscale contrast-110" sizes="(min-width:768px) 75vw, 100vw" priority />
              </div>
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-white px-2 py-1 border border-black tabular-nums">FIG. 01 / Nieruchomość</span>
              <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest bg-white px-2 py-1 border border-black tabular-nums">SCALE 1:1</span>
            </div>
            <div className="col-span-12 md:col-span-3 flex flex-col justify-between">
              {stats.slice(0, 4).map((s, i) => (
                <div key={s.label} className={`${i > 0 ? "border-t border-black pt-3" : ""} ${i < 3 ? "pb-3" : ""}`}>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/60 tabular-nums">№ 0{i + 1}</p>
                  <p className="text-3xl font-bold tracking-tight tabular-nums mt-1"><CountUp to={s.to} duration={1.6} />{s.suffix}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/70 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial marquee — pauses when off-screen + on low-perf devices */}
      <EditorialMarquee words={marqueeWords} />

      {/* Services */}
      <section id="oferta" className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-x-6 gap-y-10">
          <SectionRail n={2} label="Oferta — Sześć obszarów doradztwa" />

          <div className="col-span-12 md:col-span-4">
            <Reveal as="h2" className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.85]">
              Zakres<br/>usług <span className="text-red-600">.</span>
            </Reveal>
            <p className="mt-6 text-sm text-black/70 max-w-xs leading-relaxed">
              Pełny cykl finansowania nieruchomości — od pierwszej rozmowy aż po uruchomienie środków przez bank.
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-black/40 tabular-nums">{services.length} pozycji</p>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-black">
            {services.map((s, i) => (
              <article key={s.slug} className="bg-white p-6 min-h-44 flex flex-col justify-between hover:bg-red-600 hover:text-white transition group">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[160%] tracking-tight tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-black/40 group-hover:text-white/70">/ 06</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight leading-snug">{s.title}</h3>
                  <p className="mt-2 text-xs text-black/60 leading-relaxed group-hover:text-white/80">{s.short}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — pull quote + grid */}
      <section id="opinie" className="border-b border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 grid grid-cols-12 gap-x-6 text-[10px] uppercase tracking-[0.3em] text-white/60 border-b border-white pb-3">
            <p className="col-span-2 text-red-500">— Sekcja 03</p>
            <p className="col-span-6 col-start-3 truncate">Klienci · Opinie Google</p>
            <p className="col-span-4 text-right tabular-nums">03 / {String(TOTAL_SECTIONS).padStart(2, "0")}</p>
          </div>

          {/* Hero quote */}
          <div className="col-span-12 md:col-span-8 relative">
            <span className="absolute -top-6 -left-2 text-red-500 font-bold text-[10rem] leading-none select-none">&ldquo;</span>
            <blockquote className="relative text-3xl md:text-5xl font-light tracking-tight leading-[1.05] pt-6">
              {top3Reviews[0].text.length > 280 ? top3Reviews[0].text.slice(0, 280) + "…" : top3Reviews[0].text}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="w-12 h-12 border-2 border-red-500 grid place-items-center font-bold text-lg text-red-500 tabular-nums">{top3Reviews[0].author[0]}</span>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest">{top3Reviews[0].author}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">★★★★★ · Google</p>
              </div>
            </figcaption>
          </div>

          {/* Rating + breakdown */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6 md:border-l md:border-white/30 md:pl-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-red-500">Average</p>
              <p className="text-[8rem] leading-none font-bold tabular-nums">
                {company.rating.value}
                <span className="text-white/40 text-4xl align-top">/5</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 tabular-nums">{company.rating.count} opinii Google</p>
            </div>
            <div className="grid grid-cols-5 gap-1 items-end h-20">
              {[40, 4, 0, 0, 0].map((v, i) => (
                <div key={i} className="flex flex-col items-center justify-end gap-1">
                  <div className="w-full bg-red-500" style={{ height: `${Math.max(v * 2, 4)}%` }} />
                  <span className="text-[10px] text-white/70 tabular-nums">{5 - i}★</span>
                </div>
              ))}
            </div>
          </div>

          {/* Smaller follow-up quotes */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 border-t border-white/30 pt-6">
            {top3Reviews.slice(1, 3).map((r, i) => (
              <figure key={i}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-red-500 mb-2 tabular-nums">№ 0{i + 2} · ★★★★★</p>
                <blockquote className="text-base leading-relaxed">&ldquo;{r.text.length > 220 ? r.text.slice(0, 220) + "…" : r.text}&rdquo;</blockquote>
                <figcaption className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/60">— {r.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Blog — editorial table of contents */}
      <section id="blog" className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-x-6 gap-y-10 items-start">
          <SectionRail n={3} label="Blog — Aktualności rynku kredytowego" />

          <div className="col-span-12 md:col-span-3 md:sticky md:top-24 self-start">
            <Reveal as="h2" className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.85]">
              Blog<br/>Index<span className="text-red-600">.</span>
            </Reveal>
            <p className="mt-5 text-sm text-black/70 max-w-xs">Wybrane teksty z notatnika eksperta.</p>
          </div>

          <ol className="col-span-12 md:col-span-9 divide-y divide-black border-y border-black">
            {top3Posts.map((p, i) => (
              <li key={p.slug} className="grid grid-cols-12 gap-x-6 py-6 items-center group">
                <span className="col-span-2 md:col-span-1 text-3xl md:text-5xl font-bold tracking-tighter leading-none tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="col-span-10 md:col-span-2 text-[10px] uppercase tracking-[0.3em] text-black/60 tabular-nums">{p.dateDisplay}</span>
                <h3 className="col-span-12 md:col-span-6 text-xl md:text-2xl font-bold leading-tight group-hover:text-red-600 transition">{p.title}</h3>
                <div className="col-span-12 md:col-span-3 aspect-[16/10] relative grayscale">
                  <Image src={blogImage(p, i)} alt="" fill className="object-cover" sizes="25vw" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery — contact sheet */}
      <section id="galeria" className="border-b border-black bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-x-6 gap-y-8 items-start">
          <SectionRail n={4} label="Galeria — Contact sheet" />
          <div className="col-span-12 md:col-span-3 md:sticky md:top-24 self-start">
            <Reveal as="h2" className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.85]">Galeria<span className="text-red-600">.</span></Reveal>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-6 aspect-[4/5] relative">
              <Image src={spread.largeImageURL} alt="" fill className="object-cover grayscale contrast-110" sizes="50vw" />
              <span className="absolute top-2 left-2 text-[10px] uppercase tracking-widest bg-white border border-black px-1.5 py-0.5 tabular-nums">FIG. 02</span>
            </div>
            <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-1">
              {images.gallery.slice(0, 6).map((g, i) => (
                <div key={i} className="aspect-square relative">
                  <Image src={gImg(g.url, 600)} alt="" fill className="object-cover grayscale hover:grayscale-0 transition" sizes="25vw" />
                  <span className="absolute top-1 left-1 text-[9px] uppercase tracking-widest bg-white border border-black px-1 py-0.5 tabular-nums">{String(i + 3).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — sticky left intro */}
      <section id="faq" className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-x-6 gap-y-8">
          <SectionRail n={5} label="FAQ — Indeks pytań klientów" />

          <div className="col-span-12 md:col-span-4">
            <Reveal as="h2" className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.85]">
              FAQ /<br/>Indeks pytań<span className="text-red-600">.</span>
            </Reveal>
            <p className="mt-5 text-sm text-black/70 max-w-xs leading-relaxed">
              Najczęściej zadawane pytania w procesie kredytowym. Inżynierskie odpowiedzi.
            </p>
            <a href={company.contact.phoneTel} className="mt-8 inline-flex items-center gap-3 border border-black px-5 py-3 hover:bg-black hover:text-white transition text-[11px] uppercase tracking-widest tabular-nums">
              {company.contact.phone} →
            </a>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-black/40 tabular-nums">{faq.length} pytań · {company.rating.count}+ klientów</p>
          </div>

          <div className="col-span-12 md:col-span-8 divide-y divide-black border-y border-black">
            {faq.map((f, i) => (
              <FaqItem
                key={i}
                className="py-5"
                question={
                  <span className="grid grid-cols-12 gap-4 items-baseline">
                    <span className="col-span-2 md:col-span-1 text-xs uppercase tracking-widest text-red-600 tabular-nums">Q.{String(i + 1).padStart(2, "0")}</span>
                    <span className="col-span-9 md:col-span-10 font-bold text-lg leading-snug hover:text-red-600 transition">{f.q}</span>
                    <span className="col-span-1 text-right text-black transition group-data-[state=open]/faq:rotate-90">▸</span>
                  </span>
                }
                contentClassName="mt-3 ml-[16.66%] md:ml-[8.33%] text-sm text-black/70 leading-relaxed"
                answer={f.a}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA — typographic */}
      <section className="border-b border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-12 gap-x-6 gap-y-10 items-end">
          <div className="col-span-12 grid grid-cols-12 gap-x-6 text-[10px] uppercase tracking-[0.3em] text-white/60 border-b border-white/30 pb-3">
            <p className="col-span-2 text-red-500">— Sekcja 06 · Kontakt</p>
            <p className="col-span-6 col-start-3 truncate">Bezpłatna konsultacja telefoniczna</p>
            <p className="col-span-4 text-right tabular-nums">06 / {String(TOTAL_SECTIONS).padStart(2, "0")}</p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Reveal as="h2" className="text-[12vw] md:text-[7.5vw] font-bold tracking-tighter uppercase leading-[0.85]">
              Pierwsza<br/>
              <span className="font-light italic">rozmowa.</span><br/>
              <span className="text-red-500">Bezpłatna.</span>
            </Reveal>
            <p className="mt-6 max-w-md text-white/70 text-sm">
              30 minut, by zrozumieć Twoją sytuację kredytową i zobaczyć realne opcje. Bez kosztów, bez zobowiązań.
            </p>
          </div>

          <a href={company.contact.phoneTel} className="col-span-12 md:col-span-5 md:text-right group">
            <span className="block text-[10px] uppercase tracking-[0.3em] text-white/60 mb-3">Zadzwoń teraz ↓</span>
            <span className="block text-5xl md:text-7xl font-bold tracking-tight leading-none tabular-nums group-hover:text-red-500 transition">
              {company.contact.phone}
            </span>
            <span className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-red-500">→ kliknij, by zadzwonić</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="border-t border-black">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-3">
            <p className="text-sm font-bold">{company.shortName}</p>
            <p className="text-sm mt-2 text-black/70">{company.contact.address.full}</p>
            <p className="text-sm tabular-nums">{company.contact.phone}</p>
          </div>
          <div className="col-span-12 md:col-span-3 text-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 mb-3">Godziny</p>
            <ul className="space-y-1 tabular-nums">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between border-b border-black/30 py-1">
                  <span>{d}</span>
                  <span className={h === "Zamknięte" ? "text-black/40" : "font-bold"}>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 mb-3">Mapa</p>
            <div className="aspect-video border border-black">
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full grayscale" loading="lazy" title="Mapa" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 text-[11px] leading-relaxed text-black/70">
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 mb-3">Colophon</p>
            <p>Typografia: <span className="text-black font-bold">Inter</span> (Helvetica stand-in).</p>
            <p>Siatka: 12-kol, gutter 24px, max-w-7xl.</p>
            <p>Paleta: czerń (#000), biel (#fff), Swiss red (#dc2626).</p>
            <p className="mt-2 text-black/40">Editorial v2 — {new Date().getFullYear()}</p>
          </div>
        </div>
        <p className="max-w-7xl mx-auto px-6 py-4 text-[10px] uppercase tracking-widest flex flex-wrap items-center gap-3 justify-between border-t border-black">
          <span>© {new Date().getFullYear()} {company.owner}</span>
          <span>Wariant 08 · Swiss Modernist · Editorial v2</span>
          <Link href="/" className="underline hover:text-red-600">← Wszystkie warianty</Link>
        </p>
      </footer>
    </main>
  );
}
