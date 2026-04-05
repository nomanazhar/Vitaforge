// components/camera/FeedbackPanel.tsx
// Displays real-time form feedback based on pose analysis.
// TODO: Wire up to angle calculations from lib/cv/angles.ts.

"use client";

interface FeedbackPanelProps {
  feedback: string | null;
  isReady: boolean;
}

export function FeedbackPanel({ feedback, isReady }: FeedbackPanelProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 min-h-[80px] flex items-center justify-center">
      {!isReady ? (
        <p className="text-sm text-zinc-500">Initializing pose detection…</p>
      ) : feedback ? (
        <p className="text-sm font-medium text-white">{feedback}</p>
      ) : (
        <p className="text-sm text-zinc-500">Perform an exercise to see feedback.</p>
      )}
    </div>
  );
}
