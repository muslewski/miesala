"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * MobileNav — hamburger button + slide-in overlay sheet.
 *
 * Drop into any header at md:hidden positioning. The desktop nav (hidden
 * md:flex) keeps working as-is on tablet+; this fills the gap on phones.
 *
 * The sheet portals to <body> so it doesn't interact with the sticky
 * header's stacking context. Backdrop click / Escape / link click all
 * close it. Body scroll locks while open.
 */

export interface MobileNavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  items: MobileNavItem[];
  phone: string;
  phoneTel: string;
  /** Optional brand mark shown at the top of the open sheet. */
  brand?: React.ReactNode;
  /** Affects sheet background + text. */
  tone?: "light" | "dark";
  /** Tailwind classes for the primary CTA button inside the sheet. */
  ctaClassName?: string;
  /** Tailwind classes for the hamburger trigger button. */
  triggerClassName?: string;
  /** Override sheet container classes for variant-specific theming. */
  sheetClassName?: string;
}

export function MobileNav({
  items,
  phone,
  phoneTel,
  brand,
  tone = "light",
  ctaClassName,
  triggerClassName,
  sheetClassName,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // createPortal needs the document to exist
  useEffect(() => setMounted(true), []);

  // body scroll lock + Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const dark = tone === "dark";

  const trigger = (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Otwórz menu"
      aria-expanded={open}
      className={cn(
        "md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-full",
        triggerClassName,
      )}
    >
      <Menu className="w-6 h-6" aria-hidden />
    </button>
  );

  const overlay =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav-portal"
            className="fixed inset-0 z-[100] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Zamknij menu"
              onClick={() => setOpen(false)}
              className={cn(
                "absolute inset-0 backdrop-blur-md cursor-default",
                dark ? "bg-zinc-950/80" : "bg-black/40",
              )}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Menu nawigacyjne"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "absolute inset-y-0 right-0 w-full max-w-sm flex flex-col p-6 pt-5 shadow-2xl",
                dark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900",
                sheetClassName,
              )}
            >
              <div className="flex items-center justify-between mb-10">
                <div className="text-xs uppercase tracking-[0.3em] opacity-60">
                  {brand ?? "Menu"}
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Zamknij menu"
                  className="w-11 h-11 inline-flex items-center justify-center -mr-2 rounded-full hover:opacity-60 transition"
                >
                  <X className="w-6 h-6" aria-hidden />
                </button>
              </div>

              <nav className="flex flex-col">
                {items.map((it, i) => (
                  <a
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-4 text-3xl font-semibold tracking-tight border-t border-current/10 hover:opacity-60 transition",
                      i === items.length - 1 && "border-b",
                    )}
                  >
                    {it.label}
                  </a>
                ))}
              </nav>

              <a
                href={phoneTel}
                onClick={() => setOpen(false)}
                className={cn(
                  "mt-auto inline-flex items-center justify-center gap-3 px-6 h-14 rounded-full font-semibold transition w-full text-base",
                  ctaClassName ??
                    (dark
                      ? "bg-white text-zinc-900 hover:bg-zinc-200"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"),
                )}
              >
                Zadzwoń · {phone}
              </a>
              <p className="mt-3 text-xs text-center opacity-60">
                Pon–Pt 09:00 – 19:00
              </p>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      {trigger}
      {overlay}
    </>
  );
}
