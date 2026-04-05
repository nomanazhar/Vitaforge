// lib/diet/generator.ts
// Diet plan generator — uses rules from rules.ts and approximate TDEE calculation.
// TODO: Replace stub meals with real meal templates.

import type { UserProfile, DietPlan } from "@/types";
import { DIET_RULES } from "./rules";

/**
 * Estimate TDEE (Total Daily Energy Expenditure) using Mifflin-St Jeor equation.
 * Activity multipliers are approximate.
 */
function estimateTDEE(profile: UserProfile): number {
  const { weight_kg, height_cm, age, gender } = profile.body_stats;

  const bmr =
    gender === "female"
      ? 10 * weight_kg + 6.25 * height_cm - 5 * age - 161
      : 10 * weight_kg + 6.25 * height_cm - 5 * age + 5;

  const activityMultipliers: Record<string, number> = {
    sedentary: 1.2,
    lightly_active: 1.375,
    moderately_active: 1.55,
    very_active: 1.725,
    extra_active: 1.9,
  };

  return Math.round(bmr * (activityMultipliers[profile.activity_level] ?? 1.2));
}

/**
 * Generate a diet plan for the given user profile.
 *
 * @param profile - The user's profile
 * @returns A DietPlan stub (meals to be populated from templates)
 */
export function generateDietPlan(profile: UserProfile): DietPlan {
  const rule = DIET_RULES.find((r) => r.goals.includes(profile.fitness_goal));

  if (!rule) {
    throw new Error("No matching diet rule found for this profile.");
  }

  const tdee = estimateTDEE(profile);
  const dailyCalories = Math.max(1200, tdee + rule.calorieAdjustment);

  // TODO: Load real meal templates from Supabase based on dietType
  return {
    id: crypto.randomUUID(),
    user_id: profile.user_id,
    diet_type: rule.dietType,
    daily_calorie_target: dailyCalories,
    meals: [], // TODO: Populate from meal template library
    notes: `Based on estimated TDEE of ${tdee} kcal/day`,
    generated_at: new Date().toISOString(),
    active: true,
  };
}
