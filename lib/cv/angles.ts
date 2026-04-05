// lib/cv/angles.ts
// Joint angle calculation utilities for pose detection feedback.
// All calculations run client-side — nothing is sent to the backend.

/**
 * A 2D or 3D landmark point from MediaPipe pose output.
 */
export interface Landmark {
  x: number;
  y: number;
  z?: number;
  visibility?: number;
}

/**
 * Calculate the angle (in degrees) at point B formed by points A-B-C.
 * Uses the dot product formula on 2D coordinates.
 *
 * @param a - First landmark (e.g. shoulder)
 * @param b - Vertex landmark (e.g. elbow)
 * @param c - Third landmark (e.g. wrist)
 * @returns Angle in degrees (0–180)
 */
export function calculateAngle(a: Landmark, b: Landmark, c: Landmark): number {
  const radians =
    Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
  let angle = Math.abs(radians * (180 / Math.PI));
  if (angle > 180) angle = 360 - angle;
  return parseFloat(angle.toFixed(1));
}

/**
 * Check whether a joint is at the correct angle within a tolerance range.
 *
 * @param angle - The calculated angle
 * @param target - The ideal target angle
 * @param tolerance - Acceptable deviation in degrees (default ±10°)
 */
export function isAngleCorrect(
  angle: number,
  target: number,
  tolerance = 10
): boolean {
  return Math.abs(angle - target) <= tolerance;
}
