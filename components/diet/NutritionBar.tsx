// components/diet/NutritionBar.tsx
// Visual macro breakdown bar (protein/carbs/fat percentages).
// TODO: Animate width on mount.

"use client";

interface NutritionBarProps {
  protein_g: number;
  carbs_g: number;
  fat_g: number;
}

export function NutritionBar({ protein_g, carbs_g, fat_g }: NutritionBarProps) {
  const total = protein_g + carbs_g + fat_g || 1;
  const pPct = Math.round((protein_g / total) * 100);
  const cPct = Math.round((carbs_g / total) * 100);
  const fPct = 100 - pPct - cPct;

  return (
    <div className="w-full">
      <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
        <div style={{ width: `${pPct}%` }} className="bg-blue-500" title={`Protein ${pPct}%`} />
        <div style={{ width: `${cPct}%` }} className="bg-amber-400" title={`Carbs ${cPct}%`} />
        <div style={{ width: `${fPct}%` }} className="bg-rose-400" title={`Fat ${fPct}%`} />
      </div>
      <div className="flex gap-4 mt-1.5 text-xs text-zinc-400">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />Protein</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />Carbs</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />Fat</span>
      </div>
    </div>
  );
}
