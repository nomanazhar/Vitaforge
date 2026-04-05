// store/useTaskStore.ts
// Zustand store for today's daily tasks.

import { create } from "zustand";
import type { DailyTask, TaskStatus } from "@/types";

interface TaskState {
  tasks: DailyTask[];
  isLoading: boolean;
  setTasks: (tasks: DailyTask[]) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;
  setLoading: (loading: boolean) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  isLoading: false,
  setTasks: (tasks) => set({ tasks, isLoading: false }),
  updateTaskStatus: (taskId, status) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId
          ? { ...t, status, completed_at: status === "completed" ? new Date().toISOString() : undefined }
          : t
      ),
    })),
  setLoading: (isLoading) => set({ isLoading }),
}));
