// components/tasks/TaskList.tsx
// Renders the full list of daily tasks grouped by category.

"use client";

import type { DailyTask } from "@/types";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: DailyTask[];
  onStatusChange?: (id: string, status: "completed" | "skipped") => void;
}

export function TaskList({ tasks, onStatusChange }: TaskListProps) {
  if (!tasks.length) {
    return <p className="text-sm text-zinc-500">No tasks for today.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onStatusChange={onStatusChange} />
      ))}
    </ul>
  );
}
