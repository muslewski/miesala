import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Fraunces,
  Space_Grotesk,
  JetBrains_Mono,
  DM_Serif_Display,
  Cormorant_Garamond,
  Manrope,
  Plus_Jakarta_Sans,
  Bebas_Neue,
} from "next/font/google";
import { MotionRoot } from "@/components/motion/MotionRoot";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: "--font-playfair", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin", "latin-ext"], variable: "--font-fraunces", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-mono", display: "swap" });
const dmSerif = DM_Serif_Display({ subsets: ["latin", "latin-ext"], variable: "--font-dm-serif", weight: "400", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin", "latin-ext"], variable: "--font-cormorant", weight: ["300", "400", "500", "600", "700"], display: "swap" });
const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-jakarta", display: "swap" });
const bebas = Bebas_Neue({ subsets: ["latin", "latin-ext"], variable: "--font-bebas", weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: "Ekspert Finansowy Artur Miesała — 10 wariantów designu",
  description: "Galeria 10 propozycji strony głównej dla doradcy kredytowego.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cls = [
    inter.variable,
    playfair.variable,
    fraunces.variable,
    grotesk.variable,
    mono.variable,
    dmSerif.variable,
    cormorant.variable,
    manrope.variable,
    jakarta.variable,
    bebas.variable,
  ].join(" ");
  return (
    <html lang="pl" className={`${cls} antialiased`}>
      <body>
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
