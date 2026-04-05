// components/dashboard/StatsCard.tsx
// Displays a single stat (e.g. "Weight", "Workouts Done", "Calories").

"use client";

interface StatsCardProps {
  label: string;
  value: string | number;
  unit?: string;
  trend?: "up" | "down" | "neutral";
}

export function StatsCard({ label, value, unit, trend }: StatsCardProps) {
  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "–";
  const trendColor = trend === "up" ? "text-emerald-400" : trend === "down" ? "text-red-400" : "text-zinc-400";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-widest text-zinc-400">{label}</p>
      <p className="mt-1 text-3xl font-bold text-white">
        {value}
        {unit && <span className="ml-1 text-base font-normal text-zinc-400">{unit}</span>}
      </p>
      {trend && <p className={`mt-1 text-sm ${trendColor}`}>{trendIcon}</p>}
    </div>
  );
}
