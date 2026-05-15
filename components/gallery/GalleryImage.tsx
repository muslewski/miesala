"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { useLightbox } from "./LightboxProvider";
import { cn } from "@/lib/utils";

/**
 * GalleryImage — a clickable thumbnail that opens the parent
 * LightboxProvider's preview modal.
 *
 * Renders as a <button> for keyboard + screen-reader support
 * (Enter / Space activates, focus ring on tab). Visually identical
 * to a styled <div> wrapper otherwise. Variant-specific styling
 * goes on `wrapperClassName` (sizing, borders, ring-1, aspect-…);
 * image-specific styling (grayscale, saturate, object-position)
 * goes on `className`.
 *
 * Overlay elements (FIG.NN chips, IMG.NN labels) are passed as
 * `children` so they render as siblings of the image — they still
 * sit above the image visually because their own `absolute`
 * positioning takes them out of normal flow.
 */

interface GalleryImageProps {
  /** Position in the parent LightboxProvider's items array */
  index: number;
  /** Thumbnail URL (smaller, fast to render in the grid) */
  src: string;
  alt?: string;
  /** className applied to the <Image> (filters, object-fit) */
  className?: string;
  /** className applied to the <button> wrapper (sizing, outer frame) */
  wrapperClassName?: string;
  /**
   * Optional inner frame — when set, the <Image> renders inside an
   * extra relative wrapper with this className. Used for variants
   * where the image sits inside a padded clip with a different
   * border-radius than the outer card (ex-5, ex-6, ex-10).
   */
  frameClassName?: string;
  sizes?: string;
  /** Overlay chips / labels rendered as siblings of the image */
  children?: ReactNode;
}

export function GalleryImage({
  index,
  src,
  alt = "",
  className,
  wrapperClassName,
  frameClassName,
  sizes,
  children,
}: GalleryImageProps) {
  const { open } = useLightbox();
  const imageEl = (
    <Image src={src} alt={alt} fill className={className} sizes={sizes} />
  );
  return (
    <button
      type="button"
      onClick={() => open(index)}
      aria-label={alt || `Powiększ zdjęcie ${index + 1}`}
      className={cn(
        "group/gallery relative block cursor-zoom-in",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        wrapperClassName,
      )}
    >
      {frameClassName ? (
        <div className={cn("relative w-full h-full", frameClassName)}>
          {imageEl}
        </div>
      ) : (
        imageEl
      )}
      {children}
    </button>
  );
}
