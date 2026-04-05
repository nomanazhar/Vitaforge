// hooks/useAuth.ts
// Hook to access auth state and provide sign-in/sign-out actions.
// Uses the browser Supabase client and syncs to the Zustand auth store.

"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuthStore } from "@/store/useAuthStore";

export function useAuth() {
  const { user, isLoading, setUser, clearUser, setLoading } = useAuthStore();
  const supabase = createClient();

  useEffect(() => {
    setLoading(true);

    // Get initial session
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser({ id: data.user.id, email: data.user.email ?? "" });
      } else {
        clearUser();
      }
    });

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({ id: session.user.id, email: session.user.email ?? "" });
      } else {
        clearUser();
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    clearUser();
  };

  return { user, isLoading, signOut };
}
