import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "My Profile · VitaForge",
  description: "View your achievements, community progress, and manage your account.",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] pt-10 pb-20">
      <main className="container-custom flex flex-col gap-12">
        
        {/* Profile Hero Section */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="relative w-[160px] h-[160px]">
            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-pink opacity-20 blur-[20px] rounded-full" />
            {/* Avatar Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-pink rounded-full p-[6px]">
              <div className="w-full h-full bg-white rounded-full p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/auth/avatar_1.png"
                    alt="Profile Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Level Badge */}
            <div className="absolute right-4 bottom-0 bg-primary border-2 border-white rounded-full px-3 py-0.5 shadow-lg z-10">
              <span className="text-[10px] font-bold text-white uppercase">Lvl 14</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start gap-4">
            <h1 className="text-[48px] font-normal tracking-tight text-[#2D2F31] leading-none">
              Elena Sterling
            </h1>
            <p className="text-lg font-normal tracking-[1.8px] text-[#5A5B5E] uppercase opacity-80">
              Level 14 - Fitness Enthusiast
            </p>
            <div className="flex gap-3 pt-2">
              <button className="px-8 py-3 bg-gradient-ready text-white rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit Profile
              </button>
              <button className="px-8 py-3 bg-white text-[#2D2F31] border border-slate-100 rounded-full font-bold text-sm shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Goals
              </button>
            </div>
          </div>
        </div>

        {/* Bento Grid: Achievements & Utilities */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Achievements Card */}
          <div className="lg:col-span-2 bg-white rounded-[32px] p-8 shadow-card flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#2D2F31] tracking-tight">Earned Achievements</h2>
              <button className="text-sm font-bold text-primary hover:opacity-80">View All</button>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              <BadgeItem label="Early Riser" color="bg-pink/10" iconColor="text-pink" icon="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              <BadgeItem label="Fast Finish" color="bg-primary/10" iconColor="text-primary" icon="M13 10V3L4 14H11V21L20 10H13Z" />
              <BadgeItem label="10K Master" color="bg-tertiary/10" iconColor="text-tertiary" icon="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              <BadgeItem label="Ultra Run" color="bg-slate-100" iconColor="text-slate-400" icon="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" locked />
            </div>
          </div>

          {/* Utilities Column */}
          <div className="flex flex-col gap-4">
            <UtilityLink label="Subscription" icon="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" color="bg-violet-50 text-violet-600" />
            <UtilityLink label="Privacy Settings" icon="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" color="bg-pink-50 text-pink" />
            <button className="w-full py-4 bg-[#F1F0F4] rounded-[24px] text-sm font-bold text-[#5A5B5E] hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout Account
            </button>
          </div>
        </div>

        {/* Community Feed Section */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
              <h2 className="text-[30px] font-black tracking-tight text-[#2D2F31]">Community Feed</h2>
              <p className="text-base text-[#5A5B5E]">Stay inspired by your circle's progress</p>
            </div>
            <div className="bg-slate-200/50 p-1 rounded-full flex gap-1">
              <button className="px-6 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-sm">Friends</button>
              <button className="px-6 py-2 text-[#5A5B5E] rounded-full text-sm font-bold">Global</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Marcus Chen - Diet Log */}
            <div className="bg-white rounded-[32px] p-6 shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                  <Image src="/images/auth/avatar_2.png" alt="Marcus" width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2D2F31]">Marcus Chen</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">2 Hours Ago</div>
                </div>
              </div>
              <div className="relative h-40 rounded-2xl overflow-hidden bg-emerald-50 flex items-center justify-center">
                {/* Fallback pattern for diet image since I can't generate it right now */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20" />
                <div className="relative z-10 text-emerald-600 flex flex-col items-center gap-1">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-[10px] font-black uppercase tracking-widest">Healthy Choice</span>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                  Diet Log
                </div>
              </div>
              <p className="text-sm text-[#5A5B5E] leading-relaxed">
                "Hitting those macro goals today! Persistence pays off."
              </p>
              <div className="flex gap-4 text-slate-400 font-bold text-xs pt-2">
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/></svg> 24</span>
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/></svg> 3</span>
              </div>
            </div>

            {/* 5K Run Challenge */}
            <div className="bg-gradient-to-br from-[#7C3AED] to-[#D946EF] rounded-[32px] p-8 relative overflow-hidden text-white shadow-xl flex flex-col justify-between min-h-[300px]">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 blur-2xl rounded-full" />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black uppercase tracking-widest">
                  Global Challenge
                </div>
                <h3 className="text-[24px] font-black leading-tight">5K Run Challenge</h3>
                <p className="text-sm text-white/80 leading-relaxed max-w-[240px]">
                  Join 2,400 others this weekend and push your limits.
                </p>
              </div>
              <div className="relative z-10 flex flex-col gap-4 mt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#544391] overflow-hidden bg-slate-200">
                      <Image src={`/images/auth/avatar_${i}.png`} alt="User" width={32} height={32} className="object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-[#544391] bg-white/20 backdrop-blur-md flex items-center justify-center text-[10px] font-bold">
                    +12
                  </div>
                </div>
                <button className="w-full py-4 bg-white text-primary rounded-2xl font-bold text-base hover:scale-105 transition-transform">
                  Join Challenge
                </button>
              </div>
            </div>

            {/* Sarah Jenkins - Workout */}
            <div className="bg-white rounded-[32px] p-6 shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                  <Image src="/images/auth/avatar_3.png" alt="Sarah" width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2D2F31]">Sarah Jenkins</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">4 Hours Ago</div>
                </div>
              </div>
              <div className="relative h-40 rounded-2xl overflow-hidden bg-slate-100">
                <Image src="/images/landing/gym_progress.png" alt="Workout" fill sizes="(max-width: 768px) 100vw, 384px" className="object-cover" />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-primary uppercase tracking-widest">
                  Workout
                </div>
              </div>
              <p className="text-sm text-[#5A5B5E] leading-relaxed">
                "New personal best on leg day! Feel the burn."
              </p>
              <div className="flex gap-4 text-slate-400 font-bold text-xs pt-2">
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/></svg> 56</span>
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/></svg> 12</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BadgeItem({ label, color, iconColor, icon, locked = false }: { label: string; color: string; iconColor: string; icon: string; locked?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-3 min-w-[80px] ${locked ? 'opacity-40' : ''}`}>
      <div className={`w-20 h-20 rounded-3xl ${color} flex items-center justify-center shadow-sm`}>
        <svg className={`w-8 h-8 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
        </svg>
      </div>
      <span className="text-[10px] font-black text-[#2D2F31] text-center uppercase tracking-widest">{label}</span>
    </div>
  );
}

function UtilityLink({ label, icon, color }: { label: string; icon: string; color: string }) {
  return (
    <Link href="#" className="flex items-center justify-between p-5 bg-white rounded-[24px] shadow-sm hover:translate-x-1 transition-all">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-2xl ${color}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
          </svg>
        </div>
        <span className="text-base font-bold text-[#2D2F31]">{label}</span>
      </div>
      <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
