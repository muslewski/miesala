import Link from "next/link";
import { company } from "@/lib/content";

const variants = [
  { slug: "example-1",  name: "Editorial Minimal",     palette: "from-stone-50 to-stone-100",      accent: "bg-emerald-900",   note: "Serif + whitespace, prasowy spokój" },
  { slug: "example-2",  name: "Neo-Brutalism",          palette: "from-yellow-300 to-yellow-200",   accent: "bg-black",         note: "Czarno-żółta moc, grube krawędzie" },
  { slug: "example-3",  name: "Industrial",             palette: "from-zinc-900 to-zinc-800",       accent: "bg-orange-500",    note: "Stal, beton, safety orange, blueprint" },
  { slug: "example-4",  name: "Bento Grid",             palette: "from-zinc-50 to-zinc-100",        accent: "bg-indigo-600",    note: "Modułowe kafelki, dashboardowy rytm" },
  { slug: "example-5",  name: "Claymorphism Soft",      palette: "from-sky-100 to-rose-100",        accent: "bg-sky-500",       note: "Miękkie, 3D, pastele, przyjazne" },
  { slug: "example-6",  name: "Neumorphism Mono",       palette: "from-neutral-100 to-neutral-200", accent: "bg-neutral-700",   note: "Wytłaczane formy, jeden kolor" },
  { slug: "example-8",  name: "Swiss Modernist Grid",   palette: "from-white to-white",             accent: "bg-red-600",       note: "Siatka, liczby, ascetyzm" },
  { slug: "example-9",  name: "Trust Banking Blue",     palette: "from-blue-50 to-white",           accent: "bg-blue-700",      note: "Profesjonalna bankowość SaaS" },
  { slug: "example-10", name: "Warm Organic",           palette: "from-orange-50 to-rose-50",       accent: "bg-orange-700",    note: "Ciepły, ludzki, miękkie krzywe" },
];

export default function Index() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Galeria propozycji designu</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black tracking-tight mt-3">
          9 wariantów strony głównej
        </h1>
        <p className="mt-5 max-w-2xl text-stone-600 text-lg">
          {company.shortName} — 9 różnych kierunków stylistycznych dla tej samej zawartości.
          Kliknij wariant, by zobaczyć pełną stronę.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {variants.map((v, i) => (
          <Link
            key={v.slug}
            href={`/${v.slug}` as never}
            className="group relative rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className={`relative h-44 bg-gradient-to-br ${v.palette} overflow-hidden`}>
              <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-stone-500">
                #{String(i + 1).padStart(2, "0")}
              </span>
              <span className={`absolute bottom-4 right-4 w-12 h-12 rounded-full ${v.accent} shadow-lg`} />
            </div>
            <div className="p-6">
              <h2 className="font-semibold text-xl">{v.name}</h2>
              <p className="text-sm text-stone-500 mt-1">{v.note}</p>
              <p className="text-xs text-stone-400 mt-4 font-mono">/{v.slug}</p>
            </div>
          </Link>
        ))}
      </section>

      <footer className="max-w-6xl mx-auto px-6 pb-10 text-xs text-stone-400">
        Treść: scraped z ekspert-finansowy-artur.localo.site · Zdjęcia stockowe: Pixabay
      </footer>
    </main>
  );
}
