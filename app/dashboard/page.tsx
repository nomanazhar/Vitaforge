import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dashboard · VitaForge",
  description: "Track your fitness journey with VitaForge's intelligent dashboard.",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F9]">
      <main className="container-custom py-10 flex flex-col gap-10">
        {/* Section - Hero Greeting */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[56px] font-normal tracking-tight text-[#2D2F31]">
            Good Morning, <span className="font-bold">Alex</span>
          </h1>
          <p className="text-base text-[#5A5B5E]">
            You're on a 14-day streak. Keep the momentum!
          </p>
        </div>

        {/* Main Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left & Middle Columns (Col span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Progress Rings Glass Card */}
            <div className="relative overflow-hidden bg-white/60 backdrop-blur-[10px] border border-white/20 shadow-card rounded-[32px] p-8 min-h-[320px]">
              {/* Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[50px] rounded-full" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Circular Progress Ring Placeholder */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[12px] border-[#E2E2E6]" />
                  <div className="absolute inset-4 rounded-full border-[12px] border-primary/20" />
                  <div className="absolute inset-8 rounded-full border-[12px] border-pink/20" />
                  <div className="flex flex-col items-center">
                    <span className="text-[30px] font-bold text-[#2D2F31]">75%</span>
                    <span className="text-[11px] font-bold text-[#5A5B5E] tracking-[0.5px] uppercase">Overall</span>
                  </div>
                </div>

                {/* Vitality Stats */}
                <div className="flex-1 flex flex-col gap-6">
                  <h3 className="text-xl font-normal text-[#2D2F31]">Today's Vitality</h3>
                  <div className="space-y-6">
                    <VitalityBar label="Workouts" value="75%" color="bg-primary" />
                    <VitalityBar label="Hydration" value="2.4 / 3.2L" color="bg-pink" percentage="70%" />
                    <VitalityBar label="Sleep" value="7h 45m" color="bg-tertiary" percentage="80%" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Steps Card */}
              <div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-[#5A5B5E] tracking-[0.5px] uppercase">Steps</span>
                </div>
                <div>
                  <div className="text-[24px] font-normal text-[#2D2F31]">12,482</div>
                  <div className="text-[12px] font-normal text-green-600">↑ 12% from yesterday</div>
                </div>
              </div>

              {/* Calories Card */}
              <div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="p-2 rounded-xl bg-pink/10">
                    <svg className="w-4 h-4 text-pink" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-[#5A5B5E] tracking-[0.5px] uppercase">Calories</span>
                </div>
                <div className="space-y-2">
                  <div className="text-[24px] font-bold text-[#2D2F31]">1,840 <span className="text-sm font-normal text-[#5A5B5E]">kcal</span></div>
                  <div className="w-full h-1 bg-[#F1F0F4] rounded-full overflow-hidden">
                    <div className="w-[65%] h-full bg-pink rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Workout Preview Card */}
            <div className="bg-white/60 backdrop-blur-[10px] border border-white/20 shadow-card rounded-[32px] overflow-hidden flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 relative min-h-[200px]">
                <Image
                  src="/images/landing/gym_progress.png"
                  alt="Workout Focus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest">
                    Up Next • 10:30 AM
                  </div>
                  <h3 className="text-[24px] font-bold text-[#2D2F31]">Hypertrophy Upper Body</h3>
                  <p className="text-sm text-[#5A5B5E]">45 Minutes • Strength Training • High Intensity</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-3">
                    {[1, 2].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                        <Image src={`/images/auth/avatar_${i}.png`} alt="User" width={32} height={32} className="object-cover" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-800">
                      +12
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-gradient-ready text-white rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                    Start Workout
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Diet & Trends) */}
          <div className="flex flex-col gap-6">
            
            {/* Dietary Balance Card */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col gap-6">
              <h3 className="text-xl font-normal text-[#2D2F31]">Dietary Balance</h3>
              <div className="flex flex-col gap-6">
                <NutrientBar label="Protein" value="142g / 180g" color="bg-primary" percentage="78%" />
                <NutrientBar label="Carbohydrates" value="160g / 220g" color="bg-pink" percentage="72%" />
                <NutrientBar label="Fats" value="52g / 65g" color="bg-tertiary" percentage="80%" />
              </div>
              <div className="pt-6 border-t border-[#E8E8EB] flex justify-between items-center">
                <div>
                  <div className="text-[11px] font-bold text-[#5A5B5E] uppercase">Remaining</div>
                  <div className="text-[20px] font-bold text-[#2D2F31]">542 <span className="text-sm font-normal">kcal</span></div>
                </div>
                <button className="w-10 h-10 rounded-2xl bg-[#F1F0F4] flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Weight Trend Card */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col gap-6">
              <h3 className="text-xl font-normal text-[#2D2F31]">Weight Trend</h3>
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-[30px] font-bold text-[#2D2F31]">78.4</span>
                  <span className="text-sm font-medium text-[#5A5B5E]">kg</span>
                  <span className="text-[12px] font-bold text-green-600 ml-auto">↓ 0.8kg this week</span>
                </div>
              </div>
              {/* Simplified Bar Chart */}
              <div className="flex items-end justify-between h-32 px-1">
                {[60, 55, 58, 52, 48, 40, 30].map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 flex-1">
                    <div 
                      className={`w-full max-w-[32px] rounded-t-lg transition-all ${i === 6 ? 'bg-gradient-ready' : 'bg-[#F1F0F4]'}`}
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[10px] font-bold text-[#5A5B5E] uppercase tracking-tighter">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Quick Action Card */}
            <div className="bg-gradient-to-br from-[#4C1D95] to-[#1E1B4B] rounded-[32px] p-8 relative overflow-hidden text-white shadow-xl">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-2xl rounded-full" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3 3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m0 11c3.87 0 7 3.13 7 7v1H5v-1c0-3.87 3.13-7 7-7m0 2c-2.76 0-5 2.24-5 5v.1c.32-.06.66-.1 1-.1h8c.34 0 .68.04 1 .1V19c0-2.76-2.24-5-5-5z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">VitaForge AI</h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    "Based on your sleep, I recommend shifting today's cardio to low-intensity."
                  </p>
                </div>
                <button className="text-xs font-bold uppercase tracking-[1.2px] text-[#BAA7FE] flex items-center gap-2 hover:text-white transition-colors">
                  Chat with AI <span className="text-lg">→</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

function VitalityBar({ label, value, color, percentage = "75%" }: { label: string; value: string; color: string; percentage?: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <div className="flex-1 space-y-1">
        <div className="flex justify-between text-sm">
          <span className="font-medium text-[#2D2F31]">{label}</span>
          <span className="font-bold text-[#2D2F31]">{value}</span>
        </div>
        <div className="w-full h-1.5 bg-[#E2E2E6] rounded-full overflow-hidden">
          <div className={`h-full ${color} rounded-full`} style={{ width: percentage }} />
        </div>
      </div>
    </div>
  );
}

function NutrientBar({ label, value, color, percentage }: { label: string; value: string; color: string; percentage: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-[#2D2F31]">{label}</span>
        <span className="font-bold text-[#5A5B5E]">{value}</span>
      </div>
      <div className="w-full h-2 bg-[#F1F0F4] rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: percentage }} />
      </div>
    </div>
  );
}
