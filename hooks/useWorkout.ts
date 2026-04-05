// hooks/useWorkout.ts
// Hook to load and access the user's active workout plan.
// Reads from Supabase and populates the Zustand workout store.

"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useWorkoutStore } from "@/store/useWorkoutStore";
import { useAuthStore } from "@/store/useAuthStore";
import type { WorkoutPlan } from "@/types";

export function useWorkout() {
  const { activePlan, isLoading, setActivePlan, setLoading } = useWorkoutStore();
  const { user } = useAuthStore();
  const supabase = createClient();

  useEffect(() => {
    if (!user) return;

    setLoading(true);

    // TODO: Replace with actual Supabase query
    supabase
      .from("workout_plans")
      .select("*")
      .eq("user_id", user.id)
      .eq("active", true)
      .single()
      .then(({ data, error }) => {
        if (!error && data) {
          setActivePlan(data as WorkoutPlan);
        } else {
          setLoading(false);
        }
      });
  }, [user?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return { activePlan, isLoading };
}
