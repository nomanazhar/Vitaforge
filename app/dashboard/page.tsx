// app/dashboard/page.tsx
// User dashboard — accessible after login.
// Shows the user's stats, active plans, tasks, and recent activity.
// Protected route: middleware redirects unauthenticated users to /login.

import { StatsCard } from "@/components/dashboard/StatsCard";
import { ProgressChart } from "@/components/dashboard/ProgressChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

export const metadata = {
  title: "Dashboard · VitaForge",
  description: "Your personal fitness dashboard — track progress, tasks, and more.",
};

export default function DashboardPage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <StatsCard label="Current Weight" value="—" unit="kg" />
        <StatsCard label="Workouts Done" value="—" />
        <StatsCard label="Tasks Today" value="—" />
        <StatsCard label="Streak" value="—" unit="days" />
      </div>

      {/* Progress Chart */}
      <div className="mb-6">
        <ProgressChart />
      </div>

      {/* Activity Feed */}
      <ActivityFeed />
    </main>
  );
}
