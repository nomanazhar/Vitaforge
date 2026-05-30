import Link from "next/link";
import Image from "next/image";
import AppSidebar from "../../../components/AppSidebar";

export const metadata = {
  title: "Diet & Nutrition Plan · VitaForge",
  description: "AI-driven precision nutrition, macros tracking, and meal planning.",
};

export default function DietProgramsPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] pt-24 pb-32 relative">
      <AppSidebar />
      {/* Page Content Container */}
      <main className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col gap-10 lg:ml-72">
        
        {/* Daily Summary / Intake Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Calorie Card (Left - 5 Cols) */}
          <div className="lg:col-span-5 bg-white/60 backdrop-blur-md border border-white/20 shadow-[0_40px_60px_rgba(0,0,0,0.04)] rounded-[24px] p-8 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
            {/* Soft Ambient Blob */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#604F9E]/5 blur-2xl rounded-full pointer-events-none" />
            
            <div className="flex flex-col gap-2 z-10">
              <span className="text-[12px] font-bold text-[#604F9E] tracking-[1.6px] uppercase">
                Daily Intake
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-[48px] font-black text-[#2D2F31] leading-none tracking-tight">
                  1,840
                </span>
                <span className="text-base text-[#5A5B5E] font-medium">
                  / 2,400 kcal
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-[#E8E8EB] rounded-full overflow-hidden relative z-10 mt-4">
              <div 
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#604F9E] to-[#BAA7FE] rounded-full shadow-[0_0_8px_rgba(96,79,158,0.2)]" 
                style={{ width: "76.6%" }}
              />
            </div>
          </div>

          {/* Macro Bento Grid (Right - 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Protein Card */}
            <div className="bg-white border border-slate-100 shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-2xl p-6 flex flex-col justify-between min-h-[180px] relative">
              <div className="flex justify-between items-start">
                <div className="w-9 h-9 bg-pink-50 rounded-xl flex items-center justify-center text-[#A7295A]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-[12px] font-bold text-[#5A5B5E]">75%</span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#5A5B5E] tracking-wider uppercase block">
                  Protein
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#2D2F31]">135g</span>
                  <span className="text-xs text-[#767779]">/ 180g</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-[#F1F0F4] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#A7295A] rounded-full" style={{ width: "75%" }} />
              </div>
            </div>

            {/* Carbs Card */}
            <div className="bg-white border border-slate-100 shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-2xl p-6 flex flex-col justify-between min-h-[180px] relative">
              <div className="flex justify-between items-start">
                <div className="w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center text-[#604F9E]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-[12px] font-bold text-[#5A5B5E]">60%</span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#5A5B5E] tracking-wider uppercase block">
                  Carbs
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#2D2F31]">210g</span>
                  <span className="text-xs text-[#767779]">/ 350g</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-[#F1F0F4] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#604F9E] rounded-full" style={{ width: "60%" }} />
              </div>
            </div>

            {/* Fats Card */}
            <div className="bg-white border border-slate-100 shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-2xl p-6 flex flex-col justify-between min-h-[180px] relative">
              <div className="flex justify-between items-start">
                <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center text-[#883A97]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.34a2 2 0 01-1.783 0l-.691-.34a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.34.34a2 2 0 000 2.828l1.245 1.245A9.754 9.754 0 014.605 21H19.39a9.754 9.754 0 01-1.205-1.245l1.245-1.245a2 2 0 000-2.828l-.34-.34z" />
                  </svg>
                </div>
                <span className="text-[12px] font-bold text-[#5A5B5E]">45%</span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#5A5B5E] tracking-wider uppercase block">
                  Fats
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#2D2F31]">36g</span>
                  <span className="text-xs text-[#767779]">/ 80g</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-[#F1F0F4] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#883A97] rounded-full" style={{ width: "45%" }} />
              </div>
            </div>

          </div>
        </section>

        {/* AI Insight / Smart Suggestion Banner */}
        <section className="bg-gradient-to-r from-[#F5F3FF] to-[#FDF4FF] border border-[#EDE9FE] rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white border border-[#EDE9FE] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] flex items-center justify-center text-[#604F9E]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.34a2 2 0 01-1.783 0l-.691-.34a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.34.34a2 2 0 000 2.828l1.245 1.245A9.754 9.754 0 014.605 21H19.39a9.754 9.754 0 01-1.205-1.245l1.245-1.245a2 2 0 000-2.828l-.34-.34z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#362472] leading-tight">Smart Suggestion</h4>
              <p className="text-sm text-[#5A5B5E] mt-0.5">
                Add 20g of protein for dinner to hit your daily goal and optimize muscle recovery.
              </p>
            </div>
          </div>
          <button className="text-sm font-bold text-[#604F9E] hover:opacity-85 transition-opacity whitespace-nowrap">
            View Recipes
          </button>
        </section>

        {/* Meal Schedule & Hydration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Meal Schedule (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Breakfast Section */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-black text-[#2D2F31] tracking-tight">Breakfast</h3>
                <span className="text-sm font-medium text-[#94A3B8]">Target: 600 kcal</span>
              </div>

              {/* Breakfast Meal Card */}
              <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden flex flex-col sm:flex-row items-stretch shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full sm:w-[192px] aspect-square sm:aspect-auto">
                  <Image 
                    src="https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800" 
                    alt="Berry Protein Bowl" 
                    fill 
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-100/50 px-3 py-1 rounded-full text-[10px] font-black text-[#604F9E] uppercase tracking-wider">
                    High Protein
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-xl font-extrabold text-[#2D2F31]">Berry Protein Bowl</h4>
                      <span className="text-sm font-bold text-[#5A5B5E] whitespace-nowrap">420 kcal</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[12px] font-semibold text-[#94A3B8] uppercase tracking-wider">P: 32G</span>
                      <span className="text-[12px] font-semibold text-[#94A3B8] uppercase tracking-wider">C: 45G</span>
                      <span className="text-[12px] font-semibold text-[#94A3B8] uppercase tracking-wider">F: 12G</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="px-6 py-2.5 bg-[#604F9E] text-white font-bold rounded-full text-sm shadow-[0_10px_15px_-3px_rgba(96,79,158,0.2)] hover:scale-105 transition-transform active:scale-95">
                      Mark as Eaten
                    </button>
                    <button className="w-10 h-10 bg-[#F1F0F4] rounded-full flex items-center justify-center text-[#5A5B5E] hover:bg-slate-200 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Lunch Section */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-black text-[#2D2F31] tracking-tight">Lunch</h3>
                <span className="text-sm font-medium text-[#94A3B8]">Target: 800 kcal</span>
              </div>

              {/* Lunch Meal Card */}
              <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden flex flex-col sm:flex-row items-stretch shadow-sm">
                <div className="relative w-full sm:w-[192px] aspect-square sm:aspect-auto">
                  <Image 
                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800" 
                    alt="Zesty Salmon & Quinoa" 
                    fill 
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-100/50 px-3 py-1 rounded-full text-[10px] font-black text-[#A7295A] uppercase tracking-wider">
                    Keto Friendly
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-xl font-extrabold text-[#2D2F31]">Zesty Salmon & Quinoa</h4>
                      <span className="text-sm font-bold text-[#5A5B5E] whitespace-nowrap">650 kcal</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[12px] font-semibold text-[#94A3B8] uppercase tracking-wider">P: 45G</span>
                      <span className="text-[12px] font-semibold text-[#94A3B8] uppercase tracking-wider">C: 38G</span>
                      <span className="text-[12px] font-semibold text-[#94A3B8] uppercase tracking-wider">F: 28G</span>
                    </div>
                  </div>
                  
                  <div>
                    <span className="inline-flex items-center gap-2 px-5 py-2 bg-slate-100 rounded-full text-sm font-bold text-[#5A5B5E]">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      Eaten
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dinner Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-black text-[#2D2F31] tracking-tight">Dinner</h3>

              {/* Log Dinner Card (Empty State) */}
              <div className="bg-[#F1F0F4]/40 border-2 border-dashed border-slate-200 rounded-[32px] p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[186px] hover:bg-[#F1F0F4]/60 transition-colors cursor-pointer group">
                <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center text-[#604F9E] group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#2D2F31]">Log your Dinner</h4>
                  <p className="text-sm text-[#64748B] mt-1">Still have 750 kcal left today</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Hydration & Snacks (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            
            {/* Hydration Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-black text-[#2D2F31] tracking-tight">Hydration</h3>

              <div className="bg-white/70 backdrop-blur-md border border-white/40 shadow-[0_20px_50px_rgba(96,79,158,0.05)] rounded-[32px] p-8 flex flex-col justify-between gap-8 min-h-[388px]">
                
                {/* Header Info */}
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full bg-[#604F9E]/10 flex items-center justify-center text-[#604F9E]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.34a2 2 0 01-1.783 0l-.691-.34a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.34.34a2 2 0 000 2.828l1.245 1.245A9.754 9.754 0 014.605 21H19.39a9.754 9.754 0 01-1.205-1.245l1.245-1.245a2 2 0 000-2.828l-.34-.34z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="text-3xl font-black text-[#2D2F31]">1.8</span>
                      <span className="text-lg font-bold text-[#94A3B8]">L</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#604F9E] tracking-widest uppercase">
                      Goal: 3.0L
                    </span>
                  </div>
                </div>

                {/* Water Glass Grid */}
                <div className="grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4, 5].map((glass) => (
                    <div key={glass} className="bg-[#BAA7FE]/30 rounded-xl h-[69px] flex items-center justify-center text-[#604F9E]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 00-.894.553L2.382 6.09A1 1 0 002 6.5V17a2 2 0 002 2h12a2 2 0 002-2V6.5a1 1 0 00-.382-.41L15.894 2.553A1 1 0 0015 2H5zm10 4.5l-1.5-3H6.5L5 6.5h10z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ))}
                  {[6, 7, 8].map((glass) => (
                    <div key={glass} className="bg-[#F1F0F4] rounded-xl h-[69px] flex items-center justify-center text-[#CBD5E1]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.34a2 2 0 01-1.783 0l-.691-.34a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.34.34a2 2 0 000 2.828l1.245 1.245A9.754 9.754 0 014.605 21H19.39a9.754 9.754 0 01-1.205-1.245l1.245-1.245a2 2 0 000-2.828l-.34-.34z" />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Add Water Button */}
                <button className="w-full py-4 bg-gradient-to-r from-[#604F9E] to-[#D946EF] text-white font-bold rounded-2xl shadow-[0_20px_25px_-5px_rgba(96,79,158,0.2)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                  </svg>
                  Add 250ml
                </button>
              </div>
            </div>

            {/* Quick Snacks Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-black text-[#2D2F31] tracking-tight">Quick Snacks</h3>
              
              <div className="flex flex-col gap-4">
                {/* Almonds Row */}
                <div className="bg-white border border-slate-100 rounded-3xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <Image 
                      src="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=800" 
                      alt="Handful of Almonds" 
                      fill 
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-[#2D2F31] truncate">Handful of Almonds</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">160 kcal • 6g Protein</p>
                  </div>
                  <button className="w-10 h-10 bg-[#604F9E]/10 hover:bg-[#604F9E]/20 text-[#604F9E] rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>

                {/* Apple Row */}
                <div className="bg-white border border-slate-100 rounded-3xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <Image 
                      src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=800" 
                      alt="Green Apple" 
                      fill 
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-[#2D2F31] truncate">Green Apple</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">95 kcal • 25g Carbs</p>
                  </div>
                  <button className="w-10 h-10 bg-[#604F9E]/10 hover:bg-[#604F9E]/20 text-[#604F9E] rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

    
    </div>
  );
}
