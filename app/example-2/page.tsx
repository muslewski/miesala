import Image from "next/image";
import Link from "next/link";
import { company, reviews, blogIndex, pixabay, services, faq, stats, images, gImg, blogImage, pick } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

/* Variant 2 — Neo-Brutalism
 * Czarno-żółty, grube krawędzie, offset shadows, all-caps, Space Grotesk + JetBrains Mono.
 */

const hero = pick(pixabay.house_keys, 0);
const top3Reviews = reviews.reviews.slice(3, 6);
const top3Posts = blogIndex.slice(0, 3);

const card = "border-[3px] border-black bg-white shadow-[8px_8px_0_0_#000]";
const cardYellow = "border-[3px] border-black bg-yellow-300 shadow-[8px_8px_0_0_#000]";

export default function Page() {
  return (
    <main className="min-h-screen bg-yellow-300 text-black font-[family-name:var(--font-grotesk)] selection:bg-black selection:text-yellow-300">
      <header className="border-b-[3px] border-black bg-yellow-300 sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-[family-name:var(--font-mono)] text-sm">
          <Link href="/" className="font-bold tracking-tight uppercase">[ MIESAŁA / EKSPERT ]</Link>
          <div className="hidden md:flex items-center gap-6 uppercase">
            <a href="#oferta">Oferta_</a><a href="#opinie">Opinie_</a><a href="#blog">Blog_</a><a href="#faq">FAQ_</a>
          </div>
          <a href={company.contact.phoneTel} className="bg-black text-yellow-300 px-3 py-1.5 font-bold uppercase">→ {company.contact.phone}</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="border-b-[3px] border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest mb-6 inline-block bg-black text-yellow-300 px-3 py-1.5">★ 4.8/5 · 44 OPINII</p>
            <h1 className="font-black uppercase leading-[0.85] tracking-tighter text-[15vw] md:text-[10vw] lg:text-[9vw]">
              Kredyt.<br/>
              <span className="block bg-black text-yellow-300 px-3 -ml-1 inline-block">Hipoteczny.</span><br/>
              <span className="italic underline decoration-[6px] underline-offset-[10px] decoration-black">Bez ściemy.</span>
            </h1>
            <div className="mt-10 flex flex-wrap gap-5">
              <a href={company.contact.phoneTel} className="bg-black text-yellow-300 px-7 py-4 text-xl font-bold uppercase border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,0)] hover:shadow-[8px_8px_0_0_#ffffff] transition-all hover:-translate-y-1">
                Zadzwoń teraz →
              </a>
              <a href="#oferta" className="bg-yellow-300 px-7 py-4 text-xl font-bold uppercase border-[3px] border-black shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] transition-all">
                Sprawdź ofertę
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className={`${card} relative aspect-[4/3] overflow-hidden`}>
              <Image src={hero.largeImageURL} alt="" fill className="object-cover" unoptimized />
              <span className="absolute top-3 left-3 bg-yellow-300 px-2 py-1 font-[family-name:var(--font-mono)] text-xs border-2 border-black uppercase">// klucze</span>
            </div>
            <div className={`${cardYellow} p-5 font-[family-name:var(--font-mono)] text-sm`}>
              <p className="uppercase mb-2 font-bold">/* misja */</p>
              <p>Pomagam zwykłym ludziom dostać kredyt na własny dom. Bez kosztów po Twojej stronie. Bez bankowego bełkotu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b-[3px] border-black bg-black text-yellow-300">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 divide-x-[3px] divide-yellow-300/20">
          {stats.map((s) => (
            <div key={s.label} className="px-6">
              <p className="font-black text-5xl md:text-6xl tracking-tighter">{s.value}</p>
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="oferta" className="border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
            <Reveal as="h2" className="font-black uppercase tracking-tighter text-5xl md:text-7xl">Co ▼ Robię</Reveal>
            <p className="font-[family-name:var(--font-mono)] uppercase text-xs">/* services.length === {services.length} */</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <article key={s.slug} className={`${card} p-7 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] transition`}>
                <p className="font-[family-name:var(--font-mono)] text-xs mb-3">{`0${i + 1}`.padStart(2, "0")} /</p>
                <h3 className="font-black uppercase text-2xl tracking-tight mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed">{s.long}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="opinie" className="border-b-[3px] border-black bg-yellow-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Reveal as="h2" className="font-black uppercase tracking-tighter text-5xl md:text-7xl mb-12">Co mówią klienci</Reveal>
          <div className="grid md:grid-cols-3 gap-7">
            {top3Reviews.map((r, i) => (
              <figure key={i} className={`${card} p-7`}>
                <p className="text-2xl mb-3">★★★★★</p>
                <blockquote className="text-lg leading-snug">&ldquo;{r.text.length > 200 ? r.text.slice(0, 200) + "…" : r.text}&rdquo;</blockquote>
                <figcaption className="font-[family-name:var(--font-mono)] text-xs uppercase mt-5">— {r.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Reveal as="h2" className="font-black uppercase tracking-tighter text-5xl md:text-7xl mb-12">Notatki ekspresowe</Reveal>
          <div className="grid md:grid-cols-3 gap-7">
            {top3Posts.map((p, i) => (
              <article key={p.slug} className={`${card} overflow-hidden`}>
                <div className="aspect-[4/3] relative border-b-[3px] border-black bg-yellow-300">
                  <Image src={blogImage(p, i)} alt="" fill className="object-cover" unoptimized />
                </div>
                <div className="p-6">
                  <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase mb-2">{p.dateDisplay}</p>
                  <h3 className="font-bold leading-tight uppercase">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b-[3px] border-black bg-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Reveal as="h2" className="font-black uppercase tracking-tighter text-5xl md:text-7xl mb-12 text-yellow-300">[ Galeria ]</Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {images.gallery.slice(0, 8).map((g, i) => (
              <div key={i} className="border-[3px] border-yellow-300 aspect-square relative overflow-hidden hover:-translate-y-1 transition">
                <Image src={gImg(g.url, 600)} alt="" fill className="object-cover" sizes="25vw" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b-[3px] border-black">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Reveal as="h2" className="font-black uppercase tracking-tighter text-5xl md:text-7xl mb-12">FAQ.</Reveal>
          <div className="space-y-4">
            {faq.map((f, i) => (
              <details key={i} className={`${card} group p-0 open:bg-yellow-300`}>
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none p-5 font-bold uppercase tracking-tight">
                  <span className="flex items-baseline gap-3">
                    <span className="font-[family-name:var(--font-mono)] text-xs">{`${i + 1}`.padStart(2, "0")}_</span>
                    {f.q}
                  </span>
                  <span className="text-3xl transition group-open:rotate-45 leading-none">+</span>
                </summary>
                <p className="p-5 pt-0 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section className="border-b-[3px] border-black bg-black text-yellow-300">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <Reveal as="h2" className="font-black uppercase tracking-tighter text-5xl md:text-8xl leading-none">
            Kup dom.<br/><span className="italic">Nie stres.</span>
          </Reveal>
          <a href={company.contact.phoneTel} className="mt-12 inline-block bg-yellow-300 text-black px-10 py-5 text-2xl font-black uppercase border-[3px] border-yellow-300 shadow-[12px_12px_0_0_#fff] hover:shadow-[6px_6px_0_0_#fff] hover:translate-x-1 hover:translate-y-1 transition">
            Dzwoń → {company.contact.phone}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-yellow-300 text-black">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <p className="font-black uppercase text-2xl tracking-tight">[ MIESAŁA / EKSPERT ]</p>
            <p className="mt-3 text-sm">{company.contact.address.full}</p>
            <p className="font-[family-name:var(--font-mono)] text-sm mt-1">{company.contact.phone}</p>
          </div>
          <div className="lg:col-span-4 font-[family-name:var(--font-mono)] text-sm">
            <p className="uppercase font-bold mb-2">// godziny</p>
            <ul className="space-y-1">
              {Object.entries(company.hours.displayPL).map(([d, h]) => (
                <li key={d} className="flex justify-between"><span>{d}</span><span>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className={`${card} aspect-video overflow-hidden`}>
              <iframe src={company.contact.googleMaps.embed} className="w-full h-full" loading="lazy" title="Mapa" />
            </div>
          </div>
        </div>
        <div className="border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-6 py-5 text-xs font-[family-name:var(--font-mono)] uppercase flex flex-wrap justify-between gap-3">
            <p>© {new Date().getFullYear()} {company.owner} / Wariant 2 — Brutalism</p>
            <Link href="/" className="underline">← All variants</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
