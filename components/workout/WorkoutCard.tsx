// components/workout/WorkoutCard.tsx
// Displays a summary of a workout plan or a single workout day.

"use client";

import type { WorkoutPlan } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface WorkoutCardProps {
  plan: WorkoutPlan;
}

export function WorkoutCard({ plan }: WorkoutCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-white">{plan.name}</h3>
        <Badge label={plan.difficulty} variant="info" />
      </div>
      <p className="text-sm text-zinc-400">
        {plan.days_per_week} days/week · {plan.duration_weeks} weeks
      </p>
    </div>
  );
}
