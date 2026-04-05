// app/results/page.tsx
// Results & progress page — weight history, task completion rate, adaptation logs.
// TODO: Fetch real data from Supabase.

import { WeightChart } from "@/components/charts/WeightChart";
import { CalorieChart } from "@/components/charts/CalorieChart";
import { ProgressBar } from "@/components/charts/ProgressBar";

export const metadata = {
  title: "My Results · VitaForge",
  description: "Track your fitness progress, weight history, and goal completion.",
};

export default function ResultsPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">My Progress</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-base font-semibold text-zinc-300 mb-3">Weight</h2>
          <WeightChart />
        </div>
        <div>
          <h2 className="text-base font-semibold text-zinc-300 mb-3">Calories</h2>
          <CalorieChart />
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-base font-semibold text-zinc-300 mb-4">Goal Progress</h2>
        <div className="flex flex-col gap-4">
          <ProgressBar label="Workout Completion" value={0} />
          <ProgressBar label="Diet Adherence" value={0} color="bg-amber-400" />
          <ProgressBar label="Daily Tasks" value={0} color="bg-emerald-500" />
        </div>
      </div>
    </main>
  );
}
