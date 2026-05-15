"use client";

import { useRef } from "react";
import { useInViewport } from "@/lib/hooks/use-in-viewport";
import { usePerfMode } from "@/lib/hooks/use-perf-mode";

/**
 * EditorialMarquee — the red horizontal scrolling band used on ex-8.
 *
 * Used to be inline JSX with a CSS `animation` driving the slide. Now
 * wrapped here so the animation pauses when the strip is off-screen
 * (saves continuous reflow work for users who scroll past) and skips
 * entirely on low-perf devices (CSS keyframes still tick even when
 * `prefers-reduced-motion: reduce` is set if the rule lacks the
 * fallback — usePerfMode is the broader gate).
 *
 * The keyframe + `.animate-marquee` class are defined in globals.css.
 */
export function EditorialMarquee({ words }: { words: string[] }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInViewport(ref, { rootMargin: "0px 0px 400px 0px" });
  const perf = usePerfMode();

  // Double the run so the loop appears seamless.
  const run = [...words, ...words];

  // Pause when off-screen or on low-perf devices. We keep the markup
  // rendered (no layout shift) but freeze the animation.
  const paused = !inView || perf === "low";

  return (
    <section
      ref={ref}
      aria-hidden
      className="border-b border-black overflow-hidden bg-red-600 text-white"
    >
      <div
        className="flex w-max animate-marquee whitespace-nowrap py-3"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {run.map((w, i) => (
          <span
            key={i}
            className="flex items-center px-6 text-sm uppercase tracking-[0.3em] font-bold"
          >
            {w}
            <span className="ml-6 text-white/60">+</span>
          </span>
        ))}
      </div>
    </section>
  );
}
