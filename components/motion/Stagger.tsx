"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Stagger — orchestrates a sequence of child entrance animations.
 *
 * Pair with <StaggerItem> for each child you want to animate. The
 * parent handles trigger + stagger timing; children describe their
 * own visual transition (fade + translate by default).
 */

const parentVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** seconds between each child's animation start */
  stagger?: number;
  /** how much of the parent must be visible before triggering */
  amount?: number;
  /** render parent as a particular tag (default div) */
  as?: "div" | "section" | "article" | "ul" | "ol";
  id?: string;
  style?: React.CSSProperties;
}

export function Stagger({
  children,
  className,
  stagger = 0.07,
  amount = 0.15,
  as = "div",
  id,
  style,
}: StaggerProps) {
  const Cmp = (motion as unknown as Record<string, React.ElementType>)[as];
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
  };
  return (
    <Cmp
      id={id}
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </Cmp>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?:
    | "div"
    | "article"
    | "figure"
    | "li"
    | "section"
    | "span"
    | "p";
  style?: React.CSSProperties;
  id?: string;
}

export function StaggerItem({
  children,
  className,
  as = "div",
  style,
  id,
}: StaggerItemProps) {
  const Cmp = (motion as unknown as Record<string, React.ElementType>)[as];
  // `will-change: transform` promotes each item to its own compositor
  // layer for the duration of the entrance. Without it, properties
  // that paint with the element (box-shadow, backdrop-filter,
  // border-radius rasterization on rotated parents) get repainted on
  // every Y-translate frame, producing visible shimmer/flicker — most
  // noticeable on cards with shadow-sm (ex-4 services). The layer is
  // discarded after the show variant settles.
  return (
    <Cmp
      id={id}
      className={className}
      style={{ willChange: "transform", ...style }}
      variants={itemVariants}
    >
      {children}
    </Cmp>
  );
}

// Re-export the parent variants in case someone wants to drive their
// own parent component (e.g. a `motion.section` that already has its
// own animation but wants to stagger children).
export { parentVariants };
