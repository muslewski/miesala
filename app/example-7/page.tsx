import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, gImg, pick } from "@/lib/content";

/* Variant 7 — Newspaper / Magazine
 * Krem, gazetowa typografia DM Serif + Inter, czerwony akcent, kolumny, drop-cap, linie.
 */

const hero = pick(pixabay.documents_desk, 1);
const portrait = pick(pixabay.financial_advisor, 1);
const top4Reviews = reviews.reviews.slice(0, 4);
const top3Posts = blogIndex.slice(0, 3);

export default function Page() {
  return (
    <main className="min-h-screen bg-amber-50 text-stone-900 font-[family-name:var(--font-inter)] selection:bg-red-700 selection:text-amber-50">
      {/* Masthead */}
      <header className="border-y-4 border-double border-stone-900 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center text-xs uppercase tracking-widest text-stone-600">
          <p>Vol. {new Date().getFullYear()} — Nr 01</p>
          <p className="text-center">Wydanie · Polska</p>
          <p className="text-right">{new Date().toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })}</p>
        </div>
        <h1 className="font-[family-name:var(--font-dm-serif)] text-center px-6 pb-3 text-[14vw] md:text-[8vw] leading-none tracking-tight">
          The Mortgage Times
        </h1>
        <div className="border-t border-stone-900 max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
          <Link href="/" className="font-medium uppercase tracking-widest">← Wszystkie warianty</Link>
          <nav className="hidden md:flex items-center gap-7 text-sm uppercase tracking-widest text-stone-700">
            <a href="#oferta">Oferta</a><a href="#opinie">Recenzje</a><a href="#blog">Felietony</a><a href="#faq">Q&amp;A</a>
          </nav>
          <a href={company.contact.phoneTel} className="font-bold underline decoration-red-700 underline-offset-4">{company.contact.phone}</a>
        </div>
      </header>

      {/* Hero / front page */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16 grid lg:grid-cols-12 gap-10 border-b-2 border-stone-900">
        <div className="lg:col-span-8">
          <p className="uppercase tracking-widest text-xs text-red-700 font-bold mb-3">Wydanie specjalne · Doradztwo</p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl md:text-7xl leading-[0.95] mb-6">
            {company.owner}: &ldquo;Kredyt hipoteczny może wreszcie być spokojną decyzją&rdquo;
          </h2>
          <p className="text-xl text-stone-700 mb-6 max-w-3xl leading-relaxed">
            Niezależny ekspert finansowy z Osielska o tym, dlaczego pośrednik jest dziś niezbędny, kogo naprawdę reprezentuje doradca i ile kosztuje jego praca — od kuchni i bez owijania w bawełnę.
          </p>
          <div className="columns-1 md:columns-2 gap-10 text-stone-800 leading-relaxed">
            <p className="first-letter:font-[family-name:var(--font-dm-serif)] first-letter:text-7xl first-letter:float-left first-letter:leading-[0.9] first-letter:mr-2 first-letter:text-red-700">
              Profesjonalna firma specjalizująca się w pośrednictwie kredytów hipotecznych oraz doradztwie finansowym. Moja misja to pomoc klientom w realizacji marzeń o własnym domu poprzez znalezienie najlepszego finansowania na rynku.
            </p>
            <p className="mt-4 md:mt-0">
              Doświadczenie eksperta oferuje indywidualne podejście oraz kompleksową obsługę na każdym etapie procesu kredytowego — od pierwszego badania zdolności po podpisanie umowy w wybranym banku. Każdy klient dostaje plan dopasowany do swojej sytuacji.
            </p>
          </div>
          <a href={company.contact.phoneTel} className="mt-8 inline-flex items-center gap-3 bg-stone-900 text-amber-50 px-6 py-3 font-bold uppercase tracking-widest text-sm">→ Zadzwoń: {company.contact.phone}</a>
        </div>
        <aside className="lg:col-span-4 border-l-0 lg:border-l-2 border-stone-900 lg:pl-8">
          <figure>
            <div className="aspect-[4/5] relative bg-stone-200 mb-3">
              <Image src={hero.largeImageURL} alt="" fill className="object-cover grayscale contrast-110" priority unoptimized />
            </div>
            <figcaption className="text-xs italic text-stone-600">Foto: gabinet ekspert finansowy, Osielsko k. Bydgoszczy.</figcaption>
          </figure>
          <div className="mt-6 border-y-2 border-stone-900 py-4 text-sm">
            <p className="uppercase tracking-widest text-xs text-red-700 font-bold mb-2">Notowania zaufania</p>
            <p className="font-[family-name:var(--font-dm-serif)] text-5xl">{company.rating.value}<span className="text-stone-400">/5</span></p>
            <p className="text-stone-600">{company.rating.count} opinii Google</p>
          </div>
        </aside>
      </section>

      {/* Stats line */}
      <section className="max-w-6xl mx-auto px-6 py-10 border-b-2 border-stone-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="border-l-4 border-red-700 pl-4">
              <p className="font-[family-name:var(--font-dm-serif)] text-5xl">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-stone-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services as columns */}
      <section id="oferta" className="max-w-6xl mx-auto px-6 py-16 border-b-2 border-stone-900">
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-xs text-red-700 font-bold mb-3">— Dział oferta —</p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl md:text-6xl">Sześć obszarów, w których pomagam</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
          {services.map((s, i) => (
            <article key={s.slug} className="border-t-2 border-stone-900 pt-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-red-700 mb-1">N&deg; 0{i + 1}</p>
              <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl mb-3 leading-snug">{s.title}</h3>
              <p className="text-stone-700 leading-relaxed text-sm">{s.long}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Reviews / Letters to editor */}
      <section id="opinie" className="max-w-6xl mx-auto px-6 py-16 border-b-2 border-stone-900">
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-xs text-red-700 font-bold mb-3">— Listy od czytelników —</p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl md:text-6xl">Recenzje klientów</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {top4Reviews.map((r, i) => (
            <figure key={i} className="border-t-2 border-stone-900 pt-5">
              <p className="font-[family-name:var(--font-dm-serif)] text-2xl leading-snug">&ldquo;{r.text.length > 240 ? r.text.slice(0, 240) + "…" : r.text}&rdquo;</p>
              <figcaption className="mt-4 text-sm uppercase tracking-widest text-stone-600">— {r.author}, czytelnik · ★★★★★</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* About — interview style */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b-2 border-stone-900 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <div className="aspect-[3/4] relative bg-stone-200 mb-3">
            <Image src={portrait.largeImageURL} alt="" fill className="object-cover grayscale" unoptimized />
          </div>
          <p className="text-xs italic text-stone-600">{company.owner} — doradca kredytowy</p>
        </div>
        <div className="lg:col-span-8">
          <p className="uppercase tracking-widest text-xs text-red-700 font-bold mb-3">— Wywiad —</p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl mb-6 leading-tight">&ldquo;Nie sprzedaję produktu. Towarzyszę w jednej z najważniejszych decyzji w życiu.&rdquo;</h2>
          <div className="columns-1 md:columns-2 gap-10 text-stone-800 leading-relaxed text-sm">
            <p>Każdy klient to inna historia: inny dochód, inny plan rodzinny, inna nieruchomość. Dlatego pierwsza rozmowa to dla mnie zawsze rozmowa o sytuacji, a dopiero potem — o liczbach.</p>
            <p className="mt-4 md:mt-0">Niezależność doradcy oznacza, że pokazuję porównanie ofert, a wybór należy do Ciebie. Moim zadaniem jest, żebyś po zapoznaniu się z tabelką nie miał już żadnych ukrytych pytań.</p>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-6xl mx-auto px-6 py-16 border-b-2 border-stone-900">
        <p className="uppercase tracking-widest text-xs text-red-700 font-bold mb-3 text-center">— Felietony —</p>
        <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl md:text-6xl text-center mb-10">Aktualne wydanie</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {top3Posts.map((p) => (
            <article key={p.slug} className="border-t-2 border-stone-900 pt-5">
              {p.image && (
                <div className="aspect-[4/3] relative mb-4 bg-stone-200">
                  <Image src={gImg(p.image, 800)} alt="" fill className="object-cover grayscale" unoptimized />
                </div>
              )}
              <p className="font-mono text-[11px] uppercase tracking-widest text-stone-500 mb-2">{p.dateDisplay}</p>
              <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-red-700 uppercase tracking-widest font-bold">czytaj &rarr;</p>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b-2 border-stone-900">
        <p className="uppercase tracking-widest text-xs text-red-700 font-bold mb-3 text-center">— Foto —</p>
        <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl md:text-6xl text-center mb-10">Z gabinetu</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.gallery.slice(0, 8).map((g, i) => (
            <div key={i} className="aspect-square relative">
              <Image src={gImg(g.url, 600)} alt="" fill className="object-cover grayscale hover:grayscale-0 transition" sizes="25vw" unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-16 border-b-2 border-stone-900">
        <p className="uppercase tracking-widest text-xs text-red-700 font-bold mb-3 text-center">— Q&amp;A —</p>
        <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl md:text-6xl text-center mb-10">Pytania od czytelników</h2>
        <div className="divide-y-2 divide-stone-900 border-y-2 border-stone-900">
          {faq.map((f, i) => (
            <details key={i} className="py-5 group">
              <summary className="cursor-pointer list-none flex items-baseline gap-5">
                <span className="font-mono text-xs text-red-700">Q.{i + 1}</span>
                <span className="font-[family-name:var(--font-dm-serif)] text-xl flex-1">{f.q}</span>
                <span className="text-stone-400 group-open:rotate-90 transition">▸</span>
              </summary>
              <p className="mt-3 pl-12 text-stone-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA above footer — full bleed banner */}
      <section className="border-b-2 border-stone-900 bg-stone-900 text-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="uppercase tracking-widest text-xs text-amber-300 font-bold mb-3">— Ogłoszenie —</p>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl md:text-6xl leading-tight">Bezpłatna konsultacja kredytowa.</h2>
            <p className="mt-5 text-stone-300 max-w-lg">Zadzwoń. Pierwsza rozmowa, brak zobowiązań. Wracam do każdego pytania mailowego lub telefonu jeszcze tego samego dnia.</p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <a href={company.contact.phoneTel} className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 text-amber-50 text-lg font-bold uppercase tracking-widest">{company.contact.phone} →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-8 border-b-2 border-stone-900">
          <div className="lg:col-span-4">
            <p className="font-[family-name:var(--font-dm-serif)] text-2xl">{company.shortName}</p>
            <p className="mt-3 text-sm">{company.contact.address.full}</p>
            <p className="text-sm">{company.contact.phone}</p>
          </div>
          <div className="lg:col-span-4 text-sm">
            <p className="uppercase tracking-widest text-xs text-red-700 font-bold mb-3">Godziny redakcyjne</p>
            <ul className="space-y-1">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between border-b border-stone-300 py-1"><span>{d}</span><span className={h === "Zamknięte" ? "text-stone-500" : "font-bold"}>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="aspect-video border-2 border-stone-900">
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full grayscale" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <p className="max-w-6xl mx-auto px-6 py-5 text-xs uppercase tracking-widest text-stone-600 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} The Mortgage Times — wszystkie prawa zastrzeżone</span>
          <span>Wariant 7 — Newspaper Magazine</span>
        </p>
      </footer>
    </main>
  );
}
