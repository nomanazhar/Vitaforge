// lib/workout/generator.ts
// Workout plan generator — applies rules from rules.ts to select and return a plan.
// TODO: Replace stub with real template lookup and Supabase storage.

import type { UserProfile, WorkoutPlan } from "@/types";
import { WORKOUT_RULES } from "./rules";

/**
 * Generate a workout plan for the given user profile.
 * Uses the rule-based system in rules.ts — no AI required.
 *
 * @param profile - The user's profile including goal and activity level
 * @returns A WorkoutPlan object (currently a stub)
 */
export function generateWorkoutPlan(profile: UserProfile): WorkoutPlan {
  // Find the first matching rule
  const rule = WORKOUT_RULES.find(
    (r) =>
      r.goals.includes(profile.fitness_goal) &&
      r.activityLevels.includes(profile.activity_level)
  );

  if (!rule) {
    throw new Error("No matching workout rule found for this profile.");
  }

  // TODO: Load a real workout template from Supabase based on rule.difficulty
  // For now return a minimal stub plan
  return {
    id: crypto.randomUUID(),
    user_id: profile.user_id,
    name: rule.name,
    difficulty: rule.difficulty,
    duration_weeks: 4,
    days_per_week: rule.daysPerWeek,
    schedule: [], // TODO: Populate with actual workout days
    generated_at: new Date().toISOString(),
    active: true,
  };
}
