// lib/adaptation/engine.ts
// Adaptation engine — runs every 2 weeks to evaluate user progress and adjust plans.
// Uses simple condition rules, no AI required.
// TODO: Implement Supabase queries and plan mutation logic.

import type { AdaptationLog, AdaptationTrigger } from "@/types";

export interface AdaptationContext {
  userId: string;
  /** Weight entries for the last 2 weeks (kg), oldest first */
  recentWeights: number[];
  /** Task completion rate for the last 2 weeks (0–1) */
  taskCompletionRate: number;
}

/**
 * Evaluate the adaptation context and determine what change (if any) should be made.
 * Returns an AdaptationTrigger or null if no action is needed.
 */
export function evaluateAdaptation(
  ctx: AdaptationContext
): AdaptationTrigger | null {
  const { recentWeights, taskCompletionRate } = ctx;

  if (recentWeights.length < 2) return null;

  const startWeight = recentWeights[0];
  const endWeight = recentWeights[recentWeights.length - 1];
  const change = endWeight - startWeight;

  // No meaningful progress after 2 weeks
  if (Math.abs(change) < 0.5 && taskCompletionRate > 0.7) {
    return "no_progress";
  }

  // Rapid change (>2kg in 2 weeks — may indicate unhealthy pace)
  if (Math.abs(change) > 2) {
    return "rapid_change";
  }

  return null;
}

/**
 * Run the adaptation engine for a user.
 * This is the main entry point — called by the API route or a scheduled function.
 *
 * @param ctx - Adaptation context with user data
 * @returns AdaptationLog if an adaptation was applied, null otherwise
 */
export async function runAdaptationEngine(
  ctx: AdaptationContext
): Promise<AdaptationLog | null> {
  const trigger = evaluateAdaptation(ctx);

  if (!trigger) return null;

  // TODO: Apply changes to the user's workout/diet plan in Supabase
  // TODO: Send notification to the user

  const log: AdaptationLog = {
    id: crypto.randomUUID(),
    user_id: ctx.userId,
    triggered_at: new Date().toISOString(),
    trigger,
    changes_applied: `Triggered by: ${trigger}. Plan adjustments pending implementation.`,
    next_review_date: new Date(
      Date.now() + 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  };

  return log;
}
