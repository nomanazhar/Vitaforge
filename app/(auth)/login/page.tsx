import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Sign In · VitaForge",
  description: "Welcome back. Redefine your strength with VitaForge.",
};

export default function LoginPage() {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background soft glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink/10 blur-[120px] rounded-full" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Branding & Community */}
        <div className="hidden lg:flex flex-col gap-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            <div className="text-[12px] font-black text-primary uppercase tracking-[2px]">Elevate your performance</div>
            <h1 className="text-[80px] leading-[1] font-black tracking-tight text-slate-dark">
              Redefine<br />
              <span className="text-gradient-primary">Your Strength.</span>
            </h1>
          </div>
          
          <p className="text-lg text-slate-muted max-w-[480px] leading-relaxed font-medium">
            Experience the next generation of fitness tracking. VitaForge combines ethereal design with peak-performance data analytics.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative w-12 h-12 rounded-full border-4 border-background overflow-hidden shadow-lg">
                  <Image
                    src={`/images/auth/avatar_${i}.png`}
                    alt={`Athlete ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm font-bold text-slate-muted">
              Join 25,000+ elite athletes
            </div>
          </div>
        </div>

        {/* Right Side: Login Card */}
        <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-1000">
          <div className="glass-card-light w-full max-w-[480px] p-12 rounded-[48px] shadow-2xl shadow-primary/5">
            <div className="mb-10 text-center">
              <div className="text-3xl font-black text-gradient-primary tracking-tighter mb-8">VitaForge</div>
              <h2 className="text-3xl font-black text-slate-dark tracking-tight mb-2">Welcome Back</h2>
              <p className="text-slate-muted font-medium">Enter your details to continue your journey.</p>
            </div>

            <form className="space-y-6">
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
                    placeholder="name@example.com"
                    className="w-full bg-[#f1f0f480] border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 font-medium text-slate-dark"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-muted uppercase tracking-widest px-2 flex justify-between">
                  <span>Password</span>
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-muted">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-[#f1f0f480] border-none rounded-2xl py-4 pl-14 pr-14 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 font-medium text-slate-dark"
                  />
                  <button type="button" className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-muted hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="remember" className="w-5 h-5 rounded border-none bg-[#f1f0f480] text-primary focus:ring-primary/20" />
                  <label htmlFor="remember" className="text-sm text-slate-muted font-medium">Remember me</label>
                </div>
                <Link href="#" className="text-sm font-bold text-primary hover:opacity-80 transition-opacity">Forgot Password?</Link>
              </div>

              <button type="submit" className="w-full py-4 rounded-full bg-gradient-ready text-white font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform mt-4">
                Login
              </button>
            </form>

            {/* Social Login */}
            <div className="relative flex items-center gap-4 my-10">
              <div className="flex-1 h-[1px] bg-slate-100" />
              <span className="text-[10px] font-black text-slate-200 uppercase tracking-widest">Or continue with</span>
              <div className="flex-1 h-[1px] bg-slate-100" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-4 bg-[#f1f0f480] rounded-2xl hover:bg-[#f1f0f4] transition-colors">
                <div className="w-5 h-5 bg-slate-900 rounded-sm" />
                <span className="text-sm font-bold text-slate-dark">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-4 bg-[#f1f0f480] rounded-2xl hover:bg-[#f1f0f4] transition-colors">
                <div className="w-5 h-5 bg-slate-900 rounded-sm" />
                <span className="text-sm font-bold text-slate-dark">Apple</span>
              </button>
            </div>

            <div className="text-center mt-10">
              <p className="text-sm text-slate-muted font-medium">
                New to VitaForge? <Link href="/signup" className="text-primary font-bold">Create account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
