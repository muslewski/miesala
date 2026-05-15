import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, trustBanks, gImg, blogImage, pick } from "@/lib/content";
import { SitePreloader } from "@/components/layout/SitePreloader";
import { Reveal } from "@/components/motion/Reveal";
import StaggeredText from "@/components/react-bits/staggered-text";
import TextType from "@/components/react-bits/TextType";
import { HeroLines, HeroLine } from "@/components/motion/HeroLines";
import { MobileNav } from "@/components/nav/MobileNav";
import CountUp from "@/components/react-bits/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/* Variant 3 — Industrial
 * Concrete + steel + safety orange.
 * Bebas Neue (condensed display) + JetBrains Mono (specs/labels) + Inter (body).
 * Sharp corners, hard rules, blueprint grid, caution stripes.
 */

const hero      = pick(pixabay.city_building, 0);
const machinery = pick(pixabay.documents_desk, 1);
const skyline   = pick(pixabay.warsaw_poland, 0);

const top3Reviews = reviews.reviews.slice(0, 3);
const top3Posts   = blogIndex.slice(0, 3);

// caution-stripe background pattern (yellow + black diagonal)
const cautionStripe = {
  backgroundImage:
    "repeating-linear-gradient(45deg, #f59e0b 0 14px, #0a0a0a 14px 28px)",
};

// blueprint grid
const blueprint = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

// reusable mono label
const mono = "font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]";

export default function Page() {
  const year = new Date().getFullYear();
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 font-[family-name:var(--font-inter)] selection:bg-orange-500 selection:text-zinc-950">
      <SitePreloader
        storageKey="miesala-pre-example-3"
        variant="stairs"
        bgColor="#09090b"
        loadingText="EXPERT UNIT 014"
        textClassName="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl text-orange-400 tracking-wider"
        stairCount={8}
      />
      {/* Top hazard bar */}
      <div className="h-2" style={cautionStripe} />

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur border-b border-zinc-800">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="w-9 h-9 grid place-items-center bg-orange-500 text-zinc-950 font-bold text-xs">
              ☰
            </span>
            <div className="leading-none">
              <p className={`${mono} text-[10px] text-orange-400`}>EXPERT.UNIT</p>
              <p className="font-[family-name:var(--font-bebas)] text-xl tracking-wider mt-0.5">MIESAŁA / 014</p>
            </div>
          </Link>
          <div className={`hidden md:flex items-center gap-7 ${mono} text-[11px] text-zinc-400`}>
            <a href="#oferta" className="hover:text-orange-400">// oferta</a>
            <a href="#opinie" className="hover:text-orange-400">// opinie</a>
            <a href="#blog" className="hover:text-orange-400">// raporty</a>
            <a href="#faq" className="hover:text-orange-400">// faq</a>
          </div>
          <a href={company.contact.phoneTel} className={`${mono} text-[11px] px-4 h-10 inline-flex items-center gap-2 bg-orange-500 text-zinc-950 hover:bg-orange-400 transition`}>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-pulse" />
            {company.contact.phone}
          </a>
        <MobileNav
            tone="dark"
            items={ [{ label: "Oferta", href: "#oferta" }, { label: "Opinie", href: "#opinie" }, { label: "Raporty", href: "#blog" }, { label: "FAQ", href: "#faq" }] }
            phone={company.contact.phone}
            phoneTel={company.contact.phoneTel}
            ctaClassName="bg-orange-500 text-zinc-950 hover:bg-orange-400"
            triggerClassName="text-zinc-100 border border-zinc-700"
          />
          </nav>
      </header>

      {/* Hero */}
      <section className="relative border-b border-zinc-800">
        <div className="absolute inset-0 opacity-60 pointer-events-none" style={blueprint} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10 items-end">
          {/* Crosshairs */}
          <div className="absolute top-6 right-6 w-8 h-8 border-2 border-orange-400 grid place-items-center text-orange-400 hidden md:grid">
            <span className="w-1 h-1 bg-orange-400" />
          </div>

          <div className="lg:col-span-7">
            <div className={`${mono} text-[10px] text-orange-400 flex items-center gap-4 mb-8`}>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400" />
                REF.001 /{" "}
                <TextType
                  as="span"
                  text={[
                    "DORADZTWO KREDYTOWE",
                    "KREDYT HIPOTECZNY",
                    "REFINANSOWANIE",
                    "KONSOLIDACJA",
                    "PROGRAMY RZĄDOWE",
                  ]}
                  typingSpeed={45}
                  deletingSpeed={25}
                  pauseDuration={1800}
                  cursorCharacter="▮"
                  cursorClassName="text-orange-400"
                />
              </span>
              <span className="text-zinc-600">|</span>
              <span>{company.contact.address.city.toUpperCase()}, PL</span>
              <span className="text-zinc-600">|</span>
              <span>EST. 2014</span>
            </div>

            <HeroLines className="font-[family-name:var(--font-bebas)] text-[18vw] md:text-[12vw] lg:text-[9.5vw] tracking-wide leading-[0.85]">
              <HeroLine>KREDYT.</HeroLine>
              <HeroLine className="text-orange-400">HIPOTECZNY.</HeroLine>
              <HeroLine className="text-zinc-500">BEZ BŁĘDÓW.</HeroLine>
            </HeroLines>

            <p className="mt-8 max-w-xl text-zinc-300 text-lg leading-relaxed">
              Inżynierskie podejście do finansowania nieruchomości. Liczby, procedury, audyt dokumentów — wszystko prowadzone z dokładnością do dnia, bez kosztu po Twojej stronie.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={company.contact.phoneTel} className={`${mono} text-[12px] inline-flex items-center gap-3 bg-orange-500 text-zinc-950 px-6 h-14 hover:bg-orange-400 transition`}>
                ▶ ROZPOCZNIJ_PROCES
              </a>
              <a href="#oferta" className={`${mono} text-[12px] inline-flex items-center gap-3 border border-zinc-700 px-6 h-14 hover:border-orange-400 hover:text-orange-400 transition`}>
                SPECYFIKACJA →
              </a>
            </div>
          </div>

          {/* Hero image with tech overlay */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-3 left-0 right-0 flex justify-between items-center">
              <span className={`${mono} text-[10px] text-orange-400`}>FIG.01 / EKSPERT</span>
              <span className={`${mono} text-[10px] text-zinc-500`}>SCALE 1:1</span>
            </div>
            <div className="border-2 border-orange-400/40 p-1.5 relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image src={hero.largeImageURL} alt="" fill className="object-cover saturate-50 contrast-110" priority unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                {/* corner brackets */}
                <span className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-orange-400" />
                <span className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-orange-400" />
                <span className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-orange-400" />
                <span className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-orange-400" />
              </div>
            </div>
            {/* spec card */}
            <div className="mt-3 grid grid-cols-2 text-[11px] border border-zinc-800 divide-x divide-zinc-800">
              <div className="p-3">
                <p className={`${mono} text-zinc-500 text-[9px]`}>RATING</p>
                <p className="font-[family-name:var(--font-bebas)] text-3xl text-orange-400 leading-none mt-1">{company.rating.value}<span className="text-zinc-600 text-xl">/5</span></p>
              </div>
              <div className="p-3">
                <p className={`${mono} text-zinc-500 text-[9px]`}>OPINII</p>
                <p className="font-[family-name:var(--font-bebas)] text-3xl text-zinc-100 leading-none mt-1">{company.rating.count}+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — gauges */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800">
          {stats.map((s, i) => (
            <div key={s.label} className="px-6 py-8 relative">
              <p className={`${mono} text-[10px] text-orange-400 mb-2`}>{`PARAM.${String(i + 1).padStart(2, "0")}`}</p>
              <p className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl leading-none tracking-wide"><CountUp to={s.to} duration={1.6} />{s.suffix}</p>
              <p className={`${mono} text-[10px] text-zinc-500 mt-3`}>{s.label.toUpperCase()}</p>
              <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-orange-400" />
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip — banks like supplier list */}
      <section className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className={`${mono} text-[10px] text-orange-400 mb-4 flex items-center gap-3`}>
            <span className="h-px w-8 bg-orange-400" />
            ZATWIERDZONE INSTYTUCJE [{trustBanks.length}]
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {trustBanks.map((b) => (
              <span key={b} className="font-[family-name:var(--font-bebas)] text-xl text-zinc-400 hover:text-orange-400 transition tracking-wide">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="oferta" className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4">
              <p className={`${mono} text-[10px] text-orange-400 mb-3`}>SECT-02 / OFERTA</p>
              <Reveal as="h2" className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl tracking-wide leading-[0.9]">
                ZAKRES<br/>USŁUG.
              </Reveal>
            </div>
            <p className="lg:col-span-7 lg:col-start-6 text-zinc-300 text-lg leading-relaxed self-end">
              Sześć dokumentowanych procedur, w których prowadzę klienta od pierwszej rozmowy aż do uruchomienia środków przez bank.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
            {services.map((s, i) => (
              <article key={s.slug} className="bg-zinc-900 p-7 hover:bg-zinc-800 transition group relative">
                <div className="flex items-start justify-between">
                  <span className={`${mono} text-[10px] text-orange-400`}>{`PROC.${String(i + 1).padStart(2, "0")}`}</span>
                  <span className="w-8 h-8 border border-zinc-700 grid place-items-center group-hover:border-orange-400 group-hover:text-orange-400 transition">→</span>
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl mt-6 tracking-wide">{s.title}</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{s.long}</p>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-400 group-hover:w-full transition-all duration-500" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About — spec sheet */}
      <section className="border-b border-zinc-800 relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={blueprint} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="border-2 border-orange-400/40 p-1.5">
              <div className="aspect-square relative overflow-hidden">
                <Image src={machinery.largeImageURL} alt="" fill className="object-cover saturate-50 contrast-110" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-zinc-950/40" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 text-[11px]">
              <div className="border border-zinc-800 p-3">
                <p className={`${mono} text-zinc-500 text-[9px]`}>EST.</p>
                <p className="font-[family-name:var(--font-bebas)] text-2xl text-orange-400 leading-none mt-1">2014</p>
              </div>
              <div className="border border-zinc-800 p-3">
                <p className={`${mono} text-zinc-500 text-[9px]`}>UNIT</p>
                <p className="font-[family-name:var(--font-bebas)] text-2xl leading-none mt-1">001</p>
              </div>
              <div className="border border-zinc-800 p-3">
                <p className={`${mono} text-zinc-500 text-[9px]`}>OPS</p>
                <p className="font-[family-name:var(--font-bebas)] text-2xl leading-none mt-1">15+</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className={`${mono} text-[10px] text-orange-400 mb-4`}>SECT-03 / OPERATOR</p>
            <Reveal as="h2" className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-wide leading-[0.9]">
              ARTUR MIESAŁA<br/>
              <span className="text-orange-400">// MOTOR PROCESU.</span>
            </Reveal>
            <p className="mt-6 text-zinc-300 leading-relaxed max-w-xl">
              Doradca z zacięciem inżyniera. Zamiast obietnic — checklisty, harmonogramy i dokumentacja. Tłumaczę bankowy żargon na język ludzi, którzy chcą wiedzieć, na czym dokładnie stoją.
            </p>
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { v: "0 zł", l: "KOSZT KLIENTA" },
                { v: "21 dni", l: "DECYZJA BANKU" },
                { v: "PL", l: "ZASIĘG" },
                { v: "100%", l: "TRANSPARENTNOŚĆ" },
              ].map((x) => (
                <div key={x.l} className="border-t-2 border-orange-400 pt-2">
                  <p className="font-[family-name:var(--font-bebas)] text-2xl leading-none">{x.v}</p>
                  <p className={`${mono} text-[9px] text-zinc-500 mt-1.5`}>{x.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — file cards */}
      <section id="opinie" className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className={`${mono} text-[10px] text-orange-400 mb-3`}>SECT-04 / RAPORTY KLIENTÓW</p>
              <StaggeredText as="h2" className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl tracking-wide leading-[0.9]" text="CASE FILES." />
            </div>
            <p className={`${mono} text-[10px] text-zinc-500`}>{`SAMPLE = ${top3Reviews.length} / TOTAL = ${company.rating.count}`}</p>
          </div>
          <Stagger className="grid md:grid-cols-3 gap-px bg-zinc-800">
            {top3Reviews.map((r, i) => (
              <StaggerItem key={i} as="figure" className="bg-zinc-900 p-7 relative">
                <div className="flex items-center justify-between mb-5">
                  <span className={`${mono} text-[10px] text-orange-400`}>{`FILE.${String(i + 1).padStart(3, "0")}`}</span>
                  <span className="text-orange-400 text-lg tracking-widest">{"★★★★★"}</span>
                </div>
                <blockquote className="text-zinc-200 leading-relaxed">&ldquo;{r.text.length > 220 ? r.text.slice(0, 220) + "…" : r.text}&rdquo;</blockquote>
                <figcaption className={`${mono} text-[10px] text-zinc-500 mt-5 pt-5 border-t border-zinc-800`}>// {r.author.toUpperCase()}</figcaption>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Blog — newsfeed */}
      <section id="blog" className="border-b border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className={`${mono} text-[10px] text-orange-400 mb-3`}>SECT-05 / RAPORTY RYNKOWE</p>
              <StaggeredText as="h2" className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl tracking-wide leading-[0.9]" text="BIULETYN." />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-zinc-800">
            {top3Posts.map((p, i) => (
              <article key={p.slug} className="bg-zinc-900 group">
                <div className="aspect-[16/10] relative overflow-hidden border-b border-zinc-800">
                  <Image src={blogImage(p, i)} alt="" fill className="object-cover saturate-50 group-hover:saturate-100 transition duration-500" unoptimized />
                  <span className={`absolute top-3 left-3 ${mono} text-[10px] bg-zinc-950/80 backdrop-blur px-2 py-1 text-orange-400 border border-orange-400/40`}>
                    NR.{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <p className={`${mono} text-[10px] text-orange-400 mb-3`}>{p.dateDisplay.toUpperCase()}</p>
                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl leading-tight tracking-wide">{p.title}</h3>
                  <p className={`${mono} text-[10px] text-zinc-500 mt-4 group-hover:text-orange-400 transition`}>OTWÓRZ &rarr;</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — contact sheets */}
      <section className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className={`${mono} text-[10px] text-orange-400 mb-3`}>SECT-06 / DOKUMENTACJA WIZUALNA</p>
              <StaggeredText as="h2" className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl tracking-wide leading-[0.9]" text="CONTACT SHEET." />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {images.gallery.slice(0, 8).map((g, i) => (
              <div key={i} className="aspect-square relative border border-zinc-800 group overflow-hidden">
                <Image src={gImg(g.url, 600)} alt="" fill className="object-cover saturate-50 group-hover:saturate-100 transition" sizes="25vw" unoptimized />
                <span className={`absolute top-2 left-2 ${mono} text-[9px] bg-zinc-950/80 px-1.5 py-0.5 text-orange-400`}>
                  IMG.{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — technical sheet */}
      <section id="faq" className="border-b border-zinc-800 relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={blueprint} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className={`${mono} text-[10px] text-orange-400 mb-3`}>SECT-07 / DIAGNOSTYKA</p>
            <Reveal as="h2" className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl tracking-wide leading-[0.9]">FAQ /<br/>TROUBLE<br/>SHOOTING.</Reveal>
            <p className="mt-6 text-zinc-400 max-w-xs">Najczęściej zgłaszane &bdquo;dlaczego&rdquo; w procesie kredytowym. Inżynierskie odpowiedzi.</p>
          </div>
          <div className="lg:col-span-8 divide-y divide-zinc-800 border-y border-zinc-800">
            {faq.map((f, i) => (
              <details key={i} className="group bg-zinc-900/40 open:bg-zinc-900">
                <summary className="grid grid-cols-12 gap-4 items-baseline cursor-pointer list-none p-5">
                  <span className={`col-span-2 md:col-span-1 ${mono} text-[10px] text-orange-400`}>{`Q.${String(i + 1).padStart(2, "0")}`}</span>
                  <span className="col-span-9 md:col-span-10 font-[family-name:var(--font-bebas)] text-xl tracking-wide leading-snug">{f.q.toUpperCase()}</span>
                  <span className="col-span-1 text-right text-orange-400 transition group-open:rotate-45 leading-none text-xl">+</span>
                </summary>
                <p className="px-5 pb-5 pl-[16.66%] md:pl-[8.33%] text-zinc-300 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section className="border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={skyline.largeImageURL} alt="" fill className="object-cover saturate-0 opacity-30" unoptimized />
          <div className="absolute inset-0 bg-zinc-950/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className={`${mono} text-[10px] text-orange-400 mb-4`}>SECT-08 / URUCHOMIENIE</p>
            <Reveal as="h2" className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl tracking-wide leading-[0.85]">
              ROZRUCH<br/>PROCESU.<br/><span className="text-orange-400">JEDEN TELEFON.</span>
            </Reveal>
            <p className="mt-6 text-zinc-300 max-w-lg">Konsultacja diagnostyczna — 30 minut. Bez zobowiązań. Po niej wiesz, na czym stoisz.</p>
          </div>
          <div className="md:col-span-5 md:text-right space-y-4">
            <a href={company.contact.phoneTel} className={`${mono} inline-flex items-center gap-3 bg-orange-500 text-zinc-950 px-7 h-14 hover:bg-orange-400 transition text-[12px]`}>
              ▶ {company.contact.phone}
            </a>
            <p className={`${mono} text-[10px] text-zinc-500`}>OPERACYJNE PN-PT 09:00&minus;19:00</p>
          </div>
        </div>
        {/* bottom hazard bar */}
        <div className="h-2" style={cautionStripe} />
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className={`${mono} text-[10px] text-orange-400`}>EXPERT.UNIT // {year}</p>
            <p className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide mt-2">{company.shortName.toUpperCase()}</p>
            <p className="text-sm text-zinc-400 mt-3">{company.contact.address.full}</p>
            <p className={`${mono} text-sm mt-1`}>{company.contact.phone}</p>
          </div>
          <div className="lg:col-span-4">
            <p className={`${mono} text-[10px] text-orange-400 mb-3`}>HARMONOGRAM</p>
            <ul className={`${mono} text-[11px] space-y-1`}>
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between border-b border-zinc-800 pb-1">
                  <span className="text-zinc-400">{d.toUpperCase()}</span>
                  <span className={h === "Zamknięte" ? "text-zinc-600" : "text-orange-400"}>{h.toUpperCase()}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className={`${mono} text-[10px] text-orange-400 mb-3`}>LOKALIZACJA</p>
            <div className="aspect-video border border-zinc-800 grayscale contrast-125">
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800">
          <p className={`${mono} max-w-7xl mx-auto px-6 py-5 text-[10px] text-zinc-500 flex flex-wrap items-center justify-between gap-3`}>
            <span>© {year} {company.owner.toUpperCase()} // WARIANT 03 — INDUSTRIAL</span>
            <Link href="/" className="hover:text-orange-400">← WSZYSTKIE WARIANTY</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
