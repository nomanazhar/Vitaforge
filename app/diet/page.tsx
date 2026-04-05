// app/diet/page.tsx
// Diet plan page — displays the user's active diet plan.
// TODO: Load from Supabase, handle onboarding flow.

import { DietPlanView } from "@/components/diet/DietPlanView";
import type { DietPlan } from "@/types";

export const metadata = {
  title: "Diet Plan · VitaForge",
  description: "View your personalized daily diet plan and nutrition targets.",
};

// Stub plan for development
const STUB_DIET: DietPlan = {
  id: "stub",
  user_id: "stub-user",
  diet_type: "high_protein",
  daily_calorie_target: 2200,
  meals: [],
  notes: "Stub plan — replace with Supabase data",
  generated_at: new Date().toISOString(),
  active: true,
};

export default function DietPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">My Diet Plan</h1>
      <DietPlanView plan={STUB_DIET} />
    </main>
  );
}
