// lib/utils.ts
// General utility functions used across the app.

/**
 * Merge class names — lightweight replacement for clsx.
 * Accepts strings, undefined, null, false values (ignored), and plain objects
 * where truthy keys are included.
 */
export function cn(
  ...inputs: (string | undefined | null | false | Record<string, boolean>)[]
): string {
  return inputs
    .flatMap((i) => {
      if (!i) return [];
      if (typeof i === "string") return [i];
      return Object.entries(i)
        .filter(([, v]) => v)
        .map(([k]) => k);
    })
    .join(" ");
}

/** Format an ISO date string to a readable format (e.g. "Apr 5, 2026"). */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Calculate BMI from height (cm) and weight (kg). */
export function calculateBMI(height_cm: number, weight_kg: number): number {
  const h = height_cm / 100;
  return parseFloat((weight_kg / (h * h)).toFixed(1));
}
