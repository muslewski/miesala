import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, gImg, blogImage, pick } from "@/lib/content";
import { SitePreloader } from "@/components/layout/SitePreloader";
import { Reveal } from "@/components/motion/Reveal";
import { HeroLines, HeroLine } from "@/components/motion/HeroLines";
import StaggeredText from "@/components/react-bits/staggered-text";
import { MobileNav } from "@/components/nav/MobileNav";
import CountUp from "@/components/react-bits/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/* Variant 4 — Bento Grid
 * Modułowe kafelki o różnych rozmiarach, Inter, jasne tło + indigo akcent.
 */

const hero = pick(pixabay.modern_house, 1);
const handshake = pick(pixabay.businessman_handshake, 1);
const top3Reviews = reviews.reviews.slice(2, 5);
const top3Posts = blogIndex.slice(0, 3);

// Shape only — bg/text/border MUST be set per-tile so Tailwind doesn't
// drop our color overrides under the bg-white default.
const tile = "rounded-3xl shadow-sm hover:shadow-md transition-all overflow-hidden";
const white = "bg-white border border-zinc-200 text-zinc-900";
const dark = "bg-zinc-900 border border-zinc-900 text-white";
const indigo = "bg-indigo-600 border border-indigo-600 text-white";
const indigoSoft = "bg-indigo-50 border border-indigo-200 text-zinc-900";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-[family-name:var(--font-inter)]">
      <SitePreloader
        storageKey="miesala-pre-example-4"
        variant="slide"
        bgColor="#fafafa"
        loadingText="Miesała Kredyt"
        textClassName="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight"
      />
      <header className="sticky top-0 z-40 bg-zinc-50/80 backdrop-blur border-b border-zinc-200">
        <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white grid place-items-center text-xs font-bold">AM</span>
            Miesała
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-zinc-600">
            <a href="#oferta">Oferta</a><a href="#opinie">Opinie</a><a href="#blog">Blog</a><a href="#faq">FAQ</a>
          </div>
          <a href={company.contact.phoneTel} className="text-sm px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">{company.contact.phone}</a>
        <MobileNav
            tone="light"
            items={ [{ label: "Oferta", href: "#oferta" }, { label: "Opinie", href: "#opinie" }, { label: "Blog", href: "#blog" }, { label: "FAQ", href: "#faq" }] }
            phone={company.contact.phone}
            phoneTel={company.contact.phoneTel}
            ctaClassName="bg-indigo-600 text-white hover:bg-indigo-700"
            triggerClassName="text-zinc-900"
          />
          </nav>
      </header>

      {/* Bento hero */}
      <section className="max-w-7xl mx-auto px-5 pt-10">
        <div className="grid grid-cols-6 auto-rows-[140px] gap-4">
          {/* Big hero tile */}
          <div className={`${tile} ${white} col-span-6 lg:col-span-4 row-span-4 p-8 md:p-10 relative flex flex-col justify-between`}>
            <div>
              <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" /> Niezależny ekspert kredytowy
              </span>
              <HeroLines className="font-[family-name:var(--font-inter)] text-4xl md:text-6xl font-bold tracking-tight mt-6 leading-[1.05]">
                <HeroLine>Twój kredyt hipoteczny</HeroLine>
                <HeroLine>w <span className="text-indigo-600">jednym</span> dobrym miejscu.</HeroLine>
              </HeroLines>
              <p className="mt-5 text-zinc-600 max-w-lg">
                Porównuję oferty 15+ banków i prowadzę Cię przez cały proces — od zdolności po klucze. Bez kosztów po Twojej stronie.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={company.contact.phoneTel} className="px-6 py-3 rounded-full bg-zinc-900 text-white hover:bg-indigo-600 transition">Zadzwoń</a>
              <a href="#oferta" className="px-6 py-3 rounded-full border border-zinc-300 hover:bg-zinc-100 transition">Sprawdź ofertę</a>
            </div>
          </div>

          {/* Rating tile */}
          <div className={`${tile} ${indigo} col-span-3 lg:col-span-2 row-span-2 p-6 flex flex-col justify-between`}>
            <div className="flex items-center gap-2 text-amber-300 text-lg">{"★★★★★"}</div>
            <div>
              <p className="text-5xl font-bold">{company.rating.value}</p>
              <p className="text-sm text-indigo-100 mt-1">średnia z {company.rating.count} opinii Google</p>
            </div>
          </div>

          {/* Photo tile */}
          <div className={`${tile} ${white} col-span-3 lg:col-span-2 row-span-2 relative`}>
            <Image src={hero.largeImageURL} alt="" fill className="object-cover" sizes="40vw" priority unoptimized />
          </div>

          {/* Stats mini tiles */}
          {stats.slice(0, 3).map((s) => (
            <div key={s.label} className={`${tile} ${white} col-span-2 lg:col-span-2 p-5 flex flex-col justify-between`}>
              <p className="text-xs uppercase tracking-widest text-zinc-500">{s.label}</p>
              <p className="text-3xl font-bold text-zinc-900"><CountUp to={s.to} duration={1.6} />{s.suffix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services bento */}
      <section id="oferta" className="max-w-7xl mx-auto px-5 mt-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-600 mb-2">Oferta</p>
            <StaggeredText as="h2" className="text-4xl md:text-5xl font-bold tracking-tight" text="Wszystko, czego potrzebujesz w jednym pakiecie." />
          </div>
        </div>
        <Stagger className="grid grid-cols-12 gap-4">
          {services.map((s, i) => {
            const span = i === 0 ? "col-span-12 lg:col-span-6" : "col-span-12 sm:col-span-6 lg:col-span-3";
            const variant = i === 0 ? dark : i === 3 ? indigoSoft : white;
            return (
              <StaggerItem key={s.slug} as="article" className={`${tile} ${variant} ${span} p-7 flex flex-col gap-4`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2.5 py-1 rounded-full ${i === 0 ? "bg-white/10 text-white" : "bg-zinc-100 text-zinc-600"} font-mono`}>0{i + 1}</span>
                  <span className={`w-10 h-10 rounded-2xl grid place-items-center ${i === 0 ? "bg-indigo-500 text-white" : "bg-indigo-600 text-white"}`}>→</span>
                </div>
                <h3 className="font-bold text-xl tracking-tight">{s.title}</h3>
                <p className={`text-sm ${i === 0 ? "text-zinc-300" : "text-zinc-600"} leading-relaxed flex-1`}>{i === 0 ? s.long : s.short}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Mixed bento: testimonials + photo + about */}
      <section id="opinie" className="max-w-7xl mx-auto px-5 mt-16">
        <div className="grid grid-cols-6 gap-4 auto-rows-min">
          <article className={`${tile} ${white} col-span-6 lg:col-span-3 p-7 row-span-2 flex flex-col`}>
            <p className="text-xs uppercase tracking-widest text-indigo-600 mb-3">O mnie</p>
            <h3 className="text-3xl font-bold tracking-tight mb-4">Po stronie klienta. Zawsze.</h3>
            <p className="text-zinc-600 leading-relaxed flex-1">
              Doświadczenie eksperta + indywidualne podejście. Tłumaczę bankową branżę normalnym językiem, pilnuję terminów i jestem dostępny też po podpisaniu umowy.
            </p>
            <p className="mt-5 font-semibold">— {company.owner}</p>
          </article>

          {top3Reviews.map((r, i) => (
            <figure key={i} className={`${tile} ${white} col-span-6 sm:col-span-3 lg:col-span-3 p-7`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-amber-500">{"★★★★★"}</span>
                <span className="text-xs text-zinc-400">Google</span>
              </div>
              <blockquote className="text-zinc-700 leading-relaxed">&ldquo;{r.text.length > 220 ? r.text.slice(0, 220) + "…" : r.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-zinc-500">{r.author}</figcaption>
            </figure>
          ))}

          <div className={`${tile} ${white} col-span-6 lg:col-span-3 relative aspect-[16/10]`}>
            <Image src={handshake.largeImageURL} alt="" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section id="blog" className="max-w-7xl mx-auto px-5 mt-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <StaggeredText as="h2" className="text-4xl md:text-5xl font-bold tracking-tight" text="Blog" />
          <a href="#" className="text-sm font-medium text-indigo-600">Zobacz wszystkie →</a>
        </div>
        <div className="grid grid-cols-12 gap-4 auto-rows-min">
          {top3Posts.map((p, i) => (
            <article
              key={p.slug}
              className={`${tile} ${white} ${
                i === 0
                  ? "col-span-12 lg:col-span-6 lg:row-span-2"
                  : "col-span-12 md:col-span-6 lg:col-span-6"
              } flex flex-col`}
            >
              <div className={`relative ${i === 0 ? "aspect-[16/10] lg:aspect-[16/12]" : "aspect-[16/9]"}`}>
                <Image src={blogImage(p, i)} alt="" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" unoptimized />
              </div>
              <div className="p-6">
                <p className="text-xs text-zinc-500 mb-2">{p.dateDisplay}</p>
                <h3 className={`font-bold leading-snug ${i === 0 ? "text-2xl" : ""}`}>{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-5 mt-16">
        <StaggeredText as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-8" text="Galeria" />
        <div className="grid grid-cols-12 gap-3 auto-rows-[180px]">
          {images.gallery.slice(0, 7).map((g, i) => {
            const span =
              i === 0 ? "col-span-12 sm:col-span-6 row-span-2"
              : i === 1 ? "col-span-6 sm:col-span-3 row-span-1"
              : i === 2 ? "col-span-6 sm:col-span-3 row-span-1"
              : "col-span-6 sm:col-span-3 lg:col-span-3 row-span-1";
            return (
              <div key={i} className={`${tile} ${white} ${span} relative`}>
                <Image src={gImg(g.url, 800)} alt="" fill className="object-cover" sizes="(min-width:1024px) 25vw, 50vw" unoptimized />
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-5 mt-16">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className={`${tile} ${indigo} lg:col-span-4 p-8 sticky top-24 self-start`}>
            <p className="text-xs uppercase tracking-widest text-indigo-200 mb-3">FAQ</p>
            <StaggeredText as="h2" className="text-3xl font-bold tracking-tight" text="Najczęściej zadawane pytania." />
            <p className="mt-4 text-indigo-100">Jeśli nie znajdziesz odpowiedzi — zadzwoń. Wyjaśniam wszystko prostym językiem.</p>
            <a href={company.contact.phoneTel} className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-white text-indigo-700 font-medium hover:bg-amber-300 hover:text-zinc-900 transition">{company.contact.phone}</a>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {faq.map((f, i) => (
              <details key={i} className={`${tile} ${white} group open:bg-zinc-50`}>
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none p-5">
                  <span className="font-semibold">{f.q}</span>
                  <span className="mt-1 w-7 h-7 rounded-full bg-zinc-100 grid place-items-center text-indigo-600 transition group-open:rotate-45 leading-none">+</span>
                </summary>
                <p className="px-5 pb-5 text-zinc-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section className="max-w-7xl mx-auto px-5 mt-16">
        <div className={`${tile} ${dark} p-10 md:p-16 grid md:grid-cols-12 gap-10 items-center`}>
          <div className="md:col-span-7">
            <Reveal as="h2" className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Pierwsza rozmowa<br/><span className="text-indigo-400">jest za darmo.</span>
            </Reveal>
            <p className="mt-5 text-zinc-400 max-w-lg">30 minut, podczas których wyjaśnię Twoją sytuację kredytową i pokażę realne opcje.</p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <a href={company.contact.phoneTel} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-500 text-white text-lg font-medium hover:bg-indigo-400 transition">{company.contact.phone} →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="max-w-7xl mx-auto px-5 mt-16 mb-10">
        <div className="grid grid-cols-6 gap-4">
          <div className={`${tile} ${white} col-span-6 lg:col-span-2 p-6`}>
            <p className="font-semibold mb-2">{company.shortName}</p>
            <p className="text-sm text-zinc-600">{company.contact.address.full}</p>
            <p className="text-sm text-zinc-600">{company.contact.phone}</p>
          </div>
          <div className={`${tile} ${white} col-span-6 lg:col-span-2 p-6 text-sm`}>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Godziny</p>
            <ul className="space-y-1">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between"><span>{d}</span><span className={h === "Zamknięte" ? "text-zinc-400" : ""}>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className={`${tile} ${white} col-span-6 lg:col-span-2 overflow-hidden`}>
            <div className="aspect-video">
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-zinc-500 mt-6">© {new Date().getFullYear()} {company.owner} · Wariant 4 — Bento · <Link href="/" className="underline">all variants</Link></p>
      </footer>
    </main>
  );
}
