// types/task.ts
// Types for daily tasks and tracking status.

export type TaskStatus = "pending" | "completed" | "skipped";

export type TaskCategory =
  | "workout"
  | "diet"
  | "hydration"
  | "sleep"
  | "measurement"
  | "other";

export interface DailyTask {
  id: string;
  user_id: string;
  date: string; // ISO date string YYYY-MM-DD
  title: string;
  description?: string;
  category: TaskCategory;
  status: TaskStatus;
  completed_at?: string;
}

export interface TaskSummary {
  date: string;
  total: number;
  completed: number;
  skipped: number;
  completion_rate: number; // 0–1
}
