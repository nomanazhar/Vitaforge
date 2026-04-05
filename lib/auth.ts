// lib/auth.ts
// Auth helper functions for use in Server Components and Route Handlers.
// All auth logic stays here — never inside components.

import { createClient } from "@/lib/supabase/server";

/** Get the current user session (server-side). Returns null if not authenticated. */
export async function getSession() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getSession();
  if (error) return null;
  return data.session;
}

/** Get the authenticated user (server-side). Returns null if not authenticated. */
export async function getUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user;
}
