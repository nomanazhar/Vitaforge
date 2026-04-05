// app/workout/page.tsx
// Workout plan page — displays the user's active workout plan.
// TODO: Load plan from Supabase, handle loading/empty states.

import { WorkoutCard } from "@/components/workout/WorkoutCard";
import { ExerciseList } from "@/components/workout/ExerciseList";
import type { WorkoutPlan } from "@/types";

export const metadata = {
  title: "Workout Plan · VitaForge",
  description: "View your personalized workout plan and track your exercises.",
};

// Stub plan for development — replace with Supabase fetch
const STUB_PLAN: WorkoutPlan = {
  id: "stub",
  user_id: "stub-user",
  name: "Intermediate Muscle Gain",
  difficulty: "intermediate",
  duration_weeks: 4,
  days_per_week: 5,
  schedule: [],
  generated_at: new Date().toISOString(),
  active: true,
};

export default function WorkoutPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">My Workout Plan</h1>
      <WorkoutCard plan={STUB_PLAN} />
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-white mb-3">Today&apos;s Exercises</h2>
        <ExerciseList exercises={[]} />
      </div>
    </main>
  );
}
