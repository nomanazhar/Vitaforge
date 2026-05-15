import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Create Account · VitaForge",
  description: "Begin your journey toward peak performance today.",
};

export default function SignupPage() {
  return (
    <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/auth/signup_bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute left-[10%] top-[40%] hidden lg:block rotate-[-12deg] z-20">
        <div className="glass-card p-6 rounded-3xl flex flex-col items-center gap-3 w-40">
          <div className="w-10 h-10 rounded-full bg-pink/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-pink" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14H11V21L20 10H13Z" />
            </svg>
          </div>
          <div className="text-[10px] font-black text-slate-dark text-center uppercase tracking-tighter">
            Instant AI Analytics
          </div>
        </div>
      </div>

      <div className="absolute right-[10%] bottom-[25%] hidden lg:block rotate-[12deg] z-20">
        <div className="glass-card p-6 rounded-3xl flex flex-col items-center gap-3 w-40">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div className="text-[10px] font-black text-slate-dark text-center uppercase tracking-tighter">
            Personalized Nutrition
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1280px] px-6">
        {/* Branding */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gradient-primary tracking-tighter">VitaForge</h1>
          <p className="text-sm font-bold text-slate-dark mt-1">Forge your ultimate self.</p>
        </div>

        {/* Signup Card */}
        <div className="glass-card-light w-full max-w-[640px] p-12 rounded-[48px] shadow-2xl shadow-black/10">
          <div className="mb-10">
            <h2 className="text-4xl font-black text-slate-dark tracking-tight mb-2">Create Account</h2>
            <p className="text-slate-muted font-medium">Begin your journey toward peak performance today.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-muted uppercase tracking-widest px-2">Full Name</label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-muted">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Alex Rivera"
                  className="w-full bg-white/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 font-medium text-slate-dark"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-muted uppercase tracking-widest px-2">Email Address</label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-muted">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="alex@vitaforge.fit"
                  className="w-full bg-white/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 font-medium text-slate-dark"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-muted uppercase tracking-widest px-2">Password</label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-muted">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-white/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 font-medium text-slate-dark"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-muted uppercase tracking-widest px-2">Confirm</label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-muted">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-white/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 font-medium text-slate-dark"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" id="terms" className="w-5 h-5 rounded border-none bg-white/50 text-primary focus:ring-primary/20" />
              <label htmlFor="terms" className="text-sm text-slate-muted">
                I agree to the <Link href="#" className="text-primary font-bold">Terms of Service</Link> and <Link href="#" className="text-primary font-bold">Privacy Policy</Link>.
              </label>
            </div>

            <button type="submit" className="w-full py-4 rounded-full bg-gradient-ready text-white font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform mt-4">
              Create Account
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-slate-muted font-bold">
              Already have an account? <Link href="/login" className="text-primary">Login</Link>
            </p>
          </div>

          {/* Social Login */}
          <div className="relative flex items-center gap-4 my-10">
            <div className="flex-1 h-[1px] bg-slate-200" />
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Or continue with</span>
            <div className="flex-1 h-[1px] bg-slate-200" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 bg-white/50 rounded-2xl hover:bg-white transition-colors">
              <div className="w-5 h-5 bg-slate-900 rounded-sm" />
              <span className="text-sm font-bold text-slate-dark">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 bg-white/50 rounded-2xl hover:bg-white transition-colors">
              <div className="w-5 h-5 bg-slate-900 rounded-sm" />
              <span className="text-sm font-bold text-slate-dark">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
