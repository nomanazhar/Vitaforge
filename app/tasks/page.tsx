// app/tasks/page.tsx
// Daily task tracker page.
// TODO: Fetch today's tasks from Supabase, persist status updates.

import { TaskList } from "@/components/tasks/TaskList";

export const metadata = {
  title: "Daily Tasks · VitaForge",
  description: "Track your daily fitness and diet tasks.",
};

export default function TasksPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-2">Today&apos;s Tasks</h1>
      <p className="text-sm text-zinc-400 mb-6">
        {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
      </p>
      {/* TODO: Pass real tasks from server component / client hook */}
      <TaskList tasks={[]} />
    </main>
  );
}
