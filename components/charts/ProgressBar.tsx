// components/charts/ProgressBar.tsx
// Generic horizontal progress bar component.

"use client";

interface ProgressBarProps {
  value: number; // 0–100
  label?: string;
  color?: string;
}

export function ProgressBar({ value, label, color = "bg-indigo-500" }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className="w-full">
      {label && <p className="text-xs text-zinc-400 mb-1">{label}</p>}
      <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
