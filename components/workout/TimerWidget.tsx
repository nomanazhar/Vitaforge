// components/workout/TimerWidget.tsx
// Rest timer widget for in-workout sessions.
// TODO: Implement countdown logic with start/stop/reset.

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function TimerWidget({ restSeconds = 60 }: { restSeconds?: number }) {
  const [remaining, setRemaining] = useState(restSeconds);
  const [running, setRunning] = useState(false);

  // TODO: Implement useInterval countdown
  void running; void setRemaining; // suppress unused warning until implemented

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-4xl font-bold tabular-nums text-white">
        {String(Math.floor(remaining / 60)).padStart(2, "0")}:
        {String(remaining % 60).padStart(2, "0")}
      </p>
      <div className="flex gap-2">
        <Button size="sm" onClick={() => setRunning((r) => !r)}>
          {running ? "Pause" : "Start"}
        </Button>
        <Button size="sm" variant="ghost" onClick={() => { setRunning(false); setRemaining(restSeconds); }}>
          Reset
        </Button>
      </div>
    </div>
  );
}
