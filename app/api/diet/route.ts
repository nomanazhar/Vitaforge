// app/api/diet/route.ts
// API route for diet plan generation and retrieval.
// Calls lib/diet/generator.ts — no business logic here.

import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { generateDietPlan } from "@/lib/diet/generator";
import type { UserProfile } from "@/types";

/** GET /api/diet — fetch the user's active diet plan */
export async function GET() {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("diet_plans")
    .select("*")
    .eq("user_id", user.id)
    .eq("active", true)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

/** POST /api/diet — generate a new diet plan for the user */
export async function POST(request: NextRequest) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const profile: UserProfile = await request.json();
  const plan = generateDietPlan(profile);

  // TODO: Save the generated plan to Supabase
  return NextResponse.json(plan, { status: 201 });
}
