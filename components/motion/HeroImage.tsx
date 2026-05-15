"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * HeroImage — next/image with a smooth load-fade. Pattern ported from
 * liceum7bydgoszcz.
 *
 * Why this exists
 * ───────────────
 * Wrap the hero photo in a `.animate-hero-zoom` div (defined in
 * globals.css). The wrapper fires a 2.2s scale+blur+desaturate decay
 * the moment React mounts, regardless of whether the image bytes have
 * arrived yet. Without this component, the empty wrapper animates
 * while the network is still downloading the JPEG/AVIF, then the
 * decoded image POPS into the wrapper mid-animation — visible flicker.
 *
 * The fix is to keep the underlying <img> at `opacity: 0` until
 * `onLoad` fires (or until React notices the browser already has it
 * cached), then transition to `opacity: 1` over 500ms. Combined with
 * the wrapper's transform/filter animation (which doesn't touch
 * opacity, so no conflict): the user sees a soft fade-in inside a
 * gracefully un-zooming frame.
 *
 * Cache edge case
 * ───────────────
 * If the browser already has the image cached (back-navigation,
 * `priority` preload completed before hydration, etc.), the
 * underlying <img> is `complete` by the time we mount and `onLoad`
 * never fires for us. The mount effect checks
 * `ref.current.complete && naturalWidth > 0` and skips straight to
 * loaded state — no stuck-invisible image.
 *
 * Reduced-motion
 * ──────────────
 * The 500ms opacity transition uses Tailwind's `motion-reduce:`
 * modifier to collapse the duration. The wrapper's hero-zoom keyframe
 * also has a `@media (prefers-reduced-motion: reduce)` rule in
 * globals.css that disables the animation entirely. So users with
 * Reduce Motion enabled see the image instantly without any fade or
 * zoom.
 */

interface HeroImageProps {
  src: string;
  alt: string;
  /** Tailwind classes applied to the underlying <img>. Compose
   *  filters/object-fit etc. on top of the load-fade transition. */
  className?: string;
  /** `next/image` `sizes` attribute — drives responsive srcset. */
  sizes?: string;
  /** When true, Next preloads via <link rel="preload"> and sets
   *  loading="eager". Use for above-the-fold heroes. */
  priority?: boolean;
  /** Inline style passthrough (object-position, etc). */
  style?: CSSProperties;
}

export function HeroImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  style,
}: HeroImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Cache / pre-hydration case — see file header for rationale.
    if (ref.current?.complete && ref.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onLoad={() => setLoaded(true)}
      className={cn(
        "transition-opacity duration-500 ease-out motion-reduce:transition-none",
        loaded ? "opacity-100" : "opacity-0",
        className,
      )}
      style={style}
    />
  );
}
