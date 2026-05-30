import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Notifications & Settings · VitaForge",
  description: "Stay updated with your latest health milestones and fine-tune your experience.",
};

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] pt-10 pb-20">
      <main className="container-custom flex flex-col gap-12">
        
        {/* Editorial Header Section */}
        <section className="relative overflow-hidden bg-[#F1F0F4] rounded-[32px] p-12 flex flex-col justify-end min-h-[320px]">
          {/* Stylized Illustration Placeholder */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
            <Image 
              src="/images/landing/hero_runner.png" 
              alt="Illustration" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          
          <div className="relative z-10 max-w-2xl flex flex-col gap-4">
            <span className="text-[11px] font-bold text-primary uppercase tracking-[2.2px]">Personal Dashboard</span>
            <h1 className="text-[56px] font-black text-[#2D2F31] leading-[1.1] tracking-tight">
              Focus & <br />
              <span className="text-primary/80">Notifications</span>
            </h1>
            <p className="text-sm text-[#5A5B5E] max-w-md leading-relaxed">
              Stay updated with your latest health milestones and fine-tune your VitaForge experience for peak performance.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Recent Activity */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#2D2F31] tracking-tight">Recent Activity</h2>
              <button className="text-[11px] font-bold text-primary uppercase tracking-widest hover:opacity-80">Mark all as read</button>
            </div>

            <div className="flex flex-col gap-4">
              <NotificationItem 
                title="New Personal Best!"
                description="You've surpassed your previous squat record by 5kg. Keep pushing the limits of your performance."
                time="2M AGO"
                type="strength"
                unread
              />
              <NotificationItem 
                title="Meal Plan Updated"
                description="Your recovery meal suggestions for this evening have been adjusted based on today's high-intensity session."
                time="1H AGO"
                type="meal"
                unread
              />
              <NotificationItem 
                title="Weekly Report Ready"
                description="Check out your heart rate variability and sleep quality trends from the past week."
                time="YESTERDAY"
                type="analytics"
              />
              <NotificationItem 
                title="Coach Feedback"
                description='Marcus left a comment on your lifting technique video. "Excellent depth on the final set."'
                time="2 DAYS AGO"
                type="social"
              />
            </div>
          </div>

          {/* Right Column: Settings & Sidebar */}
          <div className="flex flex-col gap-8">
            
            {/* System Settings Card */}
            <div className="bg-white/60 backdrop-blur-[10px] border border-white/20 shadow-card rounded-[32px] p-8 flex flex-col gap-8">
              <h2 className="text-xl font-bold text-[#2D2F31] tracking-tight">System Settings</h2>
              
              <div className="space-y-8">
                {/* Appearance */}
                <div className="space-y-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Appearance</span>
                  <div className="flex flex-col gap-3">
                    <SettingToggle label="Dark Mode" icon="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    <div className="flex items-center justify-between p-4 bg-[#F1F0F4] rounded-xl">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        <span className="text-sm font-medium">Focus Accents</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary ring-2 ring-white ring-offset-2 ring-offset-primary" />
                        <div className="w-5 h-5 rounded-full bg-pink" />
                        <div className="w-5 h-5 rounded-full bg-tertiary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Communication */}
                <div className="space-y-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Communication</span>
                  <div className="flex flex-col gap-3">
                    <SettingToggle label="Push Notifications" icon="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" active />
                    <SettingToggle label="Email Digests" icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </div>
                </div>

                {/* Security */}
                <div className="space-y-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Security</span>
                  <SettingToggle label="Private Profile" icon="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" active />
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-ready text-white rounded-2xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform mt-4">
                Save Changes
              </button>
            </div>

            {/* Pro Tip Glass Card */}
            <div className="bg-white/60 backdrop-blur-[10px] border border-white/20 shadow-card rounded-[32px] p-8 relative overflow-hidden">
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-slate-900/5 rounded-full blur-2xl" />
              <div className="relative z-10 flex flex-col gap-4">
                <span className="text-[11px] font-bold text-pink uppercase tracking-widest">Pro Tip</span>
                <h3 className="text-lg font-bold text-[#2D2F31]">Optimize Recovery</h3>
                <p className="text-sm text-[#5A5B5E] leading-relaxed">
                  Sync your sleep data to automatically adjust your workout intensity.
                </p>
                <Link href="#" className="text-sm font-bold text-primary flex items-center gap-2 hover:translate-x-1 transition-transform">
                  Learn more <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

function NotificationItem({ title, description, time, type, unread = false }: { title: string; description: string; time: string; type: string; unread?: boolean }) {
  const icons = {
    strength: "M13 10V3L4 14H11V21L20 10H13Z",
    meal: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    analytics: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    social: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  };

  const bgColors = {
    strength: unread ? "bg-primary" : "bg-[#DCDCE1]",
    meal: unread ? "bg-pink" : "bg-[#DCDCE1]",
    analytics: unread ? "bg-tertiary" : "bg-[#DCDCE1]",
    social: unread ? "bg-slate-400" : "bg-[#DCDCE1]"
  };

  return (
    <div className={`p-6 rounded-[24px] border border-white/20 transition-all flex gap-5 ${unread ? 'bg-white/60 backdrop-blur-[10px] shadow-sm' : 'bg-[#F1F0F4] opacity-80'}`}>
      <div className="relative">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm ${bgColors[type as keyof typeof bgColors]}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icons[type as keyof typeof icons]} />
          </svg>
        </div>
        {unread && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink border-2 border-white rounded-full" />
        )}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-bold text-[#2D2F31]">{title}</h3>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{time}</span>
        </div>
        <p className="text-sm text-[#5A5B5E] leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

function SettingToggle({ label, icon, active = false }: { label: string; icon: string; active?: boolean }) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#F1F0F4] rounded-xl">
      <div className="flex items-center gap-3">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
        </svg>
        <span className="text-sm font-medium text-[#2D2F31]">{label}</span>
      </div>
      <div className={`w-11 h-6 rounded-full p-1 transition-colors ${active ? 'bg-primary' : 'bg-[#DCDCE1]'}`}>
        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${active ? 'translate-x-5' : ''}`} />
      </div>
    </div>
  );
}
