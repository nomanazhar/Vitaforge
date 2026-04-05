// components/tasks/TaskCheckbox.tsx
// Custom styled checkbox for task items.

"use client";

interface TaskCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export function TaskCheckbox({ checked, onChange }: TaskCheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
        checked
          ? "bg-emerald-500 border-emerald-500"
          : "border-zinc-600 hover:border-indigo-400"
      }`}
    >
      {checked && (
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
