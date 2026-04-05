// lib/workout/rules.ts
// Rule definitions for the workout recommendation system.
// Rules are evaluated by generator.ts to select an appropriate workout template.
// Business logic lives here — NOT in components.

import { FitnessGoal, ActivityLevel, WorkoutDifficulty } from "@/types";

export interface WorkoutRule {
  /** Human-readable rule name */
  name: string;
  /** Fitness goals this rule applies to */
  goals: FitnessGoal[];
  /** Activity levels this rule applies to */
  activityLevels: ActivityLevel[];
  /** The difficulty template to use */
  difficulty: WorkoutDifficulty;
  /** Days per week recommended */
  daysPerWeek: number;
}

/**
 * Rule table — evaluated top-to-bottom, first match wins.
 * Extend this array to add new recommendation rules.
 */
export const WORKOUT_RULES: WorkoutRule[] = [
  {
    name: "Beginner Weight Loss",
    goals: ["weight_loss"],
    activityLevels: ["sedentary", "lightly_active"],
    difficulty: "beginner",
    daysPerWeek: 3,
  },
  {
    name: "Intermediate Weight Loss",
    goals: ["weight_loss"],
    activityLevels: ["moderately_active", "very_active"],
    difficulty: "intermediate",
    daysPerWeek: 4,
  },
  {
    name: "Muscle Gain – Beginner",
    goals: ["muscle_gain"],
    activityLevels: ["sedentary", "lightly_active"],
    difficulty: "beginner",
    daysPerWeek: 3,
  },
  {
    name: "Muscle Gain – Intermediate",
    goals: ["muscle_gain"],
    activityLevels: ["moderately_active", "very_active", "extra_active"],
    difficulty: "intermediate",
    daysPerWeek: 5,
  },
  {
    name: "Maintenance",
    goals: ["maintenance"],
    activityLevels: ["sedentary", "lightly_active", "moderately_active"],
    difficulty: "beginner",
    daysPerWeek: 3,
  },
  {
    name: "Endurance",
    goals: ["endurance"],
    activityLevels: ["sedentary", "lightly_active", "moderately_active", "very_active", "extra_active"],
    difficulty: "intermediate",
    daysPerWeek: 4,
  },
  // Fallback
  {
    name: "General Fitness",
    goals: ["flexibility", "maintenance"],
    activityLevels: ["sedentary", "lightly_active", "moderately_active", "very_active", "extra_active"],
    difficulty: "beginner",
    daysPerWeek: 3,
  },
];
