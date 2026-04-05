// components/diet/DietPlanView.tsx
// Overview of the user's diet plan — calorie target + list of meals.

"use client";

import type { DietPlan } from "@/types";
import { MealCard } from "./MealCard";
import { NutritionBar } from "./NutritionBar";

export function DietPlanView({ plan }: { plan: DietPlan }) {
  const totalNutrition = plan.meals.reduce(
    (acc, m) => ({
      protein_g: acc.protein_g + m.nutrition.protein_g,
      carbs_g: acc.carbs_g + m.nutrition.carbs_g,
      fat_g: acc.fat_g + m.nutrition.fat_g,
    }),
    { protein_g: 0, carbs_g: 0, fat_g: 0 }
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm text-zinc-400">Daily Target</p>
        <p className="text-3xl font-bold text-white mt-1">{plan.daily_calorie_target} <span className="text-base font-normal text-zinc-400">kcal</span></p>
        <div className="mt-3">
          <NutritionBar {...totalNutrition} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {plan.meals.map((meal) => <MealCard key={meal.id} meal={meal} />)}
        {plan.meals.length === 0 && (
          <p className="text-sm text-zinc-500">No meals defined yet.</p>
        )}
      </div>
    </div>
  );
}
