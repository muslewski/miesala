import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, gImg, pick } from "@/lib/content";

/* Variant 3 — Dark Luxury Glassmorphism
 * Ciemny granat + złoto, Cormorant Garamond + Inter, frosted glass.
 */

const hero      = pick(pixabay.city_building, 0);
const portrait  = pick(pixabay.financial_advisor, 0);
const gradient  = pick(pixabay.abstract_gradient, 0);
const top3Reviews = reviews.reviews.slice(0, 3);
const top3Posts   = blogIndex.slice(0, 3);

const glass = "backdrop-blur-2xl bg-white/[0.04] border border-white/10 rounded-3xl";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-[family-name:var(--font-inter)] selection:bg-amber-300 selection:text-slate-950 overflow-hidden">
      {/* Background ornaments */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[70vw] h-[70vw] rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4'><circle cx='2' cy='2' r='0.5' fill='white'/></svg>\")" }} />
      </div>

      {/* Nav */}
      <header className="sticky top-4 z-40 mx-4">
        <nav className={`${glass} max-w-6xl mx-auto px-6 h-16 flex items-center justify-between`}>
          <Link href="/" className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_20px_4px_rgba(251,191,36,0.6)]" />
            <span className="font-[family-name:var(--font-cormorant)] text-xl tracking-wide">Miesała · Capital</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#oferta" className="hover:text-amber-300">Oferta</a>
            <a href="#opinie" className="hover:text-amber-300">Opinie</a>
            <a href="#blog" className="hover:text-amber-300">Insights</a>
            <a href="#faq" className="hover:text-amber-300">FAQ</a>
          </div>
          <a href={company.contact.phoneTel} className="text-sm px-4 py-2 rounded-full bg-amber-400 text-slate-950 font-medium hover:bg-amber-300 transition">
            {company.contact.phone}
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.3em] text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Premium · Mortgage Advisory
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-light mt-7 leading-[1.0]">
            Kredyt hipoteczny<br/>
            <span className="italic bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">na poziomie.</span>
          </h1>
          <p className="mt-7 max-w-xl text-slate-300 text-lg leading-relaxed">
            Dyskretna, niezależna obsługa procesu kredytowego. Pracuję z klientami, dla których liczy się czas, jasność warunków i spokój ducha — od pierwszej rozmowy po klucze w dłoni.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href={company.contact.phoneTel} className="px-8 py-4 rounded-full bg-amber-400 text-slate-950 font-medium hover:bg-amber-300 transition shadow-[0_0_60px_-10px_rgba(251,191,36,0.6)]">
              Umów konsultację
            </a>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="text-amber-400">{"★★★★★"}</span>
              <span><span className="text-white">{company.rating.value}</span> · {company.rating.count} opinii</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className={`${glass} p-3 rotate-[1.5deg]`}>
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <Image src={hero.largeImageURL} alt="" fill className="object-cover" priority unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-[family-name:var(--font-cormorant)] italic text-3xl">&ldquo;Każdy klient to inna historia.&rdquo;</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-amber-300">{company.owner}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className={`${glass} grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10`}>
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-amber-300">{s.value}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="oferta" className="max-w-6xl mx-auto px-6 mb-32">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-4">Oferta</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl leading-[1.05]">Kompletny portfel usług kredytowych.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article key={s.slug} className={`${glass} p-7 hover:bg-white/[0.06] transition group`}>
              <div className="flex items-center justify-between mb-6">
                <span className="font-[family-name:var(--font-cormorant)] text-3xl text-amber-300">0{i + 1}</span>
                <span className="w-9 h-9 rounded-full bg-white/5 grid place-items-center border border-white/10 group-hover:bg-amber-400 group-hover:border-amber-400 transition"><span className="text-slate-100 group-hover:text-slate-950">→</span></span>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.long}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Portrait + about */}
      <section className="max-w-6xl mx-auto px-6 mb-32 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 relative">
          <div className={`${glass} p-3 -rotate-2`}>
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
              <Image src={portrait.largeImageURL} alt="" fill className="object-cover" unoptimized />
            </div>
          </div>
          <div className={`${glass} absolute -bottom-6 -right-6 p-5 rotate-3 hidden md:block`}>
            <p className="font-[family-name:var(--font-cormorant)] text-3xl text-amber-300">10+</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mt-1">lat doświadczenia</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-4">Filozofia pracy</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl leading-tight italic font-light">
            Nie sprzedaję kredytów.<br/>Pomagam <span className="not-italic font-normal bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">podejmować decyzje</span>, z którymi&nbsp;dobrze się żyje.
          </h2>
          <p className="mt-6 text-slate-400 leading-relaxed">Niezależność od banku, indywidualne podejście i pełna obsługa procesu kredytowego — od analizy zdolności po podpisanie umowy.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="opinie" className="max-w-6xl mx-auto px-6 mb-32">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-4">Zaufanie</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl">{company.rating.value} / 5 · {company.rating.count} opinii Google</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {top3Reviews.map((r, i) => (
            <figure key={i} className={`${glass} p-7`}>
              <p className="text-amber-400 mb-4">{"★★★★★"}</p>
              <blockquote className="font-[family-name:var(--font-cormorant)] text-xl italic leading-snug text-slate-100">&ldquo;{r.text.length > 220 ? r.text.slice(0, 220) + "…" : r.text}&rdquo;</blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">— {r.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-6xl mx-auto px-6 mb-32">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl">Insights</h2>
          <p className="text-sm text-slate-400">aktualności rynku kredytowego</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {top3Posts.map((p, i) => (
            <article key={p.slug} className={`${glass} overflow-hidden group`}>
              <div className="aspect-[16/10] relative">
                {p.image ? <Image src={gImg(p.image, 800)} alt="" fill className="object-cover" unoptimized /> : <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-indigo-600/30" /> }
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-medium">#{i + 1}</span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-3">{p.dateDisplay}</p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl leading-snug">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl mb-10">Atelier</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.gallery.slice(0, 8).map((g, i) => (
            <div key={i} className={`${glass} aspect-square relative overflow-hidden p-0`}>
              <Image src={gImg(g.url, 600)} alt="" fill className="object-cover" sizes="25vw" unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 mb-32">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-4 text-center">FAQ</p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-center mb-14">Najczęstsze pytania.</h2>
        <div className="space-y-3">
          {faq.map((f, i) => (
            <details key={i} className={`${glass} group p-0 open:bg-white/[0.07]`}>
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none p-6">
                <span className="font-[family-name:var(--font-cormorant)] text-xl">{f.q}</span>
                <span className="mt-1 text-amber-300 text-2xl transition group-open:rotate-45 leading-none">+</span>
              </summary>
              <p className="px-6 pb-6 text-slate-400 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA above footer */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image src={gradient.largeImageURL} alt="" fill className="object-cover opacity-30" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-slate-950/80 to-indigo-700/30" />
          </div>
          <div className="px-8 md:px-16 py-20 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl leading-[1.05]">
                Porozmawiajmy o Twojej<br/><span className="italic text-amber-300">nieruchomości.</span>
              </h2>
              <p className="mt-5 text-slate-300 max-w-lg">Konsultacja bez zobowiązań. Pierwsza rozmowa — 30 minut spokoju i jasności.</p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a href={company.contact.phoneTel} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-400 text-slate-950 text-lg font-medium hover:bg-amber-300 transition shadow-[0_0_60px_-10px_rgba(251,191,36,0.8)]">
                {company.contact.phone} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="max-w-6xl mx-auto px-6 pb-12">
        <div className={`${glass} p-10 grid lg:grid-cols-12 gap-10`}>
          <div className="lg:col-span-4">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl">Miesała · Capital</p>
            <p className="text-sm text-slate-400 mt-3">{company.contact.address.full}</p>
            <p className="text-sm text-slate-400">{company.contact.phone}</p>
          </div>
          <div className="lg:col-span-4 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-3">Godziny</p>
            <ul className="space-y-1">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between"><span>{d}</span><span className={h === "Zamknięte" ? "text-slate-500" : ""}>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 text-center mt-8">© {new Date().getFullYear()} {company.owner} · Wariant 3 — Dark Luxury Glass · <Link href="/" className="underline hover:text-amber-300">all variants</Link></p>
      </footer>
    </main>
  );
}
