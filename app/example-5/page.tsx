import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, gImg, blogImage, pick } from "@/lib/content";

/* Variant 5 — Claymorphism Soft
 * Pastele, miękkie 3D, multi-shadow, Plus Jakarta Sans, mocno zaokrąglone kształty.
 */

const hero = pick(pixabay.happy_couple, 0);
const family = pick(pixabay.family_home, 0);
const top3Reviews = reviews.reviews.slice(1, 4);
const top3Posts = blogIndex.slice(0, 3);

// Clay shadow utility — multi-layered for depth
const clayLight = "shadow-[8px_8px_20px_rgba(186,200,224,0.45),-8px_-8px_20px_rgba(255,255,255,0.9)]";
const clayCard  = `rounded-[2.25rem] bg-white ${clayLight}`;

const ChipIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="w-12 h-12 rounded-2xl grid place-items-center bg-gradient-to-br from-white to-sky-50 shadow-[inset_3px_3px_6px_rgba(186,200,224,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]">{children}</span>
);

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-rose-100 text-slate-800 font-[family-name:var(--font-jakarta)] selection:bg-sky-400 selection:text-white">
      <header className="sticky top-3 z-40 mx-3 md:mx-6">
        <nav className={`${clayCard} max-w-6xl mx-auto px-6 h-16 flex items-center justify-between`}>
          <Link href="/" className="flex items-center gap-3 font-bold">
            <span className="w-9 h-9 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 grid place-items-center text-white text-sm font-black shadow-md">AM</span>
            <span>Artur Miesała</span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-600">
            <a href="#oferta">Oferta</a><a href="#opinie">Opinie</a><a href="#blog">Blog</a><a href="#faq">FAQ</a>
          </div>
          <a href={company.contact.phoneTel} className="text-sm font-semibold px-4 py-2 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-[4px_6px_14px_rgba(56,189,248,0.45)]">{company.contact.phone}</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-sm font-medium text-sky-700 shadow-[4px_4px_10px_rgba(186,200,224,0.35),-4px_-4px_10px_rgba(255,255,255,0.9)]">
            <span className="text-amber-500">★</span> {company.rating.value} · {company.rating.count} opinii Google
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-7 leading-[1.05]">
            Klucze do <span className="bg-gradient-to-br from-sky-500 to-indigo-500 bg-clip-text text-transparent">własnego domu</span> bez stresu.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Cześć! Jestem Artur. Pomagam ludziom dostać kredyt hipoteczny — spokojnie, dokładnie i prostym językiem. Pierwsza rozmowa jest za darmo.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={company.contact.phoneTel} className="px-7 py-4 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-semibold shadow-[8px_10px_24px_rgba(56,189,248,0.5)] hover:translate-y-[-2px] transition">
              Zadzwoń: {company.contact.phone}
            </a>
            <a href="#oferta" className={`px-7 py-4 rounded-2xl bg-white font-semibold ${clayLight}`}>
              Co dla Ciebie zrobię
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className={`${clayCard} p-4 -rotate-3`}>
            <div className="aspect-[4/5] rounded-[1.75rem] overflow-hidden relative">
              <Image src={hero.largeImageURL} alt="" fill className="object-cover" priority unoptimized />
            </div>
          </div>
          {/* Floating chips */}
          <div className={`absolute -top-4 -right-4 ${clayCard} px-4 py-3 rotate-6 flex items-center gap-3`}>
            <span className="w-10 h-10 rounded-2xl bg-emerald-100 grid place-items-center text-emerald-700">✓</span>
            <div>
              <p className="text-xs text-slate-500">Decyzja banku</p>
              <p className="text-sm font-bold">w 21 dni</p>
            </div>
          </div>
          <div className={`absolute -bottom-6 -left-4 ${clayCard} px-4 py-3 -rotate-3 flex items-center gap-3`}>
            <span className="w-10 h-10 rounded-2xl bg-rose-100 grid place-items-center text-rose-600">♡</span>
            <div>
              <p className="text-xs text-slate-500">Średnia</p>
              <p className="text-sm font-bold">{company.rating.value} / 5</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className={`${clayCard} p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6`}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-sky-500 to-indigo-500 bg-clip-text text-transparent">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="oferta" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-sky-600 mb-3">Oferta</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Po prostu się tym zajmę.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article key={s.slug} className={`${clayCard} p-7 hover:-translate-y-1 transition`}>
              <ChipIcon><span className="text-sky-600 font-bold">{i + 1}</span></ChipIcon>
              <h3 className="font-bold text-xl mt-4">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">{s.short}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="opinie" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Klienci mówią to samo.</h2>
          <p className="text-slate-500">{company.rating.value} ★ · {company.rating.count} opinii</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {top3Reviews.map((r, i) => (
            <figure key={i} className={`${clayCard} p-7`}>
              <p className="text-amber-500 mb-3">{"★★★★★"}</p>
              <blockquote className="text-slate-700 leading-relaxed">&ldquo;{r.text.length > 200 ? r.text.slice(0, 200) + "…" : r.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 grid place-items-center text-white font-bold text-sm">{r.author[0]}</span>
                <span className="text-sm font-semibold">{r.author}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className={`${clayCard} p-8 md:p-12 grid lg:grid-cols-12 gap-10 items-center`}>
          <div className="lg:col-span-5">
            <div className="aspect-square rounded-[2rem] overflow-hidden relative shadow-inner">
              <Image src={family.largeImageURL} alt="" fill className="object-cover" unoptimized />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Indywidualne podejście do każdej historii.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">Każda rodzina jest inna — inny budżet, inne plany, inne potrzeby. Dlatego nie pracuję na szablonach. Słucham, pytam, liczę razem z Tobą.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Bezpłatna konsultacja", "Niezależny ekspert", "15+ banków", "Pełna obsługa"].map((t) => (
                <span key={t} className={`px-4 py-2 rounded-2xl bg-white text-sm font-medium ${clayLight}`}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10">Z bloga</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {top3Posts.map((p, i) => (
            <article key={p.slug} className={`${clayCard} overflow-hidden flex flex-col`}>
              <div className="aspect-[16/10] relative bg-gradient-to-br from-sky-100 to-rose-100 m-3 rounded-[1.75rem] overflow-hidden">
                <Image src={blogImage(p, i)} alt="" fill className="object-cover" unoptimized />
              </div>
              <div className="px-6 pb-6">
                <p className="text-xs text-sky-600 font-semibold mb-2">{p.dateDisplay}</p>
                <h3 className="font-bold leading-snug">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10">Wspomnienia z gabinetu</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.gallery.slice(0, 8).map((g, i) => (
            <div key={i} className={`${clayCard} aspect-square overflow-hidden p-2`}>
              <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden">
                <Image src={gImg(g.url, 600)} alt="" fill className="object-cover" sizes="25vw" unoptimized />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-10">A może masz pytania?</h2>
        <div className="space-y-4">
          {faq.map((f, i) => (
            <details key={i} className={`${clayCard} group p-0`}>
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none p-6">
                <span className="font-semibold">{f.q}</span>
                <span className="mt-1 w-9 h-9 rounded-2xl bg-gradient-to-br from-sky-100 to-rose-100 grid place-items-center text-sky-600 transition group-open:rotate-45 leading-none">+</span>
              </summary>
              <p className="px-6 pb-6 text-slate-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA above footer */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className={`${clayCard} relative overflow-hidden p-10 md:p-16 bg-gradient-to-br from-sky-400 to-indigo-500 text-white border-none`}>
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-rose-300/30 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">Twoje wymarzone &ldquo;tak&rdquo; już czeka.</h2>
              <p className="mt-5 text-white/90 max-w-xl">Wystarczy jedna rozmowa, żeby zrobić pierwszy konkretny krok.</p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a href={company.contact.phoneTel} className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-sky-700 text-lg font-bold shadow-[8px_10px_24px_rgba(0,0,0,0.15)]">{company.contact.phone} →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="max-w-6xl mx-auto px-6 pb-10">
        <div className={`${clayCard} p-8 grid lg:grid-cols-12 gap-8`}>
          <div className="lg:col-span-4">
            <p className="font-bold text-lg">{company.shortName}</p>
            <p className="mt-2 text-sm text-slate-600">{company.contact.address.full}</p>
            <p className="text-sm text-slate-600">{company.contact.phone}</p>
          </div>
          <div className="lg:col-span-4 text-sm">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Godziny otwarcia</p>
            <ul className="space-y-1">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between"><span>{d}</span><span className={h === "Zamknięte" ? "text-slate-400" : "font-medium"}>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-inner">
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-6">© {new Date().getFullYear()} {company.owner} · Wariant 5 — Claymorphism · <Link href="/" className="underline">all variants</Link></p>
      </footer>
    </main>
  );
}
