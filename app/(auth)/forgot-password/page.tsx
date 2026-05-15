import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Forgot Password · VitaForge",
  description: "Reset your VitaForge account password.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] relative overflow-hidden flex flex-col">
      {/* Background Ambient Glows */}
      <div className="absolute -left-[10%] -top-[10%] w-[40%] h-[40%] bg-primary/20 blur-[100px] rounded-full" />
      <div className="absolute -right-[10%] -bottom-[10%] w-[40%] h-[40%] bg-pink/10 blur-[100px] rounded-full" />

      {/* Top Navigation */}
      <nav className="relative z-50 h-16 flex items-center justify-between px-10 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <Link href="/" className="text-2xl font-black text-gradient-primary tracking-tighter">
          VitaForge
        </Link>
        <button className="p-2 rounded-full text-slate-400 hover:bg-slate-100 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </button>
      </nav>

      <main className="flex-1 relative z-10 flex flex-col items-center justify-center px-6 py-20">
        
        {/* Support Card - Top Right (Desktop) */}
        <div className="hidden lg:block absolute top-10 right-10 w-96 bg-white/60 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-6 hover:-translate-y-1 transition-transform">
          <div className="flex gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
              <Image src="/images/landing/ai_coach_avatar.png" alt="Support" width={48} height={48} className="object-cover" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#2D2F31]">Need help?</h4>
              <p className="text-sm text-[#5A5B5E] leading-tight">Our performance concierge is available 24/7 to assist with your account.</p>
            </div>
          </div>
          <Link href="#" className="flex items-center justify-between p-4 bg-[#F1F0F4] rounded-2xl hover:bg-slate-200 transition-colors group">
            <span className="text-sm font-bold text-primary">Chat with Support</span>
            <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-10 space-y-4">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-10 h-1 bg-gradient-ready rounded-full" />
            <div className="w-2 h-1 bg-[#DCDCE1] rounded-full" />
          </div>
          <h1 className="text-[56px] font-black text-[#2D2F31] leading-none tracking-tight">
            Reset access.
          </h1>
          <p className="text-lg text-[#5A5B5E] max-w-sm mx-auto">
            Verify your identity to regain control of your performance journey.
          </p>
        </div>

        {/* Reset Card */}
        <div className="w-full max-w-[512px] bg-white/60 backdrop-blur-md border border-white/20 shadow-xl rounded-[32px] p-12 flex flex-col gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-[#5A5B5E] uppercase tracking-widest block ml-1">
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="jane.doe@vitaforge.com"
                className="w-full h-14 px-6 bg-[#F1F0F4] rounded-2xl text-base text-[#2D2F31] focus:ring-2 focus:ring-primary/20 outline-none transition-shadow"
              />
            </div>

            <button className="w-full h-16 bg-gradient-ready text-white rounded-full font-bold text-base shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
              Send Verification Code
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="text-center">
            <Link href="/login" className="text-sm font-bold text-primary hover:opacity-80 transition-opacity">
              Return to login
            </Link>
          </div>

          {/* Partner Logos */}
          <div className="flex justify-center items-center gap-8 opacity-30 saturate-0 pt-4">
            <div className="w-6 h-6 bg-slate-400 rounded-sm" />
            <div className="w-6 h-6 bg-slate-400 rounded-full" />
            <div className="w-6 h-6 bg-slate-400 rounded" />
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-[#F1F0F4] text-center">
        <p className="text-[11px] font-bold text-[#ADADB0] uppercase tracking-widest">
          © 2024 VitaForge Performance Labs. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
