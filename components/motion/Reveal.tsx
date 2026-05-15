"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Reveal — fades a block in from below when it enters the viewport.
 *
 * Animates once per page-load (whileInView + once:true). Honors
 * prefers-reduced-motion via MotionConfig defaults in MotionRoot.
 *
 * Default tag is <div>; pass `as` to render as h2/section/article/etc.
 * Built-in tags only (string), because that's all we need here.
 */

type Tag =
  | "div"
  | "section"
  | "article"
  | "figure"
  | "ul"
  | "ol"
  | "li"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "header"
  | "footer";

interface RevealProps {
  children: ReactNode;
  as?: Tag;
  className?: string;
  /** delay before the animation starts (s) */
  delay?: number;
  /** vertical translate distance in px */
  y?: number;
  /** animation duration in s */
  duration?: number;
  /** how much of the element must be in view before animating (0–1) */
  amount?: number;
  /** override style (e.g. for hero image positioning) */
  style?: React.CSSProperties;
  id?: string;
}

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  y,
  duration = 0.55,
  amount = 0.25,
  style,
  id,
}: RevealProps) {
  // dynamic motion component for the chosen tag
  const Cmp = (motion as unknown as Record<Tag, React.ElementType>)[as];

  // allow per-instance Y override
  const variants: Variants =
    y === undefined
      ? baseVariants
      : { hidden: { opacity: 0, y }, show: { opacity: 1, y: 0 } };

  return (
    <Cmp
      id={id}
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Cmp>
  );
}
