// components/tasks/TaskItem.tsx
// Single task row with status toggle.
"use client";

import type { DailyTask } from "@/types";
import { TaskCheckbox } from "./TaskCheckbox";
import { Badge } from "@/components/ui/Badge";

interface TaskItemProps {
  task: DailyTask;
  onStatusChange?: (id: string, status: "completed" | "skipped") => void;
}

export function TaskItem({ task, onStatusChange }: TaskItemProps) {
  const isCompleted = task.status === "completed";

  return (
    <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <TaskCheckbox
        checked={isCompleted}
        onChange={() => onStatusChange?.(task.id, isCompleted ? "skipped" : "completed")}
      />
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${isCompleted ? "line-through text-zinc-500" : "text-white"}`}>
          {task.title}
        </p>
        {task.description && (
          <p className="text-xs text-zinc-500 truncate">{task.description}</p>
        )}
      </div>
      <Badge label={task.category} />
    </li>
  );
}
