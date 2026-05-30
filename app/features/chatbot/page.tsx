import Link from "next/link";
import Image from "next/image";
import AppSidebar from "../../../components/AppSidebar";

export const metadata = {
  title: "Forge AI · VitaForge",
  description: "Chat with your personal AI fitness coach for real-time guidance and recovery tips.",
};

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] pb-[120px] flex flex-col relative">
      <AppSidebar />
      
      {/* Header Info */}
      <header className="container-custom py-8 flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-[#2D2F31] tracking-tight">Forge AI</h1>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
            <span className="text-xs font-bold text-[#5A5B5E] uppercase tracking-wider">Active Coach</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-white text-primary font-bold text-[10px]">
          AI
        </div>
      </header>

      {/* Chat History Canvas */}
      <main className="container-custom flex-1 flex flex-col gap-10 max-w-4xl mx-auto py-4 lg:ml-72">
        
        {/* AI Welcome Message */}
        <div className="flex items-start gap-4 self-start max-w-[85%]">
          <div className="w-10 h-10 rounded-2xl bg-gradient-ready flex items-center justify-center text-white shadow-lg flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-tr-2xl rounded-br-2xl rounded-bl-2xl p-5">
              <p className="text-base text-[#2D2F31] leading-relaxed">
                Good morning, Alex! You crushed yesterday's HIIT session. Ready to maintain that momentum today?
              </p>
            </div>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest px-1">08:30 AM</span>
          </div>
        </div>

        {/* User Message */}
        <div className="flex items-start gap-4 self-end max-w-[85%] flex-row-reverse">
          <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-lg border-2 border-white flex-shrink-0">
            <Image src="/images/landing/athlete_avatar_2.png" alt="User" width={40} height={40} className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 items-end">
            <div className="bg-primary shadow-lg shadow-primary/20 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl p-5 text-white">
              <p className="text-base leading-relaxed">
                Thanks! My legs are a bit sore today. Should I still stick to the leg day schedule?
              </p>
            </div>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest px-1 text-right">08:32 AM</span>
          </div>
        </div>

        {/* AI Detailed Response with Bento Element */}
        <div className="flex items-start gap-4 self-start max-w-[85%]">
          <div className="w-10 h-10 rounded-2xl bg-gradient-ready flex items-center justify-center text-white shadow-lg flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-tr-2xl rounded-br-2xl rounded-bl-2xl p-5">
              <p className="text-base text-[#2D2F31] leading-relaxed">
                Listen to your body. Since your DOMS (Delayed Onset Muscle Soreness) is high, let's pivot to **Active Recovery**. This will promote blood flow and speed up healing without overtaxing your nervous system.
              </p>
            </div>

            {/* Recommended Activity Bento Card */}
            <div className="bg-white border border-slate-100 shadow-xl rounded-[32px] p-6 flex flex-col gap-6 overflow-hidden relative group">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-pink uppercase tracking-[1.2px]">Suggested Pivot</span>
                <svg className="w-5 h-5 text-pink" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden relative shadow-md">
                  <Image src="/images/landing/gym_progress.png" alt="Activity" fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#2D2F31]">30min Mobility Flow</h4>
                  <p className="text-xs text-[#5A5B5E]">Focus on hip openers and hamstring length.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F1F0F4] rounded-2xl p-3 flex items-center gap-3">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <div>
                    <span className="text-[8px] font-bold text-[#5A5B5E] uppercase block">Duration</span>
                    <span className="text-sm font-bold text-[#2D2F31]">30 MIN</span>
                  </div>
                </div>
                <div className="bg-[#F1F0F4] rounded-2xl p-3 flex items-center gap-3">
                  <svg className="w-4 h-4 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <span className="text-[8px] font-bold text-[#5A5B5E] uppercase block">Est. Burn</span>
                    <span className="text-sm font-bold text-[#2D2F31]">140 KCAL</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-ready text-white rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Start Activity
              </button>
            </div>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest px-1">08:33 AM</span>
          </div>
        </div>

      </main>

      {/* Floating Input Area */}
      <div className="fixed bottom-32 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 z-40">
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[40px] p-4 flex flex-col gap-4">
          
          {/* Suggested Questions */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button className="whitespace-nowrap px-4 py-2 bg-white/80 border border-slate-100 rounded-full text-xs font-medium text-[#5A5B5E] hover:bg-slate-50 transition-colors shadow-sm">
              What's my next workout?
            </button>
            <button className="whitespace-nowrap px-4 py-2 bg-white/80 border border-slate-100 rounded-full text-xs font-medium text-[#5A5B5E] hover:bg-slate-50 transition-colors shadow-sm">
              Give me a healthy dinner idea
            </button>
            <button className="whitespace-nowrap px-4 py-2 bg-white/80 border border-slate-100 rounded-full text-xs font-medium text-[#5A5B5E] hover:bg-slate-50 transition-colors shadow-sm">
              Log my breakfast
            </button>
          </div>

          {/* Actual Input Row */}
          <div className="bg-[#F1F0F4] rounded-full h-14 flex items-center gap-4 px-6">
            <button className="text-slate-400 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="bg-transparent flex-1 text-sm text-[#2D2F31] placeholder-slate-400 outline-none"
            />
            <button className="text-slate-400 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              <svg className="w-5 h-5 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation App Shell (Mobile Style) */}
      <nav className="fixed bottom-0 left-0 right-0 h-[97px] bg-white/70 backdrop-blur-[20px] border-t border-slate-100 flex justify-around items-center px-10 rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.04)] z-50">
        <NavItem label="Home" icon="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <NavItem label="Workouts" icon="M13 10V3L4 14H11V21L20 10H13Z" />
        <NavItem label="Diet" icon="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        <NavItem label="Assistant" icon="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" active />
        <NavItem label="Profile" icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </nav>
    </div>
  );
}

function NavItem({ label, icon, active = false }: { label: string; icon: string; active?: boolean }) {
  return (
    <Link href={`/${label.toLowerCase() === 'home' ? '' : label.toLowerCase()}`} className={`flex flex-col items-center justify-center gap-1 group relative ${active ? 'px-6 py-2 bg-gradient-ready rounded-2xl shadow-lg shadow-primary/20' : ''}`}>
      <svg className={`w-5 h-5 transition-colors ${active ? 'text-white' : 'text-slate-400 group-hover:text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
      </svg>
      <span className={`text-[10px] font-bold uppercase tracking-widest ${active ? 'text-white' : 'text-slate-400 group-hover:text-primary'}`}>
        {label}
      </span>
      {active && (
        <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm -z-10" />
      )}
    </Link>
  );
}
