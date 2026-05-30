import Link from "next/link";
import Image from "next/image";
import AppSidebar from "../../../components/AppSidebar";
import TodayFocusBox from "../../../components/TodayFocusBox";

export const metadata = {
  title: "Mindful Rituals · VitaForge",
  description: "Organize your wellness journey with recurring reminders and custom health tasks.",
};

export default function RitualsPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] pb-20 relative">
      <AppSidebar />
      {/* Floating Action Button */}
      <button className="fixed bottom-12 right-12 w-16 h-16 bg-gradient-ready rounded-full flex items-center justify-center text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:scale-110 active:scale-95 transition-all z-50 group">
        <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
        </svg>
      </button>

      <main className="max-w-[1280px] mx-auto px-6 md:px-8 pt-24 flex flex-col gap-12 lg:ml-72">
        
        {/* Header Section */}
        <section className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-[56px] font-black text-[#2D2F31] leading-[1.1] tracking-tight">Mindful Rituals</h1>
          <p className="text-base text-[#5A5B5E] leading-relaxed">
            Organize your wellness journey. Set recurring reminders for daily vitals and manage custom health tasks to maintain your peak performance.
          </p>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Active Reminders */}
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-xl font-bold text-[#2D2F31] tracking-tight">Active Reminders</h2>
              </div>
              <button className="px-6 py-2 bg-gradient-ready text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:opacity-90">+ Remind Me</button>
            </div>

            <div className="bg-white border border-slate-100 shadow-[0_8px_32px_rgba(0,0,0,0.02)] rounded-[32px] p-8 flex flex-col gap-6">
              <ReminderItem 
                title="Take Vitamins" 
                frequency="EVERY MORNING" 
                time="08:30 AM" 
                icon="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                active
              />
              <ReminderItem 
                title="Drink Water" 
                frequency="EVERY 2 HOURS" 
                time="12:00 PM" 
                icon="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.34a2 2 0 01-1.783 0l-.691-.34a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.34.34a2 2 0 000 2.828l1.245 1.245A9.754 9.754 0 014.605 21H19.39a9.754 9.754 0 01-1.205-1.245l1.245-1.245a2 2 0 000-2.828l-.34-.34z"
                active
              />
              <ReminderItem 
                title="Post-Workout Stretch" 
                frequency="MON, WED, FRI" 
                time="06:00 PM" 
                icon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </div>

            {/* Pro Tip Card */}
            <div className="relative rounded-[40px] overflow-hidden group h-[192px]">
              <Image 
                src="/images/landing/gym_progress.png" 
                alt="Mindfulness" 
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 gap-3">
                <span className="w-fit px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">Pro Tip</span>
                <h3 className="text-xl font-bold text-white max-w-xs leading-tight">
                  Consistent habits are built through small, timely wins.
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Today's Focus (interactive) */}
          <div className="flex flex-col gap-8">
            <TodayFocusBox />
          </div>

        </div>
      </main>
    </div>
  );
}

function ReminderItem({ title, frequency, time, icon, active = false }: { title: string; frequency: string; time: string; icon: string; active?: boolean }) {
  return (
    <div className="flex justify-between items-center p-4 bg-[#F1F0F4]/50 rounded-2xl group hover:bg-[#F1F0F4] transition-colors">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-bold text-[#2D2F31] leading-tight">{title}</h3>
          <p className="text-[12px] font-medium text-[#5A5B5E] uppercase tracking-wider">{frequency} • {time}</p>
        </div>
      </div>
      <div className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer ${active ? 'bg-primary' : 'bg-[#DCDCE1]'}`}>
        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${active ? 'translate-x-5' : ''}`} />
      </div>
    </div>
  );
}

function TaskItem({ title, description, checked = false, priority }: { title: string; description: string; checked?: boolean; priority?: 'HIGH' | 'LOW' }) {
  return (
    <div className={`flex items-center gap-4 p-5 rounded-3xl transition-all ${checked ? 'bg-[#F1F0F4]/10 opacity-60' : 'bg-[#F1F0F4]/30 hover:bg-[#F1F0F4]/50'}`}>
      <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-colors cursor-pointer ${checked ? 'bg-primary border-primary' : 'border-primary/40 hover:border-primary'}`}>
        {checked && (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex justify-between items-center">
          <h3 className={`text-base font-semibold text-[#2D2F31] leading-tight ${checked ? 'line-through opacity-80' : ''}`}>{title}</h3>
          {priority && (
            <span className={`px-2 py-0.5 rounded text-[10px] font-black tracking-widest ${priority === 'HIGH' ? 'bg-pink/10 text-pink' : 'bg-slate-200 text-slate-500'}`}>
              {priority}
            </span>
          )}
        </div>
        <p className="text-xs text-[#5A5B5E] leading-relaxed line-clamp-1">{description}</p>
      </div>
    </div>
  );
}
