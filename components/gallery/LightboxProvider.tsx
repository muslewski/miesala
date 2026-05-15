"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { Lightbox, type LightboxItem } from "./Lightbox";

/**
 * LightboxProvider — wraps a gallery section, holds open-index state,
 * exposes `useLightbox().open(i)` to <GalleryImage> descendants, and
 * renders the actual <Lightbox> modal at the end.
 *
 *   <LightboxProvider items={[{ src: large1 }, { src: large2 }, …]}>
 *     <div className="grid …">
 *       <GalleryImage index={0} src={thumb1} … />
 *       <GalleryImage index={1} src={thumb2} … />
 *       …
 *     </div>
 *   </LightboxProvider>
 *
 * Thumbnail URLs (smaller, for fast grid render) and full-size URLs
 * (passed to LightboxProvider, used in the preview modal) can differ
 * — typical pattern is `gImg(url, 600)` for thumbs vs `gImg(url, 1600)`
 * for the preview.
 */

interface LightboxContextValue {
  open: (index: number) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error(
      "useLightbox() must be called inside a <LightboxProvider>.",
    );
  }
  return ctx;
}

interface LightboxProviderProps {
  items: LightboxItem[];
  children: ReactNode;
}

export function LightboxProvider({ items, children }: LightboxProviderProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => setOpenIndex(index), []);
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <Lightbox
        items={items}
        index={openIndex}
        onClose={close}
        onIndexChange={setOpenIndex}
      />
    </LightboxContext.Provider>
  );
}
