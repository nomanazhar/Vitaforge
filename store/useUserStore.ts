// store/useUserStore.ts
// Zustand store for user profile and body stats.
// Loaded after authentication is confirmed.

import { create } from "zustand";
import type { UserProfile } from "@/types";

interface UserState {
  profile: UserProfile | null;
  isLoading: boolean;
  setProfile: (profile: UserProfile) => void;
  setLoading: (loading: boolean) => void;
  clearProfile: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  isLoading: false,
  setProfile: (profile) => set({ profile, isLoading: false }),
  setLoading: (isLoading) => set({ isLoading }),
  clearProfile: () => set({ profile: null }),
}));
