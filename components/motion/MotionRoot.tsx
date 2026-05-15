"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * MotionRoot — global Framer Motion defaults.
 *
 * - reducedMotion="user": honors the user's OS-level
 *   prefers-reduced-motion setting and skips all transitions when set.
 * - Default transition tuned for premium "ease-out expo-ish" feel
 *   used across reveal/stagger primitives.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionConfig>
  );
}
