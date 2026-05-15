import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, gImg, blogImage, pick } from "@/lib/content";

/* Variant 8 — Swiss Modernist Grid
 * Biel + czerń + czerwony akcent, Inter (helveticowy vibe), strict 12-col grid, numery, ascetyzm.
 */

const hero = pick(pixabay.real_estate, 0);
const top3Reviews = reviews.reviews.slice(0, 3);
const top3Posts = blogIndex.slice(0, 3);

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black font-[family-name:var(--font-inter)]">
      <header className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-bold tracking-tight">Miesała ── Ekspert</Link>
          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest">
            <a href="#oferta">01 / Oferta</a><a href="#opinie">02 / Opinie</a><a href="#blog">03 / Blog</a><a href="#faq">04 / FAQ</a>
          </nav>
          <a href={company.contact.phoneTel} className="text-xs font-bold tracking-widest">{company.contact.phone} →</a>
        </div>
      </header>

      {/* Hero - 12 col grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 grid grid-cols-12 gap-x-6 text-[10px] uppercase tracking-[0.3em] text-black/60 border-b border-black pb-4">
          <p className="col-span-2">Sekcja 01</p>
          <p className="col-span-2">{company.contact.address.city}, PL</p>
          <p className="col-span-2">Est. 2014</p>
          <p className="col-span-2 col-start-9 text-right">Aktualizacja:</p>
          <p className="col-span-2 text-right">{new Date().toLocaleDateString("pl-PL")}</p>
        </div>

        <div className="col-span-12 md:col-span-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 mb-4">— Doradca kredytowy</p>
          <h1 className="text-[14vw] md:text-[10vw] lg:text-[8.5vw] font-bold tracking-tighter leading-[0.85] uppercase">
            Kredyt.<br/>
            <span className="text-red-600">Hipoteczny.</span><br/>
            <span className="font-light">Niezależny.</span>
          </h1>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-6">
          <p className="text-lg leading-snug max-w-xs">
            Niezależny ekspert finansowy. Pośrednictwo kredytów hipotecznych w Osielsku i Bydgoszczy. Bezpłatna konsultacja, kompleksowa obsługa, 15+ banków w portfelu.
          </p>
          <a href={company.contact.phoneTel} className="inline-flex items-center justify-between px-5 py-4 bg-black text-white text-xs uppercase tracking-widest">
            <span>Umów rozmowę</span><span>→</span>
          </a>
        </div>

        {/* Hero image */}
        <div className="col-span-12 md:col-span-7 aspect-[16/10] relative">
          <Image src={hero.largeImageURL} alt="" fill className="object-cover" sizes="(min-width:768px) 60vw, 100vw" priority unoptimized />
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-white px-2 py-1 border border-black">Fig. 01</span>
        </div>
        <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div key={s.label} className="border-t border-black pt-3">
              <p className="text-[10px] uppercase tracking-widest text-black/60">N&deg; 0{i + 1}</p>
              <p className="text-4xl font-bold tracking-tight mt-1">{s.value}</p>
              <p className="text-xs text-black/70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-black" />

      {/* Services */}
      <section id="oferta" className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 mb-3">— Sekcja 02</p>
          <h2 className="text-4xl font-bold tracking-tight uppercase leading-none">Oferta /<br/>Zakres usług</h2>
          <p className="mt-5 text-sm text-black/70 max-w-xs">Sześć obszarów doradztwa pokrywających cały cykl finansowania nieruchomości.</p>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-x-6">
          {services.map((s, i) => (
            <article key={s.slug} className="border-t border-black py-5 col-span-2 sm:col-span-1">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold">0{i + 1}</span>
                <span className="w-6 h-6 border border-black grid place-items-center text-[10px]">+</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mt-4">{s.title}</h3>
              <p className="mt-3 text-sm text-black/70 leading-relaxed">{s.short}</p>
            </article>
          ))}
        </div>
      </section>

      <hr className="border-black" />

      {/* Reviews */}
      <section id="opinie" className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 mb-3">— Sekcja 03</p>
          <h2 className="text-4xl font-bold tracking-tight uppercase leading-none">Opinie /<br/>Klienci</h2>
          <p className="mt-5 text-7xl font-bold leading-none">{company.rating.value}<span className="text-black/40 text-3xl">/5</span></p>
          <p className="text-xs uppercase tracking-widest mt-2">{company.rating.count} opinii · Google</p>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {top3Reviews.map((r, i) => (
            <figure key={i} className="border-t border-black pt-5">
              <p className="text-[10px] uppercase tracking-widest text-red-600 mb-2">★★★★★</p>
              <blockquote className="text-sm leading-relaxed">&ldquo;{r.text.length > 200 ? r.text.slice(0, 200) + "…" : r.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-[10px] uppercase tracking-widest">— {r.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <hr className="border-black" />

      {/* Blog */}
      <section id="blog" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-6 mb-10">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 mb-3">— Sekcja 04</p>
            <h2 className="text-4xl font-bold tracking-tight uppercase leading-none">Blog /<br/>Aktualności</h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {top3Posts.map((p, i) => (
            <article key={p.slug} className="col-span-12 md:col-span-4 border-t border-black pt-4">
              <p className="text-[10px] uppercase tracking-widest mb-2">N&deg; 0{i + 1} · {p.dateDisplay}</p>
              <div className="aspect-[4/3] relative mb-4">
                <Image src={blogImage(p, i)} alt="" fill className="object-cover" unoptimized />
              </div>
              <h3 className="text-xl font-bold leading-snug">{p.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <hr className="border-black" />

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 mb-3">— Sekcja 05</p>
            <h2 className="text-4xl font-bold tracking-tight uppercase leading-none">Galeria</h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-1">
          {images.gallery.slice(0, 8).map((g, i) => (
            <div key={i} className="col-span-6 sm:col-span-4 md:col-span-3 aspect-square relative">
              <Image src={gImg(g.url, 600)} alt="" fill className="object-cover" sizes="25vw" unoptimized />
            </div>
          ))}
        </div>
      </section>

      <hr className="border-black" />

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 mb-3">— Sekcja 06</p>
          <h2 className="text-4xl font-bold tracking-tight uppercase leading-none">FAQ /<br/>Indeks pytań</h2>
        </div>
        <div className="col-span-12 md:col-span-8 divide-y divide-black border-y border-black">
          {faq.map((f, i) => (
            <details key={i} className="py-5 group">
              <summary className="grid grid-cols-12 gap-4 items-baseline cursor-pointer list-none">
                <span className="col-span-2 md:col-span-1 text-xs uppercase tracking-widest">0{i + 1}</span>
                <span className="col-span-9 md:col-span-10 font-bold text-lg leading-snug">{f.q}</span>
                <span className="col-span-1 text-right text-red-600 transition group-open:rotate-90">▸</span>
              </summary>
              <p className="mt-3 ml-[16.66%] md:ml-[8.33%] text-sm text-black/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <hr className="border-black" />

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-500 mb-4">— Sekcja 07 · Kontakt</p>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
              Pierwsza<br/>rozmowa.<br/>Bezpłatna.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 text-right">
            <a href={company.contact.phoneTel} className="inline-flex flex-col items-end gap-1">
              <span className="text-xs uppercase tracking-widest text-white/70">Zadzwoń</span>
              <span className="text-3xl font-bold tracking-tight">{company.contact.phone}</span>
              <span className="mt-2 text-xs uppercase tracking-widest text-red-500">→ kliknij, by zadzwonić</span>
            </a>
          </div>
        </div>
      </section>

      <footer id="kontakt" className="border-t border-black">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="text-sm font-bold">{company.shortName}</p>
            <p className="text-sm mt-2">{company.contact.address.full}</p>
            <p className="text-sm">{company.contact.phone}</p>
          </div>
          <div className="col-span-12 md:col-span-4 text-sm">
            <p className="text-[10px] uppercase tracking-widest text-red-600 mb-3">Godziny</p>
            <ul className="space-y-1">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between border-b border-black/30 py-1"><span>{d}</span><span className={h === "Zamknięte" ? "text-black/50" : "font-bold"}>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="aspect-video">
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full grayscale" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <p className="max-w-7xl mx-auto px-6 py-4 text-[10px] uppercase tracking-widest flex justify-between border-t border-black">
          <span>© {new Date().getFullYear()} {company.owner}</span>
          <span>Wariant 8 — Swiss Modernist</span>
          <Link href="/" className="underline">← All variants</Link>
        </p>
      </footer>
    </main>
  );
}
