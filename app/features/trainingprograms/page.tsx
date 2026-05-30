import Link from "next/link";
import Image from "next/image";
import AppSidebar from "../../../components/AppSidebar";

export const metadata = {
  title: "Training Programs · VitaForge",
  description: "Choose your training style from our elite-curated directory.",
};

export default function TrainingProgramsPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] flex font-sans">
      <AppSidebar />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 flex flex-col items-center pt-16 pb-24 px-6 md:px-12 w-full max-w-[1280px] mx-auto">

        {/* Header Content */}
        <div className="w-full max-w-[896px] flex flex-col gap-3 mb-12">
          <span className="text-[11px] font-bold text-[#604F9E] tracking-[2.2px] uppercase">Personalized Pathways</span>
          <h1 className="text-[48px] md:text-[56px] font-bold text-[#2D2F31] leading-[1.1] tracking-[-1.12px]">
            Choose Your <span className="bg-gradient-to-r from-[#A7295A] to-[#604F9E] bg-clip-text text-transparent">Training Style</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#5A5B5E] leading-[26px] md:leading-[28px] max-w-[672px] mt-2">
            Elevate your performance with our elite-curated directory. From explosive calisthenics to meditative mind training, find the blueprint that speaks to your potential.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="w-full max-w-[896px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Athletic (Large Card) */}
          <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-[24px] bg-slate-900 shadow-sm border border-slate-200/50 min-h-[624px] flex flex-col justify-end p-8">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800"
              alt="Athletic Training"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 shadow-sm">
                  <svg className="w-3.5 h-3.5 text-[#BAA7FE]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[11px] font-bold text-[#BAA7FE] uppercase tracking-[1.1px]">Elite Level</span>
                </div>
              </div>
              <h3 className="text-[36px] font-bold text-white leading-tight">Athletic</h3>
              <p className="text-[15px] text-white/80 max-w-[320px] leading-[22px]">
                High-performance drills designed for speed, agility, and explosive power.
              </p>
            </div>
          </div>

          {/* Basic Fitness */}
          <ProgramCard
            title="Basic Fitness"
            description="Foundation building for a sustainable lifestyle."
            image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800"
          />

          {/* Bodybuilding */}
          <ProgramCard
            title="Bodybuilding"
            description="Hypertrophy focused programs for maximum mass."
            image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800"
          />

          {/* Hybrid Training */}
          <ProgramCard
            title="Hybrid Training"
            description="Blending endurance and strength for the ultimate athlete."
            image="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&w=800"
          />

          {/* Mind Training */}
          <ProgramCard
            title="Mind Training"
            description="Meditation and cognitive drills for peak focus."
            image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800"
            gradient="from-[#A7295A]/80 via-slate-900/40"
          />

          {/* Flexibility Training */}
          <ProgramCard
            title="Flexibility Training"
            description="Unlocking range of motion and injury prevention."
            image="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800"
          />

          {/* Calisthenics */}
          <ProgramCard
            title="Calisthenics"
            description="Mastering bodyweight with precision and flow."
            image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800"
          />

          {/* Home Workouts */}
          <ProgramCard
            title="Home Workouts"
            description="Elite performance, no equipment required."
            image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800"
          />

        </div>

        {/* Floating Action Button / CTA */}
        <div className="w-full max-w-[896px] flex justify-center mt-14">
          <button className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#604F9E] to-[#BAA7FE] rounded-full shadow-[0_20px_50px_rgba(96,79,158,0.3)] hover:scale-105 transition-transform duration-300">
            <span className="text-[12px] font-bold text-white uppercase tracking-[1.2px]">Start Custom Plan</span>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </main>
    </div>
  );
}

function ProgramCard({ title, description, image, gradient = "from-slate-900/90 via-slate-900/30" }: { title: string; description: string; image: string; gradient?: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] bg-slate-900 shadow-sm border border-slate-200/50 min-h-[300px] flex flex-col justify-end p-6 cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
        sizes="(max-width: 1024px) 100vw, 25vw"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient} to-transparent pointer-events-none`} />

      <div className="relative z-10 flex flex-col gap-2 transform transition-transform duration-300 group-hover:-translate-y-1.5">
        <h3 className="text-[20px] font-bold text-white leading-tight">{title}</h3>
        <p className="text-[13px] text-white/70 leading-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
}
