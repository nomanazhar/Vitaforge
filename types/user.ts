// types/user.ts
// Defines all TypeScript types related to users, profiles, and body stats.

export type FitnessGoal =
  | "weight_loss"
  | "muscle_gain"
  | "maintenance"
  | "endurance"
  | "flexibility";

export type ActivityLevel =
  | "sedentary"
  | "lightly_active"
  | "moderately_active"
  | "very_active"
  | "extra_active";

export interface BodyStats {
  height_cm: number;
  weight_kg: number;
  age: number;
  gender: "male" | "female" | "other";
  body_fat_percentage?: number;
}

export interface UserProfile {
  id: string;
  user_id: string;
  display_name: string;
  avatar_url?: string;
  fitness_goal: FitnessGoal;
  activity_level: ActivityLevel;
  body_stats: BodyStats;
  onboarding_complete: boolean;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  profile?: UserProfile;
}
