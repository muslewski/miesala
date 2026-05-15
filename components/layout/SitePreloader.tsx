"use client";

/**
 * SitePreloader — first-visit brand preloader.
 *
 * Pattern adapted from liceum7bydgoszcz (which adapted it from fadok):
 *   - SessionStorage gate so it shows once per session per example,
 *     not on every page render or hot-reload.
 *   - `loading` flips from true → false after `holdMs`, which triggers
 *     the reactbits Preloader's exit animation.
 *   - Respects prefers-reduced-motion via the reactbits Preloader's
 *     own `respectReducedMotion` prop (defaults on here).
 *
 * Per-example, pass:
 *   - `variant` — which reactbits preloader animation to use
 *     ("slide" | "curtain" | "stairs" | "circle" | "percentage")
 *   - `bgColor` — background of the preloader panel
 *   - `loadingText` — brand/headline shown during load
 *   - `textClassName` — typography to match the variant's design tokens
 *   - `storageKey` — must be unique per example so each variant gets
 *     its own once-per-session gate (e.g., "miesala-pre-1")
 */

import Preloader from "@/components/react-bits/preloader";
import { usePerfMode } from "@/lib/hooks/use-perf-mode";
import { useEffect, useState } from "react";

const DEFAULT_HOLD_MS = 900;

type Variant = "stairs" | "percentage" | "circle" | "slide" | "curtain";

interface SitePreloaderProps {
  storageKey: string;
  variant?: Variant;
  bgColor?: string;
  loadingText?: string;
  textClassName?: string;
  /** Hold time after mount before exiting (ms) */
  holdMs?: number;
  /** Duration of the inner loading animation (ms) */
  duration?: number;
  stairCount?: number;
}

export function SitePreloader({
  storageKey,
  variant = "slide",
  bgColor,
  loadingText = "Ekspert Finansowy Artur Miesała",
  textClassName,
  holdMs = DEFAULT_HOLD_MS,
  duration = 1500,
  stairCount,
}: SitePreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(false);
  const perf = usePerfMode();

  useEffect(() => {
    if (typeof window === "undefined") return;
    let already = false;
    try {
      already = sessionStorage.getItem(storageKey) === "1";
    } catch {
      already = true;
    }
    if (already) {
      setSkip(true);
      setLoading(false);
      return;
    }
    const t = window.setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem(storageKey, "1");
      } catch {
        /* ignore quota / privacy mode */
      }
    }, holdMs);
    return () => window.clearTimeout(t);
  }, [storageKey, holdMs]);

  // Skip the entire preloader on low-perf devices. The reactbits
  // Preloader spins up a fairly heavy motion tree (stairs / percentage
  // variants animate many layers), so on slow networks / low-memory
  // phones it's worse than just rendering content immediately.
  if (skip || perf === "low") return null;

  return (
    <Preloader
      loading={loading}
      variant={variant}
      position="fixed"
      duration={duration}
      bgColor={bgColor}
      loadingText={loadingText}
      textClassName={textClassName}
      zIndex={70}
      respectReducedMotion
      reducedMotionFallback="fade"
      ariaLabel={loadingText}
      showProgressBar={false}
      {...(stairCount ? { stairCount } : {})}
    />
  );
}
