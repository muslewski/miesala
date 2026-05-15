import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, gImg, blogImage, pick } from "@/lib/content";
import { SitePreloader } from "@/components/layout/SitePreloader";
import { Reveal } from "@/components/motion/Reveal";
import { FaqItem } from "@/components/motion/FaqItem";
import { HeroLines, HeroLine } from "@/components/motion/HeroLines";
import StaggeredText from "@/components/react-bits/staggered-text";
import { MobileNav } from "@/components/nav/MobileNav";
import CountUp from "@/components/react-bits/CountUp";

/* Variant 6 — Neumorphism Mono
 * Jeden kolor (neutral-200), wypukłe i wklęsłe formy, Manrope, mały akcent stalowy.
 */

const hero = pick(pixabay.documents_desk, 0);
const top3Reviews = reviews.reviews.slice(5, 8);
const top3Posts = blogIndex.slice(0, 3);

// Outer (pressed-out / raised)
const raised = "shadow-[10px_10px_24px_rgba(0,0,0,0.12),-10px_-10px_24px_rgba(255,255,255,0.85)]";
const raisedSm = "shadow-[6px_6px_14px_rgba(0,0,0,0.12),-6px_-6px_14px_rgba(255,255,255,0.85)]";
// Inset (pressed-in)
const sunken = "shadow-[inset_6px_6px_12px_rgba(0,0,0,0.12),inset_-6px_-6px_12px_rgba(255,255,255,0.85)]";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-200 text-neutral-800 font-[family-name:var(--font-manrope)]">
      <SitePreloader
        storageKey="miesala-pre-example-6"
        variant="slide"
        bgColor="#e5e5e5"
        loadingText="Miesała"
        textClassName="font-[family-name:var(--font-manrope)] text-3xl md:text-5xl font-extrabold text-neutral-800 tracking-tight"
      />
      <header className="sticky top-5 z-40 mx-4 md:mx-8">
        <nav className={`${raisedSm} max-w-6xl mx-auto px-6 h-16 rounded-2xl bg-neutral-200 flex items-center justify-between`}>
          <Link href="/" className="flex items-center gap-3 font-bold">
            <span className={`${sunken} w-10 h-10 rounded-2xl bg-neutral-200 grid place-items-center text-sm`}>AM</span>
            <span>Miesała</span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-neutral-600">
            <a href="#oferta">Oferta</a><a href="#opinie">Opinie</a><a href="#blog">Blog</a><a href="#faq">FAQ</a>
          </div>
          <a href={company.contact.phoneTel} className={`${raisedSm} px-4 h-10 rounded-2xl bg-neutral-200 inline-flex items-center text-sm font-semibold hover:translate-y-px transition`}>{company.contact.phone}</a>
        <MobileNav
            tone="light"
            items={ [{ label: "Oferta", href: "#oferta" }, { label: "Opinie", href: "#opinie" }, { label: "Blog", href: "#blog" }, { label: "FAQ", href: "#faq" }] }
            phone={company.contact.phone}
            phoneTel={company.contact.phoneTel}
            ctaClassName="bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
            triggerClassName="text-neutral-800"
          />
          </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <p className={`${sunken} inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200 text-xs uppercase tracking-widest text-neutral-500`}>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" /> Niezależny ekspert kredytowy
          </p>
          <HeroLines className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 leading-[1.05]">
            <HeroLine>Spokojny <span className="font-light italic">kredyt.</span></HeroLine>
            <HeroLine>Konkretny <span className="font-light italic">wynik.</span></HeroLine>
          </HeroLines>
          <p className="mt-6 text-lg text-neutral-600 max-w-xl leading-relaxed">
            Pracuję bez pośpiechu, w jasnym procesie. Krok po kroku, dokument po dokumencie — aż do podpisania umowy w banku, który naprawdę pasuje do Twojej sytuacji.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href={company.contact.phoneTel} className={`${raised} px-7 py-4 rounded-2xl bg-neutral-200 font-semibold hover:translate-y-[2px] hover:shadow-[5px_5px_12px_rgba(0,0,0,0.12),-5px_-5px_12px_rgba(255,255,255,0.85)] transition`}>Umów rozmowę →</a>
            <div className={`${sunken} px-5 py-3 rounded-2xl bg-neutral-200 inline-flex items-center gap-3 text-sm`}>
              <span className="text-amber-600">{"★★★★★"}</span>
              <span><b>{company.rating.value}</b> · {company.rating.count} opinii</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className={`${raised} p-4 rounded-[2rem] bg-neutral-200`}>
            <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative shadow-[inset_8px_8px_16px_rgba(0,0,0,0.12),inset_-8px_-8px_16px_rgba(255,255,255,0.6)]">
              <Image src={hero.largeImageURL} alt="" fill className="object-cover mix-blend-luminosity opacity-90" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className={`${raised} rounded-3xl bg-neutral-200 grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-300/50`}>
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <p className="text-5xl font-extrabold tracking-tight"><CountUp to={s.to} duration={1.6} />{s.suffix}</p>
              <p className="text-[11px] uppercase tracking-widest text-neutral-500 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="oferta" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Oferta</p>
          <StaggeredText as="h2" className="text-4xl md:text-5xl font-extrabold tracking-tight" text="Sześć usług — jeden ekspert." />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <article key={s.slug} className={`${raised} p-7 rounded-3xl bg-neutral-200 hover:translate-y-[-2px] transition`}>
              <span className={`${sunken} w-12 h-12 rounded-2xl bg-neutral-200 grid place-items-center font-mono`}>{`0${i + 1}`}</span>
              <h3 className="font-bold text-xl mt-5 tracking-tight">{s.title}</h3>
              <p className="text-sm text-neutral-600 mt-3 leading-relaxed">{s.long}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="opinie" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <StaggeredText as="h2" className="text-4xl md:text-5xl font-extrabold tracking-tight" text="Co mówią klienci." />
          <span className={`${sunken} px-4 py-2 rounded-full bg-neutral-200 text-sm`}>Google: {company.rating.value} ★</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {top3Reviews.map((r, i) => (
            <figure key={i} className={`${raised} p-7 rounded-3xl bg-neutral-200`}>
              <p className="text-amber-600 mb-3">{"★★★★★"}</p>
              <blockquote className="text-neutral-700 leading-relaxed">&ldquo;{r.text.length > 200 ? r.text.slice(0, 200) + "…" : r.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className={`${sunken} w-10 h-10 rounded-2xl grid place-items-center font-bold bg-neutral-200`}>{r.author[0]}</span>
                <span className="text-sm font-semibold">{r.author}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-6xl mx-auto px-6 pb-24">
        <StaggeredText as="h2" className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10" text="Notatnik eksperta" />
        <div className="grid md:grid-cols-3 gap-6">
          {top3Posts.map((p, i) => (
            <article key={p.slug} className={`${raised} rounded-3xl bg-neutral-200 overflow-hidden`}>
              <div className="m-3 aspect-[16/10] relative rounded-2xl overflow-hidden shadow-[inset_4px_4px_10px_rgba(0,0,0,0.12),inset_-4px_-4px_10px_rgba(255,255,255,0.6)]">
                <Image src={blogImage(p, i)} alt="" fill className="object-cover" />
              </div>
              <div className="px-6 pb-6">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">{p.dateDisplay}</p>
                <h3 className="font-bold leading-snug">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <StaggeredText as="h2" className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10" text="Galeria" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {images.gallery.slice(0, 8).map((g, i) => (
            <div key={i} className={`${raised} p-2 rounded-2xl bg-neutral-200`}>
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-[inset_4px_4px_8px_rgba(0,0,0,0.12),inset_-4px_-4px_8px_rgba(255,255,255,0.6)]">
                <Image src={gImg(g.url, 600)} alt="" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 pb-24">
        <StaggeredText as="h2" className="justify-center text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-10" text="Pytanie? Mam odpowiedź." />
        <div className="space-y-5">
          {faq.map((f, i) => (
            <FaqItem
              key={i}
              className={`${raised} rounded-2xl bg-neutral-200`}
              question={
                <span className="flex items-start justify-between gap-6 p-6">
                  <span className="font-semibold pr-4">{f.q}</span>
                  <span className={`${sunken} w-9 h-9 rounded-xl bg-neutral-200 grid place-items-center text-lg transition leading-none group-data-[state=open]/faq:rotate-45`}>+</span>
                </span>
              }
              contentClassName="px-6 pb-6 text-neutral-600 leading-relaxed"
              answer={f.a}
            />
          ))}
        </div>
      </section>

      {/* CTA above footer */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className={`${raised} rounded-[2rem] bg-neutral-200 p-10 md:p-16 text-center`}>
          <p className={`${sunken} inline-flex px-4 py-2 rounded-full bg-neutral-200 text-xs uppercase tracking-widest text-neutral-500`}>Krok pierwszy</p>
          <StaggeredText as="h2" className="justify-center text-4xl md:text-6xl font-extrabold tracking-tight mt-6 leading-tight" text="Wystarczy jedna rozmowa." />
          <p className="mt-5 text-neutral-600 max-w-2xl mx-auto">30 minut, byś wiedział, na co realnie Cię stać i w którym banku jest dla Ciebie najlepiej.</p>
          <a href={company.contact.phoneTel} className={`${raised} mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-neutral-200 text-lg font-bold hover:translate-y-[2px] transition`}>{company.contact.phone} →</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="max-w-6xl mx-auto px-6 pb-10">
        <div className={`${raised} rounded-3xl bg-neutral-200 p-10 grid lg:grid-cols-12 gap-8`}>
          <div className="lg:col-span-4">
            <p className="font-bold">{company.shortName}</p>
            <p className="text-sm text-neutral-600 mt-2">{company.contact.address.full}</p>
            <p className="text-sm text-neutral-600">{company.contact.phone}</p>
          </div>
          <div className="lg:col-span-4 text-sm">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Godziny</p>
            <ul className="space-y-1">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between"><span>{d}</span><span className={h === "Zamknięte" ? "text-neutral-400" : ""}>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className={`${sunken} aspect-video rounded-2xl overflow-hidden`}>
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-neutral-500 mt-6">© {new Date().getFullYear()} {company.owner} · Wariant 6 — Neumorphism · <Link href="/" className="underline">all variants</Link></p>
      </footer>
    </main>
  );
}
