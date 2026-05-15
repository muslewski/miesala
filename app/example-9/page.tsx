import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, trustBanks, gImg, blogImage, pick } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { HeroLines, HeroLine } from "@/components/motion/HeroLines";
import StaggeredText from "@/components/react-bits/staggered-text";
import { MobileNav } from "@/components/nav/MobileNav";
import CountUp from "@/components/react-bits/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/* Variant 9 — Trust Banking Blue
 * Profesjonalny SaaS/banking, Inter, deep blue + jasne tło, zielony "safe" akcent.
 */

const hero = pick(pixabay.modern_house, 2);
const handshake = pick(pixabay.businessman_handshake, 2);
const top3Reviews = reviews.reviews.slice(0, 3);
const top3Posts = blogIndex.slice(0, 3);

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-[family-name:var(--font-inter)]">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="w-8 h-8 rounded-lg bg-blue-700 grid place-items-center text-white text-xs font-black">M</span>
            <span>Miesała <span className="text-blue-700">·</span> Kredyt</span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-600">
            <a href="#oferta">Oferta</a><a href="#proces">Jak to działa</a><a href="#opinie">Opinie</a><a href="#blog">Blog</a><a href="#faq">FAQ</a>
          </div>
          <a href={company.contact.phoneTel} className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition shadow-sm">{company.contact.phone}</a>
        <MobileNav
            tone="light"
            items={ [{ label: "Oferta", href: "#oferta" }, { label: "Jak to działa", href: "#proces" }, { label: "Opinie", href: "#opinie" }, { label: "Blog", href: "#blog" }, { label: "FAQ", href: "#faq" }] }
            phone={company.contact.phone}
            phoneTel={company.contact.phoneTel}
            ctaClassName="bg-blue-700 text-white hover:bg-blue-800"
            triggerClassName="text-slate-900"
          />
          </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Niezależny ekspert · 15+ banków
            </span>
            <HeroLines className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-6 leading-[1.05]">
              <HeroLine>Kredyt hipoteczny</HeroLine>
              <HeroLine className="text-blue-700">który po prostu działa.</HeroLine>
            </HeroLines>
            <p className="mt-6 text-xl text-slate-600 max-w-xl leading-relaxed">
              Bezpłatne porównanie ofert 15+ banków, kompletny proces dokumentowy i Twój własny ekspert na każdym etapie — od pierwszej rozmowy po klucze w dłoni.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={company.contact.phoneTel} className="px-7 py-3.5 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition shadow-lg shadow-blue-700/20 inline-flex items-center gap-2">
                Zadzwoń: {company.contact.phone}
                <span aria-hidden>→</span>
              </a>
              <a href="#proces" className="px-7 py-3.5 rounded-lg border border-slate-300 font-semibold hover:bg-slate-50 transition">Jak to działa</a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-emerald-600">✓</span> Bez kosztów dla klienta
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-emerald-600">✓</span> Decyzja banku w 21 dni
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-emerald-600">✓</span> {company.rating.value}/5 z {company.rating.count} opinii
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl shadow-blue-700/15 ring-1 ring-slate-200">
                <Image src={hero.largeImageURL} alt="" fill className="object-cover" priority unoptimized />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-5 max-w-xs">
                <p className="text-xs text-slate-500 mb-1">Rata kredytu — symulacja</p>
                <p className="text-3xl font-bold text-blue-700">2 187 zł</p>
                <p className="text-xs text-emerald-600 mt-1">↓ 312 zł niższa niż w pierwszej ofercie</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="max-w-7xl mx-auto px-6 pb-14">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-5 text-center">Współpracuję z bankami</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustBanks.map((b) => (
              <span key={b} className="text-slate-400 hover:text-slate-700 transition font-semibold text-lg tracking-tight">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-700 tracking-tight"><CountUp to={s.to} duration={1.6} />{s.suffix}</p>
              <p className="mt-2 text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="oferta" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-blue-700 mb-3 uppercase tracking-widest">Oferta</p>
          <StaggeredText as="h2" className="justify-center text-4xl md:text-5xl font-bold tracking-tight" text="Wszystko, czego potrzebujesz przy kredycie." />
        </div>
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <StaggerItem key={s.slug} as="article" className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl hover:border-blue-200 transition">
              <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-blue-50 text-blue-700 font-bold">{`${i + 1}`.padStart(2, "0")}</span>
              <h3 className="font-bold text-xl mt-5 tracking-tight">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">{s.long}</p>
              <p className="mt-4 text-sm font-semibold text-blue-700">Dowiedz się więcej →</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Process */}
      <section id="proces" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-blue-700 mb-3 uppercase tracking-widest">Proces</p>
            <StaggeredText as="h2" className="justify-center text-4xl md:text-5xl font-bold tracking-tight" text="Cztery kroki do podpisanej umowy." />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Rozmowa wstępna", d: "Telefon lub spotkanie. Omawiamy sytuację, plany i pierwsze kalkulacje." },
              { n: "02", t: "Analiza zdolności", d: "Sprawdzam Twoją zdolność w bazach BIK i kalkulatorach 15+ banków." },
              { n: "03", t: "Złożenie wniosków", d: "Kompletujemy dokumenty. Wysyłam wnioski do 2-3 najlepszych banków." },
              { n: "04", t: "Decyzja i umowa", d: "Towarzyszę przy podpisaniu i pilnuję uruchomienia środków." },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-2xl p-7 border border-slate-200">
                <p className="text-5xl font-bold text-blue-700/30">{step.n}</p>
                <h3 className="font-bold text-xl mt-3">{step.t}</h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 aspect-square rounded-2xl overflow-hidden relative ring-1 ring-slate-200">
          <Image src={handshake.largeImageURL} alt="" fill className="object-cover" unoptimized />
        </div>
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold text-blue-700 mb-3 uppercase tracking-widest">O mnie</p>
          <StaggeredText as="h2" className="text-4xl md:text-5xl font-bold tracking-tight" text="Po stronie klienta. Zawsze." />
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Doświadczenie eksperta, indywidualne podejście i kompleksowa obsługa procesu kredytowego. Wiem, że kredyt to nie tylko liczby — to lata Twojego życia. Dlatego pracuję dokładnie i transparentnie.
          </p>
          <p className="mt-4 text-slate-600">— {company.owner}</p>
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: "0 zł", l: "Twojego kosztu" },
              { v: "15+", l: "banków" },
              { v: "10+", l: "lat" },
              { v: "44+", l: "opinii" },
            ].map((x) => (
              <div key={x.l} className="border-t-2 border-blue-700 pt-3">
                <p className="text-2xl font-bold">{x.v}</p>
                <p className="text-xs text-slate-500">{x.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="opinie" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-blue-700 mb-3 uppercase tracking-widest">Opinie</p>
            <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight">{company.rating.value}/5 · {company.rating.count} opinii Google</Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {top3Reviews.map((r, i) => (
              <figure key={i} className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-lg transition">
                <p className="text-amber-500 mb-4">{"★★★★★"}</p>
                <blockquote className="text-slate-700 leading-relaxed">&ldquo;{r.text.length > 220 ? r.text.slice(0, 220) + "…" : r.text}&rdquo;</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 pt-5 border-t border-slate-200">
                  <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 grid place-items-center font-bold text-sm">{r.author[0]}</span>
                  <div>
                    <p className="text-sm font-semibold">{r.author}</p>
                    <p className="text-xs text-slate-500">Klient · Google review</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-blue-700 mb-3 uppercase tracking-widest">Blog eksperta</p>
            <StaggeredText as="h2" className="text-4xl md:text-5xl font-bold tracking-tight" text="Aktualne tematy." />
          </div>
          <a href="#" className="text-sm font-semibold text-blue-700 hover:underline">Wszystkie wpisy →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {top3Posts.map((p, i) => (
            <article key={p.slug} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition flex flex-col">
              <div className="aspect-[16/10] relative">
                <Image src={blogImage(p, i)} alt="" fill className="object-cover" unoptimized />
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-500 mb-3">{p.dateDisplay}</p>
                <h3 className="font-bold leading-snug">{p.title}</h3>
                <p className="mt-4 text-sm font-semibold text-blue-700">Czytaj artykuł →</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <StaggeredText as="h2" className="text-3xl font-bold tracking-tight mb-8" text="Z gabinetu w Osielsku" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.gallery.slice(0, 8).map((g, i) => (
            <div key={i} className="aspect-square relative rounded-xl overflow-hidden ring-1 ring-slate-200">
              <Image src={gImg(g.url, 600)} alt="" fill className="object-cover" sizes="25vw" unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <p className="text-sm font-semibold text-blue-700 mb-3 uppercase tracking-widest">FAQ</p>
            <StaggeredText as="h2" className="text-4xl md:text-5xl font-bold tracking-tight" text="Najczęstsze pytania." />
            <p className="mt-5 text-slate-600">Nie znalazłeś odpowiedzi? Zadzwoń — chętnie wyjaśnię.</p>
            <a href={company.contact.phoneTel} className="mt-6 inline-flex items-center gap-2 text-blue-700 font-semibold">{company.contact.phone} →</a>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {faq.map((f, i) => (
              <details key={i} className="bg-white rounded-2xl border border-slate-200 group open:shadow-md transition">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none p-6">
                  <span className="font-semibold">{f.q}</span>
                  <span className="mt-1 w-7 h-7 rounded-full bg-blue-50 grid place-items-center text-blue-700 transition group-open:rotate-45 leading-none">+</span>
                </summary>
                <p className="px-6 pb-6 text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-blue-700 text-white p-10 md:p-16 grid md:grid-cols-12 gap-10 items-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-400/30 blur-3xl" />
          <div className="md:col-span-7 relative">
            <StaggeredText as="h2" className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]" text="Gotowy, by zacząć?" />
            <p className="mt-5 text-blue-100 max-w-lg">Bezpłatna 30-minutowa konsultacja telefoniczna. Po niej będziesz wiedział dokładnie, na co Cię stać.</p>
          </div>
          <div className="md:col-span-5 md:text-right relative">
            <a href={company.contact.phoneTel} className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-blue-800 text-lg font-bold hover:bg-amber-300 transition shadow-xl">
              {company.contact.phone} →
            </a>
            <p className="mt-3 text-sm text-blue-100">Pon-Pt 9:00-19:00</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-blue-700 grid place-items-center text-white text-xs font-black">M</span>
              <p className="font-bold text-white">{company.shortName}</p>
            </div>
            <p className="text-sm">{company.contact.address.full}</p>
            <p className="text-sm">{company.contact.phone}</p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Godziny</p>
            <ul className="text-sm space-y-1">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between"><span>{d}</span><span className={h === "Zamknięte" ? "text-slate-500" : "text-white"}>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-slate-700">
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <p className="max-w-7xl mx-auto px-6 py-5 text-xs text-slate-500 flex flex-wrap justify-between gap-3">
            <span>© {new Date().getFullYear()} {company.owner} · Wariant 9 — Trust Banking</span>
            <Link href="/" className="underline hover:text-white">← all variants</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
