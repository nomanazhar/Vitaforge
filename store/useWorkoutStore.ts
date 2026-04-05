// store/useWorkoutStore.ts
// Zustand store for the user's active workout plan and session state.

import { create } from "zustand";
import type { WorkoutPlan } from "@/types";

interface WorkoutState {
  activePlan: WorkoutPlan | null;
  isLoading: boolean;
  setActivePlan: (plan: WorkoutPlan) => void;
  setLoading: (loading: boolean) => void;
  clearPlan: () => void;
}

export const useWorkoutStore = create<WorkoutState>((set) => ({
  activePlan: null,
  isLoading: false,
  setActivePlan: (activePlan) => set({ activePlan, isLoading: false }),
  setLoading: (isLoading) => set({ isLoading }),
  clearPlan: () => set({ activePlan: null }),
}));
