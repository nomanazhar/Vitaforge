// components/dashboard/ActivityFeed.tsx
// Recent activity feed for the dashboard (completed tasks, workouts, etc.).
// TODO: Populate from Supabase query.

"use client";

export function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-sm font-semibold text-zinc-300 mb-3">Recent Activity</h3>
      <p className="text-sm text-zinc-500">No recent activity yet.</p>
    </div>
  );
}
