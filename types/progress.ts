// types/progress.ts
// Types for progress tracking and adaptation engine logs.

export interface ProgressEntry {
  id: string;
  user_id: string;
  date: string; // ISO date
  weight_kg?: number;
  body_fat_percentage?: number;
  notes?: string;
}

export type AdaptationTrigger =
  | "no_progress"
  | "rapid_change"
  | "goal_met"
  | "manual";

export interface AdaptationLog {
  id: string;
  user_id: string;
  triggered_at: string;
  trigger: AdaptationTrigger;
  changes_applied: string; // JSON or description of what changed
  next_review_date: string;
}
