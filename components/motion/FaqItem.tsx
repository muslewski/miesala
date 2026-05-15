"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * FaqItem — accessible expand/collapse, CSS-only animation.
 *
 * Was Framer-driven (animate height:0 → "auto"); switched to the
 * `grid-template-rows: 0fr → 1fr` CSS trick because:
 *
 *   1. JS height animation triggers layout reflow on every frame.
 *      With 8 items × multiple sections + concurrent CountUp / Reveal /
 *      backdrop-blur cards on the same page, the reflows stack up and
 *      the main thread stalls. Visible jank.
 *   2. The CSS trick is fully composited by the browser — no React
 *      reconciliation, no per-frame work in our code, no <motion.div>
 *      tree to mount/unmount per FAQ item.
 *   3. AnimatePresence on each item also adds a non-trivial mount cost
 *      multiplied across 72 items (9 examples × 8 questions).
 *
 * Browser support for grid-template-rows interpolation: Chrome 117+
 * (Sep 2023), Safari 17.4+ (Mar 2024), Firefox 119+ (Oct 2023). For
 * anything older the transition is silently skipped — the panel still
 * opens and closes instantly via the data-state attribute change.
 *
 * Pure-prop API (question / answer / className / contentClassName) —
 * works inside server components since no functions cross the
 * server→client boundary.
 *
 * Open-state styling on descendants (rotating + indicators, hover
 * shadows, open-bg fills) uses Tailwind's `group/faq` +
 * `group-data-[state=open]/faq:` modifier:
 *
 *   question={
 *     <span className="flex justify-between">
 *       <span>{f.q}</span>
 *       <span className="transition group-data-[state=open]/faq:rotate-45">+</span>
 *     </span>
 *   }
 *
 * `motion-reduce:transition-none` honors the OS-level "Reduce motion"
 * setting — the panel still opens/closes, just instantly.
 */

interface FaqItemProps {
  className?: string;
  /** Question/trigger content shown always. */
  question: ReactNode;
  /** Answer content rendered inside the animated wrapper. */
  answer: ReactNode;
  /** className for the answer body wrapper (padding, text colors). */
  contentClassName?: string;
  /** className for the toggle button itself (default: w-full text-left cursor-pointer). */
  triggerClassName?: string;
  defaultOpen?: boolean;
}

export function FaqItem({
  className,
  question,
  answer,
  contentClassName,
  triggerClassName,
  defaultOpen = false,
}: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const state = open ? "open" : "closed";

  return (
    <div
      className={cn("group/faq", className)}
      data-state={state}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        data-state={state}
        className={cn("w-full text-left cursor-pointer", triggerClassName)}
      >
        {question}
      </button>
      {/*
        Outer grid container — animates its single row track from 0fr
        to 1fr. Browser handles this natively in one composited pass.
       */}
      <div
        className={cn(
          "grid grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]",
          "transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "motion-reduce:transition-none",
        )}
        data-state={state}
      >
        {/* Middle layer — overflow:hidden so content is clipped while
            the row is shrinking; otherwise descendants leak out. */}
        <div className="overflow-hidden">
          <div className={contentClassName}>{answer}</div>
        </div>
      </div>
    </div>
  );
}
