import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, gImg, blogImage, pick } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { HeroLines, HeroLine } from "@/components/motion/HeroLines";
import StaggeredText from "@/components/react-bits/staggered-text";
import SplitText from "@/components/react-bits/SplitText";
import { MobileNav } from "@/components/nav/MobileNav";
import CountUp from "@/components/react-bits/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/* Variant 1 — Editorial Minimal
 * Style: prasowy spokój, dużo bieli, serif Playfair + sans Inter, jeden ciemnozielony akcent.
 */

const hero      = pick(pixabay.modern_house, 0);
const handshake = pick(pixabay.businessman_handshake, 0);

const top3Reviews = reviews.reviews.slice(0, 3);
const top3Posts   = blogIndex.slice(0, 3);

const accent = "text-emerald-900";

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-[family-name:var(--font-inter)] selection:bg-emerald-900 selection:text-stone-50">

      {/* Nav */}
      <header className="border-b border-stone-200 bg-stone-50/80 backdrop-blur sticky top-0 z-40">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl tracking-tight">
            Miesała<span className={accent}>.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-600">
            <a href="#oferta">Oferta</a>
            <a href="#opinie">Opinie</a>
            <a href="#blog">Blog</a>
            <a href="#faq">FAQ</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <a href={company.contact.phoneTel} className="text-sm font-medium px-4 py-2 rounded-full bg-emerald-900 text-stone-50 hover:bg-emerald-800 transition">
            {company.contact.phone}
          </a>
        <MobileNav
            tone="light"
            items={ [{ label: "Oferta", href: "#oferta" }, { label: "Opinie", href: "#opinie" }, { label: "Blog", href: "#blog" }, { label: "FAQ", href: "#faq" }, { label: "Kontakt", href: "#kontakt" }] }
            phone={company.contact.phone}
            phoneTel={company.contact.phoneTel}
            ctaClassName="bg-emerald-900 text-stone-50 hover:bg-emerald-800"
            triggerClassName="text-stone-900"
          />
          </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-6">{company.category}</p>
          <HeroLines className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
            <HeroLine>Kredyt hipoteczny</HeroLine>
            <HeroLine className="italic text-emerald-900">bez chaosu &mdash;</HeroLine>
            <HeroLine>tylko jasna ścieżka</HeroLine>
            <HeroLine>do własnego domu.</HeroLine>
          </HeroLines>
          <p className="mt-7 max-w-xl text-lg text-stone-600 leading-relaxed">
            Jestem niezależnym ekspertem finansowym. Porównuję oferty 15+ banków, zajmuję się dokumentami i prowadzę Cię od pierwszej rozmowy do odbioru kluczy. Bez kosztów po Twojej stronie.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href={company.contact.phoneTel} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-900 text-stone-50 hover:bg-emerald-900 transition">
              Umów rozmowę
              <span aria-hidden>→</span>
            </a>
            <div className="flex items-center gap-3 text-sm text-stone-600">
              <span className="flex">{"★★★★★".split("").map((_, i) => <span key={i} className="text-amber-500">★</span>)}</span>
              <span><strong className="text-stone-900">{company.rating.value}</strong> · {company.rating.count} opinii Google</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
            <Image src={hero.largeImageURL} alt="Nowoczesny dom" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" priority unoptimized />
          </div>
          <figure className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full overflow-hidden ring-8 ring-stone-50 hidden md:block">
            <Image src={gImg(images.avatar.url, 320)} alt="Artur Miesała" fill className="object-cover" unoptimized />
          </figure>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center">
              <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-emerald-900"><CountUp to={s.to} duration={1.6} />{s.suffix}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-stone-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="oferta" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-900 mb-4">Oferta</p>
            <StaggeredText as="h2" className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl tracking-tight" text="Pełna obsługa, od liczb po podpis." />
          </div>
          <p className="md:col-span-7 md:col-start-7 text-stone-600 text-lg leading-relaxed">
            Każdy klient dostaje plan dopasowany do swojej sytuacji — od pierwszego badania zdolności po finalne uruchomienie środków przez bank.
          </p>
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {services.map((s, i) => (
            <StaggerItem key={s.slug} as="article" className="bg-stone-50 p-8 hover:bg-white transition group">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-emerald-900">0{i + 1}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl tracking-tight">{s.title}</h3>
              </div>
              <p className="mt-4 text-stone-600 leading-relaxed">{s.long}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* About / portrait */}
      <section className="bg-emerald-950 text-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 aspect-[4/5] relative overflow-hidden">
            <Image src={handshake.largeImageURL} alt="Doradca" fill className="object-cover grayscale" sizes="(min-width:1024px) 40vw, 100vw" unoptimized />
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-4">Kim jestem</p>
            <StaggeredText as="h2" className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl tracking-tight italic font-light" text="&ldquo;Moja misja to pomoc w realizacji marzeń o własnym domu.&rdquo;" />
            <p className="mt-6 text-stone-300 leading-relaxed max-w-xl">
              Doświadczenie, indywidualne podejście i kompleksowa obsługa na każdym etapie. Wiem, że kredyt to nie tylko liczby — to lata Twojego życia. Dlatego pracuję dokładnie i transparentnie.
            </p>
            <p className="mt-3 font-[family-name:var(--font-playfair)] text-2xl">— {company.owner}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="opinie" className="max-w-6xl mx-auto px-6 py-28">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-900 mb-4">Opinie</p>
            <Reveal as="h2" className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl tracking-tight">
              {company.rating.value}/5 z Google.
            </Reveal>
          </div>
          <p className="text-stone-500 max-w-md">
            Średnia z {company.rating.count} opinii — od pierwszych klientów po tych, którzy właśnie odebrali klucze.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {top3Reviews.map((r, i) => (
            <figure key={i} className="border-t border-stone-300 pt-6">
              <div className="flex text-amber-500 text-sm mb-4">{"★★★★★"}</div>
              <blockquote className="font-[family-name:var(--font-playfair)] text-xl leading-snug text-stone-800">
                &ldquo;{r.text.length > 220 ? r.text.slice(0, 220) + "…" : r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-widest text-stone-500">— {r.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Blog teaser */}
      <section id="blog" className="bg-stone-100 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-900 mb-4">Notatnik</p>
              <SplitText tag="h2" className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl tracking-tight" text="Wiedza, którą mogę się podzielić." splitType="chars" textAlign="left" delay={20} duration={0.9} />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {top3Posts.map((p, i) => (
              <article key={p.slug} className="group">
                <div className="aspect-[4/3] relative overflow-hidden mb-6 bg-stone-200">
                  <Image src={blogImage(p, i)} alt="" fill className="object-cover group-hover:scale-105 transition duration-700" unoptimized />
                </div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">{p.dateDisplay}</p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl leading-snug">{p.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-900 mb-4">Z gabinetu</p>
        <StaggeredText as="h2" className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl tracking-tight mb-10" text="Miejsce, w którym się spotkamy." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.gallery.slice(0, 8).map((g, i) => (
            <div key={i} className="aspect-square relative overflow-hidden">
              <Image src={gImg(g.url, 600)} alt="" fill className="object-cover" sizes="25vw" unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-900 mb-4 text-center">FAQ</p>
          <StaggeredText as="h2" className="justify-center font-[family-name:var(--font-playfair)] text-4xl md:text-5xl tracking-tight text-center mb-14" text="Najczęstsze pytania." />
          <div className="divide-y divide-stone-200">
            {faq.map((f, i) => (
              <details key={i} className="py-6 group">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <span className="font-[family-name:var(--font-playfair)] text-xl pr-6">{f.q}</span>
                  <span className="mt-1 text-2xl text-emerald-900 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-stone-600 leading-relaxed pr-12">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section className="bg-emerald-900 text-stone-50">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <StaggeredText as="h2" className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl tracking-tight" text="Gotowy zacząć rozmowę o własnym domu?" />
            <p className="mt-5 text-stone-300 max-w-xl">
              Bez zobowiązań, bez kosztów. Zadzwoń, opisz sytuację — w 30 minut wiem, jaki kredyt jest dla Ciebie realny.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <a href={company.contact.phoneTel} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-stone-50 text-emerald-950 text-lg font-medium hover:bg-amber-300 transition">
              {company.contact.phone}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact + map + footer */}
      <footer id="kontakt" className="bg-stone-900 text-stone-300">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="font-[family-name:var(--font-playfair)] text-2xl text-stone-50">{company.shortName}</p>
            <p className="mt-3 text-sm">{company.contact.address.full}</p>
            <p className="mt-1 text-sm">{company.contact.phone}</p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Godziny</p>
            <ul className="text-sm space-y-1">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between"><span>{d}</span><span className={h === "Zamknięte" ? "text-stone-500" : ""}>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="aspect-video w-full rounded-sm overflow-hidden border border-stone-700">
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800">
          <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-stone-500 flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} {company.owner}. Wariant 1 — Editorial Minimal.</p>
            <Link href="/" className="hover:text-stone-300">← Zobacz wszystkie warianty</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
