// lib/supabase/client.ts
// Browser-side Supabase client — use this in client components and hooks.
// Uses @supabase/ssr for cookie-based auth handling.

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
