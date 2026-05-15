import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "VitaForge — AI-Powered Fitness Coaching",
  description:
    "Your personalised fitness and diet coaching platform powered by AI. Track workouts, diet, and progress.",
};

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-[120px] pb-[80px] overflow-hidden">
        {/* Large Vertical Background Text */}
        <div className="absolute top-[20%] -right-[150px] rotate-90 text-[192px] font-black text-primary opacity-[0.05] pointer-events-none select-none hidden lg:block">
          VITAFORGE
        </div>

        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <div className="z-10 flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              INTELLIGENT TRACKING
            </div>

            <h1 className="text-[56px] leading-[62px] font-black text-slate-dark tracking-tight max-w-[592px]">
              Take control of your wellness with <span className="text-primary">intelligent tracking</span>
            </h1>

            <p className="text-lg text-slate-muted max-w-[448px] leading-relaxed">
              VitaForge uses advanced AI to monitor your vitals, suggest recovery windows, and optimise your training for peak performance.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/signup"
                className="px-8 py-4 rounded-full bg-gradient-button text-white font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
              >
                Explore Features
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-full glass-card text-primary font-bold border border-slate-muted/15 hover:bg-white/80 transition-all flex items-center gap-2"
              >
                Watch Demo
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </Link>
            </div>

            {/* Hero Features List */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-12 mt-8">
              <FeatureItem icon="🧬" text="Biometric Analysis" />
              <FeatureItem icon="🥗" text="AI Diet Recommendations" />
              <FeatureItem icon="📊" text="Real-time Tracking" />
              <FeatureItem icon="📝" text="Personalised Plans" />
            </div>
          </div>

          {/* Image Side */}
          <div className="relative z-10">
            <div className="relative w-full aspect-[592/740] rounded-[48px] overflow-hidden shadow-2xl shadow-black/25">
              <Image
                src="/images/landing/hero_runner.png"
                alt="Athlete training"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating Stat Card */}
              <div className="absolute bottom-12 -left-12 glass-card p-6 rounded-[32px] flex items-center gap-4 z-20">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                    +1K
                  </div>
                </div>
                <div>
                  <div className="text-[12px] font-bold text-primary tracking-widest uppercase">Community</div>
                  <div className="text-[14px] font-semibold text-slate-dark">Health-conscious users</div>
                </div>
              </div>

              {/* Watch Overlay UI */}
              <div className="absolute top-12 -right-8 glass-card p-5 rounded-[40px] w-[192px] z-20">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-5 h-4.5 bg-pink rounded-sm" />
                  <span className="text-[12px] font-bold text-slate-muted">HEART RATE</span>
                </div>
                <div className="flex items-baseline gap-1 justify-center mb-4">
                  <span className="text-[36px] font-black text-slate-dark">142</span>
                  <span className="text-[12px] font-bold text-slate-muted">BPM</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-pink w-3/4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understand Your Body Section (Bento Grid) */}
      <section className="py-24 bg-white/20 backdrop-blur-[6px]">
        <div className="container-custom">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <h2 className="text-4xl font-black text-slate-dark tracking-tight">
              Understand Your Body Like Never Before
            </h2>
            <p className="text-slate-muted max-w-[672px]">
              We combine cloud-native biometric processing with advanced data analytics to bring you insight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto lg:h-[642px]">
            {/* Metabolic Profile (Large Card) */}
            <div className="md:col-span-2 glass-card-light p-10 rounded-[40px] relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute -right-20 -bottom-20 w-[360px] h-[360px] bg-slate-dark/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
              <div className="z-10">
                <div className="text-[12px] font-bold text-primary tracking-widest uppercase mb-2">Biometrics</div>
                <h3 className="text-2xl font-bold text-slate-dark mb-4">Metabolic Profile & Performance Optimization</h3>
                <p className="text-slate-muted max-w-[384px]">
                  Optimise your training cycles through real-time metabolic data.
                </p>
              </div>
              <div className="z-10 flex items-center gap-8 mt-12 lg:mt-0">
                <button className="w-12 h-12 rounded-full border border-slate-muted/50 flex items-center justify-center hover:bg-slate-dark hover:text-white transition-colors">
                  →
                </button>
                <div className="flex gap-4">
                  <StatPill label="VITALS" value="94%" color="text-primary" />
                  <StatPill label="HRV" value="112" color="text-pink" />
                </div>
              </div>
            </div>

            {/* Side Card 1 (Stress) */}
            <div className="glass-card-light p-10 rounded-[40px] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-pink/10 flex items-center justify-center mb-6">
                <div className="w-6 h-7.5 bg-pink" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">Stress Equilibrium</h3>
              <p className="text-[14px] text-slate-muted leading-relaxed">
                Identify cortisol spikes before they lead to burnout.
              </p>
            </div>

            {/* Bottom Cards */}
            <div className="glass-card-light p-10 rounded-[40px] flex flex-col justify-between">
              <div className="w-8 h-8 bg-purple mb-6" />
              <div>
                <h3 className="text-xl font-bold text-slate-dark mb-2">Sleep Architecture</h3>
                <p className="text-[14px] text-slate-muted leading-relaxed">
                  Optimising your REM cycles through environmental data.
                </p>
              </div>
            </div>

            {/* Ready to start (Gradient Card) */}
            <div className="bg-gradient-ready p-10 rounded-[40px] relative overflow-hidden flex flex-col justify-between text-white">
              <div className="absolute -right-2 -bottom-2 w-36 h-36 bg-white/10 rounded-lg rotate-12" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
                <p className="text-[14px] text-white/80">
                  Join the 1% who take wellness seriously.
                </p>
              </div>
              <Link
                href="/signup"
                className="mt-6 px-6 py-3 bg-white text-primary font-bold rounded-full text-center hover:scale-105 transition-transform"
              >
                Get VitaForge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-24">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-2xl">
              <Image
                src="/images/landing/gym_progress.png"
                alt="Gym tracking"
                fill
                className="object-cover"
              />
              {/* Overlay Stat */}
              <div className="absolute top-1/4 -right-6 glass-card p-4 rounded-3xl flex items-center gap-3">
                <div className="w-3 h-12 bg-primary rounded-full" />
                <div>
                  <div className="text-[10px] font-bold text-slate-muted uppercase">Progress</div>
                  <div className="text-lg font-black text-slate-dark">+12.4%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <h2 className="text-4xl font-black text-slate-dark leading-[45px] tracking-tight">
              Measure Progress That <span className="text-primary">Truly Matters</span>
            </h2>
            <p className="text-lg text-slate-muted leading-relaxed">
              Stop chasing generic metrics. VitaForge measures biological age, recovery capacity, and neuromuscular efficiency to give you a true picture of your evolution.
            </p>
            <div className="flex flex-col gap-6">
              <ProgressItem title="Biological Age Tracking" desc="See how your lifestyle impacts your cellular longevity." />
              <FeatureList icon="✓" text="Neural Readiness Score" subtext="Know exactly when to push and when to rest." />
            </div>
          </div>
        </div>
      </section>

      {/* AI Coach Section */}
      <section className="py-24 bg-white/20 backdrop-blur-[6px] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary/20 blur-[40px] rounded-full" />
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-pink/20 blur-[50px] rounded-full" />

        <div className="container-custom flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm text-primary text-[10px] font-bold uppercase tracking-[2px] mb-4">
            Meet your Personal Coach
          </div>
          <h2 className="text-4xl font-black text-slate-dark text-center mb-16 tracking-tight">
            Your Personal Health Coach
          </h2>

          <div className="w-full max-w-[896px] glass-card p-12 rounded-[48px] relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 rounded-full border-4 border-primary-light/30 p-1 flex-shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/landing/ai_coach_avatar.png"
                  alt="AI Coach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-slate-dark">Forge-AI</span>
                <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-md">PRO</span>
              </div>
              <div className="bg-[#f1f0f480] p-6 rounded-r-2xl rounded-bl-2xl backdrop-blur-md italic text-slate-muted leading-relaxed">
                "Your HRV is lower than usual this morning. I've adjusted today's session from high-intensity intervals to a restorative yoga flow to optimize your recovery window."
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-slate-dark text-white rounded-full text-xs font-bold">Adjust Sessions</button>
                <button className="px-6 py-2 border border-slate-muted rounded-full text-xs font-bold text-slate-muted">See Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white/30 backdrop-blur-[32px] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-20 -bottom-24 w-96 h-96 bg-primary/20 blur-[60px] rounded-full" />
        <div className="absolute -right-24 -top-24 w-64 h-64 bg-pink/20 blur-[50px] rounded-full" />

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1 flex flex-col gap-8">
              <Link href="/" className="text-3xl font-black text-gradient-primary tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">VitaForge</Link>
              <p className="text-[14px] text-slate-muted leading-relaxed max-w-[320px]">
                Intelligent fitness coaching for those who take their health seriously. Join the elite performers.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-xl bg-white/50 shadow-sm flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                    <div className="w-4 h-4 bg-slate-dark" />
                  </div>
                ))}
              </div>
            </div>

            <FooterColumn title="Product" links={["Wearables Sync", "Premium Plans", "For Teams", "API & Devs"]} />
            <FooterColumn title="Science" links={["Biometrics", "Whitepapers", "Partners", "Privacy"]} />
            <FooterColumn title="Company" links={["About Us", "Journal", "Careers", "Support"]} />
          </div>

          <div className="pt-8 border-t border-slate-dark/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-muted uppercase tracking-widest">
            <div>© 2024 VITA FORGE PERFORMANCE SYSTEMS</div>
            <div className="flex gap-10">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg">{icon}</div>
      <span className="text-[14px] font-medium text-slate-dark">{text}</span>
    </div>
  );
}

function StatPill({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="px-4 py-2 bg-[#F1F0F4] rounded-2xl flex flex-col items-center min-w-[64px]">
      <span className="text-[10px] font-bold text-slate-muted uppercase">{label}</span>
      <span className={`text-xl font-black ${color}`}>{value}</span>
    </div>
  );
}

function ProgressItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">✓</div>
      <div>
        <h4 className="font-bold text-slate-dark">{title}</h4>
        <p className="text-[14px] text-slate-muted">{desc}</p>
      </div>
    </div>
  );
}

function FeatureList({ icon, text, subtext }: { icon: string; text: string; subtext: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-slate-dark">{text}</h4>
        <p className="text-[14px] text-slate-muted">{subtext}</p>
      </div>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-[12px] font-bold text-slate-dark uppercase tracking-widest">{title}</h4>
      <ul className="flex flex-col gap-4">
        {links.map(link => (
          <li key={link}>
            <Link href="#" className="text-[14px] font-medium text-slate-muted hover:text-primary transition-colors">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

