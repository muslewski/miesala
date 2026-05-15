"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * HeroLines + HeroLine — premium entrance animation for hero H1s.
 *
 * Unlike Reveal/StaggeredText which trigger on scroll (whileInView),
 * these trigger on **mount** because hero text is above the fold and
 * the animation should feel like the page introducing itself.
 *
 * Usage:
 *   <HeroLines className="font-... text-7xl ...">
 *     <HeroLine>Kredyt hipoteczny</HeroLine>
 *     <HeroLine className="italic text-emerald-900">bez chaosu —</HeroLine>
 *     <HeroLine>tylko jasna ścieżka do własnego domu.</HeroLine>
 *   </HeroLines>
 *
 * Each HeroLine renders as a block <span> so you don't need <br/> — the
 * stagger handles the visual cascade. Inline styled spans inside a line
 * (gradients, colors, italics) are preserved by passing them as
 * children or via className.
 *
 * Honors prefers-reduced-motion via the MotionConfig provider.
 */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

interface HeroLinesProps {
  children: ReactNode;
  className?: string;
}

export function HeroLines({ children, className }: HeroLinesProps) {
  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.h1>
  );
}

interface HeroLineProps {
  children: ReactNode;
  className?: string;
}

export function HeroLine({ children, className }: HeroLineProps) {
  return (
    <motion.span
      className={cn("block", className)}
      variants={lineVariants}
    >
      {children}
    </motion.span>
  );
}
