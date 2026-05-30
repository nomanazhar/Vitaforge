import Link from "next/link";
import Image from "next/image";
import AppSidebar from "../../../components/AppSidebar";

export const metadata = {
  title: "Men's Wellness Hub · VitaForge",
  description: "Unlock your peak human potential with science-backed wellness insights specifically engineered for the modern man's metabolic, mental, and physical performance.",
};

export default function MensWellnessPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] pb-24">
      <AppSidebar />
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-50 w-full h-20 bg-white/60 backdrop-blur-md border-b border-slate-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-between px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex flex-col">
            <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-[#6D28D9] to-[#E879F9] bg-clip-text text-transparent">
              VitaForge
            </h1>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/features/menswellness"
              className="text-base font-semibold text-[#6D28D9] border-b-2 border-[#8B5CF6] py-1 tracking-tight"
            >
              Hub
            </Link>
            <Link
              href="/features/trainingprograms"
              className="text-base font-medium text-[#64748B] hover:text-[#2D2F31] transition-colors py-1 tracking-tight"
            >
              Performance
            </Link>
            <Link
              href="/features/dietprograms"
              className="text-base font-medium text-[#64748B] hover:text-[#2D2F31] transition-colors py-1 tracking-tight"
            >
              Nutrition
            </Link>
          </nav>
        </div>

        {/* User Profile and Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-[#64748B] hover:text-[#2D2F31] rounded-full hover:bg-slate-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="p-2 text-[#64748B] hover:text-[#2D2F31] rounded-full hover:bg-slate-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-[#8B5CF6]/30 overflow-hidden relative">
            <Image
              src="/images/auth/avatar_3.png"
              alt="User profile"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1280px] mx-auto px-6 md:px-8 py-12 flex flex-col gap-16 lg:ml-72">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 max-w-xl">
            <span className="text-[11px] font-bold text-[#604F9E] tracking-[2.2px] uppercase">
              Ethereal Performance
            </span>
            <h2 className="text-[56px] font-black text-[#2D2F31] leading-[1.1] tracking-tight">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#BAA7FE]">
                Peak Human
              </span>{" "}
              <br />
              Potential.
            </h2>
            <p className="text-base md:text-lg text-[#5A5B5E] leading-relaxed">
              Science-backed wellness insights specifically engineered for the modern man's metabolic, mental, and physical performance.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-ready text-white font-bold rounded-full shadow-[0_10px_15px_-3px_rgba(96,79,158,0.2)] hover:scale-105 transition-transform">
                Start Your Journey
              </button>
              <button className="px-8 py-4 bg-white/60 border border-slate-200 backdrop-blur-md text-[#2D2F31] font-bold rounded-full hover:bg-white transition-colors">
                Explore Hub
              </button>
            </div>
          </div>

          <div className="relative w-full aspect-[592/640] rounded-[40px] overflow-hidden shadow-2xl border border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800"
              alt="Male Athlete"
              fill
              sizes="(max-width: 1024px) 100vw, 592px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Floating Metric Card */}
            <div className="absolute bottom-6 left-6 bg-white/75 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl p-6 w-[240px] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#604F9E]/10 flex items-center justify-center text-[#604F9E]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#5A5B5E] uppercase tracking-wider block">Vitals</span>
                  <span className="text-xs font-bold text-[#2D2F31] block">CHECK</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-black text-[#2D2F31]">98.4</span>
                <span className="text-xs text-[#5A5B5E] ml-1">bpm</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#604F9E] to-[#BAA7FE] w-3/4 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Performance Pillars Section */}
        <section className="flex flex-col gap-8">
          <h3 className="text-2xl md:text-3xl font-black text-[#2D2F31] tracking-tight">
            Performance Pillars
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cognitive Sovereignty (Large Card) */}
            <div className="glass-card p-8 rounded-[24px] relative overflow-hidden flex flex-col justify-between min-h-[360px] group border border-slate-200/50 bg-white/60">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#604F9E]/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
              <div className="flex flex-col gap-6 z-10">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-[#EDE9FE] rounded-xl flex items-center justify-center text-[#604F9E]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 bg-[#604F9E]/10 rounded-full text-[9px] font-black text-[#604F9E] uppercase tracking-widest">
                    Premium Guide
                  </span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-[#2D2F31]">Cognitive Sovereignty</h4>
                  <p className="text-sm text-[#5A5B5E] leading-relaxed max-w-xs">
                    Mastering focus and emotional regulation through advanced neuro-protocol integration. Learn how to maintain high-output states without the burnout.
                  </p>
                </div>
              </div>
              <div className="z-10 pt-6">
                <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#604F9E] hover:translate-x-1 transition-transform">
                  Read Research Paper <span className="text-xs">→</span>
                </Link>
              </div>
            </div>

            {/* Metabolic Engine Card */}
            <div className="glass-card p-6 rounded-[24px] bg-white/60 border border-slate-200/50 flex flex-col justify-between min-h-[360px] group">
              <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800"
                  alt="Metabolic Engine"
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold text-[#2D2F31]">Metabolic Engine</h4>
                <p className="text-xs text-[#5A5B5E] leading-relaxed">
                  Precision nutrition strategies for optimized testosterone and insulin sensitivity.
                </p>
              </div>
              <div className="pt-4 flex justify-between items-center border-t border-slate-100">
                <span className="text-[10px] font-bold text-[#A7295A] tracking-wider uppercase">
                  8 Min Read
                </span>
              </div>
            </div>

            {/* Deep Recovery Card */}
            <div className="glass-card p-6 rounded-[24px] bg-white/60 border border-slate-200/50 flex flex-col justify-between min-h-[360px] group">
              <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800"
                  alt="Deep Recovery"
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold text-[#2D2F31]">Deep Recovery</h4>
                <p className="text-xs text-[#5A5B5E] leading-relaxed">
                  The science of circadian alignment and deep-sleep stage extension for hormonal health.
                </p>
              </div>
              <div className="pt-4 flex justify-between items-center border-t border-slate-100">
                <span className="text-[10px] font-bold text-[#604F9E] tracking-wider uppercase">
                  12 Min Read
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Lifespan Extension section (Wide Card) */}
        <section className="w-full bg-[#F1F0F4] rounded-[40px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/40">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#A7295A] rounded-full" />
              <span className="text-[11px] font-bold text-[#5A5B5E] uppercase tracking-widest">
                Lifespan Extension
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#2D2F31] leading-tight tracking-tight">
              The 100-Year Athlete: <br />
              A Protocol for Longevity.
            </h3>
            <p className="text-base text-[#5A5B5E] leading-relaxed max-w-xl">
              Combining traditional resistance training with cellular-level biohacking. Discover why strength is the strongest predictor of all-cause mortality and how to build a body that lasts.
            </p>
            <button className="w-fit px-8 py-4 bg-[#2D2F31] hover:bg-black text-white font-bold rounded-full flex items-center gap-3 transition-colors shadow-lg">
              Read the Manifesto
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </button>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-3xl font-black text-[#604F9E]">22%</span>
                <span className="text-[10px] font-bold text-[#5A5B5E] uppercase tracking-wider mt-1">
                  VO2 Max Increase
                </span>
              </div>
              <div className="bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-3xl font-black text-[#A7295A]">15y</span>
                <span className="text-[10px] font-bold text-[#5A5B5E] uppercase tracking-wider mt-1">
                  Biological Age Shift
                </span>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/40 p-4 rounded-3xl flex items-center justify-between shadow-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 overflow-hidden relative">
                    <Image
                      src={`/images/auth/avatar_${i}.png`}
                      alt="Avatar"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-[#5A5B5E]">
                +4.2k Active Practitioners
              </span>
            </div>
          </div>
        </section>

        {/* Performance Analytics Section */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-1">
              <h3 className="text-2xl md:text-3xl font-black text-[#2D2F31] tracking-tight">
                Performance Analytics
              </h3>
              <p className="text-sm text-[#5A5B5E]">
                Aggregate benchmarks for the VitaForge elite cohort.
              </p>
            </div>
            {/* Daily/Weekly Toggle */}
            <div className="bg-[#E8E8EB] p-1 rounded-full flex gap-1">
              <button className="px-5 py-1.5 bg-white text-[10px] font-bold text-[#2D2F31] rounded-full uppercase tracking-wider shadow-sm">
                Daily
              </button>
              <button className="px-5 py-1.5 text-[10px] font-bold text-[#5A5B5E] rounded-full uppercase tracking-wider hover:text-[#2D2F31]">
                Weekly
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Activity Ring Visualization */}
            <div className="lg:col-span-4 bg-white/60 backdrop-blur-md border border-slate-200/50 rounded-[32px] p-8 flex flex-col items-center justify-between min-h-[360px] shadow-sm">
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* SVG Progress Rings */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Outer Ring Background */}
                  <circle cx="50" cy="50" r="40" stroke="#E8E8EB" strokeWidth="6" fill="transparent" />
                  {/* Outer Ring Value (Endurance) */}
                  <circle cx="50" cy="50" r="40" stroke="#604F9E" strokeWidth="6" fill="transparent"
                    strokeDasharray="251.2" strokeDashoffset="40.2" strokeLinecap="round" />
                  
                  {/* Inner Ring Background */}
                  <circle cx="50" cy="50" r="30" stroke="#E8E8EB" strokeWidth="6" fill="transparent" />
                  {/* Inner Ring Value (Hypertrophy) */}
                  <circle cx="50" cy="50" r="30" stroke="#A7295A" strokeWidth="6" fill="transparent"
                    strokeDasharray="188.4" strokeDashoffset="37.6" strokeLinecap="round" />
                </svg>

                {/* Ring Center Text */}
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-[#2D2F31]">84%</span>
                  <span className="text-[9px] font-bold text-[#5A5B5E] uppercase tracking-wider">
                    Daily Goal
                  </span>
                </div>
              </div>

              {/* Legends */}
              <div className="flex gap-6 w-full justify-center pt-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#604F9E] rounded-full" />
                  <span className="text-xs font-semibold text-[#5A5B5E]">Endurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#A7295A] rounded-full" />
                  <span className="text-xs font-semibold text-[#5A5B5E]">Hypertrophy</span>
                </div>
              </div>
            </div>

            {/* Right Card: Cohort Benchmarks */}
            <div className="lg:col-span-8 bg-white/60 backdrop-blur-md border border-slate-200/50 rounded-[32px] p-8 flex flex-col justify-between shadow-sm">
              <div className="text-[11px] font-bold text-[#5A5B5E] uppercase tracking-widest mb-6">
                Cohort Benchmarks
              </div>

              <div className="flex flex-col gap-6">
                {/* Benchmark Row 1 */}
                <div className="flex justify-between items-center pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#EDE9FE] rounded-xl flex items-center justify-center text-[#604F9E]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#2D2F31]">Lactate Threshold</div>
                      <div className="text-xs text-[#5A5B5E]">Zone 2 Optimization</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-black text-[#2D2F31]">174 bpm</div>
                    <div className="text-[10px] font-bold text-[#604F9E] uppercase tracking-wider">
                      +3.4% VS AVG
                    </div>
                  </div>
                </div>

                {/* Benchmark Row 2 */}
                <div className="flex justify-between items-center pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#FCE7F3] rounded-xl flex items-center justify-center text-[#A7295A]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#2D2F31]">HRV Stability</div>
                      <div className="text-xs text-[#5A5B5E]">Stress Resilience Metric</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-black text-[#2D2F31]">82 ms</div>
                    <div className="text-[10px] font-bold text-[#A7295A] uppercase tracking-wider">
                      Optimal Range
                    </div>
                  </div>
                </div>

                {/* Benchmark Row 3 */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.34a2 2 0 01-1.783 0l-.691-.34a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.34.34a2 2 0 000 2.828l1.245 1.245A9.754 9.754 0 014.605 21H19.39a9.754 9.754 0 01-1.205-1.245l1.245-1.245a2 2 0 000-2.828l-.34-.34z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#2D2F31]">Ketone Levels</div>
                      <div className="text-xs text-[#5A5B5E]">Fasted Morning State</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-black text-[#2D2F31]">1.2 mmol/L</div>
                    <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                      Base Target
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
