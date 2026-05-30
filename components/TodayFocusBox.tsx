"use client";

import React, { useState } from "react";

type Task = {
  id: string;
  title: string;
  description?: string;
  checked?: boolean;
  priority?: "HIGH" | "LOW";
};

export default function TodayFocusBox() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Prep meal for tomorrow", description: "Chicken, quinoa, and steamed broccoli", checked: false },
    { id: "2", title: "Buy resistance bands", description: "Visit local fitness store", checked: true },
    { id: "3", title: "Update workout log", description: "Add today's PR in deadlifts", checked: false, priority: "LOW" },
    { id: "4", title: "Call Physiotherapist", description: "Book assessment for knee discomfort", checked: false },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"HIGH" | "LOW" | "">("");

  function addTask() {
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim() || undefined,
      checked: false,
      priority: priority === "" ? undefined : (priority as "HIGH" | "LOW"),
    };
    setTasks((s) => [newTask, ...s]);
    setTitle("");
    setDescription("");
    setPriority("");
  }

  function toggle(id: string) {
    setTasks((s) => s.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
  }

  const completed = tasks.filter(t => t.checked).length;
  const percent = tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <h2 className="text-xl font-bold text-[#2D2F31] tracking-tight">Today's Focus</h2>
        </div>
      </div>

      <div className="bg-white border border-slate-100 shadow-[0_8px_32px_rgba(0,0,0,0.02)] rounded-[32px] p-6 flex flex-col gap-6">
        {/* Input area */}
        <div className="flex flex-col gap-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Entry Title: What's the focus?"
            className="w-full rounded-xl p-4 bg-[#F7F6F9] placeholder:text-[#94A3B8] text-[#2D2F31] outline-none border border-transparent focus:border-primary transition-colors"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write down your plan..."
            className="w-full rounded-xl p-4 bg-[#F7F6F9] placeholder:text-[#94A3B8] text-[#2D2F31] outline-none border border-transparent focus:border-primary transition-colors min-h-[80px] resize-none"
          />
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="priority" checked={priority === ""} onChange={() => setPriority("") } className="hidden" />
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-bold">Normal</span>
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="priority" checked={priority === "HIGH"} onChange={() => setPriority("HIGH")} className="hidden" />
              <span className="px-3 py-1 rounded-full bg-pink/10 text-pink text-xs font-bold">High</span>
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="priority" checked={priority === "LOW"} onChange={() => setPriority("LOW")} className="hidden" />
              <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold">Low</span>
            </label>
            <div className="ml-auto flex items-center gap-3">
              <span className="text-sm text-[#5A5B5E]">{completed} / {tasks.length} done</span>
              <button
                onClick={addTask}
                className="px-4 py-2 bg-gradient-ready text-white rounded-full text-sm font-bold shadow-lg hover:opacity-95"
              >
                Add to Journal
              </button>
            </div>
          </div>
        </div>

        {/* Task list */}
        <div className="flex flex-col gap-3">
          {tasks.map((t) => (
            <div key={t.id} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${t.checked ? 'bg-[#F1F0F4]/10 opacity-80' : 'bg-[#F1F0F4]/30 hover:bg-[#F1F0F4]/50'}`}>
              <button onClick={() => toggle(t.id)} className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-colors ${t.checked ? 'bg-primary border-primary' : 'border-primary/40 hover:border-primary'}`}>
                {t.checked && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className={`text-base font-semibold text-[#2D2F31] leading-tight truncate ${t.checked ? 'line-through opacity-80' : ''}`}>{t.title}</h3>
                  {t.priority && (
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black tracking-widest ${t.priority === 'HIGH' ? 'bg-pink/10 text-pink' : 'bg-slate-200 text-slate-500'}`}>
                      {t.priority}
                    </span>
                  )}
                </div>
                {t.description && <p className="text-xs text-[#5A5B5E] leading-relaxed line-clamp-2">{t.description}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Tracker */}
        <div className="bg-gradient-to-br from-[#F1F0F4] to-[#E8E8EB] rounded-3xl p-4 flex flex-col gap-3 border border-white/50 shadow-inner">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <span className="text-[12px] font-bold text-[#5A5B5E] uppercase tracking-widest">Today's Progress</span>
              <h4 className="text-2xl font-black text-[#2D2F31]">{completed} / {tasks.length} Tasks</h4>
            </div>
            <span className="text-3xl font-black text-primary">{percent}%</span>
          </div>
          <div className="w-full h-3 bg-[#DCDCE1] rounded-full overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 bg-primary rounded-full" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
