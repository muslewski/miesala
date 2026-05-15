"use client";

import TextType from "@/components/react-bits/TextType";
import { usePerfMode } from "@/lib/hooks/use-perf-mode";

interface SmartTextTypeProps {
  as?: string;
  text: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorCharacter?: string;
  cursorClassName?: string;
  className?: string;
}

/**
 * SmartTextType — perf-aware wrapper around the reactbits TextType.
 *
 * On low-perf devices (slow network, < 4 GiB RAM, < 4 cores, or
 * prefers-reduced-motion: reduce), we render only the first phrase
 * statically and skip the looping typewriter cycle entirely. The
 * page still reads correctly — only the decoration goes away.
 *
 * On normal devices, behaves identically to the underlying TextType.
 */
export function SmartTextType({
  text,
  as = "span",
  ...rest
}: SmartTextTypeProps) {
  const perf = usePerfMode();

  if (perf === "low") {
    // Static fallback: render the first phrase as plain text via the
    // requested element. No cursor, no looping cycle.
    const Tag = as as keyof React.JSX.IntrinsicElements;
    return <Tag className={rest.className}>{text[0]}</Tag>;
  }

  return <TextType as={as} text={text} {...rest} />;
}
