// types/diet.ts
// Types for diet plans, meals, and approximate nutrition data.

export type DietType =
  | "standard"
  | "vegetarian"
  | "vegan"
  | "keto"
  | "high_protein";

export interface NutritionInfo {
  calories: number;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
}

export interface Meal {
  id: string;
  name: string;
  time: "breakfast" | "lunch" | "dinner" | "snack";
  description: string;
  nutrition: NutritionInfo;
  is_optional?: boolean;
}

export interface DietPlan {
  id: string;
  user_id: string;
  diet_type: DietType;
  daily_calorie_target: number;
  meals: Meal[];
  notes?: string;
  generated_at: string;
  active: boolean;
}
