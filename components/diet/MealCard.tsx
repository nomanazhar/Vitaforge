// components/diet/MealCard.tsx
// Displays a single meal with name, time, and nutrition info.

"use client";

import type { Meal } from "@/types";

export function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex justify-between items-center">
        <p className="font-medium text-white capitalize">{meal.name}</p>
        <span className="text-xs text-zinc-400 capitalize">{meal.time}</span>
      </div>
      <p className="text-xs text-zinc-400 mt-1">{meal.description}</p>
      <p className="text-xs text-zinc-500 mt-1">
        {meal.nutrition.calories} kcal · P: {meal.nutrition.protein_g}g · C: {meal.nutrition.carbs_g}g · F: {meal.nutrition.fat_g}g
      </p>
    </div>
  );
}
