// types/workout.ts
// Defines types for exercises, workout templates, and generated plans.

export type MuscleGroup =
  | "chest"
  | "back"
  | "shoulders"
  | "arms"
  | "core"
  | "legs"
  | "glutes"
  | "full_body";

export type WorkoutDifficulty = "beginner" | "intermediate" | "advanced";

export interface Exercise {
  id: string;
  name: string;
  muscle_groups: MuscleGroup[];
  sets: number;
  reps: number | string; // e.g. 12 or "30s"
  rest_seconds: number;
  instructions?: string;
  video_url?: string;
}

export interface WorkoutDay {
  day: number; // 1-7
  label: string; // e.g. "Push Day", "Rest"
  exercises: Exercise[];
  is_rest_day: boolean;
}

export interface WorkoutPlan {
  id: string;
  user_id: string;
  name: string;
  difficulty: WorkoutDifficulty;
  duration_weeks: number;
  days_per_week: number;
  schedule: WorkoutDay[];
  generated_at: string;
  active: boolean;
}
