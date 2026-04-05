// components/workout/ExerciseList.tsx
// Renders a list of exercises for a workout day.

"use client";

import type { Exercise } from "@/types";

interface ExerciseListProps {
  exercises: Exercise[];
}

export function ExerciseList({ exercises }: ExerciseListProps) {
  if (!exercises.length) {
    return <p className="text-sm text-zinc-500">No exercises for this day.</p>;
  }

  return (
    <ul className="flex flex-col gap-3">
      {exercises.map((ex) => (
        <li key={ex.id} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="font-medium text-white">{ex.name}</p>
          <p className="text-xs text-zinc-400">
            {ex.sets} sets × {ex.reps} · Rest: {ex.rest_seconds}s
          </p>
        </li>
      ))}
    </ul>
  );
}
