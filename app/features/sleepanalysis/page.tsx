import Link from "next/link";
import AppSidebar from "../../../components/AppSidebar";

export const metadata = {
  title: "Sleep Analysis & Circadian Alignment · VitaForge",
  description: "Circadian alignment and recovery optimization tools.",
};

export default function SleepAnalysisPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] pt-12 pb-24 px-6 md:px-8">
      <AppSidebar />
      <main className="max-w-[1280px] mx-auto flex flex-col gap-8 lg:ml-72">
        <span className="text-[11px] font-bold text-[#6D28D9] tracking-[2.2px] uppercase">
          Recovery Metrics
        </span>
        <h1 className="text-4xl font-black text-[#2D2F31] tracking-tight">
          Sleep Analysis & Circadian Alignment
        </h1>
        <p className="text-base text-[#5A5B5E] max-w-xl leading-relaxed">
          Monitor your recovery, track deep sleep cycle durations, and align your schedule with your natural circadian rhythms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="glass-card p-8 rounded-[24px] bg-white border border-slate-200/50">
            <h3 className="text-xl font-bold text-[#2D2F31] mb-2">Sleep Stage Tracking</h3>
            <p className="text-sm text-[#5A5B5E] leading-relaxed mb-4">
              Break down light, deep, and REM sleep phases to correlate behavior changes with recovery scores.
            </p>
            <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Coming Soon</span>
          </div>
          <div className="glass-card p-8 rounded-[24px] bg-white border border-slate-200/50">
            <h3 className="text-xl font-bold text-[#2D2F31] mb-2">Circadian Sync</h3>
            <p className="text-sm text-[#5A5B5E] leading-relaxed mb-4">
              Get personalized sleep/wake time suggestions based on your daylight exposure and physical activity metrics.
            </p>
            <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Coming Soon</span>
          </div>
        </div>
      </main>
    </div>
  );
}
