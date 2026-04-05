// lib/diet/rules.ts
// Rule definitions for the diet recommendation system.
// Simple calorie targets and diet type selection based on user goal and stats.

import { FitnessGoal, DietType } from "@/types";

export interface DietRule {
  name: string;
  goals: FitnessGoal[];
  dietType: DietType;
  /** Calorie adjustment relative to TDEE (e.g. -500 for deficit, +300 for surplus) */
  calorieAdjustment: number;
  proteinMultiplier: number; // grams per kg body weight
}

export const DIET_RULES: DietRule[] = [
  {
    name: "Weight Loss – Deficit",
    goals: ["weight_loss"],
    dietType: "standard",
    calorieAdjustment: -500,
    proteinMultiplier: 2.0,
  },
  {
    name: "Muscle Gain – Surplus",
    goals: ["muscle_gain"],
    dietType: "high_protein",
    calorieAdjustment: 300,
    proteinMultiplier: 2.2,
  },
  {
    name: "Maintenance",
    goals: ["maintenance"],
    dietType: "standard",
    calorieAdjustment: 0,
    proteinMultiplier: 1.6,
  },
  {
    name: "Endurance – Carb Focused",
    goals: ["endurance"],
    dietType: "standard",
    calorieAdjustment: 200,
    proteinMultiplier: 1.4,
  },
  {
    name: "Flexibility / General",
    goals: ["flexibility"],
    dietType: "standard",
    calorieAdjustment: 0,
    proteinMultiplier: 1.4,
  },
];
