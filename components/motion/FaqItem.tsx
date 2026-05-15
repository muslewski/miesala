"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * FaqItem — accessible expand/collapse with smooth height+opacity motion.
 *
 * Drop-in replacement for `<details>/<summary>` blocks. Pure props (no
 * render-prop / function children), so server components can render it
 * directly without hitting the "functions cannot be passed to client
 * components" boundary.
 *
 * Open-state styling on indicators is driven by Tailwind's
 * `group-data-[state=open]/faq:` modifier — the wrapper holds
 * `group/faq` + `data-state`, descendants react via CSS. Example:
 *
 *   <FaqItem
 *     className="..."
 *     question={
 *       <span className="flex items-start justify-between">
 *         <span>{f.q}</span>
 *         <span className="transition group-data-[state=open]/faq:rotate-45">+</span>
 *       </span>
 *     }
 *     contentClassName="px-5 pb-5 text-zinc-600 leading-relaxed"
 *     answer={f.a}
 *   />
 *
 * Honors prefers-reduced-motion via the MotionConfig from MotionRoot.
 */

interface FaqItemProps {
  className?: string;
  /** Question/trigger content shown always. */
  question: ReactNode;
  /** Answer content rendered inside the animated wrapper. */
  answer: ReactNode;
  /** className for the answer body wrapper (padding, text colors, etc) */
  contentClassName?: string;
  /** className for the toggle button itself (defaults to a full-width left-aligned trigger) */
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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.2, ease: "easeOut" },
            }}
            style={{ overflow: "hidden" }}
          >
            <div className={contentClassName}>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
