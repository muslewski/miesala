import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, gImg, blogImage, pick } from "@/lib/content";
import { SitePreloader } from "@/components/layout/SitePreloader";
import { Reveal } from "@/components/motion/Reveal";
import { FaqItem } from "@/components/motion/FaqItem";
import { HeroLines, HeroLine } from "@/components/motion/HeroLines";
import StaggeredText from "@/components/react-bits/staggered-text";
import BlurText from "@/components/react-bits/BlurText";
import { MobileNav } from "@/components/nav/MobileNav";
import CountUp from "@/components/react-bits/CountUp";

/* Variant 10 — Warm Organic
 * Ciepła paleta (sand, terracotta, sage), Fraunces + Inter, miękkie blob-y, ludzki ton.
 */

const hero = pick(pixabay.real_estate, 3);
const couple = pick(pixabay.couple_apartment, 0);
const top3Reviews = reviews.reviews.slice(2, 5);
const top3Posts = blogIndex.slice(0, 3);

const blob = "rounded-[3rem]";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 text-stone-800 font-[family-name:var(--font-inter)] selection:bg-orange-700 selection:text-amber-50 overflow-x-clip">
      <SitePreloader
        storageKey="miesala-pre-example-10"
        variant="circle"
        bgColor="#fff7ed"
        loadingText="Artur Miesała"
        textClassName="font-[family-name:var(--font-fraunces)] text-3xl md:text-5xl font-light text-orange-800 tracking-tight"
      />
      {/* Soft background blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute top-[30%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      <header className="sticky top-4 z-40 mx-4">
        <nav className="max-w-6xl mx-auto px-6 h-16 rounded-full bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-fraunces)] text-xl tracking-tight">
            <span className="w-9 h-9 rounded-full bg-orange-700 text-amber-50 grid place-items-center font-black text-sm">A</span>
            <span>Artur Miesała</span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-stone-700">
            <a href="#oferta">Pomoc</a><a href="#opinie">Klienci</a><a href="#blog">Blog</a><a href="#faq">FAQ</a>
          </div>
          <a href={company.contact.phoneTel} className="max-md:hidden text-sm font-semibold px-5 py-2.5 rounded-full bg-orange-700 text-amber-50 hover:bg-orange-800 transition">{company.contact.phone}</a>
        <MobileNav
            tone="light"
            items={ [{ label: "Pomoc", href: "#oferta" }, { label: "Klienci", href: "#opinie" }, { label: "Blog", href: "#blog" }, { label: "FAQ", href: "#faq" }] }
            phone={company.contact.phone}
            phoneTel={company.contact.phoneTel}
            ctaClassName="bg-orange-700 text-amber-50 hover:bg-orange-800"
            triggerClassName="text-stone-800"
          />
          </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-medium">
            ✺ Niezależny ekspert kredytowy — Bydgoszcz
          </p>
          <HeroLines className="font-[family-name:var(--font-fraunces)] text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mt-7 leading-[1.0]">
            <HeroLine>Kredyt to droga.</HeroLine>
            <HeroLine><span className="italic text-orange-800">Towarzyszę</span> Ci</HeroLine>
            <HeroLine>na każdym jej zakręcie.</HeroLine>
          </HeroLines>
          <p className="mt-7 text-lg text-stone-600 max-w-xl leading-relaxed">
            Nazywam się Artur. Od ponad dekady pomagam parom, rodzinom i singlom w finansowaniu domów i mieszkań. Bez bankowej nowomowy — po ludzku, w Twoim tempie.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={company.contact.phoneTel} className="px-7 py-4 rounded-full bg-orange-700 text-amber-50 font-semibold hover:bg-orange-800 transition shadow-lg shadow-orange-700/30">Porozmawiajmy</a>
            <a href="#blog" className="px-7 py-4 rounded-full border border-stone-300 hover:bg-white/50 transition font-semibold">Sprawdź blog</a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[0,1,2,3].map((i) => (
                <span key={i} className="w-9 h-9 rounded-full ring-2 ring-amber-50 grid place-items-center text-amber-50 text-xs font-bold" style={{ background: ["#a16207","#b91c1c","#15803d","#1d4ed8"][i] }}>{["JK","MN","PT","ZW"][i]}</span>
              ))}
            </div>
            <p className="text-sm text-stone-600"><span className="font-bold text-stone-900">{company.rating.count}+</span> par i rodzin · średnia ocena {company.rating.value}/5 ★</p>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className={`${blob} bg-gradient-to-br from-orange-200 to-rose-200 p-3 rotate-2 shadow-2xl shadow-orange-300/40`}>
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative">
              <Image src={hero.largeImageURL} alt="" fill className="object-cover" priority />
            </div>
          </div>
          {/* Floating chips */}
          <div className="absolute -top-3 right-4 bg-white rounded-full px-5 py-3 shadow-xl shadow-stone-300/40 -rotate-3 flex items-center gap-3">
            <span className="text-2xl">✺</span>
            <div>
              <p className="text-xs text-stone-500">Pierwsze spotkanie</p>
              <p className="text-sm font-bold">bezpłatne</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-2 bg-amber-200 rounded-full px-5 py-3 shadow-xl shadow-amber-300/40 rotate-3 flex items-center gap-3">
            <span className="text-2xl">☘</span>
            <div>
              <p className="text-xs text-amber-900/70">Ekspert od</p>
              <p className="text-sm font-bold text-amber-900">2014 roku</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className={`${blob} bg-white/70 backdrop-blur-xl border border-white/60 p-8 grid grid-cols-2 md:grid-cols-4 gap-6`}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-[family-name:var(--font-fraunces)] text-5xl font-light text-orange-800"><CountUp to={s.to} duration={1.6} />{s.suffix}</p>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="oferta" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-orange-800 mb-3 uppercase tracking-widest">W czym pomagam</p>
          <StaggeredText as="h2" className="justify-center font-[family-name:var(--font-fraunces)] text-5xl md:text-6xl font-light tracking-tight" text="Sześć rzeczy, które robię dla Ciebie." />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const palettes = [
              "bg-orange-100/60 border-orange-200",
              "bg-rose-100/60 border-rose-200",
              "bg-amber-100/60 border-amber-200",
              "bg-emerald-100/60 border-emerald-200",
              "bg-stone-100/60 border-stone-200",
              "bg-indigo-100/60 border-indigo-200",
            ];
            return (
              <article key={s.slug} className={`${blob} ${palettes[i % palettes.length]} border p-7 hover:-translate-y-1 transition`}>
                <span className="font-[family-name:var(--font-fraunces)] text-5xl font-light text-stone-800">0{i + 1}</span>
                <h3 className="font-[family-name:var(--font-fraunces)] text-2xl mt-3">{s.title}</h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed">{s.short}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* About / portrait */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className={`${blob} bg-gradient-to-br from-amber-200 to-orange-200 p-3 -rotate-2 shadow-2xl shadow-orange-300/40`}>
            <div className="aspect-square rounded-[2.5rem] overflow-hidden relative">
              <Image src={couple.largeImageURL} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-orange-800 mb-3 uppercase tracking-widest">Filozofia pracy</p>
          <Reveal as="h2" className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-light tracking-tight leading-tight">
            Wierzę, że za każdym kredytem<br/>stoi <span className="italic text-orange-800">prawdziwa historia</span>.
          </Reveal>
          <p className="mt-6 text-stone-600 leading-relaxed max-w-xl">
            Dlatego nie sprzedaję produktów &mdash; pomagam ludziom dobrze ulokować swoją historię w nieruchomości. Bez pośpiechu, z szacunkiem dla Twoich planów i obaw.
          </p>
          <p className="mt-4 font-[family-name:var(--font-fraunces)] text-2xl font-light italic">— {company.owner}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="opinie" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-orange-800 mb-3 uppercase tracking-widest">Klienci</p>
          <BlurText as="h2" className="font-[family-name:var(--font-fraunces)] text-5xl md:text-6xl font-light tracking-tight" text="Słowa, które mnie napędzają." animateBy="words" delay={120} />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {top3Reviews.map((r, i) => (
            <figure key={i} className={`${blob} bg-white/80 backdrop-blur-xl border border-white/60 p-7`}>
              <p className="text-orange-700 mb-4 text-lg">{"★★★★★"}</p>
              <blockquote className="font-[family-name:var(--font-fraunces)] text-lg italic leading-snug text-stone-800">&ldquo;{r.text.length > 200 ? r.text.slice(0, 200) + "…" : r.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-orange-200 text-orange-800 grid place-items-center font-bold text-sm">{r.author[0]}</span>
                <span className="text-sm font-medium">{r.author}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-6xl mx-auto px-6 pb-24">
        <StaggeredText as="h2" className="justify-center font-[family-name:var(--font-fraunces)] text-5xl md:text-6xl font-light tracking-tight text-center mb-12" text="Listy z gabinetu." />
        <div className="grid md:grid-cols-3 gap-6">
          {top3Posts.map((p, i) => (
            <article key={p.slug} className={`${blob} bg-white/80 backdrop-blur-xl border border-white/60 overflow-hidden ${i === 1 ? "md:translate-y-6" : ""}`}>
              <div className="aspect-[4/3] relative m-3 rounded-[2rem] overflow-hidden">
                <Image src={blogImage(p, i)} alt="" fill className="object-cover" />
              </div>
              <div className="px-6 pb-6">
                <p className="text-xs text-orange-800 font-medium mb-2 uppercase tracking-widest">{p.dateDisplay}</p>
                <h3 className="font-[family-name:var(--font-fraunces)] text-xl leading-snug">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <StaggeredText as="h2" className="font-[family-name:var(--font-fraunces)] text-5xl md:text-6xl font-light tracking-tight mb-10" text="Codziennie tutaj." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.gallery.slice(0, 8).map((g, i) => (
            <div key={i} className={`${blob} bg-white/80 backdrop-blur-xl border border-white/60 p-2 ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}>
              <div className="aspect-square relative rounded-[1.75rem] overflow-hidden">
                <Image src={gImg(g.url, 600)} alt="" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — editorial list with serif numerals on the left, an arrow that
          rotates down on open, and a warm peach gradient washing over the
          open card. Reads more like a magazine Q&A than a generic accordion. */}
      <section id="faq" className="max-w-3xl mx-auto px-6 pb-24">
        <StaggeredText as="h2" className="justify-center font-[family-name:var(--font-fraunces)] text-5xl md:text-6xl font-light tracking-tight text-center mb-10" text="A może masz pytania?" />
        <div className="space-y-3">
          {faq.map((f, i) => (
            <FaqItem
              key={i}
              className={`${blob} bg-white/70 backdrop-blur-xl border border-white/60 data-[state=open]:bg-gradient-to-br data-[state=open]:from-orange-50 data-[state=open]:via-rose-50/60 data-[state=open]:to-amber-50 data-[state=open]:border-orange-200/70 transition-colors duration-300 overflow-hidden`}
              question={
                <span className="flex items-baseline gap-5 px-6 py-5 md:gap-7 md:px-8">
                  <span className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-light text-orange-300 group-data-[state=open]/faq:text-orange-700 transition-colors tabular-nums leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-[family-name:var(--font-fraunces)] text-lg md:text-xl font-light text-stone-800 leading-snug">
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 text-orange-700 text-2xl leading-none transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]/faq:rotate-90"
                  >
                    →
                  </span>
                </span>
              }
              contentClassName="px-6 md:px-8 pb-6 md:pb-7 pl-[4.5rem] md:pl-[5.5rem] text-stone-700 leading-relaxed font-[family-name:var(--font-inter)]"
              answer={f.a}
            />
          ))}
        </div>
      </section>

      {/* CTA above footer */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className={`${blob} relative overflow-hidden bg-gradient-to-br from-orange-700 to-rose-700 text-amber-50 p-10 md:p-16`}>
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-amber-300/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-rose-400/30 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <Reveal as="h2" className="font-[family-name:var(--font-fraunces)] text-5xl md:text-6xl font-light tracking-tight leading-[1.05]">
                Zaparzmy kawę<br/>i pogadajmy o domu.
              </Reveal>
              <p className="mt-5 text-amber-100 max-w-lg">Bez zobowiązań, bez pośpiechu. Po prostu rozmowa — odbieram do siódmej wieczorem.</p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a href={company.contact.phoneTel} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-50 text-orange-800 text-lg font-bold hover:bg-amber-200 transition shadow-2xl">{company.contact.phone} →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="max-w-6xl mx-auto px-6 pb-12">
        <div className={`${blob} bg-white/80 backdrop-blur-xl border border-white/60 p-10 grid lg:grid-cols-12 gap-10`}>
          <div className="lg:col-span-4">
            <p className="font-[family-name:var(--font-fraunces)] text-2xl">{company.shortName}</p>
            <p className="mt-3 text-sm text-stone-600">{company.contact.address.full}</p>
            <p className="text-sm text-stone-600">{company.contact.phone}</p>
          </div>
          <div className="lg:col-span-4 text-sm">
            <p className="text-xs uppercase tracking-widest text-orange-800 mb-3">Godziny</p>
            <ul className="space-y-1">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between"><span>{d}</span><span className={h === "Zamknięte" ? "text-stone-400" : "font-medium"}>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="aspect-video rounded-[1.75rem] overflow-hidden">
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-stone-500 mt-6">© {new Date().getFullYear()} {company.owner} · Wariant 10 — Warm Organic · <Link href="/" className="underline hover:text-orange-800">all variants</Link></p>
      </footer>
    </main>
  );
}
