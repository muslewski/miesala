"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Lightbox — full-screen image preview modal with keyboard, swipe,
 * and click-outside controls.
 *
 * Behavior:
 *   - portal-mounted to document.body, z-200
 *   - body scroll locks while open
 *   - Esc closes, ←/→ navigate, swipe (drag-x ≥ 50px) navigates on touch
 *   - Click on backdrop closes; click on image / chrome doesn't propagate
 *   - Framer Motion handles backdrop fade + per-image scale-fade crossfade
 *
 * Pure-prop API so it can sit inside server-rendered sections via the
 * LightboxProvider client island. Image src is the *full-size* URL —
 * the gallery thumbnail uses a separate smaller URL.
 */

export interface LightboxItem {
  src: string;
  alt?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  /** Index of the currently open image, or null when closed */
  index: number | null;
  onClose: () => void;
  onIndexChange?: (next: number) => void;
}

export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isOpen = index !== null;
  const total = items.length;
  const current = index ?? 0;

  const goTo = useCallback(
    (next: number) => {
      const wrapped = ((next % total) + total) % total;
      onIndexChange?.(wrapped);
    },
    [total, onIndexChange],
  );
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Body scroll lock + keyboard nav while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, prev, next]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
        >
          {/* Counter — top-left */}
          <span className="absolute top-4 left-4 z-10 text-white/70 text-xs uppercase tracking-[0.3em] tabular-nums select-none">
            {current + 1} / {total}
          </span>

          {/* Close — top-right */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Zamknij podgląd"
            className="absolute top-3 right-3 z-10 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" aria-hidden />
          </button>

          {/* Prev */}
          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Poprzednie zdjęcie"
              className="absolute left-2 sm:left-4 z-10 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden />
            </button>
          )}

          {/* Next */}
          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Następne zdjęcie"
              className="absolute right-2 sm:right-4 z-10 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronRight className="w-6 h-6" aria-hidden />
            </button>
          )}

          {/* Image container — crossfade per current index. Outer
              positions; inner is the actual swipe-draggable image. */}
          <div
            className="relative w-[92vw] h-[78vh] sm:h-[82vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) next();
                  else if (info.offset.x > 50) prev();
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={items[current]?.src ?? ""}
                  alt={items[current]?.alt ?? ""}
                  fill
                  className="object-contain select-none pointer-events-none"
                  sizes="92vw"
                  priority
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Caption / instructions — bottom */}
          <div className="absolute bottom-4 inset-x-0 z-10 flex justify-center pointer-events-none">
            <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] select-none">
              Esc · ← → · swipe
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
