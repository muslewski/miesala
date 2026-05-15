"use client";

import { useEffect, useState } from "react";

/**
 * Coarse perf classification for the current device + browser.
 * Pattern ported from pol-med-v4's usePerfMode.
 *
 * Two tiers — `'normal'` (default; full effects) and `'low'` (skip
 * GPU / RAF-heavy effects). Detection is one-time on mount and never
 * upgrades back to `'normal'` to avoid flicker if signals change
 * mid-session.
 *
 * `'low'` is set when ANY of the following is true:
 *
 *   1. `prefers-reduced-motion: reduce` — explicit user request.
 *   2. `Save-Data: on` (Network Information API) — user opted into
 *      data-saver mode.
 *   3. Network is `'slow-2g'` or `'2g'` — bandwidth-constrained.
 *   4. `navigator.deviceMemory < 4` (Chrome / Edge / Opera) — device
 *      has < 4 GiB of RAM, common on cheap mobiles + old laptops.
 *   5. `navigator.hardwareConcurrency < 4` — fewer than 4 logical
 *      cores. Catches mid-2010s laptops and budget mobiles.
 *   6. `Object.hasOwn` is missing — proxy for "browser older than
 *      Safari 15.4 / Chrome 93". Functional but slow on modern
 *      animations; degrades the fancy stuff gracefully.
 *
 * Use:
 *
 *   const perf = usePerfMode();
 *   if (perf === "low") return null;     // skip the canvas
 *   return <ExpensiveCanvas />;
 *
 * Core content (text, forms, navigation, images) renders identically
 * regardless of mode — only decorative animations are gated.
 */
export type PerfMode = "low" | "normal";

export function usePerfMode(): PerfMode {
  const [mode, setMode] = useState<PerfMode>("normal");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isLow = (() => {
      try {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return true;
      } catch {}

      try {
        // Network Information API — Chrome / Edge / Opera; missing on Safari/Firefox.
        const conn = (
          navigator as Navigator & {
            connection?: { saveData?: boolean; effectiveType?: string };
          }
        ).connection;
        if (conn?.saveData === true) return true;
        if (
          conn?.effectiveType &&
          ["slow-2g", "2g"].includes(conn.effectiveType)
        )
          return true;
      } catch {}

      try {
        const memory = (navigator as Navigator & { deviceMemory?: number })
          .deviceMemory;
        if (typeof memory === "number" && memory < 4) return true;
      } catch {}

      try {
        const cores = navigator.hardwareConcurrency;
        if (typeof cores === "number" && cores < 4) return true;
      } catch {}

      try {
        // Object.hasOwn shipped Chrome 93 / Safari 15.4 / Firefox 92.
        if (
          typeof (Object as unknown as { hasOwn?: unknown }).hasOwn !==
          "function"
        )
          return true;
      } catch {}

      return false;
    })();

    if (isLow) setMode("low");
  }, []);

  return mode;
}
