import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names + dedupe Tailwind utilities.
 * Standard shadcn helper; many registry components import it via `@/lib/utils`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
