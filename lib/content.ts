import companyJson from "@/content/company.json";
import homepageJson from "@/content/homepage.json";
import reviewsJson from "@/content/reviews.json";
import imagesJson from "@/content/images.json";
import blogIndexJson from "@/content/blog/index.json";
import pixabayJson from "@/content/pixabay.json";

export const company = companyJson;
export const homepage = homepageJson;
export const reviews = reviewsJson;
export const images = imagesJson;
export const blogIndex = blogIndexJson;
export const pixabay = pixabayJson as Record<string, PixabayImage[]>;

export type PixabayImage = {
  id: number;
  tags: string;
  previewURL: string;
  webformatURL: string;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  pageURL: string;
  user: string;
};

export function pick<T>(arr: T[], i: number): T {
  return arr[((i % arr.length) + arr.length) % arr.length];
}

/** Resize a scraped Google `lh3.googleusercontent.com` URL via the `=sN` suffix. */
export function gImg(url: string, size: number): string {
  if (!url) return url;
  if (url.includes("=s")) return url.replace(/=s\d+$/, `=s${size}`);
  return url.endsWith("=s0") ? url.replace("=s0", `=s${size}`) : `${url}=s${size}`;
}

/** Fallback stock images used when a blog post lacks a thumbnail. */
const blogFallbackCategories = [
  "modern_house", "calculator_money", "documents_desk",
  "city_building", "real_estate", "interior_modern",
] as const;

/**
 * Return an image URL for a blog post, resized for ~800px width.
 * Falls back to a stable Pixabay stock image when the post itself has no image.
 */
export function blogImage(
  post: { image?: string | null; slug: string },
  idx: number,
  size: number = 800,
): string {
  if (post.image) return gImg(post.image, size);
  const cat = blogFallbackCategories[idx % blogFallbackCategories.length];
  const pool = pixabay[cat] ?? [];
  const pick = pool[idx % Math.max(pool.length, 1)] ?? pool[0];
  return pick?.largeImageURL ?? "";
}

/** Services derived from the blog topics & company offer */
export const services = [
  {
    slug: "kredyt-hipoteczny",
    title: "Kredyt hipoteczny",
    short: "Kompleksowe pośrednictwo: od zdolności po podpisanie umowy.",
    long: "Pomogę dobrać najlepszą ofertę spośród kilkunastu banków, przygotuję dokumenty i poprowadzę Cię przez cały proces — bez stresu i bez kosztów po Twojej stronie.",
    icon: "home",
  },
  {
    slug: "kredyt-na-start",
    title: "Kredyt na Start / programy rządowe",
    short: "Bezpieczny Kredyt 2%, Kredyt na Start 2024 i kolejne programy dopłat.",
    long: "Wyjaśnię warunki, sprawdzę kwalifikację dla singli, par i rodzin, doliczę dopłaty i zaplanuję wniosek tak, by maksymalnie wykorzystać wsparcie państwa.",
    icon: "sparkles",
  },
  {
    slug: "konsolidacja",
    title: "Konsolidacja zobowiązań",
    short: "Jedna niższa rata zamiast kilku — często ze zwrotem prowizji.",
    long: "Połącz raty kart, pożyczek i kredytów w jedno zobowiązanie z niższym oprocentowaniem. Przeanalizuję Twój budżet i wybiorę ofertę, która faktycznie odciąża domowe finanse.",
    icon: "arrows",
  },
  {
    slug: "refinansowanie",
    title: "Refinansowanie i negocjacja warunków",
    short: "Spadek WIBOR-u to dobry moment, by zoptymalizować ratę.",
    long: "Sprawdzę, czy Twój obecny kredyt nadal jest konkurencyjny. Wynegocjuję marżę, przeanalizuję wcześniejszą spłatę lub przeniesienie kredytu do innego banku.",
    icon: "chart",
  },
  {
    slug: "doradztwo",
    title: "Doradztwo finansowe",
    short: "Indywidualne plany finansowania zakupu, budowy lub remontu.",
    long: "Niezależny doradca po Twojej stronie — pomogę zaplanować budżet inwestycji, dobrać okres kredytowania i bezpieczny wkład własny dopasowany do Twojej sytuacji.",
    icon: "compass",
  },
  {
    slug: "kredyt-gotowkowy",
    title: "Kredyt gotówkowy",
    short: "Szybkie finansowanie celów, których nie pokrywa kredyt hipoteczny.",
    long: "Wykończenie, meble, samochód, wakacje — pomogę dobrać kredyt gotówkowy z realnie niskim oprocentowaniem i bez ukrytych kosztów.",
    icon: "wallet",
  },
];

/** FAQ for the financial advisor — added to enrich UX */
export const faq = [
  {
    q: "Ile kosztuje Twoje doradztwo?",
    a: "Dla klienta indywidualnego — nic. Pracuję na prowizji wypłacanej przez bank po uruchomieniu kredytu. Konsultacje, kalkulacje i porównanie ofert są zawsze bezpłatne.",
  },
  {
    q: "Ile trwa cały proces uzyskania kredytu hipotecznego?",
    a: "Od pierwszego spotkania do decyzji kredytowej zwykle 2–6 tygodni. Po skompletowaniu dokumentów banki mają ustawowo 21 dni roboczych na wydanie decyzji.",
  },
  {
    q: "Z jakimi bankami współpracujesz?",
    a: "Współpracuję z kilkunastoma bankami w Polsce — m.in. PKO BP, Pekao, mBank, Millennium, Santander, ING, Alior, BNP Paribas, Velo Bank. Dzięki temu zawsze porównujemy realne, aktualne oferty.",
  },
  {
    q: "Czy obsługujesz klientów spoza Osielska i Bydgoszczy?",
    a: "Tak. Bazuję w Osielsku koło Bydgoszczy, ale obsługuję klientów z całej Polski — dokumenty dopinamy zdalnie, a do banku jedziesz tylko raz, na podpisanie umowy.",
  },
  {
    q: "Jakie dokumenty będą potrzebne?",
    a: "Standardowo: dowód osobisty, dokumenty dochodowe (PIT, zaświadczenie od pracodawcy lub wyciągi bankowe), informacja o nieruchomości (umowa przedwstępna, KW, operat). Listę dopasuję do Twojej sytuacji na pierwszym spotkaniu.",
  },
  {
    q: "Czym jest WIBOR i jak wpływa na ratę?",
    a: "WIBOR to stawka, po jakiej banki pożyczają sobie pieniądze. Razem z marżą banku składa się na Twoje oprocentowanie. Gdy WIBOR rośnie — rata rośnie; gdy spada — rata maleje. Pomogę zdecydować między oprocentowaniem zmiennym a okresowo stałym.",
  },
  {
    q: "Czy mogę dostać kredyt prowadząc działalność gospodarczą?",
    a: "Tak. Każdy bank inaczej liczy dochód z JDG, ryczałtu, karty podatkowej i sp. z o.o. Pokażę Ci, które banki najlepiej rozumieją Twoją formę rozliczeń i jak udokumentować dochód.",
  },
  {
    q: "Czy pomożesz mi przy wyborze nieruchomości?",
    a: "Doradzę finansowo: powiem, jaką nieruchomość banki najchętniej finansują, kiedy potrzebny jest operat i co warto sprawdzić w księdze wieczystej, zanim wpłacisz zadatek.",
  },
];

/** Bank logos shown as a trust strip (text-only — no copyrighted imagery) */
export const trustBanks = [
  "PKO BP",
  "Pekao",
  "Santander",
  "mBank",
  "ING",
  "Millennium",
  "BNP Paribas",
  "Alior",
  "Velo Bank",
];

/** Headline stats — derived from rating + business attributes.
 * `value` stays for any plain-text uses; `to` + `suffix` drive <CountUp>.
 */
export const stats = [
  { value: "4.8/5", to: 4.8, suffix: "/5", label: "Średnia ocena Google" },
  { value: "44+",   to: 44,  suffix: "+",  label: "opinii klientów" },
  { value: "10+",   to: 10,  suffix: "+",  label: "lat doświadczenia" },
  { value: "15+",   to: 15,  suffix: "+",  label: "banków w portfelu" },
];
