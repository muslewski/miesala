"use client";

import { useEffect, useState, type RefObject } from "react";

interface Options {
  /** IntersectionObserver `threshold`. Default `0` (any pixel visible). */
  threshold?: number;
  /**
   * IntersectionObserver `rootMargin`. Default `'0px 0px 200px 0px'` —
   * extends the viewport 200px below the fold so an animation resumes
   * just BEFORE it scrolls into view, hiding the wake-up cost.
   */
  rootMargin?: string;
  /**
   * If `true`, returns `true` once the element first enters the
   * viewport and never flips back. Useful for "play once" reveals.
   * Default `false` (continuous tracking — pause again on exit).
   */
  once?: boolean;
}

/**
 * IntersectionObserver-backed visibility flag for a referenced element.
 * Pattern ported from pol-med-v4.
 *
 * Pairs with the perf-mode strategy: looping animations (Marquee,
 * TextType) read this and pause when off-screen, freeing the browser.
 *
 *   const ref = useRef<HTMLDivElement>(null);
 *   const inView = useInViewport(ref);
 *   useFrame(() => { if (!inView) return; ... });
 *
 * Server-safe: returns `false` until mount, then IO kicks in. SSR'd
 * HTML still includes the DOM — only the animation loop pauses.
 *
 * Older browsers without IntersectionObserver fail open (returns
 * `true`) rather than freezing animations forever.
 */
export function useInViewport<T extends Element>(
  ref: RefObject<T | null>,
  options: Options = {},
): boolean {
  const { threshold = 0, rootMargin = "0px 0px 200px 0px", once = false } =
    options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, once]);

  return inView;
}
